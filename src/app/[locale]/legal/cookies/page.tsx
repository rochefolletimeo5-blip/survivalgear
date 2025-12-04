export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Politique des Cookies</h1>
      
      <div className="prose max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site web. 
            Il permet au site de mémoriser des informations sur votre visite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Les cookies que nous utilisons</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (panier, session)</li>
            <li><strong>Cookies de performance :</strong> Nous aident à améliorer le site en collectant des statistiques anonymes</li>
            <li><strong>Cookies de préférence :</strong> Mémorisent vos choix (langue, devise)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Gestion des cookies</h2>
          <p>
            Vous pouvez accepter ou refuser les cookies via la bannière affichée lors de votre première visite. 
            Vous pouvez également gérer vos préférences à tout moment dans les paramètres de votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Durée de conservation</h2>
          <p>
            Les cookies sont conservés pour une durée maximale de 13 mois à compter de leur dépôt sur votre terminal.
          </p>
        </section>
      </div>
    </div>
  )
}
