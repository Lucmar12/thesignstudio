'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp } from '../lib/motion';
import Image from 'next/image';

// Layout 3 colonne, 3 righe — nessuna cella vuota:
// Riga 1: [p1 ×2] [p2 ×1 tall]
// Riga 2: [p3 ×1] [p4 ×1] [p2 continua]
// Riga 3: [p5 ×1] [p6 ×2]
const projects = [
  {
    id: 'p1',
    title: 'Appartamento Urbano',
    location: 'Perugia',
    year: '2024',
    category: 'Interior Design',
    image: '/images/interior_living_room.png',
    size: 'md:col-span-2',
  },
  {
    id: 'p2',
    title: 'Scala in Pietra',
    location: 'Todi',
    year: '2023',
    category: 'Architettura',
    image: '/images/scala.jpg',
    size: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'p3',
    title: 'Brand Identity Studio',
    location: 'Firenze',
    year: '2024',
    category: 'Branding',
    image: '/images/branding_identity.png',
    size: 'md:col-span-1',
  },
  {
    id: 'p4',
    title: 'Magione',
    location: 'Magione',
    year: '2024',
    category: 'Abitazione Privata',
    image: '/images/magione_residenza.jpg',
    objectPosition: 'center 40%',
    size: 'md:col-span-1',
  },
  {
    id: 'p5',
    title: 'Residenza Bioclimatica',
    location: 'Assisi',
    year: '2024',
    category: 'Architettura',
    image: '/images/interior_armchair.png',
    objectPosition: '30% center',
    size: 'md:col-span-1',
  },
  {
    id: 'p6',
    title: 'Parco dell\'Arenella',
    location: 'Pantelleria',
    year: '2024',
    category: 'Eco-Design · Social Responsibility',
    image: '/images/pantelleria_parco_arenella.jpg',
    objectPosition: 'center 35%',
    size: 'md:col-span-2',
  },
];

const fadeUp = makeFadeUp(0.08, 0.75);

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`group relative overflow-hidden rounded-lg cursor-pointer ${project.size} h-full`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        style={{
          filter: 'sepia(0.15) contrast(1.05) brightness(0.92)',
          objectPosition: project.objectPosition ?? 'center',
        }}
      />

      {/* Overlay gradient in basso */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(20,18,14,0.55) 0%, transparent 50%)' }}
      />

      {/* Info in basso */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-sans text-[9px] tracking-[0.22em] uppercase opacity-55 mb-1" style={{ color: 'var(--cream)' }}>
          {project.category} · {project.year}
        </p>
        <p className="font-serif text-lg font-light leading-tight" style={{ color: 'var(--cream)' }}>
          {project.title}
        </p>
        <p
          className="font-sans text-xs mt-1 opacity-0 translate-y-1 transition-all duration-250 group-hover:opacity-50 group-hover:translate-y-0"
          style={{ color: 'var(--cream)' }}
        >
          {project.location}
        </p>
      </div>
    </motion.div>
  );
}

export default function Progetti() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id="progetti"
      ref={ref}
      className="py-32 md:py-40 px-8 md:px-14"
      style={{ background: 'var(--bone)' }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4 opacity-40" style={{ color: 'var(--charcoal)' }}>
            03 — Progetti
          </p>
          <h2
            className="font-serif text-5xl md:text-7xl font-light leading-[1.0] tracking-tight"
            style={{ color: 'var(--charcoal)' }}
          >
            Lavori<br />
            <em>recenti</em>
          </h2>
        </motion.div>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="font-sans text-xs tracking-widest uppercase opacity-40 max-w-[180px] text-right"
          style={{ color: 'var(--charcoal)' }}
        >
          Interior · Architettura · Branding · Graphic
        </motion.p>
      </div>

      {/* Asymmetric masonry grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px] md:auto-rows-[300px]">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i + 2} inView={inView} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        custom={8}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mt-14 flex justify-center"
      >
        <a
          href="#contatti"
          className="group inline-flex items-center gap-4 font-sans text-sm tracking-[0.12em] uppercase py-4 px-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-60"
          style={{ border: '1px solid var(--border)', color: 'var(--charcoal)' }}
        >
          Parliamo del tuo progetto
          <span
            className="w-7 h-7 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1"
            style={{ background: 'var(--olive-dark)', color: 'var(--cream)' }}
          >
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}
