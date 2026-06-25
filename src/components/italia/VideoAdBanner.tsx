'use client';

import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdSlide {
  type: 'video' | 'image';
  src: string;
  poster?: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  action: () => void;
  bg: string;
}

export function VideoAdBanner() {
  const navigate = useStore((s) => s.navigate);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides: AdSlide[] = [
    {
      type: 'video',
      src: '/videos/ad-video-1.mp4',
      poster: '/videos/ad-poster-1.png',
      title: 'Find Your Perfect Frame',
      subtitle: 'AI-Powered Try-On',
      description: 'See how any frame looks on your face before you buy. Try our virtual try-on with 200+ premium styles.',
      cta: 'Try On Now',
      action: () => navigate('tryon'),
      bg: 'gradient-hero',
    },
    {
      type: 'video',
      src: '/videos/ad-video-2.mp4',
      poster: '/videos/ad-poster-2.png',
      title: 'Summer Sunglasses Sale',
      subtitle: 'Up to 60% OFF',
      description: 'Polarized UV400 sunglasses from ₹1,299. Aviators, wayfarers, oversized glam — find your signature shade.',
      cta: 'Shop Sunglasses',
      action: () => navigate('shop', null, 'sunglasses'),
      bg: 'gradient-royal',
    },
    {
      type: 'image',
      src: '/videos/ad-poster-3.png',
      poster: '/videos/ad-poster-3.png',
      title: 'Premium Eyewear Collection',
      subtitle: 'Italian Craftsmanship',
      description: 'Handcrafted frames in acetate, titanium & more. From classic rounds to bold cat-eyes — 200+ styles to choose from.',
      cta: 'Explore Collection',
      action: () => navigate('shop'),
      bg: 'gradient-italia',
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;
    const duration = slides[currentSlide].type === 'video' ? 8000 : 5000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [currentSlide, isPlaying, slides]);

  // Control video playback
  useEffect(() => {
    if (videoRef.current) {
      if (currentSlide === 0 || currentSlide === 1) {
        videoRef.current.currentTime = 0;
        if (isPlaying) {
          videoRef.current.play().catch(() => {});
        }
      }
    }
  }, [currentSlide, isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const currentAd = slides[currentSlide];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="flex items-center gap-2 mb-4">
        <Badge className="bg-italia-gold/20 text-italia-gold border-0 hover:bg-italia-gold/20">
          <Sparkles className="w-3 h-3 mr-1" /> Featured Ads
        </Badge>
        <p className="text-xs text-slate-500">Watch our latest eyewear collections</p>
      </div>

      <div className="relative rounded-3xl overflow-hidden shadow-italia-lg bg-italia-navy h-[360px] sm:h-[420px] lg:h-[480px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {/* Background media */}
            <div className="absolute inset-0">
              {currentAd.type === 'video' ? (
                <video
                  ref={videoRef}
                  src={currentAd.src}
                  poster={currentAd.poster}
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                  autoPlay
                />
              ) : (
                <img
                  src={currentAd.src}
                  alt={currentAd.title}
                  className="w-full h-full object-cover"
                />
              )}
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-italia-navy/90 via-italia-navy/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-italia-navy/80 via-transparent to-transparent" />
            </div>

            {/* Content overlay */}
            <div className="relative h-full flex items-center">
              <div className="max-w-lg px-6 lg:px-12 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="bg-italia-gold text-white border-0 mb-3 hover:bg-italia-gold">
                    <Sparkles className="w-3 h-3 mr-1" /> {currentAd.subtitle}
                  </Badge>
                  <h2 className="font-serif-italia text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
                    {currentAd.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/85 mb-5 leading-relaxed max-w-md">
                    {currentAd.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="lg"
                      onClick={currentAd.action}
                      className="bg-white text-italia-navy hover:bg-italia-gold hover:text-white rounded-full px-6 shadow-lg"
                    >
                      {currentAd.cta} <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => navigate('shop')}
                      className="bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20 hover:text-white rounded-full px-6"
                    >
                      Shop All
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Video controls (only for video ads) */}
            {currentAd.type === 'video' && (
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full glass-dark text-white flex items-center justify-center hover:bg-italia-blue/50 transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full glass-dark text-white flex items-center justify-center hover:bg-italia-blue/50 transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            )}

            {/* Slide indicator badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-black/40 backdrop-blur text-white border-0">
                {currentSlide + 1} / {slides.length}
              </Badge>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide navigation dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-italia-gold' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to ad ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass-dark text-white flex items-center justify-center hover:bg-italia-blue/50 transition-colors z-10"
          aria-label="Previous ad"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass-dark text-white flex items-center justify-center hover:bg-italia-blue/50 transition-colors z-10"
          aria-label="Next ad"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Trust indicators below ads */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {[
          { icon: Check, label: '200+ Styles', value: 'Premium Collection' },
          { icon: Sparkles, label: 'AI Try-On', value: 'Virtual Fitting' },
          { icon: ArrowRight, label: 'Free Delivery', value: 'Above ₹999' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-italia-blue/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-4 h-4 text-italia-blue" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-italia-navy truncate">{item.label}</p>
              <p className="text-[10px] text-slate-500 truncate">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
