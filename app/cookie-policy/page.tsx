import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy — The-Sign Studio',
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen px-8 md:px-14 py-24 md:py-32 max-w-2xl" style={{ color: 'var(--charcoal)' }}>
      <Link href="/" className="font-sans text-xs tracking-[0.2em] uppercase opacity-40 hover:opacity-70 transition-opacity duration-300 mb-12 inline-block">
        ← The-Sign Studio
      </Link>

      <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Informativa</p>
      <h1 className="font-serif text-4xl font-light mb-2" style={{ color: 'var(--charcoal)' }}>
        Cookie Policy
      </h1>
      <p className="font-sans text-xs opacity-35 mb-10">Ultimo aggiornamento: marzo 2026</p>

      <div className="font-sans text-sm leading-relaxed flex flex-col gap-8" style={{ color: 'var(--muted)' }}>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>1. Cosa sono i cookie</h2>
          <p>I cookie sono piccoli file di testo che i siti web salvano nel browser dell'utente durante la navigazione. Permettono al sito di ricordare le azioni e preferenze dell'utente nel tempo.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>2. Cookie utilizzati da questo sito</h2>
          <p>Il sito thesignstudio.com utilizza esclusivamente <strong>cookie tecnici di sessione</strong>, strettamente necessari al funzionamento del sito. Questi cookie non raccolgono informazioni personali e non vengono utilizzati per finalità di profilazione o marketing.</p>
          <p>Il sito <strong>non utilizza</strong>:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
            <li>Cookie di profilazione o targeting pubblicitario</li>
            <li>Cookie di analytics (Google Analytics o simili)</li>
            <li>Cookie di social network di terze parti</li>
            <li>Pixel di tracciamento</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>3. Cookie di terze parti</h2>
          <p>Il modulo di contatto utilizza il servizio <strong>Resend</strong> (resend.com) per l'invio delle email. Resend non installa cookie sul tuo browser; raccoglie esclusivamente i dati del form che decidi di inviare (nome, email, messaggio) per permettere la consegna del messaggio allo studio.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>4. Come gestire i cookie</h2>
          <p>Puoi controllare e gestire i cookie direttamente dal tuo browser. Di seguito i link alle istruzioni dei principali browser:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
            <li>Chrome: <span className="opacity-70">Impostazioni → Privacy e sicurezza → Cookie</span></li>
            <li>Firefox: <span className="opacity-70">Impostazioni → Privacy e sicurezza</span></li>
            <li>Safari: <span className="opacity-70">Preferenze → Privacy</span></li>
            <li>Edge: <span className="opacity-70">Impostazioni → Cookie e autorizzazioni sito</span></li>
          </ul>
          <p className="mt-1">La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>5. Contatti</h2>
          <p>Per qualsiasi domanda relativa alla gestione dei cookie scrivi a <a href="mailto:thesignstudio023@hotmail.com" className="underline underline-offset-2">thesignstudio023@hotmail.com</a>.</p>
        </section>

      </div>
    </main>
  );
}
