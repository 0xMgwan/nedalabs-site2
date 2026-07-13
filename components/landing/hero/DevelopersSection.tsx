'use client';

import { BookOpen, Zap } from 'lucide-react';

export function DevelopersSection() {
  return (
    <section id="developers" className="relative w-full bg-white dark:bg-black py-16 lg:py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
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
      </div>
    </section>
  );
}
