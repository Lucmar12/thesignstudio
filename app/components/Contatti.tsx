'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { makeFadeUp } from '../lib/motion';
import Link from 'next/link';

const fadeUp = makeFadeUp();

function FormField({ label, name, type = 'text', placeholder, index, inView }: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  index: number;
  inView: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="flex flex-col gap-2"
    >
      <label className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-50" style={{ color: 'var(--charcoal)' }}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          required
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="font-sans text-sm resize-none outline-none bg-transparent py-3 transition-all duration-300"
          style={{
            color: 'var(--charcoal)',
            borderBottom: `1px solid ${focused ? 'var(--olive-mid)' : 'var(--border)'}`,
          }}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={name !== 'tipologia'}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="font-sans text-sm outline-none bg-transparent py-3 transition-all duration-300"
          style={{
            color: 'var(--charcoal)',
            borderBottom: `1px solid ${focused ? 'var(--olive-mid)' : 'var(--border)'}`,
          }}
        />
      )}
    </motion.div>
  );
}

export default function Contatti() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const data = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: data.get('nome'),
        email: data.get('email'),
        tipologia: data.get('tipologia'),
        messaggio: data.get('messaggio'),
      }),
    });
    setLoading(false);
    if (res.ok) {
      setSent(true);
    } else {
      const body = await res.json().catch(() => ({}));
      setError(`Invio fallito: ${body.error || 'errore sconosciuto'}`);
    }
  }

  return (
    <section
      id="contatti"
      ref={ref}
      className="py-32 md:py-40 px-8 md:px-14"
      style={{ background: 'var(--cream)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left — info */}
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-sans text-xs tracking-[0.3em] uppercase mb-6 opacity-40"
            style={{ color: 'var(--charcoal)' }}
          >
            05 — Contatti
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-serif text-5xl md:text-7xl font-light leading-[1.0] tracking-tight mb-10"
            style={{ color: 'var(--charcoal)' }}
          >
            Parliamo<br />
            del tuo<br />
            <em>spazio</em>
          </motion.h2>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6 mt-8"
          >
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1" style={{ color: 'var(--charcoal)' }}>
                Studio
              </p>
              <p className="font-sans text-sm" style={{ color: 'var(--muted)' }}>
                The-Sign Studio<br />
                Est. 2023
              </p>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1" style={{ color: 'var(--charcoal)' }}>
                Contatto
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:thesignstudio023@hotmail.com"
                  className="font-sans text-sm hover:opacity-60 transition-opacity duration-300"
                  style={{ color: 'var(--muted)' }}
                >
                  thesignstudio023@hotmail.com
                </a>
                <a
                  href="tel:+393896390261"
                  className="font-sans text-sm hover:opacity-60 transition-opacity duration-300"
                  style={{ color: 'var(--muted)' }}
                >
                  +39 389 639 0261
                </a>
              </div>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1" style={{ color: 'var(--charcoal)' }}>
                Servizi
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Interior Design · Architettura<br />
                Branding · Graphic Design<br />
                Ecosostenibilità
              </p>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1" style={{ color: 'var(--charcoal)' }}>
                Social
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/the_signstudioofficial"
                  className="font-sans text-sm hover:opacity-60 transition-opacity duration-300"
                  style={{ color: 'var(--muted)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="font-sans text-sm hover:opacity-60 transition-opacity duration-300"
                  style={{ color: 'var(--muted)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="font-serif text-lg italic mt-14 opacity-50 leading-snug max-w-xs"
            style={{ color: 'var(--charcoal)' }}
          >
            &ldquo;ascoltare, osservare, capire e empatizzare, per rendere l&apos;invisibile visibile&rdquo;
          </motion.p>
        </div>

        {/* Right — form */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {!sent ? (
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField label="Nome" name="nome" placeholder="Il tuo nome" index={4} inView={inView} />
                <FormField label="Email" name="email" type="email" placeholder="name@email.com" index={5} inView={inView} />
              </div>
              <FormField label="Tipologia di progetto" name="tipologia" placeholder="Interior, Architettura, Branding..." index={6} inView={inView} />
              <FormField label="Messaggio" name="messaggio" type="textarea" placeholder="Raccontami del tuo spazio e di cosa hai in mente..." index={7} inView={inView} />

              {error && (
                <p className="font-sans text-xs opacity-70" style={{ color: 'var(--charcoal)' }}>{error}</p>
              )}

              <motion.div
                custom={8}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-4 font-sans text-sm tracking-[0.12em] uppercase py-4 px-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-80 active:scale-[0.98] disabled:opacity-50"
                  style={{ background: 'var(--olive-dark)', color: 'var(--cream)' }}
                >
                  {loading ? 'Invio...' : 'Invia messaggio'}
                  {!loading && (
                    <span
                      className="w-7 h-7 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1"
                      style={{ background: 'rgba(245,242,234,0.15)' }}
                    >
                      →
                    </span>
                  )}
                </button>
              </motion.div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 py-12"
            >
              <p className="font-serif text-3xl font-light" style={{ color: 'var(--charcoal)' }}>
                Messaggio inviato
              </p>
              <p className="font-sans text-sm opacity-50" style={{ color: 'var(--charcoal)' }}>
                Vi risponderemo al più presto. Non vediamo l&apos;ora di scoprire il tuo progetto.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        custom={9}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mt-24 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p className="font-sans text-xs tracking-widest uppercase opacity-35" style={{ color: 'var(--charcoal)' }}>
          © {new Date().getFullYear()} The-Sign Studio
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="font-sans text-xs tracking-widest uppercase opacity-35 hover:opacity-70 transition-opacity duration-300" style={{ color: 'var(--charcoal)' }}>
            Privacy
          </Link>
          <Link href="/cookie-policy" className="font-sans text-xs tracking-widest uppercase opacity-35 hover:opacity-70 transition-opacity duration-300" style={{ color: 'var(--charcoal)' }}>
            Cookie
          </Link>
          <Link href="/termini" className="font-sans text-xs tracking-widest uppercase opacity-35 hover:opacity-70 transition-opacity duration-300" style={{ color: 'var(--charcoal)' }}>
            Termini
          </Link>
          <Link href="/ecosostenibilita" className="font-sans text-xs tracking-widest uppercase opacity-35 hover:opacity-70 transition-opacity duration-300" style={{ color: 'var(--charcoal)' }}>
            Ecosostenibilità →
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/the_signstudioofficial"
            aria-label="Instagram"
            className="opacity-30 hover:opacity-70 transition-opacity duration-300"
            style={{ color: 'var(--charcoal)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="opacity-30 hover:opacity-70 transition-opacity duration-300"
            style={{ color: 'var(--charcoal)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="3"/>
              <line x1="7" y1="10" x2="7" y2="17"/>
              <line x1="7" y1="7" x2="7.01" y2="7"/>
              <path d="M11 10v7m0-4a3 3 0 0 1 6 0v4"/>
            </svg>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/393896390261"
            aria-label="WhatsApp"
            className="opacity-30 hover:opacity-70 transition-opacity duration-300"
            style={{ color: 'var(--charcoal)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>
        </div>
      </motion.footer>
    </section>
  );
}
