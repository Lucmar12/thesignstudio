'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp } from '../lib/motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp = makeFadeUp(0.12);

const tags = [
  { label: 'Interior Design', href: null },
  { label: 'Architettura', href: null },
  { label: 'Graphic Design', href: null },
  { label: 'Branding', href: null },
  { label: 'Ecosostenibilità', href: '/ecosostenibilita', highlight: true },
];

export default function ChiSiamo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id="chi-siamo"
      ref={ref}
      className="relative py-32 md:py-40 px-8 md:px-14 overflow-hidden"
      style={{ background: 'var(--bone)' }}
    >
      {/* Section number */}
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="font-sans text-xs tracking-[0.3em] uppercase mb-16 opacity-40"
        style={{ color: 'var(--charcoal)' }}
      >
        01 — Chi Siamo
      </motion.p>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-x-14 gap-y-12 items-start">

        {/* Large serif headline */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <h2
            className="font-serif text-5xl md:text-7xl font-light leading-[1.0] tracking-tight"
            style={{ color: 'var(--charcoal)' }}
          >
            Rendere<br />
            <em>l&apos;invisibile</em><br />
            visibile
          </h2>
        </motion.div>

        {/* Text column */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-7 pt-2"
        >
          <p className="font-sans text-sm leading-relaxed max-w-sm" style={{ color: 'var(--muted)' }}>
            Lavoriamo su quattro discipline con la stessa attenzione: interior design, architettura, branding e graphic design. Non sono ambiti separati — spesso si incontrano nello stesso progetto.
          </p>
          <p className="font-sans text-sm leading-relaxed max-w-sm" style={{ color: 'var(--muted)' }}>
            Non ci definiamo con uno stile preciso: la nostra unica corrente è la richiesta del cliente, mescolata all&apos;ecosostenibilità e a una ricerca visiva autentica, che valga tanto per uno spazio quanto per un&apos;identità di marca.
          </p>
          <p className="font-sans text-sm leading-relaxed max-w-sm" style={{ color: 'var(--muted)' }}>
            Che si tratti di un appartamento, di un edificio, di un logo o di un catalogo — il processo è sempre lo stesso: ascoltare, osservare, capire, progettare.
          </p>

          <div className="w-12 h-px mt-1" style={{ background: 'var(--border)' }} />

          {/* Tags — improved: eco tag highlighted + linked */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) =>
              tag.href ? (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="group inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 transition-all duration-300"
                  style={{
                    background: 'var(--olive-dark)',
                    color: 'var(--cream)',
                    border: '1px solid var(--olive-dark)',
                  }}
                >
                  {tag.label}
                  <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 inline-block">→</span>
                </Link>
              ) : (
                <span
                  key={tag.label}
                  className="font-sans text-[10px] tracking-[0.15em] uppercase px-3 py-1.5"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                >
                  {tag.label}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="hidden md:block relative"
          style={{ width: '240px' }}
        >
          <div
            className="p-1.5 rounded-[1.5rem]"
            style={{ background: 'rgba(62,59,46,0.06)', border: '1px solid var(--border)' }}
          >
            <div className="overflow-hidden rounded-[calc(1.5rem-6px)] aspect-[3/4]">
              <Image
                src="/images/design_studio_workspace.jpeg"
                alt="Studio interni"
                fill
                sizes="(max-width: 768px) 80vw, 25vw"
                className="object-cover"
                style={{ filter: 'sepia(0.2) contrast(1.02) brightness(0.92)' }}
              />
            </div>
          </div>
          <p
            className="absolute -bottom-5 -right-3 font-sans text-[10px] tracking-[0.2em] uppercase opacity-40"
            style={{ color: 'var(--charcoal)' }}
          >
            Est. 2023
          </p>
        </motion.div>
      </div>

      {/* Full-width quote */}
      <motion.blockquote
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mt-24 md:mt-32 max-w-3xl mx-auto text-center"
      >
        <p
          className="font-serif text-2xl md:text-4xl font-light italic leading-snug tracking-tight"
          style={{ color: 'var(--olive-mid)' }}
        >
          &ldquo;Man mano che evolviamo,<br className="hidden md:block" />
          anche le nostre case dovrebbero farlo.&rdquo;
        </p>
      </motion.blockquote>
    </section>
  );
}
