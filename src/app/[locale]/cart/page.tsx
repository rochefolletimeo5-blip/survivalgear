'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Trash2 } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

export default function CartPage() {
  const t = useTranslations('cart')
  
  // Mock cart data - in real app, would use state management (Zustand)
  const cartItems = []

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
          <p className="text-gray-600 mb-8">{t('empty')}</p>
          <Link 
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            {t('continueShopping')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            {/* Items would be mapped here */}
            <div className="p-6">
              <p className="text-gray-500">Your cart items would appear here</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>{t('subtotal')}</span>
                <span>{formatPrice(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('shipping')}</span>
                <span>{formatPrice(0)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                <span>{t('total')}</span>
                <span>{formatPrice(0)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-center block"
            >
              {t('checkout')}
            </Link>

            <Link
              href="/products"
              className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition text-center block mt-3"
            >
              {t('continueShopping')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
