'use client';

import { useStore } from '@/lib/store';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SlidersHorizontal, Search, X, Grid3x3 } from 'lucide-react';
import { useMemo, useState } from 'react';

const SHAPES = ['round', 'square', 'rectangle', 'aviator', 'cat-eye', 'oval', 'hexagon'];
const GENDERS = ['men', 'women', 'unisex', 'kids'];

export function ShopView() {
  const navigate = useStore((s) => s.navigate);
  const selectedCategory = useStore((s) => s.selectedCategory);
  const searchQuery = useStore((s) => s.searchQuery);

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 8000]);
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory) {
      result = result.filter((p) => p.categorySlug === selectedCategory);
    }
    if (localSearch.trim()) {
      const q = localSearch.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.frameShape.includes(q)
      );
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (selectedShapes.length) result = result.filter((p) => selectedShapes.includes(p.frameShape));
    if (selectedGenders.length) result = result.filter((p) => selectedGenders.includes(p.gender));

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'newest': result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case 'discount': result.sort((a, b) => b.discount - a.discount); break;
      default: result.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return result;
  }, [selectedCategory, localSearch, priceRange, selectedShapes, selectedGenders, sortBy]);

  const toggleShape = (s: string) =>
    setSelectedShapes((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  const toggleGender = (g: string) =>
    setSelectedGenders((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));

  const clearFilters = () => {
    setSelectedShapes([]);
    setSelectedGenders([]);
    setPriceRange([0, 8000]);
    setLocalSearch('');
  };

  const activeFilters = selectedShapes.length + selectedGenders.length;

  const filtersContent = (
    <div className="space-y-5">
      <div>
        <h4 className="text-sm font-semibold text-italia-navy mb-2">Price Range</h4>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="h-9"
            placeholder="Min"
          />
          <span className="text-slate-400">-</span>
          <Input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="h-9"
            placeholder="Max"
          />
        </div>
        <input
          type="range"
          min="0"
          max="8000"
          step="500"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full mt-2 accent-italia-blue"
        />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-italia-navy mb-2">Frame Shape</h4>
        <div className="flex flex-wrap gap-1.5">
          {SHAPES.map((s) => (
            <button
              key={s}
              onClick={() => toggleShape(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
                selectedShapes.includes(s)
                  ? 'bg-italia-blue text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-italia-blue/10'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-italia-navy mb-2">Gender</h4>
        <div className="flex flex-wrap gap-1.5">
          {GENDERS.map((g) => (
            <button
              key={g}
              onClick={() => toggleGender(g)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
                selectedGenders.includes(g)
                  ? 'bg-italia-blue text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-italia-blue/10'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <Button onClick={clearFilters} variant="outline" className="w-full">
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      {/* Page header */}
      <div className="gradient-italia text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.2em] text-italia-gold mb-1">Collection</p>
          <h1 className="font-serif-italia text-3xl lg:text-4xl font-bold">
            {selectedCategory ? CATEGORIES.find((c) => c.slug === selectedCategory)?.name : 'All Products'}
          </h1>
          <p className="text-white/70 text-sm mt-1">
            {selectedCategory
              ? CATEGORIES.find((c) => c.slug === selectedCategory)?.description
              : 'Discover our complete range of premium eyewear'}
          </p>
        </div>
      </div>

      {/* Category pills */}
      <div className="bg-white border-b border-slate-200 sticky top-[64px] lg:top-[140px] z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3">
            <button
              onClick={() => navigate('shop', null, null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                !selectedCategory ? 'bg-italia-navy text-white' : 'bg-slate-100 text-italia-navy hover:bg-italia-blue/10'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate('shop', null, cat.slug)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.slug ? 'bg-italia-navy text-white' : 'bg-slate-100 text-italia-navy hover:bg-italia-blue/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search + sort bar */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search in this collection..."
              className="pl-10 h-10 bg-white"
            />
          </div>

          {/* Mobile filter button */}
          <Sheet open={showFilters} onOpenChange={setShowFilters}>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden relative">
                <SlidersHorizontal className="w-4 h-4 mr-1.5" /> Filters
                {activeFilters > 0 && (
                  <Badge className="absolute -top-1.5 -right-1.5 w-5 h-5 p-0 flex items-center justify-center bg-italia-blue text-white text-[10px]">
                    {activeFilters}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[340px] bg-white overflow-y-auto">
              <div className="p-4">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-4">Filters</h3>
                {filtersContent}
              </div>
            </SheetContent>
          </Sheet>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px] sm:w-[180px] h-10 bg-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="discount">Biggest Discount</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-6">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-[200px] bg-white rounded-2xl p-5 border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif-italia text-lg font-bold text-italia-navy">Filters</h3>
                {activeFilters > 0 && <Badge className="bg-italia-blue text-white">{activeFilters}</Badge>}
              </div>
              {filtersContent}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-500 mb-3 flex items-center gap-1.5">
              <Grid3x3 className="w-4 h-4" /> Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-100">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-italia-navy mb-1">No products found</h3>
                <p className="text-sm text-slate-500 mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearFilters} className="bg-italia-navy hover:bg-italia-blue">
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
