import { IMAGES } from '@/lib/images';

export type CategoryId = 'men' | 'women' | 'equipment' | 'supplements' | 'brands';

export type InfoPageId =
  | 'about'
  | 'contact'
  | 'shipping'
  | 'returns'
  | 'faq'
  | 'privacy'
  | 'terms'
  | 'careers';

export type CatalogProduct = {
  id: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  category: CategoryId;
  subcategory: string;
  brand: string;
  badge?: 'New' | 'Trending' | 'Top Pick';
};

export type CategoryMeta = {
  id: CategoryId;
  label: string;
  headline: string;
  description: string;
  subcategories: { id: string; label: string }[];
};

export const NAV_CATEGORIES: CategoryMeta[] = [
  {
    id: 'men',
    label: 'Men',
    headline: 'Engineered for the Modern Saudi Athlete',
    description: 'Performance apparel, footwear, and training essentials built for intensity, heat, and daily discipline.',
    subcategories: [
      { id: 'training', label: 'Training' },
      { id: 'running', label: 'Running' },
      { id: 'recovery', label: 'Recovery' },
    ],
  },
  {
    id: 'women',
    label: 'Women',
    headline: 'Power Meets Precision',
    description: 'Sculpted fits, premium fabrics, and elite recovery gear designed for every training frequency.',
    subcategories: [
      { id: 'yoga', label: 'Yoga & Studio' },
      { id: 'training', label: 'Training' },
      { id: 'running', label: 'Running' },
    ],
  },
  {
    id: 'equipment',
    label: 'Equipment',
    headline: 'Build Your Arena',
    description: 'Gym-grade tools, accessories, and recovery systems for home, travel, and elite facility training.',
    subcategories: [
      { id: 'weights', label: 'Strength' },
      { id: 'accessories', label: 'Accessories' },
      { id: 'recovery', label: 'Recovery' },
    ],
  },
  {
    id: 'supplements',
    label: 'Supplements',
    headline: 'Fuel the Performance',
    description: 'Clinically trusted nutrition for pre-session ignition, intra-workout endurance, and deep recovery.',
    subcategories: [
      { id: 'protein', label: 'Protein' },
      { id: 'pre-workout', label: 'Pre-Workout' },
      { id: 'recovery', label: 'Recovery' },
    ],
  },
  {
    id: 'brands',
    label: 'Brands',
    headline: 'World-Class Labels, Curated for KSA',
    description: 'Shop the most trusted performance brands worn by Saudi athletes at every level.',
    subcategories: [
      { id: 'nike', label: 'Nike' },
      { id: 'adidas', label: 'Adidas' },
      { id: 'lululemon', label: 'Lululemon' },
      { id: 'gymshark', label: 'Gymshark' },
    ],
  },
];

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  // Men
  {
    id: 'men-1',
    name: 'Nike Dri-FIT ADV Training Top',
    desc: 'Laser-perforated ventilation mapped to high-heat zones for relentless gym sessions in Saudi summers.',
    price: 'SAR 249',
    image: IMAGES.maleTraining,
    category: 'men',
    subcategory: 'training',
    brand: 'Nike',
    badge: 'Trending',
  },
  {
    id: 'men-2',
    name: 'Adidas Ultraboost Light — Men',
    desc: 'Lightstrike+ cushioning with Continental™ rubber for explosive energy return on long Riyadh runs.',
    price: 'SAR 750',
    image: IMAGES.shoesAdidas,
    category: 'men',
    subcategory: 'running',
    brand: 'Adidas',
    badge: 'Top Pick',
  },
  {
    id: 'men-3',
    name: 'Gymshark Arrival 5" Shorts',
    desc: 'Lightweight, sweat-wicking training shorts with a tapered athletic cut and secure zip pocket.',
    price: 'SAR 165',
    image: IMAGES.trainingShorts,
    category: 'men',
    subcategory: 'training',
    brand: 'Gymshark',
  },
  {
    id: 'men-4',
    name: 'Nike Victori One Recovery Slides',
    desc: 'Cloud-soft foam footbed engineered for immediate post-session comfort and joint relief.',
    price: 'SAR 199',
    image: IMAGES.slidesRecovery,
    category: 'men',
    subcategory: 'recovery',
    brand: 'Nike',
  },
  {
    id: 'men-5',
    name: 'Under Armour HOVR™ Phantom 3',
    desc: 'Responsive HOVR cushioning delivers a zero-gravity feel for tempo runs and treadmill intervals.',
    price: 'SAR 620',
    image: IMAGES.shoesHovr,
    category: 'men',
    subcategory: 'running',
    brand: 'Under Armour',
    badge: 'New',
  },
  {
    id: 'men-6',
    name: 'SKDK Performance Training Set',
    desc: 'Moisture-wicking compression top and tapered joggers built for brutal daily consistency.',
    price: 'SAR 180',
    image: IMAGES.hoodieFlat,
    category: 'men',
    subcategory: 'training',
    brand: 'SKDK',
  },
  // Women — product-only photography, no models
  {
    id: 'women-1',
    name: 'Lululemon Align™ High-Rise 25"',
    desc: 'Weightless Nulu™ fabric with a buttery second-skin feel for yoga, pilates, and recovery flows.',
    price: 'SAR 450',
    image: IMAGES.leggingsBlack,
    category: 'women',
    subcategory: 'yoga',
    brand: 'Lululemon',
    badge: 'Top Pick',
  },
  {
    id: 'women-2',
    name: 'Gymshark Vital Seamless 2.0 Leggings',
    desc: 'Sculpted seamless knit with strategic ventilation zones for high-intensity studio sessions.',
    price: 'SAR 280',
    image: IMAGES.leggingsSeamless,
    category: 'women',
    subcategory: 'training',
    brand: 'Gymshark',
    badge: 'Trending',
  },
  {
    id: 'women-3',
    name: 'Nike One Luxe Sports Bra',
    desc: 'Medium-support bra with sleek matte finish and adaptive stretch for dynamic training blocks.',
    price: 'SAR 219',
    image: IMAGES.sportsBraFlat,
    category: 'women',
    subcategory: 'training',
    brand: 'Nike',
  },
  {
    id: 'women-4',
    name: 'Adidas Adizero Boston 12 — Women',
    desc: 'Lightweight racing shoe with ENERGYRODS 2.0 for responsive turnover on race day.',
    price: 'SAR 690',
    image: IMAGES.shoesNike,
    category: 'women',
    subcategory: 'running',
    brand: 'Adidas',
    badge: 'New',
  },
  {
    id: 'women-5',
    name: 'Reebok Premium Yoga Mat — 6mm',
    desc: 'Extra-thick cushioning with a textured grip surface for deep stretching and mobility work.',
    price: 'SAR 150',
    image: IMAGES.yogaMat,
    category: 'women',
    subcategory: 'yoga',
    brand: 'Reebok',
  },
  {
    id: 'women-6',
    name: 'Lululemon Energy Longline Bra',
    desc: 'High-support longline silhouette with sweat-wicking Luxtreme™ for HIIT and heavy lifting.',
    price: 'SAR 320',
    image: IMAGES.gymEmpty,
    category: 'women',
    subcategory: 'training',
    brand: 'Lululemon',
  },
  // Equipment
  {
    id: 'eq-1',
    name: 'Bells of Steel Resistance Band Set',
    desc: 'Five progressive resistance levels for portable strength training at home or on the road.',
    price: 'SAR 120',
    image: IMAGES.resistanceBands,
    category: 'equipment',
    subcategory: 'accessories',
    brand: 'Bells of Steel',
    badge: 'Trending',
  },
  {
    id: 'eq-2',
    name: 'Rogue Echo Kettlebell — 16kg',
    desc: 'Single-piece cast iron kettlebell with a chip-resistant matte finish for functional training.',
    price: 'SAR 340',
    image: IMAGES.kettlebell,
    category: 'equipment',
    subcategory: 'weights',
    brand: 'Rogue',
  },
  {
    id: 'eq-3',
    name: 'Theragun Elite Percussive Device',
    desc: 'QuietForce motor with five speeds for deep tissue recovery after high-volume training weeks.',
    price: 'SAR 1,890',
    image: IMAGES.massageGun,
    category: 'equipment',
    subcategory: 'recovery',
    brand: 'Theragun',
    badge: 'Top Pick',
  },
  {
    id: 'eq-4',
    name: 'Nike Pro Hyperwarm Gloves',
    desc: 'Touchscreen-compatible thermal gloves for early-morning outdoor sessions in cooler months.',
    price: 'SAR 129',
    image: IMAGES.gymGloves,
    category: 'equipment',
    subcategory: 'accessories',
    brand: 'Nike',
  },
  {
    id: 'eq-5',
    name: 'CAP Barbell Adjustable Dumbbell Set',
    desc: 'Space-saving dial system replaces 15 pairs of dumbbells for a complete home strength setup.',
    price: 'SAR 2,450',
    image: IMAGES.dumbbells,
    category: 'equipment',
    subcategory: 'weights',
    brand: 'CAP',
    badge: 'New',
  },
  {
    id: 'eq-6',
    name: 'Hyperice Hypervolt Go 2',
    desc: 'Compact percussive massage device with three speeds for on-the-go muscle recovery.',
    price: 'SAR 899',
    image: IMAGES.foamRoller,
    category: 'equipment',
    subcategory: 'recovery',
    brand: 'Hyperice',
  },
  // Supplements
  {
    id: 'sup-1',
    name: 'Optimum Nutrition Gold Standard Whey — 2.27kg',
    desc: '24g whey isolate per scoop for rapid post-session muscle repair and lean mass support.',
    price: 'SAR 350',
    image: IMAGES.proteinGold,
    category: 'supplements',
    subcategory: 'protein',
    brand: 'Optimum Nutrition',
    badge: 'Top Pick',
  },
  {
    id: 'sup-2',
    name: 'BSN Syntha-6 Protein Powder — 2.27kg',
    desc: 'Multi-source protein matrix with 22g per serving for sustained recovery after heavy blocks.',
    price: 'SAR 299',
    image: IMAGES.proteinBSN,
    category: 'supplements',
    subcategory: 'protein',
    brand: 'BSN',
  },
  {
    id: 'sup-3',
    name: 'C4 Original Pre-Workout — 30 Servings',
    desc: 'Explosive energy blend with beta-alanine and creatine nitrate for peak session output.',
    price: 'SAR 185',
    image: IMAGES.preWorkoutC4,
    category: 'supplements',
    subcategory: 'pre-workout',
    brand: 'Cellucor',
    badge: 'Trending',
  },
  {
    id: 'sup-4',
    name: 'MyProtein Micellar Casein — 1kg',
    desc: 'Slow-release protein delivering amino acids over 7 hours for overnight muscle repair.',
    price: 'SAR 220',
    image: IMAGES.proteinCasein,
    category: 'supplements',
    subcategory: 'protein',
    brand: 'MyProtein',
  },
  {
    id: 'sup-5',
    name: 'TNH Sleep Support Blend — 60 Capsules',
    desc: 'Magnesium and adaptogen formula for central nervous system reset and deep recovery sleep.',
    price: 'SAR 185',
    image: IMAGES.capsules,
    category: 'supplements',
    subcategory: 'recovery',
    brand: 'TNH',
  },
  {
    id: 'sup-6',
    name: 'Ghost Legend Pre-Workout — 30 Servings',
    desc: 'Fully transparent label with natural caffeine and nootropics for clean, focused energy.',
    price: 'SAR 210',
    image: IMAGES.preWorkoutGhost,
    category: 'supplements',
    subcategory: 'pre-workout',
    brand: 'Ghost',
    badge: 'New',
  },
  // Brand-specific
  {
    id: 'brand-nike-1',
    name: 'Nike Pro Dri-FIT Crew Socks (3-Pack)',
    desc: 'Anatomical compression and strategic cushioning for grounded stability under pressure.',
    price: 'SAR 89',
    image: IMAGES.socksPack,
    category: 'brands',
    subcategory: 'nike',
    brand: 'Nike',
  },
  {
    id: 'brand-adidas-1',
    name: 'Adidas Own The Run Tee',
    desc: 'AEROREADY moisture management with reflective details for low-light Saudi evening runs.',
    price: 'SAR 149',
    image: IMAGES.maleRunning,
    category: 'brands',
    subcategory: 'adidas',
    brand: 'Adidas',
  },
  {
    id: 'brand-lulu-1',
    name: 'Lululemon Metal Vent Tech Short Sleeve',
    desc: 'Anti-stink Silverescent™ technology keeps you fresh through the longest training blocks.',
    price: 'SAR 295',
    image: IMAGES.dumbbellRack,
    category: 'brands',
    subcategory: 'lululemon',
    brand: 'Lululemon',
    badge: 'New',
  },
  {
    id: 'brand-gym-1',
    name: 'Gymshark Crest Hoodie',
    desc: 'Premium heavyweight fleece with a relaxed athletic fit for warm-ups and rest-day layering.',
    price: 'SAR 245',
    image: IMAGES.hoodieFlat,
    category: 'brands',
    subcategory: 'gymshark',
    brand: 'Gymshark',
  },
];

