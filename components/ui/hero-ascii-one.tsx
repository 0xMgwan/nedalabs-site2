'use client';

import { FloatingMediaCard } from '@/components/landing/hero/FloatingMediaCard';
import { LiveNTZSStat } from '@/components/ui/LiveNTZSStat';
import { Reveal, WaveText } from '@/components/np/motion';

export function HeroAsciiOne() {
  return (
    <section id="top" className="np-wrap pb-16 pt-10 sm:pt-16 lg:pb-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Reveal>
            <a
              href="https://www.ntzs.co.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="np-focus mb-8 inline-flex items-center gap-2.5 rounded-full border border-np-ink/20 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-np-ink/75 transition-colors hover:border-np-ink hover:text-np-ink"
            >
              <span className="whitespace-nowrap rounded-full bg-np-blue px-3 py-1 font-bold text-np-ink">BOT-regulated</span>
              <span className="whitespace-nowrap sm:hidden">nTZS →</span>
              <span className="hidden sm:inline">nTZS, Tanzania&apos;s first regulated stablecoin →</span>
            </a>
          </Reveal>
          <WaveText as="h1" text="Building the future of finance in Africa." className="np-display max-w-[16ch]" />
        </div>
        <Reveal className="lg:col-span-4" delay={250}>
          <p className="np-body text-np-ink/80">
            Secure, compliant digital financial infrastructure. Stablecoins, instant payments and developer APIs powering the modern economy across Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.nedapay.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="np-focus rounded-full bg-np-blue px-7 py-4 text-base font-bold text-np-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get started
            </a>
            <a
              href="https://www.ntzs.co.tz/developers"
              target="_blank"
              rel="noopener noreferrer"
              className="np-focus rounded-full border border-np-ink px-7 py-4 text-base font-bold transition-colors hover:bg-np-ink hover:text-np-bone"
            >
              View docs
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-8" delay={150}>
          <FloatingMediaCard />
        </Reveal>

        <Reveal className="lg:col-span-4" delay={300}>
          <div className="flex h-full flex-col justify-between gap-8 rounded-[clamp(16px,2vw,32px)] bg-np-ink p-8 text-np-bone">
            <p className="np-label text-np-blue">NEDA Labs · in numbers</p>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-1">
              {[
                ['1K+', 'Active users'],
                ['15+', 'Countries'],
              ].map(([val, lbl]) => (
                <div key={lbl} className="border-t border-np-bone/20 pt-4">
                  <dt className="np-label text-np-bone/60">{lbl}</dt>
                  <dd className="mt-2 font-mono text-[clamp(32px,3.4vw,56px)] font-medium leading-none tracking-tight">{val}</dd>
                </div>
              ))}
              <a
                href="https://basescan.org/token/0xF476BA983DE2F1AD532380630e2CF1D1b8b10688"
                target="_blank"
                rel="noopener noreferrer"
                className="np-focus col-span-2 block border-t border-np-bone/20 pt-4 lg:col-span-1"
              >
                <LiveNTZSStat tone="dark" />
              </a>
            </dl>
            <p className="np-label text-np-bone/50">Dar es Salaam, Tanzania</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
