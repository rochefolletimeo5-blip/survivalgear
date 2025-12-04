#!/usr/bin/env node

/**
 * SurvivalGear Product Import Agent
 * 
 * This script imports products from AliExpress/Hipobuy URLs
 * Usage: npm run import-products
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PrismaClient } from '@prisma/client'
import { generateSlug } from '../src/lib/utils'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prisma = new PrismaClient()

// Configuration
const MARGIN_PERCENTAGE = parseFloat(process.env.IMPORT_AGENT_MARGIN_PERCENTAGE || '30')
const LINKS_FILE = path.join(__dirname, 'links.txt')
const PRODUCTS_DIR = path.join(__dirname, '../public/products')

interface ProductData {
  title: string
  description: string
  price: number
  images: string[]
  variants: Array<{
    color?: string
    size?: string
    price?: number
    stock: number
  }>
  stock: number
  sourceUrl: string
}

async function downloadImage(url: string, productSlug: string, index: number): Promise<string> {
  try {
    const productDir = path.join(PRODUCTS_DIR, productSlug)
    if (!fs.existsSync(productDir)) {
      fs.mkdirSync(productDir, { recursive: true })
    }

    const response = await fetch(url)
    if (!response.ok) {
      console.error(`Failed to download image: ${url}`)
      return ''
    }

    const buffer = await response.arrayBuffer()
    const filename = `image-${index + 1}.jpg`
    const filepath = path.join(productDir, filename)
    
    fs.writeFileSync(filepath, Buffer.from(buffer))
    console.log(`  ✓ Downloaded: ${filename}`)
    
    return `/products/${productSlug}/${filename}`
  } catch (error) {
    console.error(`  ✗ Error downloading image: ${error}`)
    return ''
  }
}

async function scrapeProduct(url: string): Promise<ProductData | null> {
  console.log(`\nScraping: ${url}`)
  
  try {
    // This is a placeholder - in a real implementation, you would use
    // a proper scraper library like Puppeteer or Playwright
    // For now, return mock data
    
    console.log('  ⚠ Note: Using mock data. Implement actual scraping logic.')
    
    return {
      title: 'Mock Product - Tactical Backpack 50L',
      description: 'High-quality tactical backpack with multiple compartments. Perfect for outdoor adventures and survival situations. Made from durable waterproof material.',
      price: 45.99,
      images: [
        'https://via.placeholder.com/800x800/4A5568/FFFFFF?text=Product+1',
        'https://via.placeholder.com/800x800/6B7280/FFFFFF?text=Product+2',
      ],
      variants: [
        { color: 'Black', size: 'One Size', stock: 100 },
        { color: 'Green', size: 'One Size', stock: 75 },
        { color: 'Tan', size: 'One Size', stock: 50 },
      ],
      stock: 225,
      sourceUrl: url,
    }
  } catch (error) {
    console.error(`  ✗ Error scraping product: ${error}`)
    return null
  }
}

async function importProduct(productData: ProductData, categorySlug?: string) {
  const slug = generateSlug(productData.title)
  const priceWithMargin = productData.price * (1 + MARGIN_PERCENTAGE / 100)

  console.log(`\nImporting: ${productData.title}`)
  console.log(`  Base Price: €${productData.price.toFixed(2)}`)
  console.log(`  Margin: ${MARGIN_PERCENTAGE}%`)
  console.log(`  Final Price: €${priceWithMargin.toFixed(2)}`)

  // Download images
  const imageUrls: string[] = []
  for (let i = 0; i < productData.images.length; i++) {
    const localUrl = await downloadImage(productData.images[i], slug, i)
    if (localUrl) imageUrls.push(localUrl)
  }

  if (imageUrls.length === 0) {
    console.error('  ✗ No images downloaded, skipping product')
    return
  }

  // Find or create category
  let category = null
  if (categorySlug) {
    category = await prisma.category.findUnique({
      where: { slug: categorySlug }
    })
    
    if (!category) {
      category = await prisma.category.create({
        data: {
          name: categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1),
          slug: categorySlug,
        }
      })
    }
  }

  // Create or update product
  const product = await prisma.product.upsert({
    where: { slug },
    update: {
      price: priceWithMargin,
      costPrice: productData.price,
      margin: MARGIN_PERCENTAGE,
      stock: productData.stock,
      sourceUrl: productData.sourceUrl,
    },
    create: {
      name: productData.title,
      slug,
      description: productData.description,
      price: priceWithMargin,
      costPrice: productData.price,
      margin: MARGIN_PERCENTAGE,
      stock: productData.stock,
      sourceUrl: productData.sourceUrl,
      categoryId: category?.id,
      isActive: true,
    }
  })

  // Create images
  for (let i = 0; i < imageUrls.length; i++) {
    await prisma.productImage.upsert({
      where: {
        productId_position: {
          productId: product.id,
          position: i
        }
      },
      update: {
        url: imageUrls[i],
      },
      create: {
        productId: product.id,
        url: imageUrls[i],
        alt: `${productData.title} - Image ${i + 1}`,
        position: i,
      }
    })
  }

  // Create variants
  for (const variantData of productData.variants) {
    const variantName = [variantData.color, variantData.size].filter(Boolean).join(' - ')
    
    await prisma.productVariant.create({
      data: {
        productId: product.id,
        name: variantName,
        color: variantData.color,
        size: variantData.size,
        price: variantData.price ? variantData.price * (1 + MARGIN_PERCENTAGE / 100) : null,
        stock: variantData.stock,
      }
    })
  }

  console.log(`  ✓ Product imported successfully: ${product.id}`)
}

async function main() {
  console.log('=== SurvivalGear Product Import Agent ===\n')
  console.log(`Margin: ${MARGIN_PERCENTAGE}%`)
  console.log(`Links file: ${LINKS_FILE}`)
  console.log(`Images directory: ${PRODUCTS_DIR}\n`)

  // Read links file
  if (!fs.existsSync(LINKS_FILE)) {
    console.error(`Error: links.txt not found at ${LINKS_FILE}`)
    console.log('Creating example links.txt file...')
    fs.writeFileSync(LINKS_FILE, '# Add product URLs here (one per line)\n# Example: https://www.aliexpress.com/item/...\n')
    console.log('Please add product URLs to links.txt and run again.')
    process.exit(1)
  }

  const links = fs.readFileSync(LINKS_FILE, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))

  if (links.length === 0) {
    console.log('No links found in links.txt')
    process.exit(0)
  }

  console.log(`Found ${links.length} product links\n`)

  // Process each link
  let successCount = 0
  let errorCount = 0

  for (const link of links) {
    try {
      const productData = await scrapeProduct(link)
      if (productData) {
        await importProduct(productData)
        successCount++
      } else {
        errorCount++
      }
    } catch (error) {
      console.error(`Error processing ${link}:`, error)
      errorCount++
    }
  }

  console.log('\n=== Import Summary ===')
  console.log(`✓ Success: ${successCount}`)
  console.log(`✗ Errors: ${errorCount}`)
  console.log(`Total: ${links.length}`)

  await prisma.$disconnect()
}

main().catch((error) => {
  console.error('Fatal error:', error)
  prisma.$disconnect()
  process.exit(1)
})
