export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
      
      <div className="prose max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">1. Collecte des données</h2>
          <p>
            SurvivalGear collecte les données personnelles suivantes : nom, prénom, adresse email, adresse postale, 
            numéro de téléphone. Ces informations sont nécessaires pour traiter vos commandes et communiquer avec vous.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">2. Utilisation des données</h2>
          <p>
            Vos données personnelles sont utilisées pour : traiter et livrer vos commandes, vous envoyer des 
            confirmations de commande, gérer votre compte client, et vous contacter en cas de besoin concernant 
            votre commande.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">3. Protection des données</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
            personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">4. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation 
            du traitement, de portabilité et d'opposition concernant vos données personnelles. Pour exercer ces droits, 
            contactez-nous à contact@survivalgear.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">5. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer 
            votre navigateur pour refuser les cookies. Consultez notre politique des cookies pour plus d'informations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">6. Partage des données</h2>
          <p>
            Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées avec nos 
            partenaires de livraison et de paiement uniquement dans le cadre de l'exécution de votre commande.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">7. Conservation des données</h2>
          <p>
            Vos données sont conservées pendant la durée nécessaire à l'exécution de nos services et conformément 
            aux obligations légales de conservation.
          </p>
        </section>
      </div>
    </div>
  )
}
