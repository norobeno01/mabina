// Basic images for menu items
// Centralized Image Asset Management
// Import all images from the centralized asset management system
import {
  // Hot Drinks
  blackCoffeeImg,
  coffeeCreamImg,
  hotChocolateImg,
  nescafeImg,
  nespressoImg,
  greenTeaImg,
  blackTeaImg,
  herbalTeaImg,
  americanTeaImg,

  // Extra Accompaniments
  friesImg,
  potatoesImg,
  edamCheeseImg,
  jbenImg,
  honeyImg,
  jamImg,
  nutellaImg,
  almondAmlouImg,
  peanutAmlouImg,
  smokedTurkeyImg,

  // Breakfast
  beldiBreakfastImg,
  catalanBreakfastImg,
  chamaliBreakfastImg,
  completeBreakfastImg,
  croqueMonsieurImg,
  espagnolBreakfastImg,
  hollandaiseBreakfastImg,
  m9ilaKhlieImg,
  orientalBreakfastImg,
  parisienneBreakfastImg,
  specialBreakfastImg,
  tostadaBreakfastImg,
  croissantImg,
  beghrirImg,
  harchaImg,
  msemenImg,
  smallBreadChocolateImg,

  // Omelettes
  plainOmeletteImg,
  cheeseOmeletteImg,
  mushroomOmeletteImg,
  shrimpOmeletteImg,
  turkeyCheeseOmeletteImg,
  vegetarianOmeletteImg,

  // Juices
  appleJuiceImg,
  avocadoJuiceImg,
  bananaJuiceImg,
  kiwiJuiceImg,
  lemonGingerJuiceImg,
  lemonJuiceImg,
  mangoJuiceImg,
  mixedJuiceImg,
  orangeJuiceImg,
  peachJuiceImg,
  pineappleJuiceImg,
  raspberryJuiceImg,
  royalJuiceImg,
  strawberryJuiceImg,

  // Salads
  cocktailSaladImg,
  mediterraneanOctopusSaladImg,
  mixedSaladImg,
  moroccanSaladImg,
  seafoodSaladImg,

  // Fish
  calamariRigamonteStyleImg,
  friedCalamariImg,
  friedCuttlefishImg,
  garlicShrimpImg,
  grilledHakeFilletImg,
  grilledRedSeaBreamImg,
  grilledSaintPierreFilletImg,
  grilledSalmonFilletImg,
  grilledSeaBassImg,
  grilledSeaBreamImg,
  grilledShrimpImg,
  grilledSoleImg,
  grilledSwordfishFilletImg,
  grilledTunaFilletImg,
  meroRigamonteStyleImg,
  mixedFryImg,
  royalSeafoodRigamonteStyleImg,
  swordfishRigamonteStyleImg,
  fishSoupImg,
  paellaImg,

  // Grills
  grilledBeefSkewerImg,
  grilledBeefSteakImg,
  grilledChickenSkewerImg,
  grilledChickenSteakImg,
  grilledKeftaSkewerImg,
  liverSkewerImg,
  mixedGrillImg,
  slicedChickenImg,
  slicedMeatImg,
  keftaTagineImg,
  fernandezImg,

  // Pasta
  bolognaisePastaImg,
  chickenPestoPastaImg,
  salmonChefSaucePastaImg,
  seafoodWhiteSaucePastaImg,

  // Tacos
  chickenTacosImg,
  cordonBleuTacosImg,
  mincedMeatTacosImg,
  mixedTacosImg,
  nuggetsTacosImg,
  seafoodTacosImg,
  shawarmaTacosImg,
  tendersTacosImg,

  // Wraps
  chickenWrapImg,
  mincedMeatWrapImg,
  seafoodWrapImg,

  // Shawarma
  shawarmaDurumImg,
  shawarmaLebaneseBreadImg,
  shawarmaPaniniImg,
  shawarmaPlatterImg,

  // Kapsalon
  kapsalonImg,

  // Pizzas
  fourSeasonsPizzaImg,
  bolognaisePizzaImg,
  chickenPizzaImg,
  margheritaPizzaImg,
  pepperoniPizzaImg,
  salmonPizzaImg,
  seafoodPizzaImg,
  shawarmaPizzaImg,
  tunaPizzaImg,
  vegetarianPizzaImg,

  // Burgers
  cheeseburgerImg,
  chickenBurgerImg,
  doubleBurgerImg,
  fishBurgerImg,
  houseBurgerImg,

  // Paninis
  paniniImg,
  chickenPaniniImg,
  mincedMeatPaniniImg,
  mixedPaniniImg,
  seafoodPaniniImg,

  // Appetizers
  camembertBitesImg,
  chickenTendersImg,
  croquettesImg,
  mozzarellaSticksImg,
  nuggetsImg,
  redHotJalapenosImg,
  jalapenosCheddarImg,

  // Sauces
  chiliThaiImg,
  saucesImg,
  tartarSauceImg,
  americanMustardImg,

  // Drinks
  drinksImg,
  aaDrinkImg,
  cocaColaImg,
  cocaColaZeroImg,
  freezImg,
  hawaiPineappleImg,
  hawaiTropicalImg,
  linxImg,
  mineralWater15LImg,
  mineralWater50CLImg,
  moguMoguImg,
  moslitosImg,
  oasisImg,
  oulmesImg,
  pomsImg,
  raibImg,
  redBullImg,
  schweppesLemonImg,
  schweppesTonicImg,
  spriteImg
} from '../assets/imageAssets.js';

// Sample gallery images data
export const galleryImages = [
  {
    id: 1,
    src: "/src/assets/grilled-salmon.jpg",
    alt: "Grilled Salmon",
    category: "Seafood",
    title: "Fresh Grilled Salmon",
    description: "Perfectly grilled salmon with herbs and lemon"
  },
  {
    id: 2,
    src: "/src/assets/fish-fillet.jpg",
    alt: "Fish Fillet",
    category: "Seafood",
    title: "Pan-Seared Fish Fillet",
    description: "Delicate fish fillet with seasonal vegetables"
  },
  {
    id: 3,
    src: "/src/assets/lobster.jpg",
    alt: "Lobster",
    category: "Seafood",
    title: "Fresh Lobster",
    description: "Premium lobster prepared to perfection"
  },
  {
    id: 4,
    src: "/src/assets/pasta.jpg",
    alt: "Seafood Pasta",
    category: "Pasta",
    title: "Seafood Linguine",
    description: "Fresh pasta with mixed seafood in garlic sauce"
  },
  {
    id: 5,
    src: "/src/assets/salad.jpg",
    alt: "Fresh Salad",
    category: "Salads",
    title: "Mediterranean Salad",
    description: "Fresh greens with seafood and Mediterranean dressing"
  },
  {
    id: 6,
    src: "/src/assets/breakfast.jpg",
    alt: "Breakfast",
    category: "Breakfast",
    title: "Seafood Breakfast",
    description: "Special breakfast with smoked salmon and eggs"
  },
  {
    id: 7,
    src: "/src/assets/hero_carousel_1.jpg",
    alt: "Restaurant Interior",
    category: "Restaurant",
    title: "Dining Area",
    description: "Our beautiful dining area with ocean view"
  },
  {
    id: 8,
    src: "/src/assets/hero_carousel_2.jpg",
    alt: "Restaurant Atmosphere",
    category: "Restaurant",
    title: "Restaurant Atmosphere",
    description: "Cozy and elegant dining experience"
  }
];

// Sample offers data
export const offers = [
  {
    id: 1,
    title: "Fresh Catch Special",
    title_fr: "Spécial Pêche Fraîche",
    title_ar: "عرض خاص للأسماك الطازجة",
    description: "Get 20% off on our daily fresh catch selection",
    description_fr: "Obtenez 20% de réduction sur notre sélection de pêche fraîche du jour",
    description_ar: "احصل على خصم 20% على مجموعة الأسماك الطازجة اليومية",
    discount: "20% OFF",
    validUntil: "2024-12-31",
    image: "/src/assets/fish-fillet.jpg",
    category: "Seafood"
  },
  {
    id: 2,
    title: "Family Combo Deal",
    title_fr: "Offre Combo Familiale",
    title_ar: "عرض كومبو العائلة",
    description: "Perfect for families - 2 main dishes + 2 sides + drinks",
    description_fr: "Parfait pour les familles - 2 plats principaux + 2 accompagnements + boissons",
    description_ar: "مثالي للعائلات - طبقان رئيسيان + طبقان جانبيان + مشروبات",
    discount: "Save €15",
    validUntil: "2024-12-31",
    image: "/src/assets/grilled-salmon.jpg",
    category: "Combo"
  },
  {
    id: 3,
    title: "Weekend Brunch Special",
    title_fr: "Spécial Brunch du Week-end",
    title_ar: "عرض خاص لبرانش نهاية الأسبوع",
    description: "Enjoy our special weekend brunch menu with fresh seafood options",
    description_fr: "Profitez de notre menu brunch spécial du week-end avec des options de fruits de mer frais",
    description_ar: "استمتع بقائمة برانش نهاية الأسبوع الخاصة مع خيارات المأكولات البحرية الطازجة",
    discount: "15% OFF",
    validUntil: "2024-12-31",
    image: "/src/assets/breakfast.jpg",
    category: "Brunch"
  }
];

