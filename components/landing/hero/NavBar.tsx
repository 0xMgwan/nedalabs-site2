'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { navLinks } from '@/data/config/heroData';
import { MegaMenu } from './MegaMenu';

export function NavBar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const closeMegaMenu = useCallback(() => setMegaMenuOpen(false), []);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black border-b border-black/10 dark:border-white/10">

      {/* Main row — logo + actions */}
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 lg:px-10 xl:px-14 relative">

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-black/20 dark:border-white/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/20 dark:border-white/20 pointer-events-none" />

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-base font-bold tracking-widest text-black dark:text-white">
            NEDA<span className="font-light opacity-60"> LABS</span>
          </span>
          <span className="hidden sm:block h-3 w-px bg-black/20 dark:bg-white/20" />
          <span className="hidden sm:block text-black/30 dark:text-white/30 text-[9px] font-mono tracking-widest">EST. 2024</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.hasChevron && link.label === 'Products' ? (
                <button
                  onClick={() => setMegaMenuOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  {link.label}
                  <ChevronDown className={`h-3 w-3 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-1 px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )}
              {link.label === 'Products' && (
                <MegaMenu isOpen={megaMenuOpen} onClose={closeMegaMenu} />
              )}
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex items-center justify-center p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 hidden dark:block" />
            <Moon className="h-4 w-4 block dark:hidden" />
          </button>
          <a href="mailto:support@nedapay.xyz"
            className="hidden lg:inline-flex border border-black/20 dark:border-white/20 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all">
            Contact
          </a>
          <a href="https://www.nedapay.xyz/" target="_blank" rel="noopener noreferrer"
            className="border border-black dark:border-white px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all whitespace-nowrap">
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile nav strip — links row, no hamburger */}
      <div className="lg:hidden border-t border-black/10 dark:border-white/10 overflow-x-auto flex items-center" style={{ scrollbarWidth: 'none' }}>
        <div className="flex items-center px-4 gap-0 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="shrink-0 px-3 py-2.5 text-[10px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors border-r border-black/5 dark:border-white/5 last:border-r-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:support@nedapay.xyz"
            className="shrink-0 px-3 py-2.5 text-[10px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

    </nav>
  );
}
