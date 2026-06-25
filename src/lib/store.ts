import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, WishlistItem, User, Address, Order, Prescription, ViewName, CategorySlug } from './types';
import { PRODUCTS, OFFERS, getProductById } from './data';

interface AppState {
  // Navigation
  currentView: ViewName;
  selectedProductId: string | null;
  selectedCategory: CategorySlug | null;
  searchQuery: string;

  // Cart
  cart: CartItem[];
  appliedCoupon: string | null;
  couponDiscount: number;

  // Wishlist
  wishlist: WishlistItem[];

  // User
  user: User | null;
  addresses: Address[];
  orders: Order[];
  prescriptions: Prescription[];

  // Admin
  adminProducts: Product[];
  adminOrders: Order[];

  // UI
  isSearchOpen: boolean;
  isCartOpen: boolean;
  isMenuOpen: boolean;

  // Actions
  navigate: (view: ViewName, productId?: string | null, category?: CategorySlug | null) => void;
  setSearchQuery: (q: string) => void;

  addToCart: (product: Product, quantity?: number, lensType?: string, lensPrice?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;

  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  login: (email: string, name: string) => void;
  logout: () => void;
  addAddress: (addr: Omit<Address, 'id'>) => void;
  removeAddress: (id: string) => void;
  placeOrder: (order: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'orderStatus' | 'paymentStatus'>) => Order;
  addPrescription: (rx: Omit<Prescription, 'id' | 'createdAt'>) => void;
  removePrescription: (id: string) => void;

  // Admin actions
  addProduct: (p: Product) => void;
  updateProduct: (id: string, p: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  updateOrderStatus: (orderId: string, status: Order['orderStatus']) => void;

  // UI actions
  setSearchOpen: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  setMenuOpen: (open: boolean) => void;
}

const generateOrderNumber = () => {
  const ts = Date.now().toString(36).toUpperCase().slice(-6);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 6);
  return `ITA${ts}${rand}`;
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      currentView: 'home',
      selectedProductId: null,
      selectedCategory: null,
      searchQuery: '',

      cart: [],
      appliedCoupon: null,
      couponDiscount: 0,

      wishlist: [],

      user: null,
      addresses: [
        {
          id: 'addr-default',
          name: 'Italia Optical Store',
          phone: '+91 87082-70548',
          line1: 'Store No. 18/258, Basement Floor',
          line2: 'Kunjpura Road, Opp. Mahavirdal Hospital',
          city: 'Karnal',
          state: 'Haryana',
          pincode: '132001',
          isDefault: true,
        },
      ],
      orders: [],
      prescriptions: [],

      adminProducts: [...PRODUCTS],
      adminOrders: [],

      isSearchOpen: false,
      isCartOpen: false,
      isMenuOpen: false,

      navigate: (view, productId = null, category = null) => {
        set({ currentView: view, selectedProductId: productId, selectedCategory: category, isMenuOpen: false, isSearchOpen: false });
        if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
      },

      setSearchQuery: (q) => set({ searchQuery: q }),

      addToCart: (product, quantity = 1, lensType, lensPrice = 0) => {
        const cart = get().cart;
        const existing = cart.find((c) => c.productId === product.id && c.lensType === lensType);
        if (existing) {
          set({ cart: cart.map((c) => (c.productId === product.id && c.lensType === lensType ? { ...c, quantity: c.quantity + quantity } : c)) });
        } else {
          set({
            cart: [
              ...cart,
              {
                productId: product.id,
                name: product.name,
                image: product.images[0],
                price: product.price,
                quantity,
                lensType,
                lensPrice,
              },
            ],
          });
        }
      },

      removeFromCart: (productId) => set({ cart: get().cart.filter((c) => c.productId !== productId) }),

      updateCartQuantity: (productId, quantity) => {
        if (quantity < 1) return;
        set({ cart: get().cart.map((c) => (c.productId === productId ? { ...c, quantity } : c)) });
      },

      clearCart: () => set({ cart: [], appliedCoupon: null, couponDiscount: 0 }),

      applyCoupon: (code) => {
        const upper = code.toUpperCase().trim();
        const offer = OFFERS.find((o) => o.code === upper);
        if (!offer) return { success: false, message: 'Invalid coupon code' };
        const subtotal = get().cart.reduce((sum, c) => sum + (c.price + (c.lensPrice || 0)) * c.quantity, 0);
        if (subtotal < offer.minOrder) return { success: false, message: `Minimum order ₹${offer.minOrder} required` };
        let discount = 0;
        if (offer.discountType === 'flat') discount = offer.discountValue;
        else discount = Math.min((subtotal * offer.discountValue) / 100, offer.maxDiscount || Infinity);
        set({ appliedCoupon: upper, couponDiscount: Math.round(discount) });
        return { success: true, message: `Coupon applied! You saved ₹${Math.round(discount)}` };
      },

      removeCoupon: () => set({ appliedCoupon: null, couponDiscount: 0 }),

      toggleWishlist: (productId) => {
        const exists = get().wishlist.find((w) => w.productId === productId);
        if (exists) {
          set({ wishlist: get().wishlist.filter((w) => w.productId !== productId) });
        } else {
          set({ wishlist: [...get().wishlist, { productId, addedAt: new Date().toISOString() }] });
        }
      },

      isWishlisted: (productId) => !!get().wishlist.find((w) => w.productId === productId),

      login: (email, name) =>
        set({
          user: {
            id: `u-${Date.now()}`,
            email,
            name,
            role: email.toLowerCase() === 'admin@italiaoptical.com' ? 'admin' : 'customer',
          },
        }),

      logout: () => set({ user: null, currentView: 'home' }),

      addAddress: (addr) =>
        set({
          addresses: [...get().addresses, { ...addr, id: `addr-${Date.now()}` }],
        }),

      removeAddress: (id) => set({ addresses: get().addresses.filter((a) => a.id !== id) }),

      placeOrder: (orderData) => {
        const order: Order = {
          ...orderData,
          id: `o-${Date.now()}`,
          orderNumber: generateOrderNumber(),
          createdAt: new Date().toISOString(),
          orderStatus: 'placed',
          paymentStatus: orderData.paymentMethod === 'cod' ? 'pending' : 'paid',
        };
        set({ orders: [order, ...get().orders], adminOrders: [order, ...get().adminOrders], cart: [], appliedCoupon: null, couponDiscount: 0 });
        return order;
      },

      addPrescription: (rx) =>
        set({
          prescriptions: [
            { ...rx, id: `rx-${Date.now()}`, createdAt: new Date().toISOString() },
            ...get().prescriptions,
          ],
        }),

      removePrescription: (id) => set({ prescriptions: get().prescriptions.filter((p) => p.id !== id) }),

      addProduct: (p) => set({ adminProducts: [p, ...get().adminProducts] }),

      updateProduct: (id, patch) =>
        set({ adminProducts: get().adminProducts.map((p) => (p.id === id ? { ...p, ...patch } : p)) }),

      deleteProduct: (id) => set({ adminProducts: get().adminProducts.filter((p) => p.id !== id) }),

      updateOrderStatus: (orderId, status) =>
        set({
          adminOrders: get().adminOrders.map((o) => (o.id === orderId ? { ...o, orderStatus: status } : o)),
          orders: get().orders.map((o) => (o.id === orderId ? { ...o, orderStatus: status } : o)),
        }),

      setSearchOpen: (open) => set({ isSearchOpen: open }),
      setCartOpen: (open) => set({ isCartOpen: open }),
      setMenuOpen: (open) => set({ isMenuOpen: open }),
    }),
    {
      name: 'italia-optical-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        user: state.user,
        addresses: state.addresses,
        orders: state.orders,
        prescriptions: state.prescriptions,
        appliedCoupon: state.appliedCoupon,
        couponDiscount: state.couponDiscount,
      }),
    }
  )
);

// Selectors
export const useCartCount = () => useStore((s) => s.cart.reduce((sum, c) => sum + c.quantity, 0));
export const useCartSubtotal = () =>
  useStore((s) => s.cart.reduce((sum, c) => sum + (c.price + (c.lensPrice || 0)) * c.quantity, 0));
