import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'RESEND_API_KEY non configurata' }, { status: 500 });
  }

  const { nome, email, tipologia, messaggio } = await req.json();

  if (!nome || !email || !messaggio) {
    return NextResponse.json({ error: 'Campi obbligatori mancanti.' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: 'The-Sign Studio <onboarding@resend.dev>',
    to: ['lucamaracchia@hotmail.it'], // TODO: cambia con thesignstudio023@hotmail.com dopo aver verificato il dominio su resend.com/domains
    replyTo: email,
    subject: `Nuovo messaggio da ${nome} — ${tipologia || 'Contatto generico'}`,
    text: `Nome: ${nome}\nEmail: ${email}\nTipologia: ${tipologia || '—'}\n\nMessaggio:\n${messaggio}`,
  });

  if (error) {
    console.error('[Resend error]', JSON.stringify(error));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log('[Resend ok] email id:', data?.id);
  return NextResponse.json({ ok: true });
}
