'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface Brand {
  id: string
  name: string
  slug: string
}

interface Category {
  id: string
  name: string
  slug: string
}

export default function Filters({ brands, categories }: { brands: Brand[], categories: Category[] }) {
  const t = useTranslations('filters')
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '')
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '')
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || '')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [inStock, setInStock] = useState(searchParams.get('inStock') === 'true')

  const applyFilters = () => {
    const params = new URLSearchParams()
    
    if (selectedCategory) params.set('category', selectedCategory)
    if (selectedBrand) params.set('brand', selectedBrand)
    if (minPrice) params.set('minPrice', minPrice)
    if (maxPrice) params.set('maxPrice', maxPrice)
    if (inStock) params.set('inStock', 'true')
    
    router.push(`/products?${params.toString()}`)
  }

  const clearFilters = () => {
    setMinPrice('')
    setMaxPrice('')
    setSelectedBrand('')
    setSelectedCategory('')
    setInStock(false)
    router.push('/products')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">{t('title')}</h2>

      {/* Category */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Catégorie</h3>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="">Toutes</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">{t('brand')}</h3>
        <select 
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="">Toutes</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.slug}>{brand.name}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">{t('price')}</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-lg px-3 py-2"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">{t('availability')}</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
            className="mr-2"
          />
          <span>{t('inStock')}</span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button
          onClick={applyFilters}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {t('applyFilters')}
        </button>
        <button
          onClick={clearFilters}
          className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          {t('clearFilters')}
        </button>
      </div>
    </div>
  )
}
