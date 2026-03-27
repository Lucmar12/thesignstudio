'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp, EASE } from '../../lib/motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp = makeFadeUp(0.1);

export default function EcoCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      ref={ref}
      className="relative min-h-[70dvh] flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--olive-dark)' }}
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/umbria-landscape-dusk/1600/800"
          alt="Paesaggio umbro"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          style={{ filter: 'sepia(0.3) contrast(1.1)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, var(--olive-dark) 0%, rgba(62,59,46,0.7) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-14 max-w-[1400px] mx-auto w-full py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">

          {/* Left */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-sans text-xs tracking-[0.3em] uppercase mb-8 opacity-40"
              style={{ color: 'var(--cream)' }}
            >
              Inizia il progetto
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight"
              style={{ color: 'var(--cream)' }}
            >
              Il tuo spazio<br />
              può <em>fare</em><br />
              la differenza
            </motion.h2>
          </div>

          {/* Right */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-8"
          >
            <p
              className="font-sans text-sm leading-[1.8] opacity-55 max-w-sm"
              style={{ color: 'var(--cream)' }}
            >
              Se stai pensando a una ristrutturazione, a una nuova abitazione o a un progetto commerciale e vuoi che la sostenibilità sia parte integrante — non un ripensamento — parliamo.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contatti"
                className="group inline-flex items-center gap-4 font-sans text-sm tracking-[0.12em] uppercase py-4 px-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-80 active:scale-[0.98]"
                style={{ background: 'var(--cream)', color: 'var(--charcoal)' }}
              >
                Parliamo del tuo progetto
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="w-7 h-7 flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(62,59,46,0.12)' }}
                >
                  →
                </motion.span>
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.12em] uppercase py-4 px-8 transition-all duration-300 hover:opacity-60"
                style={{ border: '1px solid rgba(245,242,234,0.25)', color: 'var(--cream)' }}
              >
                Torna allo studio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom footer bar */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: '1px solid rgba(245,242,234,0.1)', paddingTop: '2rem' }}
        >
          <span className="font-sans text-xs tracking-widest uppercase opacity-30" style={{ color: 'var(--cream)' }}>
            © 2023 The-Sign Studio
          </span>
          <span className="font-serif text-xs italic opacity-25" style={{ color: 'var(--cream)' }}>
            rendere l&apos;invisibile visibile
          </span>
        </motion.div>
      </div>
    </section>
  );
}
