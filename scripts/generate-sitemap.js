const fs = require('fs');
const path = require('path');

// Import CMS functions - adjust based on your setup
const mockRecipes = [
  'classic-spanish-paella',
  'french-ratatouille',
  'italian-margherita-pizza',
  'thai-green-curry',
  'mexican-tacos-al-pastor',
];

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const LOCALES = ['en', 'es', 'fr'];

function generateSitemap() {
  const staticPages = ['', '/recipes'];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Add static pages for all locales
  LOCALES.forEach((locale) => {
    staticPages.forEach((page) => {
      const url = locale === 'en' ? `${SITE_URL}${page}` : `${SITE_URL}/${locale}${page}`;
      sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
`;
      
      // Add alternate language links
      LOCALES.forEach((altLocale) => {
        const altUrl = altLocale === 'en' ? `${SITE_URL}${page}` : `${SITE_URL}/${altLocale}${page}`;
        sitemap += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}"/>\n`;
      });
      
      sitemap += `  </url>\n`;
    });
  });

  // Add recipe pages for all locales
  mockRecipes.forEach((slug) => {
    LOCALES.forEach((locale) => {
      const url = locale === 'en' 
        ? `${SITE_URL}/recipes/${slug}` 
        : `${SITE_URL}/${locale}/recipes/${slug}`;
      
      sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
`;
      
      // Add alternate language links
      LOCALES.forEach((altLocale) => {
        const altUrl = altLocale === 'en' 
          ? `${SITE_URL}/recipes/${slug}` 
          : `${SITE_URL}/${altLocale}/recipes/${slug}`;
        sitemap += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}"/>\n`;
      });
      
      sitemap += `  </url>\n`;
    });
  });

  sitemap += `</urlset>`;

  // Write to public directory
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

// Run the script
generateSitemap();
