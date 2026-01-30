# Multi-Language Recipe Blog

A modern, performant recipe blog built with Next.js featuring internationalization (i18n), Static Site Generation (SSG), Server-Side Rendering (SSR), and SEO best practices. This project demonstrates how to build a globally accessible, content-driven website with multiple language support.

## 🌟 Features

- **Multi-Language Support (i18n)**: English, Spanish, and French translations
- **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance
- **Server-Side Rendering (SSR)**: Dynamic content rendering
- **Headless CMS Ready**: Designed to work with Contentful, Sanity, or any headless CMS
- **SEO Optimized**: Automatic sitemap generation, meta tags, and structured data
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Search & Filter**: Client-side recipe search and category filtering
- **Social Sharing**: Share recipes on Twitter, Facebook, and Pinterest
- **Print-Friendly**: Optimized print layouts for recipes
- **Newsletter Subscription**: Email subscription form with validation
- **Docker Support**: Fully containerized with Docker and Docker Compose

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/SivaRamaChakradhar/recipe-blog/
   cd recipe-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   - For mock data (demo): No changes needed
   - For real CMS: Add your Contentful or Sanity credentials

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build -d
   ```

2. **Check container health**
   ```bash
   docker ps
   ```
   
   Wait until the container status shows "healthy"

3. **Access the application**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Stop the containers**
   ```bash
   docker-compose down
   ```

## 🏗️ Project Structure

```
recipe-blog/
├── app/                      # App directory (styles only)
│   └── globals.css          # Global styles with print CSS
├── pages/                    # Next.js pages (Pages Router)
│   ├── _app.tsx             # App wrapper with i18n
│   ├── _document.tsx        # HTML document template
│   ├── index.tsx            # Homepage (featured recipes)
│   ├── recipes/
│   │   ├── index.tsx        # All recipes with search/filter
│   │   └── [slug].tsx       # Individual recipe pages
│   └── api/
│       └── health.ts        # Health check endpoint
├── components/               # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   ├── RecipeCard.tsx
│   ├── NewsletterForm.tsx
│   └── SocialShare.tsx
├── lib/                      # Utility functions
│   └── cms.ts               # CMS integration layer
├── public/                   # Static assets
│   └── locales/             # i18n translation files
│       ├── en/common.json
│       ├── es/common.json
│       └── fr/common.json
├── scripts/                  # Build scripts
│   └── generate-sitemap.js  # Sitemap generation
├── .env.example             # Environment variables template
├── .env.local               # Local environment variables (not committed)
├── next.config.ts           # Next.js configuration
├── next-i18next.config.js   # i18n configuration
├── Dockerfile               # Docker container definition
├── docker-compose.yml       # Docker Compose setup
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🌐 Internationalization (i18n)

### Supported Languages

- English (en) - Default
- Spanish (es)
- French (fr)

### Language Switching

Users can switch languages using the language switcher in the header. The application will:
- Navigate to the same page in the selected language
- Fetch localized content from the CMS
- Display UI text in the selected language

### Adding New Languages

1. Add the locale to `next-i18next.config.js`:
   ```javascript
   locales: ['en', 'es', 'fr', 'de'], // Add 'de' for German
   ```

2. Create translation file:
   ```bash
   cp public/locales/en/common.json public/locales/de/common.json
   ```

3. Translate the content in the new file

4. Update the CMS to include content for the new locale

## 📝 Content Management

### Using Mock Data (Default)

The application includes mock recipe data in `lib/cms.ts` for demonstration purposes. This allows you to run the application without setting up a CMS.

### Integrating a Real CMS

#### Contentful

1. Create a Contentful account and space
2. Set up content models (Recipe, Category, Author)
3. Add your credentials to `.env.local`:
   ```
   CMS_PROVIDER='contentful'
   CONTENTFUL_SPACE_ID='your_space_id'
   CONTENTFUL_ACCESS_TOKEN='your_token'
   ```
4. Update `lib/cms.ts` to use Contentful SDK

#### Sanity

1. Create a Sanity project
2. Set up schemas for recipes
3. Add credentials to `.env.local`:
   ```
   CMS_PROVIDER='sanity'
   SANITY_PROJECT_ID='your_project_id'
   SANITY_DATASET='production'
   ```
