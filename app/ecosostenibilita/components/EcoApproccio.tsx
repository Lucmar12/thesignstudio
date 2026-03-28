'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { makeFadeUp, EASE } from '../../lib/motion';

const fadeUp = makeFadeUp(0.07);

const approcci = [
  {
    discipline: 'Interior Design',
    headline: 'Lo spazio che respira',
    img: 'eco-interior-natural-room',
    color: 'var(--cream)',
    bg: 'var(--olive-dark)',
    points: [
      { title: 'Materiali naturali e traspiranti', desc: 'Calce, cotto, legno non trattato: superfici che regolano umidità e qualità dell\'aria senza intervento meccanico.' },
      { title: 'Ciclo vita dei mobili', desc: 'Scegliamo pezzi artigianali riparabili, non collezioni di serie. Un tavolo solido che dura 30 anni vale più di tre sostituti.' },
      { title: 'Luce naturale come progetto', desc: 'L\'orientamento di specchi, superfici riflettenti e aperture riduce la dipendenza dall\'illuminazione artificiale.' },
      { title: 'Colori naturali', desc: 'Pigmenti minerali, ossidi di ferro, terre umbre: colori che non invecchiano perché vengono dalla stessa terra che abitano.' },
    ],
  },
  {
    discipline: 'Architettura',
    headline: 'L\'involucro che protegge',
    img: 'eco-architecture-passive',
    color: 'var(--charcoal)',
    bg: 'var(--cream)',
    points: [
      { title: 'Massa termica e orientamento', desc: 'Collaboriamo con gli architetti per leggere il sole e il vento prima di disegnare una parete. Una casa ben orientata consuma meno senza sacrificare nulla.' },
{ title: 'Recupero dell\'esistente', desc: 'Quando possibile, non si demolisce. Il miglior edificio sostenibile è quello già in piedi: ogni recupero è una scelta contro lo spreco.' },
      { title: 'Dettagli costruttivi certificati', desc: 'Giunti a secco, fissaggi meccanici, finiture smontabili: progetto per il disassemblaggio, non solo per l\'uso.' },
    ],
  },
];

export default function EcoApproccio() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [activePoint, setActivePoint] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'var(--bone)' }}
    >
      {/* Section label */}
      <div className="px-8 md:px-14 pt-24 pb-12">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4"
        >
          <span className="w-8 h-px" style={{ background: 'var(--border)' }} />
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40" style={{ color: 'var(--charcoal)' }}>
            Come si traduce nel progetto
          </p>
        </motion.div>
      </div>

      {/* Two disciplines — stacked full-width panels */}
      {approcci.map((a, ai) => (
        <motion.div
          key={a.discipline}
          custom={ai + 1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 min-h-[60dvh]"
        >
          {/* Photo side */}
          <div
            className={`relative overflow-hidden min-h-[40vw] md:min-h-0 ${ai === 1 ? 'md:order-2' : ''}`}
          >
            <Image
              src={`https://picsum.photos/seed/${a.img}/900/700`}
              alt={a.discipline}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ filter: 'sepia(0.2) contrast(1.06) brightness(0.82)' }}
            />
            {/* Discipline label over photo */}
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <span
                className="font-serif italic font-light opacity-80"
                style={{ color: 'var(--cream)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                {a.discipline}
              </span>
            </div>
          </div>

          {/* Content side */}
          <div
            className={`flex flex-col justify-center px-8 md:px-14 py-16 md:py-20 ${ai === 1 ? 'md:order-1' : ''}`}
            style={{ background: a.bg }}
          >
            <h3
              className="font-serif font-light tracking-tight leading-[1.05] mb-10"
              style={{ color: a.color, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              {a.headline}
            </h3>

            <div className="flex flex-col" style={{ borderTop: `1px solid rgba(${ai === 0 ? '245,242,234' : '62,59,46'},0.15)` }}>
              {a.points.map((p, pi) => {
                const key = `${ai}-${pi}`;
                const isActive = activePoint === key;
                return (
                  <div
                    key={p.title}
                    className="group py-5 cursor-pointer"
                    style={{ borderBottom: `1px solid rgba(${ai === 0 ? '245,242,234' : '62,59,46'},0.15)` }}
                    onMouseEnter={() => setActivePoint(key)}
                    onMouseLeave={() => setActivePoint(null)}
                    onClick={() => setActivePoint(activePoint === key ? null : key)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4
                        className="font-sans text-sm font-medium tracking-tight transition-opacity duration-300"
                        style={{
                          color: a.color,
                          opacity: isActive ? 1 : 0.65,
                        }}
                      >
                        {p.title}
                      </h4>
                      <motion.span
                        animate={{ rotate: isActive ? 45 : 0, opacity: isActive ? 0.7 : 0.25 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="font-sans text-base shrink-0 mt-px"
                        style={{ color: a.color }}
                      >
                        +
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="font-sans text-sm leading-relaxed overflow-hidden mt-3"
                          style={{ color: a.color, opacity: 0.55 }}
                        >
                          {p.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
