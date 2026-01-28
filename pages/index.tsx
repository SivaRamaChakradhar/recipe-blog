import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { getFeaturedRecipes, Recipe } from '@/lib/cms';
import RecipeCard from '@/components/RecipeCard';
import NewsletterForm from '@/components/NewsletterForm';

interface HomeProps {
  recipes: Recipe[];
}

export default function Home({ recipes }: HomeProps) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('site_name')}</title>
        <meta name="description" content={t('newsletter_description')} />
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t('featured_recipes')}
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            {t('newsletter_description')}
          </p>
          
          <div data-testid="featured-recipes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </section>

        <section className="max-w-2xl mx-auto">
          <NewsletterForm />
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const recipes = await getFeaturedRecipes();

  return {
    props: {
      recipes,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};