4. Update `lib/cms.ts` to use Sanity client

## 🔍 SEO Features

### Sitemap Generation

The sitemap is automatically generated during the build process:

```bash
npm run build  # Generates sitemap.xml in public/
```

Access the sitemap at: [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)

### Meta Tags

Each page includes:
- Title and description
- Open Graph tags for social sharing
- Alternate language links
- Canonical URLs

## 🧪 Testing the Application

### Core Requirements Verification

1. **Docker Setup**
   ```bash
   docker-compose up -d
   docker ps  # Check health status
   curl http://localhost:3000/api/health
   ```

2. **i18n Configuration**
   - Visit `/` (English)
   - Visit `/es` (Spanish)
   - Visit `/fr` (French)
   - Check that content is translated

3. **Featured Recipes (SSG)**
   - Visit homepage
   - View source - should see pre-rendered HTML
   - Check for `data-testid="featured-recipes"`

4. **Recipe Detail Pages**
   - Visit `/recipes/classic-spanish-paella`
   - Check for `data-testid="recipe-title"`
   - Check for `data-testid="recipe-ingredients"`
   - Check for `data-testid="recipe-instructions"`

5. **Language Switcher**
   - Find `data-testid="language-switcher"`
   - Switch between languages
   - Verify URL changes to `/es/recipes/...`

6. **Search and Filter**
   - Visit `/recipes`
   - Use `data-testid="search-input"` to search
   - Use `data-testid="category-filter"` to filter

7. **Newsletter Form**
   - Find `data-testid="newsletter-form"`
   - Submit with invalid email - check for `data-testid="newsletter-error"`
   - Submit with valid email - check for `data-testid="newsletter-success"`

8. **Social Sharing**
   - Visit a recipe page
   - Find `data-testid="social-share-twitter"`
   - Verify href contains Twitter intent URL

9. **Print Layout**
   - Open a recipe page
   - Print preview (Ctrl+P / Cmd+P)
   - Verify header, footer, and comments are hidden

10. **Sitemap**
    ```bash
    curl http://localhost:3000/sitemap.xml
    ```
    Verify it contains URLs for all recipes in all languages

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `node scripts/generate-sitemap.js` - Generate sitemap manually

## 🐳 Docker Configuration

### Dockerfile

The Dockerfile uses a multi-stage build:
1. **deps**: Install dependencies
2. **builder**: Build the application
3. **runner**: Production runtime

### Docker Compose

- **Port Mapping**: 3000:3000
- **Environment**: Loads from `.env.local`
- **Health Check**: Pings `/api/health` endpoint
- **Restart Policy**: Restarts unless manually stopped

### Health Check

The health check endpoint returns:
```json
{
  "status": "ok",
  "timestamp": "2026-01-28T..."
}
```

## 🎨 Styling

- **Framework**: Tailwind CSS
- **Typography**: @tailwindcss/typography plugin
- **Responsive**: Mobile-first design
- **Print**: Custom print styles in globals.css

## 📦 Key Dependencies

- **next**: React framework with SSG/SSR
- **next-i18next**: Internationalization
- **next-seo**: SEO optimization
- **react-hook-form**: Form validation
- **react-player**: Video player component
- **axios**: HTTP client (for real CMS integration)

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| CMS_PROVIDER | CMS type ('mock', 'contentful', 'sanity') | Yes |
| CONTENTFUL_SPACE_ID | Contentful space ID | If using Contentful |
| CONTENTFUL_ACCESS_TOKEN | Contentful delivery token | If using Contentful |
| SANITY_PROJECT_ID | Sanity project ID | If using Sanity |
| SANITY_DATASET | Sanity dataset name | If using Sanity |
| NEXT_PUBLIC_SITE_URL | Site URL for SEO | Yes |

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Docker (Self-hosted)

1. Build image: `docker-compose build`
2. Run container: `docker-compose up -d`
3. Set up reverse proxy (nginx/caddy)
4. Configure SSL certificate

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Tailwind CSS for the utility-first CSS framework
- Unsplash for recipe images

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation
- Review the FAQ section

---

Built with ❤️ using Next.js
