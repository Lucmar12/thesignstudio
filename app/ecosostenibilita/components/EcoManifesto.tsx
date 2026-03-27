'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp } from '../../lib/motion';

const fadeUp = makeFadeUp(0.08);

const statements = [
  {
    n: '—',
    text: 'Un ambiente bello ma costruito con materiali tossici non è un ambiente sano. La sostenibilità è la prima forma di cura per chi lo abita.',
  },
  {
    n: '—',
    text: 'Il territorio umbro offre pietra, legno, argilla e calce a pochi chilometri dal cantiere. Sceglierli non è un limite — è il progetto stesso.',
  },
  {
    n: '—',
    text: 'Collaboro con architetti che condividono questa visione: ogni apertura, ogni massa muraria, ogni superficie ha un impatto energetico che il design può governare.',
  },
];

export default function EcoManifesto() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-8 md:px-14 relative overflow-hidden"
      style={{ background: 'var(--bone)' }}
    >
      {/* Watermark number */}
      <div
        className="absolute right-0 top-0 select-none pointer-events-none font-serif font-light"
        style={{
          fontSize: 'clamp(200px, 35vw, 480px)',
          color: 'rgba(62,59,46,0.035)',
          lineHeight: 0.85,
          transform: 'translateX(15%)',
        }}
      >
        01
      </div>

      <div className="relative max-w-[1400px] mx-auto">

        {/* Top row: section tag + large opener */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-20 mb-20 md:mb-28">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:pt-3"
          >
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40" style={{ color: 'var(--charcoal)' }}>
              La posizione
            </p>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-serif font-light tracking-tight leading-[1.0]"
            style={{ color: 'var(--charcoal)', fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
          >
            La bellezza di uno spazio<br />
            <em>non può prescindere</em><br />
            dalla sua responsabilità.
          </motion.h2>
        </div>

        {/* Three statements — stacked with left rule */}
        <div className="flex flex-col gap-0" style={{ borderTop: '1px solid var(--border)' }}>
          {statements.map((s, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-20 py-10 md:py-12"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <span className="font-serif text-2xl opacity-20 hidden md:block" style={{ color: 'var(--olive-mid)' }}>
                {s.n}
              </span>
              <p
                className="font-serif text-xl md:text-2xl font-light leading-snug tracking-tight"
                style={{ color: 'var(--charcoal)' }}
              >
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom: photo + quote side by side */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Double-bezel */}
            <div
              className="p-1.5 rounded-xl"
              style={{ background: 'rgba(62,59,46,0.05)', border: '1px solid var(--border)' }}
            >
              <div className="relative overflow-hidden rounded-[calc(0.75rem-6px)] aspect-[16/9]">
                <Image
                  src="https://picsum.photos/seed/umbria-courtyard-arch/1200/700"
                  alt="Architettura sostenibile umbra"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  style={{ filter: 'sepia(0.2) contrast(1.06) brightness(0.88)' }}
                />
              </div>
            </div>
            <p className="mt-3 font-sans text-[10px] tracking-[0.15em] uppercase opacity-35 pl-1" style={{ color: 'var(--charcoal)' }}>
              Progetto di recupero · Umbria
            </p>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-8 md:pl-10 md:pb-6"
          >
            <blockquote
              className="font-serif font-light italic leading-snug tracking-tight"
              style={{ color: 'var(--olive-mid)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
            >
              &ldquo;Ogni materiale ha un prezzo ambientale. Il mio lavoro è farlo valere.&rdquo;
            </blockquote>

            {/* Two key numbers */}
            <div className="flex gap-10 mt-2" style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              {[
                { value: '< 100km', label: 'raggio medio dei materiali' },
                { value: '0 VOC', label: 'finiture prive di composti volatili' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-serif text-2xl md:text-3xl font-light" style={{ color: 'var(--charcoal)' }}>
                    {s.value}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.15em] opacity-40" style={{ color: 'var(--charcoal)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
