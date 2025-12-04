# SurvivalGear - Deployment Guide

## Overview
SurvivalGear is a complete Next.js e-commerce application for survival and outdoor equipment.

## Technology Stack
- **Framework**: Next.js 15.5.7 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.18
- **UI**: React 18.3.1
- **Deployment**: Vercel

## Features
- ✅ Responsive design optimized for all devices
- ✅ Modern App Router architecture
- ✅ Server-side rendering (SSR) and Static Site Generation (SSG)
- ✅ Custom outdoor/nature theme with forest green and earth tones
- ✅ 12 mock survival products with images
- ✅ 4 main pages: Home, Products, About, Contact
- ✅ Reusable React components
- ✅ TypeScript for type safety
- ✅ Zero security vulnerabilities
- ✅ All linting checks pass

## Project Structure
```
survivalgear/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── products/page.tsx   # Products listing
│   │   ├── about/page.tsx      # About page
│   │   └── contact/page.tsx    # Contact page
│   ├── components/             # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ProductCard.tsx
│   └── data/
│       └── products.ts         # Mock product data
├── public/                     # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json

## Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production
```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting
```bash
# Run ESLint
npm run lint
```

## Vercel Deployment

### Method 1: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Method 2: Using GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build
6. Click "Deploy"

### Environment Configuration
The application is configured via `vercel.json` with:
- Framework: Next.js (auto-detected)
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `.next` (automatic)

## Configuration Files

### next.config.js
- React Strict Mode enabled
- Remote image patterns configured for Unsplash images

### tailwind.config.js
- Custom color palette:
  - `forest-green`: #1a4d2e
  - `earth-brown`: #8b4513
  - `nature-beige`: #d4a574
  - `dark-olive`: #3c3c1e

### vercel.json
- Optimized for Next.js deployment
- Automatic build and install commands

## Pages

### Homepage (/)
- Hero section with call-to-action buttons
- Featured products grid (4 products)
- Value propositions section
- Fully responsive layout

### Products (/products)
- Complete product catalog (12 items)
- Category badges display
- Product cards with images, prices, and descriptions
- Grid layout (1-4 columns responsive)

### About (/about)
- Company mission and values
- Statistics showcase
- Professional design with outdoor theme

### Contact (/contact)
- Contact form (UI only - backend integration needed)
- Contact information display
- Office hours and location
- Two-column responsive layout

## Customization

### Adding New Products
Edit `src/data/products.ts` and add new product objects:
```typescript
{
  id: 13,
  name: "Product Name",
  description: "Product description",
  price: 99.99,
  category: "Category",
  image: "https://images.unsplash.com/...",
  featured: true // optional
}
```

### Changing Colors
Edit `tailwind.config.js` to modify the theme colors in the `extend.colors` section.

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Export a React component
4. Update navigation in `Header.tsx`

## Performance
- Lighthouse score: Optimized for performance
- Static generation for fast page loads
- Optimized images with Next.js Image component
- Minimal JavaScript bundle size

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Production Checklist
- [x] All pages tested and working
- [x] Responsive design verified
- [x] Linting passes with no errors
- [x] Production build successful
- [x] No security vulnerabilities
- [x] TypeScript compilation successful
- [x] Images optimized and loading
- [x] Navigation working correctly
- [x] Footer links functional

## Future Enhancements
- Add shopping cart functionality
- Integrate payment gateway
- Add user authentication
- Connect contact form to backend API
- Add product search and filtering
- Implement product detail pages
- Add customer reviews
- Set up analytics (Google Analytics, etc.)
- Add SEO meta tags per page
- Implement internationalization (i18n)

## Support
For issues or questions, contact: contact@survivalgear.fr

## License
All rights reserved © 2025 SurvivalGear
```
