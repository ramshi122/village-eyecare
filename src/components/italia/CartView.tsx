'use client';

import { useStore, useCartSubtotal } from '@/lib/store';
import { OFFERS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CartItem } from '@/lib/types';
import {
  Trash2, Minus, Plus, ShoppingBag, Tag, ArrowRight, ChevronLeft,
  Truck, Shield, Check, X
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

export function CartView() {
  const navigate = useStore((s) => s.navigate);
  const cart = useStore((s) => s.cart);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const updateCartQuantity = useStore((s) => s.updateCartQuantity);
  const applyCoupon = useStore((s) => s.applyCoupon);
  const appliedCoupon = useStore((s) => s.appliedCoupon);
  const couponDiscount = useStore((s) => s.couponDiscount);
  const removeCoupon = useStore((s) => s.removeCoupon);

  const [couponInput, setCouponInput] = useState('');

  const subtotal = useCartSubtotal();
  const shipping = subtotal >= 999 ? 0 : 49;
  const total = subtotal - couponDiscount + shipping;

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;
    const result = applyCoupon(couponInput);
    if (result.success) {
      toast.success(result.message);
      setCouponInput('');
    } else {
      toast.error(result.message);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="animate-fade-in min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-24 h-24 rounded-full bg-italia-blue/10 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-12 h-12 text-italia-blue" />
          </div>
          <h2 className="font-serif-italia text-2xl font-bold text-italia-navy mb-2">Your cart is empty</h2>
          <p className="text-sm text-slate-500 mb-6">Looks like you haven't added anything yet. Let's fix that!</p>
          <Button onClick={() => navigate('shop')} className="bg-italia-navy hover:bg-italia-blue rounded-full">
            Start Shopping <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button onClick={() => navigate('shop')} className="flex items-center gap-1 text-sm text-italia-navy hover:text-italia-blue mb-4">
          <ChevronLeft className="w-4 h-4" /> Continue Shopping
        </button>

        <div className="flex items-center justify-between mb-6">
          <h1 className="font-serif-italia text-2xl lg:text-3xl font-bold text-italia-navy">
            Shopping Cart <span className="text-slate-400 text-lg">({cart.length})</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-3">
            <AnimatePresence>
              {cart.map((item: CartItem) => (
                <motion.div
                  key={`${item.productId}-${item.lensType || 'default'}`}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-4 border-slate-200">
                    <div className="flex gap-4">
                      {/* Image */}
                      <button
                        onClick={() => navigate('product', item.productId)}
                        className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-slate-100"
                      >
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </button>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-italia-navy line-clamp-2">{item.name}</h3>
                            {item.lensType && (
                              <p className="text-xs text-slate-500 mt-0.5">Lens: {item.lensType}</p>
                            )}
                            <p className="text-sm font-bold text-italia-navy mt-1">
                              ₹{(item.price + (item.lensPrice || 0)).toLocaleString('en-IN')}
                            </p>
                          </div>
                          <button
                            onClick={() => { removeFromCart(item.productId); toast.success('Removed from cart'); }}
                            className="text-slate-400 hover:text-red-500 transition-colors flex-shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity */}
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 disabled:opacity-30"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-10 text-center text-sm font-semibold text-italia-navy">{item.quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-slate-100"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="text-sm text-slate-500">
                            Total: <span className="font-bold text-italia-navy">
                              ₹{((item.price + (item.lensPrice || 0)) * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-3">
              <span className="flex items-center gap-1.5 text-xs text-slate-600"><Truck className="w-4 h-4 text-italia-blue" /> Free shipping above ₹999</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-600"><Shield className="w-4 h-4 text-italia-blue" /> Secure checkout</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-600"><Check className="w-4 h-4 text-italia-blue" /> 7-day returns</span>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-[100px] space-y-4">
              {/* Coupon */}
              <Card className="p-4 border-slate-200">
                <h3 className="text-sm font-semibold text-italia-navy mb-3 flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-italia-gold" /> Apply Coupon
                </h3>

                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-green-50 border border-green-200">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="text-sm font-semibold text-green-700">{appliedCoupon}</p>
                        <p className="text-xs text-green-600">You saved ₹{couponDiscount}</p>
                      </div>
                    </div>
                    <button onClick={removeCoupon} className="text-green-600 hover:text-red-500">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex gap-2">
                      <Input
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                        placeholder="ENTER CODE"
                        className="uppercase font-mono"
                      />
                      <Button onClick={handleApplyCoupon} className="bg-italia-navy hover:bg-italia-blue">
                        Apply
                      </Button>
                    </div>
                    <div className="mt-3 space-y-1.5 max-h-40 overflow-y-auto scrollbar-premium">
                      {OFFERS.map((o) => (
                        <button
                          key={o.code}
                          onClick={() => { setCouponInput(o.code); }}
                          className="w-full text-left p-2 rounded-lg border border-dashed border-italia-gold/40 hover:bg-italia-gold/5 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <code className="text-xs font-mono font-bold text-italia-gold">{o.code}</code>
                            <Badge className="bg-italia-gold/20 text-italia-gold border-0 hover:bg-italia-gold/20">{o.title}</Badge>
                          </div>
                          <p className="text-[10px] text-slate-500 mt-0.5">{o.description}</p>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </Card>

              {/* Summary */}
              <Card className="p-5 border-slate-200">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal ({cart.length} items)</span>
                    <span className="font-semibold text-italia-navy">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span className="font-semibold">-₹{couponDiscount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : 'text-italia-navy'}`}>
                      {shipping === 0 ? 'FREE' : `₹${shipping}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-italia-blue bg-italia-blue/5 p-2 rounded-lg">
                      Add ₹{(999 - subtotal).toLocaleString('en-IN')} more for FREE shipping
                    </p>
                  )}
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-italia-navy">Total</span>
                  <span className="text-2xl font-bold text-italia-navy">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Inclusive of all taxes</p>

                <Button
                  size="lg"
                  onClick={() => navigate('checkout')}
                  className="w-full mt-4 bg-italia-navy hover:bg-italia-blue text-white rounded-full h-12"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
