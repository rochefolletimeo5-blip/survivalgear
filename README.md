# SurvivalGear - E-commerce Dropshipping Platform

Site e-commerce 100% fonctionnel pour le dropshipping de matériel outdoor et survie, avec agent d'automatisation pour l'import de produits.

## 🚀 Fonctionnalités

### E-commerce
- ✅ Catalogue produits avec filtres avancés (marque, prix, disponibilité, taille, couleur, poids)
- ✅ Pages produits détaillées avec galerie d'images
- ✅ Panier et système de checkout
- ✅ Intégration PayPal pour les paiements
- ✅ Système de promo codes
- ✅ Avis clients avec notes étoiles
- ✅ Liste de souhaits (wishlist)
- ✅ Recherche de produits avec suggestions
- ✅ Multi-langue (Français/Anglais)
- ✅ Multi-devises (EUR principal)

### Administration
- ✅ Dashboard admin pour gestion produits
- ✅ Gestion des commandes
- ✅ Statistiques de base

### Agent d'Import Automatisé
- ✅ Import depuis AliExpress/Hipobuy via fichier links.txt
- ✅ Téléchargement automatique des images en local
- ✅ Application de marge configurable
- ✅ Gestion des variantes (couleurs, tailles)
- ✅ Logs détaillés de l'import

### Conformité Légale
- ✅ Bandeau RGPD cookies
- ✅ Pages légales (CGV, Confidentialité, Cookies, Mentions légales)
- ✅ Protection acheteur
- ✅ Droit de rétractation 14 jours

## 📋 Prérequis

- Node.js 18+ 
- PostgreSQL 14+
- npm ou yarn

## 🛠️ Installation

1. **Cloner le repository**
```bash
git clone <repository-url>
cd survivalgear
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
```bash
cp .env.example .env
```

Éditer `.env` et renseigner:
- `DATABASE_URL`: URL de connexion PostgreSQL
- `NEXTAUTH_SECRET`: Générer avec `openssl rand -base64 32`
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: ID client PayPal
- `PAYPAL_CLIENT_SECRET`: Secret PayPal

4. **Initialiser la base de données**
```bash
npm run prisma:generate
npm run prisma:migrate
```

5. **Lancer en développement**
```bash
npm run dev
```

Le site sera accessible sur http://localhost:3000

## 📦 Agent d'Import de Produits

### Utilisation

1. **Ajouter des URLs dans `scripts/links.txt`**
```txt
https://www.aliexpress.com/item/1005001234567890.html
https://www.hipobuy.com/product/example-product
```

2. **Configurer la marge (optionnel)**
Dans `.env`:
```
IMPORT_AGENT_MARGIN_PERCENTAGE=30
```

3. **Lancer l'import**
```bash
npm run import-products
```

### Fonctionnement

L'agent va pour chaque URL:
1. Extraire les informations produit (titre, description, prix, images, variantes)
2. Télécharger toutes les images dans `/public/products/[product-slug]/`
3. Appliquer la marge configurée
4. Créer les entrées en base de données

Les logs détaillés s'affichent dans la console.

## 🏗️ Structure du Projet

```
survivalgear/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── [locale]/             # Routes i18n
│   │   │   ├── page.tsx          # Page d'accueil
│   │   │   ├── products/         # Catalogue & produits
│   │   │   ├── cart/             # Panier
│   │   │   ├── checkout/         # Paiement
│   │   │   ├── account/          # Espace client
│   │   │   ├── admin/            # Dashboard admin
│   │   │   └── legal/            # Pages légales
│   │   └── api/                  # API Routes
│   │       └── auth/             # NextAuth
│   ├── components/               # Composants réutilisables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── CookieConsent.tsx
│   ├── lib/                      # Utilitaires
│   │   ├── prisma.ts             # Client Prisma
│   │   ├── auth.ts               # Config NextAuth
│   │   └── utils.ts              # Fonctions utilitaires
│   └── types/                    # Types TypeScript
├── prisma/
│   └── schema.prisma             # Schéma base de données
├── public/
│   └── products/                 # Images produits (local)
├── scripts/
│   ├── import-agent.ts           # Agent d'import
│   └── links.txt                 # URLs à importer
├── messages/                     # Fichiers i18n
│   ├── fr.json
│   └── en.json
└── README.md
```

## 🗄️ Base de Données

### Modèles Principaux

- **User**: Utilisateurs et authentification
- **Product**: Produits avec prix, stock, images
- **ProductVariant**: Variantes (couleur, taille)
- **Category**: Catégories de produits
- **Brand**: Marques
- **Order/OrderItem**: Commandes
- **Review**: Avis clients
- **PromoCode**: Codes promotionnels
- **CartItem**: Panier
- **WishlistItem**: Liste de souhaits

### Commandes Prisma Utiles

```bash
# Générer le client Prisma
npm run prisma:generate

# Créer une migration
npm run prisma:migrate

# Ouvrir Prisma Studio
npm run prisma:studio
```

## 🚀 Déploiement sur Vercel

1. **Pousser le code sur GitHub**

2. **Créer un nouveau projet sur Vercel**
   - Importer depuis GitHub
   - Framework Preset: Next.js
   - Build Command: `npm run build`

3. **Configurer les variables d'environnement**
   Ajouter toutes les variables de `.env.example` dans les paramètres Vercel

4. **Configurer la base de données**
   - Utiliser Vercel Postgres ou un service externe (Railway, Supabase, etc.)
   - Mettre à jour `DATABASE_URL`

5. **Déployer**
   - Vercel déploie automatiquement à chaque push sur main
   - Les images dans `/public/products/` sont servies par Vercel

### Variables d'Environnement Requises

```
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
NEXT_PUBLIC_PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_MODE=sandbox
```

## 🎨 Design

Le design s'inspire de l'esthétique Outdoorline.eu avec:
- Header moderne avec navigation complète
- Sidebar de filtres sur les pages catalogue
- Grille de produits responsive
- Hero banner pleine largeur
- Badges de confiance et protection acheteur
- Footer complet avec liens légaux

## 🌍 Internationalisation

Le site supporte le français et l'anglais via next-intl.

**Ajouter une langue:**
1. Créer `messages/[locale].json`
2. Ajouter la locale dans `src/i18n.ts`
3. Les routes sont automatiquement générées: `/fr/products`, `/en/products`

## 🔐 Sécurité

- Authentification sécurisée avec NextAuth.js et bcrypt
- Validation des données avec Zod
- Protection CSRF intégrée
- Bandeau RGPD pour les cookies
- Paiements sécurisés via PayPal

## 📝 License

Tous droits réservés - SurvivalGear 2024

## 🤝 Support

Pour toute question ou problème:
- Ouvrir une issue sur GitHub
- Consulter la documentation Next.js: https://nextjs.org/docs
- Documentation Prisma: https://www.prisma.io/docs
