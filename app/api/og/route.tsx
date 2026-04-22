import { ImageResponse } from '@vercel/og';
import { readFile } from 'fs/promises';
import path from 'path';
import mime from 'mime-types';

export async function GET() {
  const imagePath = path.join(process.cwd(), '/public/assets/logos/nedalabs.jpg');
  const file = await readFile(imagePath);
  const mimeType = mime.lookup(imagePath);
  const logoImage = `data:${mimeType};base64,${file.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          fontFamily: 'monospace',
          position: 'relative',
          padding: '60px',
        }}
      >
        {/* Grid background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Corner accents */}
        <div style={{ position: 'absolute', top: 24, left: 24, width: 32, height: 32, borderTop: '2px solid rgba(255,255,255,0.4)', borderLeft: '2px solid rgba(255,255,255,0.4)' }} />
        <div style={{ position: 'absolute', top: 24, right: 24, width: 32, height: 32, borderTop: '2px solid rgba(255,255,255,0.4)', borderRight: '2px solid rgba(255,255,255,0.4)' }} />
        <div style={{ position: 'absolute', bottom: 24, left: 24, width: 32, height: 32, borderBottom: '2px solid rgba(255,255,255,0.4)', borderLeft: '2px solid rgba(255,255,255,0.4)' }} />
        <div style={{ position: 'absolute', bottom: 24, right: 24, width: 32, height: 32, borderBottom: '2px solid rgba(255,255,255,0.4)', borderRight: '2px solid rgba(255,255,255,0.4)' }} />

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
          {/* Logo */}
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.25)',
              padding: '10px',
              marginBottom: '32px',
              display: 'flex',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoImage}
              alt="NEDA LABS"
              style={{ width: 72, height: 72, objectFit: 'cover' }}
            />
          </div>

          {/* Badge */}
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '4px 14px',
              marginBottom: '20px',
              display: 'flex',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              BOT-REGULATED
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: '#ffffff',
              margin: 0,
              marginBottom: 16,
              textAlign: 'center',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            NEDA LABS
          </h1>

          {/* Divider dots */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
            {[...Array(24)].map((_, i) => (
              <div key={i} style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)' }} />
            ))}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: 22,
              color: 'rgba(255,255,255,0.55)',
              margin: 0,
              textAlign: 'center',
              maxWidth: 780,
              lineHeight: 1.5,
            }}
          >
            Secure, compliant digital financial infrastructure. Stablecoins, instant payments, and developer APIs powering the modern economy.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '14px 60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13, letterSpacing: '0.15em' }}>NEDALABS.TECH</span>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13, letterSpacing: '0.15em' }}>BUILDING THE FUTURE OF FINANCE IN AFRICA</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.6)' }} />
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13, letterSpacing: '0.15em' }}>LIVE</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
