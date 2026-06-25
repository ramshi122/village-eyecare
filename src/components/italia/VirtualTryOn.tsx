'use client';

import { useStore } from '@/lib/store';
import { PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Upload, X, RefreshCw, Glasses, ChevronLeft, Sparkles, Check } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function VirtualTryOn() {
  const navigate = useStore((s) => s.navigate);
  const [mode, setMode] = useState<'select' | 'camera' | 'upload'>('select');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [selectedFrame, setSelectedFrame] = useState<string>(PRODUCTS[0].images[0]);
  const [frameStyle, setFrameStyle] = useState<'round' | 'square' | 'aviator' | 'none'>('round');
  const [frameColor, setFrameColor] = useState<'#0a1628' | '#1e3a8a' | '#c9a55a' | '#8b4513'>('#0a1628');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((t) => t.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 720 } },
      });
      setStream(mediaStream);
      setMode('camera');
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.play();
        }
      }, 100);
    } catch (err) {
      toast.error('Camera access denied. Please use the upload option instead.');
      setMode('upload');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      setStream(null);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        setPhoto(dataUrl);
        stopCamera();
        toast.success('Photo captured! Now choose a frame to try on.');
      }
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPhoto(ev.target?.result as string);
        setMode('upload');
        toast.success('Photo uploaded! Now choose a frame.');
      };
      reader.readAsDataURL(file);
    }
  };

  const reset = () => {
    setPhoto(null);
    setMode('select');
    stopCamera();
  };

  const downloadPhoto = () => {
    if (!photo) return;
    const link = document.createElement('a');
    link.download = 'village-eyecare-tryon.jpg';

    // Create composite with frame
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 500;
      canvas.height = 500;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Draw face
        ctx.drawImage(img, 0, 0, 500, 500);
        // Draw frame (simplified glasses overlay)
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = 4;
        const cx = 250;
        const cy = 240;
        if (frameStyle === 'round') {
          ctx.beginPath(); ctx.arc(cx - 60, cy, 45, 0, Math.PI * 2); ctx.stroke();
          ctx.beginPath(); ctx.arc(cx + 60, cy, 45, 0, Math.PI * 2); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(cx - 15, cy); ctx.lineTo(cx + 15, cy); ctx.stroke();
        } else if (frameStyle === 'square') {
          ctx.strokeRect(cx - 105, cy - 35, 80, 70);
          ctx.strokeRect(cx + 25, cy - 35, 80, 70);
          ctx.beginPath(); ctx.moveTo(cx - 25, cy); ctx.lineTo(cx + 25, cy); ctx.stroke();
        } else if (frameStyle === 'aviator') {
          ctx.beginPath(); ctx.ellipse(cx - 60, cy, 50, 55, 0, 0, Math.PI * 2); ctx.stroke();
          ctx.beginPath(); ctx.ellipse(cx + 60, cy, 50, 55, 0, 0, Math.PI * 2); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(cx - 10, cy); ctx.lineTo(cx + 10, cy); ctx.stroke();
        }
      }
      link.href = canvas.toDataURL('image/jpeg', 0.9);
      link.click();
      toast.success('Photo saved to your device!');
    };
    img.src = photo;
  };

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 text-sm text-italia-navy hover:text-italia-blue mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="text-center mb-6">
          <Badge className="bg-italia-gold/20 text-italia-gold border-0 hover:bg-italia-gold/20 mb-2">
            <Sparkles className="w-3 h-3 mr-1" /> AI Powered
          </Badge>
          <h1 className="font-serif-italia text-3xl lg:text-4xl font-bold text-italia-navy">Virtual Try-On</h1>
          <p className="text-sm text-slate-500 mt-1">See how any frame looks on your face before you buy</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main try-on area */}
          <div className="lg:col-span-2">
            <Card className="p-4 border-slate-200">
              {mode === 'select' && !photo && (
                <div className="aspect-square max-w-md mx-auto bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl gradient-italia flex items-center justify-center mb-4">
                    <Glasses className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="font-serif-italia text-xl font-bold text-italia-navy mb-2">Ready to Try On?</h2>
                  <p className="text-sm text-slate-500 mb-6">Use your camera or upload a photo to get started</p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <Button onClick={startCamera} className="flex-1 bg-italia-navy hover:bg-italia-blue rounded-full">
                      <Camera className="w-4 h-4 mr-1.5" /> Use Camera
                    </Button>
                    <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="flex-1 rounded-full">
                      <Upload className="w-4 h-4 mr-1.5" /> Upload Photo
                    </Button>
                  </div>
                </div>
              )}

              {mode === 'camera' && (
                <div className="relative aspect-square max-w-md mx-auto bg-black rounded-2xl overflow-hidden">
                  <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" style={{ transform: 'scaleX(-1)' }} />
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Guide oval */}
                    <div className="absolute inset-x-12 top-12 bottom-32 border-2 border-white/40 rounded-[50%]" />
                    {/* Frame preview overlay */}
                    {frameStyle !== 'none' && (
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                        <g fill="none" stroke={frameColor} strokeWidth="5" style={{ transform: 'scaleX(-1)', transformOrigin: '200px 200px' }}>
                          {frameStyle === 'round' && (
                            <>
                              <circle cx="140" cy="200" r="42" />
                              <circle cx="260" cy="200" r="42" />
                              <line x1="182" y1="200" x2="218" y2="200" />
                            </>
                          )}
                          {frameStyle === 'square' && (
                            <>
                              <rect x="90" y="165" width="80" height="70" rx="8" />
                              <rect x="230" y="165" width="80" height="70" rx="8" />
                              <line x1="170" y1="200" x2="230" y2="200" />
                            </>
                          )}
                          {frameStyle === 'aviator' && (
                            <>
                              <ellipse cx="140" cy="200" rx="48" ry="52" />
                              <ellipse cx="260" cy="200" rx="48" ry="52" />
                              <line x1="188" y1="200" x2="212" y2="200" />
                            </>
                          )}
                        </g>
                      </svg>
                    )}
                  </div>
                  <div className="absolute bottom-4 inset-x-4 flex justify-center gap-2">
                    <Button onClick={capturePhoto} className="bg-white text-italia-navy hover:bg-italia-gold hover:text-white rounded-full">
                      <Camera className="w-4 h-4 mr-1.5" /> Capture
                    </Button>
                    <Button onClick={() => { stopCamera(); setMode('select'); }} variant="outline" className="bg-white/20 backdrop-blur text-white border-white/30 hover:bg-white/30 rounded-full">
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {photo && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative aspect-square max-w-md mx-auto bg-slate-50 rounded-2xl overflow-hidden">
                  <img src={photo} alt="Your photo" className="w-full h-full object-cover" />
                  {/* Frame overlay */}
                  {frameStyle !== 'none' && (
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                      <g fill="none" stroke={frameColor} strokeWidth="5">
                        {frameStyle === 'round' && (
                          <>
                            <circle cx="140" cy="200" r="42" />
                            <circle cx="260" cy="200" r="42" />
                            <line x1="182" y1="200" x2="218" y2="200" />
                          </>
                        )}
                        {frameStyle === 'square' && (
                          <>
                            <rect x="90" y="165" width="80" height="70" rx="8" />
                            <rect x="230" y="165" width="80" height="70" rx="8" />
                            <line x1="170" y1="200" x2="230" y2="200" />
                          </>
                        )}
                        {frameStyle === 'aviator' && (
                          <>
                            <ellipse cx="140" cy="200" rx="48" ry="52" />
                            <ellipse cx="260" cy="200" rx="48" ry="52" />
                            <line x1="188" y1="200" x2="212" y2="200" />
                          </>
                        )}
                      </g>
                    </svg>
                  )}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button onClick={reset} size="icon" className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-italia-navy">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                    <Button onClick={() => setPhoto(null)} size="icon" className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-red-500">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-3 inset-x-3 flex gap-2">
                    <Button onClick={downloadPhoto} className="flex-1 bg-italia-navy hover:bg-italia-blue text-white rounded-full">
                      <Check className="w-4 h-4 mr-1.5" /> Save Look
                    </Button>
                  </div>
                </motion.div>
              )}

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
              <canvas ref={canvasRef} className="hidden" />
            </Card>

            {/* Frame controls */}
            {photo && (
              <Card className="p-4 border-slate-200 mt-4">
                <h3 className="text-sm font-semibold text-italia-navy mb-3">Customize Frame</h3>

                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">Frame Style</p>
                  <div className="flex gap-2">
                    {[
                      { id: 'round', label: 'Round' },
                      { id: 'square', label: 'Square' },
                      { id: 'aviator', label: 'Aviator' },
                      { id: 'none', label: 'No Frame' },
                    ].map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFrameStyle(f.id as any)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                          frameStyle === f.id ? 'bg-italia-navy text-white' : 'bg-slate-100 text-italia-navy hover:bg-italia-blue/10'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-2">Frame Color</p>
                  <div className="flex gap-2">
                    {[
                      { color: '#0a1628', label: 'Black' },
                      { color: '#1e3a8a', label: 'Navy' },
                      { color: '#c9a55a', label: 'Gold' },
                      { color: '#8b4513', label: 'Brown' },
                    ].map((c) => (
                      <button
                        key={c.color}
                        onClick={() => setFrameColor(c.color as any)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${frameColor === c.color ? 'border-italia-blue scale-110' : 'border-slate-200'}`}
                        style={{ backgroundColor: c.color }}
                        title={c.label}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Frame picker */}
          <div className="lg:col-span-1">
            <Card className="p-4 border-slate-200">
              <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3">Choose a Frame</h3>
              <div className="grid grid-cols-2 gap-2 max-h-[500px] overflow-y-auto scrollbar-premium">
                {PRODUCTS.filter((p) => ['eyeglasses', 'sunglasses'].includes(p.categorySlug)).slice(0, 10).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedFrame(p.images[0]);
                      toast.success(`Trying on: ${p.name}`);
                    }}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedFrame === p.images[0] ? 'border-italia-blue scale-105' : 'border-transparent hover:border-slate-300'
                    }`}
                  >
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                    {selectedFrame === p.images[0] && (
                      <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-italia-blue text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-1.5">
                      <p className="text-[10px] text-white font-medium line-clamp-1">{p.name}</p>
                    </div>
                  </button>
                ))}
              </div>

              <Button onClick={() => navigate('shop', null, 'eyeglasses')} variant="outline" className="w-full mt-3 rounded-full">
                Browse All Frames
              </Button>
            </Card>

            <Card className="p-4 border-slate-200 mt-4 bg-italia-blue/5">
              <div className="flex gap-2">
                <Sparkles className="w-5 h-5 text-italia-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-italia-navy">AI Face Shape Detection</p>
                  <p className="text-xs text-slate-600 mt-1">
                    Our AI analyzes your face shape and recommends the perfect frames. Upload a clear, front-facing photo for best results.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
