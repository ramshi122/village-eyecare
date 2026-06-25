'use client';

import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Package, Search, Truck, Check, Clock, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { toast } from 'sonner';

const STATUS_STEPS = [
  { id: 'placed', label: 'Order Placed', icon: Clock },
  { id: 'confirmed', label: 'Confirmed', icon: Check },
  { id: 'shipped', label: 'Shipped', icon: Truck },
  { id: 'delivered', label: 'Delivered', icon: Package },
];

export function OrdersView() {
  const navigate = useStore((s) => s.navigate);
  const orders = useStore((s) => s.orders);
  const [searchId, setSearchId] = useState('');

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 text-sm text-italia-navy hover:text-italia-blue mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="text-center mb-6">
          <h1 className="font-serif-italia text-3xl font-bold text-italia-navy">My Orders</h1>
          <p className="text-sm text-slate-500 mt-1">Track and manage your orders</p>
        </div>

        {orders.length === 0 ? (
          <Card className="p-12 text-center border-slate-200">
            <Package className="w-16 h-16 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif-italia text-xl font-bold text-italia-navy mb-1">No orders yet</h3>
            <p className="text-sm text-slate-500 mb-4">When you place an order, it will appear here</p>
            <Button onClick={() => navigate('shop')} className="bg-italia-navy hover:bg-italia-blue rounded-full">
              Start Shopping
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const currentStepIndex = STATUS_STEPS.findIndex((s) => s.id === order.orderStatus);
              return (
                <motion.div key={order.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="p-5 border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-mono font-bold text-italia-navy">{order.orderNumber}</p>
                          <Badge className={`${
                            order.orderStatus === 'delivered' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                            order.orderStatus === 'shipped' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' :
                            order.orderStatus === 'cancelled' ? 'bg-red-100 text-red-700 hover:bg-red-100' :
                            'bg-amber-100 text-amber-700 hover:bg-amber-100'
                          } capitalize`}>{order.orderStatus}</Badge>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Placed on {new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Paid Online'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-italia-navy">₹{order.total.toLocaleString('en-IN')}</p>
                        <p className="text-xs text-slate-500">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</p>
                      </div>
                    </div>

                    {/* Status tracker */}
                    {order.orderStatus !== 'cancelled' && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between relative">
                          <div className="absolute left-0 right-0 top-5 h-0.5 bg-slate-200 -z-0" />
                          <div
                            className="absolute left-0 top-5 h-0.5 bg-italia-blue transition-all -z-0"
                            style={{ width: `${(currentStepIndex / (STATUS_STEPS.length - 1)) * 100}%` }}
                          />
                          {STATUS_STEPS.map((step, i) => {
                            const Icon = step.icon;
                            const isCompleted = i <= currentStepIndex;
                            const isCurrent = i === currentStepIndex;
                            return (
                              <div key={step.id} className="relative z-10 flex flex-col items-center gap-1 flex-1">
                                <div
                                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                    isCompleted ? 'bg-italia-blue text-white' : 'bg-slate-100 text-slate-400'
                                  } ${isCurrent ? 'ring-4 ring-italia-blue/20' : ''}`}
                                >
                                  <Icon className="w-4 h-4" />
                                </div>
                                <span className={`text-[10px] text-center hidden sm:block ${isCompleted ? 'font-semibold text-italia-navy' : 'text-slate-400'}`}>
                                  {step.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Items */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                      {order.items.map((item) => (
                        <div key={`${item.productId}-${item.lensType}`} className="flex-shrink-0 flex items-center gap-2 p-2 rounded-lg bg-slate-50 min-w-[180px]">
                          <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-italia-navy line-clamp-1">{item.name}</p>
                            <p className="text-[10px] text-slate-500">Qty: {item.quantity} · ₹{(item.price + (item.lensPrice || 0)).toLocaleString('en-IN')}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="rounded-full text-xs" onClick={() => toast.info('Invoice download coming soon')}>
                        Download Invoice
                      </Button>
                      {order.orderStatus === 'delivered' && (
                        <Button variant="outline" size="sm" className="rounded-full text-xs" onClick={() => navigate('shop')}>
                          Buy Again
                        </Button>
                      )}
                      <Button asChild variant="outline" size="sm" className="rounded-full text-xs ml-auto">
                        <Link href={`https://wa.me/918708270548?text=Hi%2C%20I%20have%20a%20query%20about%20order%20${order.orderNumber}`} target="_blank">
                          Need Help?
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
