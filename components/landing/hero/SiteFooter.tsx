'use client';

import Image from 'next/image';

const COLS = [
  {
    title: 'Products',
    links: [
      { label: 'nTZS', href: 'https://www.ntzs.co.tz/' },
      { label: 'NEDApay', href: 'https://www.nedapay.xyz/' },
      { label: 'SimpleFX', href: 'https://www.ntzs.co.tz/simplefx' },
      { label: 'WashikaDAU', href: 'https://www.washikadau.com' },
    ],
  },
  {
    title: 'Build',
    links: [
      { label: 'Developer docs', href: 'https://www.ntzs.co.tz/developers' },
      { label: 'GUAP', href: 'https://www.guap.gold' },
      { label: 'PayPerPlay', href: 'https://www.payperplay.xyz' },
    ],
  },
  {
    title: 'Follow',
    links: [
      { label: 'X', href: 'https://x.com/NedaLabs' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nedalabs/?viewAsMember=true' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-np-ink text-np-bone">
      <div className="np-wrap pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="flex items-center gap-3">
              <Image src="/assets/logos/nedalabs.jpg" alt="" width={44} height={44} className="h-11 w-11 rounded-[12px] object-cover ring-1 ring-white/15" />
              <span className="text-2xl font-bold tracking-tight">NEDA Labs</span>
            </span>
            <p className="np-body mt-6 max-w-[40ch] text-np-bone/70">
              Building the future of digital finance in Africa with secure, compliant financial infrastructure.
            </p>
            <p className="np-label mt-8 text-np-bone/60">Contact</p>
            <a href="mailto:support@nedapay.xyz" className="np-focus mt-3 block font-semibold hover:text-np-blue">
              support@nedapay.xyz
            </a>
            <p className="mt-3 text-np-bone/70">Dar es Salaam, Tanzania</p>
          </div>
          {COLS.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <p className="np-label text-np-bone/60">{c.title}</p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="np-focus font-semibold transition-colors hover:text-np-blue"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="np-label mt-20 flex flex-wrap justify-between gap-4 border-t border-np-bone/20 pt-6 text-np-bone/60">
          <span>© {new Date().getFullYear()} NEDA Labs. All rights reserved.</span>
          <span>Dar es Salaam · Base</span>
        </div>
      </div>
    </footer>
  );
}
