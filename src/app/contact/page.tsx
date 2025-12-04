export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
          Contactez-Nous
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-forest-green mb-6">
              Envoyez-nous un message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-forest-green text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-forest-green mb-6">
                Informations de contact
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@survivalgear.fr</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Adresse</h3>
                    <p className="text-gray-600">
                      123 Rue de l'Aventure<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">🕒</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 9h00 - 18h00<br />
                      Samedi: 10h00 - 16h00<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-green text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Besoin d'aide?</h3>
              <p className="mb-4">
                Notre équipe d'experts est disponible pour répondre à toutes vos questions 
                sur nos produits et vous conseiller pour vos aventures.
              </p>
              <p className="font-semibold">
                Réponse sous 24h garantie!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
