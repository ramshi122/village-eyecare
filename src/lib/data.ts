import { Product, Category, Offer, Review } from './types';

// ===== CATEGORIES =====
export const CATEGORIES: Category[] = [
  { id: 'c1', name: 'Eyeglasses', slug: 'eyeglasses', icon: 'glasses', description: 'Premium frames with prescription lenses' },
  { id: 'c2', name: 'Sunglasses', slug: 'sunglasses', icon: 'sun', description: 'UV-protective stylish shades' },
  { id: 'c3', name: 'Contact Lenses', slug: 'contact-lenses', icon: 'eye', description: 'Soft & comfortable daily wear lenses' },
  { id: 'c4', name: 'Power Sunglasses', slug: 'power-sunglasses', icon: 'sun-medium', description: 'Sunglasses with your prescription' },
  { id: 'c5', name: 'Computer Glasses', slug: 'computer-glasses', icon: 'monitor', description: 'Blue-light blocking eyewear' },
  { id: 'c6', name: 'Kids Glasses', slug: 'kids-glasses', icon: 'baby', description: 'Durable frames for children' },
  { id: 'c7', name: 'Accessories', slug: 'accessories', icon: 'package', description: 'Cases, cleaners & more' },
];

// ===== HELPER =====
const img = (seed: string, color = '1e3a8a') =>
  `https://picsum.photos/seed/${seed}/600/600`;

const sampleReviews: Review[] = [
  { id: 'r1', productId: '', userName: 'Aarav Sharma', rating: 5, title: 'Excellent quality!', comment: 'The frame is lightweight and looks premium. Fast delivery by Italia Optical.', date: '2025-05-12' },
  { id: 'r2', productId: '', userName: 'Priya Mehta', rating: 4, title: 'Good value for money', comment: 'Stylish design and the lenses are perfectly adjusted. Slightly tight on temples.', date: '2025-04-28' },
  { id: 'r3', productId: '', userName: 'Rohit Gupta', rating: 5, title: 'Highly recommend', comment: 'Got many compliments. The try-on feature helped me choose the perfect frame.', date: '2025-04-15' },
  { id: 'r4', productId: '', userName: 'Sneha Reddy', rating: 4, title: 'Satisfied', comment: 'Good product but delivery took 4 days. Frame quality is top notch.', date: '2025-03-30' },
];

const makeReviews = (productId: string, count: number): Review[] =>
  Array.from({ length: count }).map((_, i) => ({ ...sampleReviews[i % sampleReviews.length], id: `${productId}-r${i}`, productId }));

