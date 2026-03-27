import Link from 'next/link';

export const metadata = {
  title: 'Termini di servizio — The-Sign Studio',
};

export default function TerminiServizio() {
  return (
    <main className="min-h-screen px-8 md:px-14 py-24 md:py-32 max-w-2xl" style={{ color: 'var(--charcoal)' }}>
      <Link href="/" className="font-sans text-xs tracking-[0.2em] uppercase opacity-40 hover:opacity-70 transition-opacity duration-300 mb-12 inline-block">
        ← The-Sign Studio
      </Link>

      <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Condizioni</p>
      <h1 className="font-serif text-4xl font-light mb-2" style={{ color: 'var(--charcoal)' }}>
        Termini di servizio
      </h1>
      <p className="font-sans text-xs opacity-35 mb-10">Ultimo aggiornamento: marzo 2026</p>

      <div className="font-sans text-sm leading-relaxed flex flex-col gap-8" style={{ color: 'var(--muted)' }}>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>1. Lo studio</h2>
          <p>The-Sign Studio è uno studio professionale fondato nel 2023 e operante principalmente in Umbria e su tutto il territorio nazionale. Lo studio opera nei settori dell'interior design residenziale e commerciale, dell'architettura, del branding e dell'identità visiva, e del graphic design editoriale e istituzionale, con un approccio orientato all'ecosostenibilità e alla responsabilità sociale.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>2. Avvio del rapporto professionale</h2>
          <p>Ogni incarico professionale ha inizio con la firma di un contratto scritto tra le parti, che definisce: l'oggetto della prestazione, i tempi di consegna, il compenso concordato e le condizioni di pagamento. La semplice richiesta di informazioni o preventivo non costituisce accettazione di incarico.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>3. Compenso e pagamenti</h2>
          <p>Il compenso per le prestazioni professionali viene definito nel preventivo e concordato prima dell'avvio dei lavori. Salvo diverso accordo scritto, il pagamento avviene secondo le seguenti modalità: un acconto alla firma del contratto (di norma il 30–50%), saldi intermedi a stati avanzamento lavori e saldo finale alla consegna definitiva degli elaborati.</p>
          <p>In caso di mancato pagamento nei termini concordati, lo studio si riserva il diritto di sospendere l'attività e di applicare gli interessi di mora previsti dalla legge.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>4. Proprietà intellettuale e diritti d'autore</h2>
          <p>Tutti i progetti, elaborati grafici, render, concept, tavole tecniche e materiali creativi prodotti da The-Sign Studio sono protetti dalle leggi sul diritto d'autore (L. 633/1941) e rimangono di proprietà intellettuale dello studio fino al saldo integrale del compenso dovuto.</p>
          <p>Al completamento del pagamento, il cliente acquisisce i diritti di utilizzo dell'opera nei termini specificati nel contratto. The-Sign Studio si riserva il diritto di pubblicare i lavori realizzati nel proprio portfolio, salvo esplicita richiesta scritta di riservatezza da parte del cliente.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>5. Revisioni e modifiche</h2>
          <p>Il numero di revisioni incluse nella prestazione è definito nel contratto. Richieste di modifica sostanziale che esulino dall'incarico originale saranno preventivate separatamente e richiedono approvazione scritta prima dell'esecuzione.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>6. Responsabilità</h2>
          <p>The-Sign Studio non è responsabile per ritardi, costi aggiuntivi o danni derivanti da fattori esterni all'operato dello studio, tra cui: ritardi da parte di imprese edili, artigiani o fornitori terzi; variazioni normative o urbanistiche intervenute dopo l'avvio del progetto; modifiche richieste dal cliente in corso d'opera non preventivamente concordate.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>7. Recesso</h2>
          <p>Il cliente ha facoltà di recedere dal contratto con comunicazione scritta. In caso di recesso, sono dovuti allo studio i compensi proporzionali alle attività già svolte alla data di ricezione della comunicazione, oltre alle spese sostenute e documentate.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>8. Legge applicabile e foro competente</h2>
          <p>I presenti termini e ogni rapporto contrattuale con The-Sign Studio sono regolati dalla legge italiana. Per qualsiasi controversia che non si risolva in via bonaria, è competente in via esclusiva il Foro di Perugia.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--charcoal)', opacity: 0.55 }}>9. Contatti</h2>
          <p>Per qualsiasi questione relativa a questi termini: <a href="mailto:thesignstudio023@hotmail.com" className="underline underline-offset-2">thesignstudio023@hotmail.com</a> — <a href="tel:+393896390261" className="underline underline-offset-2">+39 389 639 0261</a>.</p>
        </section>

      </div>
    </main>
  );
}
