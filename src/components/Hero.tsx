import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-forest-green to-dark-olive text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Équipez-vous pour l'Aventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Découvrez notre gamme complète de matériel de survie et d'équipement outdoor 
            pour vos aventures en pleine nature.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/products"
              className="bg-nature-beige text-forest-green px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 inline-block"
            >
              Découvrir nos produits
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-all duration-200 inline-block"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 text-9xl opacity-10">
        🏔️
      </div>
    </section>
  );
}
