import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { getRecipeBySlug, getAllRecipeSlugs, Recipe } from '@/lib/cms';
import SocialShare from '@/components/SocialShare';

interface RecipeDetailProps {
  recipe: Recipe;
}

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const currentLocale = locale as 'en' | 'es' | 'fr';

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Head>
        <title>{`${recipe.title[currentLocale]} - ${t('site_name')}`}</title>
        <meta name="description" content={recipe.description[currentLocale]} />
        <meta property="og:title" content={recipe.title[currentLocale]} />
        <meta property="og:description" content={recipe.description[currentLocale]} />
        <meta property="og:image" content={recipe.featuredImage} />
        <meta property="og:type" content="article" />
      </Head>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Recipe Header */}
        <header className="mb-8">
          <h1 data-testid="recipe-title" className="text-4xl font-bold text-gray-900 mb-4">
            {recipe.title[currentLocale]}
          </h1>
          
          <p className="text-gray-600 text-lg mb-6">
            {recipe.description[currentLocale]}
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{recipe.cookingTime} {t('minutes')}</span>
            </div>
            
            <div className={`px-3 py-1 rounded font-medium ${
              recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {t(`difficulty_${recipe.difficulty.toLowerCase()}`)}
            </div>

            <div className="flex gap-2">
              {recipe.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 items-center mb-6">
            <SocialShare 
              title={recipe.title[currentLocale]} 
              description={recipe.description[currentLocale]}
            />
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors no-print"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              {t('print_recipe')}
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={recipe.featuredImage}
            alt={recipe.title[currentLocale]}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>

        {/* Video (if available) - Simple iframe embed for YouTube */}
        {recipe.videoUrl && recipe.videoUrl.includes('youtube') && (
          <div className="mb-8 no-print">
            <h2 className="text-2xl font-bold mb-4">Video</h2>
            <div className="aspect-video">
              <iframe
                src={recipe.videoUrl.replace('watch?v=', 'embed/')}
                className="w-full h-full"
                allowFullScreen
                title="Recipe Video"
              />
            </div>
          </div>
        )}

        {/* Ingredients */}
        <section className="mb-8">
          <h2 data-testid="ingredients-heading" className="text-2xl font-bold mb-4">
            {t('ingredients')}
          </h2>
          <ul data-testid="recipe-ingredients" className="list-disc list-inside space-y-2">
            {recipe.ingredients[currentLocale].map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('instructions')}</h2>
          <ol data-testid="recipe-instructions" className="space-y-4">
            {recipe.instructions[currentLocale].map((instruction, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <p className="text-gray-700 flex-1 pt-1">{instruction}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Comments Section */}
        {recipe.comments && recipe.comments.length > 0 && (
          <section data-testid="comments-list" className="mb-8 no-print">
            <h2 className="text-2xl font-bold mb-4">{t('comments')}</h2>
            <div className="space-y-4">
              {recipe.comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-gray-800">{comment.author}</span>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700">{comment.content[currentLocale]}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = await getAllRecipeSlugs();
  
  const paths = slugs.flatMap((slug) =>
    (locales || ['en']).map((locale) => ({
      params: { slug },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      recipe,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
    revalidate: 60,
  };
};