export const menuData = {
  categories: [
    {
      id: 1,
      name: {
        en: "Hot Drinks",
        fr: "Boissons Chaudes",
        ar: "المشروبات الساخنة"
      },
      availableFrom: "06:00",
      availableTo: "14:00",
      items: [
        {
          id: 1,
          name: {
            en: "Black Coffee",
            fr: "Café Noir",
            ar: "قهوة سوداء"
          },
          price: 13,
          image: blackCoffeeImg,
          available: true
        },
        {
          id: 2,
          name: {
            en: "Coffee Cream",
            fr: "Café Crème",
            ar: "قهوة بالكريمة"
          },
          price: 13,
          image: coffeeCreamImg,
          available: true
        },
        {
          id: 3,
          name: {
            en: "Hot Chocolate",
            fr: "Chocolat Chaud",
            ar: "شوكولاتة ساخنة"
          },
          price: 13,
          image: hotChocolateImg,
          available: true
        },
        {
          id: 4,
          name: {
            en: "Nescafe",
            fr: "Nescafé",
            ar: "نسكافيه"
          },
          price: 13,
          image: nescafeImg,
          available: true
        },
        {
          id: 5,
          name: {
            en: "Nespresso",
            fr: "Nespresso",
            ar: "نسبريسو"
          },
          price: 17,
          image: nespressoImg,
          available: true
        },
        {
          id: 6,
          name: {
            en: "Green Tea",
            fr: "Thé Vert",
            ar: "شاي أخضر"
          },
          price: 13,
          image: greenTeaImg,
          available: true
        },
        {
          id: 7,
          name: {
            en: "Black Tea",
            fr: "Thé Noir",
            ar: "شاي أسود"
          },
          price: 13,
          image: blackTeaImg,
          available: true
        },
        {
          id: 8,
          name: {
            en: "Herbal Tea",
            fr: "Thé aux Herbes",
            ar: "شاي الأعشاب"
          },
          price: 13,
          image: herbalTeaImg,
          available: true
        },
        {
          id: 9,
          name: {
            en: "American Tea",
            fr: "Thé Américain",
            ar: "شاي أمريكي"
          },
          price: 13,
          image: americanTeaImg,
          available: true
        }
      ]
    },
    {
      id: 2,
      name: {
        en: "A La Carte",
        fr: "A La Carte",
        ar: "أ لا كارت"
      },
      items: [
        {
          id: 10,
          name: {
            en: "Small Bread",
            fr: "Petit Pain",
            ar: "خبز صغير"
          },
          price: 8,
          image: smallBreadChocolateImg,
          available: true
        },
        {
          id: 11,
          name: {
            en: "Croissant",
            fr: "Croissant",
            ar: "كرواسان"
          },
          price: 8,
          image: croissantImg,
          available: true
        },
        {
          id: 12,
          name: {
            en: "Msemen",
            fr: "Msemen",
            ar: "مسمن"
          },
          price: 8,
          image: msemenImg,
          available: true
        },
        {
          id: 13,
          name: {
            en: "Beghrir",
            fr: "Beghrir",
            ar: "بغرير"
          },
          price: 8,
          image: beghrirImg,
          available: true
        },
        {
          id: 14,
          name: {
            en: "Harcha",
            fr: "Harcha",
            ar: "حرشة"
          },
          price: 8,
          image: harchaImg,
          available: true
        }
      ]
    },
    {
      id: 3,
      name: {
        en: "Extra Accompaniments",
        fr: "Extra Accompagnement",
        ar: "مرافقات إضافية"
      },
      items: [
        {
          id: 15,
          name: {
            en: "Honey",
            fr: "Miel",
            ar: "عسل"
          },
          price: 3,
          image: honeyImg,
          available: true
        },
        {
          id: 16,
          name: {
            en: "Jam",
            fr: "Confiture",
            ar: "مربى"
          },
          price: 3,
          image: jamImg,
          available: true
        },
        {
          id: 17,
          name: {
            en: "Laughing Cow Cheese",
            fr: "La Vache Qui Rit",
            ar: "جبن البقرة الضاحكة"
          },
          price: 3,
          image: jbenImg,
          available: true
        },
        {
          id: 18,
          name: {
            en: "Nutella",
            fr: "Nutella",
            ar: "نوتيلا"
          },
          price: 5,
          image: nutellaImg,
          available: true
        },
        {
          id: 19,
          name: {
            en: "Almond Amlou",
            fr: "Amlou Amande",
            ar: "أملو اللوز"
          },
          price: 5,
          image: almondAmlouImg,
          available: true
        },
        {
          id: 20,
          name: {
            en: "Peanut Amlou",
            fr: "Amlou Cacahouète",
            ar: "أملو الفول السوداني"
          },
          price: 5,
          image: peanutAmlouImg,
          available: true
        },
        {
          id: 21,
          name: {
            en: "Jben",
            fr: "Jben",
            ar: "جبن"
          },
          price: 5,
          image: jbenImg,
          available: true
        },
        {
          id: 22,
          name: {
            en: "Edam Cheese",
            fr: "Fromage Edam",
            ar: "جبن إيدام"
          },
          price: 10,
          image: edamCheeseImg,
          available: true
        },
        {
          id: 23,
          name: {
            en: "Smoked Turkey",
            fr: "Dinde Fumé",
            ar: "ديك رومي مدخن"
          },
          price: 10,
          image: smokedTurkeyImg,
          available: true
        }
      ]
    },
    {
      id: 4,
      name: {
        en: "Breakfast",
        fr: "Petit-déjeuner",
        ar: "الإفطار"
      },
      availableFrom: "06:00",
      availableTo: "14:00",
      items: [
        {
          id: 24,
          name: {
            en: "Complete",
            fr: "Complet",
            ar: "كامل"
          },
          description: {
            en: "2 Fried Eggs, Smoked Turkey, Edam Cheese, Cheese, Jben, Olives, Yogurt, Cacher, Hot drink, Mini juice, Mineral water",
            fr: "2 Œufs frits, Dinde fumée, Fromage Edam, Fromage, Jben, Olives, Yaourt, Cacher, Boisson chaude, Mini jus, Eau minérale",
            ar: "بيضتان مقليتان، ديك رومي مدخن، جبن إيدام، جبن، جبن، زيتون، زبادي، كاشير، مشروب ساخن، عصير صغير، ماء معدني"
          },
          price: 40,
          image: completeBreakfastImg,
          available: true
        },
        {
          id: 25,
          name: {
            en: "Catalan",
            fr: "Catalan",
            ar: "كاتالان"
          },
          description: {
            en: "Toasted bread, Grated tomato, Edam cheese, Tuna, Olives, Yogurt, Hot drink, Mini juice, Mineral water",
            fr: "Pain grillé, Tomate râpée, Fromage Edam, Thon, Olives, Yaourt, Boisson chaude, Mini jus, Eau minérale",
            ar: "خبز محمص، طماطم مبشورة، جبن إيدام، تونة، زيتون، زبادي، مشروب ساخن، عصير صغير، ماء معدني"
          },
          price: 40,
          image: catalanBreakfastImg,
          available: true
        },
        {
          id: 26,
          name: {
            en: "Chamali",
            fr: "Chamali",
            ar: "شمالي"
          },
          description: {
            en: "2 Fried Eggs, Toasted bread, Cheese, Olives, Yogurt, Cacher, Hot drink, Mini juice, Mineral water",
            fr: "2 Œufs frits, Pain grillé, Fromage, Olives, Yaourt, Cacher, Boisson chaude, Mini jus, Eau minérale",
            ar: "بيضتان مقليتان، خبز محمص، جبن، زيتون، زبادي، كاشير، مشروب ساخن، عصير صغير، ماء معدني"
          },
          price: 30,
          image: chamaliBreakfastImg,
          available: true
        },
        {
          id: 27,
          name: {
            en: "Croque-Monsieur",
            fr: "Croque-Monsieur",
            ar: "كروك مسيو"
          },
          description: {
            en: "Sandwich bread, 4 Eggs Hollandaise, Smoked Turkey, Edam Cheese, Olives, Yogurt, Hot drink, Mini juice, Mineral water",
            fr: "Pain sandwich, 4 Œufs Hollandaise, Dinde fumée, Fromage Edam, Olives, Yaourt, Boisson chaude, Mini jus, Eau minérale",
            ar: "خبز ساندويش، 4 بيضات هولنديز، ديك رومي مدخن، جبن إيدام، زيتون، زبادي، مشروب ساخن، عصير صغير، ماء معدني"
          },
          price: 35,
          image: croqueMonsieurImg,
          available: true
        },
        {
          id: 28,
          name: {
            en: "Beldi",
            fr: "Beldi",
            ar: "بلدي"
          },
          description: {
            en: "Msemen, Harcha, Beghrir, Toasted bread, 2 Cheeses, Jam, Jben, Amlou, Olives, Yogurt, Hot drink, Mini juice, Mineral water",
            fr: "Msemen, Harcha, Beghrir, Pain grillé, 2 Fromages, Confiture, Jben, Amlou, Olives, Yaourt, Boisson chaude, Mini jus, Eau minérale",
            ar: "مسمن، حرشة، بغرير، خبز محمص، جبنتان، مربى، جبن، أملو، زيتون، زبادي، مشروب ساخن، عصير صغير، ماء معدني"
          },
          price: 35,
          image: beldiBreakfastImg,
          available: true
        },
        {
          id: 29,
          name: {
            en: "Parisienne",
            fr: "Parisienne",
            ar: "باريسية"
          },
          description: {
            en: "Small bread, Croissant, 2 Cheeses, Honey, Jam, Amlou, Olives, Yogurt, Hot drink, Mini juice, Mineral water",
            fr: "Petit pain, Croissant, 2 Fromages, Miel, Confiture, Amlou, Olives, Yaourt, Boisson chaude, Mini jus, Eau minérale",
            ar: "خبز صغير، كرواسان، جبنتان، عسل، مربى، أملو، زيتون، زبادي، مشروب ساخن، عصير صغير، ماء معدني"
          },
          price: 40,
          image: parisienneBreakfastImg,
          available: true
        },
        {
          id: 30,
          name: {
            en: "Hollandaise",
            fr: "Hollandaise",
            ar: "هولنديز"
          },
          description: {
            en: "Sandwich bread, 2 Eggs, Smoked Turkey, Cheddar Cheese, Edam Cheese, Olives, Yogurt, Hot drink, Mini juice, Mineral water",
            fr: "Pain sandwich, 2 Œufs, Dinde fumée, Fromage Cheddar, Fromage Edam, Olives, Yaourt, Boisson chaude, Mini jus, Eau minérale",
            ar: "خبز ساندويش، بيضتان، ديك رومي مدخن، جبن شيدر، جبن إيدام، زيتون، زبادي، مشروب ساخن، عصير صغير، ماء معدني"
          },
          price: 40,
          image: hollandaiseBreakfastImg,
          available: true
        },
        {
          id: 31,
          name: {
            en: "Tostada",
            fr: "Tostada",
            ar: "توستادا"
          },
          description: {
            en: "Toasted bread, 2 Cheeses, Honey, Jben, Jam, Olives, Yogurt, Amlou, Hot drink, Mini juice, Mineral water",
            fr: "Pain grillé, 2 Fromages, Miel, Jben, Confiture, Olives, Yaourt, Amlou, Boisson chaude, Mini jus, Eau minérale",
            ar: "خبز محمص، جبنتان، عسل، جبن، مربى، زيتون، زبادي، أملو، مشروب ساخن، عصير صغير، ماء معدني"
          },
          price: 25,
          image: tostadaBreakfastImg,
          available: true
        },
        {
          id: 32,
          name: {
            en: "Oriental",
            fr: "Oriental",
            ar: "شرقي"
          },
          description: {
            en: "1 Fried Egg, Toasted bread, Cheese, Olives, Yogurt, Cacher, Hot drink, Mineral water, Mini Juice",
            fr: "1 Œuf frit, Pain grillé, Fromage, Olives, Yaourt, Cacher, Boisson chaude, Eau minérale, Mini Jus",
            ar: "بيضة مقلية واحدة، خبز محمص، جبن، زيتون، زبادي، كاشير، مشروب ساخن، ماء معدني، عصير صغير"
          },
          price: 25,
          image: orientalBreakfastImg,
          available: true
        },
        {
          id: 33,
          name: {
            en: "Espagnol",
            fr: "Espagnol",
            ar: "إسباني"
          },
          description: {
            en: "Toasted bread, Edam Cheese, Jben, Olives, Grated tomato, Yogurt, Hot drink, Mini Juice, Mineral Water",
            fr: "Pain grillé, Fromage Edam, Jben, Olives, Tomate râpée, Yaourt, Boisson chaude, Mini Jus, Eau Minérale",
            ar: "خبز محمص، جبن إيدام، جبن، زيتون، طماطم مبشورة، زبادي، مشروب ساخن، عصير صغير، ماء معدني"
          },
          price: 30,
          image: espagnolBreakfastImg,
          available: true
        },
        {
          id: 34,
          name: {
            en: "Cocktail Salad",
            fr: "Salade Cocktail",
            ar: "سلطة كوكتيل"
          },
          description: {
            en: "Mixed fruit salad",
            fr: "Salade de fruits mixte",
            ar: "سلطة فواكه مشكلة"
          },
          price: 40,
          image: cocktailSaladImg,
          available: true
        },
        {
          id: 35,
          name: {
            en: "Special",
            fr: "Spécial",
            ar: "خاص"
          },
          description: {
            en: "2 Scrambled eggs with special sauce, Hot drink, Yogurt, Mini juice, Mineral water",
            fr: "2 Œufs brouillés avec sauce spéciale, Boisson chaude, Yaourt, Mini jus, Eau minérale",
            ar: "بيضتان مخفوقتان بصلصة خاصة، مشروب ساخن، زبادي، عصير صغير، ماء معدني"
          },
          price: 50,
          image: specialBreakfastImg,
          available: true
        },
        {
          id: 36,
          name: {
            en: "Mqila Khlie",
            fr: "Mqila Khlie",
            ar: "مقيلة خلية"
          },
          description: {
            en: "Toasted bread, Cheese, Olives, Yogurt, Hot drink, Edam Cheese, Mini Juice, Mineral Water",
            fr: "Pain grillé, Fromage, Olives, Yaourt, Boisson chaude, Fromage Edam, Mini Jus, Eau Minérale",
            ar: "خبز محمص، جبن، زيتون، زبادي، مشروب ساخن، جبن إيدام، عصير صغير، ماء معدني"
          },
          price: 30,
          image: m9ilaKhlieImg,
          available: true
        }
      ]
    },
    {
      id: 5,
      name: {
        en: "Omelettes",
        fr: "Omelettes",
        ar: "العجة"
      },
      items: [
        {
          id: 37,
          name: {
            en: "Plain Omelette",
            fr: "Omelette Nature",
            ar: "عجة عادية"
          },
          description: {
            en: "Served with hot drink, yogurt, mini juice, and mineral water",
            fr: "Servie avec boisson chaude, yaourt, mini jus et eau minérale",
            ar: "تقدم مع مشروب ساخن وزبادي وعصير صغير وماء معدني"
          },
          price: 30,
          image: plainOmeletteImg,
          available: true
        },
        {
          id: 38,
          name: {
            en: "Shrimp Omelette",
            fr: "Omelette aux Crevettes",
            ar: "عجة بالجمبري"
          },
          description: {
            en: "Served with hot drink, yogurt, mini juice, and mineral water",
            fr: "Servie avec boisson chaude, yaourt, mini jus et eau minérale",
            ar: "تقدم مع مشروب ساخن وزبادي وعصير صغير وماء معدني"
          },
          price: 40,
          image: shrimpOmeletteImg,
          available: true
        },
        {
          id: 39,
          name: {
            en: "Mushroom Omelette",
            fr: "Omelette aux Champignons",
            ar: "عجة بالفطر"
          },
          description: {
            en: "Served with hot drink, yogurt, mini juice, and mineral water",
            fr: "Servie avec boisson chaude, yaourt, mini jus et eau minérale",
            ar: "تقدم مع مشروب ساخن وزبادي وعصير صغير وماء معدني"
          },
          price: 35,
          image: mushroomOmeletteImg,
          available: true
        },
        {
          id: 40,
          name: {
            en: "Vegetarian Omelette",
            fr: "Omelette Végétarienne",
            ar: "عجة نباتية"
          },
          description: {
            en: "Served with hot drink, yogurt, mini juice, and mineral water",
            fr: "Servie avec boisson chaude, yaourt, mini jus et eau minérale",
            ar: "تقدم مع مشروب ساخن وزبادي وعصير صغير وماء معدني"
          },
          price: 35,
          image: vegetarianOmeletteImg,
          available: true
        },
        {
          id: 41,
          name: {
            en: "Cheese Omelette",
            fr: "Omelette au Fromage",
            ar: "عجة بالجبن"
          },
          description: {
            en: "Served with hot drink, yogurt, mini juice, and mineral water",
            fr: "Servie avec boisson chaude, yaourt, mini jus et eau minérale",
            ar: "تقدم مع مشروب ساخن وزبادي وعصير صغير وماء معدني"
          },
          price: 35,
          image: cheeseOmeletteImg,
          available: true
        },
        {
          id: 42,
          name: {
            en: "Turkey & Cheese Omelette",
            fr: "Omelette Dinde Fromage",
            ar: "عجة بالديك الرومي والجبن"
          },
          description: {
            en: "Served with hot drink, yogurt, mini juice, and mineral water",
            fr: "Servie avec boisson chaude, yaourt, mini jus et eau minérale",
            ar: "تقدم مع مشروب ساخن وزبادي وعصير صغير وماء معدني"
          },
          price: 40,
          image: turkeyCheeseOmeletteImg,
          available: true
        }
      ]
    },
    {
      id: 6,
      name: {
        en: "Juices",
        fr: "Jus",
        ar: "العصائر"
      },
      items: [
        {
          id: 43,
          name: {
            en: "Orange Juice",
            fr: "Jus d'Orange",
            ar: "عصير برتقال"
          },
          price: 20,
          image: orangeJuiceImg,
          available: true
        },
        {
          id: 44,
          name: {
            en: "Banana Juice",
            fr: "Jus de Banane",
            ar: "عصير موز"
          },
          price: 20,
          image: bananaJuiceImg,
          available: true
        },
        {
          id: 45,
          name: {
            en: "Apple Juice",
            fr: "Jus de Pomme",
            ar: "عصير تفاح"
          },
          price: 20,
          image: appleJuiceImg,
          available: true
        },
        {
          id: 46,
          name: {
            en: "Avocado Juice",
            fr: "Jus d'Avocat",
            ar: "عصير أفوكادو"
          },
          price: 25,
          image: avocadoJuiceImg,
          available: true
        },
        {
          id: 47,
          name: {
            en: "Avocado with Dried Fruit Juice",
            fr: "Jus d'Avocat Fruit Sec",
            ar: "عصير أفوكادو بالفواكه المجففة"
          },
          price: 35,
          image: avocadoJuiceImg,
          available: true
        },
        {
          id: 48,
          name: {
            en: "Peach Juice",
            fr: "Jus de Pêche",
            ar: "عصير خوخ"
          },
          price: 25,
          image: peachJuiceImg,
          available: true
        },
        {
          id: 49,
          name: {
            en: "Lemon Juice",
            fr: "Jus de Citron",
            ar: "عصير ليمون"
          },
          price: 20,
          image: lemonJuiceImg,
          available: true
        },
        {
          id: 50,
          name: {
            en: "Pineapple Juice",
            fr: "Jus d'Ananas",
            ar: "عصير أناناس"
          },
          price: 25,
          image: pineappleJuiceImg,
          available: true
        },
        {
          id: 51,
          name: {
            en: "Mango Juice",
            fr: "Jus de Mangue",
            ar: "عصير مانجو"
          },
          price: 25,
          image: mangoJuiceImg,
          available: true
        },
        {
          id: 52,
          name: {
            en: "Lemon Ginger Juice",
            fr: "Jus de Citron Gingembre",
            ar: "عصير ليمون بالزنجبيل"
          },
          price: 25,
          image: lemonGingerJuiceImg,
          available: true
        },
        {
          id: 53,
          name: {
            en: "Strawberry Juice",
            fr: "Jus de Fraise",
            ar: "عصير فراولة"
          },
          price: 20,
          image: strawberryJuiceImg,
          available: true
        },
        {
          id: 54,
          name: {
            en: "Kiwi Juice",
            fr: "Jus Kiwi",
            ar: "عصير كيوي"
          },
          price: 25,
          image: kiwiJuiceImg,
          available: true
        },
        {
          id: 55,
          name: {
            en: "Raspberry Juice",
            fr: "Jus Framboise",
            ar: "عصير توت"
          },
          price: 20,
          image: raspberryJuiceImg,
          available: true
        },
        {
          id: 56,
          name: {
            en: "Mixed Juice",
            fr: "Jus Panaché",
            ar: "عصير مشكل"
          },
          price: 25,
          image: mixedJuiceImg,
          available: true
        },
        {
          id: 57,
          name: {
            en: "Royal Juice",
            fr: "Jus Royale",
            ar: "عصير ملكي"
          },
          price: 40,
          image: royalJuiceImg,
          available: true
        }
      ]
    },
    {
      id: 7,
      name: {
        en: "Salads",
        fr: "Salades",
        ar: "السلطات"
      },
      items: [
        {
          id: 58,
          name: {
            en: "Moroccan Salad",
            fr: "Salade Marocaine",
            ar: "سلطة مغربية"
          },
          description: {
            en: "Tomato, Onion, Cucumber",
            fr: "Tomate, Oignon, Concombre",
            ar: "طماطم، بصل، خيار"
          },
          price: 20,
          image: moroccanSaladImg,
          available: true
        },
        {
          id: 59,
          name: {
            en: "Mixed Salad",
            fr: "Salade Variée",
            ar: "سلطة مشكلة"
          },
          description: {
            en: "Green salad, Carrot, Tomato, Cucumber, Potato, Green beans, Beetroot, Tuna, Corn, Rice, Egg",
            fr: "Salade verte, Carotte, Tomate, Concombre, Pomme de terre, Haricots verts, Betterave, Thon, Maïs, Riz, Œuf",
            ar: "سلطة خضراء، جزر، طماطم، خيار، بطاطس، فاصوليا خضراء، شمندر، تونة، ذرة، أرز، بيض"
          },
          price: 25,
          image: mixedSaladImg,
          available: true
        },
        {
          id: 60,
          name: {
            en: "Seafood Salad",
            fr: "Salade Fruits de Mer",
            ar: "سلطة ثمار البحر"
          },
          description: {
            en: "Shrimp, Cuttlefish, Surimi, Pepper, Penne, Pickle, Cherry tomato, Green salad",
            fr: "Crevettes, Seiche, Surimi, Poivron, Penne, Cornichon, Tomate cerise, Salade verte",
            ar: "جمبري، حبار، سوريمي، فلفل، بيني، مخلل، طماطم كرزية، سلطة خضراء"
          },
          price: 40,
          image: seafoodSaladImg,
          available: true
        },
        {
          id: 61,
          name: {
            en: "Mediterranean Octopus Salad",
            fr: "Salade Pulpo Mediterráneo",
            ar: "سلطة الأخطبوط المتوسطية"
          },
          description: {
            en: "Arugula, Red and green pepper, Cherry tomato, Corn, Onion, Octopus",
            fr: "Roquette, Poivron rouge et vert, Tomate cerise, Maïs, Oignon, Poulpe",
            ar: "جرجير، فلفل أحمر وأخضر، طماطم كرزية، ذرة، بصل، أخطبوط"
          },
          price: 40,
          image: mediterraneanOctopusSaladImg,
          available: true
        }
      ]
    },
    {
      id: 8,
      name: {
        en: "Fish",
        fr: "Poissons",
        ar: "الأسماك"
      },
      items: [
        {
          id: 62,
          name: {
            en: "Paella (1 person)",
            fr: "Paella 1 personne",
            ar: "بايلا (شخص واحد)"
          },
          price: 50,
          image: paellaImg,
          available: true
        },
        {
          id: 63,
          name: {
            en: "Mixed Fry (1 person)",
            fr: "Friture Mixte 1 personne",
            ar: "قلي مختلط (شخص واحد)"
          },
          price: 100,
          image: mixedFryImg,
          available: true
        },
        {
          id: 64,
          name: {
            en: "Grilled Shrimp",
            fr: "Crevette Grillée",
            ar: "جمبري مشوي"
          },
          price: 80,
          image: grilledShrimpImg,
          available: true
        },
        {
          id: 65,
          name: {
            en: "Fried Calamari",
            fr: "Calamar Frito",
            ar: "كاليماري مقلي"
          },
          price: 80,
          image: friedCalamariImg,
          available: true
        },
        {
          id: 66,
          name: {
            en: "Fried Cuttlefish",
            fr: "Sepia (Inktvis) Frito",
            ar: "حبار مقلي"
          },
          price: 65,
          image: friedCuttlefishImg,
          available: true
        },
        {
          id: 67,
          name: {
            en: "Garlic Shrimp",
            fr: "Crevitte Pil-Pil",
            ar: "جمبري بالثوم"
          },
          price: 60,
          image: garlicShrimpImg,
          available: true
        },
        {
          id: 68,
          name: {
            en: "Calamari Rigamonte Style",
            fr: "Calamar à la Rigamonte",
            ar: "كاليماري على طريقة ريغامونتي"
          },
          price: 80,
          image: calamariRigamonteStyleImg,
          available: true
        },
        {
          id: 69,
          name: {
            en: "Royal Seafood Rigamonte Style",
            fr: "Fruit de Mer Royale à la Rigamonte",
            ar: "ثمار البحر الملكية على طريقة ريغامونتي"
          },
          price: 90,
          image: royalSeafoodRigamonteStyleImg,
          available: true
        },
        {
          id: 70,
          name: {
            en: "Mero Rigamonte Style",
            fr: "Mero à la Rigamonte",
            ar: "ميرو على طريقة ريغامونتي"
          },
          price: 145,
          image: meroRigamonteStyleImg,
          available: true
        },
        {
          id: 71,
          name: {
            en: "Swordfish Rigamonte Style",
            fr: "Espadon à la Rigamonte",
            ar: "سمك أبو سيف على طريقة ريغامونتي"
          },
          price: 75,
          image: swordfishRigamonteStyleImg,
          available: true
        },
        {
          id: 72,
          name: {
            en: "Grilled Sea Bass",
            fr: "Robalo (Zeebaars) Grillée",
            ar: "قاروص مشوي"
          },
          price: 90,
          image: grilledSeaBassImg,
          available: true
        },
        {
          id: 73,
          name: {
            en: "Grilled Sea Bream",
            fr: "Dorade Grillée",
            ar: "دنيس مشوي"
          },
          price: 90,
          image: grilledSeaBreamImg,
          available: true
        },
        {
          id: 74,
          name: {
            en: "Grilled Saint-Pierre Fillet",
            fr: "Filet de Saint-Pierre Grillée",
            ar: "فيليه سان بيير مشوي"
          },
          price: 90,
          image: grilledSaintPierreFilletImg,
          available: true
        },
        {
          id: 75,
          name: {
            en: "Grilled Swordfish Fillet",
            fr: "Filet d'Espadon (Zwaardvis) Grillée",
            ar: "فيليه سمك أبو سيف مشوي"
          },
          price: 75,
          image: grilledSwordfishFilletImg,
          available: true
        },
        {
          id: 76,
          name: {
            en: "Grilled Salmon Fillet",
            fr: "Filet de Salmon (Zalm) Grillée",
            ar: "فيليه سلمون مشوي"
          },
          price: 100,
          image: grilledSalmonFilletImg,
          available: true
        },
        {
          id: 77,
          name: {
            en: "Grilled Red Sea Bream",
            fr: "Pago Royale Grillée",
            ar: "دنيس أحمر مشوي"
          },
          price: 90,
          image: grilledRedSeaBreamImg,
          available: true
        },
        {
          id: 78,
          name: {
            en: "Grilled Sole",
            fr: "Sole Grillée",
            ar: "سول مشوي"
          },
          price: 90,
          image: grilledSoleImg,
          available: true
        },
        {
          id: 79,
          name: {
            en: "Grilled Hake Fillet",
            fr: "Filet Mirlan Grillée",
            ar: "فيليه هيك مشوي"
          },
          price: 75,
          image: grilledHakeFilletImg,
          available: true
        },
        {
          id: 80,
          name: {
            en: "Grilled Tuna Fillet",
            fr: "Filet de Thon (Tonijn) Grillée",
            ar: "فيليه تونة مشوي"
          },
          price: 75,
          image: grilledTunaFilletImg,
          available: true
        },
        {
          id: 81,
          name: {
            en: "Fish Soup",
            fr: "Soup de Poisson",
            ar: "شوربة السمك"
          },
          price: 35,
          image: fishSoupImg,
          available: true
        }
      ]
    },
    {
      id: 9,
      name: {
        en: "Grills",
        fr: "Grillade",
        ar: "المشاوي"
      },
      items: [
        {
          id: 82,
          name: {
            en: "Grilled Chicken Skewer",
            fr: "Brochette de Poulet Grillée",
            ar: "سيخ دجاج مشوي"
          },
          price: 60,
          image: grilledChickenSkewerImg,
          available: true
        },
        {
          id: 83,
          name: {
            en: "Grilled Beef Skewer",
            fr: "Brochette de Bœuf (Kalf) Grillée",
            ar: "سيخ لحم بقري مشوي"
          },
          price: 70,
          image: grilledBeefSkewerImg,
          available: true
        },
        {
          id: 84,
          name: {
            en: "Grilled Kefta Skewer",
            fr: "Brochette Kefta Grillée",
            ar: "سيخ كفتة مشوي"
          },
          price: 70,
          image: grilledKeftaSkewerImg,
          available: true
        },
        {
          id: 85,
          name: {
            en: "Liver Skewer",
            fr: "Brochette de Foie (Lever)",
            ar: "سيخ كبد"
          },
          price: 80,
          image: liverSkewerImg,
          available: true
        },
        {
          id: 86,
          name: {
            en: "Grilled Beef Steak",
            fr: "Steak de Bœuf (Kalf) Grillée",
            ar: "ستيك لحم بقري مشوي"
          },
          price: 70,
          image: grilledBeefSteakImg,
          available: true
        },
        {
          id: 87,
          name: {
            en: "Grilled Chicken Steak",
            fr: "Steak de Poulet (Kip) Grillée",
            ar: "ستيك دجاج مشوي"
          },
          price: 65,
          image: grilledChickenSteakImg,
          available: true
        },
        {
          id: 88,
          name: {
            en: "Mixed Grill",
            fr: "Grillade Mixte",
            ar: "مشاوي مختلطة"
          },
          price: 90,
          image: mixedGrillImg,
          available: true
        }
      ]
    },
    {
      id: 10,
      name: {
        en: "Dishes",
        fr: "Plats",
        ar: "الأطباق"
      },
      items: [
        {
          id: 89,
          name: {
            en: "Sliced Chicken",
            fr: "Émincé de Poulet",
            ar: "دجاج مقطع"
          },
          description: {
            en: "Chicken, Sautéed Vegetables, Rice, Mushroom Sauce",
            fr: "Poulet, Légumes Sautés, Riz, Sauce aux Champignons",
            ar: "دجاج، خضار مقلية، أرز، صلصة الفطر"
          },
          price: 60,
          image: slicedChickenImg,
          available: true
        },
        {
          id: 90,
          name: {
            en: "Sliced Meat",
            fr: "Émincé de Viande",
            ar: "لحم مقطع"
          },
          description: {
            en: "Meat, Sautéed Vegetables, Rice, Mushroom Sauce",
            fr: "Viande, Légumes Sautés, Riz, Sauce aux Champignons",
            ar: "لحم، خضار مقلية، أرز، صلصة الفطر"
          },
          price: 70,
          image: slicedMeatImg,
          available: true
        },
        {
          id: 91,
          name: {
            en: "Kefta Tagine",
            fr: "Tajine Kefta",
            ar: "طاجين كفتة"
          },
          description: {
            en: "Minced Meat, Tomato Sauce, Egg",
            fr: "Viande Hachée, Sauce Tomate, Œuf",
            ar: "لحم مفروم، صلصة طماطم، بيض"
          },
          price: 45,
          image: keftaTagineImg,
          available: true
        }
      ]
    },
    {
      id: 11,
      name: {
        en: "Pasta",
        fr: "Pâtes",
        ar: "المعكرونة"
      },
      items: [
        {
          id: 92,
          name: {
            en: "Chicken Pesto Sauce (Penne/Spaghetti)",
            fr: "Poulet Sauce Pesto (Penne/Spaghetti)",
            ar: "دجاج بصلصة البيستو (بيني/سباغيتي)"
          },
          description: {
            en: "Chicken, Pesto Sauce, Cheese",
            fr: "Poulet, Sauce Pesto, Fromage",
            ar: "دجاج، صلصة البيستو، جبن"
          },
          price: 45,
          image: chickenPestoPastaImg,
          available: true
        },
        {
          id: 93,
          name: {
            en: "Seafood White Sauce (Penne/Spaghetti)",
            fr: "Fruits de Mer Sauce Blanche (Penne/Spaghetti)",
            ar: "ثمار البحر بالصلصة البيضاء (بيني/سباغيتي)"
          },
          description: {
            en: "Seafood, White Sauce, Cheese",
            fr: "Fruits de Mer, Sauce Blanche, Fromage",
            ar: "ثمار البحر، صلصة بيضاء، جبن"
          },
          price: 55,
          image: seafoodWhiteSaucePastaImg,
          available: true
        },
        {
          id: 94,
          name: {
            en: "Bolognaise (Penne/Spaghetti)",
            fr: "Bolognaise (Penne/Spaghetti)",
            ar: "بولونيز (بيني/سباغيتي)"
          },
          description: {
            en: "Minced Meat, Bolognese Sauce, Cheese",
            fr: "Viande Hachée, Sauce Bolognaise, Fromage",
            ar: "لحم مفروم، صلصة بولونيز، جبن"
          },
          price: 45,
          image: bolognaisePastaImg,
          available: true
        },
        {
          id: 95,
          name: {
            en: "Salmon Chef Sauce (Penne/Spaghetti)",
            fr: "Saumon Sauce Chef (Penne/Spaghetti)",
            ar: "سلمون بصلصة الشيف (بيني/سباغيتي)"
          },
          description: {
            en: "Salmon, Chef Sauce, Cheese",
            fr: "Saumon, Sauce Chef, Fromage",
            ar: "سلمون، صلصة الشيف، جبن"
          },
          price: 90,
          image: salmonChefSaucePastaImg,
          available: true
        }
      ]
    },
    {
      id: 12,
      name: {
        en: "Tacos",
        fr: "Tacos",
        ar: "تاكوس"
      },
      items: [
        {
          id: 96,
          name: {
            en: "Chicken Tacos",
            fr: "Tacos Poulet",
            ar: "تاكوس دجاج"
          },
          description: {
            en: "Chicken, Cheddar Cheese, Choice of Sauce, Fries",
            fr: "Poulet, Fromage Cheddar, Choix de Sauce, Frites",
            ar: "دجاج، جبن شيدر، اختيار الصلصة، بطاطس مقلية"
          },
          price: 40,
          image: chickenTacosImg,
          available: true
        },
        {
          id: 97,
          name: {
            en: "Minced Meat Tacos",
            fr: "Tacos Viande Hachée",
            ar: "تاكوس لحم مفروم"
          },
          description: {
            en: "Minced Meat, Cheddar Cheese, Choice of Sauce, Fries",
            fr: "Viande Hachée, Fromage Cheddar, Choix de Sauce, Frites",
            ar: "لحم مفروم، جبن شيدر، اختيار الصلصة، بطاطس مقلية"
          },
          price: 40,
          image: mincedMeatTacosImg,
          available: true
        },
        {
          id: 98,
          name: {
            en: "Shawarma Tacos",
            fr: "Tacos Chawarma",
            ar: "تاكوس شاورما"
          },
          description: {
            en: "Shawarma, Cheddar Cheese, Choice of Sauce, Fries",
            fr: "Chawarma, Fromage Cheddar, Choix de Sauce, Frites",
            ar: "شاورما، جبن شيدر، اختيار الصلصة، بطاطس مقلية"
          },
          price: 40,
          image: shawarmaTacosImg,
          available: true
        },
        {
          id: 99,
          name: {
            en: "Mixed Tacos",
            fr: "Tacos Mixte",
            ar: "تاكوس مختلط"
          },
          description: {
            en: "Chicken, Minced Meat, Cheddar Cheese, Choice of Sauce, Fries",
            fr: "Poulet, Viande Hachée, Fromage Cheddar, Choix de Sauce, Frites",
            ar: "دجاج، لحم مفروم، جبن شيدر، اختيار الصلصة، بطاطس مقلية"
          },
          price: 40,
          image: mixedTacosImg,
          available: true
        },
        {
          id: 100,
          name: {
            en: "Tenders Tacos",
            fr: "Tacos Tenders",
            ar: "تاكوس تندرز"
          },
          description: {
            en: "Chicken Tenders, Cheddar Cheese, Choice of Sauce, Fries",
            fr: "Tenders de Poulet, Fromage Cheddar, Choix de Sauce, Frites",
            ar: "قطع دجاج مقرمشة، جبن شيدر، اختيار الصلصة، بطاطس مقلية"
          },
          price: 40,
          image: tendersTacosImg,
          available: true
        },
        {
          id: 101,
          name: {
            en: "Nuggets Tacos",
            fr: "Tacos Nuggets",
            ar: "تاكوس ناغتس"
          },
          description: {
            en: "Nuggets, Cheddar Cheese, Choice of Sauce, Fries",
            fr: "Nuggets, Fromage Cheddar, Choix de Sauce, Frites",
            ar: "ناغتس، جبن شيدر، اختيار الصلصة، بطاطس مقلية"
          },
          price: 40,
          image: nuggetsTacosImg,
          available: true
        },
        {
          id: 102,
          name: {
            en: "Cordon Bleu Tacos",
            fr: "Tacos Cordon Bleu",
            ar: "تاكوس كوردون بلو"
          },
          description: {
            en: "Cordon Bleu, Cheddar Cheese, Choice of Sauce, Fries",
            fr: "Cordon Bleu, Fromage Cheddar, Choix de Sauce, Frites",
            ar: "كوردون بلو، جبن شيدر، اختيار الصلصة، بطاطس مقلية"
          },
          price: 40,
          image: cordonBleuTacosImg,
          available: true
        },
        {
          id: 103,
          name: {
            en: "Seafood Tacos",
            fr: "Tacos Fruits de Mer",
            ar: "تاكوس ثمار البحر"
          },
          description: {
            en: "Seafood, Cheddar Cheese, Choice of Sauce, Fries",
            fr: "Fruits de Mer, Fromage Cheddar, Choix de Sauce, Frites",
            ar: "ثمار البحر، جبن شيدر، اختيار الصلصة، بطاطس مقلية"
          },
          price: 50,
          image: seafoodTacosImg,
          available: true
        }
      ]
    },
    {
      id: 13,
      name: {
        en: "Wraps",
        fr: "Wraps",
        ar: "لفائف"
      },
      items: [
        {
          id: 104,
          name: {
            en: "Chicken Wrap",
            fr: "Wrap Chicken",
            ar: "لفافة دجاج"
          },
          description: {
            en: "Chicken, Cheddar Cheese, Green Salad, Tomato, Onion, Choice of Sauce",
            fr: "Poulet, Fromage Cheddar, Salade Verte, Tomate, Oignon, Choix de Sauce",
            ar: "دجاج، جبن شيدر، سلطة خضراء، طماطم، بصل، اختيار الصلصة"
          },
          price: 40,
          image: chickenWrapImg,
          available: true
        },
        {
          id: 105,
          name: {
            en: "Minced Meat Wrap",
            fr: "Wrap Viande Hachée",
            ar: "لفافة لحم مفروم"
          },
          description: {
            en: "Minced Meat, Cheddar Cheese, Green Salad, Tomato, Onion, Choice of Sauce",
            fr: "Viande Hachée, Fromage Cheddar, Salade Verte, Tomate, Oignon, Choix de Sauce",
            ar: "لحم مفروم، جبن شيدر، سلطة خضراء، طماطم، بصل، اختيار الصلصة"
          },
          price: 40,
          image: mincedMeatWrapImg,
          available: true
        },
        {
          id: 106,
          name: {
            en: "Seafood Wrap",
            fr: "Wrap Fruits de Mer",
            ar: "لفافة ثمار البحر"
          },
          description: {
            en: "Seafood, Cheddar Cheese, Green Salad, Tomato, Cocktail Sauce",
            fr: "Fruits de Mer, Fromage Cheddar, Salade Verte, Tomate, Sauce Cocktail",
            ar: "ثمار البحر، جبن شيدر، سلطة خضراء، طماطم، صلصة كوكتيل"
          },
          price: 50,
          image: seafoodWrapImg,
          available: true
        }
      ]
    },
    {
      id: 14,
      name: {
        en: "Shawarma",
        fr: "Chawarma",
        ar: "شاورما"
      },
      items: [
        {
          id: 107,
          name: {
            en: "Shawarma Durum",
            fr: "Chawarma Durum",
            ar: "شاورما دورم"
          },
          description: {
            en: "Shawarma, Cheese, Green Salad, Tomato, Onion, Fries, Choice of Sauce",
            fr: "Chawarma, Fromage, Salade Verte, Tomate, Oignon, Frites, Choix de Sauce",
            ar: "شاورما، جبن، سلطة خضراء، طماطم، بصل، بطاطس مقلية، اختيار الصلصة"
          },
          price: 40,
          image: shawarmaDurumImg,
          available: true
        },
        {
          id: 108,
          name: {
            en: "Shawarma Lebanese Bread",
            fr: "Chawarma Pain Libanais",
            ar: "شاورما خبز لبناني"
          },
          description: {
            en: "Lebanese bread, Shawarma, Green Salad, Tomato, Onion, Pickle, Fries, Pita Sauce",
            fr: "Pain Libanais, Chawarma, Salade Verte, Tomate, Oignon, Cornichon, Frites, Sauce Pita",
            ar: "خبز لبناني، شاورما، سلطة خضراء، طماطم، بصل، مخلل، بطاطس مقلية، صلصة بيتا"
          },
          price: 40,
          image: shawarmaLebaneseBreadImg,
          available: true
        },
        {
          id: 109,
          name: {
            en: "Shawarma Platter",
            fr: "Chawarma au Plat",
            ar: "شاورما في الطبق"
          },
          description: {
            en: "Shawarma, Cheese, Green Salad, Tomato, Onion, Rice, Fries, Choice of Sauce",
            fr: "Chawarma, Fromage, Salade Verte, Tomate, Oignon, Riz, Frites, Choix de Sauce",
            ar: "شاورما، جبن، سلطة خضراء، طماطم، بصل، أرز، بطاطس مقلية، اختيار الصلصة"
          },
          price: 50,
          image: shawarmaPlatterImg,
          available: true
        }
      ]
    },
    {
      id: 15,
      name: {
        en: "Kapsalon",
        fr: "Kapsalon",
        ar: "كابسالون"
      },
      items: [
        {
          id: 110,
          name: {
            en: "Kapsalon",
            fr: "Kapsalon",
            ar: "كابسالون"
          },
          description: {
            en: "Shawarma, Cheese, Green Salad, Tomato, Onion, Corn, Fries, Choice of Sauce",
            fr: "Chawarma, Fromage, Salade Verte, Tomate, Oignon, Maïs, Frites, Choix de Sauce",
            ar: "شاورما، جبن، سلطة خضراء، طماطم، بصل، ذرة، بطاطس مقلية، اختيار الصلصة"
          },
          price: 40,
          image: kapsalonImg,
          available: true
        }
      ]
    },
    {
      id: 16,
      name: {
        en: "Pizzas",
        fr: "Pizzas",
        ar: "البيتزا"
      },
      items: [
        {
          id: 111,
          name: {
            en: "Margherita Pizza",
            fr: "Pizza Margherita",
            ar: "بيتزا مارغريتا"
          },
          description: {
            en: "Tomato sauce, Cheese, Olives, Thyme",
            fr: "Sauce Tomate, Fromage, Olives, Thym",
            ar: "صلصة طماطم، جبن، زيتون، زعتر"
          },
          price: 35,
          image: margheritaPizzaImg,
          available: true
        },
        {
          id: 112,
          name: {
            en: "Vegetarian Pizza",
            fr: "Pizza Végétarien",
            ar: "بيتزا نباتية"
          },
          description: {
            en: "Tomato sauce, Cheese, Tomato, Olives, Pepper, Zucchini, Onion, Mushroom, Thyme",
            fr: "Sauce Tomate, Fromage, Tomate, Olives, Poivron, Courgette, Oignon, Champignon, Thym",
            ar: "صلصة طماطم، جبن، طماطم، زيتون، فلفل، كوسة، بصل، فطر، زعتر"
          },
          price: 40,
          image: vegetarianPizzaImg,
          available: true
        },
        {
          id: 113,
          name: {
            en: "Tuna Pizza",
            fr: "Pizza Thon",
            ar: "بيتزا تونة"
          },
          description: {
            en: "Tomato sauce, Cheese, Tuna, Onion, Olives, Corn, Thyme",
            fr: "Sauce Tomate, Fromage, Thon, Oignon, Olives, Maïs, Thym",
            ar: "صلصة طماطم، جبن، تونة، بصل، زيتون، ذرة، زعتر"
          },
          price: 45,
          image: tunaPizzaImg,
          available: true
        },
        {
          id: 114,
          name: {
            en: "Bolognese Pizza",
            fr: "Pizza Bolognaise",
            ar: "بيتزا بولونيز"
          },
          description: {
            en: "Tomato sauce, Cheese, Minced Meat, Olives, Thyme",
            fr: "Sauce Tomate, Fromage, Viande Hachée, Olives, Thym",
            ar: "صلصة طماطم، جبن، لحم مفروم، زيتون، زعتر"
          },
          price: 45,
          image: bolognaisePizzaImg,
          available: true
        },
        {
          id: 115,
          name: {
            en: "Chicken Pizza",
            fr: "Pizza Poulet",
            ar: "بيتزا دجاج"
          },
          description: {
            en: "Tomato sauce, Cheese, Chicken, Olives, Pepper, Thyme",
            fr: "Sauce Tomate, Fromage, Poulet, Olives, Poivron, Thym",
            ar: "صلصة طماطم، جبن، دجاج، زيتون، فلفل، زعتر"
          },
          price: 45,
          image: chickenPizzaImg,
          available: true
        },
        {
          id: 116,
          name: {
            en: "Shawarma Pizza",
            fr: "Pizza Chawarma",
            ar: "بيتزا شاورما"
          },
          description: {
            en: "Tomato sauce, Cheese, Shawarma, Olives, Pepper, Thyme",
            fr: "Sauce Tomate, Fromage, Chawarma, Olives, Poivron, Thym",
            ar: "صلصة طماطم، جبن، شاورما، زيتون، فلفل، زعتر"
          },
          price: 45,
          image: shawarmaPizzaImg,
          available: true
        },
        {
          id: 117,
          name: {
            en: "4 Seasons Pizza",
            fr: "Pizza 4 Saisons",
            ar: "بيتزا 4 فصول"
          },
          description: {
            en: "Tomato sauce, Cheese, Chicken, Tuna, Seafood, Minced Meat, Olives, Mushroom",
            fr: "Sauce Tomate, Fromage, Poulet, Thon, Fruits de Mer, Viande Hachée, Olives, Champignon",
            ar: "صلصة طماطم، جبن، دجاج، تونة، ثمار البحر، لحم مفروم، زيتون، فطر"
          },
          price: 50,
          image: fourSeasonsPizzaImg,
          available: true
        },
        {
          id: 118,
          name: {
            en: "Seafood Pizza",
            fr: "Pizza Fruits de Mer",
            ar: "بيتزا ثمار البحر"
          },
          description: {
            en: "Tomato sauce, Cheese, Seafood, Olives, Thyme",
            fr: "Sauce Tomate, Fromage, Fruits de Mer, Olives, Thym",
            ar: "صلصة طماطم، جبن، ثمار البحر، زيتون، زعتر"
          },
          price: 55,
          image: seafoodPizzaImg,
          available: true
        },
        {
          id: 119,
          name: {
            en: "Pepperoni Pizza",
            fr: "Pizza Pepperoni",
            ar: "بيتزا بيبروني"
          },
          description: {
            en: "Tomato sauce, Cheese, Pepperoni, Thyme",
            fr: "Sauce Tomate, Fromage, Pepperoni, Thym",
            ar: "صلصة طماطم، جبن، بيبروني، زعتر"
          },
          price: 50,
          image: pepperoniPizzaImg,
          available: true
        },
        {
          id: 120,
          name: {
            en: "Salmon Pizza",
            fr: "Pizza Saumon",
            ar: "بيتزا سلمون"
          },
          description: {
            en: "Tomato sauce, Cheese, Salmon, Thyme",
            fr: "Sauce Tomate, Fromage, Saumon, Thym",
            ar: "صلصة طماطم، جبن، سلمون، زعتر"
          },
          price: 80,
          image: salmonPizzaImg,
          available: true
        }
      ]
    },
    {
      id: 17,
      name: {
        en: "Burgers",
        fr: "Burgers",
        ar: "البرغر"
      },
      items: [
        {
          id: 121,
          name: {
            en: "Cheeseburger",
            fr: "Cheeseburger",
            ar: "تشيز برغر"
          },
          description: {
            en: "Minced Steak, Cheddar Cheese, Green Salad, Tomato, Onion, Choice of Sauce, Fries",
            fr: "Steak Haché, Fromage Cheddar, Salade Verte, Tomate, Oignon, Choix de Sauce, Frites",
            ar: "ستيك مفروم، جبن شيدر، سلطة خضراء، طماطم، بصل، اختيار الصلصة، بطاطس مقلية"
          },
          price: 35,
          image: cheeseburgerImg,
          available: true
        },
        {
          id: 122,
          name: {
            en: "Chicken Burger",
            fr: "Chicken Burger",
            ar: "برغر دجاج"
          },
          description: {
            en: "Chicken portion, Green Salad, Tomato, Choice of Sauce, Fries",
            fr: "Portion de Poulet, Salade Verte, Tomate, Choix de Sauce, Frites",
            ar: "قطعة دجاج، سلطة خضراء، طماطم، اختيار الصلصة، بطاطس مقلية"
          },
          price: 35,
          image: chickenBurgerImg,
          available: true
        },
        {
          id: 123,
          name: {
            en: "Fish Burger",
            fr: "Fish Burger",
            ar: "برغر سمك"
          },
          description: {
            en: "Fish Fillet, Cheddar Cheese, Choice of Sauce, Fries",
            fr: "Filet de Poisson, Fromage Cheddar, Choix de Sauce, Frites",
            ar: "فيليه سمك، جبن شيدر، اختيار الصلصة، بطاطس مقلية"
          },
          price: 40,
          image: fishBurgerImg,
          available: true
        },
        {
          id: 124,
          name: {
            en: "House Burger",
            fr: "Burger Maison",
            ar: "برغر البيت"
          },
          description: {
            en: "Minced Steak, Cheddar Cheese, Smoked Turkey, Caramelized Onion, Barbecue Sauce, Fries",
            fr: "Steak Haché, Fromage Cheddar, Dinde Fumée, Oignon Caramélisé, Sauce Barbecue, Frites",
            ar: "ستيك مفروم، جبن شيدر، ديك رومي مدخن، بصل مكرمل، صلصة باربكيو، بطاطس مقلية"
          },
          price: 40,
          image: houseBurgerImg,
          available: true
        },
        {
          id: 125,
          name: {
            en: "Double Burger",
            fr: "Double Burger",
            ar: "برغر مضاعف"
          },
          description: {
            en: "2 Minced Steaks, 2 Cheddar Cheeses, Green Salad, Tomato, Onion, Choice of Sauce, Fries",
            fr: "2 Steaks Hachés, 2 Fromages Cheddar, Salade Verte, Tomate, Oignon, Choix de Sauce, Frites",
            ar: "2 ستيك مفروم، 2 جبن شيدر، سلطة خضراء، طماطم، بصل، اختيار الصلصة، بطاطس مقلية"
          },
          price: 50,
          image: doubleBurgerImg,
          available: true
        }
      ]
    },

    // Paninis Category
    {
      id: 18,
      name: {
        en: "Paninis",
        fr: "Paninis",
        ar: "بانيني"
      },
      description: {
        en: "Grilled panini sandwiches with various fillings",
        fr: "Sandwichs panini grillés avec diverses garnitures",
        ar: "ساندويتشات بانيني مشوية مع حشوات متنوعة"
      },
      image: paniniImg,
      items: [
        {
          id: 126,
          name: {
            en: "Chicken Panini",
            fr: "Panini Poulet",
            ar: "بانيني دجاج"
          },
          description: {
            en: "Chicken, Cheddar Cheese, Green Salad, Tomato, Choice of Sauce, Fries",
            fr: "Poulet, Fromage Cheddar, Salade Verte, Tomate, Sauce au Choix, Frites",
            ar: "دجاج، جبن شيدر، سلطة خضراء، طماطم، صلصة حسب الاختيار، بطاطس مقلية"
          },
          price: 35,
          image: chickenPaniniImg,
          available: true
        },
        {
          id: 127,
          name: {
            en: "Minced Meat Panini",
            fr: "Panini Viande Hachée",
            ar: "بانيني لحم مفروم"
          },
          description: {
            en: "Minced Meat, Cheddar Cheese, Green Salad, Tomato, Choice of Sauce, Fries",
            fr: "Viande Hachée, Fromage Cheddar, Salade Verte, Tomate, Sauce au Choix, Frites",
            ar: "لحم مفروم، جبن شيدر، سلطة خضراء، طماطم، صلصة حسب الاختيار، بطاطس مقلية"
          },
          price: 35,
          image: mincedMeatPaniniImg,
          available: true
        },
        {
          id: 128,
          name: {
            en: "Shawarma Panini",
            fr: "Panini Chawarma",
            ar: "بانيني شاورما"
          },
          description: {
            en: "Shawarma, Cheddar Cheese, Green Salad, Tomato, Choice of Sauce, Fries",
            fr: "Chawarma, Fromage Cheddar, Salade Verte, Tomate, Sauce au Choix, Frites",
            ar: "شاورما، جبن شيدر، سلطة خضراء، طماطم، صلصة حسب الاختيار، بطاطس مقلية"
          },
          price: 35,
          image: shawarmaPaniniImg,
          available: true
        },
        {
          id: 129,
          name: {
            en: "Mixed Panini",
            fr: "Panini Mixte",
            ar: "بانيني مختلط"
          },
          description: {
            en: "Shawarma, Chicken, Minced Meat, Cheddar Cheese, Green Salad, Tomato, Choice of Sauce, Fries",
            fr: "Chawarma, Poulet, Viande Hachée, Fromage Cheddar, Salade Verte, Tomate, Sauce au Choix, Frites",
            ar: "شاورما، دجاج، لحم مفروم، جبن شيدر، سلطة خضراء، طماطم، صلصة حسب الاختيار، بطاطس مقلية"
          },
          price: 40,
          image: mixedPaniniImg,
          available: true
        },
        {
          id: 130,
          name: {
            en: "Seafood Panini",
            fr: "Panini Fruits de Mer",
            ar: "بانيني مأكولات بحرية"
          },
          description: {
            en: "Seafood, Cheese, Tomato, Green Salad, Cocktail Sauce",
            fr: "Fruits de Mer, Fromage, Tomate, Salade Verte, Sauce Cocktail",
            ar: "مأكولات بحرية، جبن، طماطم، سلطة خضراء، صلصة كوكتيل"
          },
          price: 45,
          image: seafoodPaniniImg,
          available: true
        }
      ]
    },

    // Croquettes Category
    {
      id: 19,
      name: {
        en: "Croquettes",
        fr: "Croquettes",
        ar: "كروكيت"
      },
      description: {
        en: "Crispy fried appetizers and sides",
        fr: "Amuse-bouches et accompagnements frits croustillants",
        ar: "مقبلات ومرافقات مقلية مقرمشة"
      },
      image: croquettesImg,
      items: [
        {
          id: 131,
          name: {
            en: "Nuggets",
            fr: "Nuggets",
            ar: "ناجتس"
          },
          description: {
            en: "4 Pieces of crispy chicken nuggets",
            fr: "4 Pièces de nuggets de poulet croustillants",
            ar: "4 قطع من ناجتس الدجاج المقرمش"
          },
          price: 30,
          image: nuggetsImg,
          available: true
        },
        {
          id: 132,
          name: {
            en: "Moslitos",
            fr: "Moslitos",
            ar: "موسليتوس"
          },
          description: {
            en: "4 Pieces of crispy moslitos",
            fr: "4 Pièces de moslitos croustillants",
            ar: "4 قطع من الموسليتوس المقرمش"
          },
          price: 30,
          image: moslitosImg,
          available: true
        },
        {
          id: 133,
          name: {
            en: "Chicken Tenders",
            fr: "Chicken Tenders",
            ar: "أصابع الدجاج"
          },
          description: {
            en: "4 Pieces of tender chicken strips",
            fr: "4 Pièces de lamelles de poulet tendres",
            ar: "4 قطع من شرائح الدجاج الطرية"
          },
          price: 30,
          image: chickenTendersImg,
          available: true
        },
        {
          id: 134,
          name: {
            en: "Mozzarella Sticks",
            fr: "Mozzarella Sticks",
            ar: "أصابع الموزاريلا"
          },
          description: {
            en: "4 Pieces of crispy mozzarella cheese sticks",
            fr: "4 Pièces de bâtonnets de fromage mozzarella croustillants",
            ar: "4 قطع من أصابع جبن الموزاريلا المقرمشة"
          },
          price: 30,
          image: mozzarellaSticksImg,
          available: true
        },
        {
          id: 135,
          name: {
            en: "Red Hot Jalapenos",
            fr: "Red Hot Jalapenos",
            ar: "هالابينو حار أحمر"
          },
          description: {
            en: "4 Pieces of spicy red hot jalapeno poppers",
            fr: "4 Pièces de jalapeños rouges épicés",
            ar: "4 قطع من الهالابينو الأحمر الحار"
          },
          price: 30,
          image: redHotJalapenosImg,
          available: true
        },
        {
          id: 136,
          name: {
            en: "Jalapenos Cheddar",
            fr: "Jalapenos Cheddar",
            ar: "هالابينو شيدر"
          },
          description: {
            en: "4 Pieces of jalapenos stuffed with cheddar cheese",
            fr: "4 Pièces de jalapeños farcis au fromage cheddar",
            ar: "4 قطع من الهالابينو المحشو بجبن الشيدر"
          },
          price: 30,
          image: jalapenosCheddarImg,
          available: true
        },
        {
          id: 137,
          name: {
            en: "Camembert Bites",
            fr: "Camembert Bites",
            ar: "قطع الكامامبير"
          },
          description: {
            en: "4 Pieces of crispy camembert cheese bites",
            fr: "4 Pièces de bouchées de fromage camembert croustillantes",
            ar: "4 قطع من جبن الكامامبير المقرمش"
          },
          price: 30,
          image: camembertBitesImg,
          available: true
        },
        {
          id: 138,
          name: {
            en: "Potatoes",
            fr: "Potatoes",
            ar: "بطاطس"
          },
          description: {
            en: "Crispy seasoned potato wedges",
            fr: "Quartiers de pommes de terre croustillants assaisonnés",
            ar: "أسافين البطاطس المقرمشة المتبلة"
          },
          price: 20,
          image: potatoesImg,
          available: true
        },
        {
          id: 139,
          name: {
            en: "Fries",
            fr: "Frites",
            ar: "بطاطس مقلية"
          },
          description: {
            en: "Classic golden french fries",
            fr: "Frites françaises dorées classiques",
            ar: "بطاطس مقلية ذهبية كلاسيكية"
          },
          price: 10,
          image: friesImg,
          available: true
        }
      ]
    },

    // Sauces Category
    {
      id: 20,
      name: {
        en: "Sauces",
        fr: "Sauces",
        ar: "صلصات"
      },
      description: {
        en: "Premium sauces to complement your meal",
        fr: "Sauces premium pour accompagner votre repas",
        ar: "صلصات فاخرة لتكمل وجبتك"
      },
      image: saucesImg,
      items: [
        {
          id: 140,
          name: {
            en: "Chili Thai",
            fr: "Chili Thai",
            ar: "تشيلي تايلاندي"
          },
          description: {
            en: "Spicy Thai-style chili sauce",
            fr: "Sauce chili épicée de style thaïlandais",
            ar: "صلصة تشيلي حارة على الطريقة التايلاندية"
          },
          price: 5,
          image: chiliThaiImg,
          available: true
        },
        {
          id: 141,
          name: {
            en: "American Mustard",
            fr: "Moutarde Américaine",
            ar: "خردل أمريكي"
          },
          description: {
            en: "Classic American-style yellow mustard",
            fr: "Moutarde jaune classique de style américain",
            ar: "خردل أصفر كلاسيكي على الطريقة الأمريكية"
          },
          price: 5,
          image: americanMustardImg,
          available: true
        },
        {
          id: 142,
          name: {
            en: "Tartar Sauce",
            fr: "Sauce Tartare",
            ar: "صلصة التارتار"
          },
          description: {
            en: "Creamy tartar sauce perfect for seafood",
            fr: "Sauce tartare crémeuse parfaite pour les fruits de mer",
            ar: "صلصة التارتار الكريمية المثالية للمأكولات البحرية"
          },
          price: 5,
          image: tartarSauceImg,
          available: true
        }
      ]
    },

    // Drinks Category
    {
      id: 21,
      name: {
        en: "Drinks",
        fr: "Boissons",
        ar: "مشروبات"
      },
      description: {
        en: "Refreshing beverages to quench your thirst",
        fr: "Boissons rafraîchissantes pour étancher votre soif",
        ar: "مشروبات منعشة لإرواء عطشك"
      },
      image: drinksImg,
      items: [
        {
          id: 143,
          name: {
            en: "Coca Cola",
            fr: "Coca Cola",
            ar: "كوكا كولا"
          },
          description: {
            en: "Classic Coca Cola soft drink",
            fr: "Boisson gazeuse Coca Cola classique",
            ar: "مشروب كوكا كولا الكلاسيكي"
          },
          price: 13,
          image: cocaColaImg,
          available: true
        },
        {
          id: 144,
          name: {
            en: "Coca Cola Zero",
            fr: "Coca Cola Zero",
            ar: "كوكا كولا زيرو"
          },
          description: {
            en: "Sugar-free Coca Cola Zero",
            fr: "Coca Cola Zero sans sucre",
            ar: "كوكا كولا زيرو خالي من السكر"
          },
          price: 13,
          image: cocaColaZeroImg,
          available: true
        },
        {
          id: 145,
          name: {
            en: "Sprite",
            fr: "Sprite",
            ar: "سبرايت"
          },
          description: {
            en: "Refreshing lemon-lime soda",
            fr: "Soda rafraîchissant citron-lime",
            ar: "مشروب غازي منعش بالليمون والليم"
          },
          price: 13,
          image: spriteImg,
          available: true
        },
        {
          id: 146,
          name: {
            en: "Poms",
            fr: "Poms",
            ar: "بومس"
          },
          description: {
            en: "Local Moroccan soft drink",
            fr: "Boisson gazeuse marocaine locale",
            ar: "مشروب غازي مغربي محلي"
          },
          price: 13,
          image: pomsImg,
          available: true
        },
        {
          id: 147,
          name: {
            en: "Hawai Tropical",
            fr: "Hawai Tropical",
            ar: "هاواي استوائي"
          },
          description: {
            en: "Tropical fruit flavored drink",
            fr: "Boisson aux fruits tropicaux",
            ar: "مشروب بنكهة الفواكه الاستوائية"
          },
          price: 13,
          image: hawaiTropicalImg,
          available: true
        },
        {
          id: 148,
          name: {
            en: "Hawai Pineapple",
            fr: "Hawai Ananas",
            ar: "هاواي أناناس"
          },
          description: {
            en: "Pineapple flavored refreshing drink",
            fr: "Boisson rafraîchissante à l'ananas",
            ar: "مشروب منعش بنكهة الأناناس"
          },
          price: 13,
          image: hawaiPineappleImg,
          available: true
        },
        {
          id: 149,
          name: {
            en: "Schweppes Lemon",
            fr: "Schweppes Citron",
            ar: "شويبس ليمون"
          },
          description: {
            en: "Lemon flavored sparkling water",
            fr: "Eau pétillante au citron",
            ar: "مياه فوارة بنكهة الليمون"
          },
          price: 13,
          image: schweppesLemonImg,
          available: true
        },
        {
          id: 150,
          name: {
            en: "Schweppes Tonic",
            fr: "Schweppes Tonic",
            ar: "شويبس تونيك"
          },
          description: {
            en: "Classic tonic water",
            fr: "Eau tonique classique",
            ar: "مياه تونيك كلاسيكية"
          },
          price: 13,
          image: schweppesTonicImg,
          available: true
        },
        {
          id: 151,
          name: {
            en: "Oulmes",
            fr: "Oulmes",
            ar: "أولماس"
          },
          description: {
            en: "Moroccan sparkling mineral water",
            fr: "Eau minérale pétillante marocaine",
            ar: "مياه معدنية فوارة مغربية"
          },
          price: 13,
          image: oulmesImg,
          available: true
        },
        {
          id: 152,
          name: {
            en: "AA Drink",
            fr: "AA Drink",
            ar: "إيه إيه درينك"
          },
          description: {
            en: "Energy drink for active lifestyle",
            fr: "Boisson énergisante pour un mode de vie actif",
            ar: "مشروب طاقة لنمط حياة نشط"
          },
          price: 20,
          image: aaDrinkImg,
          available: true
        },
        {
          id: 153,
          name: {
            en: "Mogu Mogu",
            fr: "Mogu Mogu",
            ar: "موغو موغو"
          },
          description: {
            en: "Fruit drink with nata de coco",
            fr: "Boisson aux fruits avec nata de coco",
            ar: "مشروب فواكه مع ناتا دي كوكو"
          },
          price: 20,
          image: moguMoguImg,
          available: true
        },
        {
          id: 154,
          name: {
            en: "Fernandez",
            fr: "Fernández",
            ar: "فرنانديز"
          },
          description: {
            en: "Premium fruit juice",
            fr: "Jus de fruits premium",
            ar: "عصير فواكه فاخر"
          },
          price: 20,
          image: fernandezImg,
          available: true
        },
        {
          id: 155,
          name: {
            en: "Oasis",
            fr: "Oasis",
            ar: "واحة"
          },
          description: {
            en: "Tropical fruit drink",
            fr: "Boisson aux fruits tropicaux",
            ar: "مشروب فواكه استوائية"
          },
          price: 20,
          image: oasisImg,
          available: true
        },
        {
          id: 156,
          name: {
            en: "Freez",
            fr: "Freez",
            ar: "فريز"
          },
          description: {
            en: "Frozen fruit slush drink",
            fr: "Boisson glacée aux fruits",
            ar: "مشروب فواكه مثلج"
          },
          price: 20,
          image: freezImg,
          available: true
        },
        {
          id: 157,
          name: {
            en: "Red Bull",
            fr: "Red Bull",
            ar: "ريد بول"
          },
          description: {
            en: "Premium energy drink",
            fr: "Boisson énergisante premium",
            ar: "مشروب طاقة فاخر"
          },
          price: 25,
          image: redBullImg,
          available: true
        },
        {
          id: 158,
          name: {
            en: "Linx",
            fr: "Linx",
            ar: "لينكس"
          },
          description: {
            en: "Energy drink with unique flavor",
            fr: "Boisson énergisante au goût unique",
            ar: "مشروب طاقة بنكهة فريدة"
          },
          price: 20,
          image: linxImg,
          available: true
        },
        {
          id: 159,
          name: {
            en: "Mineral Water 50 CL",
            fr: "Eau Minérale 50 CL",
            ar: "مياه معدنية 50 سل"
          },
          description: {
            en: "Pure mineral water 50cl bottle",
            fr: "Eau minérale pure bouteille 50cl",
            ar: "مياه معدنية نقية زجاجة 50 سل"
          },
          price: 6,
          image: mineralWater50CLImg,
          available: true
        },
        {
           id: 160,
           name: {
             en: "Mineral Water 1.5 L",
             fr: "Eau Minérale 1,5 L",
             ar: "مياه معدنية 1.5 لتر"
           },
           description: {
             en: "Pure mineral water 1.5L bottle",
             fr: "Eau minérale pure bouteille 1,5L",
             ar: "مياه معدنية نقية زجاجة 1.5 لتر"
           },
           price: 15,
           image: mineralWater15LImg,
           available: true
         },
         {
           id: 161,
           name: {
             en: "Raib",
             fr: "Raib",
             ar: "رايب"
           },
           description: {
             en: "Traditional Moroccan buttermilk drink",
             fr: "Boisson traditionnelle marocaine au babeurre",
             ar: "مشروب اللبن المخيض المغربي التقليدي"
           },
           price: 13,
           image: raibImg,
           available: true
         }
      ]
    }
  ]
};