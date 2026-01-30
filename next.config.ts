import type { NextConfig } from "next";

const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,
  output: 'standalone',
  images: {
    domains: ['images.ctfassets.net', 'cdn.sanity.io', 'images.unsplash.com'], // Add your CMS image domains
  },
};

export default nextConfig;
