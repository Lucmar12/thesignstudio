'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp } from '../../lib/motion';

const fadeUp = makeFadeUp(0.08);

const materiali = [
  {
    name: 'Travertino Umbro',
    origin: 'Terni, Umbria',
    properties: ['Bioclimatico', 'Inerzia termica', 'Locale'],
    desc: 'Estratto a pochi chilometri dai cantieri. Regola l\'umidità naturalmente e dura secoli.',
    seed: 'travertine-stone-warm',
    tone: 'Beige caldo · Bianco avorio',
  },
  {
    name: 'Legno di Cerro',
    origin: 'Appennino Umbro-Marchigiano',
    properties: ['Rinnovabile', 'CO₂ negativo', 'Strutturale'],
    desc: 'Legname a gestione forestale certificata. Struttura portante, pavimenti, rivestimenti.',
    seed: 'oak-wood-texture',
    tone: 'Bruno dorato · Nocciola',
  },
  {
    name: 'Cotto di Deruta',
    origin: 'Deruta, Umbria',
    properties: ['Artigianale', 'Traspirante', 'Riciclabile'],
    desc: 'Argilla locale lavorata a mano. Zero emissioni in opera, durata generazionale.',
    seed: 'terracotta-tiles-warm',
    tone: 'Rosso umbro · Arancio miele',
  },
  {
    name: 'Calce Idraulica Naturale',
    origin: 'Appennino Centrale',
    properties: ['Traspirante', 'Antibatterica', '0 VOC'],
    desc: 'Intonaco e pitture naturali. Regola la qualità dell\'aria interna e non rilascia sostanze chimiche.',
    seed: 'lime-plaster-wall',
    tone: 'Bianco calce · Grigio pietra',
  },
];

export default function EcoMateriali() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      ref={ref}
      className="py-32 md:py-40 px-8 md:px-14"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-5 opacity-40"
              style={{ color: 'var(--charcoal)' }}
            >
              La materia prima
            </p>
            <h2
              className="font-serif text-5xl md:text-6xl font-light leading-[1.0] tracking-tight"
              style={{ color: 'var(--charcoal)' }}
            >
              Materiali<br />
              che <em>raccontano</em><br />
              il territorio
            </h2>
          </motion.div>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="self-end font-sans text-sm leading-relaxed opacity-50 max-w-sm"
            style={{ color: 'var(--charcoal)' }}
          >
            Preferisco materiali con una storia geografica definita. Ogni pietra, ogni trave, ogni tegola porta con sé il paesaggio da cui proviene — e lo porta negli spazi in cui arriva.
          </motion.p>
        </div>

        {/* Asymmetric grid: 2+2 staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materiali.map((m, i) => (
            <motion.article
              key={m.name}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className={`group relative overflow-hidden ${i % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              {/* Double-bezel shell */}
              <div
                className="p-1.5 rounded-xl"
                style={{
                  background: 'rgba(62,59,46,0.05)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Inner core: photo */}
                <div className="relative overflow-hidden rounded-[calc(0.75rem-6px)] aspect-[4/3]">
                  <Image
                    src={`https://picsum.photos/seed/${m.seed}/800/600`}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    style={{ filter: 'sepia(0.15) contrast(1.05) brightness(0.92)' }}
                  />
                  {/* Tone chip */}
                  <div
                    className="absolute bottom-4 left-4 font-sans text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(253,251,247,0.85)',
                      color: 'var(--charcoal)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {m.tone}
                  </div>
                </div>
              </div>

              {/* Card body — outside the bezel per design spec */}
              <div className="px-1 pt-5 pb-2">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="font-serif text-xl font-light tracking-tight"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {m.name}
                  </h3>
                  <span
                    className="font-sans text-[10px] tracking-[0.15em] uppercase opacity-45 shrink-0 pt-1"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {m.origin}
                  </span>
                </div>

                <p
                  className="font-sans text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--muted)' }}
                >
                  {m.desc}
                </p>

                {/* Property tags */}
                <div className="flex flex-wrap gap-2">
                  {m.properties.map((prop) => (
                    <span
                      key={prop}
                      className="font-sans text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(62,59,46,0.07)',
                        color: 'var(--olive-mid)',
                      }}
                    >
                      {prop}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Full-width closing statement */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-24 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p
            className="font-serif text-2xl md:text-3xl font-light italic max-w-xl leading-snug"
            style={{ color: 'var(--charcoal)' }}
          >
            &ldquo;Ogni materiale scelto è una risposta all&apos;ambiente, non una sottrazione.&rdquo;
          </p>
          <p
            className="font-sans text-xs tracking-[0.15em] opacity-35 uppercase max-w-xs"
            style={{ color: 'var(--charcoal)' }}
          >
            The-Sign Studio · Toscana · Umbria
          </p>
        </motion.div>
      </div>
    </section>
  );
}
