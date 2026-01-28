import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { locales, locale: currentLocale, pathname, query, asPath } = router;

  const switchLanguage = (locale: string) => {
    const path = pathname;
    router.push({ pathname: path, query }, asPath, { locale });
  };

  return (
    <div data-testid="language-switcher" className="flex gap-2">
      {locales?.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLanguage(locale)}
          className={`px-3 py-1 rounded ${
            currentLocale === locale
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label={`Switch to ${locale}`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
