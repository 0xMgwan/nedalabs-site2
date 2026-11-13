'use client';

import { Reveal, WaveText } from '@/components/np/motion';

export function CtaSection() {
  return (
    <section id="get-started" className="np-wrap scroll-mt-24 py-24 lg:py-36">
      <Reveal>
        <p className="np-label text-np-blue">06 · Get started</p>
      </Reveal>
      <WaveText as="h2" text="Ready to move money differently?" className="np-display mt-6 max-w-[14ch]" />
      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-6" delay={150}>
          <p className="np-body max-w-[46ch] text-np-ink/75">
            Join the businesses and developers building the future of finance with NEDA Labs. Explore our products and get started today.
          </p>
        </Reveal>
        <Reveal className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end" delay={250}>
          <a
            href="https://www.nedapay.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="np-focus rounded-full bg-np-blue px-6 py-3 text-base font-bold text-np-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get started now
          </a>
          <a
            href="mailto:support@nedapay.xyz"
            className="np-focus rounded-full border border-np-ink px-6 py-3 text-base font-bold transition-colors hover:bg-np-ink hover:text-np-bone"
          >
            Contact sales
          </a>
        </Reveal>
      </div>
      <Reveal className="mt-14" delay={300}>
        <ul className="np-label flex flex-wrap gap-x-8 gap-y-3 text-np-label">
          {['No setup fees', 'Cancel anytime', '24/7 support'].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
