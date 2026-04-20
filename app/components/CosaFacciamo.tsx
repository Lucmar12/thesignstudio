'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp } from '../lib/motion';

const disciplines = [
  {
    index: '01',
    name: 'Interior\nDesign',
    tagline: 'Spazio come esperienza sensoriale',
    desc: 'Studio e composizione degli ambienti interni: materiali, luce, proporzioni e atmosfera. Ogni progetto nasce da un ascolto profondo delle esigenze di chi abiterà lo spazio.',
    services: ['Consulenza spaziale', 'Selezione materiali', 'Progettazione arredi', 'Rendering 3D', 'Direzione lavori'],
    seed: 'interor-design.jpg',
  },
  {
    index: '02',
    name: 'Architettura',
    tagline: 'Struttura, materia e sostenibilità',
    desc: 'Collaboro con architetti per ristrutturazioni, nuove costruzioni e recupero dell\'esistente. Approccio bioclimatico, materiali locali, rispetto del costruito.',
    services: ['Ristrutturazione', 'Progettazione bioclimatica', 'Recupero edilizio', 'Dettaglio costruttivo', 'Coordinamento cantiere'],
    seed: 'architettura.jpg',
  },
  {
    index: '03',
    name: 'Branding',
    tagline: 'Identità che comunica un\'idea',
    desc: 'Costruisco sistemi visivi coerenti per studi, imprese e professionisti. Dal naming alla palette, dall\'iconografia al manuale d\'identità — tutto parla con una voce sola.',
    services: ['Brand identity', 'Naming', 'Sistema visivo', 'Manuale d\'uso', 'Brand strategy'],
    seed: 'branding.jpg',
  },
  {
    index: '04',
    name: 'Graphic\nDesign',
    tagline: 'Comunicazione visiva con carattere',
    desc: 'Dal catalogo editoriale al packaging, dal visual social alla segnaletica: ogni artefatto grafico progettato con rigore tipografico e attenzione alla produzione.',
    services: ['Editoria e stampa', 'Packaging', 'Visual per i social', 'Segnaletica', 'Art direction'],
    seed: 'graphic-design.jpg',
  },
];

const fadeUp = makeFadeUp(0.08, 0.75);

export default function CosaFacciamo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id="cosa-facciamo"
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: 'var(--olive-dark)' }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(ellipse at 80% 20%, rgba(245,242,234,0.6) 0%, transparent 60%)`,
        }}
      />

      <div className="px-8 md:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <p
              className="font-sans text-xs tracking-[0.3em] uppercase mb-4 opacity-40"
              style={{ color: 'var(--cream)' }}
            >
              02 — Cosa Facciamo
            </p>
            <h2
              className="font-serif text-5xl md:text-7xl font-light leading-[1.0] tracking-tight"
              style={{ color: 'var(--cream)' }}
            >
              Quattro<br />
              <em>discipline</em>,<br />
              una visione
            </h2>
          </motion.div>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-sans text-sm leading-relaxed max-w-xs opacity-50"
            style={{ color: 'var(--cream)' }}
          >
            Interior, architettura, branding e graphic design: ogni area con la stessa attenzione, gli stessi standard e la stessa cura per i dettagli.
          </motion.p>
        </div>

        {/* 2×2 discipline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.index}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group relative overflow-hidden"
              style={{ minHeight: '480px' }}
            >
              {/* Double-bezel shell */}
              <div
                className="p-1.5 rounded-xl h-full"
                style={{
                  background: 'rgba(245,242,234,0.04)',
                  border: '1px solid rgba(245,242,234,0.1)',
                }}
              >
                {/* Inner core */}
                <div className="relative rounded-[calc(0.75rem-6px)] h-full overflow-hidden flex flex-col justify-between p-8 md:p-10">

                  {/* Background photo */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={`/images/${d.seed}`}
                      alt={d.name.replace('\n', ' ')}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      style={{ filter: 'sepia(0.2) contrast(1.1) brightness(0.3)' }}
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(30,28,22,0.9) 0%, rgba(30,28,22,0.4) 60%, transparent 100%)' }}
                    />
                  </div>

                  {/* Top: index */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40"
                      style={{ color: 'var(--cream)' }}
                    >
                      {d.index}
                    </span>
                    <span
                      className="hidden sm:block font-sans text-[10px] tracking-[0.15em] uppercase opacity-30 italic"
                      style={{ color: 'var(--cream)' }}
                    >
                      {d.tagline}
                    </span>
                  </div>

                  {/* Bottom: content */}
                  <div className="relative z-10 flex flex-col gap-5">
                    <h3
                      className="font-serif text-4xl md:text-5xl font-light leading-[0.95] tracking-tight"
                      style={{ color: 'var(--cream)', whiteSpace: 'pre-line' }}
                    >
                      {d.name}
                    </h3>

                    <p
                      className="font-sans text-sm leading-relaxed opacity-55 max-w-sm"
                      style={{ color: 'var(--cream)' }}
                    >
                      {d.desc}
                    </p>

                    {/* Service tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {d.services.map((s) => (
                        <span
                          key={s}
                          className="font-sans text-[10px] tracking-[0.12em] uppercase px-2.5 py-1"
                          style={{
                            border: '1px solid rgba(245,242,234,0.2)',
                            color: 'var(--cream)',
                            opacity: 0.6,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