// ===== PRODUCTS =====
export const PRODUCTS: Product[] = [
  // EYEGLASSES
  {
    id: 'p1', name: 'Milano Round Acetate Frame', slug: 'milano-round-acetate', brand: 'Italia Premium',
    description: 'Handcrafted Italian acetate frame with a classic round silhouette. Spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.',
    price: 2499, mrp: 4999, discount: 50, categoryId: 'c1', categorySlug: 'eyeglasses',
    frameShape: 'round', frameColor: 'Tortoise', gender: 'unisex', material: 'Acetate',
    weight: '18g', size: 'Medium', images: [img('milano1'), img('milano2'), img('milano3'), img('milano4')],
    rating: 4.7, reviewCount: 124, stock: 35, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: makeReviews('p1', 4),
  },
  {
    id: 'p2', name: 'Venice Cat-Eye Glossy Frame', slug: 'venice-cat-eye-glossy', brand: 'Italia Femme',
    description: 'Bold cat-eye frame inspired by Venetian glamour. Glossy finish with gold-tone temple accents. Perfect for oval and heart-shaped faces.',
    price: 3299, mrp: 5999, discount: 45, categoryId: 'c1', categorySlug: 'eyeglasses',
    frameShape: 'cat-eye', frameColor: 'Black Rose', gender: 'women', material: 'Acetate',
    weight: '20g', size: 'Medium', images: [img('venice1'), img('venice2'), img('venice3')],
    rating: 4.6, reviewCount: 89, stock: 28, isFeatured: true, isNew: true, isBestSeller: true, isOffer: false,
    reviews: makeReviews('p2', 3),
  },
  {
    id: 'p3', name: 'Roma Titanium Rectangle', slug: 'roma-titanium-rectangle', brand: 'Italia Pro',
    description: 'Ultra-lightweight titanium frame with rectangular lenses. Hypoallergenic, durable and corrosion-resistant. Ideal for professional settings.',
    price: 4499, mrp: 7999, discount: 44, categoryId: 'c1', categorySlug: 'eyeglasses',
    frameShape: 'rectangle', frameColor: 'Gunmetal', gender: 'men', material: 'Titanium',
    weight: '12g', size: 'Medium', images: [img('roma1'), img('roma2'), img('roma3')],
    rating: 4.8, reviewCount: 156, stock: 42, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: makeReviews('p3', 4),
  },
  {
    id: 'p4', name: 'Florence Square Acetate', slug: 'florence-square-acetate', brand: 'Italia Premium',
    description: 'Statement square frame in rich acetate. Bold and fashionable, designed for confident personalities.',
    price: 2799, mrp: 5499, discount: 49, categoryId: 'c1', categorySlug: 'eyeglasses',
    frameShape: 'square', frameColor: 'Honey Amber', gender: 'unisex', material: 'Acetate',
    weight: '22g', size: 'Large', images: [img('florence1'), img('florence2'), img('florence3')],
    rating: 4.5, reviewCount: 67, stock: 18, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: makeReviews('p4', 2),
  },
  // SUNGLASSES
  {
    id: 'p5', name: 'Capri Aviator Polarized', slug: 'capri-aviator-polarized', brand: 'Italia Sun',
    description: 'Classic aviator sunglasses with polarized UV400 lenses. Stainless steel frame with anti-scratch coating. Comes with premium leather case.',
    price: 1999, mrp: 3999, discount: 50, categoryId: 'c2', categorySlug: 'sunglasses',
    frameShape: 'aviator', frameColor: 'Gold Brown', gender: 'unisex', material: 'Metal',
    weight: '25g', size: 'Medium', images: [img('capri1'), img('capri2'), img('capri3')],
    rating: 4.7, reviewCount: 203, stock: 56, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: makeReviews('p5', 4),
  },
  {
    id: 'p6', name: 'Sicily Oversized Square Shades', slug: 'sicily-oversized-shades', brand: 'Italia Femme',
    description: 'Glamorous oversized square sunglasses with gradient lenses. Acetate frame with UV400 protection. Celebrity-inspired design.',
    price: 2499, mrp: 4999, discount: 50, categoryId: 'c2', categorySlug: 'sunglasses',
    frameShape: 'square', frameColor: 'Tortoise Gradient', gender: 'women', material: 'Acetate',
    weight: '28g', size: 'Large', images: [img('sicily1'), img('sicily2'), img('sicily3')],
    rating: 4.6, reviewCount: 142, stock: 33, isFeatured: true, isNew: true, isBestSeller: true, isOffer: true,
    reviews: makeReviews('p6', 3),
  },
  {
    id: 'p7', name: 'Naples Sport Wrap', slug: 'naples-sport-wrap', brand: 'Italia Active',
    description: 'Wraparound sports sunglasses with non-slip nose pads. Shatterproof polycarbonate lenses. Perfect for outdoor activities.',
    price: 1799, mrp: 3499, discount: 49, categoryId: 'c2', categorySlug: 'sunglasses',
    frameShape: 'rectangle', frameColor: 'Matte Black', gender: 'men', material: 'Polycarbonate',
    weight: '24g', size: 'Medium', images: [img('naples1'), img('naples2'), img('naples3')],
    rating: 4.5, reviewCount: 78, stock: 41, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: makeReviews('p7', 2),
  },
  // CONTACT LENSES
  {
    id: 'p8', name: 'Aqua Clear Daily Lenses (30 Pack)', slug: 'aqua-clear-daily-30', brand: 'Italia Vision',
    description: 'Daily disposable soft contact lenses with high oxygen permeability. UV blocker. 30 lenses per box. Comfortable for 12+ hours of wear.',
    price: 1299, mrp: 1999, discount: 35, categoryId: 'c3', categorySlug: 'contact-lenses',
    frameShape: 'round', frameColor: 'Clear', gender: 'unisex', material: 'Silicone Hydrogel',
    weight: 'N/A', size: 'One Size', images: [img('aqua1'), img('aqua2')],
    rating: 4.6, reviewCount: 312, stock: 80, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: makeReviews('p8', 4),
  },
  {
    id: 'p9', name: 'Color Glow Monthly Lenses (2 Pack)', slug: 'color-glow-monthly', brand: 'Italia Vision',
    description: 'Monthly colored contact lenses in natural hazel shade. Enhances your eye color naturally. 2 lenses per box with cleaning case.',
    price: 1599, mrp: 2499, discount: 36, categoryId: 'c3', categorySlug: 'contact-lenses',
    frameShape: 'round', frameColor: 'Hazel', gender: 'unisex', material: 'HEMA',
    weight: 'N/A', size: 'One Size', images: [img('colorglow1'), img('colorglow2')],
    rating: 4.4, reviewCount: 156, stock: 60, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: makeReviews('p9', 2),
  },
  // POWER SUNGLASSES
  {
    id: 'p10', name: 'Tuscany Power Aviators', slug: 'tuscany-power-aviators', brand: 'Italia Sun',
    description: 'Prescription-ready aviator sunglasses. Polarized lenses with your power. Anti-glare coating for clear vision in bright conditions.',
    price: 3499, mrp: 6499, discount: 46, categoryId: 'c4', categorySlug: 'power-sunglasses',
    frameShape: 'aviator', frameColor: 'Silver Smoke', gender: 'unisex', material: 'Metal',
    weight: '26g', size: 'Medium', images: [img('tuscany1'), img('tuscany2'), img('tuscany3')],
    rating: 4.7, reviewCount: 98, stock: 24, isFeatured: true, isNew: true, isBestSeller: true, isOffer: true,
    reviews: makeReviews('p10', 3),
  },
  {
    id: 'p11', name: 'Amalfi Power Wayfarer', slug: 'amalfi-power-wayfarer', brand: 'Italia Sun',
    description: 'Classic wayfarer sunglasses with prescription lenses. Acetate frame with UV400 polarized lenses. Custom power available up to ±8.00.',
    price: 2999, mrp: 5499, discount: 45, categoryId: 'c4', categorySlug: 'power-sunglasses',
    frameShape: 'square', frameColor: 'Black Crystal', gender: 'men', material: 'Acetate',
    weight: '27g', size: 'Medium', images: [img('amalfi1'), img('amalfi2')],
    rating: 4.6, reviewCount: 71, stock: 31, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: makeReviews('p11', 2),
  },
  // COMPUTER GLASSES
  {
    id: 'p12', name: 'Pixel Guard Blue Light Blocker', slug: 'pixel-guard-blue-light', brand: 'Italia Tech',
    description: 'Blue-light blocking computer glasses. Reduces digital eye strain from screens. Lightweight TR90 frame. Non-prescription lenses.',
    price: 1499, mrp: 2999, discount: 50, categoryId: 'c5', categorySlug: 'computer-glasses',
    frameShape: 'rectangle', frameColor: 'Crystal Blue', gender: 'unisex', material: 'TR90',
    weight: '16g', size: 'Medium', images: [img('pixel1'), img('pixel2'), img('pixel3')],
    rating: 4.5, reviewCount: 234, stock: 65, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: makeReviews('p12', 4),
  },
  {
    id: 'p13', name: 'Screen Shield Round Gaming', slug: 'screen-shield-round-gaming', brand: 'Italia Tech',
    description: 'Round blue-light glasses designed for gamers and coders. Anti-fatigue lenses with magnification options. Comfortable for long sessions.',
    price: 1799, mrp: 3299, discount: 45, categoryId: 'c5', categorySlug: 'computer-glasses',
    frameShape: 'round', frameColor: 'Matte Black', gender: 'unisex', material: 'TR90',
    weight: '17g', size: 'Medium', images: [img('screen1'), img('screen2')],
    rating: 4.4, reviewCount: 112, stock: 38, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: makeReviews('p13', 2),
  },
  // KIDS GLASSES
  {
    id: 'p14', name: 'Junior Flex Round Frame', slug: 'junior-flex-round', brand: 'Italia Kids',
    description: 'Flexible TR90 frame designed for kids. Bendable temples, impact-resistant lenses. Comes in fun colors. Ages 5-12.',
    price: 1299, mrp: 2499, discount: 48, categoryId: 'c6', categorySlug: 'kids-glasses',
    frameShape: 'round', frameColor: 'Sky Blue', gender: 'kids', material: 'TR90',
    weight: '14g', size: 'Small', images: [img('junior1'), img('junior2'), img('junior3')],
    rating: 4.7, reviewCount: 89, stock: 47, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: makeReviews('p14', 3),
  },
  {
    id: 'p15', name: 'Kids Adventure Square Frame', slug: 'kids-adventure-square', brand: 'Italia Kids',
    description: 'Durable square frame for active kids. Scratch-resistant polycarbonate lenses. Spring hinges. Ages 6-14.',
    price: 1199, mrp: 2299, discount: 48, categoryId: 'c6', categorySlug: 'kids-glasses',
    frameShape: 'square', frameColor: 'Forest Green', gender: 'kids', material: 'TR90',
    weight: '15g', size: 'Small', images: [img('kidsadv1'), img('kidsadv2')],
    rating: 4.5, reviewCount: 54, stock: 39, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: makeReviews('p15', 2),
  },
  // ACCESSORIES
  {
    id: 'p16', name: 'Premium Leather Case (Black)', slug: 'premium-leather-case-black', brand: 'Italia Care',
    description: 'Genuine leather hard-shell case. Soft velvet interior. Magnetic closure. Fits most frame sizes.',
    price: 599, mrp: 999, discount: 40, categoryId: 'c7', categorySlug: 'accessories',
    frameShape: 'round', frameColor: 'Black', gender: 'unisex', material: 'Leather',
    weight: '60g', size: 'One Size', images: [img('case1'), img('case2')],
    rating: 4.6, reviewCount: 178, stock: 92, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: makeReviews('p16', 3),
  },
  {
    id: 'p17', name: 'Microfiber Cleaning Kit', slug: 'microfiber-cleaning-kit', brand: 'Italia Care',
    description: 'Complete lens care kit: 200ml cleaning spray, 3 microfiber cloths, soft brush, and pouch. Anti-bacterial formula.',
    price: 349, mrp: 599, discount: 42, categoryId: 'c7', categorySlug: 'accessories',
    frameShape: 'round', frameColor: 'Multi', gender: 'unisex', material: 'Microfiber',
    weight: '250g', size: 'One Size', images: [img('clean1'), img('clean2')],
    rating: 4.5, reviewCount: 145, stock: 110, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: makeReviews('p17', 2),
  },
  {
    id: 'p18', name: 'Anti-Fog Lens Wipes (50 Pack)', slug: 'anti-fog-wipes-50', brand: 'Italia Care',
    description: 'Pre-moistened anti-fog lens wipes. Individually wrapped. Safe for all lens coatings including anti-reflective.',
    price: 249, mrp: 449, discount: 45, categoryId: 'c7', categorySlug: 'accessories',
    frameShape: 'round', frameColor: 'White', gender: 'unisex', material: 'Paper',
    weight: '120g', size: 'One Size', images: [img('wipes1')],
    rating: 4.4, reviewCount: 87, stock: 150, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: makeReviews('p18', 2),
  },
];

