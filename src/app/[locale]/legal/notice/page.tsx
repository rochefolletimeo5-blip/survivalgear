export default function LegalNoticePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
      
      <div className="prose max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Éditeur du site</h2>
          <p>
            <strong>Raison sociale :</strong> SurvivalGear<br />
            <strong>Adresse :</strong> [Adresse complète]<br />
            <strong>Email :</strong> contact@survivalgear.com<br />
            <strong>Téléphone :</strong> [Numéro de téléphone]<br />
            <strong>SIRET :</strong> [Numéro SIRET]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Directeur de publication</h2>
          <p>[Nom du directeur de publication]</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, logos) est protégé par le droit d'auteur. 
            Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation expresse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">TVA</h2>
          <p>
            <strong>Numéro de TVA intracommunautaire :</strong> [Numéro TVA]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Médiateur</h2>
          <p>
            En cas de litige, vous pouvez recourir gratuitement à un médiateur de la consommation en vue de la 
            résolution amiable du litige. Coordonnées du médiateur : [À compléter selon législation].
          </p>
        </section>
      </div>
    </div>
  )
}
