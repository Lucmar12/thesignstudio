'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { EASE } from '../lib/motion';
import Image from 'next/image';

export default function Hero() {
  const rightRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (rightRef.current) {
        const y = window.scrollY * 0.25;
        rightRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-[100dvh] grid grid-cols-1 md:grid-cols-[3fr_2fr] overflow-hidden">
      {/* Left — Dark olive panel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="relative flex flex-col justify-end pb-16 px-8 md:px-14 pt-32 md:pt-0 min-h-[100dvh]"
        style={{ background: 'var(--olive-dark)' }}
      >
        {/* Studio name */}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: EASE }}
            className="font-sans text-xs md:text-sm tracking-[0.15em] md:tracking-[0.35em] uppercase mb-8 opacity-50"
            style={{ color: 'var(--cream)' }}
          >
            Interior · Architettura · Branding · Graphic
          </motion.p>

          {/* Logo SVG */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1, ease: EASE }}
          >
            <h1 className="sr-only">The-Sign Studio</h1>
            <div className="relative" style={{ width: 'min(560px, 85vw)', height: 'min(315px, 48vw)' }}>
              <Image
                src="/logo.svg"
                alt="The-Sign Studio"
                fill
                priority
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left bottom',
                  filter: 'invert(1) sepia(1) saturate(0) brightness(1)',
                }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="font-sans text-xs tracking-widest mt-10 uppercase"
            style={{ color: 'var(--cream)' }}
          >
            Est. 2023
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-8 md:left-14 flex items-center gap-3"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="block w-px h-10 opacity-50"
            style={{ background: 'var(--cream)' }}
          />
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase rotate-90 origin-left" style={{ color: 'var(--cream)' }}>
            Scroll
          </span>
        </motion.div>
      </motion.div>

      {/* Right — Photo panel */}
      <div className="hidden md:relative md:block md:overflow-hidden md:min-h-[100dvh]">
        <div
          ref={rightRef}
          className="absolute inset-0 will-change-transform"
          style={{ top: '-8%', bottom: '-8%' }}
        >
          <Image
            src="/images/minimalist_italian_interior.jpeg"
            alt="Progetto architettonico"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            style={{ filter: 'sepia(0.15) brightness(0.9)' }}
          />
          {/* Warm overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(62,59,46,0.25) 0%, transparent 60%)' }}
          />
        </div>

      </div>

      {/* Intro tagline bar — absolute positioned across both panels on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9, ease: EASE }}
        className="absolute bottom-0 left-0 right-0 hidden md:flex items-end justify-between px-14 pb-10 pointer-events-none"
      >
        <span />
        <p
          className="font-sans text-xs tracking-[0.15em] max-w-xs text-right opacity-50"
          style={{ color: 'var(--cream)' }}
        >
          ascoltare, osservare, capire e empatizzare
        </p>
      </motion.div>
    </section>
  );
}
