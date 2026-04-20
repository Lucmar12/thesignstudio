'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp } from '../lib/motion';

const steps = [
  {
    index: '01',
    title: 'Incontro',
    desc: 'Incontro con il cliente e comprensione delle necessità, dei desideri e della visione dello spazio.',
  },
  {
    index: '02',
    title: 'Ricerca',
    desc: 'Brainstorming e preparazione. Raccolta di materiali, ispirazioni e soluzioni su misura.',
  },
  {
    index: '03',
    title: 'Visita',
    desc: 'Analisi dell\'ambiente e valutazione delle potenzialità e dei vincoli strutturali dello spazio.',
  },
  {
    index: '04',
    title: 'Design',
    desc: 'Selezione del layout e dello stile. Definizione di materiali, colori, arredi e soluzioni di illuminazione.',
  },
  {
    index: '05',
    title: 'Finalizzare',
    desc: 'Dettagli finali del design e presentazione. Revisione condivisa del progetto prima dell\'esecuzione.',
  },
  {
    index: '06',
    title: 'Creazione',
    desc: 'Creazione del progetto entro il budget. Coordinamento con artigiani e fornitori di fiducia.',
  },
  {
    index: '07',
    title: 'Installazione',
    desc: 'Installazione e tocchi finali. Seguirai ogni fase fino alla consegna dello spazio completato.',
  },
];

const fadeUp = makeFadeUp(0.07, 0.7);

export default function ComeLavoriamo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section
      id="come-lavoriamo"
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Split background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div style={{ background: 'var(--olive-dark)' }} />
        <div className="hidden md:block relative overflow-hidden">
          <Image
            src="/images/designprocess.jpg"
            alt="Come lavoriamo"
            fill
            sizes="50vw"
            className="object-cover"
            style={{ filter: 'sepia(0.3) contrast(1.05) brightness(0.8)' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(30,28,22,0.35)' }} />
        </div>
      </div>

      <div className="relative z-10 px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Left col */}
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-sans text-xs tracking-[0.3em] uppercase mb-6 opacity-40"
            style={{ color: 'var(--cream)' }}
          >
            04 — Come Lavoriamo
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-serif text-5xl md:text-6xl font-light leading-[1.0] tracking-tight mb-10"
            style={{ color: 'var(--cream)' }}
          >
            Il nostro<br />
            <em>processo</em>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-sans text-sm leading-relaxed opacity-50 max-w-sm mb-14"
            style={{ color: 'var(--cream)' }}
          >
            Un percorso chiaro e condiviso, in cui sarai seguito e ascoltato in ogni passo fino al risultato finale.
          </motion.p>

          {/* Steps list */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={step.index}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group flex gap-6 py-5 cursor-pointer transition-all duration-300"
                style={{ borderTop: '1px solid rgba(245,242,234,0.1)' }}
                onMouseEnter={() => setActiveStep(step.index)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === step.index ? null : step.index)}
              >
                {/* Number */}
                <span
                  className="font-sans text-[10px] tracking-widest pt-1 shrink-0 w-5 transition-opacity duration-300"
                  style={{
                    color: 'var(--cream)',
                    opacity: activeStep === step.index ? 0.7 : 0.25,
                  }}
                >
                  {step.index}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3
                    className="font-serif text-xl font-light transition-opacity duration-300"
                    style={{
                      color: 'var(--cream)',
                      opacity: activeStep === step.index ? 1 : 0.65,
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Expand desc on hover */}
                  <motion.p
                    animate={{
                      opacity: activeStep === step.index ? 0.5 : 0,
                      height: activeStep === step.index ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-xs leading-relaxed overflow-hidden"
                    style={{ color: 'var(--cream)' }}
                  >
                    {step.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(245,242,234,0.1)' }} />
          </div>
        </div>

        {/* Right col — visible only on mobile as stacked photo */}
        <div className="md:hidden relative h-64 overflow-hidden rounded-sm">
          <Image
            src="/images/designprocess.jpg"
            alt="Come lavoriamo"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ filter: 'sepia(0.3) contrast(1.05) brightness(0.8)' }}
          />
        </div>
      </div>
    </section>
  );
}
