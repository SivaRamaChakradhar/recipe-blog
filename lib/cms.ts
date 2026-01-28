// Types for Recipe data
export interface Recipe {
  slug: string;
  title: {
    en: string;
    es: string;
    fr: string;
  };
  description: {
    en: string;
    es: string;
    fr: string;
  };
  ingredients: {
    en: string[];
    es: string[];
    fr: string[];
  };
  instructions: {
    en: string[];
    es: string[];
    fr: string[];
  };
  featuredImage: string;
  videoUrl?: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cookingTime: number;
  tags: string[];
  isFeatured: boolean;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  content: {
    en: string;
    es: string;
    fr: string;
  };
  date: string;
}

export interface Category {
  id: string;
  name: {
    en: string;
    es: string;
    fr: string;
  };
}

// Mock data for demonstration
const mockRecipes: Recipe[] = [
  {
    slug: 'classic-spanish-paella',
    title: {
      en: 'Classic Spanish Paella',
      es: 'Paella Española Clásica',
      fr: 'Paella Espagnole Classique',
    },
    description: {
      en: 'A traditional Spanish rice dish with seafood, chicken, and aromatic saffron.',
      es: 'Un plato tradicional español de arroz con mariscos, pollo y azafrán aromático.',
      fr: 'Un plat de riz espagnol traditionnel avec fruits de mer, poulet et safran aromatique.',
    },
    ingredients: {
      en: [
        '2 cups paella rice',
        '4 cups chicken broth',
        '1 lb chicken thighs',
        '1/2 lb shrimp',
        '1/2 lb mussels',
        '1 onion, diced',
        '4 cloves garlic, minced',
        '1 red bell pepper, sliced',
        '1 tsp saffron threads',
        '2 tbsp olive oil',
        '1 cup peas',
        'Salt and pepper to taste',
        'Lemon wedges for serving',
      ],
      es: [
        '2 tazas de arroz para paella',
        '4 tazas de caldo de pollo',
        '1 lb de muslos de pollo',
        '1/2 lb de camarones',
        '1/2 lb de mejillones',
        '1 cebolla, picada',
        '4 dientes de ajo, picados',
        '1 pimiento rojo, en rodajas',
        '1 cucharadita de hebras de azafrán',
        '2 cucharadas de aceite de oliva',
        '1 taza de guisantes',
        'Sal y pimienta al gusto',
        'Gajos de limón para servir',
      ],
      fr: [
        '2 tasses de riz à paella',
        '4 tasses de bouillon de poulet',
        '1 lb de cuisses de poulet',
        '1/2 lb de crevettes',
        '1/2 lb de moules',
        '1 oignon, émincé',
        '4 gousses d\'ail, hachées',
        '1 poivron rouge, tranché',
        '1 cuillère à café de filaments de safran',
        '2 cuillères à soupe d\'huile d\'olive',
        '1 tasse de petits pois',
        'Sel et poivre au goût',
        'Quartiers de citron pour servir',
      ],
    },
    instructions: {
      en: [
        'Heat olive oil in a large paella pan over medium heat.',
        'Season chicken with salt and pepper, then brown on all sides. Remove and set aside.',
        'In the same pan, sauté onion, garlic, and bell pepper until softened.',
        'Add rice and saffron, stirring to coat with oil.',
        'Pour in chicken broth and bring to a boil.',
        'Return chicken to pan, reduce heat, and simmer for 15 minutes.',
        'Add shrimp, mussels, and peas. Cook until seafood is done.',
        'Let rest for 5 minutes before serving with lemon wedges.',
      ],
      es: [
        'Calentar aceite de oliva en una paellera grande a fuego medio.',
        'Sazonar el pollo con sal y pimienta, luego dorar por todos lados. Retirar y reservar.',
        'En la misma sartén, saltear la cebolla, el ajo y el pimiento hasta que estén blandos.',
        'Agregar el arroz y el azafrán, revolviendo para cubrir con aceite.',
        'Verter el caldo de pollo y llevar a ebullición.',
        'Devolver el pollo a la sartén, reducir el fuego y cocinar a fuego lento durante 15 minutos.',
        'Agregar camarones, mejillones y guisantes. Cocinar hasta que los mariscos estén listos.',
        'Dejar reposar 5 minutos antes de servir con gajos de limón.',
      ],
      fr: [
        'Chauffer l\'huile d\'olive dans une grande poêle à paella à feu moyen.',
        'Assaisonner le poulet avec du sel et du poivre, puis faire dorer de tous les côtés. Retirer et réserver.',
        'Dans la même poêle, faire revenir l\'oignon, l\'ail et le poivron jusqu\'à ce qu\'ils soient tendres.',
        'Ajouter le riz et le safran, en remuant pour enrober d\'huile.',
        'Verser le bouillon de poulet et porter à ébullition.',
        'Remettre le poulet dans la poêle, réduire le feu et laisser mijoter 15 minutes.',
        'Ajouter les crevettes, les moules et les petits pois. Cuire jusqu\'à ce que les fruits de mer soient cuits.',
        'Laisser reposer 5 minutes avant de servir avec des quartiers de citron.',
      ],
    },
    featuredImage: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    category: 'spanish',
    difficulty: 'Medium',
    cookingTime: 45,
    tags: ['seafood', 'rice', 'spanish', 'one-pot'],
    isFeatured: true,
    comments: [
      {
        id: '1',
        author: 'Maria Rodriguez',
        content: {
          en: 'Absolutely delicious! Just like my grandmother used to make.',
          es: '¡Absolutamente delicioso! Justo como lo hacía mi abuela.',
          fr: 'Absolument délicieux! Comme ma grand-mère le faisait.',
        },
        date: '2025-01-20',
      },
    ],
  },
  {
    slug: 'french-ratatouille',
    title: {
      en: 'French Ratatouille',
      es: 'Ratatouille Francés',
      fr: 'Ratatouille Française',
    },
    description: {
      en: 'A classic French Provençal stewed vegetable dish, perfect for summer.',
      es: 'Un clásico plato francés provenzal de verduras estofadas, perfecto para el verano.',
      fr: 'Un classique plat de légumes mijotés provençal français, parfait pour l\'été.',
    },
    ingredients: {
      en: [
        '2 zucchinis, sliced',
        '2 eggplants, sliced',
        '3 tomatoes, sliced',
        '1 yellow bell pepper, sliced',
        '1 red bell pepper, sliced',
        '1 onion, chopped',
        '4 cloves garlic, minced',
        '3 tbsp olive oil',
        'Fresh basil',
        'Fresh thyme',
        'Salt and pepper',
      ],
      es: [
        '2 calabacines, en rodajas',
        '2 berenjenas, en rodajas',
        '3 tomates, en rodajas',
        '1 pimiento amarillo, en rodajas',
        '1 pimiento rojo, en rodajas',
        '1 cebolla, picada',
        '4 dientes de ajo, picados',
        '3 cucharadas de aceite de oliva',
        'Albahaca fresca',
        'Tomillo fresco',
        'Sal y pimienta',
      ],
      fr: [
        '2 courgettes, tranchées',
        '2 aubergines, tranchées',
        '3 tomates, tranchées',
        '1 poivron jaune, tranché',
        '1 poivron rouge, tranché',
        '1 oignon, haché',
        '4 gousses d\'ail, hachées',
        '3 cuillères à soupe d\'huile d\'olive',
        'Basilic frais',
        'Thym frais',
        'Sel et poivre',
      ],
    },
    instructions: {
      en: [
        'Preheat oven to 375°F (190°C).',
        'In a pan, sauté onion and garlic in olive oil until translucent.',
        'Spread the onion mixture in the bottom of a baking dish.',
        'Arrange vegetable slices in alternating pattern on top.',
        'Drizzle with olive oil, season with salt, pepper, and herbs.',
        'Cover with parchment paper and bake for 45 minutes.',
        'Uncover and bake for another 15 minutes until vegetables are tender.',
        'Garnish with fresh basil before serving.',
      ],
      es: [
        'Precalentar el horno a 375°F (190°C).',
        'En una sartén, saltear la cebolla y el ajo en aceite de oliva hasta que estén transparentes.',
        'Extender la mezcla de cebolla en el fondo de una fuente para hornear.',
        'Organizar las rodajas de verduras en un patrón alternado encima.',
        'Rociar con aceite de oliva, sazonar con sal, pimienta y hierbas.',
        'Cubrir con papel pergamino y hornear durante 45 minutos.',
        'Destapar y hornear otros 15 minutos hasta que las verduras estén tiernas.',
        'Decorar con albahaca fresca antes de servir.',
      ],
      fr: [
        'Préchauffer le four à 375°F (190°C).',
        'Dans une poêle, faire revenir l\'oignon et l\'ail dans l\'huile d\'olive jusqu\'à ce qu\'ils soient translucides.',
        'Étaler le mélange d\'oignon au fond d\'un plat allant au four.',
        'Disposer les tranches de légumes en alternance sur le dessus.',
        'Arroser d\'huile d\'olive, assaisonner de sel, poivre et herbes.',
        'Couvrir de papier sulfurisé et cuire au four pendant 45 minutes.',
        'Découvrir et cuire encore 15 minutes jusqu\'à ce que les légumes soient tendres.',
        'Garnir de basilic frais avant de servir.',
      ],
    },
    featuredImage: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800',
    category: 'french',
    difficulty: 'Easy',
    cookingTime: 75,
    tags: ['vegetarian', 'french', 'healthy', 'gluten-free'],
    isFeatured: true,
    comments: [],
  },
  {
    slug: 'italian-margherita-pizza',
    title: {
      en: 'Italian Margherita Pizza',
      es: 'Pizza Margarita Italiana',
      fr: 'Pizza Margherita Italienne',
    },
    description: {
      en: 'A simple and classic pizza with fresh mozzarella, tomatoes, and basil.',
      es: 'Una pizza simple y clásica con mozzarella fresca, tomates y albahaca.',
      fr: 'Une pizza simple et classique avec mozzarella fraîche, tomates et basilic.',
    },
    ingredients: {
      en: [
        '1 pizza dough ball',
        '1 cup tomato sauce',
        '8 oz fresh mozzarella',
        'Fresh basil leaves',
        '2 tbsp olive oil',
        'Salt to taste',
      ],
      es: [
        '1 bola de masa para pizza',
        '1 taza de salsa de tomate',
        '8 oz de mozzarella fresca',
        'Hojas de albahaca fresca',
        '2 cucharadas de aceite de oliva',
        'Sal al gusto',
      ],
      fr: [
        '1 boule de pâte à pizza',
        '1 tasse de sauce tomate',
        '8 oz de mozzarella fraîche',
        'Feuilles de basilic frais',
        '2 cuillères à soupe d\'huile d\'olive',
        'Sel au goût',
      ],
    },
    instructions: {
      en: [
        'Preheat oven to 475°F (245°C) with a pizza stone inside.',
        'Roll out pizza dough on a floured surface.',
        'Spread tomato sauce evenly over the dough.',
        'Tear mozzarella into pieces and distribute over the pizza.',
        'Drizzle with olive oil and season with salt.',
        'Transfer to hot pizza stone and bake for 10-12 minutes.',
        'Top with fresh basil leaves immediately after removing from oven.',
      ],
      es: [
        'Precalentar el horno a 475°F (245°C) con una piedra para pizza dentro.',
        'Estirar la masa de pizza sobre una superficie enharinada.',
        'Extender la salsa de tomate uniformemente sobre la masa.',
        'Romper la mozzarella en trozos y distribuir sobre la pizza.',
        'Rociar con aceite de oliva y sazonar con sal.',
        'Transferir a la piedra para pizza caliente y hornear durante 10-12 minutos.',
        'Cubrir con hojas de albahaca fresca inmediatamente después de sacar del horno.',
      ],
      fr: [
        'Préchauffer le four à 475°F (245°C) avec une pierre à pizza à l\'intérieur.',
        'Étaler la pâte à pizza sur une surface farinée.',
        'Étaler uniformément la sauce tomate sur la pâte.',
        'Déchirer la mozzarella en morceaux et répartir sur la pizza.',
        'Arroser d\'huile d\'olive et assaisonner de sel.',
        'Transférer sur la pierre à pizza chaude et cuire 10-12 minutes.',
        'Garnir de feuilles de basilic frais immédiatement après la sortie du four.',
      ],
    },
    featuredImage: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
    category: 'italian',
    difficulty: 'Easy',
    cookingTime: 25,
    tags: ['italian', 'pizza', 'vegetarian', 'quick'],
    isFeatured: true,
  },
  {
    slug: 'thai-green-curry',
    title: {
      en: 'Thai Green Curry',
      es: 'Curry Verde Tailandés',
      fr: 'Curry Vert Thaïlandais',
    },
    description: {
      en: 'Aromatic and spicy Thai curry with coconut milk and vegetables.',
      es: 'Curry tailandés aromático y picante con leche de coco y verduras.',
      fr: 'Curry thaïlandais aromatique et épicé au lait de coco et légumes.',
    },
    ingredients: {
      en: [
        '2 tbsp green curry paste',
        '1 can coconut milk',
        '1 lb chicken breast, sliced',
        '1 cup bamboo shoots',
        '1 red bell pepper, sliced',
        '1 cup green beans',
        '2 tbsp fish sauce',
        '1 tbsp sugar',
        'Thai basil leaves',
        '2 tbsp vegetable oil',
      ],
      es: [
        '2 cucharadas de pasta de curry verde',
        '1 lata de leche de coco',
        '1 lb de pechuga de pollo, en rodajas',
        '1 taza de brotes de bambú',
        '1 pimiento rojo, en rodajas',
        '1 taza de judías verdes',
        '2 cucharadas de salsa de pescado',
        '1 cucharada de azúcar',
        'Hojas de albahaca tailandesa',
        '2 cucharadas de aceite vegetal',
      ],
      fr: [
        '2 cuillères à soupe de pâte de curry vert',
        '1 boîte de lait de coco',
        '1 lb de poitrine de poulet, tranchée',
        '1 tasse de pousses de bambou',
        '1 poivron rouge, tranché',
        '1 tasse de haricots verts',
        '2 cuillères à soupe de sauce de poisson',
        '1 cuillère à soupe de sucre',
        'Feuilles de basilic thaï',
        '2 cuillères à soupe d\'huile végétale',
      ],
    },
    instructions: {
      en: [
        'Heat oil in a large pan or wok over medium-high heat.',
        'Add green curry paste and fry for 1 minute until fragrant.',
        'Add chicken and cook until no longer pink.',
        'Pour in coconut milk and bring to a simmer.',
        'Add vegetables and cook for 5-7 minutes.',
        'Stir in fish sauce and sugar.',
        'Garnish with Thai basil and serve with rice.',
      ],
      es: [
        'Calentar aceite en una sartén grande o wok a fuego medio-alto.',
        'Agregar la pasta de curry verde y freír durante 1 minuto hasta que esté fragante.',
        'Agregar el pollo y cocinar hasta que ya no esté rosado.',
        'Verter la leche de coco y llevar a fuego lento.',
        'Agregar las verduras y cocinar durante 5-7 minutos.',
        'Incorporar la salsa de pescado y el azúcar.',
        'Decorar con albahaca tailandesa y servir con arroz.',
      ],
      fr: [
        'Chauffer l\'huile dans une grande poêle ou wok à feu moyen-élevé.',
        'Ajouter la pâte de curry vert et faire frire pendant 1 minute jusqu\'à ce qu\'elle soit parfumée.',
        'Ajouter le poulet et cuire jusqu\'à ce qu\'il ne soit plus rose.',
        'Verser le lait de coco et porter à ébullition.',
        'Ajouter les légumes et cuire pendant 5-7 minutes.',
        'Incorporer la sauce de poisson et le sucre.',
        'Garnir de basilic thaï et servir avec du riz.',
      ],
    },
    featuredImage: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800',
    category: 'thai',
    difficulty: 'Medium',
    cookingTime: 30,
    tags: ['thai', 'curry', 'spicy', 'asian'],
    isFeatured: false,
  },
  {
    slug: 'mexican-tacos-al-pastor',
    title: {
      en: 'Mexican Tacos al Pastor',
      es: 'Tacos al Pastor Mexicanos',
      fr: 'Tacos al Pastor Mexicains',
    },
    description: {
      en: 'Traditional Mexican tacos with marinated pork and pineapple.',
      es: 'Tacos mexicanos tradicionales con cerdo marinado y piña.',
      fr: 'Tacos mexicains traditionnels avec porc mariné et ananas.',
    },
    ingredients: {
      en: [
        '2 lbs pork shoulder, thinly sliced',
        '3 dried guajillo chiles',
        '2 dried ancho chiles',
        '1 cup pineapple, diced',
        '1 onion, chopped',
        '4 cloves garlic',
        '2 tbsp achiote paste',
        'Corn tortillas',
        'Fresh cilantro',
        'Lime wedges',
      ],
      es: [
        '2 lbs de paleta de cerdo, en rodajas finas',
        '3 chiles guajillo secos',
        '2 chiles ancho secos',
        '1 taza de piña, en cubos',
        '1 cebolla, picada',
        '4 dientes de ajo',
        '2 cucharadas de pasta de achiote',
        'Tortillas de maíz',
        'Cilantro fresco',
        'Gajos de limón',
      ],
      fr: [
        '2 lbs d\'épaule de porc, tranchée finement',
        '3 piments guajillo séchés',
        '2 piments ancho séchés',
        '1 tasse d\'ananas, en dés',
        '1 oignon, haché',
        '4 gousses d\'ail',
        '2 cuillères à soupe de pâte d\'achiote',
        'Tortillas de maïs',
        'Coriandre fraîche',
        'Quartiers de citron vert',
      ],
    },
    instructions: {
      en: [
        'Toast and rehydrate dried chiles in hot water.',
        'Blend chiles with garlic, achiote paste, and spices to make marinade.',
        'Marinate pork for at least 4 hours or overnight.',
        'Grill or pan-fry pork until crispy and caramelized.',
        'Warm tortillas and top with pork, pineapple, onion, and cilantro.',
        'Serve with lime wedges.',
      ],
      es: [
        'Tostar y rehidratar los chiles secos en agua caliente.',
        'Licuar los chiles con ajo, pasta de achiote y especias para hacer el adobo.',
        'Marinar el cerdo durante al menos 4 horas o toda la noche.',
        'Asar o freír el cerdo hasta que esté crujiente y caramelizado.',
        'Calentar las tortillas y cubrir con cerdo, piña, cebolla y cilantro.',
        'Servir con gajos de limón.',
      ],
      fr: [
        'Griller et réhydrater les piments séchés dans de l\'eau chaude.',
        'Mixer les piments avec l\'ail, la pâte d\'achiote et les épices pour faire la marinade.',
        'Mariner le porc pendant au moins 4 heures ou toute la nuit.',
        'Griller ou faire frire le porc jusqu\'à ce qu\'il soit croustillant et caramélisé.',
        'Réchauffer les tortillas et garnir de porc, ananas, oignon et coriandre.',
        'Servir avec des quartiers de citron vert.',
      ],
    },
    featuredImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
    category: 'mexican',
    difficulty: 'Hard',
    cookingTime: 60,
    tags: ['mexican', 'pork', 'tacos', 'street-food'],
    isFeatured: false,
  },
];

const mockCategories: Category[] = [
  { id: 'spanish', name: { en: 'Spanish', es: 'Española', fr: 'Espagnole' } },
  { id: 'french', name: { en: 'French', es: 'Francesa', fr: 'Française' } },
  { id: 'italian', name: { en: 'Italian', es: 'Italiana', fr: 'Italienne' } },
  { id: 'thai', name: { en: 'Thai', es: 'Tailandesa', fr: 'Thaïlandaise' } },
  { id: 'mexican', name: { en: 'Mexican', es: 'Mexicana', fr: 'Mexicaine' } },
];

// CMS Service Functions
export async function getAllRecipes(): Promise<Recipe[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockRecipes;
}

export async function getFeaturedRecipes(): Promise<Recipe[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockRecipes.filter((recipe) => recipe.isFeatured);
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockRecipes.find((recipe) => recipe.slug === slug) || null;
}

export async function getAllRecipeSlugs(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockRecipes.map((recipe) => recipe.slug);
}

export async function getCategories(): Promise<Category[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockCategories;
}

export async function getRecipesByCategory(categoryId: string): Promise<Recipe[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockRecipes.filter((recipe) => recipe.category === categoryId);
}
