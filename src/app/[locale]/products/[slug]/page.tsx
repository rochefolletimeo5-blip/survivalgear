import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { formatPrice } from '@/lib/utils'
import { ShoppingCart, Heart } from 'lucide-react'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      images: {
        orderBy: { position: 'asc' },
      },
      brand: true,
      category: true,
      variants: {
        where: { isActive: true },
      },
      reviews: {
        include: {
          user: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 10,
      },
    },
  })

  if (!product || !product.isActive) {
    notFound()
  }

  const averageRating = product.reviews.length > 0
    ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
    : 0

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-600">
        Accueil / Produits / {product.category?.name} / {product.name}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
            {product.images[0] ? (
              <img 
                src={product.images[0].url} 
                alt={product.images[0].alt || product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Pas d'image
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(1, 5).map((image, idx) => (
              <div key={image.id} className="aspect-square bg-gray-200 rounded overflow-hidden cursor-pointer hover:opacity-75">
                <img 
                  src={image.url} 
                  alt={image.alt || `${product.name} ${idx + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          {product.brand && (
            <p className="text-gray-500 mb-2">{product.brand.name}</p>
          )}
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {/* Rating */}
          {product.reviews.length > 0 && (
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < Math.round(averageRating) ? '★' : '☆'}</span>
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.reviews.length} avis)
              </span>
            </div>
          )}

          {/* Price */}
          <div className="mb-6">
            {product.compareAtPrice && (
              <span className="text-xl text-gray-400 line-through mr-3">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="text-3xl font-bold text-blue-600">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.stock > 0 ? (
              <span className="text-green-600">✓ En stock ({product.stock} disponibles)</span>
            ) : (
              <span className="text-red-600">✗ Rupture de stock</span>
            )}
          </div>

          {/* Variants */}
          {product.variants.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Options disponibles</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className="px-4 py-2 border border-gray-300 rounded hover:border-blue-500 hover:bg-blue-50"
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Quantité</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="border border-gray-300 rounded px-4 py-2 w-24"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Ajouter au panier
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border-t pt-6">
            <p className="text-sm text-gray-600 mb-2">
              🚚 Livraison estimée : {product.deliveryTime}
            </p>
            <p className="text-sm text-gray-600">
              ✓ Protection acheteur garantie
            </p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Description */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <div className="prose max-w-none text-gray-700">
            <p>{product.description}</p>
          </div>

          {/* Reviews */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Avis clients</h2>
            {product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                        ))}
                      </div>
                      <span className="ml-3 font-semibold">{review.user.name}</span>
                    </div>
                    {review.title && (
                      <h4 className="font-semibold mb-2">{review.title}</h4>
                    )}
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Aucun avis pour le moment</p>
            )}
          </div>
        </div>

        {/* Sidebar Info */}
        <div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Informations produit</h3>
            <dl className="space-y-2 text-sm">
              {product.sku && (
                <>
                  <dt className="text-gray-600">SKU</dt>
                  <dd className="font-medium">{product.sku}</dd>
                </>
              )}
              {product.weight && (
                <>
                  <dt className="text-gray-600">Poids</dt>
                  <dd className="font-medium">{product.weight} kg</dd>
                </>
              )}
              {product.category && (
                <>
                  <dt className="text-gray-600">Catégorie</dt>
                  <dd className="font-medium">{product.category.name}</dd>
                </>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
