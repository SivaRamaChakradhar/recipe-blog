import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/lib/cms';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const currentLocale = locale as 'en' | 'es' | 'fr';

  return (
    <div data-testid="recipe-card" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <Link href={`/recipes/${recipe.slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={recipe.featuredImage}
            alt={recipe.title[currentLocale]}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {recipe.title[currentLocale]}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {recipe.description[currentLocale]}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {recipe.cookingTime} {t('minutes')}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {t(`difficulty_${recipe.difficulty.toLowerCase()}`)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
