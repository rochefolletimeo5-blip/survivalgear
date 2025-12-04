'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ShoppingCart, User, Search, Menu, Heart } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const t = useTranslations('header')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        {t('banner')}
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            SurvivalGear
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/products?category=backpacks" className="text-gray-700 hover:text-blue-600">
              {t('backpacks')}
            </Link>
            <Link href="/products?category=sleep-system" className="text-gray-700 hover:text-blue-600">
              {t('sleepSystem')}
            </Link>
            <Link href="/products?category=camping" className="text-gray-700 hover:text-blue-600">
              {t('camping')}
            </Link>
            <Link href="/products?category=clothing" className="text-gray-700 hover:text-blue-600">
              {t('clothing')}
            </Link>
            <Link href="/products?new=true" className="text-blue-600 font-semibold">
              {t('newArrivals')}
            </Link>
            <Link href="/products?sale=true" className="text-red-600 font-semibold">
              {t('sale')}
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-blue-600">
              {t('brands')}
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('search')}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600">
              <Heart className="w-6 h-6" />
            </button>
            <Link href="/account" className="text-gray-700 hover:text-blue-600">
              <User className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-blue-600">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-4 space-y-2">
            <Link href="/products?category=backpacks" className="block py-2 text-gray-700 hover:text-blue-600">
              {t('backpacks')}
            </Link>
            <Link href="/products?category=sleep-system" className="block py-2 text-gray-700 hover:text-blue-600">
              {t('sleepSystem')}
            </Link>
            <Link href="/products?category=camping" className="block py-2 text-gray-700 hover:text-blue-600">
              {t('camping')}
            </Link>
            <Link href="/products?category=clothing" className="block py-2 text-gray-700 hover:text-blue-600">
              {t('clothing')}
            </Link>
            <Link href="/products?new=true" className="block py-2 text-blue-600 font-semibold">
              {t('newArrivals')}
            </Link>
            <Link href="/products?sale=true" className="block py-2 text-red-600 font-semibold">
              {t('sale')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
