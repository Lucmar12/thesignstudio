import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — The-Sign Studio',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-8 md:px-14 py-24 md:py-32 max-w-2xl" style={{ color: 'var(--charcoal)' }}>
      <Link href="/" className="font-sans text-xs tracking-[0.2em] uppercase opacity-40 hover:opacity-70 transition-opacity duration-300 mb-12 inline-block">
        ← The-Sign Studio
      </Link>

      <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Informativa</p>
      <h1 className="font-serif text-4xl font-light mb-2" style={{ color: 'var(--charcoal)' }}>
        Privacy Policy
      </h1>
      <p className="font-sans text-xs opacity-35 mb-10">Ultimo aggiornamento: marzo 2026</p>

      <div className="font-sans text-sm leading-relaxed flex flex-col gap-8" style={{ color: 'var(--muted)' }}>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>1. Titolare del trattamento</h2>
          <p>The-Sign Studio è uno studio professionale con sede in Umbria che offre servizi di interior design, architettura, branding e graphic design. Il titolare del trattamento dei dati personali è il responsabile dello studio, raggiungibile all'indirizzo email <a href="mailto:thesignstudio023@hotmail.com" className="underline underline-offset-2">thesignstudio023@hotmail.com</a> o al numero <a href="tel:+393896390261" className="underline underline-offset-2">+39 389 639 0261</a>.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>2. Quali dati raccogliamo</h2>
          <p>Raccogliamo esclusivamente i dati che ci fornisci volontariamente tramite il modulo di contatto presente sul sito:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
            <li><strong>Nome e cognome</strong> — per identificarti nella comunicazione</li>
            <li><strong>Indirizzo email</strong> — per rispondere alla tua richiesta</li>
            <li><strong>Tipologia di progetto</strong> — per orientare la risposta (es. interior design, architettura, branding)</li>
            <li><strong>Messaggio</strong> — il contenuto della tua richiesta</li>
          </ul>
          <p className="mt-1">Non raccogliamo dati di navigazione, non utilizziamo sistemi di analytics e non installiamo cookie di profilazione.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>3. Finalità e base giuridica</h2>
          <p>I dati raccolti tramite il modulo di contatto sono trattati esclusivamente per:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
            <li>Rispondere alla tua richiesta di informazioni o preventivo (base giuridica: esecuzione di misure precontrattuali)</li>
            <li>Gestire la relazione professionale che eventualmente ne consegue (base giuridica: esecuzione del contratto)</li>
          </ul>
          <p className="mt-1">Non utilizziamo i tuoi dati per finalità di marketing, non li cediamo a terzi e non li trasferiamo fuori dall'Unione Europea.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>4. Conservazione</h2>
          <p>I dati relativi alle richieste di contatto senza seguito commerciale sono conservati per un massimo di 12 mesi. I dati relativi a rapporti contrattuali instaurati sono conservati per il periodo previsto dagli obblighi fiscali e civilistici (fino a 10 anni).</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>5. I tuoi diritti</h2>
          <p>Ai sensi del GDPR (Regolamento UE 2016/679) hai diritto di:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
            <li>Accedere ai tuoi dati personali</li>
            <li>Rettificarli o aggiornarli</li>
            <li>Richiederne la cancellazione ("diritto all'oblio")</li>
            <li>Limitarne il trattamento</li>
            <li>Opporti al trattamento</li>
            <li>Presentare reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it)</li>
          </ul>
          <p className="mt-1">Per esercitare questi diritti scrivi a <a href="mailto:thesignstudio023@hotmail.com" className="underline underline-offset-2">thesignstudio023@hotmail.com</a>.</p>
        </section>

      </div>
    </main>
  );
}
