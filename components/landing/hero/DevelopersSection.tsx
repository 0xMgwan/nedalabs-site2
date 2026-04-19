'use client';

import { Code, Terminal, BookOpen, Zap } from 'lucide-react';
import { developerFeatures, codeSnippet } from '@/data/config/heroData';

export function DevelopersSection() {
  return (
    <section id="developers" className="relative w-full bg-white dark:bg-black py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">{"// FOR DEVELOPERS"}</p>
            <h2 className="font-mono font-bold text-black dark:text-white text-3xl md:text-5xl tracking-tight mb-4">
              BUILD WITH<br />POWERFUL APIS
            </h2>
            <p className="font-mono text-sm text-black/60 dark:text-white/60 leading-relaxed mb-8">
              Integrate global payout infrastructure into your application with our comprehensive API suite. Built for developers, by developers.
            </p>

            <div className="mb-8 space-y-2">
              {developerFeatures.map((feature, i) => (
                <div key={feature} className="flex items-center gap-3 border border-black/10 dark:border-white/10 px-4 py-3">
                  <span className="text-[9px] font-mono text-black/30 dark:text-white/30">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-xs text-black/70 dark:text-white/70">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="https://nedapayplus.xyz/docs" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black dark:border-white font-mono text-xs uppercase tracking-widest px-5 py-2.5 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <BookOpen className="h-3.5 w-3.5" /> VIEW DOCS
              </a>
              <a href="https://www.nedapay.xyz/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-widest px-5 py-2.5 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all">
                <Zap className="h-3.5 w-3.5" /> GET STARTED
              </a>
            </div>
          </div>

          {/* Right code block */}
          <div className="border border-black/20 dark:border-white/20 bg-white dark:bg-black relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-black/40 dark:border-white/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/40 dark:border-white/40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black/40 dark:border-white/40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-black/40 dark:border-white/40 pointer-events-none" />

            <div className="border-b border-black/10 dark:border-white/10 px-4 py-3 flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-black/40 dark:text-white/40" />
              <span className="font-mono text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest">Quick Start Example</span>
            </div>
            <div className="p-5">
              <pre className="overflow-x-auto text-xs font-mono text-black/70 dark:text-white/70 leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </div>
            <div className="border-t border-black/10 dark:border-white/10 px-4 py-3 flex items-center justify-between">
              <span className="font-mono text-[9px] text-black/30 dark:text-white/30 uppercase tracking-widest">Response Time</span>
              <span className="font-mono text-[10px] text-black/60 dark:text-white/60">~150ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
