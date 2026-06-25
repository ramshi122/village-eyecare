'use client';

import { useStore } from '@/lib/store';
import { Header } from '@/components/italia/Header';
import { Footer } from '@/components/italia/Footer';
import { HomeView } from '@/components/italia/HomeView';
import { ShopView } from '@/components/italia/ShopView';
import { ProductDetailView } from '@/components/italia/ProductDetailView';
import { CartView } from '@/components/italia/CartView';
import { CheckoutView, OrderSuccessView } from '@/components/italia/CheckoutView';
import { AccountView } from '@/components/italia/AccountView';
import { AdminView } from '@/components/italia/AdminView';
import { VirtualTryOn } from '@/components/italia/VirtualTryOn';
import { PrescriptionUpload } from '@/components/italia/PrescriptionUpload';
import { OrdersView } from '@/components/italia/OrdersView';
import { WishlistView } from '@/components/italia/WishlistView';
import { WhatsAppWidget } from '@/components/italia/WhatsAppWidget';
import { SearchModal } from '@/components/italia/SearchModal';
import { AdminPasswordPrompt } from '@/components/italia/AdminPasswordPrompt';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const currentView = useStore((s) => s.currentView);
  const navigate = useStore((s) => s.navigate);

  // Handle URL params for PWA shortcuts (deep links)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view') as any;
    const category = params.get('category') as any;
    if (view) navigate(view, null, category);
  }, [navigate]);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView />;
      case 'shop': return <ShopView />;
      case 'product': return <ProductDetailView />;
      case 'cart': return <CartView />;
      case 'checkout': return <CheckoutView />;
      case 'order-success': return <OrderSuccessView />;
      case 'account': return <AccountView />;
      case 'admin': return <AdminView />;
      case 'tryon': return <VirtualTryOn />;
      case 'prescription': return <PrescriptionUpload />;
      case 'orders': return <OrdersView />;
      case 'wishlist': return <WishlistView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-italia-ivory">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Global UI */}
      <WhatsAppWidget />
      <SearchModal />
      <AdminPasswordPrompt />
    </div>
  );
}
