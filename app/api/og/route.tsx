import { ImageResponse } from '@vercel/og';
import { readFile } from 'fs/promises';
import path from 'path';

const BLUE = '#369BED';
const BONE = '#EFEAE1';
const INK = '#000000';

const asset = (p: string) => readFile(path.join(process.cwd(), 'public/assets', p));

export async function GET() {
  const [logo, medium, bold] = await Promise.all([
    asset('logos/nedalabs.jpg'),
    asset('fonts/Montserrat-500.ttf'),
    asset('fonts/Montserrat-700.ttf'),
  ]);
  const logoSrc = `data:image/jpeg;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: BONE,
          color: INK,
          fontFamily: 'Montserrat',
          padding: '64px 72px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="" width={64} height={64} style={{ borderRadius: 16, objectFit: 'cover' }} />
            <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em' }}>NEDA Labs</div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              border: '2px solid rgba(0,0,0,0.15)',
              borderRadius: 999,
              padding: '8px 22px 8px 8px',
              fontSize: 24,
              fontWeight: 500,
            }}
          >
            <div style={{ backgroundColor: BLUE, borderRadius: 999, padding: '6px 16px', fontWeight: 700 }}>BOT-regulated</div>
            nTZS stablecoin
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 92, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.035em', maxWidth: 980 }}>
          Building the future of finance in Africa.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Stablecoins', 'Payments', 'Tokenization'].map((t) => (
              <div
                key={t}
                style={{ display: 'flex', border: '2px solid rgba(0,0,0,0.85)', borderRadius: 999, padding: '10px 24px', fontSize: 24, fontWeight: 700 }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', backgroundColor: BLUE, borderRadius: 999, padding: '14px 30px', fontSize: 26, fontWeight: 700 }}>
            nedalabs.tech
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Montserrat', data: medium, weight: 500, style: 'normal' },
        { name: 'Montserrat', data: bold, weight: 700, style: 'normal' },
      ],
    },
  );
}
