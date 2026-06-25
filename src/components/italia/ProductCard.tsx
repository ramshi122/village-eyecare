'use client';

import { Product } from '@/lib/types';
import { useStore } from '@/lib/store';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Star, ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const navigate = useStore((s) => s.navigate);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const isWishlisted = useStore((s) => s.isWishlisted(product.id));
  const addToCart = useStore((s) => s.addToCart);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      className="h-full"
    >
      <Card
        className="group relative overflow-hidden border-slate-200/60 bg-white cursor-pointer hover-lift h-full flex flex-col"
        onClick={() => navigate('product', product.id)}
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
            {product.discount > 0 && (
              <Badge className="bg-italia-blue text-white shadow-md hover:bg-italia-blue">
                {product.discount}% OFF
              </Badge>
            )}
            {product.isNew && (
              <Badge className="bg-italia-gold text-white shadow-md hover:bg-italia-gold">NEW</Badge>
            )}
            {product.isBestSeller && (
              <Badge variant="secondary" className="bg-white/95 text-italia-navy shadow-md">Bestseller</Badge>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Toggle wishlist"
          >
            <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-italia-navy'}`} />
          </button>

          <div className="zoom-container w-full h-full">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Quick actions */}
          <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <Button
              size="sm"
              onClick={handleQuickAdd}
              className="flex-1 bg-italia-navy hover:bg-italia-blue text-white shadow-lg"
            >
              <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
              Add
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={(e) => { e.stopPropagation(); navigate('product', product.id); }}
              className="glass text-italia-navy hover:bg-white shadow-lg"
            >
              <Eye className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 flex flex-col gap-1.5 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{product.brand}</span>
            <div className="flex items-center gap-0.5 text-amber-500">
              <Star className="w-3 h-3 fill-amber-500" />
              <span className="text-xs font-medium text-slate-700">{product.rating}</span>
              <span className="text-[10px] text-slate-400">({product.reviewCount})</span>
            </div>
          </div>
          <h3 className="text-sm font-semibold text-italia-navy line-clamp-2 leading-snug">
            {product.name}
          </h3>
          <p className="text-[11px] text-slate-500 capitalize">{product.frameShape} · {product.gender}</p>
          <div className="mt-auto flex items-baseline gap-1.5 pt-1">
            <span className="text-base font-bold text-italia-navy">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-xs text-slate-400 line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
