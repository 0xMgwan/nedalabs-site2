'use client';

import Image from 'next/image';
import { Sprout, Heart, Leaf, Users } from 'lucide-react';
import { washikadauStats } from '@/data/config/heroData';

const pillars = [
  { icon: Heart, title: 'Community Impact', description: 'Supporting local initiatives that create lasting positive change' },
  { icon: Leaf, title: 'Eco-Friendly Initiatives', description: 'Funding sustainable projects that protect our environment' },
  { icon: Users, title: 'Financial Inclusion', description: 'Bringing financial services to underserved communities' },
];

export function JukumuSection() {
  return (
    <section id="washikadau" className="relative w-full bg-white dark:bg-black py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">{"// REGENERATIVE FINANCE"}</p>

            <div className="flex items-center gap-3 mb-4">
              <div className="border border-black/20 dark:border-white/20 p-1">
                <Image src="/assets/logos/jukumu.jpg" alt="WashikaDAU" width={32} height={32}
                  className="h-8 w-8 object-cover opacity-80" />
              </div>
              <h2 className="font-mono font-bold text-black dark:text-white text-3xl md:text-4xl tracking-tight">
                WASHIKADAU
              </h2>
            </div>

            <p className="font-mono text-sm text-black/60 dark:text-white/60 leading-relaxed mb-8 max-w-md">
              Empowering sustainable community development through regenerative finance. WashikaDAU connects financial innovation with environmental and social impact across East Africa.
            </p>

            <div className="mb-8 space-y-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-start gap-3 border border-black/10 dark:border-white/10 p-4 hover:border-black/20 dark:hover:border-white/20 transition-colors">
                    <div className="border border-black/20 dark:border-white/20 p-1.5 shrink-0">
                      <Icon className="h-3.5 w-3.5 text-black/60 dark:text-white/60" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-black dark:text-white mb-1">{pillar.title}</p>
                      <p className="text-[10px] font-mono text-black/50 dark:text-white/50">{pillar.description}</p>
                    </div>
                    <span className="ml-auto text-[9px] font-mono text-black/20 dark:text-white/20">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                );
              })}
            </div>

            <a href="https://www.washikadau.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black dark:border-white font-mono text-xs uppercase tracking-widest px-6 py-3 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200">
              <Sprout className="h-3.5 w-3.5" />
              JOIN THE MOVEMENT
            </a>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-px bg-black/10 dark:bg-white/10">
            {washikadauStats.map((stat, index) => (
              <div key={stat.label}
                className={`bg-white dark:bg-black p-8 ${index % 2 === 1 ? 'mt-8' : ''}`}>
                <div className="font-mono font-bold text-black dark:text-white text-3xl mb-1">{stat.value}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-black/40 dark:text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
