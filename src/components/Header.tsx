import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-forest-green text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">🏕️</span>
            <span>SurvivalGear</span>
          </Link>
          
          <ul className="flex gap-6 items-center">
            <li>
              <Link 
                href="/" 
                className="hover:text-nature-beige transition-colors duration-200"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="/products" 
                className="hover:text-nature-beige transition-colors duration-200"
              >
                Produits
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="hover:text-nature-beige transition-colors duration-200"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="hover:text-nature-beige transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
