'use client';

import { ArrowRight, Mail } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="get-started" className="relative w-full bg-white dark:bg-black py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">

        {/* Top decoration */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
          <span className="font-mono text-[9px] text-black/30 dark:text-white/30 uppercase tracking-widest">&#8734;</span>
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

        <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-4">// GET STARTED</p>

        <h2 className="font-mono font-bold text-black dark:text-white text-3xl md:text-5xl tracking-tight mb-4">
          READY TO TRANSFORM YOUR<br />FINANCIAL OPERATIONS?
        </h2>

        <p className="font-mono text-sm text-black/60 dark:text-white/60 mb-2">
          Join thousands of businesses and developers building the future of finance with Neda Labs
        </p>
        <p className="font-mono text-[10px] text-black/30 dark:text-white/30 mb-8">
          Explore our products and get started today
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row mb-10">
          <a href="https://www.nedapay.xyz/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-black dark:border-white font-mono text-xs uppercase tracking-widest px-7 py-3 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 group">
            GET STARTED NOW
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="mailto:support@nedapay.xyz"
            className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-widest px-7 py-3 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200">
            <Mail className="h-3.5 w-3.5" />
            CONTACT SALES
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[9px] text-black/30 dark:text-white/30 uppercase tracking-widest">
          {['No setup fees', 'Cancel anytime', '24/7 support'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-black/20 dark:text-white/20">—</span>
              {item}
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
          <span className="font-mono text-[9px] text-black/20 dark:text-white/20 uppercase tracking-widest">NEDALABS.PROTOCOL</span>
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>
      </div>
    </section>
  );
}
