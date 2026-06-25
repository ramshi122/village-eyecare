'use client';

import { useStore } from '@/lib/store';
import { getProductById } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductCard } from './ProductCard';
import { Heart, ChevronLeft, ShoppingBag, ArrowRight } from 'lucide-react';

export function WishlistView() {
  const navigate = useStore((s) => s.navigate);
  const wishlist = useStore((s) => s.wishlist);
  const wishlistProducts = wishlist.map((w) => getProductById(w.productId)).filter(Boolean);

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 text-sm text-italia-navy hover:text-italia-blue mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-serif-italia text-2xl lg:text-3xl font-bold text-italia-navy flex items-center gap-2">
              <Heart className="w-7 h-7 text-italia-gold" /> My Wishlist
            </h1>
            <p className="text-sm text-slate-500 mt-1">{wishlist.length} item(s) saved</p>
          </div>
          <Button onClick={() => navigate('shop')} variant="outline" className="rounded-full">
            <ShoppingBag className="w-4 h-4 mr-1.5" /> Continue Shopping
          </Button>
        </div>

        {wishlistProducts.length === 0 ? (
          <Card className="p-12 text-center border-slate-200">
            <Heart className="w-16 h-16 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif-italia text-xl font-bold text-italia-navy mb-1">Your wishlist is empty</h3>
            <p className="text-sm text-slate-500 mb-4">Tap the heart icon on any product to save it here</p>
            <Button onClick={() => navigate('shop')} className="bg-italia-navy hover:bg-italia-blue rounded-full">
              Explore Products <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {wishlistProducts.map((p, i) => p && <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        )}
      </div>
    </div>
  );
}
