'use client';

import { useStore } from '@/lib/store';
import { PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Upload, X, RefreshCw, Glasses, ChevronLeft, Sparkles, Check, Download, Loader2 } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function VirtualTryOn() {
  const navigate = useStore((s) => s.navigate);
  const [mode, setMode] = useState<'select' | 'camera' | 'upload'>('select');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [tryonResult, setTryonResult] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
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
        setTryonResult(null);
        toast.success('Photo captured! Select a frame and click AI Try-On.');
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
        setTryonResult(null);
        toast.success('Photo uploaded! Select a frame and click AI Try-On.');
      };
      reader.readAsDataURL(file);
    }
  };

  const reset = () => {
    setPhoto(null);
    setTryonResult(null);
    setMode('select');
    stopCamera();
  };

  // Real AI try-on: sends photo + product to API which uses VLM + image generation
  const generateAITryOn = async () => {
    if (!photo) {
      toast.error('Please capture or upload a photo first');
      return;
    }
    setGenerating(true);
    toast.info('AI is analyzing your face and generating try-on... (15-20 seconds)');
    try {
      const res = await fetch('/api/ai-tryon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          photo: photo,
          productImage: selectedProduct.images[0],
          productName: selectedProduct.name,
          frameShape: selectedProduct.frameShape,
          frameColor: selectedProduct.frameColor,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setTryonResult(data.tryonImageUrl);
        toast.success('AI try-on generated! See your result below.');
      } else {
        toast.error(data.error || 'Failed to generate try-on');
      }
    } catch (err: any) {
      toast.error(err.message || 'AI try-on failed');
    } finally {
      setGenerating(false);
    }
  };

  const downloadResult = () => {
    if (!tryonResult) return;
    const link = document.createElement('a');
    link.download = 'village-eyecare-tryon.png';
    link.href = tryonResult;
    link.click();
    toast.success('Saved to your device!');
  };

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 text-sm text-italia-navy hover:text-italia-blue mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="text-center mb-6">
          <Badge className="bg-italia-gold/20 text-italia-gold border-0 hover:bg-italia-gold/20 mb-2">
            <Sparkles className="w-3 h-3 mr-1" /> Real AI Powered
          </Badge>
          <h1 className="font-serif-italia text-3xl lg:text-4xl font-bold text-italia-navy">Virtual Try-On</h1>
          <p className="text-sm text-slate-500 mt-1">AI analyzes your face and generates a realistic try-on with any frame</p>
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
                    <div className="absolute inset-x-12 top-12 bottom-32 border-2 border-white/40 rounded-[50%]" />
                  </div>
                  <div className="absolute bottom-4 inset-x-4 flex justify-center gap-2">
                    <Button onClick={capturePhoto} className="bg-white text-italia-navy hover:bg-italia-gold hover:text-white rounded-full">
                      <Camera className="w-4 h-4 mr-1.5" /> Capture Photo
                    </Button>
                    <Button onClick={() => { stopCamera(); setMode('select'); }} variant="outline" className="bg-white/20 backdrop-blur text-white border-white/30 hover:bg-white/30 rounded-full">
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {photo && !tryonResult && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
                  <div className="relative aspect-square max-w-md mx-auto bg-slate-50 rounded-2xl overflow-hidden">
                    <img src={photo} alt="Your photo" className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Button onClick={reset} size="icon" className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-red-500">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur rounded-xl p-3">
                      <p className="text-xs font-semibold text-italia-navy mb-1">Selected Frame:</p>
                      <div className="flex items-center gap-2">
                        <img src={selectedProduct.images[0]} alt={selectedProduct.name} className="w-10 h-10 rounded object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-italia-navy line-clamp-1">{selectedProduct.name}</p>
                          <p className="text-[10px] text-slate-500 capitalize">{selectedProduct.frameShape} · {selectedProduct.frameColor}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Generate Button */}
                  <Button
                    onClick={generateAITryOn}
                    disabled={generating}
                    className="w-full gradient-gold text-white hover:opacity-90 rounded-full h-12"
                  >
                    {generating ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" /> AI Generating Try-On...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" /> Generate AI Try-On with {selectedProduct.name.split(' ').slice(0, 2).join(' ')}
                      </>
                    )}
                  </Button>
                  <p className="text-[10px] text-center text-slate-500">
                    AI will analyze your face position and generate a realistic photo wearing the selected frame
                  </p>
                </motion.div>
              )}

              {tryonResult && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
                  <div className="relative aspect-square max-w-md mx-auto bg-slate-50 rounded-2xl overflow-hidden">
                    <img src={tryonResult} alt="AI Try-On Result" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-green-500 text-white border-0">
                        <Check className="w-3 h-3 mr-1" /> AI Try-On Result
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Button onClick={downloadResult} size="icon" className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-italia-navy">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button onClick={reset} size="icon" className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-red-500">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Before/After comparison */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-slate-200">
                      <img src={photo} alt="Original" className="w-full h-full object-cover" />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">YOUR PHOTO</span>
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-italia-blue">
                      <img src={tryonResult} alt="Try-On" className="w-full h-full object-cover" />
                      <span className="absolute bottom-2 left-2 bg-italia-blue text-white text-[10px] px-2 py-0.5 rounded">AI TRY-ON</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => setTryonResult(null)} variant="outline" className="flex-1 rounded-full">
                      <RefreshCw className="w-4 h-4 mr-1.5" /> Try Another Frame
                    </Button>
                    <Button onClick={downloadResult} className="flex-1 bg-italia-navy hover:bg-italia-blue rounded-full">
                      <Download className="w-4 h-4 mr-1.5" /> Download
                    </Button>
                  </div>
                </motion.div>
              )}

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
              <canvas ref={canvasRef} className="hidden" />
            </Card>
          </div>

          {/* Frame picker */}
          <div className="lg:col-span-1">
            <Card className="p-4 border-slate-200">
              <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3">Choose a Frame</h3>
              <div className="grid grid-cols-2 gap-2 max-h-[500px] overflow-y-auto scrollbar-premium">
                {PRODUCTS.filter((p) => ['eyeglasses', 'sunglasses'].includes(p.categorySlug)).slice(0, 12).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedProduct(p);
                      setTryonResult(null);
                      if (photo) toast.success(`Selected: ${p.name}`);
                    }}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedProduct.id === p.id ? 'border-italia-blue scale-105' : 'border-transparent hover:border-slate-300'
                    }`}
                  >
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                    {selectedProduct.id === p.id && (
                      <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-italia-blue text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-1.5">
                      <p className="text-[10px] text-white font-medium line-clamp-1">{p.name}</p>
                      <p className="text-[9px] text-italia-gold">₹{p.price.toLocaleString('en-IN')}</p>
                    </div>
                  </button>
                ))}
              </div>

              <Button onClick={() => navigate('shop', null, 'eyeglasses')} variant="outline" className="w-full mt-3 rounded-full">
                Browse All Frames
              </Button>
            </Card>

            {/* AI Info */}
            <Card className="p-4 border-slate-200 mt-4 bg-gradient-to-br from-italia-blue/5 to-italia-gold/5">
              <div className="flex gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-italia-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-italia-navy">How AI Try-On Works</p>
                </div>
              </div>
              <ol className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span className="font-bold text-italia-blue">1.</span> Upload or capture a clear front-facing photo</li>
                <li className="flex gap-2"><span className="font-bold text-italia-blue">2.</span> Select a frame from our 200+ collection</li>
                <li className="flex gap-2"><span className="font-bold text-italia-blue">3.</span> AI analyzes your face shape & position</li>
                <li className="flex gap-2"><span className="font-bold text-italia-blue">4.</span> AI generates a realistic try-on photo</li>
                <li className="flex gap-2"><span className="font-bold text-italia-blue">5.</span> Download or try another frame!</li>
              </ol>
              <div className="mt-3 p-2 rounded-lg bg-italia-mist">
                <p className="text-[10px] text-slate-600">
                  💡 For best results: use good lighting, look straight at the camera, no other faces in the photo.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
