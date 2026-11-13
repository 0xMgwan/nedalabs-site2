'use client';

import { features } from '@/data/config/heroData';
import { Reveal, WaveText } from '@/components/np/motion';

export function FeaturesSection() {
  return (
    <section id="features" className="np-wrap scroll-mt-24 py-24 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="np-label text-np-blue">03 · Why NEDA Labs</p>
          </Reveal>
          <WaveText as="h2" text="Built for trust." className="np-h2 mt-6" />
          <Reveal delay={200}>
            <p className="np-body mt-8 max-w-[34ch] text-np-ink/75">
              Enterprise-grade infrastructure designed for the demands of modern finance.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 2) * 120}>
              <div className="border-t border-np-ink/15 pt-6">
                <p className="np-label text-np-label">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-[clamp(19px,1.6vw,26px)] font-medium leading-tight tracking-tight">{feature.title}</h3>
                <p className="np-body mt-3 text-np-ink/75">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
