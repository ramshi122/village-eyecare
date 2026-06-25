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
  {
    id: `p1`, name: `Gorizia Cat-Eye Round`, slug: `gorizia-cat-eye-1`, brand: `Italia Femme`,
    description: `Handcrafted titanium frame with a round silhouette. Pearl White finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3127, mrp: 5126, discount: 39, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Pearl White`, gender: `unisex`, material: `Titanium`,
    weight: `14g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/3789ed1e856c.jpg`, `https://sfile.chatglm.cn/images-ppt/dfe451cfa857.jpg`, `https://sfile.chatglm.cn/images-ppt/7cd7a7228ad7.webp`],
    rating: 4.6, reviewCount: 21, stock: 8, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p1-r0`, productId: `p1`, userName: `Rajesh Khurana`, rating: 3, title: `Better than expected`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-08` },
    { id: `p1-r1`, productId: `p1`, userName: `Nitin Joshi`, rating: 5, title: `Perfect fit`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-23` },
    { id: `p1-r2`, productId: `p1`, userName: `Ritu Aggarwal`, rating: 5, title: `Perfect fit`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-25` },
    { id: `p1-r3`, productId: `p1`, userName: `Karan Malhotra`, rating: 4, title: `Good value for money`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-01-12` }
    ],
  },
  {
    id: `p2`, name: `Cagliari Round Rectangle`, slug: `cagliari-round-2`, brand: `Italia Luxe`,
    description: `Handcrafted polycarbonate frame with a rectangle silhouette. Black finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 2321, mrp: 5740, discount: 60, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Black`, gender: `kids`, material: `Polycarbonate`,
    weight: `14g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/583697394ab6.jpg`, `https://sfile.chatglm.cn/images-ppt/d834cf8b5784.webp`, `https://sfile.chatglm.cn/images-ppt/a3d48862acb8.png`],
    rating: 4.9, reviewCount: 300, stock: 29, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p2-r0`, productId: `p2`, userName: `Sahil Khan`, rating: 5, title: `Stylish and comfortable`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-02-12` },
    { id: `p2-r1`, productId: `p2`, userName: `Divya Iyer`, rating: 4, title: `Better than expected`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-20` }
    ],
  },
  {
    id: `p3`, name: `Gorizia Cat-Eye Cat-eye`, slug: `gorizia-cat-eye-3`, brand: `Italia Pro`,
    description: `Handcrafted titanium frame with a cat-eye silhouette. Pearl White finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5085, mrp: 9557, discount: 47, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `cat-eye`, frameColor: `Pearl White`, gender: `women`, material: `Titanium`,
    weight: `12g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/2b07620d9614.png`, `https://sfile.chatglm.cn/images-ppt/cb15c0046b98.jpg`, `https://sfile.chatglm.cn/images-ppt/0962ea1417cf.jpg`, `https://sfile.chatglm.cn/images-ppt/24be8491f708.jpg`],
    rating: 4.8, reviewCount: 33, stock: 34, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p3-r0`, productId: `p3`, userName: `Sonia Mehta`, rating: 5, title: `Better than expected`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-09` },
    { id: `p3-r1`, productId: `p3`, userName: `Vikram Singh`, rating: 4, title: `Love it!`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-09` }
    ],
  },
  {
    id: `p4`, name: `Faenza Square Aviator`, slug: `faenza-square-4`, brand: `Italia Luxe`,
    description: `Handcrafted metal frame with a aviator silhouette. Ivory finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3095, mrp: 7729, discount: 60, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `aviator`, frameColor: `Ivory`, gender: `kids`, material: `Metal`,
    weight: `N/A`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/93bbfbeb6fed.jpg`, `https://sfile.chatglm.cn/images-ppt/0691ce31fbfe.jpg`, `https://sfile.chatglm.cn/images-ppt/d7517a073440.jpg`],
    rating: 4.2, reviewCount: 86, stock: 106, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p4-r0`, productId: `p4`, userName: `Arjun Nair`, rating: 5, title: `Excellent quality!`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-25` },
    { id: `p4-r1`, productId: `p4`, userName: `Arjun Nair`, rating: 3, title: `Great purchase`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-14` },
    { id: `p4-r2`, productId: `p4`, userName: `Ananya Verma`, rating: 5, title: `Excellent quality!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-25` },
    { id: `p4-r3`, productId: `p4`, userName: `Ananya Verma`, rating: 5, title: `Good value for money`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-20` }
    ],
  },
  {
    id: `p5`, name: `Lucca Rectangle Rectangle`, slug: `lucca-rectangle-5`, brand: `Italia Pro`,
    description: `Handcrafted polycarbonate frame with a rectangle silhouette. Sky Blue finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5643, mrp: 13647, discount: 59, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Sky Blue`, gender: `women`, material: `Polycarbonate`,
    weight: `12g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/edc645ac26bc.jpg`, `https://sfile.chatglm.cn/images-ppt/3c6c6e4d6f22.jpg`, `https://sfile.chatglm.cn/images-ppt/f6bfe594a4be.jpg`],
    rating: 5.0, reviewCount: 162, stock: 35, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p5-r0`, productId: `p5`, userName: `Neha Pandey`, rating: 4, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-06` },
    { id: `p5-r1`, productId: `p5`, userName: `Arjun Nair`, rating: 5, title: `Fast delivery`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-18` }
    ],
  },
  {
    id: `p6`, name: `Cesena Oval Oval`, slug: `cesena-oval-6`, brand: `Italia Sun`,
    description: `Handcrafted stainless steel frame with a oval silhouette. Forest Green finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 4358, mrp: 8446, discount: 48, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `oval`, frameColor: `Forest Green`, gender: `kids`, material: `Stainless Steel`,
    weight: `18g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/83bae42e21f6.jpg`, `https://sfile.chatglm.cn/images-ppt/3a6aa890ebc5.jpg`, `https://sfile.chatglm.cn/images-ppt/822d54cbb1f7.webp`],
    rating: 4.6, reviewCount: 122, stock: 80, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p6-r0`, productId: `p6`, userName: `Rohit Gupta`, rating: 4, title: `Great purchase`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-08` },
    { id: `p6-r1`, productId: `p6`, userName: `Arjun Nair`, rating: 3, title: `Stylish and comfortable`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-05` }
    ],
  },
  {
    id: `p7`, name: `Imola Cat-Eye Cat-eye`, slug: `imola-cat-eye-7`, brand: `Italia Luxe`,
    description: `Handcrafted tr90 frame with a cat-eye silhouette. Bronze finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 4633, mrp: 7831, discount: 41, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `cat-eye`, frameColor: `Bronze`, gender: `women`, material: `TR90`,
    weight: `N/A`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/f5c95d347c2e.jpg`, `https://sfile.chatglm.cn/images-ppt/d1e52a3ce2b6.png`, `https://sfile.chatglm.cn/images-ppt/eafb2a93461a.jpg`],
    rating: 4.7, reviewCount: 349, stock: 88, isFeatured: true, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p7-r0`, productId: `p7`, userName: `Rajesh Khurana`, rating: 4, title: `Premium feel`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-14` },
    { id: `p7-r1`, productId: `p7`, userName: `Ananya Verma`, rating: 5, title: `Stylish and comfortable`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-15` }
    ],
  },
  {
    id: `p8`, name: `Mantova Square Round`, slug: `mantova-square-8`, brand: `Italia Femme`,
    description: `Handcrafted acetate frame with a round silhouette. Rose Gold finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3235, mrp: 5390, discount: 40, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Rose Gold`, gender: `men`, material: `Acetate`,
    weight: `26g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/243d22bf94b4.jpg`, `https://sfile.chatglm.cn/images-ppt/f46c3a5a2e74.jpeg`, `https://sfile.chatglm.cn/images-ppt/9fe0678fa2fd.png`, `https://sfile.chatglm.cn/images-ppt/5a8797cc856a.jpg`],
    rating: 4.4, reviewCount: 204, stock: 38, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p8-r0`, productId: `p8`, userName: `Rajesh Khurana`, rating: 4, title: `Fast delivery`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-24` },
    { id: `p8-r1`, productId: `p8`, userName: `Karan Malhotra`, rating: 4, title: `Excellent quality!`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-04-17` },
    { id: `p8-r2`, productId: `p8`, userName: `Akash Verma`, rating: 4, title: `Excellent quality!`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-28` }
    ],
  },
  {
    id: `p9`, name: `Siena Oval Cat-eye`, slug: `siena-oval-9`, brand: `Italia Femme`,
    description: `Handcrafted tr90 frame with a cat-eye silhouette. Honey Amber finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 2281, mrp: 5569, discount: 59, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `cat-eye`, frameColor: `Honey Amber`, gender: `women`, material: `TR90`,
    weight: `22g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/6d151d5b05b6.jpg`, `https://sfile.chatglm.cn/images-ppt/fbeb79443390.jpg`, `https://sfile.chatglm.cn/images-ppt/381b3f50966f.jpg`],
    rating: 4.7, reviewCount: 294, stock: 71, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p9-r0`, productId: `p9`, userName: `Arjun Nair`, rating: 5, title: `Highly recommend`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-11` },
    { id: `p9-r1`, productId: `p9`, userName: `Rohit Gupta`, rating: 4, title: `Stylish and comfortable`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-04` }
    ],
  },
  {
    id: `p10`, name: `Naples Oval Square`, slug: `naples-oval-10`, brand: `Italia Care`,
    description: `Handcrafted titanium frame with a square silhouette. Emerald finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 4158, mrp: 9899, discount: 58, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `square`, frameColor: `Emerald`, gender: `unisex`, material: `Titanium`,
    weight: `N/A`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/56933b14d429.jpg`, `https://sfile.chatglm.cn/images-ppt/9463187a2c38.webp`, `https://sfile.chatglm.cn/images-ppt/d8064ece8e71.jpg`, `https://sfile.chatglm.cn/images-ppt/1038afa65b4e.webp`],
    rating: 4.7, reviewCount: 318, stock: 108, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p10-r0`, productId: `p10`, userName: `Sneha Reddy`, rating: 3, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-10` },
    { id: `p10-r1`, productId: `p10`, userName: `Kavya Rao`, rating: 4, title: `Love it!`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-02-22` }
    ],
  },
  {
    id: `p11`, name: `Gorizia Cat-Eye Cat-eye`, slug: `gorizia-cat-eye-11`, brand: `Italia Active`,
    description: `Handcrafted acetate frame with a cat-eye silhouette. Bronze finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 2055, mrp: 4385, discount: 53, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `cat-eye`, frameColor: `Bronze`, gender: `unisex`, material: `Acetate`,
    weight: `26g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/ac6293d28f71.webp`, `https://sfile.chatglm.cn/images-ppt/7e9c399d609f.jpg`, `https://sfile.chatglm.cn/images-ppt/f4a57439825d.jpg`],
    rating: 5.0, reviewCount: 87, stock: 99, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p11-r0`, productId: `p11`, userName: `Priya Mehta`, rating: 5, title: `Fast delivery`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-14` },
    { id: `p11-r1`, productId: `p11`, userName: `Vikram Singh`, rating: 4, title: `Perfect fit`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-12` },
    { id: `p11-r2`, productId: `p11`, userName: `Rajesh Khurana`, rating: 3, title: `Satisfied`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-25` },
    { id: `p11-r3`, productId: `p11`, userName: `Neha Pandey`, rating: 5, title: `Fast delivery`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-28` }
    ],
  },
  {
    id: `p12`, name: `Pisa Square Aviator`, slug: `pisa-square-12`, brand: `Italia Pro`,
    description: `Handcrafted stainless steel frame with a aviator silhouette. Tortoise finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 4020, mrp: 9175, discount: 56, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `aviator`, frameColor: `Tortoise`, gender: `women`, material: `Stainless Steel`,
    weight: `12g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/a9bbd4c75119.webp`, `https://sfile.chatglm.cn/images-ppt/52ad5b05878d.jpg`, `https://sfile.chatglm.cn/images-ppt/ead629dcf3a7.jpg`],
    rating: 4.2, reviewCount: 60, stock: 53, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p12-r0`, productId: `p12`, userName: `Meera Kapoor`, rating: 4, title: `Excellent quality!`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-04-11` },
    { id: `p12-r1`, productId: `p12`, userName: `Arjun Nair`, rating: 4, title: `Perfect fit`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-13` },
    { id: `p12-r2`, productId: `p12`, userName: `Neha Pandey`, rating: 5, title: `Excellent quality!`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-06` }
    ],
  },
  {
    id: `p13`, name: `Varese Rectangle Round`, slug: `varese-rectangle-13`, brand: `Italia Active`,
    description: `Handcrafted metal frame with a round silhouette. Gunmetal finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3868, mrp: 7489, discount: 48, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Gunmetal`, gender: `kids`, material: `Metal`,
    weight: `28g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/0691ce31fbfe.jpg`, `https://sfile.chatglm.cn/images-ppt/9463187a2c38.webp`, `https://sfile.chatglm.cn/images-ppt/2b07620d9614.png`, `https://sfile.chatglm.cn/images-ppt/243d22bf94b4.jpg`],
    rating: 4.0, reviewCount: 228, stock: 5, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p13-r0`, productId: `p13`, userName: `Sneha Reddy`, rating: 3, title: `Perfect fit`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-22` },
    { id: `p13-r1`, productId: `p13`, userName: `Ritu Aggarwal`, rating: 5, title: `Worth every rupee`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-05` },
    { id: `p13-r2`, productId: `p13`, userName: `Rajesh Khurana`, rating: 5, title: `Better than expected`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-20` }
    ],
  },
  {
    id: `p14`, name: `Pavia Oval Aviator`, slug: `pavia-oval-14`, brand: `Italia Active`,
    description: `Handcrafted metal frame with a aviator silhouette. Sapphire finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3649, mrp: 6240, discount: 42, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `aviator`, frameColor: `Sapphire`, gender: `men`, material: `Metal`,
    weight: `16g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/3789ed1e856c.jpg`, `https://sfile.chatglm.cn/images-ppt/243d22bf94b4.jpg`, `https://sfile.chatglm.cn/images-ppt/2b07620d9614.png`, `https://sfile.chatglm.cn/images-ppt/cb15c0046b98.jpg`],
    rating: 4.7, reviewCount: 266, stock: 65, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p14-r0`, productId: `p14`, userName: `Pooja Bhatt`, rating: 4, title: `Satisfied`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-02` },
    { id: `p14-r1`, productId: `p14`, userName: `Meera Kapoor`, rating: 5, title: `Fast delivery`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-14` }
    ],
  },
  {
    id: `p15`, name: `Gorizia Cat-Eye Square`, slug: `gorizia-cat-eye-15`, brand: `Italia Luxe`,
    description: `Handcrafted tr90 frame with a square silhouette. Onyx finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 4572, mrp: 7973, discount: 43, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `square`, frameColor: `Onyx`, gender: `kids`, material: `TR90`,
    weight: `16g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/3c6c6e4d6f22.jpg`, `https://sfile.chatglm.cn/images-ppt/a3d48862acb8.png`, `https://sfile.chatglm.cn/images-ppt/d8064ece8e71.jpg`],
    rating: 4.1, reviewCount: 222, stock: 33, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p15-r0`, productId: `p15`, userName: `Vikram Singh`, rating: 5, title: `Better than expected`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-20` },
    { id: `p15-r1`, productId: `p15`, userName: `Karan Malhotra`, rating: 5, title: `Fast delivery`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-27` },
    { id: `p15-r2`, productId: `p15`, userName: `Neha Pandey`, rating: 5, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-04-09` }
    ],
  },
  {
    id: `p16`, name: `Cesena Oval Hexagon`, slug: `cesena-oval-16`, brand: `Italia Sun`,
    description: `Handcrafted polycarbonate frame with a hexagon silhouette. Rose Gold finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5268, mrp: 11203, discount: 53, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `hexagon`, frameColor: `Rose Gold`, gender: `unisex`, material: `Polycarbonate`,
    weight: `16g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/24be8491f708.jpg`, `https://sfile.chatglm.cn/images-ppt/5a8797cc856a.jpg`, `https://sfile.chatglm.cn/images-ppt/381b3f50966f.jpg`],
    rating: 4.3, reviewCount: 281, stock: 15, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p16-r0`, productId: `p16`, userName: `Ritu Aggarwal`, rating: 5, title: `Great purchase`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-14` },
    { id: `p16-r1`, productId: `p16`, userName: `Priya Mehta`, rating: 4, title: `Worth every rupee`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-23` }
    ],
  },
  {
    id: `p17`, name: `Venice Cat-Eye Aviator`, slug: `venice-cat-eye-17`, brand: `Italia Luxe`,
    description: `Handcrafted metal frame with a aviator silhouette. Bronze finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3745, mrp: 8439, discount: 56, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `aviator`, frameColor: `Bronze`, gender: `men`, material: `Metal`,
    weight: `18g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/93bbfbeb6fed.jpg`, `https://sfile.chatglm.cn/images-ppt/0691ce31fbfe.jpg`, `https://sfile.chatglm.cn/images-ppt/7e9c399d609f.jpg`],
    rating: 4.5, reviewCount: 313, stock: 119, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p17-r0`, productId: `p17`, userName: `Sahil Khan`, rating: 5, title: `Better than expected`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-27` },
    { id: `p17-r1`, productId: `p17`, userName: `Nitin Joshi`, rating: 4, title: `Fast delivery`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-13` }
    ],
  },
  {
    id: `p18`, name: `Varese Rectangle Oval`, slug: `varese-rectangle-18`, brand: `Italia Luxe`,
    description: `Handcrafted stainless steel frame with a oval silhouette. Tortoise finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 4810, mrp: 7867, discount: 39, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `oval`, frameColor: `Tortoise`, gender: `men`, material: `Stainless Steel`,
    weight: `24g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/0962ea1417cf.jpg`, `https://sfile.chatglm.cn/images-ppt/cb15c0046b98.jpg`, `https://sfile.chatglm.cn/images-ppt/fbeb79443390.jpg`, `https://sfile.chatglm.cn/images-ppt/7cd7a7228ad7.webp`],
    rating: 4.2, reviewCount: 172, stock: 48, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p18-r0`, productId: `p18`, userName: `Neha Pandey`, rating: 4, title: `Great purchase`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-25` },
    { id: `p18-r1`, productId: `p18`, userName: `Priya Mehta`, rating: 4, title: `Satisfied`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-20` },
    { id: `p18-r2`, productId: `p18`, userName: `Vikram Singh`, rating: 4, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-19` },
    { id: `p18-r3`, productId: `p18`, userName: `Rajesh Khurana`, rating: 5, title: `Love it!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-06` }
    ],
  },
  {
    id: `p19`, name: `Sondrio Round Oval`, slug: `sondrio-round-19`, brand: `Italia Luxe`,
    description: `Handcrafted titanium frame with a oval silhouette. Onyx finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3847, mrp: 6186, discount: 38, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `oval`, frameColor: `Onyx`, gender: `men`, material: `Titanium`,
    weight: `18g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/d834cf8b5784.webp`, `https://sfile.chatglm.cn/images-ppt/583697394ab6.jpg`, `https://sfile.chatglm.cn/images-ppt/dfe451cfa857.jpg`],
    rating: 5.0, reviewCount: 208, stock: 96, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p19-r0`, productId: `p19`, userName: `Manish Tiwari`, rating: 4, title: `Great purchase`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-22` },
    { id: `p19-r1`, productId: `p19`, userName: `Divya Iyer`, rating: 4, title: `Premium feel`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-28` }
    ],
  },
  {
    id: `p20`, name: `Reggio Round Round`, slug: `reggio-round-20`, brand: `Italia Kids`,
    description: `Handcrafted stainless steel frame with a round silhouette. Honey finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5065, mrp: 11180, discount: 55, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Honey`, gender: `unisex`, material: `Stainless Steel`,
    weight: `26g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/83bae42e21f6.jpg`, `https://sfile.chatglm.cn/images-ppt/93bbfbeb6fed.jpg`, `https://sfile.chatglm.cn/images-ppt/d7517a073440.jpg`, `https://sfile.chatglm.cn/images-ppt/a3d48862acb8.png`],
    rating: 4.8, reviewCount: 280, stock: 104, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p20-r0`, productId: `p20`, userName: `Arjun Nair`, rating: 5, title: `Satisfied`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-20` },
    { id: `p20-r1`, productId: `p20`, userName: `Sahil Khan`, rating: 5, title: `Excellent quality!`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-06` }
    ],
  },
  {
    id: `p21`, name: `Trento Rectangle Rectangle`, slug: `trento-rectangle-21`, brand: `Italia Sun`,
    description: `Handcrafted metal frame with a rectangle silhouette. Silver Smoke finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3562, mrp: 7322, discount: 51, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Silver Smoke`, gender: `unisex`, material: `Metal`,
    weight: `26g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/7cd7a7228ad7.webp`, `https://sfile.chatglm.cn/images-ppt/cb15c0046b98.jpg`, `https://sfile.chatglm.cn/images-ppt/d1e52a3ce2b6.png`, `https://sfile.chatglm.cn/images-ppt/dc8eef45cbfd.webp`],
    rating: 4.6, reviewCount: 128, stock: 93, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p21-r0`, productId: `p21`, userName: `Meera Kapoor`, rating: 5, title: `Better than expected`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-16` },
    { id: `p21-r1`, productId: `p21`, userName: `Neha Pandey`, rating: 5, title: `Great purchase`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-11` },
    { id: `p21-r2`, productId: `p21`, userName: `Divya Iyer`, rating: 3, title: `Stylish and comfortable`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-09` }
    ],
  },
  {
    id: `p22`, name: `Bergamo Hexagon Oval`, slug: `bergamo-hexagon-22`, brand: `Italia Femme`,
    description: `Handcrafted acetate frame with a oval silhouette. Black Rose finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5688, mrp: 13940, discount: 59, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `oval`, frameColor: `Black Rose`, gender: `unisex`, material: `Acetate`,
    weight: `20g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/d1e52a3ce2b6.png`, `https://sfile.chatglm.cn/images-ppt/dc8eef45cbfd.webp`, `https://sfile.chatglm.cn/images-ppt/f5c95d347c2e.jpg`],
    rating: 4.6, reviewCount: 273, stock: 81, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p22-r0`, productId: `p22`, userName: `Pooja Bhatt`, rating: 4, title: `Love it!`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-09` },
    { id: `p22-r1`, productId: `p22`, userName: `Priya Mehta`, rating: 4, title: `Premium feel`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-21` }
    ],
  },
  {
    id: `p23`, name: `Cesena Oval Round`, slug: `cesena-oval-23`, brand: `Italia Kids`,
    description: `Handcrafted tr90 frame with a round silhouette. Tortoise finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5220, mrp: 10129, discount: 48, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Tortoise`, gender: `unisex`, material: `TR90`,
    weight: `14g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/5a8797cc856a.jpg`, `https://sfile.chatglm.cn/images-ppt/56933b14d429.jpg`, `https://sfile.chatglm.cn/images-ppt/583697394ab6.jpg`],
    rating: 4.8, reviewCount: 210, stock: 67, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p23-r0`, productId: `p23`, userName: `Meera Kapoor`, rating: 4, title: `Premium feel`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-20` },
    { id: `p23-r1`, productId: `p23`, userName: `Kavya Rao`, rating: 4, title: `Premium feel`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-15` }
    ],
  },
  {
    id: `p24`, name: `Catania Rectangle Aviator`, slug: `catania-rectangle-24`, brand: `Italia Luxe`,
    description: `Handcrafted polycarbonate frame with a aviator silhouette. Forest Green finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 2111, mrp: 5166, discount: 59, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `aviator`, frameColor: `Forest Green`, gender: `men`, material: `Polycarbonate`,
    weight: `12g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/dfe451cfa857.jpg`, `https://sfile.chatglm.cn/images-ppt/fbeb79443390.jpg`, `https://sfile.chatglm.cn/images-ppt/d1e52a3ce2b6.png`, `https://sfile.chatglm.cn/images-ppt/822d54cbb1f7.webp`],
    rating: 4.2, reviewCount: 43, stock: 25, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p24-r0`, productId: `p24`, userName: `Pooja Bhatt`, rating: 3, title: `Perfect fit`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-22` },
    { id: `p24-r1`, productId: `p24`, userName: `Meera Kapoor`, rating: 5, title: `Better than expected`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-14` }
    ],
  },
  {
    id: `p25`, name: `Palermo Aviator Square`, slug: `palermo-aviator-25`, brand: `Italia Care`,
    description: `Handcrafted metal frame with a square silhouette. Rose Gold finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 2464, mrp: 3871, discount: 36, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `square`, frameColor: `Rose Gold`, gender: `women`, material: `Metal`,
    weight: `14g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/f6bfe594a4be.jpg`, `https://sfile.chatglm.cn/images-ppt/93bbfbeb6fed.jpg`, `https://sfile.chatglm.cn/images-ppt/3789ed1e856c.jpg`, `https://sfile.chatglm.cn/images-ppt/3a6aa890ebc5.jpg`],
    rating: 4.6, reviewCount: 152, stock: 61, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p25-r0`, productId: `p25`, userName: `Nitin Joshi`, rating: 4, title: `Fast delivery`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-24` },
    { id: `p25-r1`, productId: `p25`, userName: `Karan Malhotra`, rating: 5, title: `Perfect fit`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-08` },
    { id: `p25-r2`, productId: `p25`, userName: `Manish Tiwari`, rating: 5, title: `Excellent quality!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-02` }
    ],
  },
  {
    id: `p26`, name: `Cesena Oval Aviator`, slug: `cesena-oval-26`, brand: `Italia Pro`,
    description: `Handcrafted metal frame with a aviator silhouette. Emerald finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 2785, mrp: 6953, discount: 60, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `aviator`, frameColor: `Emerald`, gender: `kids`, material: `Metal`,
    weight: `14g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/ead629dcf3a7.jpg`, `https://sfile.chatglm.cn/images-ppt/7e9c399d609f.jpg`, `https://sfile.chatglm.cn/images-ppt/d1e52a3ce2b6.png`, `https://sfile.chatglm.cn/images-ppt/f6bfe594a4be.jpg`],
    rating: 4.4, reviewCount: 169, stock: 90, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p26-r0`, productId: `p26`, userName: `Priya Mehta`, rating: 5, title: `Good value for money`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-03-11` },
    { id: `p26-r1`, productId: `p26`, userName: `Sneha Reddy`, rating: 5, title: `Premium feel`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-05-15` },
    { id: `p26-r2`, productId: `p26`, userName: `Ritu Aggarwal`, rating: 4, title: `Satisfied`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-20` },
    { id: `p26-r3`, productId: `p26`, userName: `Sonia Mehta`, rating: 3, title: `Stylish and comfortable`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-09` }
    ],
  },
  {
    id: `p27`, name: `Mantova Square Rectangle`, slug: `mantova-square-27`, brand: `Italia Pro`,
    description: `Handcrafted acetate frame with a rectangle silhouette. Charcoal finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 1535, mrp: 3796, discount: 60, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Charcoal`, gender: `kids`, material: `Acetate`,
    weight: `14g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/5a8797cc856a.jpg`, `https://sfile.chatglm.cn/images-ppt/7e9c399d609f.jpg`, `https://sfile.chatglm.cn/images-ppt/d1e52a3ce2b6.png`],
    rating: 4.6, reviewCount: 52, stock: 33, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p27-r0`, productId: `p27`, userName: `Arjun Nair`, rating: 5, title: `Stylish and comfortable`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-15` },
    { id: `p27-r1`, productId: `p27`, userName: `Neha Pandey`, rating: 4, title: `Worth every rupee`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-17` },
    { id: `p27-r2`, productId: `p27`, userName: `Vikram Singh`, rating: 4, title: `Perfect fit`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-26` },
    { id: `p27-r3`, productId: `p27`, userName: `Akash Verma`, rating: 5, title: `Excellent quality!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-27` }
    ],
  },
  {
    id: `p28`, name: `Varese Rectangle Oval`, slug: `varese-rectangle-28`, brand: `Italia Luxe`,
    description: `Handcrafted tr90 frame with a oval silhouette. Bronze finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5711, mrp: 11332, discount: 50, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `oval`, frameColor: `Bronze`, gender: `women`, material: `TR90`,
    weight: `24g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/822d54cbb1f7.webp`, `https://sfile.chatglm.cn/images-ppt/d7517a073440.jpg`, `https://sfile.chatglm.cn/images-ppt/fbeb79443390.jpg`, `https://sfile.chatglm.cn/images-ppt/24be8491f708.jpg`],
    rating: 4.9, reviewCount: 127, stock: 78, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p28-r0`, productId: `p28`, userName: `Vikram Singh`, rating: 5, title: `Excellent quality!`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-05-19` },
    { id: `p28-r1`, productId: `p28`, userName: `Karan Malhotra`, rating: 4, title: `Stylish and comfortable`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-15` },
    { id: `p28-r2`, productId: `p28`, userName: `Aarav Sharma`, rating: 3, title: `Highly recommend`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-03` }
    ],
  },
  {
    id: `p29`, name: `Bolzano Oval Rectangle`, slug: `bolzano-oval-29`, brand: `Italia Active`,
    description: `Handcrafted stainless steel frame with a rectangle silhouette. Champagne finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 1956, mrp: 4600, discount: 57, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Champagne`, gender: `kids`, material: `Stainless Steel`,
    weight: `28g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/a3d48862acb8.png`, `https://sfile.chatglm.cn/images-ppt/d1e52a3ce2b6.png`, `https://sfile.chatglm.cn/images-ppt/dc8eef45cbfd.webp`],
    rating: 4.7, reviewCount: 254, stock: 116, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p29-r0`, productId: `p29`, userName: `Rohit Gupta`, rating: 5, title: `Good value for money`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-06` },
    { id: `p29-r1`, productId: `p29`, userName: `Pooja Bhatt`, rating: 4, title: `Excellent quality!`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-10` },
    { id: `p29-r2`, productId: `p29`, userName: `Divya Iyer`, rating: 5, title: `Worth every rupee`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-17` },
    { id: `p29-r3`, productId: `p29`, userName: `Ritu Aggarwal`, rating: 5, title: `Better than expected`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-06` }
    ],
  },
  {
    id: `p30`, name: `Turin Rectangle Hexagon`, slug: `turin-rectangle-30`, brand: `Italia Luxe`,
    description: `Handcrafted tr90 frame with a hexagon silhouette. Cherry Red finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 2471, mrp: 4280, discount: 42, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `hexagon`, frameColor: `Cherry Red`, gender: `women`, material: `TR90`,
    weight: `28g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/52ad5b05878d.jpg`, `https://sfile.chatglm.cn/images-ppt/a9bbd4c75119.webp`, `https://sfile.chatglm.cn/images-ppt/83bae42e21f6.jpg`],
    rating: 4.5, reviewCount: 152, stock: 91, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p30-r0`, productId: `p30`, userName: `Ritu Aggarwal`, rating: 3, title: `Perfect fit`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-07` },
    { id: `p30-r1`, productId: `p30`, userName: `Sahil Khan`, rating: 5, title: `Good value for money`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-04-19` },
    { id: `p30-r2`, productId: `p30`, userName: `Divya Iyer`, rating: 5, title: `Perfect fit`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-27` }
    ],
  },
  {
    id: `p31`, name: `Pordenone Oval Rectangle`, slug: `pordenone-oval-31`, brand: `Italia Tech`,
    description: `Handcrafted polycarbonate frame with a rectangle silhouette. Tortoise finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5368, mrp: 12522, discount: 57, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Tortoise`, gender: `men`, material: `Polycarbonate`,
    weight: `20g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/822d54cbb1f7.webp`, `https://sfile.chatglm.cn/images-ppt/583697394ab6.jpg`, `https://sfile.chatglm.cn/images-ppt/52ad5b05878d.jpg`],
    rating: 4.2, reviewCount: 102, stock: 84, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p31-r0`, productId: `p31`, userName: `Manish Tiwari`, rating: 5, title: `Love it!`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-10` },
    { id: `p31-r1`, productId: `p31`, userName: `Karan Malhotra`, rating: 3, title: `Worth every rupee`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-05` }
    ],
  },
  {
    id: `p32`, name: `Cremona Cat-Eye Cat-eye`, slug: `cremona-cat-eye-32`, brand: `Italia Vision`,
    description: `Handcrafted titanium frame with a cat-eye silhouette. Emerald finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3404, mrp: 8217, discount: 59, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `cat-eye`, frameColor: `Emerald`, gender: `unisex`, material: `Titanium`,
    weight: `16g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/3c6c6e4d6f22.jpg`, `https://sfile.chatglm.cn/images-ppt/f5c95d347c2e.jpg`, `https://sfile.chatglm.cn/images-ppt/cb15c0046b98.jpg`, `https://sfile.chatglm.cn/images-ppt/f6bfe594a4be.jpg`],
    rating: 4.8, reviewCount: 244, stock: 14, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p32-r0`, productId: `p32`, userName: `Arjun Nair`, rating: 5, title: `Good value for money`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-22` },
    { id: `p32-r1`, productId: `p32`, userName: `Arjun Nair`, rating: 5, title: `Worth every rupee`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-22` }
    ],
  },
  {
    id: `p33`, name: `Bergamo Hexagon Round`, slug: `bergamo-hexagon-33`, brand: `Italia Kids`,
    description: `Handcrafted polycarbonate frame with a round silhouette. Champagne finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3112, mrp: 6683, discount: 53, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Champagne`, gender: `unisex`, material: `Polycarbonate`,
    weight: `20g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/d834cf8b5784.webp`, `https://sfile.chatglm.cn/images-ppt/a3d48862acb8.png`, `https://sfile.chatglm.cn/images-ppt/3a6aa890ebc5.jpg`],
    rating: 4.1, reviewCount: 28, stock: 9, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p33-r0`, productId: `p33`, userName: `Sahil Khan`, rating: 5, title: `Great purchase`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-19` },
    { id: `p33-r1`, productId: `p33`, userName: `Vikram Singh`, rating: 5, title: `Better than expected`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-20` }
    ],
  },
  {
    id: `p34`, name: `Reggio Round Round`, slug: `reggio-round-34`, brand: `Italia Active`,
    description: `Handcrafted titanium frame with a round silhouette. Onyx finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 4931, mrp: 9589, discount: 49, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Onyx`, gender: `unisex`, material: `Titanium`,
    weight: `12g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/1038afa65b4e.webp`, `https://sfile.chatglm.cn/images-ppt/d8064ece8e71.jpg`, `https://sfile.chatglm.cn/images-ppt/6d151d5b05b6.jpg`, `https://sfile.chatglm.cn/images-ppt/cb15c0046b98.jpg`],
    rating: 4.9, reviewCount: 335, stock: 50, isFeatured: true, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p34-r0`, productId: `p34`, userName: `Rajesh Khurana`, rating: 3, title: `Better than expected`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-02` },
    { id: `p34-r1`, productId: `p34`, userName: `Karan Malhotra`, rating: 4, title: `Highly recommend`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-03` },
    { id: `p34-r2`, productId: `p34`, userName: `Neha Pandey`, rating: 4, title: `Fast delivery`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-11` },
    { id: `p34-r3`, productId: `p34`, userName: `Vikram Singh`, rating: 5, title: `Excellent quality!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-05` }
    ],
  },
  {
    id: `p35`, name: `Cremona Cat-Eye Hexagon`, slug: `cremona-cat-eye-35`, brand: `Italia Active`,
    description: `Handcrafted stainless steel frame with a hexagon silhouette. Matte Black finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 1510, mrp: 2464, discount: 39, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `hexagon`, frameColor: `Matte Black`, gender: `men`, material: `Stainless Steel`,
    weight: `16g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/9463187a2c38.webp`, `https://sfile.chatglm.cn/images-ppt/fbeb79443390.jpg`, `https://sfile.chatglm.cn/images-ppt/52ad5b05878d.jpg`],
    rating: 4.0, reviewCount: 140, stock: 11, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p35-r0`, productId: `p35`, userName: `Akash Verma`, rating: 5, title: `Good value for money`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-08` },
    { id: `p35-r1`, productId: `p35`, userName: `Kavya Rao`, rating: 4, title: `Love it!`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-15` },
    { id: `p35-r2`, productId: `p35`, userName: `Aarav Sharma`, rating: 4, title: `Stylish and comfortable`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-22` }
    ],
  },
  {
    id: `p36`, name: `Genoa Hexagon Oval`, slug: `genoa-hexagon-36`, brand: `Italia Kids`,
    description: `Handcrafted acetate frame with a oval silhouette. Charcoal finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3937, mrp: 8300, discount: 53, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `oval`, frameColor: `Charcoal`, gender: `men`, material: `Acetate`,
    weight: `20g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/d834cf8b5784.webp`, `https://sfile.chatglm.cn/images-ppt/d8064ece8e71.jpg`, `https://sfile.chatglm.cn/images-ppt/3c6c6e4d6f22.jpg`, `https://sfile.chatglm.cn/images-ppt/381b3f50966f.jpg`],
    rating: 4.3, reviewCount: 310, stock: 72, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p36-r0`, productId: `p36`, userName: `Nitin Joshi`, rating: 4, title: `Worth every rupee`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-13` },
    { id: `p36-r1`, productId: `p36`, userName: `Ritu Aggarwal`, rating: 3, title: `Good value for money`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-11` },
    { id: `p36-r2`, productId: `p36`, userName: `Arjun Nair`, rating: 5, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-03` }
    ],
  },
  {
    id: `p37`, name: `Turin Rectangle Aviator`, slug: `turin-rectangle-37`, brand: `Italia Femme`,
    description: `Handcrafted titanium frame with a aviator silhouette. Gunmetal finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5856, mrp: 9135, discount: 36, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `aviator`, frameColor: `Gunmetal`, gender: `unisex`, material: `Titanium`,
    weight: `24g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/dfe451cfa857.jpg`, `https://sfile.chatglm.cn/images-ppt/583697394ab6.jpg`, `https://sfile.chatglm.cn/images-ppt/a9bbd4c75119.webp`, `https://sfile.chatglm.cn/images-ppt/d834cf8b5784.webp`],
    rating: 4.4, reviewCount: 345, stock: 101, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p37-r0`, productId: `p37`, userName: `Akash Verma`, rating: 4, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-28` },
    { id: `p37-r1`, productId: `p37`, userName: `Sneha Reddy`, rating: 5, title: `Premium feel`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-25` },
    { id: `p37-r2`, productId: `p37`, userName: `Arjun Nair`, rating: 5, title: `Satisfied`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-25` },
    { id: `p37-r3`, productId: `p37`, userName: `Kavya Rao`, rating: 5, title: `Better than expected`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-20` }
    ],
  },
  {
    id: `p38`, name: `Pordenone Oval Round`, slug: `pordenone-oval-38`, brand: `Italia Active`,
    description: `Handcrafted stainless steel frame with a round silhouette. Matte Black finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3830, mrp: 9274, discount: 59, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Matte Black`, gender: `unisex`, material: `Stainless Steel`,
    weight: `14g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/ead629dcf3a7.jpg`, `https://sfile.chatglm.cn/images-ppt/6d151d5b05b6.jpg`, `https://sfile.chatglm.cn/images-ppt/2b07620d9614.png`, `https://sfile.chatglm.cn/images-ppt/9fe0678fa2fd.png`],
    rating: 4.1, reviewCount: 329, stock: 8, isFeatured: false, isNew: true, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p38-r0`, productId: `p38`, userName: `Pooja Bhatt`, rating: 3, title: `Great purchase`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-03` },
    { id: `p38-r1`, productId: `p38`, userName: `Priya Mehta`, rating: 4, title: `Highly recommend`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-22` },
    { id: `p38-r2`, productId: `p38`, userName: `Rohit Gupta`, rating: 5, title: `Stylish and comfortable`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-20` }
    ],
  },
  {
    id: `p39`, name: `Ferrara Cat-Eye Rectangle`, slug: `ferrara-cat-eye-39`, brand: `Italia Tech`,
    description: `Handcrafted metal frame with a rectangle silhouette. Black Rose finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 4820, mrp: 7764, discount: 38, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Black Rose`, gender: `men`, material: `Metal`,
    weight: `30g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/381b3f50966f.jpg`, `https://sfile.chatglm.cn/images-ppt/583697394ab6.jpg`, `https://sfile.chatglm.cn/images-ppt/eafb2a93461a.jpg`],
    rating: 4.3, reviewCount: 117, stock: 55, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p39-r0`, productId: `p39`, userName: `Pooja Bhatt`, rating: 5, title: `Good value for money`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-24` },
    { id: `p39-r1`, productId: `p39`, userName: `Ritu Aggarwal`, rating: 4, title: `Highly recommend`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-23` },
    { id: `p39-r2`, productId: `p39`, userName: `Meera Kapoor`, rating: 5, title: `Premium feel`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-13` }
    ],
  },
  {
    id: `p40`, name: `Faenza Square Aviator`, slug: `faenza-square-40`, brand: `Italia Premium`,
    description: `Handcrafted acetate frame with a aviator silhouette. Tortoise finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3863, mrp: 8018, discount: 52, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `aviator`, frameColor: `Tortoise`, gender: `kids`, material: `Acetate`,
    weight: `30g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/cb15c0046b98.jpg`, `https://sfile.chatglm.cn/images-ppt/0691ce31fbfe.jpg`, `https://sfile.chatglm.cn/images-ppt/d834cf8b5784.webp`, `https://sfile.chatglm.cn/images-ppt/a3d48862acb8.png`],
    rating: 4.0, reviewCount: 171, stock: 26, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p40-r0`, productId: `p40`, userName: `Manish Tiwari`, rating: 5, title: `Premium feel`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-28` },
    { id: `p40-r1`, productId: `p40`, userName: `Pooja Bhatt`, rating: 3, title: `Great purchase`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-25` },
    { id: `p40-r2`, productId: `p40`, userName: `Ananya Verma`, rating: 4, title: `Premium feel`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-17` }
    ],
  },
  {
    id: `p41`, name: `Lucca Rectangle Rectangle`, slug: `lucca-rectangle-41`, brand: `Italia Vision`,
    description: `Handcrafted titanium frame with a rectangle silhouette. Pearl White finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 2141, mrp: 3525, discount: 39, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Pearl White`, gender: `women`, material: `Titanium`,
    weight: `N/A`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/56933b14d429.jpg`, `https://sfile.chatglm.cn/images-ppt/83bae42e21f6.jpg`, `https://sfile.chatglm.cn/images-ppt/52ad5b05878d.jpg`, `https://sfile.chatglm.cn/images-ppt/243d22bf94b4.jpg`],
    rating: 4.7, reviewCount: 95, stock: 103, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p41-r0`, productId: `p41`, userName: `Karan Malhotra`, rating: 4, title: `Stylish and comfortable`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-15` },
    { id: `p41-r1`, productId: `p41`, userName: `Pooja Bhatt`, rating: 5, title: `Fast delivery`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-17` },
    { id: `p41-r2`, productId: `p41`, userName: `Rohit Gupta`, rating: 5, title: `Stylish and comfortable`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-02` }
    ],
  },
  {
    id: `p42`, name: `Ancona Square Round`, slug: `ancona-square-42`, brand: `Italia Active`,
    description: `Handcrafted polycarbonate frame with a round silhouette. Rose Gold finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5452, mrp: 10274, discount: 47, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Rose Gold`, gender: `men`, material: `Polycarbonate`,
    weight: `18g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/3789ed1e856c.jpg`, `https://sfile.chatglm.cn/images-ppt/5a8797cc856a.jpg`, `https://sfile.chatglm.cn/images-ppt/edc645ac26bc.jpg`, `https://sfile.chatglm.cn/images-ppt/52ad5b05878d.jpg`],
    rating: 4.9, reviewCount: 297, stock: 88, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p42-r0`, productId: `p42`, userName: `Karan Malhotra`, rating: 3, title: `Good value for money`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-02` },
    { id: `p42-r1`, productId: `p42`, userName: `Meera Kapoor`, rating: 3, title: `Stylish and comfortable`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-17` }
    ],
  },
  {
    id: `p43`, name: `Belluno Hexagon Rectangle`, slug: `belluno-hexagon-43`, brand: `Italia Pro`,
    description: `Handcrafted tr90 frame with a rectangle silhouette. Navy Blue finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 4647, mrp: 10569, discount: 56, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Navy Blue`, gender: `unisex`, material: `TR90`,
    weight: `24g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/dfe451cfa857.jpg`, `https://sfile.chatglm.cn/images-ppt/5a8797cc856a.jpg`, `https://sfile.chatglm.cn/images-ppt/2b07620d9614.png`, `https://sfile.chatglm.cn/images-ppt/cb15c0046b98.jpg`],
    rating: 4.3, reviewCount: 290, stock: 91, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p43-r0`, productId: `p43`, userName: `Vikram Singh`, rating: 5, title: `Perfect fit`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-20` },
    { id: `p43-r1`, productId: `p43`, userName: `Rohit Gupta`, rating: 5, title: `Premium feel`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-27` },
    { id: `p43-r2`, productId: `p43`, userName: `Vikram Singh`, rating: 3, title: `Love it!`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-21` },
    { id: `p43-r3`, productId: `p43`, userName: `Ritu Aggarwal`, rating: 5, title: `Great purchase`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-10` }
    ],
  },
  {
    id: `p44`, name: `Siena Oval Rectangle`, slug: `siena-oval-44`, brand: `Italia Sun`,
    description: `Handcrafted titanium frame with a rectangle silhouette. Sky Blue finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3154, mrp: 7884, discount: 60, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Sky Blue`, gender: `kids`, material: `Titanium`,
    weight: `N/A`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/dfe451cfa857.jpg`, `https://sfile.chatglm.cn/images-ppt/24be8491f708.jpg`, `https://sfile.chatglm.cn/images-ppt/5a8797cc856a.jpg`],
    rating: 4.5, reviewCount: 274, stock: 9, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p44-r0`, productId: `p44`, userName: `Ananya Verma`, rating: 3, title: `Fast delivery`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-02` },
    { id: `p44-r1`, productId: `p44`, userName: `Ritu Aggarwal`, rating: 5, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-04-20` }
    ],
  },
  {
    id: `p45`, name: `Lecce Oval Square`, slug: `lecce-oval-45`, brand: `Italia Kids`,
    description: `Handcrafted metal frame with a square silhouette. Sapphire finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5141, mrp: 12358, discount: 58, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `square`, frameColor: `Sapphire`, gender: `women`, material: `Metal`,
    weight: `28g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/1038afa65b4e.webp`, `https://sfile.chatglm.cn/images-ppt/dfe451cfa857.jpg`, `https://sfile.chatglm.cn/images-ppt/eafb2a93461a.jpg`],
    rating: 4.8, reviewCount: 200, stock: 69, isFeatured: true, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p45-r0`, productId: `p45`, userName: `Priya Mehta`, rating: 3, title: `Stylish and comfortable`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-04` },
    { id: `p45-r1`, productId: `p45`, userName: `Akash Verma`, rating: 4, title: `Perfect fit`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-02-09` },
    { id: `p45-r2`, productId: `p45`, userName: `Nitin Joshi`, rating: 5, title: `Highly recommend`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-01-08` }
    ],
  },
  {
    id: `p46`, name: `Ferrara Cat-Eye Round`, slug: `ferrara-cat-eye-46`, brand: `Italia Vision`,
    description: `Handcrafted tr90 frame with a round silhouette. Honey finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5411, mrp: 10140, discount: 47, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `round`, frameColor: `Honey`, gender: `men`, material: `TR90`,
    weight: `16g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/d1e52a3ce2b6.png`, `https://sfile.chatglm.cn/images-ppt/fbeb79443390.jpg`, `https://sfile.chatglm.cn/images-ppt/eafb2a93461a.jpg`],
    rating: 4.1, reviewCount: 337, stock: 47, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p46-r0`, productId: `p46`, userName: `Sonia Mehta`, rating: 5, title: `Fast delivery`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-01` },
    { id: `p46-r1`, productId: `p46`, userName: `Arjun Nair`, rating: 4, title: `Highly recommend`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-17` },
    { id: `p46-r2`, productId: `p46`, userName: `Ritu Aggarwal`, rating: 4, title: `Perfect fit`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-04` },
    { id: `p46-r3`, productId: `p46`, userName: `Priya Mehta`, rating: 4, title: `Worth every rupee`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-04-03` }
    ],
  },
  {
    id: `p47`, name: `Palermo Aviator Cat-eye`, slug: `palermo-aviator-47`, brand: `Italia Kids`,
    description: `Handcrafted stainless steel frame with a cat-eye silhouette. Sapphire finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5520, mrp: 11454, discount: 52, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `cat-eye`, frameColor: `Sapphire`, gender: `men`, material: `Stainless Steel`,
    weight: `N/A`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/9463187a2c38.webp`, `https://sfile.chatglm.cn/images-ppt/f46c3a5a2e74.jpeg`, `https://sfile.chatglm.cn/images-ppt/3a6aa890ebc5.jpg`, `https://sfile.chatglm.cn/images-ppt/3789ed1e856c.jpg`],
    rating: 4.6, reviewCount: 100, stock: 90, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p47-r0`, productId: `p47`, userName: `Neha Pandey`, rating: 4, title: `Worth every rupee`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-21` },
    { id: `p47-r1`, productId: `p47`, userName: `Sahil Khan`, rating: 5, title: `Perfect fit`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-26` },
    { id: `p47-r2`, productId: `p47`, userName: `Rohit Gupta`, rating: 5, title: `Satisfied`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-24` },
    { id: `p47-r3`, productId: `p47`, userName: `Karan Malhotra`, rating: 4, title: `Excellent quality!`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-11` }
    ],
  },
  {
    id: `p48`, name: `Udine Square Hexagon`, slug: `udine-square-48`, brand: `Italia Pro`,
    description: `Handcrafted stainless steel frame with a hexagon silhouette. Sky Blue finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 5219, mrp: 11125, discount: 53, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `hexagon`, frameColor: `Sky Blue`, gender: `kids`, material: `Stainless Steel`,
    weight: `18g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/583697394ab6.jpg`, `https://sfile.chatglm.cn/images-ppt/3789ed1e856c.jpg`, `https://sfile.chatglm.cn/images-ppt/f6bfe594a4be.jpg`, `https://sfile.chatglm.cn/images-ppt/3a6aa890ebc5.jpg`],
    rating: 4.3, reviewCount: 27, stock: 106, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p48-r0`, productId: `p48`, userName: `Arjun Nair`, rating: 4, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-12` },
    { id: `p48-r1`, productId: `p48`, userName: `Priya Mehta`, rating: 3, title: `Great purchase`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-26` },
    { id: `p48-r2`, productId: `p48`, userName: `Divya Iyer`, rating: 5, title: `Worth every rupee`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-04-11` }
    ],
  },
  {
    id: `p49`, name: `Siena Oval Oval`, slug: `siena-oval-49`, brand: `Italia Kids`,
    description: `Handcrafted polycarbonate frame with a oval silhouette. Bronze finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 3483, mrp: 8014, discount: 57, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `oval`, frameColor: `Bronze`, gender: `unisex`, material: `Polycarbonate`,
    weight: `14g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/583697394ab6.jpg`, `https://sfile.chatglm.cn/images-ppt/52ad5b05878d.jpg`, `https://sfile.chatglm.cn/images-ppt/dfe451cfa857.jpg`, `https://sfile.chatglm.cn/images-ppt/0691ce31fbfe.jpg`],
    rating: 4.5, reviewCount: 169, stock: 18, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p49-r0`, productId: `p49`, userName: `Nitin Joshi`, rating: 5, title: `Stylish and comfortable`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-20` },
    { id: `p49-r1`, productId: `p49`, userName: `Ritu Aggarwal`, rating: 5, title: `Better than expected`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-22` }
    ],
  },
  {
    id: `p50`, name: `Gorizia Cat-Eye Rectangle`, slug: `gorizia-cat-eye-50`, brand: `Italia Tech`,
    description: `Handcrafted acetate frame with a rectangle silhouette. Emerald finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.`,
    price: 2468, mrp: 5796, discount: 57, categoryId: `c1`, categorySlug: `eyeglasses`,
    frameShape: `rectangle`, frameColor: `Emerald`, gender: `women`, material: `Acetate`,
    weight: `30g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/52ad5b05878d.jpg`, `https://sfile.chatglm.cn/images-ppt/f5c95d347c2e.jpg`, `https://sfile.chatglm.cn/images-ppt/9463187a2c38.webp`],
    rating: 4.6, reviewCount: 190, stock: 54, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p50-r0`, productId: `p50`, userName: `Vikram Singh`, rating: 5, title: `Great purchase`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-21` },
    { id: `p50-r1`, productId: `p50`, userName: `Arjun Nair`, rating: 4, title: `Good value for money`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-16` },
    { id: `p50-r2`, productId: `p50`, userName: `Akash Verma`, rating: 5, title: `Premium feel`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-25` },
    { id: `p50-r3`, productId: `p50`, userName: `Arjun Nair`, rating: 3, title: `Stylish and comfortable`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-10` }
    ],
  },
  {
    id: `p51`, name: `Marina Piccola Square Square`, slug: `marina-piccola-square-51`, brand: `Italia Kids`,
    description: `Premium square sunglasses with polarized UV400 lenses. Gunmetal acetate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 5002, mrp: 8366, discount: 40, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `square`, frameColor: `Gunmetal`, gender: `women`, material: `Acetate`,
    weight: `14g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/0f5861793cb6.jpg`, `https://sfile.chatglm.cn/images-ppt/048562e268d6.png`, `https://sfile.chatglm.cn/images-ppt/afb3735ba348.jpeg`, `https://sfile.chatglm.cn/images-ppt/2c5803371b0c.jpg`],
    rating: 5.0, reviewCount: 346, stock: 49, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p51-r0`, productId: `p51`, userName: `Sneha Reddy`, rating: 4, title: `Highly recommend`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-04-01` },
    { id: `p51-r1`, productId: `p51`, userName: `Divya Iyer`, rating: 5, title: `Fast delivery`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-26` }
    ],
  },
  {
    id: `p52`, name: `Marina Round Cat-eye`, slug: `marina-round-52`, brand: `Italia Pro`,
    description: `Premium cat-eye sunglasses with polarized UV400 lenses. Honey Amber metal frame with anti-scratch coating. Comes with premium leather case.`,
    price: 4560, mrp: 11398, discount: 60, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `cat-eye`, frameColor: `Honey Amber`, gender: `men`, material: `Metal`,
    weight: `14g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/78ef5e201c13.jpg`, `https://sfile.chatglm.cn/images-ppt/2035342f5d4e.jpg`, `https://sfile.chatglm.cn/images-ppt/3fc366999b5c.jpg`, `https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`],
    rating: 4.1, reviewCount: 167, stock: 87, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p52-r0`, productId: `p52`, userName: `Manish Tiwari`, rating: 4, title: `Highly recommend`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-28` },
    { id: `p52-r1`, productId: `p52`, userName: `Priya Mehta`, rating: 4, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-06` },
    { id: `p52-r2`, productId: `p52`, userName: `Ananya Verma`, rating: 5, title: `Love it!`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-17` },
    { id: `p52-r3`, productId: `p52`, userName: `Pooja Bhatt`, rating: 4, title: `Perfect fit`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-09` }
    ],
  },
  {
    id: `p53`, name: `Sorrento Aviator Cat-eye`, slug: `sorrento-aviator-53`, brand: `Italia Active`,
    description: `Premium cat-eye sunglasses with polarized UV400 lenses. Sapphire polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2680, mrp: 5606, discount: 52, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `cat-eye`, frameColor: `Sapphire`, gender: `men`, material: `Polycarbonate`,
    weight: `12g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/0f52ed08ae11.jpg`, `https://sfile.chatglm.cn/images-ppt/542fcaafc112.jpg`, `https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`],
    rating: 4.3, reviewCount: 293, stock: 10, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p53-r0`, productId: `p53`, userName: `Rajesh Khurana`, rating: 5, title: `Worth every rupee`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-16` },
    { id: `p53-r1`, productId: `p53`, userName: `Neha Pandey`, rating: 5, title: `Better than expected`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-08` },
    { id: `p53-r2`, productId: `p53`, userName: `Sahil Khan`, rating: 5, title: `Stylish and comfortable`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-06` }
    ],
  },
  {
    id: `p54`, name: `Meta Square Aviator`, slug: `meta-square-54`, brand: `Italia Tech`,
    description: `Premium aviator sunglasses with polarized UV400 lenses. Charcoal metal frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2475, mrp: 4486, discount: 45, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `aviator`, frameColor: `Charcoal`, gender: `women`, material: `Metal`,
    weight: `28g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/365c3301fc11.jpg`, `https://sfile.chatglm.cn/images-ppt/50c4983b51e0.jpg`, `https://sfile.chatglm.cn/images-ppt/2f5d03cfe44a.jpg`, `https://sfile.chatglm.cn/images-ppt/7283b7171715.jpg`],
    rating: 4.1, reviewCount: 194, stock: 70, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p54-r0`, productId: `p54`, userName: `Meera Kapoor`, rating: 4, title: `Good value for money`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-13` },
    { id: `p54-r1`, productId: `p54`, userName: `Kavya Rao`, rating: 5, title: `Satisfied`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-19` },
    { id: `p54-r2`, productId: `p54`, userName: `Karan Malhotra`, rating: 4, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-15` }
    ],
  },
  {
    id: `p55`, name: `Seiano Aviator Aviator`, slug: `seiano-aviator-55`, brand: `Italia Active`,
    description: `Premium aviator sunglasses with polarized UV400 lenses. Tortoise tr90 frame with anti-scratch coating. Comes with premium leather case.`,
    price: 5439, mrp: 10645, discount: 49, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `aviator`, frameColor: `Tortoise`, gender: `men`, material: `TR90`,
    weight: `26g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`, `https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`, `https://sfile.chatglm.cn/images-ppt/416ff11f7ad9.jpg`],
    rating: 4.6, reviewCount: 339, stock: 91, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p55-r0`, productId: `p55`, userName: `Divya Iyer`, rating: 5, title: `Great purchase`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-02` },
    { id: `p55-r1`, productId: `p55`, userName: `Manish Tiwari`, rating: 5, title: `Satisfied`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-10` },
    { id: `p55-r2`, productId: `p55`, userName: `Rohit Gupta`, rating: 5, title: `Premium feel`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-09` }
    ],
  },
  {
    id: `p56`, name: `Anacapri Aviator Round`, slug: `anacapri-aviator-56`, brand: `Italia Luxe`,
    description: `Premium round sunglasses with polarized UV400 lenses. Crystal Blue tr90 frame with anti-scratch coating. Comes with premium leather case.`,
    price: 4356, mrp: 9996, discount: 56, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `round`, frameColor: `Crystal Blue`, gender: `men`, material: `TR90`,
    weight: `12g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/6e7c59dc3d73.jpg`, `https://sfile.chatglm.cn/images-ppt/aaaf618624a4.jpg`, `https://sfile.chatglm.cn/images-ppt/4f29e95e0427.jpg`],
    rating: 4.5, reviewCount: 261, stock: 10, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p56-r0`, productId: `p56`, userName: `Vikram Singh`, rating: 5, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-20` },
    { id: `p56-r1`, productId: `p56`, userName: `Karan Malhotra`, rating: 4, title: `Worth every rupee`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-19` },
    { id: `p56-r2`, productId: `p56`, userName: `Karan Malhotra`, rating: 5, title: `Premium feel`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-23` }
    ],
  },
  {
    id: `p57`, name: `Augustus Square Aviator`, slug: `augustus-square-57`, brand: `Italia Active`,
    description: `Premium aviator sunglasses with polarized UV400 lenses. Tortoise metal frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2196, mrp: 5445, discount: 60, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `aviator`, frameColor: `Tortoise`, gender: `unisex`, material: `Metal`,
    weight: `N/A`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/abbbc6d1707f.jpg`, `https://sfile.chatglm.cn/images-ppt/907820da0b40.jpg`, `https://sfile.chatglm.cn/images-ppt/c240d309deea.png`],
    rating: 4.0, reviewCount: 247, stock: 38, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p57-r0`, productId: `p57`, userName: `Kavya Rao`, rating: 5, title: `Highly recommend`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-19` },
    { id: `p57-r1`, productId: `p57`, userName: `Sneha Reddy`, rating: 4, title: `Excellent quality!`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-14` },
    { id: `p57-r2`, productId: `p57`, userName: `Vikram Singh`, rating: 5, title: `Love it!`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-04-17` },
    { id: `p57-r3`, productId: `p57`, userName: `Kavya Rao`, rating: 5, title: `Love it!`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-17` }
    ],
  },
  {
    id: `p58`, name: `Maiori Square Rectangle`, slug: `maiori-square-58`, brand: `Italia Care`,
    description: `Premium rectangle sunglasses with polarized UV400 lenses. Platinum polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 4385, mrp: 7953, discount: 45, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `rectangle`, frameColor: `Platinum`, gender: `kids`, material: `Polycarbonate`,
    weight: `20g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/d24c3df4303d.jpg`, `https://sfile.chatglm.cn/images-ppt/8d4736e129f9.jpg`, `https://sfile.chatglm.cn/images-ppt/8a778e3ec394.jpeg`],
    rating: 4.8, reviewCount: 334, stock: 107, isFeatured: true, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p58-r0`, productId: `p58`, userName: `Meera Kapoor`, rating: 5, title: `Perfect fit`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-04-11` },
    { id: `p58-r1`, productId: `p58`, userName: `Sonia Mehta`, rating: 5, title: `Premium feel`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-04` },
    { id: `p58-r2`, productId: `p58`, userName: `Manish Tiwari`, rating: 3, title: `Premium feel`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-27` }
    ],
  },
  {
    id: `p59`, name: `Gragnano Cat-Eye Rectangle`, slug: `gragnano-cat-eye-59`, brand: `Italia Pro`,
    description: `Premium rectangle sunglasses with polarized UV400 lenses. Black stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1946, mrp: 3593, discount: 46, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `rectangle`, frameColor: `Black`, gender: `unisex`, material: `Stainless Steel`,
    weight: `20g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`, `https://sfile.chatglm.cn/images-ppt/ba465e5bfa1c.jpg`, `https://sfile.chatglm.cn/images-ppt/0d33e99f39f8.jpg`],
    rating: 4.5, reviewCount: 292, stock: 94, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p59-r0`, productId: `p59`, userName: `Akash Verma`, rating: 4, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-04` },
    { id: `p59-r1`, productId: `p59`, userName: `Ritu Aggarwal`, rating: 5, title: `Love it!`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-22` },
    { id: `p59-r2`, productId: `p59`, userName: `Vikram Singh`, rating: 4, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-21` },
    { id: `p59-r3`, productId: `p59`, userName: `Sonia Mehta`, rating: 5, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-11` }
    ],
  },
  {
    id: `p60`, name: `Atrani Sport Hexagon`, slug: `atrani-sport-60`, brand: `Italia Premium`,
    description: `Premium hexagon sunglasses with polarized UV400 lenses. Honey Amber polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1604, mrp: 3870, discount: 59, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `hexagon`, frameColor: `Honey Amber`, gender: `women`, material: `Polycarbonate`,
    weight: `26g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/8e3c06b954d9.png`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/8d312a5c3096.jpg`, `https://sfile.chatglm.cn/images-ppt/678e1dfe54e6.jpg`],
    rating: 5.0, reviewCount: 208, stock: 105, isFeatured: true, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p60-r0`, productId: `p60`, userName: `Pooja Bhatt`, rating: 5, title: `Better than expected`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-16` },
    { id: `p60-r1`, productId: `p60`, userName: `Vikram Singh`, rating: 5, title: `Stylish and comfortable`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-26` },
    { id: `p60-r2`, productId: `p60`, userName: `Sneha Reddy`, rating: 5, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-23` }
    ],
  },
  {
    id: `p61`, name: `Maiori Wayfarer Oval`, slug: `maiori-wayfarer-61`, brand: `Italia Premium`,
    description: `Premium oval sunglasses with polarized UV400 lenses. Wine Red polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2881, mrp: 4827, discount: 40, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `oval`, frameColor: `Wine Red`, gender: `unisex`, material: `Polycarbonate`,
    weight: `16g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/8d312a5c3096.jpg`, `https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`, `https://sfile.chatglm.cn/images-ppt/0d33e99f39f8.jpg`, `https://sfile.chatglm.cn/images-ppt/907820da0b40.jpg`],
    rating: 4.1, reviewCount: 347, stock: 17, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p61-r0`, productId: `p61`, userName: `Meera Kapoor`, rating: 5, title: `Perfect fit`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-03-19` },
    { id: `p61-r1`, productId: `p61`, userName: `Manish Tiwari`, rating: 4, title: `Perfect fit`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-02-02` },
    { id: `p61-r2`, productId: `p61`, userName: `Sneha Reddy`, rating: 5, title: `Perfect fit`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-22` }
    ],
  },
  {
    id: `p62`, name: `Scopolo Oversized Oval`, slug: `scopolo-oversized-62`, brand: `Italia Active`,
    description: `Premium oval sunglasses with polarized UV400 lenses. Gunmetal metal frame with anti-scratch coating. Comes with premium leather case.`,
    price: 3108, mrp: 5343, discount: 42, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `oval`, frameColor: `Gunmetal`, gender: `unisex`, material: `Metal`,
    weight: `28g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`, `https://sfile.chatglm.cn/images-ppt/aaaf618624a4.jpg`, `https://sfile.chatglm.cn/images-ppt/826fd77d9578.jpg`],
    rating: 4.4, reviewCount: 286, stock: 65, isFeatured: true, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p62-r0`, productId: `p62`, userName: `Divya Iyer`, rating: 4, title: `Fast delivery`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-27` },
    { id: `p62-r1`, productId: `p62`, userName: `Neha Pandey`, rating: 5, title: `Satisfied`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-05` },
    { id: `p62-r2`, productId: `p62`, userName: `Ananya Verma`, rating: 5, title: `Premium feel`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-22` },
    { id: `p62-r3`, productId: `p62`, userName: `Rajesh Khurana`, rating: 3, title: `Fast delivery`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-17` }
    ],
  },
  {
    id: `p63`, name: `Meta Square Aviator`, slug: `meta-square-63`, brand: `Italia Premium`,
    description: `Premium aviator sunglasses with polarized UV400 lenses. Crystal Blue tr90 frame with anti-scratch coating. Comes with premium leather case.`,
    price: 5918, mrp: 9218, discount: 36, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `aviator`, frameColor: `Crystal Blue`, gender: `kids`, material: `TR90`,
    weight: `18g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/0f52ed08ae11.jpg`, `https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`, `https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`],
    rating: 4.4, reviewCount: 6, stock: 100, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p63-r0`, productId: `p63`, userName: `Priya Mehta`, rating: 4, title: `Stylish and comfortable`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-14` },
    { id: `p63-r1`, productId: `p63`, userName: `Ananya Verma`, rating: 4, title: `Better than expected`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-13` },
    { id: `p63-r2`, productId: `p63`, userName: `Nitin Joshi`, rating: 5, title: `Worth every rupee`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-05` },
    { id: `p63-r3`, productId: `p63`, userName: `Divya Iyer`, rating: 4, title: `Highly recommend`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-17` }
    ],
  },
  {
    id: `p64`, name: `Sorrento Aviator Hexagon`, slug: `sorrento-aviator-64`, brand: `Italia Sun`,
    description: `Premium hexagon sunglasses with polarized UV400 lenses. Tortoise metal frame with anti-scratch coating. Comes with premium leather case.`,
    price: 5091, mrp: 11065, discount: 54, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `hexagon`, frameColor: `Tortoise`, gender: `men`, material: `Metal`,
    weight: `14g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/ba465e5bfa1c.jpg`, `https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`, `https://sfile.chatglm.cn/images-ppt/3fc366999b5c.jpg`, `https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`],
    rating: 4.3, reviewCount: 146, stock: 29, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p64-r0`, productId: `p64`, userName: `Kavya Rao`, rating: 4, title: `Stylish and comfortable`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-08` },
    { id: `p64-r1`, productId: `p64`, userName: `Priya Mehta`, rating: 5, title: `Stylish and comfortable`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-07` }
    ],
  },
  {
    id: `p65`, name: `Amalfi Wayfarer Cat-eye`, slug: `amalfi-wayfarer-65`, brand: `Italia Pro`,
    description: `Premium cat-eye sunglasses with polarized UV400 lenses. Forest Green stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 3911, mrp: 8125, discount: 52, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `cat-eye`, frameColor: `Forest Green`, gender: `women`, material: `Stainless Steel`,
    weight: `24g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/2f5d03cfe44a.jpg`, `https://sfile.chatglm.cn/images-ppt/048562e268d6.png`, `https://sfile.chatglm.cn/images-ppt/0f52ed08ae11.jpg`, `https://sfile.chatglm.cn/images-ppt/542fcaafc112.jpg`],
    rating: 5.0, reviewCount: 271, stock: 33, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p65-r0`, productId: `p65`, userName: `Divya Iyer`, rating: 3, title: `Better than expected`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-11` },
    { id: `p65-r1`, productId: `p65`, userName: `Ritu Aggarwal`, rating: 5, title: `Highly recommend`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-06` }
    ],
  },
  {
    id: `p66`, name: `Faraglioni Wayfarer Square`, slug: `faraglioni-wayfarer-66`, brand: `Italia Kids`,
    description: `Premium square sunglasses with polarized UV400 lenses. Gold Brown stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2481, mrp: 5720, discount: 57, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `square`, frameColor: `Gold Brown`, gender: `unisex`, material: `Stainless Steel`,
    weight: `18g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/826fd77d9578.jpg`, `https://sfile.chatglm.cn/images-ppt/afb3735ba348.jpeg`, `https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`],
    rating: 4.1, reviewCount: 129, stock: 37, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p66-r0`, productId: `p66`, userName: `Rajesh Khurana`, rating: 4, title: `Perfect fit`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-20` },
    { id: `p66-r1`, productId: `p66`, userName: `Priya Mehta`, rating: 4, title: `Satisfied`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-07` },
    { id: `p66-r2`, productId: `p66`, userName: `Sonia Mehta`, rating: 4, title: `Great purchase`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-07` },
    { id: `p66-r3`, productId: `p66`, userName: `Rajesh Khurana`, rating: 3, title: `Good value for money`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-23` }
    ],
  },
  {
    id: `p67`, name: `Mount Solaro Polarized Aviator`, slug: `mount-solaro-polarized-67`, brand: `Italia Sun`,
    description: `Premium aviator sunglasses with polarized UV400 lenses. Gold Brown metal frame with anti-scratch coating. Comes with premium leather case.`,
    price: 4417, mrp: 8684, discount: 49, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `aviator`, frameColor: `Gold Brown`, gender: `unisex`, material: `Metal`,
    weight: `22g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/8d312a5c3096.jpg`, `https://sfile.chatglm.cn/images-ppt/abbbc6d1707f.jpg`, `https://sfile.chatglm.cn/images-ppt/c240d309deea.png`, `https://sfile.chatglm.cn/images-ppt/8d4736e129f9.jpg`],
    rating: 4.5, reviewCount: 245, stock: 102, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p67-r0`, productId: `p67`, userName: `Vikram Singh`, rating: 4, title: `Perfect fit`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-19` },
    { id: `p67-r1`, productId: `p67`, userName: `Ritu Aggarwal`, rating: 5, title: `Highly recommend`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-08` },
    { id: `p67-r2`, productId: `p67`, userName: `Sahil Khan`, rating: 5, title: `Satisfied`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-21` },
    { id: `p67-r3`, productId: `p67`, userName: `Karan Malhotra`, rating: 5, title: `Stylish and comfortable`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-04-06` }
    ],
  },
  {
    id: `p68`, name: `Gragnano Cat-Eye Square`, slug: `gragnano-cat-eye-68`, brand: `Italia Pro`,
    description: `Premium square sunglasses with polarized UV400 lenses. Pearl White titanium frame with anti-scratch coating. Comes with premium leather case.`,
    price: 5740, mrp: 14294, discount: 60, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `square`, frameColor: `Pearl White`, gender: `kids`, material: `Titanium`,
    weight: `12g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/8d4736e129f9.jpg`, `https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`, `https://sfile.chatglm.cn/images-ppt/7283b7171715.jpg`],
    rating: 4.8, reviewCount: 29, stock: 102, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p68-r0`, productId: `p68`, userName: `Rajesh Khurana`, rating: 5, title: `Stylish and comfortable`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-20` },
    { id: `p68-r1`, productId: `p68`, userName: `Kavya Rao`, rating: 5, title: `Better than expected`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-01` }
    ],
  },
  {
    id: `p69`, name: `Faraglioni Wayfarer Aviator`, slug: `faraglioni-wayfarer-69`, brand: `Italia Care`,
    description: `Premium aviator sunglasses with polarized UV400 lenses. Tortoise polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 3549, mrp: 7224, discount: 51, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `aviator`, frameColor: `Tortoise`, gender: `men`, material: `Polycarbonate`,
    weight: `14g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/d24c3df4303d.jpg`, `https://sfile.chatglm.cn/images-ppt/aaaf618624a4.jpg`, `https://sfile.chatglm.cn/images-ppt/907820da0b40.jpg`],
    rating: 4.9, reviewCount: 96, stock: 18, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p69-r0`, productId: `p69`, userName: `Arjun Nair`, rating: 5, title: `Good value for money`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-15` },
    { id: `p69-r1`, productId: `p69`, userName: `Manish Tiwari`, rating: 4, title: `Love it!`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-22` },
    { id: `p69-r2`, productId: `p69`, userName: `Rohit Gupta`, rating: 3, title: `Better than expected`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-13` }
    ],
  },
  {
    id: `p70`, name: `Casola Aviator Cat-eye`, slug: `casola-aviator-70`, brand: `Italia Tech`,
    description: `Premium cat-eye sunglasses with polarized UV400 lenses. Bronze stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1376, mrp: 3031, discount: 55, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `cat-eye`, frameColor: `Bronze`, gender: `men`, material: `Stainless Steel`,
    weight: `28g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/3fc366999b5c.jpg`, `https://sfile.chatglm.cn/images-ppt/678e1dfe54e6.jpg`, `https://sfile.chatglm.cn/images-ppt/4f29e95e0427.jpg`],
    rating: 5.0, reviewCount: 53, stock: 119, isFeatured: true, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p70-r0`, productId: `p70`, userName: `Rohit Gupta`, rating: 3, title: `Perfect fit`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-22` },
    { id: `p70-r1`, productId: `p70`, userName: `Priya Mehta`, rating: 4, title: `Great purchase`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-19` }
    ],
  },
  {
    id: `p71`, name: `Ravello Oversized Round`, slug: `ravello-oversized-71`, brand: `Italia Tech`,
    description: `Premium round sunglasses with polarized UV400 lenses. Forest Green polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 3268, mrp: 6753, discount: 52, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `round`, frameColor: `Forest Green`, gender: `women`, material: `Polycarbonate`,
    weight: `22g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/0f52ed08ae11.jpg`, `https://sfile.chatglm.cn/images-ppt/8d4736e129f9.jpg`, `https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`],
    rating: 4.7, reviewCount: 45, stock: 69, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p71-r0`, productId: `p71`, userName: `Kavya Rao`, rating: 5, title: `Fast delivery`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-01` },
    { id: `p71-r1`, productId: `p71`, userName: `Arjun Nair`, rating: 5, title: `Stylish and comfortable`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-18` },
    { id: `p71-r2`, productId: `p71`, userName: `Sahil Khan`, rating: 5, title: `Highly recommend`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-04-03` }
    ],
  },
  {
    id: `p72`, name: `Anacapri Aviator Hexagon`, slug: `anacapri-aviator-72`, brand: `Italia Active`,
    description: `Premium hexagon sunglasses with polarized UV400 lenses. Gold Brown acetate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 3494, mrp: 5779, discount: 40, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `hexagon`, frameColor: `Gold Brown`, gender: `men`, material: `Acetate`,
    weight: `26g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/416ff11f7ad9.jpg`, `https://sfile.chatglm.cn/images-ppt/365c3301fc11.jpg`, `https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`, `https://sfile.chatglm.cn/images-ppt/048562e268d6.png`],
    rating: 4.1, reviewCount: 7, stock: 44, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p72-r0`, productId: `p72`, userName: `Nitin Joshi`, rating: 5, title: `Premium feel`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-04` },
    { id: `p72-r1`, productId: `p72`, userName: `Aarav Sharma`, rating: 4, title: `Great purchase`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-20` },
    { id: `p72-r2`, productId: `p72`, userName: `Kavya Rao`, rating: 5, title: `Worth every rupee`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-14` }
    ],
  },
  {
    id: `p73`, name: `Casola Aviator Oval`, slug: `casola-aviator-73`, brand: `Italia Femme`,
    description: `Premium oval sunglasses with polarized UV400 lenses. Sapphire polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 5567, mrp: 9294, discount: 40, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `oval`, frameColor: `Sapphire`, gender: `women`, material: `Polycarbonate`,
    weight: `24g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`, `https://sfile.chatglm.cn/images-ppt/afb3735ba348.jpeg`, `https://sfile.chatglm.cn/images-ppt/907820da0b40.jpg`, `https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`],
    rating: 4.1, reviewCount: 227, stock: 40, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p73-r0`, productId: `p73`, userName: `Sonia Mehta`, rating: 5, title: `Fast delivery`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-04-04` },
    { id: `p73-r1`, productId: `p73`, userName: `Vikram Singh`, rating: 5, title: `Excellent quality!`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-27` },
    { id: `p73-r2`, productId: `p73`, userName: `Kavya Rao`, rating: 5, title: `Great purchase`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-14` },
    { id: `p73-r3`, productId: `p73`, userName: `Kavya Rao`, rating: 4, title: `Perfect fit`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-23` }
    ],
  },
  {
    id: `p74`, name: `Minori Round Rectangle`, slug: `minori-round-74`, brand: `Italia Kids`,
    description: `Premium rectangle sunglasses with polarized UV400 lenses. Matte Black metal frame with anti-scratch coating. Comes with premium leather case.`,
    price: 3686, mrp: 8237, discount: 55, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `rectangle`, frameColor: `Matte Black`, gender: `kids`, material: `Metal`,
    weight: `14g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/ba465e5bfa1c.jpg`, `https://sfile.chatglm.cn/images-ppt/8a778e3ec394.jpeg`, `https://sfile.chatglm.cn/images-ppt/3fc366999b5c.jpg`],
    rating: 4.3, reviewCount: 206, stock: 51, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p74-r0`, productId: `p74`, userName: `Pooja Bhatt`, rating: 3, title: `Good value for money`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-05` },
    { id: `p74-r1`, productId: `p74`, userName: `Pooja Bhatt`, rating: 4, title: `Perfect fit`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-26` },
    { id: `p74-r2`, productId: `p74`, userName: `Sahil Khan`, rating: 4, title: `Stylish and comfortable`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-04-19` }
    ],
  },
  {
    id: `p75`, name: `Tramonti Oversized Cat-eye`, slug: `tramonti-oversized-75`, brand: `Italia Care`,
    description: `Premium cat-eye sunglasses with polarized UV400 lenses. Onyx polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1600, mrp: 3665, discount: 56, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `cat-eye`, frameColor: `Onyx`, gender: `kids`, material: `Polycarbonate`,
    weight: `N/A`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/c240d309deea.png`, `https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`, `https://sfile.chatglm.cn/images-ppt/6e7c59dc3d73.jpg`],
    rating: 4.1, reviewCount: 132, stock: 89, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p75-r0`, productId: `p75`, userName: `Sneha Reddy`, rating: 4, title: `Good value for money`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-17` },
    { id: `p75-r1`, productId: `p75`, userName: `Akash Verma`, rating: 5, title: `Fast delivery`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-15` },
    { id: `p75-r2`, productId: `p75`, userName: `Divya Iyer`, rating: 5, title: `Stylish and comfortable`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-05` }
    ],
  },
  {
    id: `p76`, name: `Gragnano Cat-Eye Aviator`, slug: `gragnano-cat-eye-76`, brand: `Italia Premium`,
    description: `Premium aviator sunglasses with polarized UV400 lenses. Gunmetal tr90 frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2002, mrp: 3235, discount: 38, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `aviator`, frameColor: `Gunmetal`, gender: `unisex`, material: `TR90`,
    weight: `26g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/416ff11f7ad9.jpg`, `https://sfile.chatglm.cn/images-ppt/826fd77d9578.jpg`, `https://sfile.chatglm.cn/images-ppt/8d312a5c3096.jpg`, `https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`],
    rating: 4.5, reviewCount: 110, stock: 71, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p76-r0`, productId: `p76`, userName: `Priya Mehta`, rating: 3, title: `Good value for money`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-21` },
    { id: `p76-r1`, productId: `p76`, userName: `Sneha Reddy`, rating: 3, title: `Highly recommend`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-06` },
    { id: `p76-r2`, productId: `p76`, userName: `Neha Pandey`, rating: 4, title: `Great purchase`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-15` }
    ],
  },
  {
    id: `p77`, name: `Vietri Cat-Eye Oval`, slug: `vietri-cat-eye-77`, brand: `Italia Tech`,
    description: `Premium oval sunglasses with polarized UV400 lenses. Matte Black stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 4839, mrp: 9172, discount: 47, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `oval`, frameColor: `Matte Black`, gender: `women`, material: `Stainless Steel`,
    weight: `20g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/048562e268d6.png`, `https://sfile.chatglm.cn/images-ppt/afb3735ba348.jpeg`],
    rating: 4.0, reviewCount: 114, stock: 31, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p77-r0`, productId: `p77`, userName: `Rajesh Khurana`, rating: 5, title: `Good value for money`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-17` },
    { id: `p77-r1`, productId: `p77`, userName: `Karan Malhotra`, rating: 5, title: `Worth every rupee`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-04-19` },
    { id: `p77-r2`, productId: `p77`, userName: `Sneha Reddy`, rating: 5, title: `Great purchase`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-06` }
    ],
  },
  {
    id: `p78`, name: `Villa San Round Cat-eye`, slug: `villa-san-round-78`, brand: `Italia Active`,
    description: `Premium cat-eye sunglasses with polarized UV400 lenses. Ivory stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2396, mrp: 4344, discount: 45, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `cat-eye`, frameColor: `Ivory`, gender: `men`, material: `Stainless Steel`,
    weight: `30g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/048562e268d6.png`, `https://sfile.chatglm.cn/images-ppt/542fcaafc112.jpg`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/0f5861793cb6.jpg`],
    rating: 4.4, reviewCount: 310, stock: 22, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p78-r0`, productId: `p78`, userName: `Pooja Bhatt`, rating: 4, title: `Highly recommend`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-20` },
    { id: `p78-r1`, productId: `p78`, userName: `Priya Mehta`, rating: 5, title: `Excellent quality!`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-07` },
    { id: `p78-r2`, productId: `p78`, userName: `Sahil Khan`, rating: 5, title: `Premium feel`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-04-22` }
    ],
  },
  {
    id: `p79`, name: `Seiano Aviator Oval`, slug: `seiano-aviator-79`, brand: `Italia Tech`,
    description: `Premium oval sunglasses with polarized UV400 lenses. Charcoal titanium frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1976, mrp: 4081, discount: 52, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `oval`, frameColor: `Charcoal`, gender: `kids`, material: `Titanium`,
    weight: `26g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/4f29e95e0427.jpg`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/afb3735ba348.jpeg`],
    rating: 4.3, reviewCount: 239, stock: 77, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p79-r0`, productId: `p79`, userName: `Priya Mehta`, rating: 3, title: `Stylish and comfortable`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-14` },
    { id: `p79-r1`, productId: `p79`, userName: `Sneha Reddy`, rating: 3, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-28` },
    { id: `p79-r2`, productId: `p79`, userName: `Priya Mehta`, rating: 5, title: `Perfect fit`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-15` },
    { id: `p79-r3`, productId: `p79`, userName: `Sneha Reddy`, rating: 4, title: `Satisfied`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-28` }
    ],
  },
  {
    id: `p80`, name: `Marina Grande Cat-Eye Oval`, slug: `marina-grande-cat-eye-80`, brand: `Italia Luxe`,
    description: `Premium oval sunglasses with polarized UV400 lenses. Honey polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2439, mrp: 5572, discount: 56, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `oval`, frameColor: `Honey`, gender: `women`, material: `Polycarbonate`,
    weight: `20g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/2c5803371b0c.jpg`, `https://sfile.chatglm.cn/images-ppt/416ff11f7ad9.jpg`, `https://sfile.chatglm.cn/images-ppt/365c3301fc11.jpg`, `https://sfile.chatglm.cn/images-ppt/abbbc6d1707f.jpg`],
    rating: 4.6, reviewCount: 91, stock: 46, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p80-r0`, productId: `p80`, userName: `Arjun Nair`, rating: 3, title: `Highly recommend`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-05` },
    { id: `p80-r1`, productId: `p80`, userName: `Karan Malhotra`, rating: 4, title: `Better than expected`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-05` }
    ],
  },
  {
    id: `p81`, name: `Augustus Square Oval`, slug: `augustus-square-81`, brand: `Italia Active`,
    description: `Premium oval sunglasses with polarized UV400 lenses. Honey tr90 frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1917, mrp: 4090, discount: 53, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `oval`, frameColor: `Honey`, gender: `kids`, material: `TR90`,
    weight: `26g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`, `https://sfile.chatglm.cn/images-ppt/8a778e3ec394.jpeg`, `https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`],
    rating: 4.9, reviewCount: 193, stock: 63, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p81-r0`, productId: `p81`, userName: `Neha Pandey`, rating: 5, title: `Satisfied`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-16` },
    { id: `p81-r1`, productId: `p81`, userName: `Arjun Nair`, rating: 5, title: `Perfect fit`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-19` }
    ],
  },
  {
    id: `p82`, name: `Sorrento Aviator Hexagon`, slug: `sorrento-aviator-82`, brand: `Italia Luxe`,
    description: `Premium hexagon sunglasses with polarized UV400 lenses. Bronze stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1695, mrp: 2620, discount: 35, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `hexagon`, frameColor: `Bronze`, gender: `unisex`, material: `Stainless Steel`,
    weight: `26g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/d24c3df4303d.jpg`, `https://sfile.chatglm.cn/images-ppt/365c3301fc11.jpg`, `https://sfile.chatglm.cn/images-ppt/50c4983b51e0.jpg`, `https://sfile.chatglm.cn/images-ppt/0f5861793cb6.jpg`],
    rating: 4.9, reviewCount: 85, stock: 61, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p82-r0`, productId: `p82`, userName: `Rohit Gupta`, rating: 3, title: `Great purchase`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-12` },
    { id: `p82-r1`, productId: `p82`, userName: `Ananya Verma`, rating: 4, title: `Worth every rupee`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-14` },
    { id: `p82-r2`, productId: `p82`, userName: `Rohit Gupta`, rating: 3, title: `Good value for money`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-16` }
    ],
  },
  {
    id: `p83`, name: `Positano Round Cat-eye`, slug: `positano-round-83`, brand: `Italia Pro`,
    description: `Premium cat-eye sunglasses with polarized UV400 lenses. Gold Brown acetate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1365, mrp: 2996, discount: 54, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `cat-eye`, frameColor: `Gold Brown`, gender: `kids`, material: `Acetate`,
    weight: `14g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/afb3735ba348.jpeg`, `https://sfile.chatglm.cn/images-ppt/50c4983b51e0.jpg`, `https://sfile.chatglm.cn/images-ppt/365c3301fc11.jpg`, `https://sfile.chatglm.cn/images-ppt/78ef5e201c13.jpg`],
    rating: 4.1, reviewCount: 201, stock: 16, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p83-r0`, productId: `p83`, userName: `Vikram Singh`, rating: 4, title: `Premium feel`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-20` },
    { id: `p83-r1`, productId: `p83`, userName: `Ananya Verma`, rating: 5, title: `Great purchase`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-14` }
    ],
  },
  {
    id: `p84`, name: `Anacapri Aviator Hexagon`, slug: `anacapri-aviator-84`, brand: `Italia Kids`,
    description: `Premium hexagon sunglasses with polarized UV400 lenses. Black Rose acetate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2445, mrp: 5507, discount: 56, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `hexagon`, frameColor: `Black Rose`, gender: `men`, material: `Acetate`,
    weight: `14g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/ba465e5bfa1c.jpg`, `https://sfile.chatglm.cn/images-ppt/50c4983b51e0.jpg`, `https://sfile.chatglm.cn/images-ppt/3fc366999b5c.jpg`, `https://sfile.chatglm.cn/images-ppt/aaaf618624a4.jpg`],
    rating: 4.1, reviewCount: 146, stock: 87, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p84-r0`, productId: `p84`, userName: `Akash Verma`, rating: 4, title: `Love it!`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-21` },
    { id: `p84-r1`, productId: `p84`, userName: `Priya Mehta`, rating: 4, title: `Stylish and comfortable`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-01-08` },
    { id: `p84-r2`, productId: `p84`, userName: `Sonia Mehta`, rating: 3, title: `Fast delivery`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-01` },
    { id: `p84-r3`, productId: `p84`, userName: `Divya Iyer`, rating: 5, title: `Highly recommend`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-14` }
    ],
  },
  {
    id: `p85`, name: `Lettere Polarized Oval`, slug: `lettere-polarized-85`, brand: `Italia Care`,
    description: `Premium oval sunglasses with polarized UV400 lenses. Matte Black acetate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1435, mrp: 2995, discount: 52, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `oval`, frameColor: `Matte Black`, gender: `kids`, material: `Acetate`,
    weight: `28g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`, `https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/7283b7171715.jpg`],
    rating: 4.4, reviewCount: 151, stock: 85, isFeatured: true, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p85-r0`, productId: `p85`, userName: `Rohit Gupta`, rating: 5, title: `Good value for money`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-26` },
    { id: `p85-r1`, productId: `p85`, userName: `Vikram Singh`, rating: 5, title: `Great purchase`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-21` },
    { id: `p85-r2`, productId: `p85`, userName: `Rohit Gupta`, rating: 5, title: `Love it!`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-02` }
    ],
  },
  {
    id: `p86`, name: `Praiano Polarized Aviator`, slug: `praiano-polarized-86`, brand: `Italia Femme`,
    description: `Premium aviator sunglasses with polarized UV400 lenses. Gunmetal polycarbonate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1749, mrp: 3164, discount: 45, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `aviator`, frameColor: `Gunmetal`, gender: `kids`, material: `Polycarbonate`,
    weight: `22g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/afb3735ba348.jpeg`, `https://sfile.chatglm.cn/images-ppt/365c3301fc11.jpg`, `https://sfile.chatglm.cn/images-ppt/4f29e95e0427.jpg`],
    rating: 4.7, reviewCount: 88, stock: 68, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p86-r0`, productId: `p86`, userName: `Sneha Reddy`, rating: 4, title: `Great purchase`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-17` },
    { id: `p86-r1`, productId: `p86`, userName: `Rohit Gupta`, rating: 5, title: `Love it!`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-16` },
    { id: `p86-r2`, productId: `p86`, userName: `Nitin Joshi`, rating: 5, title: `Great purchase`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-28` },
    { id: `p86-r3`, productId: `p86`, userName: `Manish Tiwari`, rating: 4, title: `Great purchase`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-25` }
    ],
  },
  {
    id: `p87`, name: `Procida Cat-Eye Oval`, slug: `procida-cat-eye-87`, brand: `Italia Luxe`,
    description: `Premium oval sunglasses with polarized UV400 lenses. Pearl White titanium frame with anti-scratch coating. Comes with premium leather case.`,
    price: 5467, mrp: 8214, discount: 33, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `oval`, frameColor: `Pearl White`, gender: `men`, material: `Titanium`,
    weight: `12g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/8d312a5c3096.jpg`, `https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`, `https://sfile.chatglm.cn/images-ppt/abbbc6d1707f.jpg`],
    rating: 4.4, reviewCount: 81, stock: 27, isFeatured: false, isNew: true, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p87-r0`, productId: `p87`, userName: `Karan Malhotra`, rating: 5, title: `Good value for money`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-04` },
    { id: `p87-r1`, productId: `p87`, userName: `Akash Verma`, rating: 3, title: `Excellent quality!`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-26` },
    { id: `p87-r2`, productId: `p87`, userName: `Akash Verma`, rating: 4, title: `Worth every rupee`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-28` },
    { id: `p87-r3`, productId: `p87`, userName: `Pooja Bhatt`, rating: 5, title: `Great purchase`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-15` }
    ],
  },
  {
    id: `p88`, name: `Capri Aviator Square`, slug: `capri-aviator-88`, brand: `Italia Vision`,
    description: `Premium square sunglasses with polarized UV400 lenses. Forest Green stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 3286, mrp: 6453, discount: 49, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `square`, frameColor: `Forest Green`, gender: `unisex`, material: `Stainless Steel`,
    weight: `12g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/8d4736e129f9.jpg`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`],
    rating: 4.9, reviewCount: 130, stock: 24, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p88-r0`, productId: `p88`, userName: `Aarav Sharma`, rating: 5, title: `Excellent quality!`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-04` },
    { id: `p88-r1`, productId: `p88`, userName: `Rajesh Khurana`, rating: 5, title: `Satisfied`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-02` },
    { id: `p88-r2`, productId: `p88`, userName: `Vikram Singh`, rating: 3, title: `Perfect fit`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-08` },
    { id: `p88-r3`, productId: `p88`, userName: `Akash Verma`, rating: 5, title: `Love it!`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-24` }
    ],
  },
  {
    id: `p89`, name: `Ischia Square Round`, slug: `ischia-square-89`, brand: `Italia Luxe`,
    description: `Premium round sunglasses with polarized UV400 lenses. Emerald stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 4529, mrp: 7132, discount: 36, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `round`, frameColor: `Emerald`, gender: `women`, material: `Stainless Steel`,
    weight: `22g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/8d312a5c3096.jpg`, `https://sfile.chatglm.cn/images-ppt/826fd77d9578.jpg`, `https://sfile.chatglm.cn/images-ppt/4f29e95e0427.jpg`, `https://sfile.chatglm.cn/images-ppt/8d4736e129f9.jpg`],
    rating: 4.2, reviewCount: 138, stock: 113, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p89-r0`, productId: `p89`, userName: `Rajesh Khurana`, rating: 4, title: `Fast delivery`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-02-04` },
    { id: `p89-r1`, productId: `p89`, userName: `Ananya Verma`, rating: 5, title: `Stylish and comfortable`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-04` }
    ],
  },
  {
    id: `p90`, name: `Faraglioni Wayfarer Hexagon`, slug: `faraglioni-wayfarer-90`, brand: `Italia Vision`,
    description: `Premium hexagon sunglasses with polarized UV400 lenses. Black Rose metal frame with anti-scratch coating. Comes with premium leather case.`,
    price: 5094, mrp: 8990, discount: 43, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `hexagon`, frameColor: `Black Rose`, gender: `kids`, material: `Metal`,
    weight: `22g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`, `https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`, `https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`],
    rating: 4.7, reviewCount: 25, stock: 32, isFeatured: true, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p90-r0`, productId: `p90`, userName: `Priya Mehta`, rating: 3, title: `Perfect fit`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-01` },
    { id: `p90-r1`, productId: `p90`, userName: `Sahil Khan`, rating: 5, title: `Premium feel`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-04` },
    { id: `p90-r2`, productId: `p90`, userName: `Nitin Joshi`, rating: 4, title: `Highly recommend`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-02` },
    { id: `p90-r3`, productId: `p90`, userName: `Meera Kapoor`, rating: 4, title: `Satisfied`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-22` }
    ],
  },
  {
    id: `p91`, name: `Grotto Oversized Cat-eye`, slug: `grotto-oversized-91`, brand: `Italia Femme`,
    description: `Premium cat-eye sunglasses with polarized UV400 lenses. Ivory acetate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 1477, mrp: 3688, discount: 60, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `cat-eye`, frameColor: `Ivory`, gender: `unisex`, material: `Acetate`,
    weight: `12g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/0f5861793cb6.jpg`, `https://sfile.chatglm.cn/images-ppt/0f52ed08ae11.jpg`, `https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`],
    rating: 4.8, reviewCount: 174, stock: 20, isFeatured: true, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p91-r0`, productId: `p91`, userName: `Aarav Sharma`, rating: 5, title: `Better than expected`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-12` },
    { id: `p91-r1`, productId: `p91`, userName: `Rajesh Khurana`, rating: 4, title: `Perfect fit`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-05` },
    { id: `p91-r2`, productId: `p91`, userName: `Priya Mehta`, rating: 5, title: `Fast delivery`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-21` }
    ],
  },
  {
    id: `p92`, name: `Atrani Sport Aviator`, slug: `atrani-sport-92`, brand: `Italia Kids`,
    description: `Premium aviator sunglasses with polarized UV400 lenses. Sapphire acetate frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2017, mrp: 3589, discount: 44, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `aviator`, frameColor: `Sapphire`, gender: `kids`, material: `Acetate`,
    weight: `12g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/678e1dfe54e6.jpg`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/542fcaafc112.jpg`, `https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`],
    rating: 4.6, reviewCount: 283, stock: 106, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p92-r0`, productId: `p92`, userName: `Akash Verma`, rating: 5, title: `Worth every rupee`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-01` },
    { id: `p92-r1`, productId: `p92`, userName: `Karan Malhotra`, rating: 5, title: `Satisfied`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-02` },
    { id: `p92-r2`, productId: `p92`, userName: `Sonia Mehta`, rating: 5, title: `Great purchase`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-06` },
    { id: `p92-r3`, productId: `p92`, userName: `Sneha Reddy`, rating: 4, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-18` }
    ],
  },
  {
    id: `p93`, name: `Amalfi Wayfarer Cat-eye`, slug: `amalfi-wayfarer-93`, brand: `Italia Sun`,
    description: `Premium cat-eye sunglasses with polarized UV400 lenses. Cherry Red titanium frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2741, mrp: 4759, discount: 42, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `cat-eye`, frameColor: `Cherry Red`, gender: `unisex`, material: `Titanium`,
    weight: `30g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/542fcaafc112.jpg`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/50c4983b51e0.jpg`],
    rating: 4.7, reviewCount: 185, stock: 77, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p93-r0`, productId: `p93`, userName: `Sonia Mehta`, rating: 4, title: `Good value for money`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-20` },
    { id: `p93-r1`, productId: `p93`, userName: `Meera Kapoor`, rating: 4, title: `Premium feel`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-11` }
    ],
  },
  {
    id: `p94`, name: `Anacapri Aviator Hexagon`, slug: `anacapri-aviator-94`, brand: `Italia Sun`,
    description: `Premium hexagon sunglasses with polarized UV400 lenses. Crystal Blue stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 2752, mrp: 6656, discount: 59, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `hexagon`, frameColor: `Crystal Blue`, gender: `unisex`, material: `Stainless Steel`,
    weight: `28g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/afb3735ba348.jpeg`, `https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`, `https://sfile.chatglm.cn/images-ppt/416ff11f7ad9.jpg`],
    rating: 4.9, reviewCount: 61, stock: 113, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p94-r0`, productId: `p94`, userName: `Pooja Bhatt`, rating: 5, title: `Highly recommend`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-26` },
    { id: `p94-r1`, productId: `p94`, userName: `Sonia Mehta`, rating: 3, title: `Great purchase`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-05-23` },
    { id: `p94-r2`, productId: `p94`, userName: `Kavya Rao`, rating: 5, title: `Satisfied`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-13` }
    ],
  },
  {
    id: `p95`, name: `Scala Wayfarer Square`, slug: `scala-wayfarer-95`, brand: `Italia Active`,
    description: `Premium square sunglasses with polarized UV400 lenses. Matte Black stainless steel frame with anti-scratch coating. Comes with premium leather case.`,
    price: 5991, mrp: 11332, discount: 47, categoryId: `c2`, categorySlug: `sunglasses`,
    frameShape: `square`, frameColor: `Matte Black`, gender: `men`, material: `Stainless Steel`,
    weight: `N/A`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/7283b7171715.jpg`, `https://sfile.chatglm.cn/images-ppt/6e7c59dc3d73.jpg`, `https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`, `https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`],
    rating: 4.9, reviewCount: 318, stock: 33, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p95-r0`, productId: `p95`, userName: `Karan Malhotra`, rating: 4, title: `Better than expected`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-15` },
    { id: `p95-r1`, productId: `p95`, userName: `Aarav Sharma`, rating: 5, title: `Satisfied`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-12` },
    { id: `p95-r2`, productId: `p95`, userName: `Arjun Nair`, rating: 4, title: `Love it!`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-13` }
    ],
  },
  {
    id: `p96`, name: `Ultra Plus Square`, slug: `ultra-plus-96`, brand: `Italia Tech`,
    description: `Honey soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. TR90 material for all-day comfort.`,
    price: 1618, mrp: 2545, discount: 36, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `square`, frameColor: `Honey`, gender: `kids`, material: `TR90`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/dc0f17f5da6e.jpg`, `https://sfile.chatglm.cn/images-ppt/45be3174c66d.jpg`, `https://sfile.chatglm.cn/images-ppt/26634e51b50a.jpg`, `https://sfile.chatglm.cn/images-ppt/3fe6f31dcdbf.jpeg`],
    rating: 4.7, reviewCount: 120, stock: 25, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p96-r0`, productId: `p96`, userName: `Arjun Nair`, rating: 4, title: `Good value for money`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-02-13` },
    { id: `p96-r1`, productId: `p96`, userName: `Ananya Verma`, rating: 3, title: `Good value for money`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-11` },
    { id: `p96-r2`, productId: `p96`, userName: `Kavya Rao`, rating: 5, title: `Stylish and comfortable`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-21` }
    ],
  },
  {
    id: `p97`, name: `Acuvue Oasys Aviator`, slug: `acuvue-oasys-97`, brand: `Italia Luxe`,
    description: `Matte Black soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Acetate material for all-day comfort.`,
    price: 1577, mrp: 2212, discount: 29, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `aviator`, frameColor: `Matte Black`, gender: `men`, material: `Acetate`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/ba7b1e609ec7.jpg`, `https://sfile.chatglm.cn/images-ppt/ce9c39f43c4d.jpg`, `https://sfile.chatglm.cn/images-ppt/d2675b712282.jpg`, `https://sfile.chatglm.cn/images-ppt/106e53f1195c.jpg`],
    rating: 4.7, reviewCount: 140, stock: 89, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p97-r0`, productId: `p97`, userName: `Manish Tiwari`, rating: 5, title: `Stylish and comfortable`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-12` },
    { id: `p97-r1`, productId: `p97`, userName: `Aarav Sharma`, rating: 5, title: `Good value for money`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-16` },
    { id: `p97-r2`, productId: `p97`, userName: `Rajesh Khurana`, rating: 4, title: `Excellent quality!`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-21` }
    ],
  },
  {
    id: `p98`, name: `Soflens Daily Aviator`, slug: `soflens-daily-98`, brand: `Italia Femme`,
    description: `Gunmetal soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. TR90 material for all-day comfort.`,
    price: 1863, mrp: 2877, discount: 35, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `aviator`, frameColor: `Gunmetal`, gender: `unisex`, material: `TR90`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/0bdd5687dbec.png`, `https://sfile.chatglm.cn/images-ppt/45be3174c66d.jpg`, `https://sfile.chatglm.cn/images-ppt/26634e51b50a.jpg`],
    rating: 4.2, reviewCount: 200, stock: 52, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p98-r0`, productId: `p98`, userName: `Nitin Joshi`, rating: 5, title: `Satisfied`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-02` },
    { id: `p98-r1`, productId: `p98`, userName: `Vikram Singh`, rating: 3, title: `Better than expected`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-22` },
    { id: `p98-r2`, productId: `p98`, userName: `Divya Iyer`, rating: 5, title: `Worth every rupee`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-18` }
    ],
  },
  {
    id: `p99`, name: `Color Glow Monthly Hexagon`, slug: `color-glow-monthly-99`, brand: `Italia Tech`,
    description: `Emerald soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Polycarbonate material for all-day comfort.`,
    price: 2306, mrp: 3997, discount: 42, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `hexagon`, frameColor: `Emerald`, gender: `kids`, material: `Polycarbonate`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/dc0f17f5da6e.jpg`, `https://sfile.chatglm.cn/images-ppt/0bdd5687dbec.png`, `https://sfile.chatglm.cn/images-ppt/d2675b712282.jpg`],
    rating: 4.9, reviewCount: 22, stock: 69, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p99-r0`, productId: `p99`, userName: `Rajesh Khurana`, rating: 4, title: `Highly recommend`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-03` },
    { id: `p99-r1`, productId: `p99`, userName: `Ritu Aggarwal`, rating: 4, title: `Better than expected`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-05-09` }
    ],
  },
  {
    id: `p100`, name: `Optima Hybrid Round`, slug: `optima-hybrid-100`, brand: `Italia Femme`,
    description: `Cherry Red soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Polycarbonate material for all-day comfort.`,
    price: 1566, mrp: 2706, discount: 42, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `round`, frameColor: `Cherry Red`, gender: `kids`, material: `Polycarbonate`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/d2675b712282.jpg`, `https://sfile.chatglm.cn/images-ppt/ede87a7da1e4.jpg`, `https://sfile.chatglm.cn/images-ppt/dc0f17f5da6e.jpg`, `https://sfile.chatglm.cn/images-ppt/45be3174c66d.jpg`],
    rating: 4.6, reviewCount: 219, stock: 19, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p100-r0`, productId: `p100`, userName: `Sneha Reddy`, rating: 5, title: `Premium feel`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-09` },
    { id: `p100-r1`, productId: `p100`, userName: `Sahil Khan`, rating: 3, title: `Stylish and comfortable`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-16` },
    { id: `p100-r2`, productId: `p100`, userName: `Priya Mehta`, rating: 4, title: `Perfect fit`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-20` },
    { id: `p100-r3`, productId: `p100`, userName: `Kavya Rao`, rating: 3, title: `Love it!`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-01-13` }
    ],
  },
  {
    id: `p101`, name: `Optima Hybrid Round`, slug: `optima-hybrid-101`, brand: `Italia Sun`,
    description: `Pearl White soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Metal material for all-day comfort.`,
    price: 1661, mrp: 2176, discount: 24, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `round`, frameColor: `Pearl White`, gender: `kids`, material: `Metal`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/d2675b712282.jpg`, `https://sfile.chatglm.cn/images-ppt/26634e51b50a.jpg`, `https://sfile.chatglm.cn/images-ppt/0bdd5687dbec.png`],
    rating: 4.5, reviewCount: 55, stock: 116, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p101-r0`, productId: `p101`, userName: `Arjun Nair`, rating: 3, title: `Worth every rupee`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-07` },
    { id: `p101-r1`, productId: `p101`, userName: `Nitin Joshi`, rating: 4, title: `Worth every rupee`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-28` },
    { id: `p101-r2`, productId: `p101`, userName: `Divya Iyer`, rating: 4, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-10` }
    ],
  },
  {
    id: `p102`, name: `Total 30 Monthly Square`, slug: `total-30-monthly-102`, brand: `Italia Tech`,
    description: `Sky Blue soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Titanium material for all-day comfort.`,
    price: 1293, mrp: 2246, discount: 42, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `square`, frameColor: `Sky Blue`, gender: `men`, material: `Titanium`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/0bdd5687dbec.png`, `https://sfile.chatglm.cn/images-ppt/3fe6f31dcdbf.jpeg`, `https://sfile.chatglm.cn/images-ppt/106e53f1195c.jpg`, `https://sfile.chatglm.cn/images-ppt/ba7b1e609ec7.jpg`],
    rating: 4.4, reviewCount: 106, stock: 40, isFeatured: true, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p102-r0`, productId: `p102`, userName: `Aarav Sharma`, rating: 4, title: `Great purchase`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-15` },
    { id: `p102-r1`, productId: `p102`, userName: `Ananya Verma`, rating: 5, title: `Fast delivery`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-12` }
    ],
  },
  {
    id: `p103`, name: `Acuvue Oasys Oval`, slug: `acuvue-oasys-103`, brand: `Italia Active`,
    description: `Onyx soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Metal material for all-day comfort.`,
    price: 955, mrp: 1426, discount: 33, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `oval`, frameColor: `Onyx`, gender: `men`, material: `Metal`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/26634e51b50a.jpg`, `https://sfile.chatglm.cn/images-ppt/106e53f1195c.jpg`, `https://sfile.chatglm.cn/images-ppt/45be3174c66d.jpg`],
    rating: 4.9, reviewCount: 336, stock: 33, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p103-r0`, productId: `p103`, userName: `Aarav Sharma`, rating: 5, title: `Highly recommend`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-05-26` },
    { id: `p103-r1`, productId: `p103`, userName: `Aarav Sharma`, rating: 4, title: `Perfect fit`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-23` },
    { id: `p103-r2`, productId: `p103`, userName: `Arjun Nair`, rating: 5, title: `Worth every rupee`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-09` },
    { id: `p103-r3`, productId: `p103`, userName: `Rajesh Khurana`, rating: 5, title: `Perfect fit`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-13` }
    ],
  },
  {
    id: `p104`, name: `Infiniti Monthly Round`, slug: `infiniti-monthly-104`, brand: `Italia Femme`,
    description: `Emerald soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Polycarbonate material for all-day comfort.`,
    price: 2224, mrp: 3551, discount: 37, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `round`, frameColor: `Emerald`, gender: `unisex`, material: `Polycarbonate`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/26634e51b50a.jpg`, `https://sfile.chatglm.cn/images-ppt/ede87a7da1e4.jpg`, `https://sfile.chatglm.cn/images-ppt/3fe6f31dcdbf.jpeg`, `https://sfile.chatglm.cn/images-ppt/dc0f17f5da6e.jpg`],
    rating: 4.3, reviewCount: 146, stock: 86, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p104-r0`, productId: `p104`, userName: `Akash Verma`, rating: 4, title: `Excellent quality!`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-04-22` },
    { id: `p104-r1`, productId: `p104`, userName: `Karan Malhotra`, rating: 3, title: `Highly recommend`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-10` }
    ],
  },
  {
    id: `p105`, name: `PureVision HD Aviator`, slug: `purevision-hd-105`, brand: `Italia Tech`,
    description: `Cherry Red soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Polycarbonate material for all-day comfort.`,
    price: 2349, mrp: 4222, discount: 44, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `aviator`, frameColor: `Cherry Red`, gender: `men`, material: `Polycarbonate`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/3fe6f31dcdbf.jpeg`, `https://sfile.chatglm.cn/images-ppt/26634e51b50a.jpg`, `https://sfile.chatglm.cn/images-ppt/d2675b712282.jpg`, `https://sfile.chatglm.cn/images-ppt/106e53f1195c.jpg`],
    rating: 4.6, reviewCount: 248, stock: 90, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p105-r0`, productId: `p105`, userName: `Neha Pandey`, rating: 4, title: `Perfect fit`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-05` },
    { id: `p105-r1`, productId: `p105`, userName: `Arjun Nair`, rating: 3, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-21` },
    { id: `p105-r2`, productId: `p105`, userName: `Rohit Gupta`, rating: 4, title: `Great purchase`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-14` },
    { id: `p105-r3`, productId: `p105`, userName: `Karan Malhotra`, rating: 5, title: `Perfect fit`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-15` }
    ],
  },
  {
    id: `p106`, name: `Biofinity Weekly Round`, slug: `biofinity-weekly-106`, brand: `Italia Kids`,
    description: `Rose Gold soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. TR90 material for all-day comfort.`,
    price: 1297, mrp: 2010, discount: 35, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `round`, frameColor: `Rose Gold`, gender: `men`, material: `TR90`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/ba7b1e609ec7.jpg`, `https://sfile.chatglm.cn/images-ppt/106e53f1195c.jpg`, `https://sfile.chatglm.cn/images-ppt/0bdd5687dbec.png`],
    rating: 4.1, reviewCount: 82, stock: 22, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p106-r0`, productId: `p106`, userName: `Karan Malhotra`, rating: 3, title: `Highly recommend`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-11` },
    { id: `p106-r1`, productId: `p106`, userName: `Ananya Verma`, rating: 5, title: `Better than expected`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-15` }
    ],
  },
  {
    id: `p107`, name: `PureVision HD Hexagon`, slug: `purevision-hd-107`, brand: `Italia Sun`,
    description: `Sky Blue soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Polycarbonate material for all-day comfort.`,
    price: 2464, mrp: 3398, discount: 27, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `hexagon`, frameColor: `Sky Blue`, gender: `women`, material: `Polycarbonate`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/0bdd5687dbec.png`, `https://sfile.chatglm.cn/images-ppt/106e53f1195c.jpg`, `https://sfile.chatglm.cn/images-ppt/45be3174c66d.jpg`, `https://sfile.chatglm.cn/images-ppt/ede87a7da1e4.jpg`],
    rating: 4.4, reviewCount: 224, stock: 56, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p107-r0`, productId: `p107`, userName: `Rajesh Khurana`, rating: 3, title: `Great purchase`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-25` },
    { id: `p107-r1`, productId: `p107`, userName: `Akash Verma`, rating: 4, title: `Excellent quality!`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-08` },
    { id: `p107-r2`, productId: `p107`, userName: `Divya Iyer`, rating: 5, title: `Highly recommend`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-17` },
    { id: `p107-r3`, productId: `p107`, userName: `Manish Tiwari`, rating: 5, title: `Highly recommend`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-10` }
    ],
  },
  {
    id: `p108`, name: `Soflens Daily Oval`, slug: `soflens-daily-108`, brand: `Italia Kids`,
    description: `Emerald soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. TR90 material for all-day comfort.`,
    price: 2305, mrp: 4143, discount: 44, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `oval`, frameColor: `Emerald`, gender: `unisex`, material: `TR90`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/ce9c39f43c4d.jpg`, `https://sfile.chatglm.cn/images-ppt/d2675b712282.jpg`, `https://sfile.chatglm.cn/images-ppt/ede87a7da1e4.jpg`],
    rating: 4.9, reviewCount: 211, stock: 7, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p108-r0`, productId: `p108`, userName: `Aarav Sharma`, rating: 5, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-12` },
    { id: `p108-r1`, productId: `p108`, userName: `Priya Mehta`, rating: 5, title: `Better than expected`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-20` },
    { id: `p108-r2`, productId: `p108`, userName: `Priya Mehta`, rating: 5, title: `Excellent quality!`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-02` },
    { id: `p108-r3`, productId: `p108`, userName: `Sneha Reddy`, rating: 5, title: `Stylish and comfortable`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-01-18` }
    ],
  },
  {
    id: `p109`, name: `PureVision HD Oval`, slug: `purevision-hd-109`, brand: `Italia Kids`,
    description: `Crystal Blue soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Stainless Steel material for all-day comfort.`,
    price: 2303, mrp: 3719, discount: 38, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `oval`, frameColor: `Crystal Blue`, gender: `women`, material: `Stainless Steel`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/106e53f1195c.jpg`, `https://sfile.chatglm.cn/images-ppt/dc0f17f5da6e.jpg`, `https://sfile.chatglm.cn/images-ppt/3fe6f31dcdbf.jpeg`],
    rating: 4.3, reviewCount: 315, stock: 94, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p109-r0`, productId: `p109`, userName: `Sneha Reddy`, rating: 4, title: `Stylish and comfortable`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-07` },
    { id: `p109-r1`, productId: `p109`, userName: `Arjun Nair`, rating: 5, title: `Satisfied`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-10` },
    { id: `p109-r2`, productId: `p109`, userName: `Ananya Verma`, rating: 4, title: `Premium feel`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-23` }
    ],
  },
  {
    id: `p110`, name: `Biotrue One-Day Square`, slug: `biotrue-one-day-110`, brand: `Italia Vision`,
    description: `Tortoise soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Stainless Steel material for all-day comfort.`,
    price: 1081, mrp: 1895, discount: 43, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `square`, frameColor: `Tortoise`, gender: `men`, material: `Stainless Steel`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/ce9c39f43c4d.jpg`, `https://sfile.chatglm.cn/images-ppt/0bdd5687dbec.png`, `https://sfile.chatglm.cn/images-ppt/26634e51b50a.jpg`, `https://sfile.chatglm.cn/images-ppt/d2675b712282.jpg`],
    rating: 4.5, reviewCount: 56, stock: 120, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p110-r0`, productId: `p110`, userName: `Priya Mehta`, rating: 4, title: `Highly recommend`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-12` },
    { id: `p110-r1`, productId: `p110`, userName: `Karan Malhotra`, rating: 5, title: `Love it!`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-28` },
    { id: `p110-r2`, productId: `p110`, userName: `Priya Mehta`, rating: 4, title: `Highly recommend`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-12` }
    ],
  },
  {
    id: `p111`, name: `Ultra Plus Rectangle`, slug: `ultra-plus-111`, brand: `Italia Luxe`,
    description: `Pearl White soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Metal material for all-day comfort.`,
    price: 1600, mrp: 2226, discount: 28, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `rectangle`, frameColor: `Pearl White`, gender: `men`, material: `Metal`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/d2675b712282.jpg`, `https://sfile.chatglm.cn/images-ppt/dc0f17f5da6e.jpg`, `https://sfile.chatglm.cn/images-ppt/ede87a7da1e4.jpg`, `https://sfile.chatglm.cn/images-ppt/ba7b1e609ec7.jpg`],
    rating: 4.4, reviewCount: 249, stock: 107, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p111-r0`, productId: `p111`, userName: `Priya Mehta`, rating: 4, title: `Good value for money`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-16` },
    { id: `p111-r1`, productId: `p111`, userName: `Manish Tiwari`, rating: 3, title: `Stylish and comfortable`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-05-13` },
    { id: `p111-r2`, productId: `p111`, userName: `Divya Iyer`, rating: 5, title: `Excellent quality!`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-16` },
    { id: `p111-r3`, productId: `p111`, userName: `Sneha Reddy`, rating: 5, title: `Stylish and comfortable`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-09` }
    ],
  },
  {
    id: `p112`, name: `Optima Hybrid Oval`, slug: `optima-hybrid-112`, brand: `Italia Premium`,
    description: `Platinum soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Stainless Steel material for all-day comfort.`,
    price: 1591, mrp: 2481, discount: 36, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `oval`, frameColor: `Platinum`, gender: `women`, material: `Stainless Steel`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/d2675b712282.jpg`, `https://sfile.chatglm.cn/images-ppt/3fe6f31dcdbf.jpeg`, `https://sfile.chatglm.cn/images-ppt/45be3174c66d.jpg`, `https://sfile.chatglm.cn/images-ppt/0bdd5687dbec.png`],
    rating: 4.7, reviewCount: 251, stock: 49, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p112-r0`, productId: `p112`, userName: `Ananya Verma`, rating: 5, title: `Stylish and comfortable`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-03` },
    { id: `p112-r1`, productId: `p112`, userName: `Sonia Mehta`, rating: 5, title: `Satisfied`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-03-02` },
    { id: `p112-r2`, productId: `p112`, userName: `Akash Verma`, rating: 4, title: `Premium feel`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-27` },
    { id: `p112-r3`, productId: `p112`, userName: `Meera Kapoor`, rating: 4, title: `Stylish and comfortable`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-15` }
    ],
  },
  {
    id: `p113`, name: `Pure Vision Toric Aviator`, slug: `pure-vision-toric-113`, brand: `Italia Kids`,
    description: `Wine Red soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. TR90 material for all-day comfort.`,
    price: 2425, mrp: 3944, discount: 39, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `aviator`, frameColor: `Wine Red`, gender: `men`, material: `TR90`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/3fe6f31dcdbf.jpeg`, `https://sfile.chatglm.cn/images-ppt/ede87a7da1e4.jpg`, `https://sfile.chatglm.cn/images-ppt/ce9c39f43c4d.jpg`, `https://sfile.chatglm.cn/images-ppt/ba7b1e609ec7.jpg`],
    rating: 4.0, reviewCount: 51, stock: 106, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p113-r0`, productId: `p113`, userName: `Nitin Joshi`, rating: 5, title: `Great purchase`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-28` },
    { id: `p113-r1`, productId: `p113`, userName: `Nitin Joshi`, rating: 5, title: `Premium feel`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-16` },
    { id: `p113-r2`, productId: `p113`, userName: `Divya Iyer`, rating: 3, title: `Stylish and comfortable`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-25` },
    { id: `p113-r3`, productId: `p113`, userName: `Meera Kapoor`, rating: 4, title: `Great purchase`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-03-18` }
    ],
  },
  {
    id: `p114`, name: `Total 30 Monthly Oval`, slug: `total-30-monthly-114`, brand: `Italia Vision`,
    description: `Gunmetal soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Titanium material for all-day comfort.`,
    price: 1907, mrp: 2613, discount: 27, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `oval`, frameColor: `Gunmetal`, gender: `men`, material: `Titanium`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/ce9c39f43c4d.jpg`, `https://sfile.chatglm.cn/images-ppt/0bdd5687dbec.png`, `https://sfile.chatglm.cn/images-ppt/ede87a7da1e4.jpg`, `https://sfile.chatglm.cn/images-ppt/ba7b1e609ec7.jpg`],
    rating: 4.6, reviewCount: 101, stock: 20, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p114-r0`, productId: `p114`, userName: `Sneha Reddy`, rating: 5, title: `Excellent quality!`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-25` },
    { id: `p114-r1`, productId: `p114`, userName: `Nitin Joshi`, rating: 5, title: `Better than expected`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-05` },
    { id: `p114-r2`, productId: `p114`, userName: `Sonia Mehta`, rating: 4, title: `Premium feel`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-05-14` }
    ],
  },
  {
    id: `p115`, name: `Infiniti Monthly Cat-eye`, slug: `infiniti-monthly-115`, brand: `Italia Kids`,
    description: `Sky Blue soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. Stainless Steel material for all-day comfort.`,
    price: 2083, mrp: 2888, discount: 28, categoryId: `c3`, categorySlug: `contact-lenses`,
    frameShape: `cat-eye`, frameColor: `Sky Blue`, gender: `women`, material: `Stainless Steel`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/106e53f1195c.jpg`, `https://sfile.chatglm.cn/images-ppt/ce9c39f43c4d.jpg`, `https://sfile.chatglm.cn/images-ppt/26634e51b50a.jpg`, `https://sfile.chatglm.cn/images-ppt/3fe6f31dcdbf.jpeg`],
    rating: 4.6, reviewCount: 169, stock: 69, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p115-r0`, productId: `p115`, userName: `Pooja Bhatt`, rating: 5, title: `Highly recommend`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-20` },
    { id: `p115-r1`, productId: `p115`, userName: `Akash Verma`, rating: 5, title: `Love it!`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-23` },
    { id: `p115-r2`, productId: `p115`, userName: `Neha Pandey`, rating: 3, title: `Satisfied`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-20` }
    ],
  },
  {
    id: `p116`, name: `Catania Power Oval`, slug: `catania-power-116`, brand: `Italia Active`,
    description: `Prescription-ready oval sunglasses. Polarized lenses with your power. Navy Blue frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 2755, mrp: 5520, discount: 50, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `oval`, frameColor: `Navy Blue`, gender: `women`, material: `Stainless Steel`,
    weight: `24g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/8d312a5c3096.jpg`, `https://sfile.chatglm.cn/images-ppt/2035342f5d4e.jpg`, `https://sfile.chatglm.cn/images-ppt/abbbc6d1707f.jpg`, `https://sfile.chatglm.cn/images-ppt/6e7c59dc3d73.jpg`],
    rating: 4.5, reviewCount: 297, stock: 90, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p116-r0`, productId: `p116`, userName: `Vikram Singh`, rating: 4, title: `Better than expected`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-09` },
    { id: `p116-r1`, productId: `p116`, userName: `Ananya Verma`, rating: 5, title: `Better than expected`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-27` },
    { id: `p116-r2`, productId: `p116`, userName: `Priya Mehta`, rating: 3, title: `Perfect fit`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-02` }
    ],
  },
  {
    id: `p117`, name: `Bologna Power Round`, slug: `bologna-power-117`, brand: `Italia Kids`,
    description: `Prescription-ready round sunglasses. Polarized lenses with your power. Champagne frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 5896, mrp: 11136, discount: 47, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `round`, frameColor: `Champagne`, gender: `women`, material: `Stainless Steel`,
    weight: `24g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/8d312a5c3096.jpg`, `https://sfile.chatglm.cn/images-ppt/ba465e5bfa1c.jpg`, `https://sfile.chatglm.cn/images-ppt/2c5803371b0c.jpg`],
    rating: 4.0, reviewCount: 200, stock: 54, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p117-r0`, productId: `p117`, userName: `Nitin Joshi`, rating: 4, title: `Better than expected`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-18` },
    { id: `p117-r1`, productId: `p117`, userName: `Kavya Rao`, rating: 4, title: `Love it!`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-15` },
    { id: `p117-r2`, productId: `p117`, userName: `Ananya Verma`, rating: 3, title: `Good value for money`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-24` },
    { id: `p117-r3`, productId: `p117`, userName: `Akash Verma`, rating: 4, title: `Worth every rupee`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-09` }
    ],
  },
  {
    id: `p118`, name: `Bergamo Power Square`, slug: `bergamo-power-118`, brand: `Italia Active`,
    description: `Prescription-ready square sunglasses. Polarized lenses with your power. Matte Black frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 4006, mrp: 7877, discount: 49, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `square`, frameColor: `Matte Black`, gender: `unisex`, material: `Acetate`,
    weight: `N/A`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/8e3c06b954d9.png`, `https://sfile.chatglm.cn/images-ppt/78ef5e201c13.jpg`, `https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`, `https://sfile.chatglm.cn/images-ppt/2035342f5d4e.jpg`],
    rating: 4.8, reviewCount: 325, stock: 83, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p118-r0`, productId: `p118`, userName: `Ananya Verma`, rating: 5, title: `Good value for money`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-14` },
    { id: `p118-r1`, productId: `p118`, userName: `Neha Pandey`, rating: 5, title: `Worth every rupee`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-08` }
    ],
  },
  {
    id: `p119`, name: `Milano Power Rectangle`, slug: `milano-power-119`, brand: `Italia Vision`,
    description: `Prescription-ready rectangle sunglasses. Polarized lenses with your power. Navy Blue frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 5644, mrp: 11146, discount: 49, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `rectangle`, frameColor: `Navy Blue`, gender: `unisex`, material: `Titanium`,
    weight: `N/A`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`, `https://sfile.chatglm.cn/images-ppt/7283b7171715.jpg`, `https://sfile.chatglm.cn/images-ppt/0f52ed08ae11.jpg`],
    rating: 4.3, reviewCount: 128, stock: 120, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p119-r0`, productId: `p119`, userName: `Arjun Nair`, rating: 5, title: `Love it!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-17` },
    { id: `p119-r1`, productId: `p119`, userName: `Divya Iyer`, rating: 5, title: `Premium feel`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-04-02` },
    { id: `p119-r2`, productId: `p119`, userName: `Pooja Bhatt`, rating: 3, title: `Satisfied`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-03` }
    ],
  },
  {
    id: `p120`, name: `Sicily Power Hexagon`, slug: `sicily-power-120`, brand: `Italia Pro`,
    description: `Prescription-ready hexagon sunglasses. Polarized lenses with your power. Sapphire frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 1835, mrp: 3139, discount: 42, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `hexagon`, frameColor: `Sapphire`, gender: `men`, material: `Stainless Steel`,
    weight: `14g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/8d4736e129f9.jpg`, `https://sfile.chatglm.cn/images-ppt/416ff11f7ad9.jpg`, `https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`],
    rating: 4.2, reviewCount: 227, stock: 87, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p120-r0`, productId: `p120`, userName: `Rohit Gupta`, rating: 4, title: `Highly recommend`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-03` },
    { id: `p120-r1`, productId: `p120`, userName: `Manish Tiwari`, rating: 4, title: `Perfect fit`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-15` }
    ],
  },
  {
    id: `p121`, name: `Bari Power Aviator`, slug: `bari-power-121`, brand: `Italia Tech`,
    description: `Prescription-ready aviator sunglasses. Polarized lenses with your power. Wine Red frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 2268, mrp: 4615, discount: 51, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `aviator`, frameColor: `Wine Red`, gender: `men`, material: `TR90`,
    weight: `28g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`, `https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`, `https://sfile.chatglm.cn/images-ppt/2f5d03cfe44a.jpg`, `https://sfile.chatglm.cn/images-ppt/3fc366999b5c.jpg`],
    rating: 4.7, reviewCount: 42, stock: 50, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p121-r0`, productId: `p121`, userName: `Sahil Khan`, rating: 3, title: `Excellent quality!`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-18` },
    { id: `p121-r1`, productId: `p121`, userName: `Meera Kapoor`, rating: 4, title: `Love it!`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-10` },
    { id: `p121-r2`, productId: `p121`, userName: `Vikram Singh`, rating: 5, title: `Better than expected`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-18` }
    ],
  },
  {
    id: `p122`, name: `Bergamo Power Round`, slug: `bergamo-power-122`, brand: `Italia Pro`,
    description: `Prescription-ready round sunglasses. Polarized lenses with your power. Black frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 4527, mrp: 9222, discount: 51, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `round`, frameColor: `Black`, gender: `men`, material: `Polycarbonate`,
    weight: `N/A`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/542fcaafc112.jpg`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/ba465e5bfa1c.jpg`],
    rating: 4.3, reviewCount: 216, stock: 120, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p122-r0`, productId: `p122`, userName: `Sneha Reddy`, rating: 4, title: `Better than expected`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-28` },
    { id: `p122-r1`, productId: `p122`, userName: `Neha Pandey`, rating: 5, title: `Better than expected`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-10` }
    ],
  },
  {
    id: `p123`, name: `Lecce Power Rectangle`, slug: `lecce-power-123`, brand: `Italia Femme`,
    description: `Prescription-ready rectangle sunglasses. Polarized lenses with your power. Gunmetal frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 5290, mrp: 12968, discount: 59, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `rectangle`, frameColor: `Gunmetal`, gender: `women`, material: `Stainless Steel`,
    weight: `26g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`, `https://sfile.chatglm.cn/images-ppt/8a778e3ec394.jpeg`, `https://sfile.chatglm.cn/images-ppt/365c3301fc11.jpg`, `https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`],
    rating: 4.1, reviewCount: 104, stock: 45, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p123-r0`, productId: `p123`, userName: `Ananya Verma`, rating: 4, title: `Great purchase`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-23` },
    { id: `p123-r1`, productId: `p123`, userName: `Ritu Aggarwal`, rating: 5, title: `Great purchase`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-16` },
    { id: `p123-r2`, productId: `p123`, userName: `Nitin Joshi`, rating: 5, title: `Great purchase`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-18` }
    ],
  },
  {
    id: `p124`, name: `Sicily Power Oval`, slug: `sicily-power-124`, brand: `Italia Pro`,
    description: `Prescription-ready oval sunglasses. Polarized lenses with your power. Champagne frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 2445, mrp: 5846, discount: 58, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `oval`, frameColor: `Champagne`, gender: `men`, material: `Metal`,
    weight: `12g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`, `https://sfile.chatglm.cn/images-ppt/ba465e5bfa1c.jpg`, `https://sfile.chatglm.cn/images-ppt/50c4983b51e0.jpg`],
    rating: 4.9, reviewCount: 264, stock: 85, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p124-r0`, productId: `p124`, userName: `Sonia Mehta`, rating: 3, title: `Highly recommend`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-08` },
    { id: `p124-r1`, productId: `p124`, userName: `Manish Tiwari`, rating: 3, title: `Perfect fit`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-17` },
    { id: `p124-r2`, productId: `p124`, userName: `Akash Verma`, rating: 4, title: `Worth every rupee`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-01` },
    { id: `p124-r3`, productId: `p124`, userName: `Meera Kapoor`, rating: 5, title: `Better than expected`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-05-05` }
    ],
  },
  {
    id: `p125`, name: `Siena Power Square`, slug: `siena-power-125`, brand: `Italia Pro`,
    description: `Prescription-ready square sunglasses. Polarized lenses with your power. Ivory frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 5259, mrp: 12827, discount: 59, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `square`, frameColor: `Ivory`, gender: `women`, material: `Stainless Steel`,
    weight: `28g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`, `https://sfile.chatglm.cn/images-ppt/8d4736e129f9.jpg`, `https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`, `https://sfile.chatglm.cn/images-ppt/905b21eda3cb.jpg`],
    rating: 4.2, reviewCount: 347, stock: 31, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p125-r0`, productId: `p125`, userName: `Akash Verma`, rating: 3, title: `Perfect fit`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-18` },
    { id: `p125-r1`, productId: `p125`, userName: `Manish Tiwari`, rating: 4, title: `Worth every rupee`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-19` }
    ],
  },
  {
    id: `p126`, name: `Bari Power Cat-eye`, slug: `bari-power-126`, brand: `Italia Femme`,
    description: `Prescription-ready cat-eye sunglasses. Polarized lenses with your power. Silver Smoke frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 5529, mrp: 10537, discount: 48, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `cat-eye`, frameColor: `Silver Smoke`, gender: `kids`, material: `Titanium`,
    weight: `16g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/4f29e95e0427.jpg`, `https://sfile.chatglm.cn/images-ppt/c240d309deea.png`, `https://sfile.chatglm.cn/images-ppt/aaaf618624a4.jpg`],
    rating: 4.0, reviewCount: 76, stock: 61, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p126-r0`, productId: `p126`, userName: `Ananya Verma`, rating: 4, title: `Great purchase`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-22` },
    { id: `p126-r1`, productId: `p126`, userName: `Meera Kapoor`, rating: 5, title: `Great purchase`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-22` }
    ],
  },
  {
    id: `p127`, name: `Lucca Power Square`, slug: `lucca-power-127`, brand: `Italia Kids`,
    description: `Prescription-ready square sunglasses. Polarized lenses with your power. Ivory frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 4665, mrp: 7102, discount: 34, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `square`, frameColor: `Ivory`, gender: `women`, material: `Stainless Steel`,
    weight: `30g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/678e1dfe54e6.jpg`, `https://sfile.chatglm.cn/images-ppt/ba465e5bfa1c.jpg`, `https://sfile.chatglm.cn/images-ppt/542fcaafc112.jpg`],
    rating: 4.6, reviewCount: 25, stock: 119, isFeatured: true, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p127-r0`, productId: `p127`, userName: `Sahil Khan`, rating: 5, title: `Fast delivery`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-03` },
    { id: `p127-r1`, productId: `p127`, userName: `Rajesh Khurana`, rating: 5, title: `Fast delivery`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-04-06` },
    { id: `p127-r2`, productId: `p127`, userName: `Meera Kapoor`, rating: 5, title: `Fast delivery`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-05-27` },
    { id: `p127-r3`, productId: `p127`, userName: `Ananya Verma`, rating: 5, title: `Better than expected`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-06` }
    ],
  },
  {
    id: `p128`, name: `Messina Power Aviator`, slug: `messina-power-128`, brand: `Italia Vision`,
    description: `Prescription-ready aviator sunglasses. Polarized lenses with your power. Champagne frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 4397, mrp: 8290, discount: 47, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `aviator`, frameColor: `Champagne`, gender: `men`, material: `Titanium`,
    weight: `14g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/c535bf250f9c.jpg`, `https://sfile.chatglm.cn/images-ppt/50c4983b51e0.jpg`, `https://sfile.chatglm.cn/images-ppt/4f29e95e0427.jpg`, `https://sfile.chatglm.cn/images-ppt/0f52ed08ae11.jpg`],
    rating: 4.4, reviewCount: 81, stock: 82, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p128-r0`, productId: `p128`, userName: `Sonia Mehta`, rating: 3, title: `Highly recommend`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-27` },
    { id: `p128-r1`, productId: `p128`, userName: `Aarav Sharma`, rating: 3, title: `Better than expected`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-14` }
    ],
  },
  {
    id: `p129`, name: `Bologna Power Oval`, slug: `bologna-power-129`, brand: `Italia Premium`,
    description: `Prescription-ready oval sunglasses. Polarized lenses with your power. Emerald frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 5248, mrp: 12015, discount: 56, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `oval`, frameColor: `Emerald`, gender: `kids`, material: `Titanium`,
    weight: `16g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`, `https://sfile.chatglm.cn/images-ppt/2f5d03cfe44a.jpg`, `https://sfile.chatglm.cn/images-ppt/50c4983b51e0.jpg`],
    rating: 4.7, reviewCount: 55, stock: 59, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p129-r0`, productId: `p129`, userName: `Arjun Nair`, rating: 4, title: `Excellent quality!`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-05-17` },
    { id: `p129-r1`, productId: `p129`, userName: `Sneha Reddy`, rating: 5, title: `Excellent quality!`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-23` },
    { id: `p129-r2`, productId: `p129`, userName: `Karan Malhotra`, rating: 5, title: `Great purchase`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-02-14` }
    ],
  },
  {
    id: `p130`, name: `Bari Power Rectangle`, slug: `bari-power-130`, brand: `Italia Luxe`,
    description: `Prescription-ready rectangle sunglasses. Polarized lenses with your power. Silver Smoke frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 4294, mrp: 9068, discount: 53, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `rectangle`, frameColor: `Silver Smoke`, gender: `kids`, material: `Polycarbonate`,
    weight: `28g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/f7502d5704df.jpg`, `https://sfile.chatglm.cn/images-ppt/8e3c06b954d9.png`, `https://sfile.chatglm.cn/images-ppt/0f5861793cb6.jpg`, `https://sfile.chatglm.cn/images-ppt/826fd77d9578.jpg`],
    rating: 4.6, reviewCount: 96, stock: 52, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p130-r0`, productId: `p130`, userName: `Sneha Reddy`, rating: 3, title: `Satisfied`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-04` },
    { id: `p130-r1`, productId: `p130`, userName: `Rajesh Khurana`, rating: 5, title: `Worth every rupee`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-20` },
    { id: `p130-r2`, productId: `p130`, userName: `Priya Mehta`, rating: 4, title: `Worth every rupee`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-27` },
    { id: `p130-r3`, productId: `p130`, userName: `Vikram Singh`, rating: 5, title: `Fast delivery`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-01-03` }
    ],
  },
  {
    id: `p131`, name: `Florence Power Rectangle`, slug: `florence-power-131`, brand: `Italia Sun`,
    description: `Prescription-ready rectangle sunglasses. Polarized lenses with your power. Honey Amber frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 4447, mrp: 10809, discount: 59, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `rectangle`, frameColor: `Honey Amber`, gender: `men`, material: `Stainless Steel`,
    weight: `26g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/2c5803371b0c.jpg`, `https://sfile.chatglm.cn/images-ppt/2035342f5d4e.jpg`, `https://sfile.chatglm.cn/images-ppt/2f5d03cfe44a.jpg`],
    rating: 4.1, reviewCount: 94, stock: 86, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p131-r0`, productId: `p131`, userName: `Priya Mehta`, rating: 5, title: `Premium feel`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-20` },
    { id: `p131-r1`, productId: `p131`, userName: `Ananya Verma`, rating: 3, title: `Excellent quality!`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-02-21` }
    ],
  },
  {
    id: `p132`, name: `Tuscany Power Round`, slug: `tuscany-power-132`, brand: `Italia Pro`,
    description: `Prescription-ready round sunglasses. Polarized lenses with your power. Silver Smoke frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 4536, mrp: 8643, discount: 48, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `round`, frameColor: `Silver Smoke`, gender: `kids`, material: `Metal`,
    weight: `22g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`, `https://sfile.chatglm.cn/images-ppt/2c5803371b0c.jpg`, `https://sfile.chatglm.cn/images-ppt/8d4736e129f9.jpg`, `https://sfile.chatglm.cn/images-ppt/0f5861793cb6.jpg`],
    rating: 4.5, reviewCount: 291, stock: 79, isFeatured: true, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p132-r0`, productId: `p132`, userName: `Aarav Sharma`, rating: 5, title: `Highly recommend`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-05-04` },
    { id: `p132-r1`, productId: `p132`, userName: `Neha Pandey`, rating: 4, title: `Premium feel`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-04` },
    { id: `p132-r2`, productId: `p132`, userName: `Akash Verma`, rating: 5, title: `Premium feel`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-23` },
    { id: `p132-r3`, productId: `p132`, userName: `Nitin Joshi`, rating: 5, title: `Fast delivery`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-25` }
    ],
  },
  {
    id: `p133`, name: `Turin Power Oval`, slug: `turin-power-133`, brand: `Italia Kids`,
    description: `Prescription-ready oval sunglasses. Polarized lenses with your power. Charcoal frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 2251, mrp: 3956, discount: 43, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `oval`, frameColor: `Charcoal`, gender: `men`, material: `TR90`,
    weight: `28g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/0d33e99f39f8.jpg`, `https://sfile.chatglm.cn/images-ppt/2f5d03cfe44a.jpg`, `https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`, `https://sfile.chatglm.cn/images-ppt/0f5861793cb6.jpg`],
    rating: 4.8, reviewCount: 216, stock: 50, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p133-r0`, productId: `p133`, userName: `Karan Malhotra`, rating: 4, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-11` },
    { id: `p133-r1`, productId: `p133`, userName: `Divya Iyer`, rating: 4, title: `Fast delivery`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-24` },
    { id: `p133-r2`, productId: `p133`, userName: `Rajesh Khurana`, rating: 5, title: `Love it!`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-24` },
    { id: `p133-r3`, productId: `p133`, userName: `Meera Kapoor`, rating: 5, title: `Satisfied`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-27` }
    ],
  },
  {
    id: `p134`, name: `Naples Power Rectangle`, slug: `naples-power-134`, brand: `Italia Luxe`,
    description: `Prescription-ready rectangle sunglasses. Polarized lenses with your power. Crystal Blue frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 1941, mrp: 4223, discount: 54, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `rectangle`, frameColor: `Crystal Blue`, gender: `men`, material: `Acetate`,
    weight: `30g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/c240d309deea.png`, `https://sfile.chatglm.cn/images-ppt/907820da0b40.jpg`, `https://sfile.chatglm.cn/images-ppt/542fcaafc112.jpg`, `https://sfile.chatglm.cn/images-ppt/4f29e95e0427.jpg`],
    rating: 4.0, reviewCount: 251, stock: 52, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p134-r0`, productId: `p134`, userName: `Sahil Khan`, rating: 4, title: `Fast delivery`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-17` },
    { id: `p134-r1`, productId: `p134`, userName: `Ritu Aggarwal`, rating: 5, title: `Premium feel`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-05-12` },
    { id: `p134-r2`, productId: `p134`, userName: `Sahil Khan`, rating: 3, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-23` }
    ],
  },
  {
    id: `p135`, name: `Como Power Rectangle`, slug: `como-power-135`, brand: `Italia Kids`,
    description: `Prescription-ready rectangle sunglasses. Polarized lenses with your power. Onyx frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 3025, mrp: 5685, discount: 47, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `rectangle`, frameColor: `Onyx`, gender: `men`, material: `Acetate`,
    weight: `30g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/542fcaafc112.jpg`, `https://sfile.chatglm.cn/images-ppt/907820da0b40.jpg`, `https://sfile.chatglm.cn/images-ppt/d24c3df4303d.jpg`, `https://sfile.chatglm.cn/images-ppt/aaaf618624a4.jpg`],
    rating: 4.3, reviewCount: 142, stock: 65, isFeatured: true, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p135-r0`, productId: `p135`, userName: `Divya Iyer`, rating: 5, title: `Worth every rupee`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-06` },
    { id: `p135-r1`, productId: `p135`, userName: `Manish Tiwari`, rating: 4, title: `Fast delivery`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-24` },
    { id: `p135-r2`, productId: `p135`, userName: `Arjun Nair`, rating: 4, title: `Premium feel`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-07` }
    ],
  },
  {
    id: `p136`, name: `Venice Power Aviator`, slug: `venice-power-136`, brand: `Italia Pro`,
    description: `Prescription-ready aviator sunglasses. Polarized lenses with your power. Tortoise frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 5391, mrp: 8811, discount: 39, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `aviator`, frameColor: `Tortoise`, gender: `women`, material: `TR90`,
    weight: `20g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/abbbc6d1707f.jpg`, `https://sfile.chatglm.cn/images-ppt/678e1dfe54e6.jpg`, `https://sfile.chatglm.cn/images-ppt/afb3735ba348.jpeg`, `https://sfile.chatglm.cn/images-ppt/aaaf618624a4.jpg`],
    rating: 4.3, reviewCount: 254, stock: 43, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p136-r0`, productId: `p136`, userName: `Sonia Mehta`, rating: 3, title: `Good value for money`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-09` },
    { id: `p136-r1`, productId: `p136`, userName: `Divya Iyer`, rating: 5, title: `Premium feel`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-12` },
    { id: `p136-r2`, productId: `p136`, userName: `Aarav Sharma`, rating: 5, title: `Good value for money`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-07` }
    ],
  },
  {
    id: `p137`, name: `Padova Power Oval`, slug: `padova-power-137`, brand: `Italia Luxe`,
    description: `Prescription-ready oval sunglasses. Polarized lenses with your power. Rose Gold frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 4208, mrp: 7679, discount: 45, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `oval`, frameColor: `Rose Gold`, gender: `women`, material: `Metal`,
    weight: `16g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/048562e268d6.png`, `https://sfile.chatglm.cn/images-ppt/0f5861793cb6.jpg`, `https://sfile.chatglm.cn/images-ppt/78ef5e201c13.jpg`, `https://sfile.chatglm.cn/images-ppt/cb9a73be1a35.jpg`],
    rating: 4.6, reviewCount: 242, stock: 85, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p137-r0`, productId: `p137`, userName: `Karan Malhotra`, rating: 4, title: `Great purchase`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-03-23` },
    { id: `p137-r1`, productId: `p137`, userName: `Arjun Nair`, rating: 5, title: `Better than expected`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-15` }
    ],
  },
  {
    id: `p138`, name: `Taranto Power Oval`, slug: `taranto-power-138`, brand: `Italia Vision`,
    description: `Prescription-ready oval sunglasses. Polarized lenses with your power. Ivory frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 2669, mrp: 4494, discount: 41, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `oval`, frameColor: `Ivory`, gender: `kids`, material: `TR90`,
    weight: `16g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/abbbc6d1707f.jpg`, `https://sfile.chatglm.cn/images-ppt/78ef5e201c13.jpg`, `https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`],
    rating: 4.7, reviewCount: 45, stock: 31, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p138-r0`, productId: `p138`, userName: `Priya Mehta`, rating: 4, title: `Worth every rupee`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-04` },
    { id: `p138-r1`, productId: `p138`, userName: `Arjun Nair`, rating: 5, title: `Highly recommend`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-10` },
    { id: `p138-r2`, productId: `p138`, userName: `Meera Kapoor`, rating: 4, title: `Love it!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-21` },
    { id: `p138-r3`, productId: `p138`, userName: `Vikram Singh`, rating: 4, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-02` }
    ],
  },
  {
    id: `p139`, name: `Lecce Power Hexagon`, slug: `lecce-power-139`, brand: `Italia Vision`,
    description: `Prescription-ready hexagon sunglasses. Polarized lenses with your power. Wine Red frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 5727, mrp: 13944, discount: 59, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `hexagon`, frameColor: `Wine Red`, gender: `kids`, material: `TR90`,
    weight: `N/A`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/8e3c06b954d9.png`, `https://sfile.chatglm.cn/images-ppt/09becaced4a0.jpg`, `https://sfile.chatglm.cn/images-ppt/50c4983b51e0.jpg`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`],
    rating: 4.6, reviewCount: 238, stock: 85, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p139-r0`, productId: `p139`, userName: `Nitin Joshi`, rating: 5, title: `Great purchase`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-05` },
    { id: `p139-r1`, productId: `p139`, userName: `Pooja Bhatt`, rating: 4, title: `Excellent quality!`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-12` }
    ],
  },
  {
    id: `p140`, name: `Genoa Power Cat-eye`, slug: `genoa-power-140`, brand: `Italia Kids`,
    description: `Prescription-ready cat-eye sunglasses. Polarized lenses with your power. Tortoise frame with UV400 protection. Custom power available up to ±8.00.`,
    price: 3753, mrp: 5663, discount: 34, categoryId: `c4`, categorySlug: `power-sunglasses`,
    frameShape: `cat-eye`, frameColor: `Tortoise`, gender: `kids`, material: `TR90`,
    weight: `24g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/0d33e99f39f8.jpg`, `https://sfile.chatglm.cn/images-ppt/678e1dfe54e6.jpg`, `https://sfile.chatglm.cn/images-ppt/7283b7171715.jpg`, `https://sfile.chatglm.cn/images-ppt/e3315bb22e98.webp`],
    rating: 4.0, reviewCount: 196, stock: 29, isFeatured: false, isNew: true, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p140-r0`, productId: `p140`, userName: `Rohit Gupta`, rating: 5, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-25` },
    { id: `p140-r1`, productId: `p140`, userName: `Kavya Rao`, rating: 3, title: `Better than expected`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-21` },
    { id: `p140-r2`, productId: `p140`, userName: `Neha Pandey`, rating: 5, title: `Worth every rupee`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-06` }
    ],
  },
  {
    id: `p141`, name: `Code Comfort Oval Round`, slug: `code-comfort-oval-141`, brand: `Italia Active`,
    description: `Blue-light blocking computer glasses in round design. Rose Gold polycarbonate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 5008, mrp: 8874, discount: 44, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `round`, frameColor: `Rose Gold`, gender: `kids`, material: `Polycarbonate`,
    weight: `20g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`, `https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`, `https://sfile.chatglm.cn/images-ppt/837184190e1a.jpg`],
    rating: 4.5, reviewCount: 100, stock: 18, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p141-r0`, productId: `p141`, userName: `Vikram Singh`, rating: 4, title: `Stylish and comfortable`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-14` },
    { id: `p141-r1`, productId: `p141`, userName: `Pooja Bhatt`, rating: 5, title: `Great purchase`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-11` }
    ],
  },
  {
    id: `p142`, name: `Digital Relief Square Round`, slug: `digital-relief-square-142`, brand: `Italia Pro`,
    description: `Blue-light blocking computer glasses in round design. Silver Smoke acetate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 5748, mrp: 11324, discount: 49, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `round`, frameColor: `Silver Smoke`, gender: `kids`, material: `Acetate`,
    weight: `26g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`, `https://sfile.chatglm.cn/images-ppt/d478ebf347b8.jpg`, `https://sfile.chatglm.cn/images-ppt/89e7dc620b18.jpg`],
    rating: 4.1, reviewCount: 132, stock: 54, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p142-r0`, productId: `p142`, userName: `Rajesh Khurana`, rating: 5, title: `Worth every rupee`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-06` },
    { id: `p142-r1`, productId: `p142`, userName: `Priya Mehta`, rating: 3, title: `Premium feel`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-09` },
    { id: `p142-r2`, productId: `p142`, userName: `Sonia Mehta`, rating: 3, title: `Perfect fit`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-02` },
    { id: `p142-r3`, productId: `p142`, userName: `Rajesh Khurana`, rating: 4, title: `Satisfied`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-01` }
    ],
  },
  {
    id: `p143`, name: `Gaming Pro Hexagon Cat-eye`, slug: `gaming-pro-hexagon-143`, brand: `Italia Active`,
    description: `Blue-light blocking computer glasses in cat-eye design. Gunmetal titanium frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 1372, mrp: 3387, discount: 59, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `cat-eye`, frameColor: `Gunmetal`, gender: `kids`, material: `Titanium`,
    weight: `26g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/5b492e216e24.jpg`, `https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`, `https://sfile.chatglm.cn/images-ppt/bfbd773ad656.png`, `https://sfile.chatglm.cn/images-ppt/5ee6eed67d97.jpeg`],
    rating: 4.8, reviewCount: 132, stock: 25, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p143-r0`, productId: `p143`, userName: `Neha Pandey`, rating: 4, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-11` },
    { id: `p143-r1`, productId: `p143`, userName: `Neha Pandey`, rating: 3, title: `Great purchase`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-01` },
    { id: `p143-r2`, productId: `p143`, userName: `Sahil Khan`, rating: 5, title: `Love it!`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-02` },
    { id: `p143-r3`, productId: `p143`, userName: `Sonia Mehta`, rating: 3, title: `Stylish and comfortable`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-18` }
    ],
  },
  {
    id: `p144`, name: `Focus Lite Rectangle Square`, slug: `focus-lite-rectangle-144`, brand: `Italia Kids`,
    description: `Blue-light blocking computer glasses in square design. Ivory polycarbonate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 4147, mrp: 7562, discount: 45, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `square`, frameColor: `Ivory`, gender: `women`, material: `Polycarbonate`,
    weight: `26g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/5ee6eed67d97.jpeg`, `https://sfile.chatglm.cn/images-ppt/d478ebf347b8.jpg`, `https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`, `https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`],
    rating: 4.2, reviewCount: 276, stock: 24, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p144-r0`, productId: `p144`, userName: `Akash Verma`, rating: 5, title: `Love it!`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-20` },
    { id: `p144-r1`, productId: `p144`, userName: `Divya Iyer`, rating: 5, title: `Satisfied`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-22` },
    { id: `p144-r2`, productId: `p144`, userName: `Neha Pandey`, rating: 5, title: `Satisfied`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-25` },
    { id: `p144-r3`, productId: `p144`, userName: `Neha Pandey`, rating: 4, title: `Fast delivery`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-14` }
    ],
  },
  {
    id: `p145`, name: `Coder Lite Round Round`, slug: `coder-lite-round-145`, brand: `Italia Vision`,
    description: `Blue-light blocking computer glasses in round design. Gunmetal acetate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 2362, mrp: 3964, discount: 40, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `round`, frameColor: `Gunmetal`, gender: `men`, material: `Acetate`,
    weight: `26g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/d478ebf347b8.jpg`, `https://sfile.chatglm.cn/images-ppt/837184190e1a.jpg`, `https://sfile.chatglm.cn/images-ppt/89e7dc620b18.jpg`],
    rating: 4.6, reviewCount: 203, stock: 89, isFeatured: true, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p145-r0`, productId: `p145`, userName: `Rajesh Khurana`, rating: 3, title: `Stylish and comfortable`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-26` },
    { id: `p145-r1`, productId: `p145`, userName: `Priya Mehta`, rating: 5, title: `Premium feel`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-26` }
    ],
  },
  {
    id: `p146`, name: `Focus Lite Rectangle Hexagon`, slug: `focus-lite-rectangle-146`, brand: `Italia Premium`,
    description: `Blue-light blocking computer glasses in hexagon design. Champagne polycarbonate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 1632, mrp: 3646, discount: 55, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `hexagon`, frameColor: `Champagne`, gender: `unisex`, material: `Polycarbonate`,
    weight: `24g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/5ee6eed67d97.jpeg`, `https://sfile.chatglm.cn/images-ppt/837184190e1a.jpg`, `https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`],
    rating: 4.1, reviewCount: 123, stock: 73, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p146-r0`, productId: `p146`, userName: `Neha Pandey`, rating: 5, title: `Love it!`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-12` },
    { id: `p146-r1`, productId: `p146`, userName: `Nitin Joshi`, rating: 3, title: `Better than expected`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-01-06` },
    { id: `p146-r2`, productId: `p146`, userName: `Ananya Verma`, rating: 5, title: `Worth every rupee`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-22` },
    { id: `p146-r3`, productId: `p146`, userName: `Ananya Verma`, rating: 5, title: `Fast delivery`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-11` }
    ],
  },
  {
    id: `p147`, name: `Stream Pro Cat-Eye Hexagon`, slug: `stream-pro-cat-eye-147`, brand: `Italia Vision`,
    description: `Blue-light blocking computer glasses in hexagon design. Navy Blue stainless steel frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 4826, mrp: 11226, discount: 57, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `hexagon`, frameColor: `Navy Blue`, gender: `kids`, material: `Stainless Steel`,
    weight: `26g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`, `https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`, `https://sfile.chatglm.cn/images-ppt/5b492e216e24.jpg`, `https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`],
    rating: 4.6, reviewCount: 135, stock: 51, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p147-r0`, productId: `p147`, userName: `Akash Verma`, rating: 4, title: `Perfect fit`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-08` },
    { id: `p147-r1`, productId: `p147`, userName: `Rajesh Khurana`, rating: 5, title: `Excellent quality!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-17` }
    ],
  },
  {
    id: `p148`, name: `Stream Pro Cat-Eye Cat-eye`, slug: `stream-pro-cat-eye-148`, brand: `Italia Luxe`,
    description: `Blue-light blocking computer glasses in cat-eye design. Crystal Blue acetate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 5070, mrp: 9408, discount: 46, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `cat-eye`, frameColor: `Crystal Blue`, gender: `men`, material: `Acetate`,
    weight: `24g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/d478ebf347b8.jpg`, `https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`, `https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`],
    rating: 4.8, reviewCount: 52, stock: 78, isFeatured: true, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p148-r0`, productId: `p148`, userName: `Manish Tiwari`, rating: 4, title: `Fast delivery`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-24` },
    { id: `p148-r1`, productId: `p148`, userName: `Manish Tiwari`, rating: 5, title: `Good value for money`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-12` },
    { id: `p148-r2`, productId: `p148`, userName: `Ritu Aggarwal`, rating: 5, title: `Good value for money`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-01` }
    ],
  },
  {
    id: `p149`, name: `Coder Lite Round Round`, slug: `coder-lite-round-149`, brand: `Italia Tech`,
    description: `Blue-light blocking computer glasses in round design. Forest Green metal frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 5722, mrp: 11815, discount: 52, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `round`, frameColor: `Forest Green`, gender: `men`, material: `Metal`,
    weight: `30g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/bfbd773ad656.png`, `https://sfile.chatglm.cn/images-ppt/5b492e216e24.jpg`, `https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`],
    rating: 5.0, reviewCount: 233, stock: 101, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p149-r0`, productId: `p149`, userName: `Vikram Singh`, rating: 5, title: `Good value for money`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-24` },
    { id: `p149-r1`, productId: `p149`, userName: `Priya Mehta`, rating: 5, title: `Worth every rupee`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-13` }
    ],
  },
  {
    id: `p150`, name: `Dev Guard Hexagon Hexagon`, slug: `dev-guard-hexagon-150`, brand: `Italia Tech`,
    description: `Blue-light blocking computer glasses in hexagon design. Onyx titanium frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 5238, mrp: 10786, discount: 51, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `hexagon`, frameColor: `Onyx`, gender: `women`, material: `Titanium`,
    weight: `14g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/d478ebf347b8.jpg`, `https://sfile.chatglm.cn/images-ppt/89e7dc620b18.jpg`, `https://sfile.chatglm.cn/images-ppt/5ee6eed67d97.jpeg`, `https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`],
    rating: 4.7, reviewCount: 131, stock: 36, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p150-r0`, productId: `p150`, userName: `Ritu Aggarwal`, rating: 5, title: `Great purchase`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-12` },
    { id: `p150-r1`, productId: `p150`, userName: `Kavya Rao`, rating: 3, title: `Excellent quality!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-12` },
    { id: `p150-r2`, productId: `p150`, userName: `Kavya Rao`, rating: 5, title: `Fast delivery`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-02` }
    ],
  },
  {
    id: `p151`, name: `Office Oval Round Oval`, slug: `office-oval-round-151`, brand: `Italia Sun`,
    description: `Blue-light blocking computer glasses in oval design. Navy Blue stainless steel frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 2001, mrp: 3226, discount: 38, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `oval`, frameColor: `Navy Blue`, gender: `women`, material: `Stainless Steel`,
    weight: `22g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`, `https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`, `https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`, `https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`],
    rating: 4.9, reviewCount: 152, stock: 6, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p151-r0`, productId: `p151`, userName: `Neha Pandey`, rating: 4, title: `Satisfied`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-25` },
    { id: `p151-r1`, productId: `p151`, userName: `Arjun Nair`, rating: 5, title: `Stylish and comfortable`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-23` }
    ],
  },
  {
    id: `p152`, name: `Focus Lite Rectangle Aviator`, slug: `focus-lite-rectangle-152`, brand: `Italia Premium`,
    description: `Blue-light blocking computer glasses in aviator design. Ivory metal frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 2694, mrp: 4202, discount: 36, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `aviator`, frameColor: `Ivory`, gender: `men`, material: `Metal`,
    weight: `24g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/89e7dc620b18.jpg`, `https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`, `https://sfile.chatglm.cn/images-ppt/5b492e216e24.jpg`, `https://sfile.chatglm.cn/images-ppt/bfbd773ad656.png`],
    rating: 4.5, reviewCount: 9, stock: 13, isFeatured: true, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p152-r0`, productId: `p152`, userName: `Sahil Khan`, rating: 4, title: `Worth every rupee`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-11` },
    { id: `p152-r1`, productId: `p152`, userName: `Sonia Mehta`, rating: 5, title: `Premium feel`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-02-07` },
    { id: `p152-r2`, productId: `p152`, userName: `Akash Verma`, rating: 5, title: `Premium feel`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-08` },
    { id: `p152-r3`, productId: `p152`, userName: `Akash Verma`, rating: 5, title: `Great purchase`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-04-24` }
    ],
  },
  {
    id: `p153`, name: `Gaming Pro Hexagon Rectangle`, slug: `gaming-pro-hexagon-153`, brand: `Italia Premium`,
    description: `Blue-light blocking computer glasses in rectangle design. Platinum metal frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 3775, mrp: 6554, discount: 42, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `rectangle`, frameColor: `Platinum`, gender: `unisex`, material: `Metal`,
    weight: `20g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/d478ebf347b8.jpg`, `https://sfile.chatglm.cn/images-ppt/bfbd773ad656.png`, `https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`],
    rating: 4.9, reviewCount: 20, stock: 76, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p153-r0`, productId: `p153`, userName: `Sahil Khan`, rating: 5, title: `Better than expected`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-14` },
    { id: `p153-r1`, productId: `p153`, userName: `Meera Kapoor`, rating: 5, title: `Highly recommend`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-20` }
    ],
  },
  {
    id: `p154`, name: `Monitor Mate Hexagon Cat-eye`, slug: `monitor-mate-hexagon-154`, brand: `Italia Kids`,
    description: `Blue-light blocking computer glasses in cat-eye design. Crystal Blue stainless steel frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 2434, mrp: 5065, discount: 52, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `cat-eye`, frameColor: `Crystal Blue`, gender: `women`, material: `Stainless Steel`,
    weight: `16g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/89e7dc620b18.jpg`, `https://sfile.chatglm.cn/images-ppt/5ee6eed67d97.jpeg`, `https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`, `https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`],
    rating: 4.9, reviewCount: 74, stock: 60, isFeatured: false, isNew: true, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p154-r0`, productId: `p154`, userName: `Vikram Singh`, rating: 3, title: `Excellent quality!`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-14` },
    { id: `p154-r1`, productId: `p154`, userName: `Pooja Bhatt`, rating: 5, title: `Love it!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-25` },
    { id: `p154-r2`, productId: `p154`, userName: `Rajesh Khurana`, rating: 4, title: `Highly recommend`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-25` }
    ],
  },
  {
    id: `p155`, name: `Tech Flex Square Rectangle`, slug: `tech-flex-square-155`, brand: `Italia Luxe`,
    description: `Blue-light blocking computer glasses in rectangle design. Champagne polycarbonate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 3201, mrp: 5540, discount: 42, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `rectangle`, frameColor: `Champagne`, gender: `women`, material: `Polycarbonate`,
    weight: `N/A`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/bfbd773ad656.png`, `https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`, `https://sfile.chatglm.cn/images-ppt/5ee6eed67d97.jpeg`],
    rating: 4.8, reviewCount: 245, stock: 96, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p155-r0`, productId: `p155`, userName: `Ananya Verma`, rating: 4, title: `Satisfied`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-25` },
    { id: `p155-r1`, productId: `p155`, userName: `Aarav Sharma`, rating: 5, title: `Worth every rupee`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-25` }
    ],
  },
  {
    id: `p156`, name: `Stream Sight Cat-Eye Square`, slug: `stream-sight-cat-eye-156`, brand: `Italia Femme`,
    description: `Blue-light blocking computer glasses in square design. Charcoal stainless steel frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 3960, mrp: 9372, discount: 58, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `square`, frameColor: `Charcoal`, gender: `kids`, material: `Stainless Steel`,
    weight: `30g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`, `https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`, `https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`],
    rating: 4.8, reviewCount: 165, stock: 55, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p156-r0`, productId: `p156`, userName: `Akash Verma`, rating: 5, title: `Worth every rupee`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-05-13` },
    { id: `p156-r1`, productId: `p156`, userName: `Akash Verma`, rating: 3, title: `Excellent quality!`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-15` }
    ],
  },
  {
    id: `p157`, name: `Block Blue Round Hexagon`, slug: `block-blue-round-157`, brand: `Italia Active`,
    description: `Blue-light blocking computer glasses in hexagon design. Forest Green titanium frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 4759, mrp: 8539, discount: 44, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `hexagon`, frameColor: `Forest Green`, gender: `kids`, material: `Titanium`,
    weight: `28g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`, `https://sfile.chatglm.cn/images-ppt/5ee6eed67d97.jpeg`, `https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`],
    rating: 4.6, reviewCount: 51, stock: 97, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p157-r0`, productId: `p157`, userName: `Ritu Aggarwal`, rating: 5, title: `Stylish and comfortable`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-15` },
    { id: `p157-r1`, productId: `p157`, userName: `Manish Tiwari`, rating: 3, title: `Satisfied`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-09` },
    { id: `p157-r2`, productId: `p157`, userName: `Karan Malhotra`, rating: 3, title: `Better than expected`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-03` }
    ],
  },
  {
    id: `p158`, name: `Focus Flex Rectangle Oval`, slug: `focus-flex-rectangle-158`, brand: `Italia Kids`,
    description: `Blue-light blocking computer glasses in oval design. Navy Blue polycarbonate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 4445, mrp: 9898, discount: 55, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `oval`, frameColor: `Navy Blue`, gender: `men`, material: `Polycarbonate`,
    weight: `30g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`, `https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`, `https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`],
    rating: 4.0, reviewCount: 92, stock: 47, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p158-r0`, productId: `p158`, userName: `Pooja Bhatt`, rating: 5, title: `Love it!`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-21` },
    { id: `p158-r1`, productId: `p158`, userName: `Ananya Verma`, rating: 4, title: `Highly recommend`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-20` },
    { id: `p158-r2`, productId: `p158`, userName: `Arjun Nair`, rating: 4, title: `Stylish and comfortable`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-04-18` }
    ],
  },
  {
    id: `p159`, name: `Pixel Guard Blue Aviator`, slug: `pixel-guard-blue-159`, brand: `Italia Luxe`,
    description: `Blue-light blocking computer glasses in aviator design. Gold Brown polycarbonate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 5196, mrp: 10151, discount: 49, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `aviator`, frameColor: `Gold Brown`, gender: `women`, material: `Polycarbonate`,
    weight: `18g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`, `https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`, `https://sfile.chatglm.cn/images-ppt/d478ebf347b8.jpg`],
    rating: 4.3, reviewCount: 326, stock: 76, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p159-r0`, productId: `p159`, userName: `Vikram Singh`, rating: 4, title: `Better than expected`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-05-10` },
    { id: `p159-r1`, productId: `p159`, userName: `Karan Malhotra`, rating: 4, title: `Excellent quality!`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-06` }
    ],
  },
  {
    id: `p160`, name: `Gaming Pro Hexagon Cat-eye`, slug: `gaming-pro-hexagon-160`, brand: `Italia Active`,
    description: `Blue-light blocking computer glasses in cat-eye design. Platinum tr90 frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 4249, mrp: 10331, discount: 59, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `cat-eye`, frameColor: `Platinum`, gender: `women`, material: `TR90`,
    weight: `28g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`, `https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`, `https://sfile.chatglm.cn/images-ppt/89e7dc620b18.jpg`, `https://sfile.chatglm.cn/images-ppt/d478ebf347b8.jpg`],
    rating: 4.1, reviewCount: 223, stock: 112, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p160-r0`, productId: `p160`, userName: `Karan Malhotra`, rating: 5, title: `Worth every rupee`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-23` },
    { id: `p160-r1`, productId: `p160`, userName: `Rajesh Khurana`, rating: 5, title: `Excellent quality!`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-24` },
    { id: `p160-r2`, productId: `p160`, userName: `Akash Verma`, rating: 4, title: `Stylish and comfortable`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-14` }
    ],
  },
  {
    id: `p161`, name: `Tech Flex Square Rectangle`, slug: `tech-flex-square-161`, brand: `Italia Vision`,
    description: `Blue-light blocking computer glasses in rectangle design. Emerald titanium frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 5908, mrp: 11794, discount: 50, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `rectangle`, frameColor: `Emerald`, gender: `unisex`, material: `Titanium`,
    weight: `12g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`, `https://sfile.chatglm.cn/images-ppt/89e7dc620b18.jpg`, `https://sfile.chatglm.cn/images-ppt/837184190e1a.jpg`],
    rating: 4.2, reviewCount: 153, stock: 29, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p161-r0`, productId: `p161`, userName: `Ritu Aggarwal`, rating: 5, title: `Excellent quality!`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-03-18` },
    { id: `p161-r1`, productId: `p161`, userName: `Rajesh Khurana`, rating: 4, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-09` },
    { id: `p161-r2`, productId: `p161`, userName: `Rohit Gupta`, rating: 5, title: `Perfect fit`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-11` },
    { id: `p161-r3`, productId: `p161`, userName: `Aarav Sharma`, rating: 4, title: `Better than expected`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-03-13` }
    ],
  },
  {
    id: `p162`, name: `Pixel Lite Oval Cat-eye`, slug: `pixel-lite-oval-162`, brand: `Italia Luxe`,
    description: `Blue-light blocking computer glasses in cat-eye design. Tortoise titanium frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 4006, mrp: 9349, discount: 57, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `cat-eye`, frameColor: `Tortoise`, gender: `women`, material: `Titanium`,
    weight: `26g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/bfbd773ad656.png`, `https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`, `https://sfile.chatglm.cn/images-ppt/5b492e216e24.jpg`, `https://sfile.chatglm.cn/images-ppt/c781153d7786.jpg`],
    rating: 4.1, reviewCount: 84, stock: 85, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p162-r0`, productId: `p162`, userName: `Karan Malhotra`, rating: 5, title: `Premium feel`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-19` },
    { id: `p162-r1`, productId: `p162`, userName: `Karan Malhotra`, rating: 5, title: `Good value for money`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-27` },
    { id: `p162-r2`, productId: `p162`, userName: `Aarav Sharma`, rating: 5, title: `Worth every rupee`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-19` },
    { id: `p162-r3`, productId: `p162`, userName: `Kavya Rao`, rating: 5, title: `Highly recommend`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-28` }
    ],
  },
  {
    id: `p163`, name: `Screen Lite Hexagon Oval`, slug: `screen-lite-hexagon-163`, brand: `Italia Active`,
    description: `Blue-light blocking computer glasses in oval design. Wine Red metal frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 4689, mrp: 7440, discount: 37, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `oval`, frameColor: `Wine Red`, gender: `men`, material: `Metal`,
    weight: `16g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/9d03261cebac.jpg`, `https://sfile.chatglm.cn/images-ppt/837184190e1a.jpg`, `https://sfile.chatglm.cn/images-ppt/89e7dc620b18.jpg`, `https://sfile.chatglm.cn/images-ppt/5ee6eed67d97.jpeg`],
    rating: 4.3, reviewCount: 273, stock: 43, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p163-r0`, productId: `p163`, userName: `Aarav Sharma`, rating: 5, title: `Premium feel`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-11` },
    { id: `p163-r1`, productId: `p163`, userName: `Sonia Mehta`, rating: 3, title: `Premium feel`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-05` },
    { id: `p163-r2`, productId: `p163`, userName: `Sneha Reddy`, rating: 5, title: `Better than expected`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-24` },
    { id: `p163-r3`, productId: `p163`, userName: `Priya Mehta`, rating: 5, title: `Worth every rupee`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-01` }
    ],
  },
  {
    id: `p164`, name: `Cyber Cut Rectangle Oval`, slug: `cyber-cut-rectangle-164`, brand: `Italia Premium`,
    description: `Blue-light blocking computer glasses in oval design. Champagne metal frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 5123, mrp: 12239, discount: 58, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `oval`, frameColor: `Champagne`, gender: `men`, material: `Metal`,
    weight: `18g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/837184190e1a.jpg`, `https://sfile.chatglm.cn/images-ppt/5b492e216e24.jpg`, `https://sfile.chatglm.cn/images-ppt/5ee6eed67d97.jpeg`],
    rating: 4.8, reviewCount: 332, stock: 119, isFeatured: true, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p164-r0`, productId: `p164`, userName: `Karan Malhotra`, rating: 5, title: `Better than expected`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-05` },
    { id: `p164-r1`, productId: `p164`, userName: `Ananya Verma`, rating: 5, title: `Good value for money`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-05-18` },
    { id: `p164-r2`, productId: `p164`, userName: `Akash Verma`, rating: 4, title: `Satisfied`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-18` },
    { id: `p164-r3`, productId: `p164`, userName: `Karan Malhotra`, rating: 5, title: `Highly recommend`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-08` }
    ],
  },
  {
    id: `p165`, name: `Gaming Pro Hexagon Rectangle`, slug: `gaming-pro-hexagon-165`, brand: `Italia Femme`,
    description: `Blue-light blocking computer glasses in rectangle design. Champagne polycarbonate frame. Reduces digital eye strain from screens. Lightweight for long sessions.`,
    price: 4933, mrp: 7649, discount: 36, categoryId: `c5`, categorySlug: `computer-glasses`,
    frameShape: `rectangle`, frameColor: `Champagne`, gender: `unisex`, material: `Polycarbonate`,
    weight: `24g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/ac32b9d02180.jpg`, `https://sfile.chatglm.cn/images-ppt/d478ebf347b8.jpg`, `https://sfile.chatglm.cn/images-ppt/5b492e216e24.jpg`, `https://sfile.chatglm.cn/images-ppt/861d6fc139b4.jpg`],
    rating: 4.4, reviewCount: 49, stock: 59, isFeatured: true, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p165-r0`, productId: `p165`, userName: `Neha Pandey`, rating: 4, title: `Stylish and comfortable`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-03` },
    { id: `p165-r1`, productId: `p165`, userName: `Nitin Joshi`, rating: 4, title: `Stylish and comfortable`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-16` }
    ],
  },
  {
    id: `p166`, name: `Happy Face Square Square`, slug: `happy-face-square-166`, brand: `Italia Sun`,
    description: `Flexible metal frame designed for kids. Champagne color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 4276, mrp: 8090, discount: 47, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `square`, frameColor: `Champagne`, gender: `kids`, material: `Metal`,
    weight: `26g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/d39d28a4074e.png`, `https://sfile.chatglm.cn/images-ppt/f19df6ea6711.jpg`, `https://sfile.chatglm.cn/images-ppt/a2a11d401eb3.jpg`, `https://sfile.chatglm.cn/images-ppt/187fcb1e97fb.jpg`],
    rating: 4.5, reviewCount: 20, stock: 13, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p166-r0`, productId: `p166`, userName: `Kavya Rao`, rating: 5, title: `Highly recommend`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-13` },
    { id: `p166-r1`, productId: `p166`, userName: `Sneha Reddy`, rating: 5, title: `Premium feel`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-18` },
    { id: `p166-r2`, productId: `p166`, userName: `Nitin Joshi`, rating: 5, title: `Fast delivery`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-20` }
    ],
  },
  {
    id: `p167`, name: `Happy Face Square Square`, slug: `happy-face-square-167`, brand: `Italia Care`,
    description: `Flexible tr90 frame designed for kids. Bronze color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 1840, mrp: 3386, discount: 46, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `square`, frameColor: `Bronze`, gender: `kids`, material: `TR90`,
    weight: `18g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`, `https://sfile.chatglm.cn/images-ppt/53df9d88aaf1.jpg`, `https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`],
    rating: 4.8, reviewCount: 283, stock: 93, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p167-r0`, productId: `p167`, userName: `Manish Tiwari`, rating: 5, title: `Stylish and comfortable`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-04` },
    { id: `p167-r1`, productId: `p167`, userName: `Nitin Joshi`, rating: 4, title: `Perfect fit`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-01-20` }
    ],
  },
  {
    id: `p168`, name: `Play Time Rectangle Hexagon`, slug: `play-time-rectangle-168`, brand: `Italia Luxe`,
    description: `Flexible metal frame designed for kids. Cherry Red color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 5348, mrp: 11471, discount: 53, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `hexagon`, frameColor: `Cherry Red`, gender: `kids`, material: `Metal`,
    weight: `16g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/164860951db1.jpg`, `https://sfile.chatglm.cn/images-ppt/7c8a67cb46db.jpg`, `https://sfile.chatglm.cn/images-ppt/668e9bb0ede0.jpg`, `https://sfile.chatglm.cn/images-ppt/164860951db1.jpg`],
    rating: 4.8, reviewCount: 5, stock: 101, isFeatured: true, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p168-r0`, productId: `p168`, userName: `Pooja Bhatt`, rating: 5, title: `Fast delivery`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-04-07` },
    { id: `p168-r1`, productId: `p168`, userName: `Rajesh Khurana`, rating: 3, title: `Great purchase`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-26` },
    { id: `p168-r2`, productId: `p168`, userName: `Pooja Bhatt`, rating: 5, title: `Love it!`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-19` },
    { id: `p168-r3`, productId: `p168`, userName: `Aarav Sharma`, rating: 5, title: `Premium feel`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-28` }
    ],
  },
  {
    id: `p169`, name: `Tiny Trend Oval Rectangle`, slug: `tiny-trend-oval-169`, brand: `Italia Premium`,
    description: `Flexible acetate frame designed for kids. Sapphire color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 1305, mrp: 2875, discount: 55, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `rectangle`, frameColor: `Sapphire`, gender: `kids`, material: `Acetate`,
    weight: `N/A`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`, `https://sfile.chatglm.cn/images-ppt/f19df6ea6711.jpg`, `https://sfile.chatglm.cn/images-ppt/187fcb1e97fb.jpg`, `https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`],
    rating: 4.2, reviewCount: 307, stock: 55, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p169-r0`, productId: `p169`, userName: `Ananya Verma`, rating: 5, title: `Highly recommend`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-13` },
    { id: `p169-r1`, productId: `p169`, userName: `Divya Iyer`, rating: 5, title: `Highly recommend`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-05` }
    ],
  },
  {
    id: `p170`, name: `Junior Flex Round Oval`, slug: `junior-flex-round-170`, brand: `Italia Femme`,
    description: `Flexible titanium frame designed for kids. Tortoise color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 5286, mrp: 11406, discount: 54, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `oval`, frameColor: `Tortoise`, gender: `kids`, material: `Titanium`,
    weight: `30g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/187fcb1e97fb.jpg`, `https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`, `https://sfile.chatglm.cn/images-ppt/d39d28a4074e.png`, `https://sfile.chatglm.cn/images-ppt/668e9bb0ede0.jpg`],
    rating: 4.9, reviewCount: 314, stock: 59, isFeatured: false, isNew: true, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p170-r0`, productId: `p170`, userName: `Meera Kapoor`, rating: 4, title: `Worth every rupee`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-19` },
    { id: `p170-r1`, productId: `p170`, userName: `Sonia Mehta`, rating: 3, title: `Satisfied`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-14` },
    { id: `p170-r2`, productId: `p170`, userName: `Neha Pandey`, rating: 5, title: `Great purchase`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-19` }
    ],
  },
  {
    id: `p171`, name: `Giggles Oval Round`, slug: `giggles-oval-171`, brand: `Italia Vision`,
    description: `Flexible tr90 frame designed for kids. Ivory color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 1954, mrp: 3208, discount: 39, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `round`, frameColor: `Ivory`, gender: `kids`, material: `TR90`,
    weight: `14g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/d39d28a4074e.png`, `https://sfile.chatglm.cn/images-ppt/7c8a67cb46db.jpg`, `https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`],
    rating: 4.8, reviewCount: 243, stock: 71, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p171-r0`, productId: `p171`, userName: `Priya Mehta`, rating: 5, title: `Premium feel`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-04-15` },
    { id: `p171-r1`, productId: `p171`, userName: `Akash Verma`, rating: 5, title: `Fast delivery`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-12` },
    { id: `p171-r2`, productId: `p171`, userName: `Pooja Bhatt`, rating: 5, title: `Highly recommend`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-05-24` },
    { id: `p171-r3`, productId: `p171`, userName: `Pooja Bhatt`, rating: 3, title: `Fast delivery`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-21` }
    ],
  },
  {
    id: `p172`, name: `Giggles Oval Square`, slug: `giggles-oval-172`, brand: `Italia Luxe`,
    description: `Flexible acetate frame designed for kids. Ivory color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 3689, mrp: 8517, discount: 57, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `square`, frameColor: `Ivory`, gender: `kids`, material: `Acetate`,
    weight: `16g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`, `https://sfile.chatglm.cn/images-ppt/164860951db1.jpg`, `https://sfile.chatglm.cn/images-ppt/7c8a67cb46db.jpg`, `https://sfile.chatglm.cn/images-ppt/f19df6ea6711.jpg`],
    rating: 4.9, reviewCount: 147, stock: 37, isFeatured: false, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p172-r0`, productId: `p172`, userName: `Manish Tiwari`, rating: 3, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-26` },
    { id: `p172-r1`, productId: `p172`, userName: `Ananya Verma`, rating: 5, title: `Love it!`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-04-06` }
    ],
  },
  {
    id: `p173`, name: `Rocket Hexagon Rectangle`, slug: `rocket-hexagon-173`, brand: `Italia Premium`,
    description: `Flexible titanium frame designed for kids. Honey Amber color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 2561, mrp: 5986, discount: 57, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `rectangle`, frameColor: `Honey Amber`, gender: `kids`, material: `Titanium`,
    weight: `30g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`, `https://sfile.chatglm.cn/images-ppt/7c8a67cb46db.jpg`, `https://sfile.chatglm.cn/images-ppt/164860951db1.jpg`],
    rating: 4.7, reviewCount: 90, stock: 31, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p173-r0`, productId: `p173`, userName: `Nitin Joshi`, rating: 5, title: `Stylish and comfortable`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-24` },
    { id: `p173-r1`, productId: `p173`, userName: `Neha Pandey`, rating: 4, title: `Worth every rupee`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-09` }
    ],
  },
  {
    id: `p174`, name: `Smarty Pants Oval Hexagon`, slug: `smarty-pants-oval-174`, brand: `Italia Care`,
    description: `Flexible acetate frame designed for kids. Honey color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 3664, mrp: 8893, discount: 59, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `hexagon`, frameColor: `Honey`, gender: `kids`, material: `Acetate`,
    weight: `22g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/53df9d88aaf1.jpg`, `https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`, `https://sfile.chatglm.cn/images-ppt/187fcb1e97fb.jpg`, `https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`],
    rating: 4.0, reviewCount: 277, stock: 86, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p174-r0`, productId: `p174`, userName: `Arjun Nair`, rating: 3, title: `Fast delivery`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-25` },
    { id: `p174-r1`, productId: `p174`, userName: `Meera Kapoor`, rating: 3, title: `Better than expected`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-17` }
    ],
  },
  {
    id: `p175`, name: `Fun Flex Hexagon Rectangle`, slug: `fun-flex-hexagon-175`, brand: `Italia Pro`,
    description: `Flexible acetate frame designed for kids. Sapphire color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 1368, mrp: 3189, discount: 57, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `rectangle`, frameColor: `Sapphire`, gender: `kids`, material: `Acetate`,
    weight: `18g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/f19df6ea6711.jpg`, `https://sfile.chatglm.cn/images-ppt/7c8a67cb46db.jpg`, `https://sfile.chatglm.cn/images-ppt/164860951db1.jpg`],
    rating: 4.2, reviewCount: 150, stock: 37, isFeatured: true, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p175-r0`, productId: `p175`, userName: `Rajesh Khurana`, rating: 5, title: `Better than expected`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-01-03` },
    { id: `p175-r1`, productId: `p175`, userName: `Kavya Rao`, rating: 4, title: `Worth every rupee`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-04` },
    { id: `p175-r2`, productId: `p175`, userName: `Ananya Verma`, rating: 5, title: `Perfect fit`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-21` },
    { id: `p175-r3`, productId: `p175`, userName: `Nitin Joshi`, rating: 5, title: `Worth every rupee`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-03-06` }
    ],
  },
  {
    id: `p176`, name: `Little Star Cat-Eye Hexagon`, slug: `little-star-cat-eye-176`, brand: `Italia Active`,
    description: `Flexible tr90 frame designed for kids. Black color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 4482, mrp: 8213, discount: 45, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `hexagon`, frameColor: `Black`, gender: `kids`, material: `TR90`,
    weight: `24g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/7c8a67cb46db.jpg`, `https://sfile.chatglm.cn/images-ppt/a2a11d401eb3.jpg`, `https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`, `https://sfile.chatglm.cn/images-ppt/f19df6ea6711.jpg`],
    rating: 4.5, reviewCount: 107, stock: 83, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p176-r0`, productId: `p176`, userName: `Sneha Reddy`, rating: 5, title: `Love it!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-01-02` },
    { id: `p176-r1`, productId: `p176`, userName: `Rohit Gupta`, rating: 4, title: `Fast delivery`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-01` },
    { id: `p176-r2`, productId: `p176`, userName: `Sonia Mehta`, rating: 4, title: `Better than expected`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-22` },
    { id: `p176-r3`, productId: `p176`, userName: `Sahil Khan`, rating: 5, title: `Highly recommend`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-19` }
    ],
  },
  {
    id: `p177`, name: `Junior Flex Round Oval`, slug: `junior-flex-round-177`, brand: `Italia Care`,
    description: `Flexible tr90 frame designed for kids. Sky Blue color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 5215, mrp: 10096, discount: 48, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `oval`, frameColor: `Sky Blue`, gender: `kids`, material: `TR90`,
    weight: `30g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`, `https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`, `https://sfile.chatglm.cn/images-ppt/164860951db1.jpg`, `https://sfile.chatglm.cn/images-ppt/53df9d88aaf1.jpg`],
    rating: 4.0, reviewCount: 251, stock: 20, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p177-r0`, productId: `p177`, userName: `Rohit Gupta`, rating: 5, title: `Premium feel`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-27` },
    { id: `p177-r1`, productId: `p177`, userName: `Nitin Joshi`, rating: 5, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-18` },
    { id: `p177-r2`, productId: `p177`, userName: `Priya Mehta`, rating: 5, title: `Better than expected`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-03-23` },
    { id: `p177-r3`, productId: `p177`, userName: `Sahil Khan`, rating: 4, title: `Better than expected`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-03` }
    ],
  },
  {
    id: `p178`, name: `Dreamer Rectangle Square`, slug: `dreamer-rectangle-178`, brand: `Italia Sun`,
    description: `Flexible titanium frame designed for kids. Black color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 1506, mrp: 3342, discount: 55, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `square`, frameColor: `Black`, gender: `kids`, material: `Titanium`,
    weight: `26g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/53df9d88aaf1.jpg`, `https://sfile.chatglm.cn/images-ppt/164860951db1.jpg`, `https://sfile.chatglm.cn/images-ppt/f19df6ea6711.jpg`],
    rating: 4.3, reviewCount: 278, stock: 111, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p178-r0`, productId: `p178`, userName: `Priya Mehta`, rating: 5, title: `Good value for money`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-15` },
    { id: `p178-r1`, productId: `p178`, userName: `Neha Pandey`, rating: 4, title: `Love it!`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-03` },
    { id: `p178-r2`, productId: `p178`, userName: `Priya Mehta`, rating: 3, title: `Highly recommend`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-16` },
    { id: `p178-r3`, productId: `p178`, userName: `Kavya Rao`, rating: 4, title: `Satisfied`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-06` }
    ],
  },
  {
    id: `p179`, name: `Kids Adventure Square Hexagon`, slug: `kids-adventure-square-179`, brand: `Italia Active`,
    description: `Flexible tr90 frame designed for kids. Gunmetal color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 2697, mrp: 6298, discount: 57, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `hexagon`, frameColor: `Gunmetal`, gender: `kids`, material: `TR90`,
    weight: `18g`, size: `Extra Large`, images: [`https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`, `https://sfile.chatglm.cn/images-ppt/53df9d88aaf1.jpg`, `https://sfile.chatglm.cn/images-ppt/7c8a67cb46db.jpg`, `https://sfile.chatglm.cn/images-ppt/187fcb1e97fb.jpg`],
    rating: 4.6, reviewCount: 37, stock: 107, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p179-r0`, productId: `p179`, userName: `Neha Pandey`, rating: 4, title: `Great purchase`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-19` },
    { id: `p179-r1`, productId: `p179`, userName: `Ananya Verma`, rating: 5, title: `Good value for money`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-05` },
    { id: `p179-r2`, productId: `p179`, userName: `Ritu Aggarwal`, rating: 4, title: `Love it!`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-06` },
    { id: `p179-r3`, productId: `p179`, userName: `Nitin Joshi`, rating: 4, title: `Fast delivery`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-04` }
    ],
  },
  {
    id: `p180`, name: `Joy Square Hexagon`, slug: `joy-square-180`, brand: `Italia Tech`,
    description: `Flexible acetate frame designed for kids. Matte Black color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 5288, mrp: 8358, discount: 37, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `hexagon`, frameColor: `Matte Black`, gender: `kids`, material: `Acetate`,
    weight: `26g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/a2a11d401eb3.jpg`, `https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`, `https://sfile.chatglm.cn/images-ppt/d39d28a4074e.png`],
    rating: 4.6, reviewCount: 150, stock: 58, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p180-r0`, productId: `p180`, userName: `Meera Kapoor`, rating: 4, title: `Fast delivery`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-05-06` },
    { id: `p180-r1`, productId: `p180`, userName: `Sonia Mehta`, rating: 5, title: `Good value for money`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-14` },
    { id: `p180-r2`, productId: `p180`, userName: `Aarav Sharma`, rating: 5, title: `Satisfied`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-17` }
    ],
  },
  {
    id: `p181`, name: `Play Time Rectangle Rectangle`, slug: `play-time-rectangle-181`, brand: `Italia Luxe`,
    description: `Flexible polycarbonate frame designed for kids. Sky Blue color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 5456, mrp: 9380, discount: 42, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `rectangle`, frameColor: `Sky Blue`, gender: `kids`, material: `Polycarbonate`,
    weight: `16g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/164860951db1.jpg`, `https://sfile.chatglm.cn/images-ppt/53df9d88aaf1.jpg`, `https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`],
    rating: 4.8, reviewCount: 247, stock: 68, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p181-r0`, productId: `p181`, userName: `Ritu Aggarwal`, rating: 5, title: `Great purchase`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-04-02` },
    { id: `p181-r1`, productId: `p181`, userName: `Sneha Reddy`, rating: 3, title: `Excellent quality!`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-06` }
    ],
  },
  {
    id: `p182`, name: `Junior Flex Round Cat-eye`, slug: `junior-flex-round-182`, brand: `Italia Kids`,
    description: `Flexible acetate frame designed for kids. Gunmetal color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 3226, mrp: 7166, discount: 55, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `cat-eye`, frameColor: `Gunmetal`, gender: `kids`, material: `Acetate`,
    weight: `18g`, size: `Small`, images: [`https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`, `https://sfile.chatglm.cn/images-ppt/668e9bb0ede0.jpg`, `https://sfile.chatglm.cn/images-ppt/f19df6ea6711.jpg`],
    rating: 4.3, reviewCount: 61, stock: 46, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p182-r0`, productId: `p182`, userName: `Rohit Gupta`, rating: 5, title: `Fast delivery`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-14` },
    { id: `p182-r1`, productId: `p182`, userName: `Vikram Singh`, rating: 4, title: `Fast delivery`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-13` }
    ],
  },
  {
    id: `p183`, name: `Cute Cat-Eye Aviator`, slug: `cute-cat-eye-183`, brand: `Italia Pro`,
    description: `Flexible titanium frame designed for kids. Pearl White color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 4236, mrp: 10486, discount: 60, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `aviator`, frameColor: `Pearl White`, gender: `kids`, material: `Titanium`,
    weight: `24g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/668e9bb0ede0.jpg`, `https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`, `https://sfile.chatglm.cn/images-ppt/a2a11d401eb3.jpg`, `https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`],
    rating: 4.1, reviewCount: 243, stock: 63, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p183-r0`, productId: `p183`, userName: `Kavya Rao`, rating: 4, title: `Fast delivery`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-03` },
    { id: `p183-r1`, productId: `p183`, userName: `Ritu Aggarwal`, rating: 5, title: `Stylish and comfortable`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-16` },
    { id: `p183-r2`, productId: `p183`, userName: `Nitin Joshi`, rating: 5, title: `Excellent quality!`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-08` },
    { id: `p183-r3`, productId: `p183`, userName: `Karan Malhotra`, rating: 5, title: `Fast delivery`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-05` }
    ],
  },
  {
    id: `p184`, name: `Wonder Round Aviator`, slug: `wonder-round-184`, brand: `Italia Premium`,
    description: `Flexible acetate frame designed for kids. Black color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 5154, mrp: 11511, discount: 55, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `aviator`, frameColor: `Black`, gender: `kids`, material: `Acetate`,
    weight: `26g`, size: `Medium`, images: [`https://sfile.chatglm.cn/images-ppt/187fcb1e97fb.jpg`, `https://sfile.chatglm.cn/images-ppt/164860951db1.jpg`, `https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`],
    rating: 4.7, reviewCount: 55, stock: 62, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p184-r0`, productId: `p184`, userName: `Vikram Singh`, rating: 5, title: `Perfect fit`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-01` },
    { id: `p184-r1`, productId: `p184`, userName: `Sonia Mehta`, rating: 3, title: `Perfect fit`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-28` }
    ],
  },
  {
    id: `p185`, name: `Wonder Round Round`, slug: `wonder-round-185`, brand: `Italia Luxe`,
    description: `Flexible tr90 frame designed for kids. Charcoal color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.`,
    price: 2434, mrp: 5778, discount: 58, categoryId: `c6`, categorySlug: `kids-glasses`,
    frameShape: `round`, frameColor: `Charcoal`, gender: `kids`, material: `TR90`,
    weight: `24g`, size: `Large`, images: [`https://sfile.chatglm.cn/images-ppt/16d95115d9bc.jpg`, `https://sfile.chatglm.cn/images-ppt/d3fe2447f7ac.jpg`, `https://sfile.chatglm.cn/images-ppt/f19df6ea6711.jpg`],
    rating: 4.6, reviewCount: 326, stock: 14, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p185-r0`, productId: `p185`, userName: `Kavya Rao`, rating: 5, title: `Fast delivery`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-20` },
    { id: `p185-r1`, productId: `p185`, userName: `Karan Malhotra`, rating: 3, title: `Excellent quality!`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-02` },
    { id: `p185-r2`, productId: `p185`, userName: `Sneha Reddy`, rating: 5, title: `Great purchase`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-05-02` },
    { id: `p185-r3`, productId: `p185`, userName: `Divya Iyer`, rating: 5, title: `Highly recommend`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-18` }
    ],
  },
  {
    id: `p186`, name: `Screwdriver Tool Kit Rectangle`, slug: `screwdriver-tool-kit-186`, brand: `Italia Pro`,
    description: `Premium gold brown eyewear accessory. Stainless Steel construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 688, mrp: 1387, discount: 50, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `rectangle`, frameColor: `Gold Brown`, gender: `men`, material: `Stainless Steel`,
    weight: `20g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`, `https://sfile.chatglm.cn/images-ppt/b5c1fff0f338.jpg`, `https://sfile.chatglm.cn/images-ppt/db66e133c306.jpg`, `https://sfile.chatglm.cn/images-ppt/ac2bb14c96ca.jpg`],
    rating: 4.8, reviewCount: 169, stock: 50, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p186-r0`, productId: `p186`, userName: `Nitin Joshi`, rating: 5, title: `Premium feel`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-01-16` },
    { id: `p186-r1`, productId: `p186`, userName: `Neha Pandey`, rating: 3, title: `Premium feel`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-20` },
    { id: `p186-r2`, productId: `p186`, userName: `Divya Iyer`, rating: 3, title: `Love it!`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-02-15` }
    ],
  },
  {
    id: `p187`, name: `Anti-Fog Wipes Aviator`, slug: `anti-fog-wipes-187`, brand: `Italia Femme`,
    description: `Premium matte black eyewear accessory. Acetate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 310, mrp: 500, discount: 38, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `aviator`, frameColor: `Matte Black`, gender: `unisex`, material: `Acetate`,
    weight: `20g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/a429701f1f48.jpg`, `https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`, `https://sfile.chatglm.cn/images-ppt/783f4a4d39a3.jpg`, `https://sfile.chatglm.cn/images-ppt/535b641ad0a7.jpg`],
    rating: 4.2, reviewCount: 326, stock: 7, isFeatured: true, isNew: true, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p187-r0`, productId: `p187`, userName: `Ritu Aggarwal`, rating: 5, title: `Love it!`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-07` },
    { id: `p187-r1`, productId: `p187`, userName: `Rohit Gupta`, rating: 4, title: `Satisfied`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-14` },
    { id: `p187-r2`, productId: `p187`, userName: `Manish Tiwari`, rating: 5, title: `Better than expected`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-19` }
    ],
  },
  {
    id: `p188`, name: `Travel Case Hard Aviator`, slug: `travel-case-hard-188`, brand: `Italia Care`,
    description: `Premium charcoal eyewear accessory. Polycarbonate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 334, mrp: 711, discount: 53, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `aviator`, frameColor: `Charcoal`, gender: `unisex`, material: `Polycarbonate`,
    weight: `22g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/535b641ad0a7.jpg`, `https://sfile.chatglm.cn/images-ppt/ac2bb14c96ca.jpg`, `https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`, `https://sfile.chatglm.cn/images-ppt/783f4a4d39a3.jpg`],
    rating: 4.3, reviewCount: 29, stock: 23, isFeatured: false, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p188-r0`, productId: `p188`, userName: `Pooja Bhatt`, rating: 4, title: `Highly recommend`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-08` },
    { id: `p188-r1`, productId: `p188`, userName: `Sneha Reddy`, rating: 4, title: `Great purchase`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-15` },
    { id: `p188-r2`, productId: `p188`, userName: `Arjun Nair`, rating: 5, title: `Highly recommend`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-23` },
    { id: `p188-r3`, productId: `p188`, userName: `Priya Mehta`, rating: 3, title: `Great purchase`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-02-12` }
    ],
  },
  {
    id: `p189`, name: `UV Sanitizer Box Square`, slug: `uv-sanitizer-box-189`, brand: `Italia Care`,
    description: `Premium sapphire eyewear accessory. Acetate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 224, mrp: 399, discount: 44, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `square`, frameColor: `Sapphire`, gender: `unisex`, material: `Acetate`,
    weight: `22g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/535b641ad0a7.jpg`, `https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`, `https://sfile.chatglm.cn/images-ppt/ac2bb14c96ca.jpg`, `https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`],
    rating: 4.0, reviewCount: 284, stock: 69, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p189-r0`, productId: `p189`, userName: `Nitin Joshi`, rating: 5, title: `Love it!`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-02` },
    { id: `p189-r1`, productId: `p189`, userName: `Vikram Singh`, rating: 3, title: `Premium feel`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-03-01` },
    { id: `p189-r2`, productId: `p189`, userName: `Sahil Khan`, rating: 5, title: `Satisfied`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-03-03` },
    { id: `p189-r3`, productId: `p189`, userName: `Karan Malhotra`, rating: 4, title: `Fast delivery`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-17` }
    ],
  },
  {
    id: `p190`, name: `Nose Pads Replacement Square`, slug: `nose-pads-replacement-190`, brand: `Italia Active`,
    description: `Premium tortoise eyewear accessory. Polycarbonate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 655, mrp: 1292, discount: 49, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `square`, frameColor: `Tortoise`, gender: `men`, material: `Polycarbonate`,
    weight: `N/A`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`, `https://sfile.chatglm.cn/images-ppt/ac2bb14c96ca.jpg`, `https://sfile.chatglm.cn/images-ppt/a429701f1f48.jpg`, `https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`],
    rating: 4.6, reviewCount: 266, stock: 12, isFeatured: false, isNew: false, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p190-r0`, productId: `p190`, userName: `Divya Iyer`, rating: 4, title: `Perfect fit`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-03-10` },
    { id: `p190-r1`, productId: `p190`, userName: `Nitin Joshi`, rating: 5, title: `Good value for money`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-04-24` },
    { id: `p190-r2`, productId: `p190`, userName: `Ritu Aggarwal`, rating: 5, title: `Perfect fit`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-24` }
    ],
  },
  {
    id: `p191`, name: `Lens Pen Cleaner Hexagon`, slug: `lens-pen-cleaner-191`, brand: `Italia Pro`,
    description: `Premium ivory eyewear accessory. Titanium construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 411, mrp: 703, discount: 42, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `hexagon`, frameColor: `Ivory`, gender: `men`, material: `Titanium`,
    weight: `12g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`, `https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`, `https://sfile.chatglm.cn/images-ppt/ac2bb14c96ca.jpg`, `https://sfile.chatglm.cn/images-ppt/a429701f1f48.jpg`],
    rating: 4.6, reviewCount: 197, stock: 16, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p191-r0`, productId: `p191`, userName: `Manish Tiwari`, rating: 4, title: `Satisfied`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-04-10` },
    { id: `p191-r1`, productId: `p191`, userName: `Neha Pandey`, rating: 5, title: `Excellent quality!`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-05-10` },
    { id: `p191-r2`, productId: `p191`, userName: `Sonia Mehta`, rating: 5, title: `Love it!`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-01` }
    ],
  },
  {
    id: `p192`, name: `Premium Leather Case Rectangle`, slug: `premium-leather-case-192`, brand: `Italia Pro`,
    description: `Premium forest green eyewear accessory. Acetate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 868, mrp: 1706, discount: 49, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `rectangle`, frameColor: `Forest Green`, gender: `kids`, material: `Acetate`,
    weight: `14g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/a429701f1f48.jpg`, `https://sfile.chatglm.cn/images-ppt/535b641ad0a7.jpg`, `https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`, `https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`],
    rating: 4.0, reviewCount: 146, stock: 68, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p192-r0`, productId: `p192`, userName: `Sonia Mehta`, rating: 3, title: `Good value for money`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-05-24` },
    { id: `p192-r1`, productId: `p192`, userName: `Manish Tiwari`, rating: 4, title: `Perfect fit`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-05-02` },
    { id: `p192-r2`, productId: `p192`, userName: `Vikram Singh`, rating: 5, title: `Stylish and comfortable`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-03-06` }
    ],
  },
  {
    id: `p193`, name: `Microfiber Cleaning Kit Rectangle`, slug: `microfiber-cleaning-kit-193`, brand: `Italia Active`,
    description: `Premium honey eyewear accessory. Acetate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 495, mrp: 843, discount: 41, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `rectangle`, frameColor: `Honey`, gender: `unisex`, material: `Acetate`,
    weight: `16g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/783f4a4d39a3.jpg`, `https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`, `https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`, `https://sfile.chatglm.cn/images-ppt/a429701f1f48.jpg`],
    rating: 4.8, reviewCount: 311, stock: 101, isFeatured: false, isNew: true, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p193-r0`, productId: `p193`, userName: `Divya Iyer`, rating: 4, title: `Premium feel`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-27` },
    { id: `p193-r1`, productId: `p193`, userName: `Vikram Singh`, rating: 4, title: `Highly recommend`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-12` },
    { id: `p193-r2`, productId: `p193`, userName: `Sonia Mehta`, rating: 5, title: `Great purchase`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-01-07` },
    { id: `p193-r3`, productId: `p193`, userName: `Vikram Singh`, rating: 5, title: `Satisfied`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-20` }
    ],
  },
  {
    id: `p194`, name: `Travel Case Hard Oval`, slug: `travel-case-hard-194`, brand: `Italia Care`,
    description: `Premium sapphire eyewear accessory. TR90 construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 670, mrp: 1434, discount: 53, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `oval`, frameColor: `Sapphire`, gender: `men`, material: `TR90`,
    weight: `26g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/ac2bb14c96ca.jpg`, `https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`, `https://sfile.chatglm.cn/images-ppt/b5c1fff0f338.jpg`, `https://sfile.chatglm.cn/images-ppt/783f4a4d39a3.jpg`],
    rating: 4.7, reviewCount: 76, stock: 109, isFeatured: true, isNew: true, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p194-r0`, productId: `p194`, userName: `Meera Kapoor`, rating: 4, title: `Love it!`, comment: `Got many compliments. The try-on feature helped me choose the perfect frame.`, date: `2025-02-10` },
    { id: `p194-r1`, productId: `p194`, userName: `Vikram Singh`, rating: 4, title: `Highly recommend`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-23` }
    ],
  },
  {
    id: `p195`, name: `Lens Spray Bottle Round`, slug: `lens-spray-bottle-195`, brand: `Italia Femme`,
    description: `Premium sky blue eyewear accessory. TR90 construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 242, mrp: 396, discount: 39, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `round`, frameColor: `Sky Blue`, gender: `kids`, material: `TR90`,
    weight: `14g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/b5c1fff0f338.jpg`, `https://sfile.chatglm.cn/images-ppt/db66e133c306.jpg`, `https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`, `https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`],
    rating: 4.5, reviewCount: 134, stock: 10, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p195-r0`, productId: `p195`, userName: `Manish Tiwari`, rating: 4, title: `Highly recommend`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-01-03` },
    { id: `p195-r1`, productId: `p195`, userName: `Vikram Singh`, rating: 3, title: `Perfect fit`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-03-12` }
    ],
  },
  {
    id: `p196`, name: `Hard Shell Case Hexagon`, slug: `hard-shell-case-196`, brand: `Italia Care`,
    description: `Premium pearl white eyewear accessory. Polycarbonate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 782, mrp: 1210, discount: 35, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `hexagon`, frameColor: `Pearl White`, gender: `women`, material: `Polycarbonate`,
    weight: `28g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/db66e133c306.jpg`, `https://sfile.chatglm.cn/images-ppt/4273f5b4aee9.jpeg`, `https://sfile.chatglm.cn/images-ppt/535b641ad0a7.jpg`],
    rating: 4.7, reviewCount: 149, stock: 26, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p196-r0`, productId: `p196`, userName: `Manish Tiwari`, rating: 4, title: `Stylish and comfortable`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-02-27` },
    { id: `p196-r1`, productId: `p196`, userName: `Divya Iyer`, rating: 5, title: `Worth every rupee`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-05-08` },
    { id: `p196-r2`, productId: `p196`, userName: `Ritu Aggarwal`, rating: 4, title: `Great purchase`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-04` }
    ],
  },
  {
    id: `p197`, name: `Travel Case Hard Aviator`, slug: `travel-case-hard-197`, brand: `Italia Pro`,
    description: `Premium sky blue eyewear accessory. Stainless Steel construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 494, mrp: 933, discount: 47, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `aviator`, frameColor: `Sky Blue`, gender: `unisex`, material: `Stainless Steel`,
    weight: `26g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`, `https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`, `https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`],
    rating: 4.6, reviewCount: 164, stock: 92, isFeatured: true, isNew: false, isBestSeller: true, isOffer: true,
    reviews: [
    { id: `p197-r0`, productId: `p197`, userName: `Rajesh Khurana`, rating: 4, title: `Stylish and comfortable`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-02-01` },
    { id: `p197-r1`, productId: `p197`, userName: `Sonia Mehta`, rating: 3, title: `Good value for money`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-17` },
    { id: `p197-r2`, productId: `p197`, userName: `Rohit Gupta`, rating: 4, title: `Highly recommend`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-23` }
    ],
  },
  {
    id: `p198`, name: `Eyewear Stand Wood Oval`, slug: `eyewear-stand-wood-198`, brand: `Italia Femme`,
    description: `Premium matte black eyewear accessory. Metal construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 402, mrp: 698, discount: 42, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `oval`, frameColor: `Matte Black`, gender: `men`, material: `Metal`,
    weight: `30g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`, `https://sfile.chatglm.cn/images-ppt/783f4a4d39a3.jpg`, `https://sfile.chatglm.cn/images-ppt/535b641ad0a7.jpg`, `https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`],
    rating: 4.7, reviewCount: 147, stock: 102, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p198-r0`, productId: `p198`, userName: `Sahil Khan`, rating: 5, title: `Premium feel`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-25` },
    { id: `p198-r1`, productId: `p198`, userName: `Nitin Joshi`, rating: 4, title: `Good value for money`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-04-16` },
    { id: `p198-r2`, productId: `p198`, userName: `Meera Kapoor`, rating: 3, title: `Highly recommend`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-01-24` },
    { id: `p198-r3`, productId: `p198`, userName: `Priya Mehta`, rating: 4, title: `Stylish and comfortable`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-02-13` }
    ],
  },
  {
    id: `p199`, name: `Display Stand Metal Square`, slug: `display-stand-metal-199`, brand: `Italia Vision`,
    description: `Premium forest green eyewear accessory. Acetate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 875, mrp: 1772, discount: 51, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `square`, frameColor: `Forest Green`, gender: `men`, material: `Acetate`,
    weight: `22g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/b5c1fff0f338.jpg`, `https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`, `https://sfile.chatglm.cn/images-ppt/db66e133c306.jpg`],
    rating: 4.5, reviewCount: 138, stock: 74, isFeatured: false, isNew: false, isBestSeller: true, isOffer: false,
    reviews: [
    { id: `p199-r0`, productId: `p199`, userName: `Nitin Joshi`, rating: 5, title: `Worth every rupee`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-04-02` },
    { id: `p199-r1`, productId: `p199`, userName: `Priya Mehta`, rating: 4, title: `Premium feel`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-16` },
    { id: `p199-r2`, productId: `p199`, userName: `Ritu Aggarwal`, rating: 4, title: `Perfect fit`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-25` }
    ],
  },
  {
    id: `p200`, name: `Lens Spray Bottle Oval`, slug: `lens-spray-bottle-200`, brand: `Italia Luxe`,
    description: `Premium bronze eyewear accessory. TR90 construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 774, mrp: 1623, discount: 52, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `oval`, frameColor: `Bronze`, gender: `kids`, material: `TR90`,
    weight: `20g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/b5c1fff0f338.jpg`, `https://sfile.chatglm.cn/images-ppt/a429701f1f48.jpg`, `https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`, `https://sfile.chatglm.cn/images-ppt/db66e133c306.jpg`],
    rating: 4.6, reviewCount: 185, stock: 103, isFeatured: false, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p200-r0`, productId: `p200`, userName: `Divya Iyer`, rating: 3, title: `Fast delivery`, comment: `The frame is lightweight and looks premium. Fast delivery by Italia Optical.`, date: `2025-03-13` },
    { id: `p200-r1`, productId: `p200`, userName: `Sneha Reddy`, rating: 5, title: `Great purchase`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-12` },
    { id: `p200-r2`, productId: `p200`, userName: `Priya Mehta`, rating: 3, title: `Satisfied`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-02-21` }
    ],
  },
  {
    id: `p201`, name: `Chain Strap Gold Round`, slug: `chain-strap-gold-201`, brand: `Italia Luxe`,
    description: `Premium onyx eyewear accessory. Metal construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 316, mrp: 548, discount: 42, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `round`, frameColor: `Onyx`, gender: `men`, material: `Metal`,
    weight: `12g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/a429701f1f48.jpg`, `https://sfile.chatglm.cn/images-ppt/b5c1fff0f338.jpg`, `https://sfile.chatglm.cn/images-ppt/783f4a4d39a3.jpg`, `https://sfile.chatglm.cn/images-ppt/4273f5b4aee9.jpeg`],
    rating: 4.6, reviewCount: 220, stock: 39, isFeatured: true, isNew: false, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p201-r0`, productId: `p201`, userName: `Sahil Khan`, rating: 5, title: `Fast delivery`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-04-04` },
    { id: `p201-r1`, productId: `p201`, userName: `Rajesh Khurana`, rating: 5, title: `Stylish and comfortable`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-03-06` },
    { id: `p201-r2`, productId: `p201`, userName: `Kavya Rao`, rating: 5, title: `Great purchase`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-02-16` },
    { id: `p201-r3`, productId: `p201`, userName: `Rohit Gupta`, rating: 5, title: `Satisfied`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-03-02` }
    ],
  },
  {
    id: `p202`, name: `Chain Strap Gold Aviator`, slug: `chain-strap-gold-202`, brand: `Italia Luxe`,
    description: `Premium gold brown eyewear accessory. Stainless Steel construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 791, mrp: 1238, discount: 36, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `aviator`, frameColor: `Gold Brown`, gender: `men`, material: `Stainless Steel`,
    weight: `14g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`, `https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`, `https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`, `https://sfile.chatglm.cn/images-ppt/783f4a4d39a3.jpg`],
    rating: 4.5, reviewCount: 112, stock: 49, isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
    reviews: [
    { id: `p202-r0`, productId: `p202`, userName: `Karan Malhotra`, rating: 4, title: `Worth every rupee`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-03-20` },
    { id: `p202-r1`, productId: `p202`, userName: `Akash Verma`, rating: 5, title: `Better than expected`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-02-01` },
    { id: `p202-r2`, productId: `p202`, userName: `Akash Verma`, rating: 4, title: `Fast delivery`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-02-22` },
    { id: `p202-r3`, productId: `p202`, userName: `Nitin Joshi`, rating: 5, title: `Better than expected`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-05-28` }
    ],
  },
  {
    id: `p203`, name: `Lens Pen Cleaner Oval`, slug: `lens-pen-cleaner-203`, brand: `Italia Luxe`,
    description: `Premium rose gold eyewear accessory. Polycarbonate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 404, mrp: 709, discount: 43, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `oval`, frameColor: `Rose Gold`, gender: `men`, material: `Polycarbonate`,
    weight: `14g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`, `https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`, `https://sfile.chatglm.cn/images-ppt/a9565f27025a.jpg`],
    rating: 4.4, reviewCount: 168, stock: 115, isFeatured: true, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p203-r0`, productId: `p203`, userName: `Ananya Verma`, rating: 5, title: `Better than expected`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-02-13` },
    { id: `p203-r1`, productId: `p203`, userName: `Meera Kapoor`, rating: 4, title: `Highly recommend`, comment: `Good product and the frame quality is top notch. Will buy again.`, date: `2025-01-08` },
    { id: `p203-r2`, productId: `p203`, userName: `Pooja Bhatt`, rating: 5, title: `Stylish and comfortable`, comment: `The blue light filtering really helps with my screen time. Highly recommend.`, date: `2025-04-14` },
    { id: `p203-r3`, productId: `p203`, userName: `Priya Mehta`, rating: 4, title: `Highly recommend`, comment: `Excellent build quality. Feels durable and the lenses are crystal clear.`, date: `2025-02-01` }
    ],
  },
  {
    id: `p204`, name: `Temple Tips Soft Oval`, slug: `temple-tips-soft-204`, brand: `Italia Active`,
    description: `Premium sapphire eyewear accessory. Stainless Steel construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 242, mrp: 526, discount: 54, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `oval`, frameColor: `Sapphire`, gender: `women`, material: `Stainless Steel`,
    weight: `24g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/db66e133c306.jpg`, `https://sfile.chatglm.cn/images-ppt/e6cb0c945e61.jpg`, `https://sfile.chatglm.cn/images-ppt/ac2bb14c96ca.jpg`, `https://sfile.chatglm.cn/images-ppt/a429701f1f48.jpg`],
    rating: 4.6, reviewCount: 37, stock: 120, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p204-r0`, productId: `p204`, userName: `Manish Tiwari`, rating: 3, title: `Premium feel`, comment: `Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.`, date: `2025-05-22` },
    { id: `p204-r1`, productId: `p204`, userName: `Manish Tiwari`, rating: 5, title: `Perfect fit`, comment: `Comfortable to wear all day. No pressure on the nose or temples.`, date: `2025-01-08` }
    ],
  },
  {
    id: `p205`, name: `Display Stand Metal Hexagon`, slug: `display-stand-metal-205`, brand: `Italia Femme`,
    description: `Premium wine red eyewear accessory. Polycarbonate construction with quality finish. Compatible with most frame sizes. Italia Optical branded.`,
    price: 953, mrp: 1689, discount: 44, categoryId: `c7`, categorySlug: `accessories`,
    frameShape: `hexagon`, frameColor: `Wine Red`, gender: `unisex`, material: `Polycarbonate`,
    weight: `24g`, size: `One Size`, images: [`https://sfile.chatglm.cn/images-ppt/a429701f1f48.jpg`, `https://sfile.chatglm.cn/images-ppt/b5c1fff0f338.jpg`, `https://sfile.chatglm.cn/images-ppt/535b641ad0a7.jpg`, `https://sfile.chatglm.cn/images-ppt/072e4b1fa882.jpeg`],
    rating: 4.2, reviewCount: 145, stock: 61, isFeatured: false, isNew: true, isBestSeller: false, isOffer: true,
    reviews: [
    { id: `p205-r0`, productId: `p205`, userName: `Sneha Reddy`, rating: 5, title: `Premium feel`, comment: `Great value for the price. The case that comes with it is also premium.`, date: `2025-04-22` },
    { id: `p205-r1`, productId: `p205`, userName: `Meera Kapoor`, rating: 5, title: `Highly recommend`, comment: `Perfect prescription match. The staff was super helpful with the selection.`, date: `2025-04-23` },
    { id: `p205-r2`, productId: `p205`, userName: `Divya Iyer`, rating: 5, title: `Excellent quality!`, comment: `Beautiful design and the color is exactly as shown in the photos.`, date: `2025-01-27` }
    ],
  }
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