export const TRENDING_PRODUCTS = CATALOG_PRODUCTS.filter((p) => p.badge === 'Trending' || p.badge === 'Top Pick').slice(0, 4);

export const NEW_ARRIVALS = CATALOG_PRODUCTS.filter((p) => p.badge === 'New' || p.id.endsWith('-5') || p.id.endsWith('-6')).slice(0, 4);

export const FEATURED_COLLECTIONS = [
  {
    id: 'men' as CategoryId,
    title: 'Men\'s Performance',
    subtitle: 'Train harder. Recover smarter.',
    image: IMAGES.gymEmpty,
    productCount: CATALOG_PRODUCTS.filter((p) => p.category === 'men').length,
  },
  {
    id: 'women' as CategoryId,
    title: 'Women\'s Studio & Strength',
    subtitle: 'Sculpted fits for every rep.',
    image: IMAGES.leggingsSeamless,
    productCount: CATALOG_PRODUCTS.filter((p) => p.category === 'women').length,
  },
  {
    id: 'supplements' as CategoryId,
    title: 'Performance Nutrition',
    subtitle: 'Fuel every session with precision.',
    image: IMAGES.proteinGold,
    productCount: CATALOG_PRODUCTS.filter((p) => p.category === 'supplements').length,
  },
];

export const TRUST_BRANDS = ['Nike', 'Adidas', 'Lululemon', 'Gymshark', 'Under Armour', 'Optimum Nutrition'];

