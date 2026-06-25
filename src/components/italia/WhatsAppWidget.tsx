'use client';

import { STORE_INFO } from '@/lib/data';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowHint(true), 3000);
    const t2 = setTimeout(() => setShowHint(false), 10000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[320px] max-w-[calc(100vw-2rem)]"
          >
            <div className="bg-white rounded-2xl shadow-italia-lg overflow-hidden border border-slate-200">
              {/* Header */}
              <div className="bg-green-500 p-4 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Village Eyecare Support</p>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Online now
                  </p>
                </div>
                <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {/* Body */}
              <div className="p-4 bg-slate-50">
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm mb-3 max-w-[85%]">
                  <p className="text-sm text-slate-700">
                    Hi there! Welcome to Village Eyecare. How can we help you today? Choose an option or type your message.
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Just now</span>
                </div>
                <div className="space-y-2">
                  {[
                    'I want to know about offers',
                    'Help me choose a frame',
                    'Upload my prescription',
                    'Track my order',
                  ].map((q) => (
                    <a
                      key={q}
                      href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(q)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-italia-navy hover:border-green-500 hover:bg-green-50 transition-colors"
                    >
                      {q}
                    </a>
                  ))}
                </div>
              </div>
              {/* Footer */}
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Italia%20Optical%2C%20I%20have%20a%20question`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 text-sm font-semibold transition-colors"
              >
                Start Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {showHint && !open && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white rounded-2xl shadow-italia-lg p-3 pr-8 max-w-[240px] relative border border-slate-200"
            >
              <button
                onClick={() => setShowHint(false)}
                className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
              <p className="text-xs font-semibold text-italia-navy">Need help? Chat with us!</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Our team is online now</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-italia-lg flex items-center justify-center text-white animate-pulse-ring"
          aria-label="WhatsApp Chat"
        >
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>
      </div>
    </>
  );
}
