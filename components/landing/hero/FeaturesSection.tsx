'use client';

import { Lock, Zap, Globe, BarChart3, Shield, Headphones } from 'lucide-react';
import { features } from '@/data/config/heroData';

const featureIcons = [Lock, Zap, Globe, BarChart3, Shield, Headphones];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-surface-light py-24 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-pill bg-primary-800 px-3 py-1 text-xs font-medium text-white dark:bg-white/[0.14] dark:text-white/[0.92]">
            Why Choose Neda Labs
          </span>
          <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl dark:text-white/[0.92]">
            Built for Trust & Performance
          </h2>
          <p className="mx-auto max-w-2xl text-base text-primary-500 dark:text-white/70">
            Enterprise-grade infrastructure designed for the demands of modern finance
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={feature.title}
                className="group rounded-card-md border border-primary-200/60 bg-canvas-light p-6 transition-all hover:shadow-nav dark:border-white/10 dark:bg-canvas-dark dark:hover:shadow-nav-dark"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800 transition-transform group-hover:scale-110 dark:bg-white">
                  <Icon className="h-5 w-5 text-white dark:text-primary-800" />
                </div>

                <h3 className="mb-2 text-base font-semibold text-primary-800 dark:text-white/[0.92]">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-primary-500 dark:text-white/60">
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
