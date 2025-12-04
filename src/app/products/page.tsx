import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Nos Produits
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez notre gamme complète d'équipement de survie et outdoor. 
          Des produits de qualité pour tous vos besoins d'aventure.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Catégories disponibles:
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="bg-forest-green text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
