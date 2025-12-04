import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div>
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Produits Phares
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits essentiels pour vos aventures outdoor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 inline-block"
          >
            Voir tous les produits
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Livraison Rapide
              </h3>
              <p className="text-gray-600">
                Expédition sous 24-48h partout en France
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Qualité Garantie
              </h3>
              <p className="text-gray-600">
                Produits testés et approuvés par des experts
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Support Client
              </h3>
              <p className="text-gray-600">
                Une équipe à votre écoute 7j/7
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
