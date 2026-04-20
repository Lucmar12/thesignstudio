'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE } from '../lib/motion';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: '01 Chi Siamo', href: '#chi-siamo' },
  { label: '02 Cosa Facciamo', href: '#cosa-facciamo' },
  { label: '03 Progetti', href: '#progetti' },
  { label: '04 Come Lavoriamo', href: '#come-lavoriamo' },
  { label: '05 Contatti', href: '#contatti' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', observer, { passive: true });
    return () => window.removeEventListener('scroll', observer);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5"
      >
        {/* Logo SVG — hidden on mobile until scrolled */}
        <Link
          href="/"
          className="relative block"
          style={{
            width: '100px',
            height: '56px',
            opacity: (scrolled || open) ? 1 : 0,
            pointerEvents: (scrolled || open) ? 'auto' : 'none',
            transition: 'opacity 0.5s ease',
          }}
          aria-label="The-Sign Studio"
        >
          <Image
            src="/logo.svg"
            alt="The-Sign Studio"
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'left center',
              filter: scrolled && !open
                ? 'invert(1) sepia(1) saturate(0) brightness(0.18)'
                : 'invert(1) sepia(1) saturate(0) brightness(1)',
              transition: 'filter 0.5s ease',
            }}
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-5 flex flex-col justify-between cursor-pointer"
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="block h-px w-full origin-center"
            style={{ background: scrolled && !open ? 'var(--charcoal)' : 'var(--cream)', transition: 'background 0.5s ease' }}
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="block h-px w-full"
            style={{ background: scrolled && !open ? 'var(--charcoal)' : 'var(--cream)', transition: 'background 0.5s ease' }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="block h-px w-full origin-center"
            style={{ background: scrolled && !open ? 'var(--charcoal)' : 'var(--cream)', transition: 'background 0.5s ease' }}
          />
        </button>
      </motion.header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-end pb-20 px-8 md:px-12"
            style={{ background: 'var(--olive-dark)' }}
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.4, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="font-sans text-xs tracking-[0.25em] uppercase mb-12"
              style={{ color: 'var(--cream)' }}
            >
              Navigazione
            </motion.p>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: EASE }}
                  onClick={() => handleLink(link.href)}
                  className="group text-left font-serif text-4xl md:text-6xl font-light tracking-tight leading-tight hover:opacity-60 transition-opacity duration-300"
                  style={{ color: 'var(--cream)' }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Menu footer — social + eco link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-16 flex items-center justify-between"
            >
              {/* Social placeholders */}
              <div className="flex gap-6">
                {[
                  { label: 'Instagram', href: 'https://www.instagram.com/the_signstudioofficial' },
                  { label: 'LinkedIn', href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-35 hover:opacity-70 transition-opacity duration-300"
                    style={{ color: 'var(--cream)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              <Link
                href="/ecosostenibilita"
                onClick={() => setOpen(false)}
                className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-35 hover:opacity-70 transition-opacity duration-300"
                style={{ color: 'var(--cream)' }}
              >
                Ecosostenibilità →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
