'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay so the banner doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-xl"
          style={{
            background: 'var(--charcoal)',
            color: 'var(--cream)',
          }}
        >
          <div className="px-6 py-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-50">
                Cookie
              </p>
              <p className="font-sans text-xs leading-relaxed opacity-70">
                Questo sito utilizza esclusivamente cookie tecnici necessari al suo funzionamento. Nessun dato di profilazione o tracciamento.{' '}
                <Link href="/cookie-policy" className="underline underline-offset-2 hover:opacity-100 transition-opacity duration-200">
                  Informativa cookie
                </Link>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="font-sans text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 transition-opacity duration-200 hover:opacity-80"
                style={{ background: 'var(--cream)', color: 'var(--charcoal)' }}
              >
                Accetta
              </button>
              <button
                onClick={decline}
                className="font-sans text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 opacity-50 hover:opacity-80 transition-opacity duration-200"
                style={{ border: '1px solid rgba(245,242,234,0.2)' }}
              >
                Rifiuta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
