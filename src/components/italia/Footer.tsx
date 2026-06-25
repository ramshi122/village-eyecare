'use client';

import { useStore } from '@/lib/store';
import { STORE_INFO, CATEGORIES } from '@/lib/data';
import { Phone, Mail, MapPin, Instagram, Clock, Glasses, MessageCircle } from 'lucide-react';

export function Footer() {
  const navigate = useStore((s) => s.navigate);

  return (
    <footer className="mt-auto bg-italia-navy text-white">
      {/* Top CTA strip */}
      <div className="gradient-royal py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-serif-italia text-xl font-bold">Need Help Choosing?</h3>
            <p className="text-sm text-white/80">Our optical experts are one message away</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Italia%20Optical%2C%20I%20need%20help%20choosing%20frames`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-600 transition-colors font-medium text-sm shadow-lg"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-italia-navy hover:bg-italia-ivory transition-colors font-medium text-sm shadow-lg"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                <Glasses className="w-5 h-5 text-italia-gold" />
              </div>
              <div>
                <h2 className="font-serif-italia text-lg font-bold leading-none">Village Eyecare</h2>
                <p className="text-[10px] uppercase tracking-wider text-italia-gold mt-1">See Better Than Yesterday</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-4 max-w-xs">
              Your trusted premium eyewear destination in Karnal. Quality frames, expert advice, and personalized eye care since day one.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${STORE_INFO.phoneRaw}`} className="flex items-center gap-2 text-white/80 hover:text-italia-gold transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" /> {STORE_INFO.phone}
              </a>
              <a href={`mailto:${STORE_INFO.email}`} className="flex items-center gap-2 text-white/80 hover:text-italia-gold transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" /> {STORE_INFO.email}
              </a>
              <a href={STORE_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-italia-gold transition-colors">
                <Instagram className="w-4 h-4 flex-shrink-0" /> {STORE_INFO.instagram}
              </a>
              <p className="flex items-start gap-2 text-white/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {STORE_INFO.address.line1},<br />
                  {STORE_INFO.address.line2},<br />
                  {STORE_INFO.address.city} - {STORE_INFO.address.pincode}, {STORE_INFO.address.state}
                </span>
              </p>
              <p className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4 flex-shrink-0" /> {STORE_INFO.hours}
              </p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-3 text-italia-gold">Shop</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button onClick={() => navigate('shop', null, cat.slug)} className="hover:text-white transition-colors text-left">
                    {cat.name}
                  </button>
                </li>
              ))}
              <li><button onClick={() => navigate('shop')} className="hover:text-white transition-colors">View All</button></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-3 text-italia-gold">Help</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><button onClick={() => navigate('tryon')} className="hover:text-white transition-colors">Virtual Try-On</button></li>
              <li><button onClick={() => navigate('prescription')} className="hover:text-white transition-colors">Upload Prescription</button></li>
              <li><button onClick={() => navigate('orders')} className="hover:text-white transition-colors">Track Order</button></li>
              <li><button onClick={() => navigate('account')} className="hover:text-white transition-colors">My Account</button></li>
              <li><button onClick={() => navigate('cart')} className="hover:text-white transition-colors">Cart</button></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-3 text-italia-gold">Policies</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><button className="hover:text-white transition-colors">Shipping Policy</button></li>
              <li><button className="hover:text-white transition-colors">Return & Refund</button></li>
              <li><button className="hover:text-white transition-colors">Warranty</button></li>
              <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        {/* Payment & trust */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span>We Accept:</span>
            <div className="flex gap-1.5">
              {['VISA', 'MC', 'UPI', 'COD'].map((p) => (
                <span key={p} className="px-2 py-1 rounded bg-white/10 text-[10px] font-semibold">{p}</span>
              ))}
              <span className="px-2 py-1 rounded bg-white/10 text-[10px] font-semibold text-italia-gold">Razorpay</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span className="flex items-center gap-1">Secure Payments</span>
            <span>·</span>
            <span className="flex items-center gap-1">7-Day Returns</span>
            <span>·</span>
            <span className="flex items-center gap-1">Fast Delivery</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Village Eyecare · All rights reserved · Made with care in Karnal, Haryana
        </div>
      </div>
    </footer>
  );
}
