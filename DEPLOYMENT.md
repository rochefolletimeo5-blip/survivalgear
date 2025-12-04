# Guide de Déploiement Vercel pour SurvivalGear

## Prérequis

1. Un compte Vercel (gratuit) : https://vercel.com
2. Un compte GitHub avec le repository SurvivalGear
3. Une base de données PostgreSQL (Vercel Postgres recommandé)

## Étape 1 : Préparer la Base de Données

### Option A : Vercel Postgres (Recommandé)

1. Aller sur votre dashboard Vercel
2. Créer un nouveau Storage → Postgres
3. Copier l'URL de connexion `DATABASE_URL`

### Option B : Service Externe

Utiliser un service comme :
- Supabase (gratuit) : https://supabase.com
- Railway : https://railway.app
- Neon : https://neon.tech

## Étape 2 : Déploiement sur Vercel

1. **Connexion à Vercel**
   - Aller sur https://vercel.com
   - Se connecter avec GitHub

2. **Import du projet**
   - Cliquer sur "Add New Project"
   - Sélectionner le repository `survivalgear`
   - Cliquer sur "Import"

3. **Configuration du projet**
   - Framework Preset : Next.js (détecté automatiquement)
   - Root Directory : `./`
   - Build Command : `npm run build` (par défaut)
   - Output Directory : `.next` (par défaut)

4. **Variables d'environnement**
   Ajouter toutes ces variables :

   ```
   DATABASE_URL=postgresql://...
   NEXTAUTH_URL=https://votre-site.vercel.app
   NEXTAUTH_SECRET=générer-avec-openssl-rand-base64-32
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=votre-paypal-client-id
   PAYPAL_CLIENT_SECRET=votre-paypal-secret
   PAYPAL_MODE=sandbox
   NEXT_PUBLIC_APP_URL=https://votre-site.vercel.app
   NEXT_PUBLIC_APP_NAME=SurvivalGear
   NEXT_PUBLIC_DEFAULT_CURRENCY=EUR
   IMPORT_AGENT_MARGIN_PERCENTAGE=30
   ```

5. **Déployer**
   - Cliquer sur "Deploy"
   - Attendre quelques minutes

## Étape 3 : Initialiser la Base de Données

Une fois déployé, vous devez exécuter les migrations Prisma :

### Depuis votre machine locale

1. Installer Prisma CLI globalement :
   ```bash
   npm install -g prisma
   ```

2. Définir DATABASE_URL dans votre terminal :
   ```bash
   export DATABASE_URL="postgresql://..."
   ```

3. Exécuter les migrations :
   ```bash
   npx prisma migrate deploy
   ```

## Étape 4 : Configuration PayPal

1. Aller sur https://developer.paypal.com
2. Créer une application sandbox
3. Copier le Client ID et Secret
4. Les ajouter dans les variables d'environnement Vercel
5. Pour la production, créer une app "Live" et changer `PAYPAL_MODE=live`

## Étape 5 : Génération de NEXTAUTH_SECRET

Sur votre machine locale :
```bash
openssl rand -base64 32
```

Copier le résultat dans `NEXTAUTH_SECRET`

## Étape 6 : Import de Produits

Après déploiement, pour importer des produits :

1. Cloner le projet localement
2. Ajouter les URLs dans `scripts/links.txt`
3. Configurer DATABASE_URL en local
4. Exécuter : `npm run import-products`

Les images seront uploadées dans `/public/products/` et seront servies par Vercel.

## Déploiements Automatiques

- Chaque push sur la branche `main` déclenche un déploiement automatique
- Les branches de développement créent des preview deployments

## Monitoring et Logs

1. Dashboard Vercel → votre projet → "Deployments"
2. Voir les logs en temps réel
3. Vérifier les erreurs de build

## Optimisations Recommandées

1. **Activer Edge Functions** pour la performance
2. **Configurer le CDN** pour les images
3. **Activer ISR** (Incremental Static Regeneration) pour les pages produits
4. **Ajouter Analytics** : Vercel Analytics ou Google Analytics

## Support et Dépannage

### Erreur de connexion DB
- Vérifier que DATABASE_URL est correctement configuré
- Vérifier que la DB est accessible depuis Vercel

### Erreur de build
- Vérifier les logs de build dans Vercel
- Tester le build localement : `npm run build`

### Images non affichées
- Vérifier que les images sont dans `/public/products/`
- Vérifier la configuration Next.js des images

## Checklist Finale

- [ ] Base de données configurée et migrations exécutées
- [ ] Toutes les variables d'environnement définies
- [ ] PayPal configuré (sandbox ou live)
- [ ] NEXTAUTH_SECRET généré
- [ ] Premier déploiement réussi
- [ ] Site accessible et fonctionnel
- [ ] Produits importés (optionnel pour commencer)

## Prochaines Étapes

1. Configurer un nom de domaine personnalisé
2. Activer HTTPS (automatique avec Vercel)
3. Configurer les emails transactionnels
4. Ajouter Google Analytics
5. Optimiser le SEO

Pour toute question : consulter la documentation Vercel https://vercel.com/docs
