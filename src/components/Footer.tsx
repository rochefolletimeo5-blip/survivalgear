import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-olive text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🏕️</span>
              SurvivalGear
            </h3>
            <p className="text-gray-300">
              Votre partenaire de confiance pour tout votre équipement de survie et d&apos;aventure outdoor.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-nature-beige transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-nature-beige transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-nature-beige transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-nature-beige transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 contact@survivalgear.fr</li>
              <li>📞 +33 1 23 45 67 89</li>
              <li>📍 Paris, France</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SurvivalGear. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
