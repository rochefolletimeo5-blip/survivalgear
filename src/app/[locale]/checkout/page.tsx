'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { formatPrice } from '@/lib/utils'

export default function CheckoutPage() {
  const t = useTranslations('checkout')
  const [step, setStep] = useState(1)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            {/* Step 1: Shipping Address */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{t('shippingAddress')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('firstName')}
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder={t('lastName')}
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="email"
                  placeholder={t('email')}
                  className="border border-gray-300 rounded-lg px-4 py-2 md:col-span-2"
                />
                <input
                  type="text"
                  placeholder={t('address')}
                  className="border border-gray-300 rounded-lg px-4 py-2 md:col-span-2"
                />
                <input
                  type="text"
                  placeholder={t('city')}
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder={t('postalCode')}
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder={t('country')}
                  className="border border-gray-300 rounded-lg px-4 py-2 md:col-span-2"
                />
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div>
              <h2 className="text-xl font-semibold mb-4">{t('paymentMethod')}</h2>
              <div className="space-y-3">
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                  <input type="radio" name="payment" className="mr-3" defaultChecked />
                  <span>PayPal</span>
                </label>
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                  <input type="radio" name="payment" className="mr-3" />
                  <span>Carte bancaire</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">{t('orderSummary')}</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{formatPrice(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>{formatPrice(0)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{formatPrice(0)}</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              {t('placeOrder')}
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              En passant commande, vous acceptez nos conditions générales de vente
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
