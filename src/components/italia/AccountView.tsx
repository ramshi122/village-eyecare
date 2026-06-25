'use client';

import { useStore } from '@/lib/store';
import { getProductById, STORE_INFO } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from './ProductCard';
import {
  User, Package, Heart, FileText, LogOut, MapPin, Clock,
  Mail, Phone, ChevronRight, Eye, Trash2, Plus
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function AccountView() {
  const navigate = useStore((s) => s.navigate);
  const user = useStore((s) => s.user);
  const login = useStore((s) => s.login);
  const logout = useStore((s) => s.logout);
  const orders = useStore((s) => s.orders);
  const wishlist = useStore((s) => s.wishlist);
  const prescriptions = useStore((s) => s.prescriptions);
  const removePrescription = useStore((s) => s.removePrescription);
  const adminUnlocked = useStore((s) => s.adminUnlocked);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error('Please fill all fields');
      return;
    }
    login(email, name);
    toast.success(mode === 'login' ? 'Logged in successfully' : 'Account created!');
  };

  // If not logged in, show auth
  if (!user) {
    return (
      <div className="animate-fade-in min-h-[70vh] bg-italia-ivory flex items-center justify-center px-4 py-10">
        <Card className="w-full max-w-md p-8 border-slate-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-2xl gradient-italia flex items-center justify-center mx-auto mb-3">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif-italia text-2xl font-bold text-italia-navy">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              {mode === 'login' ? 'Sign in to your Village Eyecare account' : 'Join Village Eyecare family today'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-xs">Full Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs">Email Address</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="pass" className="text-xs">Password</Label>
              <Input id="pass" type="password" placeholder="••••••••" className="mt-1" />
            </div>

            <Button type="submit" size="lg" className="w-full bg-italia-navy hover:bg-italia-blue rounded-full">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-sm text-italia-blue hover:underline"
            >
              {mode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-italia-gold/10 text-center">
            <p className="text-xs text-slate-600">
              💡 Tip: Use email <code className="font-mono text-italia-gold">admin@villageeyecare.com</code> to access admin panel
            </p>
          </div>
        </Card>
      </div>
    );
  }

  // Logged in dashboard
  const wishlistProducts = wishlist.map((w) => getProductById(w.productId)).filter(Boolean);

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Profile header */}
        <Card className="p-6 border-slate-200 mb-6 overflow-hidden relative">
          <div className="absolute inset-0 gradient-italia opacity-5" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-full gradient-italia flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <h1 className="font-serif-italia text-2xl font-bold text-italia-navy">{user.name}</h1>
              <p className="text-sm text-slate-500 flex items-center gap-1"><Mail className="w-3 h-3" /> {user.email}</p>
              {user.role === 'admin' && (
                <Badge className="mt-1 bg-italia-gold text-white border-0 hover:bg-italia-gold">Admin Access</Badge>
              )}
            </div>
            <div className="flex gap-2">
              {user.role === 'admin' && adminUnlocked && (
                <Button onClick={() => navigate('admin')} variant="outline" className="rounded-full">
                  Admin Panel
                </Button>
              )}
              <Button onClick={() => { logout(); toast.success('Logged out'); navigate('home'); }} variant="outline" className="rounded-full text-red-600 hover:bg-red-50">
                <LogOut className="w-4 h-4 mr-1.5" /> Logout
              </Button>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="bg-white border border-slate-200 rounded-full p-1 h-auto flex flex-wrap gap-1">
            <TabsTrigger value="orders" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <Package className="w-4 h-4 mr-1.5" /> Orders ({orders.length})
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <Heart className="w-4 h-4 mr-1.5" /> Wishlist ({wishlist.length})
            </TabsTrigger>
            <TabsTrigger value="prescriptions" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-1.5" /> Prescriptions ({prescriptions.length})
            </TabsTrigger>
            <TabsTrigger value="profile" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <User className="w-4 h-4 mr-1.5" /> Profile
            </TabsTrigger>
          </TabsList>

          {/* Orders tab */}
          <TabsContent value="orders" className="mt-4">
            {orders.length === 0 ? (
              <Card className="p-10 text-center border-slate-200">
                <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-italia-navy mb-1">No orders yet</h3>
                <p className="text-sm text-slate-500 mb-4">Your order history will appear here</p>
                <Button onClick={() => navigate('shop')} className="bg-italia-navy hover:bg-italia-blue rounded-full">Start Shopping</Button>
              </Card>
            ) : (
              <div className="space-y-3">
                {orders.map((order) => (
                  <motion.div key={order.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <Card className="p-5 border-slate-200">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-mono font-bold text-italia-navy">{order.orderNumber}</p>
                            <Badge className={`${
                              order.orderStatus === 'delivered' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                              order.orderStatus === 'shipped' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' :
                              order.orderStatus === 'cancelled' ? 'bg-red-100 text-red-700 hover:bg-red-100' :
                              'bg-amber-100 text-amber-700 hover:bg-amber-100'
                            } capitalize`}>{order.orderStatus}</Badge>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Placed on {new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-italia-navy">₹{order.total.toLocaleString('en-IN')}</p>
                          <p className="text-xs text-slate-500 capitalize">{order.paymentMethod} · {order.paymentStatus}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                        {order.items.map((item) => (
                          <div key={`${item.productId}-${item.lensType}`} className="flex-shrink-0 flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                            <img src={item.image} alt={item.name} className="w-10 h-10 rounded object-cover" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-italia-navy line-clamp-1 max-w-[150px]">{item.name}</p>
                              <p className="text-[10px] text-slate-500">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Wishlist tab */}
          <TabsContent value="wishlist" className="mt-4">
            {wishlistProducts.length === 0 ? (
              <Card className="p-10 text-center border-slate-200">
                <Heart className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-italia-navy mb-1">Your wishlist is empty</h3>
                <p className="text-sm text-slate-500 mb-4">Tap the heart icon on products to save them</p>
                <Button onClick={() => navigate('shop')} className="bg-italia-navy hover:bg-italia-blue rounded-full">Discover Products</Button>
              </Card>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {wishlistProducts.map((p, i) => p && <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            )}
          </TabsContent>

          {/* Prescriptions tab */}
          <TabsContent value="prescriptions" className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif-italia text-lg font-bold text-italia-navy">Saved Prescriptions</h3>
              <Button onClick={() => navigate('prescription')} className="bg-italia-navy hover:bg-italia-blue rounded-full">
                <Plus className="w-4 h-4 mr-1.5" /> Add New
              </Button>
            </div>
            {prescriptions.length === 0 ? (
              <Card className="p-10 text-center border-slate-200">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-italia-navy mb-1">No prescriptions saved</h3>
                <p className="text-sm text-slate-500 mb-4">Upload your prescription to save it for future orders</p>
                <Button onClick={() => navigate('prescription')} className="bg-italia-navy hover:bg-italia-blue rounded-full">Upload Prescription</Button>
              </Card>
            ) : (
              <div className="space-y-3">
                {prescriptions.map((rx) => (
                  <Card key={rx.id} className="p-4 border-slate-200">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex gap-3 flex-1">
                        {rx.imageUrl && (
                          <img src={rx.imageUrl} alt="Prescription" className="w-16 h-16 rounded-lg object-cover" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-italia-navy flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> {new Date(rx.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </p>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 mt-2 text-xs text-slate-600">
                            <p>Right SPH: <span className="font-semibold text-italia-navy">{rx.rightSPH || 'N/A'}</span></p>
                            <p>Left SPH: <span className="font-semibold text-italia-navy">{rx.leftSPH || 'N/A'}</span></p>
                            {rx.rightCYL && <p>Right CYL: <span className="font-semibold text-italia-navy">{rx.rightCYL}</span></p>}
                            {rx.leftCYL && <p>Left CYL: <span className="font-semibold text-italia-navy">{rx.leftCYL}</span></p>}
                            {rx.pd && <p className="col-span-2">PD: <span className="font-semibold text-italia-navy">{rx.pd}</span></p>}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => { removePrescription(rx.id); toast.success('Prescription removed'); }}
                        className="text-slate-400 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Profile tab */}
          <TabsContent value="profile" className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-5 border-slate-200">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-4">Personal Information</h3>
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs">Full Name</Label>
                    <Input value={user.name} readOnly className="mt-1 bg-slate-50" />
                  </div>
                  <div>
                    <Label className="text-xs">Email</Label>
                    <Input value={user.email} readOnly className="mt-1 bg-slate-50" />
                  </div>
                  <div>
                    <Label className="text-xs">Phone</Label>
                    <Input placeholder="Not set" readOnly className="mt-1 bg-slate-50" />
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 rounded-full" onClick={() => toast.info('Profile editing coming soon')}>
                  Edit Profile
                </Button>
              </Card>

              <Card className="p-5 border-slate-200">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-4">Store Contact</h3>
                <div className="space-y-3 text-sm">
                  <a href={`tel:${STORE_INFO.phoneRaw}`} className="flex items-center gap-3 text-slate-700 hover:text-italia-blue">
                    <Phone className="w-4 h-4 text-italia-blue" /> {STORE_INFO.phone}
                  </a>
                  <a href={`mailto:${STORE_INFO.email}`} className="flex items-center gap-3 text-slate-700 hover:text-italia-blue">
                    <Mail className="w-4 h-4 text-italia-blue" /> {STORE_INFO.email}
                  </a>
                  <p className="flex items-start gap-3 text-slate-700">
                    <MapPin className="w-4 h-4 text-italia-blue mt-0.5" />
                    <span>{STORE_INFO.address.line1}, {STORE_INFO.address.line2}, {STORE_INFO.address.city} - {STORE_INFO.address.pincode}, {STORE_INFO.address.state}</span>
                  </p>
                  <p className="flex items-center gap-3 text-slate-700">
                    <Clock className="w-4 h-4 text-italia-blue" /> {STORE_INFO.hours}
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-4 rounded-full bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                >
                  <a href={`https://wa.me/${STORE_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
