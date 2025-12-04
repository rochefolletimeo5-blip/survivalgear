import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Produits</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Commandes</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Clients</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500 text-sm">CA Total</p>
          <p className="text-3xl font-bold">0€</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>
          <div className="space-y-3">
            <Link 
              href="/admin/products"
              className="block p-3 border border-gray-300 rounded hover:bg-gray-50"
            >
              📦 Gérer les produits
            </Link>
            <Link 
              href="/admin/orders"
              className="block p-3 border border-gray-300 rounded hover:bg-gray-50"
            >
              📋 Gérer les commandes
            </Link>
            <Link 
              href="/admin/categories"
              className="block p-3 border border-gray-300 rounded hover:bg-gray-50"
            >
              🏷️ Gérer les catégories
            </Link>
            <Link 
              href="/admin/brands"
              className="block p-3 border border-gray-300 rounded hover:bg-gray-50"
            >
              ⭐ Gérer les marques
            </Link>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Commandes récentes</h2>
          <p className="text-gray-500">Aucune commande pour le moment</p>
        </div>
      </div>
    </div>
  )
}
