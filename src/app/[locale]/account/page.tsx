import Link from 'next/link'

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Mon compte</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          href="/account/orders"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <div className="text-4xl mb-4">📦</div>
          <h2 className="text-xl font-semibold mb-2">Mes commandes</h2>
          <p className="text-gray-600">Suivez vos commandes et historique d'achats</p>
        </Link>

        <Link 
          href="/account/addresses"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <div className="text-4xl mb-4">📍</div>
          <h2 className="text-xl font-semibold mb-2">Mes adresses</h2>
          <p className="text-gray-600">Gérez vos adresses de livraison</p>
        </Link>

        <Link 
          href="/account/wishlist"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <div className="text-4xl mb-4">❤️</div>
          <h2 className="text-xl font-semibold mb-2">Liste de souhaits</h2>
          <p className="text-gray-600">Vos produits favoris</p>
        </Link>

        <Link 
          href="/account/settings"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <div className="text-4xl mb-4">⚙️</div>
          <h2 className="text-xl font-semibold mb-2">Paramètres</h2>
          <p className="text-gray-600">Gérez vos informations personnelles</p>
        </Link>
      </div>
    </div>
  )
}
