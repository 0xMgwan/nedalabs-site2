'use client';

import { useEffect, useState } from 'react';
import { Reveal, WaveText } from '@/components/np/motion';

const ASSETS = [
  { kind: 'Stocks', body: 'US and local equities as tokens. Fractional from the first shilling, settled on-chain.' },
  { kind: 'Securities', body: 'Bonds and other regulated instruments, issued and transferred with a full on-chain record.' },
  { kind: 'Funds', body: 'Fund units that can be held, moved and redeemed like any other token in a wallet.' },
];

const TICKERS = [
  ['AAPLc', 'Apple'],
  ['NVDAc', 'NVIDIA'],
  ['GOOGLc', 'Alphabet'],
  ['METAc', 'Meta'],
  ['AMZNc', 'Amazon'],
  ['CRCLc', 'Circle'],
  ['SPCXc', 'SpaceX'],
  ['CRDB', 'CRDB Bank · DSE'],
];

// Regular US session, New York time
const OPEN = 9.5;
const CLOSE = 16;

function nowInNewYork() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'short',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const hour = Number(get('hour')) + Number(get('minute')) / 60;
  const weekend = get('weekday') === 'Sat' || get('weekday') === 'Sun';
  return { hour, weekend, label: `${get('hour').padStart(2, '0')}:${get('minute')}` };
}

function MarketClock() {
  const [now, setNow] = useState<ReturnType<typeof nowInNewYork> | null>(null);

  useEffect(() => {
    setNow(nowInNewYork());
    const id = setInterval(() => setNow(nowInNewYork()), 30_000);
    return () => clearInterval(id);
  }, []);

  const exchangeOpen = now ? !now.weekend && now.hour >= OPEN && now.hour < CLOSE : false;
  const marker = now ? `${(now.hour / 24) * 100}%` : undefined;

  return (
    <div className="rounded-[clamp(16px,2vw,32px)] bg-np-bone p-6 text-np-ink sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="np-label text-np-label">New York · {now ? now.label : '--:--'}</p>
        <p className="np-label flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${exchangeOpen ? 'bg-emerald-500' : 'bg-np-ink/30'}`} />
          US market {now ? (exchangeOpen ? 'open' : 'closed') : '…'}
        </p>
      </div>

      <div className="relative mt-10 space-y-6">
        <div>
          <p className="mb-2 text-sm font-semibold text-np-label">Exchange hours</p>
          <div className="relative h-10 rounded-full bg-np-ink/[0.07]">
            <div
              className="absolute inset-y-0 rounded-full bg-np-ink/80"
              style={{ left: `${(OPEN / 24) * 100}%`, width: `${((CLOSE - OPEN) / 24) * 100}%` }}
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">On NEDApay</p>
          <div className="h-10 rounded-full bg-np-blue" />
        </div>

        {marker && (
          <div className="pointer-events-none absolute -bottom-2 top-6 w-0" style={{ left: marker }} aria-hidden>
            <div className="h-full w-px -translate-x-1/2 bg-np-ink" />
            <div className="absolute -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-np-ink ring-4 ring-np-bone" />
          </div>
        )}
      </div>

      <div className="np-label mt-5 flex justify-between text-[11px] text-np-label">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>

      <p className="mt-8 text-[clamp(22px,2vw,30px)] font-medium leading-tight tracking-tight">
        {exchangeOpen ? 'Wall Street is open. So are we.' : 'Wall Street is closed. NEDApay is still trading.'}
      </p>
    </div>
  );
}

export function TokenizationSection() {
  return (
    <section id="tokenization" className="scroll-mt-24 overflow-hidden bg-np-ink text-np-bone">
      <div className="np-wrap grid gap-16 pt-24 lg:grid-cols-12 lg:pt-36">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="np-label text-np-blue">02 · Tokenization infrastructure</p>
          </Reveal>
          <WaveText as="h2" text="Markets that never close." className="np-h2 mt-6 max-w-[12ch]" />
          <Reveal delay={200}>
            <p className="np-body mt-8 max-w-[46ch] text-np-bone/75">
              We tokenize stocks, securities and funds, and run the rails that let anyone own them. On NEDApay that means
              trading US stocks 24/7, funded in shillings or dollars, down to fractions of a share.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://app.nedapay.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="np-focus rounded-full bg-np-blue px-7 py-4 font-bold text-np-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                Trade on NEDApay
              </a>
              <a
                href="mailto:support@nedapay.xyz?subject=Tokenization"
                className="np-focus rounded-full border border-np-bone/60 px-7 py-4 font-bold transition-colors hover:bg-np-bone hover:text-np-ink"
              >
                Tokenize an asset
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6" delay={150}>
          <MarketClock />
        </Reveal>
      </div>

      <div className="np-wrap mt-20 grid gap-x-10 gap-y-10 md:grid-cols-3">
        {ASSETS.map((a, i) => (
          <Reveal key={a.kind} delay={i * 120}>
            <div className="border-t border-np-bone/20 pt-6">
              <p className="np-label text-np-blue">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-4 text-[clamp(26px,2.4vw,40px)] font-medium leading-none tracking-tight">{a.kind}</h3>
              <p className="np-body mt-3 text-np-bone/70">{a.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 border-y border-np-bone/15 py-6" aria-label="Tokenized assets available">
        <div className="flex w-max animate-marquee gap-4 pr-4 hover:[animation-play-state:paused]">
          {[...TICKERS, ...TICKERS].map(([sym, name], i) => (
            <span
              key={i}
              aria-hidden={i >= TICKERS.length}
              className="flex shrink-0 items-center gap-3 rounded-full border border-np-bone/20 py-2 pl-2 pr-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-np-bone font-mono text-xs font-medium text-np-ink">
                {sym[0]}
              </span>
              <span className="font-mono text-sm font-medium">{sym}</span>
              <span className="text-sm text-np-bone/60">{name}</span>
              <span className="np-label text-[10px] text-np-blue">24/7</span>
            </span>
          ))}
        </div>
      </div>
      <div className="pb-24 lg:pb-32" />
    </section>
  );
}
