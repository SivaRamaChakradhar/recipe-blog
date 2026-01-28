import '@/app/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  useEffect(() => {
    // Set HTML lang attribute
    if (locale && typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
