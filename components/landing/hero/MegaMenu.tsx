'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRight, Play, Code, Network } from 'lucide-react';
import { megaMenuLeft, megaMenuRight, megaMenuPromo } from '@/data/config/heroData';

const productLogos = {
  'BOT-Regulated Stablecoins': '/assets/logos/ntzs.jpg',
  'Instant Payments (NEDApay)': '/assets/logos/nedapay.jpg',
  'Developer APIs': null, // Will use Code icon
  'JUKUMU Network': '/assets/logos/jukumu.jpg',
} as const;

const productIcons = {
  'Developer APIs': Code,
  'JUKUMU Network': Network,
} as const;

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      role="menu"
      className="absolute left-0 top-full mt-2 w-[640px] rounded-menu-md bg-surface-light p-6 shadow-menu dark:bg-surface-dark dark:shadow-menu-dark"
    >
      <div className="grid grid-cols-2 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-1">
          {megaMenuLeft.map((item) => {
            const logo = productLogos[item.title as keyof typeof productLogos];
            const IconComponent = productIcons[item.title as keyof typeof productIcons];
            
            return (
              <a
                key={item.title}
                href="#"
                className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-primary-100/60 dark:hover:bg-white/5"
              >
                {logo ? (
                  <Image
                    src={logo}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded object-cover"
                  />
                ) : IconComponent ? (
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary-800 dark:bg-white">
                    <IconComponent className="h-3 w-3 text-white dark:text-primary-800" />
                  </div>
                ) : (
                  <span className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full bg-primary-400" />
                )}
                <div>
                  <p className="text-sm font-medium text-primary-800 dark:text-white/[0.92]">
                    {item.title}
                  </p>
                  <p className="text-xs text-primary-500 dark:text-white/50">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            );
          })}

          {/* Promo card */}
          <a
            href="#"
            className="mt-3 flex items-center gap-3 rounded-card-md border border-primary-200 p-3 transition-colors hover:border-primary-300 dark:border-white/10 dark:hover:border-white/20"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-800">
              <Play className="h-4 w-4 text-secondary-600 dark:text-secondary-300" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-primary-800 dark:text-white/[0.92]">
                {megaMenuPromo.title}
              </p>
              <p className="text-xs text-primary-500 dark:text-white/50">
                {megaMenuPromo.subtitle}
              </p>
            </div>
            <ChevronRight className="h-4 w-4 text-primary-400 dark:text-white/40" />
          </a>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-1">
          {megaMenuRight.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group rounded-lg p-2.5 transition-colors hover:bg-primary-100/60 dark:hover:bg-white/5"
            >
              <p className="text-sm font-medium text-primary-800 dark:text-white/[0.92]">
                {item.title}
              </p>
              <p className="text-xs text-primary-500 dark:text-white/50">
                {item.subtitle}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
