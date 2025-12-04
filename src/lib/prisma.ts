import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  // For production, create connection pool
  const connectionString = `${process.env.DATABASE_URL}`
  const pool = new Pool({ connectionString })
  const adapter = new PrismaPg(pool)
  prisma = new PrismaClient({ adapter })
} else {
  // For development, use cached client
  if (!globalForPrisma.prisma) {
    const connectionString = `${process.env.DATABASE_URL}`
    const pool = new Pool({ connectionString })
    const adapter = new PrismaPg(pool)
    globalForPrisma.prisma = new PrismaClient({ 
      adapter,
      log: ['query', 'error', 'warn']
    })
  }
  prisma = globalForPrisma.prisma
}

export { prisma }
export default prisma
