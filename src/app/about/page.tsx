export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
          À Propos de SurvivalGear
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <span className="text-8xl">🏕️</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-forest-green mb-4">
              Notre Mission
            </h2>
            <p className="text-gray-700 mb-6">
              Chez SurvivalGear, notre mission est de fournir à tous les passionnés d&apos;outdoor 
              et d&apos;aventure l&apos;équipement de survie de la plus haute qualité. Nous croyons que 
              chaque aventure mérite d&apos;être vécue en toute sécurité et avec le meilleur matériel.
            </p>

            <h2 className="text-3xl font-bold text-forest-green mb-4">
              Notre Histoire
            </h2>
            <p className="text-gray-700 mb-6">
              Fondée par des passionnés d&apos;aventures outdoor, SurvivalGear est née de la volonté 
              de rendre accessible un équipement de survie professionnel à tous. Après des années 
              d&apos;expérience sur le terrain, nous savons exactement ce dont vous avez besoin pour 
              vos expéditions.
            </p>

            <h2 className="text-3xl font-bold text-forest-green mb-4">
              Nos Valeurs
            </h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-forest-green mr-2">✓</span>
                <span><strong>Qualité:</strong> Nous sélectionnons uniquement les meilleurs produits testés en conditions réelles</span>
              </li>
              <li className="flex items-start">
                <span className="text-forest-green mr-2">✓</span>
                <span><strong>Expertise:</strong> Notre équipe est composée d&apos;experts en survie et outdoor</span>
              </li>
              <li className="flex items-start">
                <span className="text-forest-green mr-2">✓</span>
                <span><strong>Service:</strong> Nous sommes là pour vous conseiller et vous accompagner</span>
              </li>
              <li className="flex items-start">
                <span className="text-forest-green mr-2">✓</span>
                <span><strong>Durabilité:</strong> Nous privilégions des produits durables et respectueux de l&apos;environnement</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-forest-green mb-4">
              Pourquoi Nous Choisir?
            </h2>
            <p className="text-gray-700 mb-6">
              Avec SurvivalGear, vous bénéficiez de l&apos;expertise d&apos;une équipe passionnée, 
              d&apos;un service client réactif, et d&apos;une sélection rigoureuse de produits. 
              Nous testons personnellement chaque article avant de le proposer à la vente.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-forest-green text-white p-6 rounded-lg text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg">Produits disponibles</div>
          </div>
          <div className="bg-forest-green text-white p-6 rounded-lg text-center">
            <div className="text-4xl font-bold mb-2">10k+</div>
            <div className="text-lg">Clients satisfaits</div>
          </div>
          <div className="bg-forest-green text-white p-6 rounded-lg text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-lg">Années d&apos;expérience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
