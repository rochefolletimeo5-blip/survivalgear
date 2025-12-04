#!/usr/bin/env node

/**
 * Database Seeder for SurvivalGear
 * Seeds the database with sample categories, brands, and products
 */

import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcryptjs'

const connectionString = process.env.DATABASE_URL || ''
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Starting database seeding...\n')

  // Create admin user
  console.log('Creating admin user...')
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@survivalgear.com' },
    update: {},
    create: {
      email: 'admin@survivalgear.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })
  console.log('✓ Admin user created')

  // Create categories
  console.log('\nCreating categories...')
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'backpacks' },
      update: {},
      create: {
        name: 'Sacs à dos',
        slug: 'backpacks',
        description: 'Sacs à dos tactiques et de randonnée',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'camping' },
      update: {},
      create: {
        name: 'Camping',
        slug: 'camping',
        description: 'Équipement de camping et bivouac',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'clothing' },
      update: {},
      create: {
        name: 'Vêtements',
        slug: 'clothing',
        description: 'Vêtements outdoor et tactiques',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'tools' },
      update: {},
      create: {
        name: 'Outils',
        slug: 'tools',
        description: 'Outils multifonctions et couteaux',
      },
    }),
  ])
  console.log(`✓ ${categories.length} categories created`)

  // Create brands
  console.log('\nCreating brands...')
  const brands = await Promise.all([
    prisma.brand.upsert({
      where: { slug: '5-11-tactical' },
      update: {},
      create: {
        name: '5.11 Tactical',
        slug: '5-11-tactical',
        description: 'Équipement tactique professionnel',
      },
    }),
    prisma.brand.upsert({
      where: { slug: 'condor' },
      update: {},
      create: {
        name: 'Condor',
        slug: 'condor',
        description: 'Équipement outdoor et tactique',
      },
    }),
    prisma.brand.upsert({
      where: { slug: 'mil-tec' },
      update: {},
      create: {
        name: 'Mil-Tec',
        slug: 'mil-tec',
        description: 'Équipement militaire et survie',
      },
    }),
  ])
  console.log(`✓ ${brands.length} brands created`)

  // Create sample products
  console.log('\nCreating sample products...')
  
  const products = [
    {
      name: 'Sac à dos tactique 50L',
      slug: 'sac-dos-tactique-50l',
      description: 'Sac à dos tactique haute capacité avec système MOLLE. Parfait pour les randonnées longue durée et les missions tactiques. Construction robuste en nylon 1000D.',
      price: 89.99,
      compareAtPrice: 129.99,
      stock: 45,
      categoryId: categories[0].id,
      brandId: brands[0].id,
      weight: 1.8,
      isFeatured: true,
    },
    {
      name: 'Tente 2 places ultralight',
      slug: 'tente-2-places-ultralight',
      description: 'Tente légère pour 2 personnes. Imperméable et résistante au vent. Montage rapide. Idéale pour la randonnée et le trekking.',
      price: 149.99,
      compareAtPrice: 199.99,
      stock: 28,
      categoryId: categories[1].id,
      brandId: brands[1].id,
      weight: 2.5,
      isFeatured: true,
    },
    {
      name: 'Veste tactique softshell',
      slug: 'veste-tactique-softshell',
      description: 'Veste softshell respirante et coupe-vent. Multiples poches. Parfaite pour les activités outdoor en toutes saisons.',
      price: 79.99,
      stock: 67,
      categoryId: categories[2].id,
      brandId: brands[2].id,
      weight: 0.8,
    },
    {
      name: 'Couteau multifonction survival',
      slug: 'couteau-multifonction-survival',
      description: 'Couteau de survie avec lame fixe en acier inoxydable. Manche ergonomique avec boussole intégrée. Kit de survie inclus.',
      price: 45.99,
      compareAtPrice: 69.99,
      stock: 92,
      categoryId: categories[3].id,
      brandId: brands[1].id,
      weight: 0.3,
    },
  ]

  for (const productData of products) {
    const product = await prisma.product.create({
      data: {
        ...productData,
      },
    })

    // Add sample image
    await prisma.productImage.create({
      data: {
        productId: product.id,
        url: `/products/placeholder.jpg`,
        alt: product.name,
        position: 0,
      },
    })

    // Add variants for some products
    if (product.slug === 'veste-tactique-softshell') {
      await Promise.all([
        prisma.productVariant.create({
          data: {
            productId: product.id,
            name: 'Noir - M',
            color: 'Noir',
            size: 'M',
            stock: 20,
          },
        }),
        prisma.productVariant.create({
          data: {
            productId: product.id,
            name: 'Noir - L',
            color: 'Noir',
            size: 'L',
            stock: 25,
          },
        }),
        prisma.productVariant.create({
          data: {
            productId: product.id,
            name: 'Vert - M',
            color: 'Vert',
            size: 'M',
            stock: 12,
          },
        }),
        prisma.productVariant.create({
          data: {
            productId: product.id,
            name: 'Vert - L',
            color: 'Vert',
            size: 'L',
            stock: 10,
          },
        }),
      ])
    }

    console.log(`  ✓ ${product.name}`)
  }

  console.log(`✓ ${products.length} products created`)

  // Create a promo code
  console.log('\nCreating promo code...')
  await prisma.promoCode.upsert({
    where: { code: 'WELCOME10' },
    update: {},
    create: {
      code: 'WELCOME10',
      description: 'Réduction de bienvenue 10%',
      type: 'PERCENTAGE',
      value: 10,
      minPurchase: 50,
      usageLimit: 100,
      isActive: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
    },
  })
  console.log('✓ Promo code WELCOME10 created')

  console.log('\n🎉 Database seeding completed!\n')
  console.log('📝 Admin credentials:')
  console.log('   Email: admin@survivalgear.com')
  console.log('   Password: admin123\n')
  console.log('🎁 Promo code: WELCOME10 (10% off on orders over 50€)\n')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
