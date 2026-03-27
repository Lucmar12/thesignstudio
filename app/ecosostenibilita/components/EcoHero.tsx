'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { EASE } from '../../lib/motion';
import Link from 'next/link';
import Image from 'next/image';

export default function EcoHero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden flex flex-col" style={{ background: 'var(--olive-dark)' }}>

      {/* Background photo — low opacity, only mood */}
      <div
        ref={bgRef}
        className="absolute will-change-transform"
        style={{ inset: '-12% 0', zIndex: 0 }}
      >
        <Image
          src="https://picsum.photos/seed/umbria-hills-forest/1800/1000"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.45)', mixBlendMode: 'luminosity' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(62,59,46,0.6) 0%, rgba(30,28,22,0.95) 100%)' }}
        />
      </div>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
        className="relative z-10 px-8 md:px-14 pt-28 md:pt-32"
      >
        <Link
          href="/"
          className="font-sans text-[10px] tracking-[0.25em] uppercase opacity-40 hover:opacity-80 transition-opacity duration-300 flex items-center gap-2"
          style={{ color: 'var(--cream)' }}
        >
          ← The-Sign Studio
        </Link>
      </motion.div>

      {/* Main content — bottom-anchored */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 md:px-14 pb-16 md:pb-24">

        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: EASE }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="block w-8 h-px" style={{ background: 'rgba(245,242,234,0.4)' }} />
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-50" style={{ color: 'var(--cream)' }}>
            La filosofia dello studio
          </p>
        </motion.div>

        {/* Headline — brutally large, left-aligned */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.1, ease: EASE }}
            className="font-serif font-light tracking-tight leading-[0.9]"
            style={{ color: 'var(--cream)', fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            Progettare<br />
            <em>per</em><br />
            restare
          </motion.h1>
        </div>

        {/* Divider + statement row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.9, ease: EASE }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-end"
          style={{ borderTop: '1px solid rgba(245,242,234,0.12)', paddingTop: '2rem' }}
        >
          <p
            className="font-sans text-sm leading-[1.8] opacity-55 max-w-md"
            style={{ color: 'var(--cream)' }}
          >
            L&apos;ecosostenibilità non è un&apos;opzione aggiuntiva nei miei progetti. È il criterio con cui scelgo ogni materiale, ogni fornitore, ogni dettaglio costruttivo — prima ancora di pensare all&apos;estetica.
          </p>

          {/* Scroll hint */}
          <div className="hidden md:flex justify-end items-end">
            <div className="flex items-center gap-3 opacity-30">
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="block w-px h-10"
                style={{ background: 'var(--cream)' }}
              />
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase" style={{ color: 'var(--cream)' }}>
                Scorri
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
