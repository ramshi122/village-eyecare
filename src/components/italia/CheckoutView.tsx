'use client';

import { useStore, useCartSubtotal } from '@/lib/store';
import { STORE_INFO } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import {
  ChevronLeft, MapPin, CreditCard, Banknote, Check, Shield, Truck, Plus, Lock
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Address } from '@/lib/types';

export function CheckoutView() {
  const navigate = useStore((s) => s.navigate);
  const cart = useStore((s) => s.cart);
  const addresses = useStore((s) => s.addresses);
  const addAddress = useStore((s) => s.addAddress);
  const user = useStore((s) => s.user);
  const appliedCoupon = useStore((s) => s.appliedCoupon);
  const couponDiscount = useStore((s) => s.couponDiscount);
  const placeOrder = useStore((s) => s.placeOrder);

  const subtotal = useCartSubtotal();
  const shipping = subtotal >= 999 ? 0 : 49;
  const total = subtotal - couponDiscount + shipping;

  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0]?.id || '');
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');
  const [showAddressForm, setShowAddressForm] = useState(addresses.length === 0);
  const [newAddr, setNewAddr] = useState<Omit<Address, 'id'>>({
    name: '', phone: '', line1: '', line2: '', city: '', state: 'Haryana', pincode: '', isDefault: false,
  });

  const handleSaveAddress = () => {
    if (!newAddr.name || !newAddr.phone || !newAddr.line1 || !newAddr.city || !newAddr.pincode) {
      toast.error('Please fill all required fields');
      return;
    }
    addAddress(newAddr);
    toast.success('Address added');
    setShowAddressForm(false);
    setNewAddr({ name: '', phone: '', line1: '', line2: '', city: '', state: 'Haryana', pincode: '', isDefault: false });
  };

  const handlePlaceOrder = () => {
    if (!selectedAddressId) {
      toast.error('Please select a delivery address');
      return;
    }
    const addr = addresses.find((a) => a.id === selectedAddressId);
    if (!addr) return;

    // Simulate Razorpay flow
    if (paymentMethod === 'online') {
      toast.success('Redirecting to Razorpay...', { duration: 1500 });
      setTimeout(() => {
        const order = placeOrder({
          items: cart,
          subtotal,
          discount: couponDiscount,
          shipping,
          total,
          couponCode: appliedCoupon || undefined,
          paymentMethod,
          address: addr,
          customerName: addr.name,
          customerPhone: addr.phone,
          customerEmail: user?.email,
        });
        toast.success('Payment successful!');
        setTimeout(() => navigate('order-success', null, null), 800);
      }, 1200);
    } else {
      const order = placeOrder({
        items: cart,
        subtotal,
        discount: couponDiscount,
        shipping,
        total,
        couponCode: appliedCoupon || undefined,
        paymentMethod,
        address: addr,
        customerName: addr.name,
        customerPhone: addr.phone,
        customerEmail: user?.email,
      });
      toast.success('Order placed successfully!');
      navigate('order-success', null, null);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Your cart is empty</p>
          <Button onClick={() => navigate('shop')} className="bg-italia-navy hover:bg-italia-blue">Start Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button onClick={() => navigate('cart')} className="flex items-center gap-1 text-sm text-italia-navy hover:text-italia-blue mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to Cart
        </button>

        <h1 className="font-serif-italia text-2xl lg:text-3xl font-bold text-italia-navy mb-6">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            {/* Address section */}
            <Card className="p-5 border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-italia-navy flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-italia-blue text-white text-xs flex items-center justify-center font-bold">1</span>
                  <MapPin className="w-4 h-4" /> Delivery Address
                </h2>
                {!showAddressForm && (
                  <Button variant="ghost" size="sm" onClick={() => setShowAddressForm(true)} className="text-italia-blue">
                    <Plus className="w-4 h-4 mr-1" /> Add New
                  </Button>
                )}
              </div>

              {addresses.length > 0 && !showAddressForm && (
                <RadioGroup value={selectedAddressId} onValueChange={setSelectedAddressId} className="space-y-2">
                  {addresses.map((addr) => (
                    <div key={addr.id} className={`p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                      selectedAddressId === addr.id ? 'border-italia-blue bg-italia-blue/5' : 'border-slate-200 hover:border-italia-blue/40'
                    }`}>
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value={addr.id} id={addr.id} className="mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-italia-navy text-sm">{addr.name}</p>
                            {addr.isDefault && <Badge variant="secondary" className="text-[10px]">Default</Badge>}
                          </div>
                          <p className="text-sm text-slate-600">{addr.line1}{addr.line2 && `, ${addr.line2}`}</p>
                          <p className="text-sm text-slate-600">{addr.city}, {addr.state} - {addr.pincode}</p>
                          <p className="text-sm text-slate-600 mt-1">Phone: {addr.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {showAddressForm && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-3 mt-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs">Full Name *</Label>
                      <Input value={newAddr.name} onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })} className="mt-1" />
                    </div>
                    <div>
                      <Label className="text-xs">Phone *</Label>
                      <Input value={newAddr.phone} onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })} className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs">Address Line 1 *</Label>
                    <Input value={newAddr.line1} onChange={(e) => setNewAddr({ ...newAddr, line1: e.target.value })} className="mt-1" placeholder="House/Flat no, Street" />
                  </div>
                  <div>
                    <Label className="text-xs">Address Line 2</Label>
                    <Input value={newAddr.line2} onChange={(e) => setNewAddr({ ...newAddr, line2: e.target.value })} className="mt-1" placeholder="Landmark, Area" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div>
                      <Label className="text-xs">City *</Label>
                      <Input value={newAddr.city} onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })} className="mt-1" />
                    </div>
                    <div>
                      <Label className="text-xs">State *</Label>
                      <Input value={newAddr.state} onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })} className="mt-1" />
                    </div>
                    <div>
                      <Label className="text-xs">Pincode *</Label>
                      <Input value={newAddr.pincode} onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })} className="mt-1" maxLength={6} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSaveAddress} className="bg-italia-navy hover:bg-italia-blue">Save Address</Button>
                    <Button variant="outline" onClick={() => setShowAddressForm(false)}>Cancel</Button>
                  </div>
                </motion.div>
              )}
            </Card>

            {/* Payment section */}
            <Card className="p-5 border-slate-200">
              <h2 className="font-semibold text-italia-navy flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-italia-blue text-white text-xs flex items-center justify-center font-bold">2</span>
                <CreditCard className="w-4 h-4" /> Payment Method
              </h2>

              <RadioGroup value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as 'online' | 'cod')} className="space-y-2">
                {/* Online */}
                <div className={`p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                  paymentMethod === 'online' ? 'border-italia-blue bg-italia-blue/5' : 'border-slate-200 hover:border-italia-blue/40'
                }`}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="online" id="online" />
                    <CreditCard className="w-5 h-5 text-italia-blue" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-italia-navy">Online Payment (Razorpay)</p>
                      <p className="text-xs text-slate-500">UPI, Credit/Debit Cards, Net Banking, Wallets</p>
                    </div>
                    <div className="flex gap-1">
                      <Badge variant="secondary" className="text-[9px]">UPI</Badge>
                      <Badge variant="secondary" className="text-[9px]">VISA</Badge>
                      <Badge variant="secondary" className="text-[9px]">MC</Badge>
                    </div>
                  </div>
                </div>

                {/* COD */}
                <div className={`p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                  paymentMethod === 'cod' ? 'border-italia-blue bg-italia-blue/5' : 'border-slate-200 hover:border-italia-blue/40'
                }`}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="cod" id="cod" />
                    <Banknote className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-italia-navy">Cash on Delivery</p>
                      <p className="text-xs text-slate-500">Pay with cash when your order arrives</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Free</Badge>
                  </div>
                </div>
              </RadioGroup>

              {paymentMethod === 'online' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 p-3 rounded-xl bg-italia-blue/5 border border-italia-blue/20 flex items-start gap-2">
                  <Lock className="w-4 h-4 text-italia-blue mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-700">
                    You will be redirected to a secure Razorpay payment page. Your card details are never stored on our servers. 256-bit SSL encryption.
                  </p>
                </motion.div>
              )}
            </Card>

            {/* Delivery info */}
            <Card className="p-5 border-slate-200">
              <h2 className="font-semibold text-italia-navy flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-italia-blue text-white text-xs flex items-center justify-center font-bold">3</span>
                <Truck className="w-4 h-4" /> Delivery Information
              </h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { label: 'Estimated Delivery', value: '3-5 Business Days' },
                  { label: 'Shipping Cost', value: shipping === 0 ? 'FREE' : `₹${shipping}` },
                  { label: 'Return Policy', value: '7-Day Easy Returns' },
                ].map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-italia-ivory">
                    <p className="text-xs text-slate-500">{d.label}</p>
                    <p className="text-sm font-semibold text-italia-navy mt-0.5">{d.value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-[100px]">
              <Card className="p-5 border-slate-200">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3">Order Summary</h3>

                {/* Items */}
                <div className="space-y-3 max-h-60 overflow-y-auto scrollbar-premium mb-3">
                  {cart.map((item) => (
                    <div key={`${item.productId}-${item.lensType}`} className="flex gap-3">
                      <div className="relative flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-italia-blue text-white text-[10px] font-bold flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-italia-navy line-clamp-1">{item.name}</p>
                        {item.lensType && <p className="text-[10px] text-slate-500">{item.lensType}</p>}
                        <p className="text-xs font-bold text-italia-navy mt-0.5">
                          ₹{((item.price + (item.lensPrice || 0)) * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-3" />

                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon})</span>
                      <span className="font-semibold">-₹{couponDiscount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : ''}`}>
                      {shipping === 0 ? 'FREE' : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                <Separator className="my-3" />
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-semibold text-italia-navy">Total</span>
                  <span className="text-2xl font-bold text-italia-navy">₹{total.toLocaleString('en-IN')}</span>
                </div>

                <Button
                  size="lg"
                  onClick={handlePlaceOrder}
                  className="w-full mt-4 bg-italia-navy hover:bg-italia-blue text-white rounded-full h-12"
                >
                  {paymentMethod === 'online' ? (
                    <><Lock className="w-4 h-4 mr-1.5" /> Pay ₹{total.toLocaleString('en-IN')}</>
                  ) : (
                    <><Check className="w-4 h-4 mr-1.5" /> Place Order (COD)</>
                  )}
                </Button>

                <p className="text-[10px] text-slate-400 text-center mt-3 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> 100% Secure Checkout
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrderSuccessView() {
  const navigate = useStore((s) => s.navigate);
  const orders = useStore((s) => s.orders);
  const latestOrder = orders[0];

  if (!latestOrder) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Button onClick={() => navigate('home')} className="bg-italia-navy hover:bg-italia-blue">Go Home</Button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="p-8 border-slate-200 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.1 }}
            className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
          >
            <Check className="w-10 h-10 text-green-600" />
          </motion.div>
          <h1 className="font-serif-italia text-3xl font-bold text-italia-navy mb-2">Order Confirmed!</h1>
          <p className="text-sm text-slate-600 mb-4">
            Thank you for your purchase. Your order has been placed successfully.
          </p>

          <div className="bg-italia-blue/5 rounded-2xl p-4 mb-5">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Order Number</p>
            <p className="text-xl font-bold text-italia-navy font-mono">{latestOrder.orderNumber}</p>
            <p className="text-xs text-slate-500 mt-1">
              Expected delivery: {new Date(Date.now() + 4 * 86400000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
            </p>
          </div>

          <div className="text-left space-y-2 mb-5">
            <p className="text-sm font-semibold text-italia-navy">Order Details:</p>
            {latestOrder.items.map((item) => (
              <div key={`${item.productId}-${item.lensType}`} className="flex justify-between text-sm">
                <span className="text-slate-700">{item.name} × {item.quantity}</span>
                <span className="font-semibold text-italia-navy">₹{((item.price + (item.lensPrice || 0)) * item.quantity).toLocaleString('en-IN')}</span>
              </div>
            ))}
            <Separator className="my-2" />
            <div className="flex justify-between font-bold text-italia-navy">
              <span>Total Paid ({latestOrder.paymentMethod === 'cod' ? 'COD' : 'Online'})</span>
              <span>₹{latestOrder.total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="bg-italia-ivory rounded-xl p-3 text-left mb-5 text-xs text-slate-600">
            <p className="font-semibold text-italia-navy mb-1">Delivery to:</p>
            <p>{latestOrder.address.name} · {latestOrder.address.phone}</p>
            <p>{latestOrder.address.line1}{latestOrder.address.line2 && `, ${latestOrder.address.line2}`}</p>
            <p>{latestOrder.address.city}, {latestOrder.address.state} - {latestOrder.address.pincode}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => navigate('orders')} className="flex-1 bg-italia-navy hover:bg-italia-blue rounded-full">
              Track My Order
            </Button>
            <Button onClick={() => navigate('shop')} variant="outline" className="flex-1 rounded-full">
              Continue Shopping
            </Button>
          </div>

          <p className="text-xs text-slate-500 mt-4">
            A confirmation has been sent to your phone. For any queries, call us at {STORE_INFO.phone}
          </p>
        </Card>
      </div>
    </div>
  );
}
