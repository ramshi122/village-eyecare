'use client';

import { useStore } from '@/lib/store';
import { PRODUCTS, CATEGORIES, OFFERS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  LayoutDashboard, Package, ShoppingBag, Users, BarChart3, Tag,
  Plus, Search, Edit, Trash2, TrendingUp, IndianRupee, Clock, Check,
  X, ChevronLeft, Settings, AlertTriangle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';

export function AdminView() {
  const navigate = useStore((s) => s.navigate);
  const user = useStore((s) => s.user);
  const adminProducts = useStore((s) => s.adminProducts);
  const adminOrders = useStore((s) => s.adminOrders);
  const updateOrderStatus = useStore((s) => s.updateOrderStatus);
  const addProduct = useStore((s) => s.addProduct);
  const updateProduct = useStore((s) => s.updateProduct);
  const deleteProduct = useStore((s) => s.deleteProduct);

  const [search, setSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showProductForm, setShowProductForm] = useState(false);

  const stats = {
    totalRevenue: adminOrders.filter((o) => o.paymentStatus === 'paid').reduce((s, o) => s + o.total, 0) + 245680,
    totalOrders: adminOrders.length + 156,
    pendingOrders: adminOrders.filter((o) => o.orderStatus === 'placed' || o.orderStatus === 'confirmed').length + 8,
    totalCustomers: 142,
    totalProducts: adminProducts.length,
    lowStock: adminProducts.filter((p) => p.stock < 20).length,
  };

  // Auto-login as admin if no user (5-tap secret access)
  const login = useStore((s) => s.login);
  useEffect(() => {
    if (!user) {
      login('admin@villageeyecare.com', 'Store Admin');
    }
  }, [user, login]);

  // Show loading while auto-logging in
  if (!user || user.role !== 'admin') {
    return (
      <div className="animate-fade-in min-h-[70vh] flex items-center justify-center px-4">
        <Card className="max-w-md p-8 border-slate-200 text-center">
          <div className="w-16 h-16 rounded-2xl bg-italia-blue/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Settings className="w-8 h-8 text-italia-blue animate-spin" />
          </div>
          <h1 className="font-serif-italia text-2xl font-bold text-italia-navy mb-2">Loading Admin Panel...</h1>
          <p className="text-sm text-slate-500">Please wait</p>
        </Card>
      </div>
    );
  }

  const filteredProducts = adminProducts.filter(
    (p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase())
  );

  const handleSaveProduct = (product: Product) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, product);
      toast.success('Product updated');
    } else {
      addProduct(product);
      toast.success('Product added');
    }
    setEditingProduct(null);
    setShowProductForm(false);
  };

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 text-sm text-italia-navy hover:text-italia-blue mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to Store
        </button>

        <div className="flex items-center justify-between mb-6">
          <div>
            <Badge className="bg-italia-gold text-white border-0 hover:bg-italia-gold mb-1">Admin Panel</Badge>
            <h1 className="font-serif-italia text-2xl lg:text-3xl font-bold text-italia-navy">Village Eyecare Dashboard</h1>
          </div>
          <Button onClick={() => navigate('account')} variant="outline" className="rounded-full">
            <Settings className="w-4 h-4 mr-1.5" /> Settings
          </Button>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="bg-white border border-slate-200 rounded-full p-1 h-auto flex flex-wrap gap-1 overflow-x-auto no-scrollbar">
            <TabsTrigger value="dashboard" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <LayoutDashboard className="w-4 h-4 mr-1.5" /> Dashboard
            </TabsTrigger>
            <TabsTrigger value="products" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <Package className="w-4 h-4 mr-1.5" /> Products
            </TabsTrigger>
            <TabsTrigger value="orders" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <ShoppingBag className="w-4 h-4 mr-1.5" /> Orders
            </TabsTrigger>
            <TabsTrigger value="customers" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-1.5" /> Customers
            </TabsTrigger>
            <TabsTrigger value="reports" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <BarChart3 className="w-4 h-4 mr-1.5" /> Reports
            </TabsTrigger>
            <TabsTrigger value="offers" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <Tag className="w-4 h-4 mr-1.5" /> Offers
            </TabsTrigger>
          </TabsList>

          {/* DASHBOARD */}
          <TabsContent value="dashboard" className="mt-4 space-y-4">
            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: 'Total Revenue', value: `₹${stats.totalRevenue.toLocaleString('en-IN')}`, icon: IndianRupee, color: 'bg-green-500', change: '+12%' },
                { label: 'Total Orders', value: stats.totalOrders, icon: ShoppingBag, color: 'bg-italia-blue', change: '+8%' },
                { label: 'Customers', value: stats.totalCustomers, icon: Users, color: 'bg-purple-500', change: '+15%' },
                { label: 'Products', value: stats.totalProducts, icon: Package, color: 'bg-italia-gold', change: '+3' },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <Card className="p-4 border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{stat.change}</Badge>
                    </div>
                    <p className="text-2xl font-bold text-italia-navy">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick info */}
            <div className="grid lg:grid-cols-3 gap-4">
              <Card className="lg:col-span-2 p-5 border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif-italia text-lg font-bold text-italia-navy">Sales Overview (Last 7 Days)</h3>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                {/* Simple bar chart */}
                <div className="flex items-end justify-between h-40 gap-2">
                  {[42, 58, 35, 70, 85, 65, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div className="w-full bg-gradient-to-t from-italia-navy to-italia-blue rounded-t-lg hover:opacity-80 transition-opacity" style={{ height: `${h}%` }} />
                      <span className="text-[10px] text-slate-500">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-5 border-slate-200">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span className="text-sm text-slate-700">Pending Orders</span>
                    </div>
                    <span className="font-bold text-italia-navy">{stats.pendingOrders}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-red-50">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-slate-700">Low Stock Items</span>
                    </div>
                    <span className="font-bold text-italia-navy">{stats.lowStock}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-green-50">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-slate-700">Delivered Today</span>
                    </div>
                    <span className="font-bold text-italia-navy">12</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent orders */}
            <Card className="p-5 border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy">Recent Orders</h3>
                <Button variant="ghost" size="sm" className="text-italia-blue">View All</Button>
              </div>
              {adminOrders.length === 0 ? (
                <p className="text-sm text-slate-500 text-center py-6">No recent orders</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order #</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {adminOrders.slice(0, 5).map((o) => (
                      <TableRow key={o.id}>
                        <TableCell className="font-mono text-xs">{o.orderNumber}</TableCell>
                        <TableCell>{o.customerName}</TableCell>
                        <TableCell className="font-semibold">₹{o.total.toLocaleString('en-IN')}</TableCell>
                        <TableCell>
                          <Badge className={`${
                            o.orderStatus === 'delivered' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                            o.orderStatus === 'shipped' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' :
                            'bg-amber-100 text-amber-700 hover:bg-amber-100'
                          } capitalize`}>{o.orderStatus}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Card>
          </TabsContent>

          {/* PRODUCTS */}
          <TabsContent value="products" className="mt-4">
            <Card className="p-5 border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 flex-1">
                  <div className="relative flex-1 max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="pl-10" />
                  </div>
                </div>
                <Button onClick={() => { setEditingProduct(null); setShowProductForm(true); }} className="bg-italia-navy hover:bg-italia-blue rounded-full">
                  <Plus className="w-4 h-4 mr-1.5" /> Add Product
                </Button>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((p) => (
                      <TableRow key={p.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-italia-navy line-clamp-1">{p.name}</p>
                              <p className="text-xs text-slate-500">{p.brand}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="capitalize text-xs">{p.categorySlug.replace('-', ' ')}</TableCell>
                        <TableCell className="font-semibold">₹{p.price.toLocaleString('en-IN')}</TableCell>
                        <TableCell>
                          <span className={p.stock < 20 ? 'text-red-600 font-semibold' : ''}>{p.stock}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1 flex-wrap">
                            {p.isFeatured && <Badge variant="secondary" className="text-[9px]">Featured</Badge>}
                            {p.isNew && <Badge className="text-[9px] bg-italia-gold text-white hover:bg-italia-gold">New</Badge>}
                            {p.isBestSeller && <Badge variant="secondary" className="text-[9px]">Best</Badge>}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-8 h-8 text-italia-blue hover:bg-italia-blue/10"
                              onClick={() => { setEditingProduct(p); setShowProductForm(true); }}
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-8 h-8 text-red-500 hover:bg-red-50"
                              onClick={() => { if (confirm(`Delete ${p.name}?`)) { deleteProduct(p.id); toast.success('Product deleted'); } }}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {showProductForm && (
              <ProductForm
                product={editingProduct}
                onSave={handleSaveProduct}
                onCancel={() => { setShowProductForm(false); setEditingProduct(null); }}
              />
            )}
          </TabsContent>

          {/* ORDERS */}
          <TabsContent value="orders" className="mt-4">
            <Card className="p-5 border-slate-200">
              <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-4">All Orders</h3>
              {adminOrders.length === 0 ? (
                <p className="text-sm text-slate-500 text-center py-6">No orders yet</p>
              ) : (
                <div className="space-y-3">
                  {adminOrders.map((o) => (
                    <Card key={o.id} className="p-4 border-slate-200">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-mono font-bold text-italia-navy text-sm">{o.orderNumber}</p>
                            <Badge className={`${
                              o.orderStatus === 'delivered' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                              o.orderStatus === 'shipped' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' :
                              o.orderStatus === 'cancelled' ? 'bg-red-100 text-red-700 hover:bg-red-100' :
                              'bg-amber-100 text-amber-700 hover:bg-amber-100'
                            } capitalize text-[10px]`}>{o.orderStatus}</Badge>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">{o.customerName} · {o.customerPhone}</p>
                          <p className="text-xs text-slate-500">{new Date(o.createdAt).toLocaleString('en-IN')}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-italia-navy">₹{o.total.toLocaleString('en-IN')}</p>
                          <p className="text-xs text-slate-500 capitalize">{o.paymentMethod} · {o.paymentStatus}</p>
                        </div>
                        <select
                          value={o.orderStatus}
                          onChange={(e) => { updateOrderStatus(o.id, e.target.value as any); toast.success('Status updated'); }}
                          className="text-xs px-2 py-1.5 rounded-md border border-input bg-background capitalize"
                        >
                          <option value="placed">Placed</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </Card>
          </TabsContent>

          {/* CUSTOMERS */}
          <TabsContent value="customers" className="mt-4">
            <Card className="p-5 border-slate-200">
              <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-4">Customers</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: 'Aarav Sharma', email: 'aarav@example.com', orders: 8, spent: 18450, status: 'VIP' },
                      { name: 'Priya Mehta', email: 'priya@example.com', orders: 5, spent: 12300, status: 'Active' },
                      { name: 'Rohit Gupta', email: 'rohit@example.com', orders: 3, spent: 7899, status: 'Active' },
                      { name: 'Sneha Reddy', email: 'sneha@example.com', orders: 2, spent: 4599, status: 'Regular' },
                      { name: 'Vikram Singh', email: 'vikram@example.com', orders: 1, spent: 2199, status: 'New' },
                    ].map((c, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{c.name}</TableCell>
                        <TableCell className="text-xs text-slate-500">{c.email}</TableCell>
                        <TableCell>{c.orders}</TableCell>
                        <TableCell className="font-semibold">₹{c.spent.toLocaleString('en-IN')}</TableCell>
                        <TableCell>
                          <Badge className={
                            c.status === 'VIP' ? 'bg-italia-gold text-white hover:bg-italia-gold' :
                            c.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                            c.status === 'New' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' :
                            'bg-slate-100 text-slate-700 hover:bg-slate-100'
                          }>{c.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* REPORTS */}
          <TabsContent value="reports" className="mt-4">
            <div className="grid lg:grid-cols-2 gap-4">
              <Card className="p-5 border-slate-200">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3">Sales by Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => {
                    const pct = Math.floor(Math.random() * 40) + 10;
                    return (
                      <div key={cat.id}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-italia-navy">{cat.name}</span>
                          <span className="text-slate-500">{pct}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full gradient-royal" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              <Card className="p-5 border-slate-200">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3">Monthly Revenue</h3>
                <div className="flex items-end justify-between h-48 gap-1.5">
                  {[35, 45, 38, 52, 60, 55, 70, 65, 78, 72, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full gradient-gold rounded-t hover:opacity-80" style={{ height: `${h}%` }} />
                      <span className="text-[9px] text-slate-500">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-5 border-slate-200 lg:col-span-2">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3">Top Selling Products</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Units Sold</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {PRODUCTS.slice(0, 5).map((p, i) => (
                      <TableRow key={p.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <img src={p.images[0]} alt={p.name} className="w-8 h-8 rounded object-cover" />
                            <span className="text-sm font-medium">{p.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{[124, 89, 156, 78, 67][i]}</TableCell>
                        <TableCell className="font-semibold">₹{[124 * p.price, 89 * p.price, 156 * p.price, 78 * p.price, 67 * p.price].map((v) => v.toLocaleString('en-IN'))[i]}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">↑ {[12, 8, 15, 5, 3][i]}%</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </TabsContent>

          {/* OFFERS */}
          <TabsContent value="offers" className="mt-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {OFFERS.map((offer) => (
                <Card key={offer.code} className="p-5 border-slate-200 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-italia-gold/10 blur-2xl" />
                  <Badge className="bg-italia-gold text-white border-0 hover:bg-italia-gold mb-2">{offer.title}</Badge>
                  <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-1">{offer.description}</h3>
                  <code className="text-xs font-mono font-bold text-italia-gold bg-italia-gold/10 px-2 py-1 rounded">{offer.code}</code>
                  <div className="mt-3 text-xs text-slate-500 space-y-1">
                    <p>Min order: ₹{offer.minOrder}</p>
                    <p>Discount: {offer.discountType === 'flat' ? `₹${offer.discountValue}` : `${offer.discountValue}%`}</p>
                    {offer.maxDiscount && <p>Max discount: ₹{offer.maxDiscount}</p>}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Active</Badge>
                    <Button variant="ghost" size="sm" className="text-xs">Edit</Button>
                  </div>
                </Card>
              ))}
              <Card className="p-5 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center cursor-pointer hover:border-italia-blue hover:bg-italia-blue/5 transition-colors">
                <Plus className="w-8 h-8 text-italia-blue mb-2" />
                <p className="text-sm font-semibold text-italia-navy">Create New Offer</p>
                <p className="text-xs text-slate-500">Add a discount coupon</p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Product form component
function ProductForm({ product, onSave, onCancel }: { product: Product | null; onSave: (p: Product) => void; onCancel: () => void }) {
  const [form, setForm] = useState<Product>(
    product || {
      id: `p-${Date.now()}`,
      name: '', slug: `prod-${Date.now()}`, brand: 'Italia Premium',
      description: '', price: 0, mrp: 0, discount: 0,
      categoryId: 'c1', categorySlug: 'eyeglasses',
      frameShape: 'round', frameColor: '', gender: 'unisex',
      material: 'Acetate', weight: '20g', size: 'Medium',
      images: ['https://picsum.photos/seed/new-product/600/600'],
      rating: 4.5, reviewCount: 0, stock: 50,
      isFeatured: false, isNew: true, isBestSeller: false, isOffer: false,
      reviews: [],
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price) {
      toast.error('Please fill required fields');
      return;
    }
    onSave(form);
  };

  return (
    <Card className="p-6 border-slate-200 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif-italia text-lg font-bold text-italia-navy">{product ? 'Edit' : 'Add'} Product</h3>
        <Button variant="ghost" size="icon" onClick={onCancel}><X className="w-4 h-4" /></Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs">Name *</Label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1" />
          </div>
          <div>
            <Label className="text-xs">Brand</Label>
            <Input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className="mt-1" />
          </div>
        </div>
        <div>
          <Label className="text-xs">Description</Label>
          <Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1" />
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <Label className="text-xs">Price (₹) *</Label>
            <Input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} className="mt-1" />
          </div>
          <div>
            <Label className="text-xs">MRP (₹)</Label>
            <Input type="number" value={form.mrp} onChange={(e) => setForm({ ...form, mrp: Number(e.target.value) })} className="mt-1" />
          </div>
          <div>
            <Label className="text-xs">Stock</Label>
            <Input type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })} className="mt-1" />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <Label className="text-xs">Category</Label>
            <select value={form.categorySlug} onChange={(e) => setForm({ ...form, categorySlug: e.target.value as any, categoryId: CATEGORIES.find((c) => c.slug === e.target.value)?.id || '' })} className="mt-1 w-full h-10 px-3 rounded-md border border-input bg-background">
              {CATEGORIES.map((c) => <option key={c.id} value={c.slug}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <Label className="text-xs">Frame Shape</Label>
            <select value={form.frameShape} onChange={(e) => setForm({ ...form, frameShape: e.target.value as any })} className="mt-1 w-full h-10 px-3 rounded-md border border-input bg-background">
              {['round', 'square', 'rectangle', 'aviator', 'cat-eye', 'oval', 'hexagon'].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <Label className="text-xs">Gender</Label>
            <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value as any })} className="mt-1 w-full h-10 px-3 rounded-md border border-input bg-background">
              {['men', 'women', 'unisex', 'kids'].map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { key: 'isFeatured', label: 'Featured' },
            { key: 'isNew', label: 'New Arrival' },
            { key: 'isBestSeller', label: 'Best Seller' },
            { key: 'isOffer', label: 'On Offer' },
          ].map((flag) => (
            <label key={flag.key} className="flex items-center gap-1.5 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={(form as any)[flag.key]}
                onChange={(e) => setForm({ ...form, [flag.key]: e.target.checked } as any)}
                className="w-4 h-4 rounded accent-italia-blue"
              />
              <span className="text-italia-navy font-medium">{flag.label}</span>
            </label>
          ))}
        </div>
        <div className="flex gap-2 pt-3">
          <Button type="submit" className="bg-italia-navy hover:bg-italia-blue rounded-full">{product ? 'Update' : 'Add'} Product</Button>
          <Button type="button" variant="outline" onClick={onCancel} className="rounded-full">Cancel</Button>
        </div>
      </form>
    </Card>
  );
}
