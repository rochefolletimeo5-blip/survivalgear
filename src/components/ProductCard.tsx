import { Product } from '@/data/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-forest-green font-semibold mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-forest-green">
            {product.price.toFixed(2)} €
          </span>
          <button className="bg-forest-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200">
            Voir détails
          </button>
        </div>
      </div>
    </div>
  );
}
