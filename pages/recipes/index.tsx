import { useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllRecipes, getCategories, Recipe, Category } from '@/lib/cms';
import RecipeCard from '@/components/RecipeCard';

interface RecipesProps {
  recipes: Recipe[];
  categories: Category[];
}

export default function Recipes({ recipes, categories }: RecipesProps) {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const currentLocale = locale as 'en' | 'es' | 'fr';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.title[currentLocale]
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [recipes, searchQuery, selectedCategory, currentLocale]);

  return (
    <>
      <Head>
        <title>{`${t('all_recipes')} - ${t('site_name')}`}</title>
        <meta name="description" content={t('newsletter_description')} />
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('all_recipes')}
        </h1>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              data-testid="search-input"
              placeholder={t('search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="md:w-64">
            <select
              data-testid="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">{t('all_categories')}</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name[currentLocale]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes found.</p>
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const recipes = await getAllRecipes();
  const categories = await getCategories();

  return {
    props: {
      recipes,
      categories,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
    revalidate: 60,
  };
};
