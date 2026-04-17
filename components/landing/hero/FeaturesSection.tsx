'use client';

import { Lock, Zap, Globe, BarChart3, Shield, Headphones } from 'lucide-react';
import { features } from '@/data/config/heroData';

const featureIcons = [Lock, Zap, Globe, BarChart3, Shield, Headphones];

export function FeaturesSection() {
  return (
    <section id="features" className="relative w-full bg-white dark:bg-black py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12">
          <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">// WHY CHOOSE US</p>
          <h2 className="font-mono font-bold text-black dark:text-white text-3xl md:text-5xl tracking-tight mb-3">
            BUILT FOR TRUST<br />&amp; PERFORMANCE
          </h2>
          <p className="font-mono text-sm text-black/50 dark:text-white/50 max-w-xl">
            Enterprise-grade infrastructure designed for the demands of modern finance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3 bg-black/10 dark:bg-white/10">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div key={feature.title}
                className="group bg-white dark:bg-black p-8 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">
                <div className="mb-4 flex items-center gap-3">
                  <div className="border border-black/20 dark:border-white/20 p-2 group-hover:border-black/50 dark:group-hover:border-white/50 transition-colors">
                    <Icon className="h-4 w-4 text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/30 dark:text-white/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-mono font-bold text-black dark:text-white text-sm uppercase tracking-wide mb-2">
                  {feature.title}
                </h3>
                <p className="font-mono text-xs text-black/50 dark:text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
