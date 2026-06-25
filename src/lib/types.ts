// Village Eyecare - TypeScript Types

export type ViewName =
  | 'home'
  | 'shop'
  | 'product'
  | 'tryon'
  | 'prescription'
  | 'cart'
  | 'checkout'
  | 'account'
  | 'admin'
  | 'wishlist'
  | 'orders'
  | 'order-success';

export type CategorySlug =
  | 'eyeglasses'
  | 'sunglasses'
  | 'contact-lenses'
  | 'power-sunglasses'
  | 'computer-glasses'
  | 'kids-glasses'
  | 'accessories';

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  icon: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  description: string;
  price: number;
  mrp: number;
  discount: number;
  categoryId: string;
  categorySlug: CategorySlug;
  frameShape: 'round' | 'square' | 'rectangle' | 'aviator' | 'cat-eye' | 'oval' | 'hexagon';
  frameColor: string;
  gender: 'men' | 'women' | 'unisex' | 'kids';
  material: string;
  weight: string;
  size: string;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  isFeatured: boolean;
  isNew: boolean;
  isBestSeller: boolean;
  isOffer: boolean;
  reviews: Review[];
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
}

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  lensType?: string;
  lensPrice?: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'customer' | 'admin';
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  couponCode?: string;
  paymentMethod: 'online' | 'cod' | 'upi';
  paymentStatus: 'pending' | 'paid' | 'failed';
  orderStatus: 'placed' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  address: Address;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  createdAt: string;
}

export interface Prescription {
  id: string;
  imageUrl?: string;
  rightSPH?: string;
  rightCYL?: string;
  rightAXIS?: string;
  leftSPH?: string;
  leftCYL?: string;
  leftAXIS?: string;
  pd?: string;
  notes?: string;
  createdAt: string;
}

export interface Offer {
  code: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  minOrder: number;
  maxDiscount?: number;
}
