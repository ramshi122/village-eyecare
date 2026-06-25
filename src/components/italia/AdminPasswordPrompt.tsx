'use client';

import { useStore } from '@/lib/store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function AdminPasswordPrompt() {
  const isOpen = useStore((s) => s.isPasswordPromptOpen);
  const closePasswordPrompt = useStore((s) => s.closePasswordPrompt);
  const verifyAdminPassword = useStore((s) => s.verifyAdminPassword);
  const navigate = useStore((s) => s.navigate);
  const login = useStore((s) => s.login);

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when dialog opens (read-only effect, no setState)
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Reset state when dialog closes via derived key
  const [lastOpen, setLastOpen] = useState(isOpen);
  if (lastOpen !== isOpen) {
    setLastOpen(isOpen);
    if (!isOpen) {
      setPassword('');
      setError(false);
      setAttempts(0);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = verifyAdminPassword(password);
    if (success) {
      toast.success('Admin access granted!', { duration: 1500 });
      login('admin@villageeyecare.com', 'Store Admin');
      navigate('admin');
    } else {
      setError(true);
      setAttempts((a) => a + 1);
      toast.error('Incorrect password. Try again.');
      setPassword('');
      setTimeout(() => inputRef.current?.focus(), 100);
      // Close after 5 failed attempts
      if (attempts >= 4) {
        toast.error('Too many attempts. Closing.', { duration: 2000 });
        setTimeout(() => closePasswordPrompt(), 1000);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) closePasswordPrompt(); }}>
      <DialogContent className="max-w-sm p-0 gap-0 overflow-hidden border-0">
        {/* Header with gradient */}
        <div className="gradient-italia p-6 text-center text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-italia-gold/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-italia-blue/30 blur-2xl" />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.1 }}
            className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mx-auto mb-3 border border-white/20"
          >
            <Shield className="w-8 h-8 text-italia-gold" />
          </motion.div>
          <DialogHeader className="p-0 space-y-0">
            <DialogTitle className="font-serif-italia text-xl font-bold text-white">
              Admin Access
            </DialogTitle>
          </DialogHeader>
          <p className="text-xs text-white/70 mt-1">Enter password to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Label htmlFor="admin-password" className="text-xs flex items-center gap-1.5">
              <Lock className="w-3 h-3" /> Password
            </Label>
            <div className="relative mt-1.5">
              <Input
                id="admin-password"
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Enter admin password"
                className={`pr-10 h-12 text-lg tracking-wider font-mono ${error ? 'border-red-500 focus-visible:ring-red-500' : 'border-slate-200 focus-visible:ring-italia-blue'}`}
                inputMode="numeric"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-italia-navy"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
              >
                <span className="w-1 h-1 rounded-full bg-red-500" />
                Incorrect password. {5 - attempts - 1} attempts remaining.
              </motion.p>
            )}
          </div>

          <Button
            type="submit"
            disabled={!password}
            className="w-full h-12 bg-italia-navy hover:bg-italia-blue text-white rounded-full font-semibold"
          >
            Unlock Admin Panel <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={closePasswordPrompt}
            className="w-full text-slate-500 hover:text-italia-navy rounded-full"
          >
            Cancel
          </Button>
        </form>

        {/* Footer */}
        <div className="px-6 pb-5 -mt-2">
          <div className="p-2.5 rounded-lg bg-italia-mist flex items-start gap-2">
            <Lock className="w-3 h-3 text-italia-blue flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-slate-600 leading-relaxed">
              Authorized personnel only. Access is logged and monitored.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
