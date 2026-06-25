'use client';

import { useStore, useCartCount } from '@/lib/store';
import { STORE_INFO, CATEGORIES } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Search, ShoppingCart, Heart, User, Menu, Glasses, Phone, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

export function Header() {
  const navigate = useStore((s) => s.navigate);
  const setSearchOpen = useStore((s) => s.setSearchOpen);
  const cartCount = useCartCount();
  const wishlist = useStore((s) => s.wishlist);
  const user = useStore((s) => s.user);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 5-tap logo → password prompt → admin panel (secret access)
  const tapCountRef = useRef(0);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openPasswordPrompt = useStore((s) => s.openPasswordPrompt);
  const adminUnlocked = useStore((s) => s.adminUnlocked);

  const handleLogoClick = () => {
    tapCountRef.current += 1;

    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    tapTimerRef.current = setTimeout(() => {
      tapCountRef.current = 0;
    }, 1500);

    if (tapCountRef.current >= 5) {
      tapCountRef.current = 0;
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
      if (adminUnlocked) {
        toast.success('Welcome back, Admin!', { duration: 1500 });
        navigate('admin');
      } else {
        toast.info('Enter admin password to continue', { duration: 1500 });
        openPasswordPrompt();
      }
      return;
    }

    if (tapCountRef.current === 3) {
      toast.info(`${5 - tapCountRef.current} more taps for admin`, { duration: 1000 });
    }

    // Navigate home only on first tap
    if (tapCountRef.current === 1) {
      navigate('home');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      useStore.getState().setSearchQuery(searchQuery);
      navigate('shop');
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-italia-navy text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-90">
              <Phone className="w-3 h-3" /> {STORE_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3 h-3" /> Karnal, Haryana
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-90">Free Shipping above ₹999 · COD Available</span>
            <button
              onClick={() => navigate(user?.role === 'admin' ? 'admin' : 'account')}
              className="hover:text-italia-gold transition-colors"
            >
              {user ? `Hi, ${user.name.split(' ')[0]}` : 'Login / Register'}
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 glass border-b border-white/30 shadow-italia">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 group flex-shrink-0 select-none"
              title="Village Eyecare"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl gradient-italia flex items-center justify-center shadow-italia group-hover:scale-105 transition-transform">
                <Glasses className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="hidden sm:block text-left">
                <h1 className="font-serif-italia text-lg lg:text-xl font-bold text-italia-navy leading-none tracking-tight">
                  Village Eyecare
                </h1>
                <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-0.5">
                  See Better Than Yesterday
                </p>
              </div>
            </button>

            {/* Search bar - desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl items-center">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search eyeglasses, sunglasses, lenses..."
                  className="pl-10 pr-4 h-11 bg-white/80 border-slate-200 focus-visible:ring-italia-blue rounded-full"
                />
              </div>
            </form>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="md:hidden text-italia-navy hover:bg-italia-blue/10"
              >
                <Search className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('tryon')}
                className="hidden sm:flex text-italia-navy hover:bg-italia-blue/10"
                title="Virtual Try-On"
              >
                <Glasses className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('wishlist')}
                className="relative text-italia-navy hover:bg-italia-blue/10"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-italia-gold text-white text-[10px] border-0">
                    {wishlist.length}
                  </Badge>
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('cart')}
                className="relative text-italia-navy hover:bg-italia-blue/10"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-italia-blue text-white text-[10px] border-0">
                    {cartCount}
                  </Badge>
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(user?.role === 'admin' ? 'admin' : 'account')}
                className="text-italia-navy hover:bg-italia-blue/10"
              >
                <User className="w-5 h-5" />
              </Button>

              {/* Mobile menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden text-italia-navy">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-white p-0">
                  <SheetHeader className="p-4 border-b">
                    <SheetTitle className="font-serif-italia text-italia-navy flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg gradient-italia flex items-center justify-center">
                        <Glasses className="w-4 h-4 text-white" />
                      </div>
                      Village Eyecare
                    </SheetTitle>
                  </SheetHeader>
                  <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Shop by Category</p>
                    <nav className="space-y-1">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => { navigate('shop', null, cat.slug); setMobileOpen(false); }}
                          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-italia-blue/10 text-sm font-medium text-italia-navy transition-colors flex items-center justify-between"
                        >
                          {cat.name}
                          <span className="text-slate-400">→</span>
                        </button>
                      ))}
                    </nav>

                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-5 mb-2">Quick Links</p>
                    <nav className="space-y-1">
                      <button onClick={() => { navigate('tryon'); setMobileOpen(false); }} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-italia-blue/10 text-sm font-medium text-italia-navy">Virtual Try-On</button>
                      <button onClick={() => { navigate('prescription'); setMobileOpen(false); }} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-italia-blue/10 text-sm font-medium text-italia-navy">Upload Prescription</button>
                      <button onClick={() => { navigate('orders'); setMobileOpen(false); }} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-italia-blue/10 text-sm font-medium text-italia-navy">Track Order</button>
                      <button onClick={() => { navigate('account'); setMobileOpen(false); }} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-italia-blue/10 text-sm font-medium text-italia-navy">My Account</button>
                      <button onClick={() => { navigate('admin'); setMobileOpen(false); }} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-italia-blue/10 text-sm font-medium text-italia-navy">Admin Panel</button>
                    </nav>

                    <div className="mt-5 p-3 rounded-xl bg-italia-mist">
                      <p className="text-xs text-slate-600 flex items-center gap-2 mb-1">
                        <Phone className="w-3 h-3" /> {STORE_INFO.phone}
                      </p>
                      <p className="text-xs text-slate-600 flex items-start gap-2">
                        <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span>{STORE_INFO.address.line1}, {STORE_INFO.address.city} - {STORE_INFO.address.pincode}</span>
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Category nav - desktop */}
        <nav className="hidden lg:block border-t border-white/30 bg-white/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-1 h-11">
              <button
                onClick={() => navigate('shop')}
                className="px-3 py-1.5 text-sm font-medium text-italia-navy hover:text-italia-blue hover:bg-italia-blue/5 rounded-md transition-colors"
              >
                All Products
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigate('shop', null, cat.slug)}
                  className="px-3 py-1.5 text-sm font-medium text-italia-navy hover:text-italia-blue hover:bg-italia-blue/5 rounded-md transition-colors whitespace-nowrap"
                >
                  {cat.name}
                </button>
              ))}
              <span className="w-px h-5 bg-slate-300 mx-2" />
              <button
                onClick={() => navigate('tryon')}
                className="px-3 py-1.5 text-sm font-medium text-italia-gold hover:bg-italia-gold/10 rounded-md transition-colors"
              >
                ✨ Virtual Try-On
              </button>
              <button
                onClick={() => navigate('prescription')}
                className="px-3 py-1.5 text-sm font-medium text-italia-gold hover:bg-italia-gold/10 rounded-md transition-colors"
              >
                📋 Prescription
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
