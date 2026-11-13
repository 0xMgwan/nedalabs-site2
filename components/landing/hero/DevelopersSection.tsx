'use client';

import { Reveal, WaveText } from '@/components/np/motion';

const ecosystem = [
  { label: 'nTZS', desc: 'BOT-regulated stablecoin', href: 'https://www.ntzs.co.tz/' },
  { label: 'NEDApay', desc: 'Instant cross-border payments', href: 'https://www.nedapay.xyz/' },
  { label: 'GUAP', desc: "Africa's predictions market", href: 'https://www.guap.gold' },
  { label: 'WashikaDAU', desc: 'ReFi and community finance', href: 'https://www.washikadau.com' },
  { label: 'PayPerPlay', desc: 'Creator monetization platform', href: 'https://www.payperplay.xyz' },
  { label: 'SimpleFX', desc: 'Automated market making', href: 'https://www.ntzs.co.tz/simplefx' },
];

export function DevelopersSection() {
  return (
    <section id="developers" className="scroll-mt-24 bg-np-paper">
      <div className="np-wrap grid gap-16 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="np-label text-np-blue">04 · For developers</p>
          </Reveal>
          <WaveText as="h2" text="Build on NEDA." className="np-h2 mt-6" />
          <Reveal delay={200}>
            <p className="np-body mt-8 max-w-[40ch] text-np-ink/75">
              Integrate global payout infrastructure into your application with our API suite. Built for developers, by developers.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://www.ntzs.co.tz/developers"
                target="_blank"
                rel="noopener noreferrer"
                className="np-focus rounded-full bg-np-blue px-7 py-4 font-bold text-np-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                View docs
              </a>
              <a
                href="https://www.nedapay.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="np-focus rounded-full border border-np-ink px-7 py-4 font-bold transition-colors hover:bg-np-ink hover:text-np-bone"
              >
                Get started
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={150}>
          <div className="rounded-[clamp(16px,2vw,32px)] bg-np-bone p-6 sm:p-10">
            <div className="flex items-center justify-between">
              <p className="np-label text-np-label">The ecosystem</p>
              <p className="np-label flex items-center gap-2 text-np-ink">
                <span className="h-2 w-2 animate-pulse rounded-full bg-np-blue" />
                {ecosystem.length} live
              </p>
            </div>
            <ul className="mt-6">
              {ecosystem.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="np-focus group flex items-baseline justify-between gap-4 border-t border-np-ink/15 py-5"
                  >
                    <span className="text-[clamp(22px,2vw,32px)] font-medium tracking-tight transition-colors group-hover:text-np-blue">
                      {item.label}
                    </span>
                    <span className="hidden flex-1 text-right text-np-label sm:block">{item.desc}</span>
                    <span className="np-label shrink-0 rounded-full bg-np-ink px-2.5 py-1 text-[10px] text-np-bone">Live</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
