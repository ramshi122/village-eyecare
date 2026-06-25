'use client';

import { useStore } from '@/lib/store';
import { STORE_INFO, CATEGORIES, getFeaturedProducts, getNewArrivals, getBestSellers, getOfferProducts, OFFERS } from '@/lib/data';
import { ProductCard } from './ProductCard';
import { FrameShapeFinder } from './FrameShapeFinder';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Glasses, Sun, Eye, SunMedium, Monitor, Baby, Package,
  ArrowRight, Sparkles, Camera, FileText, Truck, Shield,
  Award, ChevronLeft, ChevronRight, Star, Quote, Phone
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  glasses: Glasses,
  sun: Sun,
  eye: Eye,
  'sun-medium': SunMedium,
  monitor: Monitor,
  baby: Baby,
  package: Package,
};

const HERO_SLIDES = [
  {
    title: 'Premium Eyewear, Italian Craft',
    subtitle: 'Handcrafted frames at up to 50% OFF',
    description: 'Discover our exclusive collection of Italian-inspired eyewear. From classic acetates to lightweight titanium, find your perfect pair.',
    cta: 'Shop Eyeglasses',
    category: 'eyeglasses' as const,
    bg: 'gradient-hero',
    image: 'https://sfile.chatglm.cn/images-ppt/d8064ece8e71.jpg',
  },
  {
    title: 'Step Into the Sun',
    subtitle: 'Polarized Sunglasses from ₹1,799',
    description: 'UV400 protection meets designer style. Aviators, wayfarers, oversized glam — find your signature shade.',
    cta: 'Shop Sunglasses',
    category: 'sunglasses' as const,
    bg: 'gradient-royal',
    image: 'https://sfile.chatglm.cn/images-ppt/ba465e5bfa1c.jpg',
  },
  {
    title: 'Try Before You Buy',
    subtitle: 'Virtual Try-On with AI',
    description: 'Use your camera or upload a photo to see how any frame looks on your face. Zero risk, all style.',
    cta: 'Try On Now',
    action: 'tryon' as const,
    bg: 'gradient-italia',
    image: 'https://sfile.chatglm.cn/images-ppt/822d54cbb1f7.webp',
  },
];

