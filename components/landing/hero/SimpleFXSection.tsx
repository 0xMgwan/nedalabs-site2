'use client';

import Image from 'next/image';
import { ArrowRight, TrendingUp, Clock, Percent, Droplets } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: Droplets,
    title: 'Deposit nTZS',
    desc: 'Add nTZS to the liquidity pool. Your deposit backs every swap on the protocol.',
  },
  {
    n: '02',
    icon: Percent,
    title: 'Set Your Spread',
    desc: 'Choose the fee you earn per swap. Tighter spreads attract more volume; wider spreads earn more per trade.',
  },
  {
    n: '03',
    icon: Clock,
    title: 'Collect Fees 24 / 7',
    desc: 'Every swap on SimpleFX generates a fee paid directly to liquidity providers — automatically, around the clock.',
  },
  {
    n: '04',
    icon: TrendingUp,
    title: 'Withdraw Anytime',
    desc: 'Withdraw your nTZS plus accumulated fees whenever you want. No lock-ups. No trading desk.',
  },
];

export function SimpleFXSection() {
  return (
    <section id="simplefx" className="relative w-full bg-white dark:bg-black py-16 lg:py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">
              {"// MARKET MAKING"}
            </p>

            {/* Logo + name */}
            <div className="flex items-center gap-3 mb-5">
              <div className="border border-black/20 dark:border-white/20 p-2 inline-flex items-center justify-center">
                <Image
                  src="/assets/logos/simplefx.svg"
                  alt="SimpleFX"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h2 className="font-mono font-bold text-black dark:text-white text-3xl md:text-5xl tracking-tight">
                SIMPLEFX
              </h2>
            </div>

            <p className="font-mono text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-lg">
              The automated market making system powering nTZS liquidity.
              Deposit, set your spread, and collect fees on every swap —
              automatically, around the clock. No trading desk. No effort.
            </p>
          </div>

          {/* Right — key metrics */}
          <div className="grid grid-cols-2 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
            {[
              { val: '0.01%', lbl: 'Min. Spread' },
              { val: '24 / 7', lbl: 'Always Active' },
              { val: '100%', lbl: 'Non-Custodial' },
              { val: '∞', lbl: 'Compounding' },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="bg-white dark:bg-black px-6 py-5 text-center">
                <div className="font-mono font-bold text-black dark:text-white text-2xl mb-1">{val}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-black/40 dark:text-white/40">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/30 dark:text-white/30 mb-6">
            {"// HOW IT WORKS"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
            {steps.map(({ n, icon: Icon, title, desc }) => (
              <div key={n} className="bg-white dark:bg-black p-6 relative group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black/20 dark:border-white/20 group-hover:border-black/50 dark:group-hover:border-white/50 transition-colors pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="border border-black/20 dark:border-white/20 p-2 inline-flex">
                    <Icon className="h-4 w-4 text-black/60 dark:text-white/60" />
                  </div>
                  <span className="text-[9px] font-mono text-black/30 dark:text-white/30 tracking-widest">{n}</span>
                </div>

                <h3 className="font-mono font-bold text-black dark:text-white text-sm uppercase tracking-wide mb-2">
                  {title}
                </h3>
                <p className="font-mono text-xs text-black/50 dark:text-white/50 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal code-style callout */}
        <div className="border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-6 relative mb-10">
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/30 dark:border-white/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/30 dark:border-white/30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/30 dark:border-white/30 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/30 dark:border-white/30 pointer-events-none" />

          <p className="text-[9px] font-mono text-black/30 dark:text-white/30 mb-3 uppercase tracking-widest">
            {"// SIMPLEFX.PROTOCOL — MARKET MAKING SUMMARY"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-sm">
            <div>
              <span className="text-black/30 dark:text-white/30">asset     </span>
              <span className="text-black dark:text-white font-bold">nTZS</span>
            </div>
            <div>
              <span className="text-black/30 dark:text-white/30">model     </span>
              <span className="text-black dark:text-white font-bold">Automated MM</span>
            </div>
            <div>
              <span className="text-black/30 dark:text-white/30">custody   </span>
              <span className="text-black dark:text-white font-bold">Non-custodial</span>
            </div>
            <div>
              <span className="text-black/30 dark:text-white/30">fees      </span>
              <span className="text-black dark:text-white font-bold">Configurable spread</span>
            </div>
            <div>
              <span className="text-black/30 dark:text-white/30">uptime    </span>
              <span className="text-black dark:text-white font-bold">24 / 7 / 365</span>
            </div>
            <div>
              <span className="text-black/30 dark:text-white/30">status    </span>
              <span className="text-black dark:text-white font-bold flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-black dark:bg-white animate-pulse" />
                LIVE
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.ntzs.co.tz/simplefx"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-black dark:border-white font-mono text-xs uppercase tracking-widest px-6 py-3 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
          >
            Start Market Making
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://www.ntzs.co.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-widest px-6 py-3 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200"
          >
            Learn about nTZS
          </a>
        </div>

      </div>
    </section>
  );
}
