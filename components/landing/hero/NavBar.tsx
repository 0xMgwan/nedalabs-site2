'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ThemeSwitch } from '@/components/shared/ThemeSwitch';
import { navLinks } from '@/data/config/heroData';
import { MegaMenu } from './MegaMenu';

export function NavBar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMegaMenu = useCallback(() => setMegaMenuOpen(false), []);

  return (
    <nav className="sticky top-0 z-10 w-full">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10 xl:px-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
            <Image src="/assets/logos/nedalabs.jpg" alt="NEDA LABS" width={40} height={40} className="h-10 w-10 object-cover" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-primary-900 dark:text-white">
            NEDA <span className="font-normal">LABS</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.hasChevron && link.label === 'Products' ? (
                <button
                  onClick={() => setMegaMenuOpen((prev) => !prev)}
                  className="flex items-center gap-1 rounded-pill px-3 py-2 text-sm font-medium text-primary-800 transition-opacity hover:opacity-70 dark:text-white/[0.92]"
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 text-primary-400 transition-transform dark:text-white/50 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <a
                  href={link.href}
                  className="flex items-center gap-1 rounded-pill px-3 py-2 text-sm font-medium text-primary-800 transition-opacity hover:opacity-70 dark:text-white/[0.92]"
                >
                  {link.label}
                  {link.hasChevron && (
                    <ChevronDown className="h-3.5 w-3.5 text-primary-400 dark:text-white/50" />
                  )}
                </a>
              )}
              {link.label === 'Products' && (
                <MegaMenu isOpen={megaMenuOpen} onClose={closeMegaMenu} />
              )}
            </div>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeSwitch />

          <a
            href="mailto:support@nedapay.xyz"
            className="hidden rounded-pill border border-primary-200 bg-surface-light px-3.5 py-2 text-sm font-medium text-primary-800 transition-all hover:border-primary-300 hover:shadow-button-hover sm:inline-flex dark:border-white/10 dark:bg-surface-dark dark:text-white/[0.92] dark:hover:border-white/20"
          >
            Contact
          </a>

          <a
            href="https://www.nedapay.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-pill bg-primary-800 px-3.5 py-2 text-sm font-medium text-white transition-all hover:shadow-button-hover active:scale-[0.98] sm:inline-flex dark:bg-white dark:text-primary-800"
          >
            Get Started
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-primary-800 md:hidden dark:text-white/[0.92]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-primary-200/50 bg-surface-light px-6 pb-4 pt-2 md:hidden dark:border-white/10 dark:bg-surface-dark">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 py-2.5 text-sm font-medium text-primary-800 dark:text-white/[0.92]"
            >
              {link.label}
              {link.hasChevron && (
                <ChevronDown className="h-3.5 w-3.5 text-primary-400 dark:text-white/50" />
              )}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="#"
              className="rounded-pill border border-primary-200 bg-surface-light px-3.5 py-2 text-center text-sm font-medium text-primary-800 dark:border-white/10 dark:bg-surface-dark dark:text-white/[0.92]"
            >
              Contact
            </a>
            <a
              href="https://www.nedapay.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-primary-800 px-3.5 py-2 text-center text-sm font-medium text-white dark:bg-white dark:text-primary-800"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
