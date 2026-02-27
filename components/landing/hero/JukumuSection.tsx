'use client';

import { Sprout, Heart, Leaf, Users } from 'lucide-react';
import { jukumuStats } from '@/data/config/heroData';

const pillars = [
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Supporting local initiatives that create lasting positive change',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Initiatives',
    description: 'Funding sustainable projects that protect our environment',
  },
  {
    icon: Users,
    title: 'Financial Inclusion',
    description: 'Bringing financial services to underserved communities',
  },
];

export function JukumuSection() {
  return (
    <section id="jukumu" className="relative w-full bg-canvas-light py-24 dark:bg-canvas-dark">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05] dark:opacity-[0.10]"
        style={{ backgroundImage: "url('/assets/logos/NEDA.jpg')" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-pill bg-primary-800 px-3 py-1 text-xs font-medium text-white dark:bg-white/[0.14] dark:text-white/[0.92]">
              <Sprout className="h-3.5 w-3.5" />
              Regenerative Finance
            </div>

            <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl dark:text-white/[0.92]">
              JUKUMU Network
            </h2>

            <p className="mb-8 text-base leading-relaxed text-primary-500 dark:text-white/70">
              Empowering sustainable community development through regenerative finance.
              JUKUMU connects financial innovation with environmental and social impact across East Africa.
            </p>

            <div className="mb-8 space-y-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-800 dark:bg-white">
                      <Icon className="h-4 w-4 text-white dark:text-primary-800" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary-800 dark:text-white/[0.92]">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-primary-500 dark:text-white/60">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#join-jukumu"
              className="inline-flex items-center gap-2 rounded-pill bg-primary-800 px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-button-hover active:translate-y-0 dark:bg-white dark:text-primary-800"
            >
              Join the Movement
              <Sprout className="h-4 w-4" />
            </a>
          </div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {jukumuStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`rounded-card-md border border-primary-200/60 bg-surface-light p-6 shadow-nav dark:border-white/10 dark:bg-surface-dark dark:shadow-nav-dark ${
                  index % 2 === 1 ? 'mt-8' : ''
                }`}
              >
                <div className="mb-2 text-2xl font-semibold text-primary-800 dark:text-white/[0.92]">
                  {stat.value}
                </div>
                <p className="text-sm text-primary-500 dark:text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
