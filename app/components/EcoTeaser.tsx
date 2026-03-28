'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp, EASE } from '../lib/motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp = makeFadeUp(0.09);

const pillars = [
  'Filiera artigianale locale',
  'Biofilia e qualità dell\'aria',
  'Recupero dell\'esistente',
  'Efficienza energetica passiva',
  '0 VOC · 0 sostanze tossiche',
];

export default function EcoTeaser() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
    >
      {/* Split: left dark, right photo */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80dvh]">

        {/* Left — content */}
        <div
          className="flex flex-col justify-center px-8 md:px-14 py-24 md:py-32 relative z-10"
          style={{ background: 'var(--charcoal)' }}
        >
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-6 h-px" style={{ background: 'rgba(245,242,234,0.3)' }} />
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40" style={{ color: 'var(--cream)' }}>
              Una scelta di fondo
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-serif font-light tracking-tight leading-[0.95] mb-8"
            style={{ color: 'var(--cream)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            La sostenibilità<br />
            è il punto di<br />
            <em>partenza</em>,<br />
            non di arrivo.
          </motion.h2>

          {/* Body */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-sans text-sm leading-[1.8] opacity-50 max-w-sm mb-10"
            style={{ color: 'var(--cream)' }}
          >
            In ogni progetto di interior o architettura scelgo materiali del territorio, artigiani locali e soluzioni costruttive che rispettino l&apos;ambiente. Non per moda: perché è l&apos;unico modo di progettare con onestà.
          </motion.p>

          {/* Pillars — inline chips */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-2 mb-12"
          >
            {pillars.map((p, i) => (
              <span
                key={p}
                className="font-sans text-[10px] tracking-[0.12em] uppercase px-3 py-1.5"
                style={{
                  border: '1px solid rgba(245,242,234,0.15)',
                  color: 'var(--cream)',
                  opacity: 0.55,
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {p}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Link
              href="/ecosostenibilita"
              className="group inline-flex items-center gap-4 font-sans text-sm tracking-[0.12em] uppercase py-4 px-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-80 active:scale-[0.98]"
              style={{ background: 'var(--cream)', color: 'var(--charcoal)' }}
            >
              Leggi la filosofia
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="w-7 h-7 flex items-center justify-center rounded-full"
                style={{ background: 'rgba(62,59,46,0.1)' }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Right — photo with grain */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative min-h-[55vw] md:min-h-0 overflow-hidden"
        >
          <Image
            src="/images/travertine_stone_detail.jpeg"
            alt="Materiali naturali umbri"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{ filter: 'sepia(0.25) contrast(1.08) brightness(0.78)' }}
          />
          {/* Overlay gradient left edge to blend with dark panel */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(30,28,22,0.4) 0%, transparent 40%)' }}
          />

          {/* Floating label */}
          <div
            className="absolute bottom-8 right-8 font-serif text-sm italic opacity-50"
            style={{ color: 'var(--cream)' }}
          >
            Pietra umbra · km 0
          </div>
        </motion.div>
      </div>
    </section>
  );
}
