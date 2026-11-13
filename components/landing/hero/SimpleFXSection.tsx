'use client';

import Image from 'next/image';
import { Reveal, WaveText } from '@/components/np/motion';

const steps = [
  { title: 'Deposit nTZS', desc: 'Add nTZS to the liquidity pool. Your deposit backs every swap on the protocol.' },
  { title: 'Set your spread', desc: 'Choose the fee you earn per swap. Tighter spreads attract more volume; wider spreads earn more per trade.' },
  { title: 'Collect fees 24/7', desc: 'Every swap on SimpleFX pays a fee to liquidity providers, automatically and around the clock.' },
  { title: 'Withdraw anytime', desc: 'Withdraw your nTZS plus accumulated fees whenever you want. No lock-ups. No trading desk.' },
];

const metrics = [
  { val: '0.01%', lbl: 'Min. spread' },
  { val: '24/7', lbl: 'Always active' },
  { val: '100%', lbl: 'Non-custodial' },
];

export function SimpleFXSection() {
  return (
    <section id="simplefx" className="scroll-mt-24 bg-np-ink text-np-bone">
      <div className="np-wrap grid gap-16 py-24 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="np-label flex items-center gap-3 text-np-blue">
              <Image src="/assets/logos/simplefx.svg" alt="" width={24} height={24} className="h-6 w-6 rounded-md bg-np-paper object-contain p-0.5" />
              03 · SimpleFX
            </p>
          </Reveal>
          <WaveText as="h2" text="Earn while you sleep." className="np-h2 mt-6 max-w-[12ch]" />
          <Reveal delay={200}>
            <p className="np-body mt-8 max-w-[46ch] text-np-bone/75">
              The automated market making system powering nTZS liquidity. Deposit, set your spread and collect fees on every swap, around the clock.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6">
              {metrics.map(({ val, lbl }) => (
                <div key={lbl} className="border-t border-np-bone/20 pt-4">
                  <dt className="np-label text-np-bone/60">{lbl}</dt>
                  <dd className="mt-2 font-mono text-[clamp(26px,2.8vw,48px)] font-medium leading-none tracking-tight">{val}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://www.ntzs.co.tz/simplefx"
                target="_blank"
                rel="noopener noreferrer"
                className="np-focus rounded-full bg-np-blue px-7 py-4 font-bold text-np-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start market making
              </a>
              <a
                href="https://www.ntzs.co.tz/"
                target="_blank"
                rel="noopener noreferrer"
                className="np-focus rounded-full border border-np-bone/60 px-7 py-4 font-bold transition-colors hover:bg-np-bone hover:text-np-ink"
              >
                About nTZS
              </a>
            </div>
          </Reveal>
        </div>

        <ol className="lg:col-span-6 lg:pt-16">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <li className="grid grid-cols-[auto_1fr] gap-6 border-t border-np-bone/20 py-8">
                <span className="np-label pt-2 text-np-blue">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-[clamp(24px,2.2vw,36px)] font-medium leading-tight tracking-tight">{s.title}</h3>
                  <p className="np-body mt-3 text-np-bone/70">{s.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
