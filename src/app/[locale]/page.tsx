import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Équipement Outdoor & Survie
            </h1>
            <p className="text-xl mb-8">
              Découvrez notre sélection professionnelle de matériel outdoor au meilleur prix
            </p>
            <Link 
              href="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
            >
              Découvrir nos produits
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Catégories populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Sacs à dos', slug: 'backpacks', icon: '🎒' },
            { name: 'Camping', slug: 'camping', icon: '⛺' },
            { name: 'Vêtements', slug: 'clothing', icon: '👕' },
            { name: 'Équipement', slug: 'gear', icon: '🔦' },
          ].map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Nouveautés</h2>
            <Link href="/products?new=true" className="text-blue-600 hover:underline">
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for products */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image produit</span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">Marque</p>
                  <h3 className="font-semibold mb-2">Nom du produit</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">99,99 €</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-semibold mb-2">Livraison Express</h3>
            <p className="text-sm text-gray-600">Livraison sous 2 semaines</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-semibold mb-2">Protection Acheteur</h3>
            <p className="text-sm text-gray-600">Garantie satisfaction 100%</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-semibold mb-2">Paiement Sécurisé</h3>
            <p className="text-sm text-gray-600">Transactions protégées</p>
          </div>
        </div>
      </section>
    </div>
  );
}
