'use client'

import Link from 'next/link'
import { formatPrice, calculateDiscount } from '@/lib/utils'
import { ShoppingCart } from 'lucide-react'

interface Product {
  id: string
  name: string
  slug: string
  price: number
  compareAtPrice: number | null
  images: { url: string; alt: string | null }[]
  brand: { name: string } | null
}

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Aucun produit trouvé</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const discount = product.compareAtPrice 
          ? calculateDiscount(product.price, product.compareAtPrice)
          : 0

        return (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group">
            <Link href={`/products/${product.slug}`} className="block relative">
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                {product.images[0] ? (
                  <img 
                    src={product.images[0].url} 
                    alt={product.images[0].alt || product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Pas d'image
                  </div>
                )}
                {discount > 0 && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                    -{discount}%
                  </span>
                )}
              </div>
            </Link>
            
            <div className="p-4">
              {product.brand && (
                <p className="text-sm text-gray-500 mb-1">{product.brand.name}</p>
              )}
              <Link href={`/products/${product.slug}`}>
                <h3 className="font-semibold mb-2 hover:text-blue-600 line-clamp-2">
                  {product.name}
                </h3>
              </Link>
              
              <div className="flex items-center justify-between mt-4">
                <div>
                  {product.compareAtPrice && (
                    <span className="text-sm text-gray-400 line-through mr-2">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                  <span className="text-lg font-bold text-blue-600">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