export const PAYMENT_METHODS = ['Mada', 'Visa', 'Mastercard', 'Apple Pay', 'Tabby', 'Tamara'];

export function getCategoryMeta(id: CategoryId) {
  return NAV_CATEGORIES.find((c) => c.id === id)!;
}

export function getProductsByCategory(categoryId: CategoryId, subcategoryId?: string) {
  return CATALOG_PRODUCTS.filter(
    (p) =>
      p.category === categoryId &&
      (!subcategoryId || p.subcategory === subcategoryId),
  );
}

export function getAllCategoryProducts(categoryId: CategoryId) {
  return CATALOG_PRODUCTS.filter((p) => p.category === categoryId);
}

export const INFO_PAGES: Record<
  InfoPageId,
  { title: string; headline: string; body: string[] }
> = {
  about: {
    title: 'About Us',
    headline: 'The Mental Coach for the Saudi Athlete',
    body: [
      'Motivation Aura is the Kingdom\'s first mood-intelligent performance platform — merging mental conditioning with curated elite gear.',
      'We believe performance starts within. Your mental frequency determines what gear serves you best on any given day.',
      'Every product in our catalog is hand-selected from the world\'s most trusted performance brands, curated specifically for Saudi athletes.',
    ],
  },
  contact: {
    title: 'Contact',
    headline: 'We\'re Here for You',
    body: [
      'Email: support@motivationaura.sa',
      'Response time: within 24 hours on business days.',
      'For order inquiries, include your order number for faster resolution.',
    ],
  },
  shipping: {
    title: 'Shipping',
    headline: 'Fast Delivery Across KSA',
    body: [
      'Standard delivery: 2–4 business days across major Saudi cities.',
      'Express delivery available for Riyadh, Jeddah, and Dammam.',
      'Free shipping on orders over SAR 500.',
    ],
  },
  returns: {
    title: 'Returns',
    headline: 'Hassle-Free Returns',
    body: [
      '30-day return window on unworn items with original tags.',
      'Free return pickup in major Saudi cities.',
      'Refunds processed within 5–7 business days.',
    ],
  },
  faq: {
    title: 'FAQ',
    headline: 'Common Questions',
    body: [
      'How does the Mood Quiz work? Select your mental state and receive three precision-curated product recommendations.',
      'Do you ship internationally? Currently we serve Saudi Arabia only.',
      'Are all products authentic? Yes — every item is sourced directly from authorized brand distributors.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    headline: 'Your Data, Protected',
    body: [
      'We collect only what is necessary to fulfill orders and improve your experience.',
      'We never sell personal data to third parties.',
      'You may request data deletion at any time by contacting support@motivationaura.sa.',
    ],
  },
  terms: {
    title: 'Terms of Service',
    headline: 'Fair Use Policy',
    body: [
      'By using Motivation Aura, you agree to our policies on fair use, authentic product resale, and accurate account information.',
      'Prices are listed in SAR and include applicable VAT where required.',
    ],
  },
  careers: {
    title: 'Careers',
    headline: 'Join the Aura Team',
    body: [
      'We\'re building the future of mood-intelligent commerce in the Middle East.',
      'Open roles: Performance Marketing, Full-Stack Engineering, Brand Partnerships.',
      'Apply: careers@motivationaura.sa',
    ],
  },
};
