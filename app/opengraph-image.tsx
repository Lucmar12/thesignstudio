import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'The-Sign Studio — Interior Design, Architettura & Branding';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#3E3B2E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        {/* Subtle top line */}
        <div style={{
          position: 'absolute',
          top: 60,
          left: 80,
          right: 80,
          height: 1,
          background: 'rgba(245,242,234,0.15)',
          display: 'flex',
        }} />

        {/* Studio name */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}>
          <div style={{
            fontSize: 96,
            fontWeight: 300,
            color: '#F5F2EA',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            display: 'flex',
          }}>
            The-Sign Studio
          </div>

          <div style={{
            width: 80,
            height: 1,
            background: 'rgba(245,242,234,0.3)',
            display: 'flex',
          }} />

          <div style={{
            fontSize: 22,
            fontWeight: 300,
            color: 'rgba(245,242,234,0.5)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            display: 'flex',
          }}>
            Interior · Architettura · Branding · Graphic
          </div>
        </div>

        {/* Bottom line + location */}
        <div style={{
          position: 'absolute',
          bottom: 60,
          left: 80,
          right: 80,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          <div style={{
            height: 1,
            background: 'rgba(245,242,234,0.15)',
            display: 'flex',
          }} />
          <div style={{
            fontSize: 16,
            color: 'rgba(245,242,234,0.35)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            display: 'flex',
          }}>
            Firenze · Prato · Scandicci · Umbria — Est. 2023
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
