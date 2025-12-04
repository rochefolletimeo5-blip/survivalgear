export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Couteau de Survie Tactical Pro",
    description: "Couteau robuste avec lame en acier inoxydable, manche ergonomique et étui inclus. Parfait pour toutes vos aventures outdoor.",
    price: 89.99,
    category: "Couteaux",
    image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500",
    featured: true,
  },
  {
    id: 2,
    name: "Kit de Survie Complet",
    description: "Kit complet avec 50+ outils essentiels : trousse de premiers soins, allume-feu, couverture de survie, corde paracorde et plus.",
    price: 149.99,
    category: "Kits",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500",
    featured: true,
  },
  {
    id: 3,
    name: "Sac à Dos Tactical 50L",
    description: "Sac à dos militaire résistant avec système MOLLE, compartiments multiples et tissu imperméable.",
    price: 129.99,
    category: "Sacs",
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500",
    featured: true,
  },
  {
    id: 4,
    name: "Lampe Frontale LED Rechargeable",
    description: "Lampe frontale ultra-puissante 1000 lumens, rechargeable USB, résistante à l'eau IPX6.",
    price: 45.99,
    category: "Éclairage",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500",
    featured: true,
  },
  {
    id: 5,
    name: "Gourde Filtrante 1L",
    description: "Gourde avec filtre intégré capable de purifier 1000L d'eau. Élimine 99.9% des bactéries et parasites.",
    price: 59.99,
    category: "Hydratation",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
  },
  {
    id: 6,
    name: "Allume-feu Magnésium",
    description: "Bâton d'allume-feu en magnésium, fonctionne par tous temps, 12000 allumages garantis.",
    price: 19.99,
    category: "Feu",
    image: "https://images.unsplash.com/photo-1478358161113-b0e11994a36b?w=500",
  },
  {
    id: 7,
    name: "Couverture de Survie Thermique",
    description: "Couverture d'urgence ultra-légère, conserve 90% de la chaleur corporelle. Paquet de 4.",
    price: 12.99,
    category: "Abri",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=500",
  },
  {
    id: 8,
    name: "Boussole Militaire Professionnelle",
    description: "Boussole de navigation précise avec visée optique, échelle et niveau à bulle intégrés.",
    price: 34.99,
    category: "Navigation",
    image: "https://images.unsplash.com/photo-1533709752211-118fcaf03312?w=500",
  },
  {
    id: 9,
    name: "Multi-Tool 15 en 1",
    description: "Outil multifonction en acier inoxydable : pince, tournevis, ouvre-bouteille, scie et plus.",
    price: 69.99,
    category: "Outils",
    image: "https://images.unsplash.com/photo-1530288782965-fbad40327074?w=500",
  },
  {
    id: 10,
    name: "Réchaud de Camping Portable",
    description: "Réchaud à gaz compact et pliable, parfait pour cuisiner en pleine nature.",
    price: 39.99,
    category: "Cuisine",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500",
  },
  {
    id: 11,
    name: "Corde Paracorde 30m",
    description: "Corde paracorde résistante 550lbs, idéale pour bivouac, camping et situations d'urgence.",
    price: 24.99,
    category: "Corde",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=500",
  },
  {
    id: 12,
    name: "Sifflet de Survie 120dB",
    description: "Sifflet d'urgence ultra-puissant avec boussole intégrée et thermomètre.",
    price: 9.99,
    category: "Signalisation",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500",
  },
];
