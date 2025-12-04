import { prisma } from '@/lib/prisma'
import ProductGrid from './ProductGrid'
import Filters from './Filters'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  
  // Get filter parameters
  const category = params.category as string | undefined
  const brand = params.brand as string | undefined
  const minPrice = params.minPrice ? parseFloat(params.minPrice as string) : undefined
  const maxPrice = params.maxPrice ? parseFloat(params.maxPrice as string) : undefined
  const inStock = params.inStock === 'true'
  const sale = params.sale === 'true'
  const newArrivals = params.new === 'true'

  // Build query
  const where: any = {
    isActive: true,
  }

  if (category) {
    where.category = {
      slug: category
    }
  }

  if (brand) {
    where.brand = {
      slug: brand
    }
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    where.price = {}
    if (minPrice !== undefined) where.price.gte = minPrice
    if (maxPrice !== undefined) where.price.lte = maxPrice
  }

  if (inStock) {
    where.stock = { gt: 0 }
  }

  if (sale) {
    where.compareAtPrice = { not: null }
  }

  // Fetch products
  const products = await prisma.product.findMany({
    where,
    include: {
      images: {
        orderBy: { position: 'asc' },
        take: 1,
      },
      brand: true,
      category: true,
    },
    orderBy: newArrivals ? { createdAt: 'desc' } : { name: 'asc' },
    take: 48,
  })

  // Fetch filter options
  const brands = await prisma.brand.findMany({
    orderBy: { name: 'asc' },
  })

  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' },
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-600">
        Accueil / Produits {category && `/ ${category}`}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <Filters brands={brands} categories={categories} />
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              {products.length} produits trouvés
            </p>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>Trier par pertinence</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
            </select>
          </div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  )
}
