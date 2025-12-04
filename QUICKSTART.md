# Quick Start Guide - SurvivalGear

## Local Development Setup (5 minutes)

### Prerequisites
- Node.js 18+ installed
- PostgreSQL 14+ installed and running
- Git installed

### Step 1: Clone and Install (2 min)

```bash
# Clone the repository
git clone <your-repo-url>
cd survivalgear

# Install dependencies
npm install
```

### Step 2: Database Setup (2 min)

```bash
# Copy environment file
cp .env.example .env

# Edit .env and update DATABASE_URL
# Example: DATABASE_URL="postgresql://user:password@localhost:5432/survivalgear"

# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed the database with sample data
npm run prisma:seed
```

After seeding, you'll have:
- **Admin account**: admin@survivalgear.com / admin123
- **4 sample products** with categories and brands
- **Promo code**: WELCOME10 (10% off)

### Step 3: Generate NextAuth Secret

```bash
# Generate a secret key
openssl rand -base64 32

# Add it to .env as NEXTAUTH_SECRET
```

### Step 4: Start Development Server (1 min)

```bash
npm run dev
```

Visit http://localhost:3000

## Testing the Platform

### 1. Browse Products
- Go to http://localhost:3000/products
- Test filters (category, brand, price)
- Click on a product to see details

### 2. Admin Dashboard
- Go to http://localhost:3000/admin
- View statistics and quick actions

### 3. Prisma Studio (Database GUI)
```bash
npm run prisma:studio
```
Visit http://localhost:5555 to manage data visually

## Import Products from AliExpress/Hipobuy

### 1. Add Product URLs
Edit `scripts/links.txt`:
```txt
https://www.aliexpress.com/item/1005001234567890.html
https://www.hipobuy.com/product/example-product
```

### 2. Run Import Agent
```bash
npm run import-products
```

The agent will:
- Extract product information
- Download images to `/public/products/`
- Apply configured margin (30% by default)
- Create database entries

## Essential Commands

```bash
# Development
npm run dev                  # Start dev server

# Database
npm run prisma:migrate       # Create/run migrations
npm run prisma:generate      # Generate Prisma client
npm run prisma:studio        # Open database GUI
npm run prisma:seed          # Seed sample data

# Import
npm run import-products      # Import from links.txt

# Production
npm run build                # Build for production
npm start                    # Start production server
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── page.tsx        # Home page
│   │   ├── products/       # Product catalog & detail
│   │   ├── cart/           # Shopping cart
│   │   ├── checkout/       # Checkout process
│   │   ├── account/        # Customer account
│   │   ├── admin/          # Admin dashboard
│   │   └── legal/          # Legal pages
│   └── api/                # API endpoints
├── components/             # Reusable components
├── lib/                    # Utilities & config
└── types/                  # TypeScript types

prisma/
└── schema.prisma          # Database schema

scripts/
├── import-agent.ts        # Product import tool
├── seed.ts                # Database seeder
└── links.txt              # URLs to import

public/
└── products/              # Product images
```

## Next Steps

1. **Configure PayPal**
   - Get credentials from https://developer.paypal.com
   - Add to .env: `NEXT_PUBLIC_PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`

2. **Customize Design**
   - Edit components in `src/components/`
   - Modify Tailwind config if needed

3. **Add Real Products**
   - Use import agent with real AliExpress/Hipobuy URLs
   - Or add manually via Prisma Studio

4. **Deploy to Production**
   - See DEPLOYMENT.md for Vercel setup
   - Or deploy to any Next.js-compatible platform

## Troubleshooting

### Database Connection Error
```bash
# Check PostgreSQL is running
pg_isready

# Verify DATABASE_URL in .env
# Format: postgresql://user:password@host:5432/database
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Regenerate Prisma client
npm run prisma:generate

# Rebuild
npm run build
```

### Import Agent Not Working
```bash
# Check links.txt format
# Ensure one URL per line
# No empty lines between URLs
```

## Support

- 📚 Documentation: README.md
- 🚀 Deployment: DEPLOYMENT.md
- 💬 Issues: Open a GitHub issue
- 📧 Email: contact@survivalgear.com

## Happy Coding! 🎉
