'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { makeFadeUp } from '../../lib/motion';

const fadeUp = makeFadeUp(0.08);

const principi = [
  {
    index: '01',
    title: 'Durabilità',
    short: 'Progettare per durare, non per essere sostituito',
    detail: 'Un mobile ben fatto che dura vent\'anni è più sostenibile di dieci sostituti usa-e-getta. Scelgo fornitori artigiani che usano giunti a incastro, finiture naturali, strutture riparabili.',
    img: 'eco-wood-craft',
  },
  {
    index: '02',
    title: 'Biofilia',
    short: 'Connettere gli spazi con la natura circostante',
    detail: 'Ventilazione naturale, illuminazione zenitale, materiali che respirano. Il benessere di chi abita uno spazio è strettamente legato alla qualità dell\'aria, alla luce naturale e alla presenza di elementi vivi.',
    img: 'eco-natural-light',
  },
  {
    index: '03',
    title: 'Recupero e riuso',
    short: 'Il miglior materiale è quello già esistente',
    detail: 'Prima di comprare, cerco. Travi recuperate, mattoni di demolizione, pietra di riuso: ogni elemento con una storia porta nei nuovi spazi un carattere irripetibile che nessun materiale nuovo può eguagliare.',
    img: 'eco-reclaimed-wood',
  },
  {
    index: '04',
    title: 'Efficienza energetica',
    short: 'Design che riduce il fabbisogno energetico',
    detail: 'L\'orientamento delle aperture, la scelta dell\'inerzia termica delle pareti, i colori delle superfici: il design può ridurre drasticamente il consumo energetico di un edificio senza compromettere l\'estetica.',
    img: 'eco-passive-house',
  },
  {
    index: '05',
    title: 'Artigianato locale',
    short: 'Sostenere le maestranze del territorio',
    detail: 'Collaboro con ceramisti, falegnami, ferri battuti e tessitori umbri. Sostenere l\'artigianato locale significa preservare saperi antichi, ridurre gli sprechi di produzione e ottenere pezzi unici su misura.',
    img: 'eco-artisan-craft',
  },
];

export default function EcoPrincipi() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 md:py-40 overflow-hidden"
      style={{ background: 'var(--olive-dark)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(245,242,234,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="relative px-8 md:px-14 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-5 opacity-40"
              style={{ color: 'var(--cream)' }}
            >
              I cinque principi
            </p>
            <h2
              className="font-serif text-5xl md:text-6xl font-light leading-[1.0] tracking-tight"
              style={{ color: 'var(--cream)' }}
            >
              Come lavoro<br />
              <em>nel rispetto</em><br />
              dell&apos;ambiente
            </h2>
          </motion.div>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="self-end font-sans text-sm leading-relaxed opacity-40 max-w-sm"
            style={{ color: 'var(--cream)' }}
          >
            Ogni principio si traduce in scelte concrete e misurabili, non in dichiarazioni d&apos;intenti. Tocca o passa il cursore su ciascuno per saperne di più.
          </motion.p>
        </div>

        {/* Principi list */}
        <div style={{ borderTop: '1px solid rgba(245,242,234,0.1)' }}>
          {principi.map((p, i) => (
            <motion.div
              key={p.index}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_auto] items-start gap-3 md:gap-6 py-6 md:py-8 cursor-pointer group"
              style={{ borderBottom: '1px solid rgba(245,242,234,0.1)' }}
              onMouseEnter={() => setActive(p.index)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === p.index ? null : p.index)}
            >
              {/* Number */}
              <span
                className="hidden md:block font-sans text-[10px] tracking-widest pt-1 transition-opacity duration-300"
                style={{
                  color: 'var(--cream)',
                  opacity: active === p.index ? 0.6 : 0.2,
                }}
              >
                {p.index}
              </span>

              {/* Title */}
              <h3
                className="font-serif text-xl md:text-3xl font-light tracking-tight transition-opacity duration-300"
                style={{
                  color: 'var(--cream)',
                  opacity: active === p.index ? 1 : 0.6,
                }}
              >
                <span className="md:hidden font-sans text-[10px] tracking-widest opacity-40 mr-3" style={{ color: 'var(--cream)' }}>{p.index}</span>
                {p.title}
              </h3>

              {/* Short / expanded detail */}
              <div className="flex flex-col gap-2">
                <p
                  className="font-sans text-sm transition-opacity duration-300"
                  style={{
                    color: 'var(--cream)',
                    opacity: active === p.index ? 0 : 0.35,
                  }}
                >
                  {p.short}
                </p>
                <AnimatePresence>
                  {active === p.index && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 0.6, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.35 }}
                      className="font-sans text-sm leading-relaxed max-w-md"
                      style={{ color: 'var(--cream)' }}
                    >
                      {p.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Arrow indicator */}
              <motion.span
                animate={{ x: active === p.index ? 4 : 0, opacity: active === p.index ? 0.6 : 0.15 }}
                transition={{ duration: 0.3 }}
                className="font-sans text-lg hidden md:block mt-1"
                style={{ color: 'var(--cream)' }}
              >
                →
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