export function HomeView() {
  const navigate = useStore((s) => s.navigate);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const featured = getFeaturedProducts().slice(0, 8);
  const newArrivals = getNewArrivals().slice(0, 4);
  const bestSellers = getBestSellers().slice(0, 8);
  const offers = getOfferProducts().slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* ===== HERO CAROUSEL ===== */}
      <section className="relative">
        <div className="relative h-[500px] sm:h-[560px] lg:h-[620px] overflow-hidden">
          {HERO_SLIDES.map((slide, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                opacity: idx === currentSlide ? 1 : 0,
                scale: idx === currentSlide ? 1 : 1.05,
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className={`absolute inset-0 ${slide.bg}`}
            >
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-italia-gold blur-3xl" />
              </div>

              <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                  {/* Text */}
                  <div className="text-white space-y-4 lg:space-y-6 max-w-xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: idx === currentSlide ? 1 : 0, y: idx === currentSlide ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Badge className="bg-italia-gold/90 text-white border-0 mb-3 hover:bg-italia-gold">
                        <Sparkles className="w-3 h-3 mr-1" /> {slide.subtitle}
                      </Badge>
                      <h1 className="font-serif-italia text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                        {slide.title}
                      </h1>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: idx === currentSlide ? 1 : 0, y: idx === currentSlide ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className="text-base sm:text-lg text-white/85 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: idx === currentSlide ? 1 : 0, y: idx === currentSlide ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex flex-wrap gap-3 pt-2"
                    >
                      <Button
                        size="lg"
                        onClick={() => slide.action === 'tryon' ? navigate('tryon') : navigate('shop', null, slide.category)}
                        className="bg-white text-italia-navy hover:bg-italia-gold hover:text-white shadow-italia-lg rounded-full px-7"
                      >
                        {slide.cta} <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => navigate('shop')}
                        className="bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20 hover:text-white rounded-full px-7"
                      >
                        Explore Collection
                      </Button>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: idx === currentSlide ? 1 : 0,
                      scale: idx === currentSlide ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="hidden lg:block relative"
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-italia-navy/40 to-transparent" />
                    </div>
                    {/* Floating badge */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -bottom-5 -left-5 glass-card rounded-2xl p-4 shadow-italia-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Premium Quality</p>
                          <p className="text-sm font-bold text-italia-navy">Italian Design</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark text-white flex items-center justify-center hover:bg-italia-blue/50 transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark text-white flex items-center justify-center hover:bg-italia-blue/50 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 bg-italia-gold' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUE PROPS ===== */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹999' },
              { icon: Shield, title: '7-Day Returns', desc: 'No-questions refund' },
              { icon: Award, title: 'Genuine Quality', desc: '100% authentic frames' },
              { icon: Camera, title: 'Virtual Try-On', desc: 'See before you buy' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-italia-blue/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-italia-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-italia-navy">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="max-w-7xl mx-auto px-4 py-10 lg:py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-italia-gold font-semibold mb-1">Shop By</p>
            <h2 className="font-serif-italia text-2xl sm:text-3xl font-bold text-italia-navy">Categories</h2>
          </div>
          <Button variant="ghost" onClick={() => navigate('shop')} className="text-italia-blue hover:text-italia-navy">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.icon] || Glasses;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => navigate('shop', null, cat.slug)}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-slate-100 hover:border-italia-blue/40 hover:shadow-italia transition-all"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-italia flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-italia-navy text-center">{cat.name}</span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* ===== FEATURED ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-10 lg:pb-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-italia-gold font-semibold mb-1">Handpicked</p>
            <h2 className="font-serif-italia text-2xl sm:text-3xl font-bold text-italia-navy">Featured Products</h2>
          </div>
          <Button variant="ghost" onClick={() => navigate('shop')} className="text-italia-blue hover:text-italia-navy">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* ===== VIRTUAL TRY-ON CTA ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-10 lg:pb-14">
        <Card className="overflow-hidden border-0 shadow-italia-lg">
          <div className="grid md:grid-cols-2">
            <div className="gradient-hero p-8 lg:p-12 text-white flex flex-col justify-center">
              <Badge className="bg-italia-gold/90 text-white border-0 self-start mb-3 hover:bg-italia-gold">
                <Sparkles className="w-3 h-3 mr-1" /> AI Powered
              </Badge>
              <h2 className="font-serif-italia text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                Try Before You Buy
              </h2>
              <p className="text-white/85 mb-6 leading-relaxed">
                Use our AI-powered virtual try-on to see how any frame looks on your face. Upload a photo or use your camera — no app required.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={() => navigate('tryon')} className="bg-white text-italia-navy hover:bg-italia-gold hover:text-white rounded-full px-6">
                  <Camera className="w-4 h-4 mr-1.5" /> Start Try-On
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('prescription')} className="bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20 hover:text-white rounded-full px-6">
                  <FileText className="w-4 h-4 mr-1.5" /> Upload Prescription
                </Button>
              </div>
            </div>
            <div className="relative bg-italia-ivory min-h-[280px] md:min-h-full flex items-center justify-center p-6">
              <div className="relative w-full max-w-sm aspect-square">
                <img src="https://sfile.chatglm.cn/images-ppt/d8064ece8e71.jpg" alt="Virtual Try-On Demo" className="rounded-2xl shadow-xl w-full h-full object-cover" />
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 right-4 glass-card rounded-full px-3 py-1.5 flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-italia-navy">Live Preview</span>
                </motion.div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-10 lg:pb-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-italia-gold font-semibold mb-1">Just In</p>
            <h2 className="font-serif-italia text-2xl sm:text-3xl font-bold text-italia-navy">New Arrivals</h2>
          </div>
          <Button variant="ghost" onClick={() => navigate('shop')} className="text-italia-blue hover:text-italia-navy">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {newArrivals.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* ===== OFFERS ===== */}
      <section className="bg-italia-navy py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-italia-gold font-semibold mb-2">Limited Time</p>
            <h2 className="font-serif-italia text-2xl sm:text-3xl font-bold text-white">Offers & Discounts</h2>
            <p className="text-white/70 text-sm mt-2 max-w-md mx-auto">Save big on premium eyewear. Use these coupons at checkout.</p>
          </div>

          {/* Coupon codes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {OFFERS.map((offer, i) => (
              <motion.div
                key={offer.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark rounded-2xl p-4 border border-italia-gold/30 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-italia-gold/10 blur-xl" />
                <Badge className="bg-italia-gold text-italia-navy border-0 mb-2 hover:bg-italia-gold">{offer.title}</Badge>
                <p className="text-sm text-white/80 mb-2">{offer.description}</p>
                <div className="flex items-center gap-2">
                  <code className="px-2 py-1 rounded bg-white/10 text-italia-gold text-xs font-mono font-bold">{offer.code}</code>
                  <span className="text-[10px] text-white/50 uppercase">Code</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Offer products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {offers.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEST SELLERS ===== */}
      <section className="max-w-7xl mx-auto px-4 py-10 lg:py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-italia-gold font-semibold mb-1">Most Loved</p>
            <h2 className="font-serif-italia text-2xl sm:text-3xl font-bold text-italia-navy">Best Sellers</h2>
          </div>
          <Button variant="ghost" onClick={() => navigate('shop')} className="text-italia-blue hover:text-italia-navy">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {bestSellers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* ===== AI FRAME SHAPE FINDER ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-10 lg:pb-14">
        <FrameShapeFinder />
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-italia-ivory py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-italia-gold font-semibold mb-2">Customer Stories</p>
            <h2 className="font-serif-italia text-2xl sm:text-3xl font-bold text-italia-navy">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: 'Ananya Verma', role: 'Karnal', rating: 5, text: 'Got my first pair of progressive lenses from Italia Optical. The staff was super helpful and the frame quality is amazing. Highly recommend!' },
              { name: 'Rajesh Khurana', role: 'Panipat', rating: 5, text: 'Best optical store in the region. Wide variety, fair pricing, and quick service. The virtual try-on made choosing frames so easy.' },
              { name: 'Meera Kapoor', role: 'Karnal', rating: 5, text: 'Purchased sunglasses for my whole family. The discounts were incredible and delivery was fast. My go-to optical store now.' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-6 shadow-italia border border-slate-100 relative"
              >
                <Quote className="w-8 h-8 text-italia-gold/40 absolute top-4 right-4" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-italia flex items-center justify-center text-white font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-italia-navy">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORE INFO ===== */}
      <section className="max-w-7xl mx-auto px-4 py-10 lg:py-14">
        <Card className="overflow-hidden border-0 shadow-italia-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12">
              <Badge className="bg-italia-blue/10 text-italia-blue border-0 mb-3 hover:bg-italia-blue/10">Visit Us</Badge>
              <h2 className="font-serif-italia text-2xl lg:text-3xl font-bold text-italia-navy mb-4">
                Our Store in Karnal
              </h2>
              <div className="space-y-3 text-sm text-slate-700">
                <p className="flex items-start gap-2">
                  <span className="font-semibold text-italia-navy min-w-[70px]">Address:</span>
                  <span>{STORE_INFO.address.line1}, {STORE_INFO.address.line2}, {STORE_INFO.address.city} - {STORE_INFO.address.pincode}, {STORE_INFO.address.state}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-italia-navy min-w-[70px]">Phone:</span>
                  <a href={`tel:${STORE_INFO.phoneRaw}`} className="text-italia-blue hover:underline">{STORE_INFO.phone}</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-italia-navy min-w-[70px]">Email:</span>
                  <a href={`mailto:${STORE_INFO.email}`} className="text-italia-blue hover:underline">{STORE_INFO.email}</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-italia-navy min-w-[70px]">Hours:</span>
                  <span>{STORE_INFO.hours}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button asChild className="bg-italia-navy hover:bg-italia-blue rounded-full">
                  <a href={`https://wa.me/${STORE_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-1.5" /> WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild className="rounded-full border-italia-blue/40 text-italia-navy hover:bg-italia-blue/10">
                  <a href={STORE_INFO.instagramUrl} target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[280px] bg-italia-mist">
              <iframe
                title="Italia Optical Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.96%2C29.66%2C77.02%2C29.70&layer=mapnik&marker=29.6854%2C76.9905"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
