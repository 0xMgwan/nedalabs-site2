'use client';

import { BookOpen, Zap } from 'lucide-react';

const ecosystem = [
  { prefix: '├──', label: 'nTZS',       desc: 'BOT-Regulated Stablecoin',   href: 'https://www.ntzs.co.tz/',          status: 'LIVE' },
  { prefix: '├──', label: 'NEDApay',    desc: 'Instant Cross-Border Payments', href: 'https://www.nedapay.xyz/',        status: 'LIVE' },
  { prefix: '├──', label: 'GUAP',       desc: 'Africa\'s Predictions Market', href: 'https://www.guap.gold',           status: 'LIVE' },
  { prefix: '├──', label: 'WashikaDAU', desc: 'ReFi & Community Finance',    href: 'https://www.washikadau.com',       status: 'LIVE' },
  { prefix: '├──', label: 'PayPerPlay', desc: 'Creator Monetization Platform', href: 'https://www.payperplay.xyz',     status: 'BETA' },
  { prefix: '└──', label: 'SimpleFX',   desc: 'Automated Market Making',     href: 'https://www.ntzs.co.tz/simplefx', status: 'SOON' },
];

export function DevelopersSection() {
  return (
    <section id="developers" className="relative w-full bg-white dark:bg-black py-16 lg:py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">{"// FOR DEVELOPERS"}</p>
            <h2 className="font-mono font-bold text-black dark:text-white text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4">
              BUILD WITH<br />POWERFUL APIS
            </h2>
            <p className="font-mono text-sm text-black/60 dark:text-white/60 leading-relaxed mb-8">
              Integrate global payout infrastructure into your application with our comprehensive API suite. Built for developers, by developers.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.ntzs.co.tz/developers" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black dark:border-white font-mono text-xs uppercase tracking-widest px-5 py-2.5 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <BookOpen className="h-3.5 w-3.5" /> VIEW DOCS
              </a>
              <a href="https://www.nedapay.xyz/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-widest px-5 py-2.5 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all">
                <Zap className="h-3.5 w-3.5" /> GET STARTED
              </a>
            </div>
          </div>

          {/* Right — Ecosystem map */}
          <div className="border border-black/20 dark:border-white/20 relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-black/40 dark:border-white/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/40 dark:border-white/40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black/40 dark:border-white/40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-black/40 dark:border-white/40 pointer-events-none" />

            {/* Header */}
            <div className="border-b border-black/10 dark:border-white/10 px-5 py-3 flex items-center justify-between">
              <span className="font-mono text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest">{">_ PRODUCT ECOSYSTEM"}</span>
              <span className="font-mono text-[9px] text-black/20 dark:text-white/20 uppercase tracking-widest">{ecosystem.length} PRODUCTS</span>
            </div>

            {/* Tree */}
            <div className="px-5 py-5 space-y-0">
              {/* Root node */}
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[11px] text-black/30 dark:text-white/30 select-none">{"   "}</span>
                <span className="font-mono text-xs font-bold text-black dark:text-white tracking-widest">NEDA LABS</span>
                <span className="font-mono text-[8px] text-black/20 dark:text-white/20 uppercase tracking-widest ml-1">/ CORE</span>
              </div>

              {ecosystem.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 py-2 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] -mx-5 px-5 transition-colors"
                >
                  <span className="font-mono text-[11px] text-black/20 dark:text-white/20 select-none shrink-0 mt-0.5">{item.prefix}</span>
                  <span className="font-mono text-xs font-bold text-black dark:text-white w-24 shrink-0 group-hover:opacity-70 transition-opacity">
                    {item.label}
                  </span>
                  <span className="font-mono text-[10px] text-black/40 dark:text-white/40 flex-1 leading-relaxed mt-0.5 hidden sm:block">
                    {item.desc}
                  </span>
                  <span className={`font-mono text-[8px] tracking-widest shrink-0 mt-0.5 ${
                    item.status === 'LIVE' ? 'text-emerald-500' :
                    item.status === 'BETA' ? 'text-amber-500' :
                    'text-black/20 dark:text-white/20'
                  }`}>
                    {item.status}
                  </span>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-black/10 dark:border-white/10 px-5 py-3 flex items-center justify-between">
              <span className="font-mono text-[9px] text-black/20 dark:text-white/20 uppercase tracking-widest">EAST AFRICA · EXPANDING</span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="font-mono text-[9px] text-black/20 dark:text-white/20 uppercase tracking-widest">ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
