'use client';

import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
  ChevronLeft, Upload, FileText, Check, X, Eye, Camera, Info, Clock, Trash2
} from 'lucide-react';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const SPH_OPTIONS = ['Plano', '+0.25', '+0.50', '+0.75', '+1.00', '+1.25', '+1.50', '+1.75', '+2.00', '+2.25', '+2.50', '+2.75', '+3.00', '+3.25', '+3.50', '+3.75', '+4.00', '+4.25', '+4.50', '+4.75', '+5.00', '-0.25', '-0.50', '-0.75', '-1.00', '-1.25', '-1.50', '-1.75', '-2.00', '-2.25', '-2.50', '-2.75', '-3.00', '-3.25', '-3.50', '-3.75', '-4.00', '-4.25', '-4.50', '-4.75', '-5.00', '-5.50', '-6.00', '-6.50', '-7.00', '-8.00'];

export function PrescriptionUpload() {
  const navigate = useStore((s) => s.navigate);
  const addPrescription = useStore((s) => s.addPrescription);
  const prescriptions = useStore((s) => s.prescriptions);
  const removePrescription = useStore((s) => s.removePrescription);

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [manual, setManual] = useState({
    rightSPH: '', rightCYL: '', rightAXIS: '',
    leftSPH: '', leftCYL: '', leftAXIS: '',
    pd: '', notes: '',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File too large. Max 5MB allowed.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUploadedImage(ev.target?.result as string);
      toast.success('Prescription uploaded!');
    };
    reader.readAsDataURL(file);
  };

  const saveImagePrescription = () => {
    if (!uploadedImage) return;
    addPrescription({ imageUrl: uploadedImage });
    toast.success('Prescription saved to your records');
    setUploadedImage(null);
    navigate('account');
  };

  const saveManualPrescription = () => {
    if (!manual.rightSPH && !manual.leftSPH) {
      toast.error('Please enter at least Right SPH or Left SPH');
      return;
    }
    addPrescription(manual);
    toast.success('Prescription saved successfully');
    setManual({ rightSPH: '', rightCYL: '', rightAXIS: '', leftSPH: '', leftCYL: '', leftAXIS: '', pd: '', notes: '' });
    navigate('account');
  };

  return (
    <div className="animate-fade-in bg-italia-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <button onClick={() => navigate('home')} className="flex items-center gap-1 text-sm text-italia-navy hover:text-italia-blue mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="text-center mb-6">
          <Badge className="bg-italia-blue/10 text-italia-blue border-0 hover:bg-italia-blue/10 mb-2">
            <FileText className="w-3 h-3 mr-1" /> Prescription
          </Badge>
          <h1 className="font-serif-italia text-3xl lg:text-4xl font-bold text-italia-navy">Upload Your Prescription</h1>
          <p className="text-sm text-slate-500 mt-1">Save your prescription for faster checkout and easy reordering</p>
        </div>

        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="bg-white border border-slate-200 rounded-full p-1 h-auto grid grid-cols-2 w-full max-w-md mx-auto">
            <TabsTrigger value="upload" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <Upload className="w-4 h-4 mr-1.5" /> Upload Image
            </TabsTrigger>
            <TabsTrigger value="manual" className="rounded-full data-[state=active]:bg-italia-navy data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-1.5" /> Manual Entry
            </TabsTrigger>
          </TabsList>

          {/* Upload tab */}
          <TabsContent value="upload" className="mt-5">
            <Card className="p-6 border-slate-200">
              {!uploadedImage ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-italia-blue/30 rounded-2xl p-12 text-center cursor-pointer hover:border-italia-blue hover:bg-italia-blue/5 transition-colors"
                >
                  <div className="w-16 h-16 rounded-2xl bg-italia-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-italia-blue" />
                  </div>
                  <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-1">Click to Upload</h3>
                  <p className="text-sm text-slate-500 mb-3">Drag & drop or click to browse</p>
                  <p className="text-xs text-slate-400">JPG, PNG, PDF · Max 5MB</p>
                  <input ref={fileInputRef} type="file" accept="image/*,application/pdf" onChange={handleUpload} className="hidden" />
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="relative rounded-2xl overflow-hidden bg-slate-100 mb-4">
                    <img src={uploadedImage} alt="Prescription" className="w-full max-h-96 object-contain" />
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-red-500 flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={saveImagePrescription} className="flex-1 bg-italia-navy hover:bg-italia-blue rounded-full">
                      <Check className="w-4 h-4 mr-1.5" /> Save Prescription
                    </Button>
                    <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="rounded-full">
                      <Upload className="w-4 h-4 mr-1.5" /> Change
                    </Button>
                  </div>
                </motion.div>
              )}

              <div className="mt-6 p-4 rounded-xl bg-italia-blue/5 border border-italia-blue/20">
                <div className="flex gap-2">
                  <Info className="w-5 h-5 text-italia-blue flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700">
                    <p className="font-semibold text-italia-navy mb-1">How to upload:</p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li>• Take a clear, well-lit photo of your prescription</li>
                      <li>• Ensure all text and numbers are readable</li>
                      <li>• Include the optometrist's signature and date</li>
                      <li>• Prescription must be less than 1 year old</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Manual tab */}
          <TabsContent value="manual" className="mt-5">
            <Card className="p-6 border-slate-200">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Right eye */}
                <div>
                  <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-italia-blue text-white text-sm flex items-center justify-center font-bold">R</span>
                    Right Eye (OD)
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs">SPH (Sphere)</Label>
                      <select
                        value={manual.rightSPH}
                        onChange={(e) => setManual({ ...manual, rightSPH: e.target.value })}
                        className="mt-1 w-full h-10 px-3 rounded-md border border-input bg-background"
                      >
                        <option value="">Select SPH</option>
                        {SPH_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <Label className="text-xs">CYL (Cylinder)</Label>
                      <select
                        value={manual.rightCYL}
                        onChange={(e) => setManual({ ...manual, rightCYL: e.target.value })}
                        className="mt-1 w-full h-10 px-3 rounded-md border border-input bg-background"
                      >
                        <option value="">Select CYL</option>
                        {SPH_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <Label className="text-xs">AXIS (°)</Label>
                      <Input
                        type="number"
                        value={manual.rightAXIS}
                        onChange={(e) => setManual({ ...manual, rightAXIS: e.target.value })}
                        placeholder="0-180"
                        min="0" max="180"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Left eye */}
                <div>
                  <h3 className="font-serif-italia text-lg font-bold text-italia-navy mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-italia-gold text-white text-sm flex items-center justify-center font-bold">L</span>
                    Left Eye (OS)
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs">SPH (Sphere)</Label>
                      <select
                        value={manual.leftSPH}
                        onChange={(e) => setManual({ ...manual, leftSPH: e.target.value })}
                        className="mt-1 w-full h-10 px-3 rounded-md border border-input bg-background"
                      >
                        <option value="">Select SPH</option>
                        {SPH_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <Label className="text-xs">CYL (Cylinder)</Label>
                      <select
                        value={manual.leftCYL}
                        onChange={(e) => setManual({ ...manual, leftCYL: e.target.value })}
                        className="mt-1 w-full h-10 px-3 rounded-md border border-input bg-background"
                      >
                        <option value="">Select CYL</option>
                        {SPH_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <Label className="text-xs">AXIS (°)</Label>
                      <Input
                        type="number"
                        value={manual.leftAXIS}
                        onChange={(e) => setManual({ ...manual, leftAXIS: e.target.value })}
                        placeholder="0-180"
                        min="0" max="180"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs">PD (Pupillary Distance, mm)</Label>
                    <Input
                      value={manual.pd}
                      onChange={(e) => setManual({ ...manual, pd: e.target.value })}
                      placeholder="e.g., 62"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Notes (optional)</Label>
                    <Textarea
                      value={manual.notes}
                      onChange={(e) => setManual({ ...manual, notes: e.target.value })}
                      placeholder="Any additional notes..."
                      className="mt-1 min-h-[40px]"
                    />
                  </div>
                </div>
              </div>

              <Button onClick={saveManualPrescription} className="w-full mt-6 bg-italia-navy hover:bg-italia-blue rounded-full">
                <Check className="w-4 h-4 mr-1.5" /> Save Prescription
              </Button>

              <div className="mt-4 p-3 rounded-xl bg-italia-gold/10 text-xs text-slate-700 flex items-start gap-2">
                <Info className="w-4 h-4 text-italia-gold flex-shrink-0 mt-0.5" />
                <p>Not sure about your prescription? Visit our store in Karnal for a free eye checkup, or call us at <strong>+91 87082-70548</strong>.</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* History */}
        {prescriptions.length > 0 && (
          <div className="mt-8">
            <h2 className="font-serif-italia text-xl font-bold text-italia-navy mb-3">Saved Prescriptions</h2>
            <div className="space-y-3">
              {prescriptions.map((rx) => (
                <Card key={rx.id} className="p-4 border-slate-200">
                  <div className="flex items-start gap-4">
                    {rx.imageUrl ? (
                      <img src={rx.imageUrl} alt="Prescription" className="w-16 h-16 rounded-lg object-cover" />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-italia-blue/10 flex items-center justify-center">
                        <FileText className="w-7 h-7 text-italia-blue" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-italia-navy flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> {new Date(rx.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 text-xs text-slate-600">
                        <p>R SPH: <span className="font-semibold text-italia-navy">{rx.rightSPH || '—'}</span></p>
                        <p>L SPH: <span className="font-semibold text-italia-navy">{rx.leftSPH || '—'}</span></p>
                        {rx.pd && <p>PD: <span className="font-semibold text-italia-navy">{rx.pd}</span></p>}
                      </div>
                    </div>
                    <button
                      onClick={() => { removePrescription(rx.id); toast.success('Removed'); }}
                      className="text-slate-400 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