// ===== OFFERS =====
export const OFFERS: Offer[] = [
  { code: 'ITALIA50', title: '₹50 OFF', description: 'Get ₹50 off on orders above ₹500', discountType: 'flat', discountValue: 50, minOrder: 500 },
  { code: 'ITALIA10', title: '10% OFF', description: '10% off on orders above ₹1500 (max ₹300)', discountType: 'percentage', discountValue: 10, minOrder: 1500, maxDiscount: 300 },
  { code: 'FIRST20', title: '20% OFF', description: 'First order? Get 20% off (max ₹500)', discountType: 'percentage', discountValue: 20, minOrder: 999, maxDiscount: 500 },
  { code: 'FESTIVE25', title: '25% OFF', description: 'Festive sale: 25% off above ₹2000 (max ₹800)', discountType: 'percentage', discountValue: 25, minOrder: 2000, maxDiscount: 800 },
];

// ===== COUPONS for display on home =====
export const COUPONS = OFFERS;

// ===== STORE INFO =====
export const STORE_INFO = {
  name: 'Italia Optical',
  tagline: 'See Better Than Yesterday',
  phone: '+91 87082-70548',
  phoneRaw: '918708270548',
  email: 'avillageeyecare.rk@gmail.com',
  instagram: '@village_eyecare.rk',
  instagramUrl: 'https://instagram.com/village_eyecare.rk',
  whatsapp: '918708270548',
  address: {
    line1: 'Store No. 18/258, Basement Floor',
    line2: 'Kunjpura Road, Opp. Mahavirdal Hospital',
    city: 'Karnal',
    state: 'Haryana',
    pincode: '132001',
    country: 'India',
  },
  hours: 'Mon - Sun: 10:00 AM - 8:00 PM',
};

// ===== LENS TYPES =====
export const LENS_TYPES = [
  { id: 'standard', name: 'Standard Single Vision', price: 0, description: 'Clear lenses with anti-glare coating' },
  { id: 'blue-cut', name: 'Blue Cut Lenses', price: 500, description: 'Blue-light filter for screen protection' },
  { id: 'progressive', name: 'Progressive Lenses', price: 2500, description: 'Multi-distance vision in one lens' },
  { id: 'photochromic', name: 'Photochromic (Transitions)', price: 1800, description: 'Darkens automatically in sunlight' },
  { id: 'high-index', name: 'High Index (1.67)', price: 1500, description: 'Thinner lenses for higher powers' },
];

// ===== HELPER FUNCTIONS =====
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.isNew);
}

export function getBestSellers(): Product[] {
  return PRODUCTS.filter((p) => p.isBestSeller);
}

export function getOfferProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isOffer);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.frameShape.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categorySlug.toLowerCase().includes(q)
  );
}
