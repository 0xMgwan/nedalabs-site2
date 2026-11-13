'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { navLinks } from '@/data/config/heroData';
import { MegaMenu } from './MegaMenu';

export function NavBar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMegaMenu = useCallback(() => setMegaMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ${
        scrolled ? 'bg-np-bone/90 shadow-[0_1px_0_rgba(0,0,0,0.08)] backdrop-blur-md' : 'bg-np-bone'
      }`}
    >
      <div className="np-wrap flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="np-focus flex shrink-0 items-center gap-2.5" aria-label="NEDA Labs home">
          <Image src="/assets/logos/nedalabs.jpg" alt="" width={40} height={40} className="h-9 w-9 rounded-[10px] object-cover sm:h-10 sm:w-10" />
          <span className="text-xl font-bold tracking-tight">NEDA Labs</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.hasChevron && link.label === 'Products' ? (
                <button
                  onClick={() => setMegaMenuOpen((prev) => !prev)}
                  aria-expanded={megaMenuOpen}
                  className="np-focus flex items-center gap-1 text-[15px] font-semibold text-np-ink/70 transition-colors hover:text-np-ink"
                >
                  {link.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <a href={link.href} className="np-focus text-[15px] font-semibold text-np-ink/70 transition-colors hover:text-np-ink">
                  {link.label}
                </a>
              )}
              {link.label === 'Products' && <MegaMenu isOpen={megaMenuOpen} onClose={closeMegaMenu} />}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:support@nedapay.xyz"
            className="np-focus hidden rounded-full border border-np-ink/80 px-4 py-2.5 text-[15px] font-bold text-np-ink transition-colors hover:bg-np-ink hover:text-np-bone lg:inline-flex"
          >
            Contact
          </a>
          <a
            href="https://www.nedapay.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="np-focus whitespace-nowrap rounded-full bg-np-blue px-4 py-2.5 text-sm font-bold text-np-ink transition-transform duration-300 hover:-translate-y-0.5 sm:px-5 sm:text-[15px]"
          >
            Get started
          </a>
        </div>
      </div>

      <div className="flex overflow-x-auto border-t border-np-ink/10 lg:hidden" style={{ scrollbarWidth: 'none' }}>
        <div className="np-wrap flex shrink-0 items-center gap-6 py-3">
          {[...navLinks, { label: 'Contact', href: 'mailto:support@nedapay.xyz' }].map((link) => (
            <a key={link.label} href={link.href} className="np-focus shrink-0 text-sm font-semibold text-np-ink/70 hover:text-np-ink">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
