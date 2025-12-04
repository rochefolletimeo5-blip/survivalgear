'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">SurvivalGear</h3>
            <p className="text-sm">
              Votre spécialiste en équipement outdoor et survie. Qualité professionnelle à prix compétitifs.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">{t('aboutUs')}</Link></li>
              <li><Link href="/contact" className="hover:text-white">{t('contact')}</Link></li>
              <li><Link href="/brands" className="hover:text-white">Marques</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/terms" className="hover:text-white">{t('terms')}</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white">{t('privacy')}</Link></li>
              <li><Link href="/legal/cookies" className="hover:text-white">{t('cookies')}</Link></li>
              <li><Link href="/legal/notice" className="hover:text-white">{t('legalNotice')}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Inscrivez-vous pour recevoir nos offres exclusives</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 text-gray-900 rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SurvivalGear. Tous droits réservés.</p>
          <div className="mt-4 flex justify-center items-center space-x-2">
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
              ⭐ 4.8/5 - Protection Acheteur
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
