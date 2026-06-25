'use client';

import { useStore } from '@/lib/store';
import { getProductById, LENS_TYPES } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '@/lib/data';
import {
  Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, ChevronLeft,
  ZoomIn, Check, Minus, Plus, Sparkles, Camera, FileText, Award, Package, Ruler
} from 'lucide-react';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function ProductDetailView() {
  const productId = useStore((s) => s.selectedProductId);
  const product = productId ? getProductById(productId) : undefined;
  const navigate = useStore((s) => s.navigate);
  const addToCart = useStore((s) => s.addToCart);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const isWishlisted = useStore((s) => s.isWishlisted(productId || ''));

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedLens, setSelectedLens] = useState(LENS_TYPES[0].id);
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const imgRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-500">Product not found.</p>
        <Button onClick={() => navigate('shop')} className="mt-4 bg-italia-navy hover:bg-italia-blue">Back to Shop</Button>
      </div>
    );
  }

  const lens = LENS_TYPES.find((l) => l.id === selectedLens)!;
  const finalPrice = product.price + lens.price;

  const handleAddToCart = () => {
    addToCart(product, quantity, lens.name, lens.price);
    toast.success(`${product.name} added to cart`);
    navigate('cart');
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, lens.name, lens.price);
    navigate('checkout');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const related = PRODUCTS.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigate('home')} className="hover:text-italia-blue">Home</button>
          <span>/</span>
          <button onClick={() => navigate('shop', null, product.categorySlug)} className="hover:text-italia-blue capitalize">
            {product.categorySlug.replace('-', ' ')}
          </button>
          <span>/</span>
          <span className="text-italia-navy font-medium truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-8">
        <button onClick={() => navigate('shop', null, product.categorySlug)} className="flex items-center gap-1 text-sm text-italia-navy hover:text-italia-blue mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to {product.categorySlug.replace('-', ' ')}
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image gallery */}
          <div>
            <div
              ref={imgRef}
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
              onMouseMove={handleMouseMove}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 cursor-zoom-in"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300"
                style={zoom ? { transform: `scale(2)`, transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : undefined}
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.discount > 0 && (
                  <Badge className="bg-italia-blue text-white shadow-md">{product.discount}% OFF</Badge>
                )}
                {product.isNew && <Badge className="bg-italia-gold text-white shadow-md">NEW</Badge>}
              </div>
              {/* Zoom hint */}
              <div className="absolute bottom-4 right-4 glass-card rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs text-italia-navy font-medium pointer-events-none">
                <ZoomIn className="w-3 h-3" /> Hover to zoom
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-italia-blue' : 'border-transparent hover:border-slate-300'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust badges */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { icon: Truck, label: 'Free Delivery' },
                { icon: RefreshCw, label: '7-Day Returns' },
                { icon: Shield, label: '1-Year Warranty' },
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white border border-slate-100 text-center">
                  <t.icon className="w-5 h-5 text-italia-blue" />
                  <span className="text-[10px] sm:text-xs font-medium text-slate-700">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-italia-gold font-semibold">{product.brand}</span>
              <Badge variant="outline" className="text-[10px] capitalize">{product.frameShape}</Badge>
              <Badge variant="outline" className="text-[10px] capitalize">{product.gender}</Badge>
            </div>

            <h1 className="font-serif-italia text-2xl lg:text-3xl font-bold text-italia-navy leading-tight mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${s <= Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-italia-navy">{product.rating}</span>
              <span className="text-sm text-slate-500">·</span>
              <button className="text-sm text-italia-blue hover:underline">{product.reviewCount} reviews</button>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-italia-navy">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="text-lg text-slate-400 line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{product.discount}% OFF</Badge>
            </div>
            <p className="text-xs text-slate-500 mb-4">Inclusive of all taxes · Free lens included</p>

            {/* Description */}
            <p className="text-sm text-slate-700 leading-relaxed mb-5">{product.description}</p>

            {/* Lens options */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-italia-navy mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-italia-gold" /> Lens Options
              </h3>
              <div className="space-y-2">
                {LENS_TYPES.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setSelectedLens(l.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-colors text-left ${
                      selectedLens === l.id ? 'border-italia-blue bg-italia-blue/5' : 'border-slate-200 hover:border-italia-blue/50'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-italia-navy">{l.name}</span>
                        {selectedLens === l.id && <Check className="w-4 h-4 text-italia-blue" />}
                      </div>
                      <p className="text-xs text-slate-500">{l.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-italia-navy">
                      {l.price === 0 ? 'Free' : `+₹${l.price}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-italia-navy mb-2">Quantity</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold text-italia-navy">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-slate-500">
                  Total: <span className="font-bold text-italia-navy">₹{(finalPrice * quantity).toLocaleString('en-IN')}</span>
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="flex-1 bg-italia-navy hover:bg-italia-blue text-white rounded-full h-12"
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
              </Button>
              <Button
                size="lg"
                onClick={handleBuyNow}
                className="flex-1 gradient-gold text-white hover:opacity-90 rounded-full h-12"
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => { toggleWishlist(product.id); toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist'); }}
                className="rounded-full h-12 px-4 border-italia-blue/40 hover:bg-italia-blue/10"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>

            {/* Quick actions */}
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => navigate('tryon')} className="rounded-full">
                <Camera className="w-4 h-4 mr-1.5" /> Try On
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate('prescription')} className="rounded-full">
                <FileText className="w-4 h-4 mr-1.5" /> Upload Prescription
              </Button>
            </div>

            {/* Stock indicator */}
            {product.stock < 20 && (
              <div className="mt-4 p-3 rounded-xl bg-orange-50 border border-orange-200">
                <p className="text-xs font-semibold text-orange-700">⚡ Only {product.stock} left in stock!</p>
              </div>
            )}
          </div>
        </div>

        {/* Details tabs */}
        <div className="mt-12">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="bg-white border border-slate-200 rounded-full p-1 h-auto">
              <TabsTrigger value="specs" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">Frame Details</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">Reviews ({product.reviews.length})</TabsTrigger>
              <TabsTrigger value="shipping" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-4">
              <Card className="p-6 border-slate-200">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    { label: 'Brand', value: product.brand, icon: Award },
                    { label: 'Frame Shape', value: product.frameShape, icon: Sparkles },
                    { label: 'Frame Color', value: product.frameColor, icon: Sparkles },
                    { label: 'Material', value: product.material, icon: Package },
                    { label: 'Gender', value: product.gender, icon: Sparkles },
                    { label: 'Size', value: product.size, icon: Ruler },
                    { label: 'Weight', value: product.weight, icon: Package },
                    { label: 'Category', value: product.categorySlug.replace('-', ' '), icon: Sparkles },
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <div className="flex items-center gap-2">
                        <spec.icon className="w-4 h-4 text-italia-blue" />
                        <span className="text-sm text-slate-500">{spec.label}</span>
                      </div>
                      <span className="text-sm font-semibold text-italia-navy capitalize">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-4">
              <Card className="p-6 border-slate-200">
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <div className="text-center sm:border-r sm:border-slate-200 sm:pr-6">
                    <p className="text-5xl font-bold text-italia-navy">{product.rating}</p>
                    <div className="flex gap-0.5 justify-center my-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={`w-4 h-4 ${s <= Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">{product.reviewCount} reviews</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const pct = star === 5 ? 72 : star === 4 ? 18 : star === 3 ? 7 : star === 2 ? 2 : 1;
                      return (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-xs text-slate-500 w-8">{star} ★</span>
                          <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full bg-amber-400" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-xs text-slate-500 w-8 text-right">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Separator className="mb-5" />
                <div className="space-y-4">
                  {product.reviews.map((r) => (
                    <div key={r.id} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <p className="text-sm font-semibold text-italia-navy">{r.userName}</p>
                          <div className="flex gap-0.5 my-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className={`w-3 h-3 ${s <= r.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-slate-400">{r.date}</span>
                      </div>
                      <p className="text-sm font-semibold text-italia-navy mb-1">{r.title}</p>
                      <p className="text-sm text-slate-600">{r.comment}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-4">
              <Card className="p-6 border-slate-200">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Truck, title: 'Free Shipping', desc: 'Free delivery on orders above ₹999. Standard delivery in 3-5 business days.' },
                    { icon: RefreshCw, title: '7-Day Returns', desc: 'Not satisfied? Return within 7 days for a full refund. No questions asked.' },
                    { icon: Shield, title: '1-Year Warranty', desc: 'All frames come with a 1-year manufacturer warranty against defects.' },
                    { icon: Package, title: 'COD Available', desc: 'Pay with cash on delivery. Online payments via Razorpay (UPI, Cards, Net Banking).' },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-italia-ivory">
                      <div className="w-10 h-10 rounded-xl bg-italia-blue/10 flex items-center justify-center flex-shrink-0">
                        <s.icon className="w-5 h-5 text-italia-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-italia-navy mb-0.5">{s.title}</p>
                        <p className="text-xs text-slate-600">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif-italia text-2xl font-bold text-italia-navy mb-4">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
