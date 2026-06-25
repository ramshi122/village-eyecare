'use client';

import { useStore } from '@/lib/store';
import { PRODUCTS } from '@/lib/data';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from './ProductCard';
import { Sparkles, ChevronLeft, ArrowRight, Check, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const FACE_SHAPES = [
  { id: 'oval', label: 'Oval', emoji: '🥚', desc: 'Balanced proportions, slightly longer than wide', recommended: ['round', 'square', 'rectangle', 'aviator'] },
  { id: 'round', label: 'Round', emoji: '⭕', desc: 'Full cheeks, equal length and width', recommended: ['square', 'rectangle', 'aviator', 'hexagon'] },
  { id: 'square', label: 'Square', emoji: '⬛', desc: 'Strong jaw, broad forehead', recommended: ['round', 'oval', 'cat-eye'] },
  { id: 'heart', label: 'Heart', emoji: '💖', desc: 'Wide forehead, narrow chin', recommended: ['round', 'aviator', 'cat-eye'] },
  { id: 'diamond', label: 'Diamond', emoji: '💎', desc: 'Narrow forehead and jaw, wide cheekbones', recommended: ['oval', 'round', 'cat-eye'] },
  { id: 'oblong', label: 'Oblong', emoji: '📐', desc: 'Longer than wide, straight cheek line', recommended: ['square', 'round', 'oversized'] },
];

export function FrameShapeFinder() {
  const navigate = useStore((s) => s.navigate);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [results, setResults] = useState<Product[]>([]);

  const handleFind = (shapeId: string) => {
    setSelectedShape(shapeId);
    const shape = FACE_SHAPES.find((s) => s.id === shapeId);
    if (shape) {
      const matches = PRODUCTS.filter(
        (p) => shape.recommended.includes(p.frameShape) && ['eyeglasses', 'sunglasses'].includes(p.categorySlug)
      ).slice(0, 4);
      setResults(matches);
      toast.success(`Found ${matches.length} frames perfect for your face!`);
    }
  };

  const reset = () => {
    setSelectedShape(null);
    setResults([]);
  };

  return (
    <Card className="p-6 border-slate-200 bg-gradient-to-br from-italia-blue/5 to-italia-gold/5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-serif-italia text-lg font-bold text-italia-navy">Frame Shape Finder</h3>
          <p className="text-xs text-slate-500">Find your perfect frame based on face shape</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!selectedShape ? (
          <motion.div key="select" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="text-sm text-slate-600 mb-3">What's your face shape?</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {FACE_SHAPES.map((shape) => (
                <button
                  key={shape.id}
                  onClick={() => handleFind(shape.id)}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-italia-blue hover:shadow-italia transition-all text-left group"
                >
                  <div className="text-2xl mb-1">{shape.emoji}</div>
                  <p className="text-sm font-semibold text-italia-navy group-hover:text-italia-blue">{shape.label}</p>
                  <p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">{shape.desc}</p>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <Badge className="bg-italia-gold/20 text-italia-gold border-0 hover:bg-italia-gold/20 mb-1">
                  <Check className="w-3 h-3 mr-1" /> Best match for {FACE_SHAPES.find((s) => s.id === selectedShape)?.label} face
                </Badge>
                <p className="text-sm text-slate-600">Here are frames that complement your face shape:</p>
              </div>
              <Button variant="ghost" size="sm" onClick={reset} className="text-italia-blue">
                <RotateCcw className="w-3 h-3 mr-1" /> Try Again
              </Button>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {results.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 text-center py-6">No matching frames found. Try another shape.</p>
            )}

            <div className="mt-4 text-center">
              <Button onClick={() => navigate('tryon')} variant="outline" className="rounded-full">
                Try them on virtually <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
