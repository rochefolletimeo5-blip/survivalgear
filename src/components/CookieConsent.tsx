'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

export default function CookieConsent() {
  const t = useTranslations('cookies')
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm flex-1">
          {t('message')}
        </p>
        <div className="flex gap-2">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-gray-900 transition"
          >
            {t('decline')}
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
