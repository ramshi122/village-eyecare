'use client';

import { useStore } from '@/lib/store';
import { searchProducts, CATEGORIES } from '@/lib/data';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, X, TrendingUp, Clock } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { ProductCard } from './ProductCard';

const POPULAR_SEARCHES = ['Aviator', 'Round', 'Blue Cut', 'Sunglasses', 'Kids', 'Contact Lenses'];

export function SearchModal() {
  const isOpen = useStore((s) => s.isSearchOpen);
  const setOpen = useStore((s) => s.setSearchOpen);
  const navigate = useStore((s) => s.navigate);
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchProducts(query).slice(0, 8);
  }, [query]);

  // Reset query when modal closes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setQuery(''), 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleClose = () => setOpen(false);

  const handleSelectProduct = (productId: string) => {
    navigate('product', productId);
    handleClose();
  };

  const handleCategorySelect = (slug: string) => {
    navigate('shop', null, slug as any);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl p-0 gap-0 max-h-[85vh] overflow-hidden bg-white">
        <DialogHeader className="p-0">
          <DialogTitle className="sr-only">Search Products</DialogTitle>
        </DialogHeader>

        {/* Search input */}
        <div className="p-4 border-b border-slate-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for eyeglasses, sunglasses, brands..."
              className="pl-10 pr-10 h-12 text-base border-2 focus-visible:ring-italia-blue focus-visible:border-italia-blue"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Results / Suggestions */}
        <div className="overflow-y-auto max-h-[60vh] scrollbar-premium">
          {query.trim() ? (
            results.length > 0 ? (
              <div className="p-4">
                <p className="text-xs text-slate-500 mb-3">{results.length} result(s) for "{query}"</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {results.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-semibold text-italia-navy mb-1">No results found</p>
                <p className="text-xs text-slate-500">Try a different keyword or browse categories below</p>
              </div>
            )
          ) : (
            <div className="p-4 space-y-5">
              {/* Popular searches */}
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3" /> Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-italia-blue/10 text-sm text-italia-navy transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> Browse Categories
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.slug)}
                      className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-italia-blue/10 text-left transition-colors"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-italia-navy">{cat.name}</p>
                        <p className="text-[10px] text-slate-500 line-clamp-1">{cat.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
