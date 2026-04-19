'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRight, Terminal, Code, Network } from 'lucide-react';
import { megaMenuLeft, megaMenuRight, megaMenuPromo } from '@/data/config/heroData';

const productLogos: Record<string, string | null> = {
  'BOT-Regulated Stablecoins': '/assets/logos/ntzs.jpg',
  'Instant Payments (NEDApay)': '/assets/logos/nedapay.jpg',
  'Developer APIs': null,
  'WashikaDAU Network': '/assets/logos/jukumu.jpg',
  'GUAP — Predictions Market': '/assets/logos/guap.png',
  'PayPerPlay': '/assets/logos/payperplay.png',
};

const productIcons: Record<string, typeof Code> = {
  'Developer APIs': Code,
  'WashikaDAU Network': Network,
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose();
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
    <div ref={panelRef} role="menu"
      className="absolute left-0 top-full mt-1 w-[640px] bg-white dark:bg-black border border-black/20 dark:border-white/20 p-5 z-50">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-black/40 dark:border-white/40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/40 dark:border-white/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black/40 dark:border-white/40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-black/40 dark:border-white/40 pointer-events-none" />

      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-0.5">
          <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/30 dark:text-white/30 mb-2 px-2">{"// PRODUCTS"}</p>
          {megaMenuLeft.map((item) => {
            const logo = productLogos[item.title as keyof typeof productLogos];
            const IconComponent = productIcons[item.title as keyof typeof productIcons];
            return (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer"
                className="group flex items-start gap-3 p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-black/10 dark:hover:border-white/10">
                {logo ? (
                  <Image src={logo} alt={item.title} width={16} height={16}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded object-cover opacity-70 group-hover:opacity-100" />
                ) : IconComponent ? (
                  <div className="mt-0.5 h-4 w-4 shrink-0 flex items-center justify-center">
                    <IconComponent className="h-3.5 w-3.5 text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white" />
                  </div>
                ) : (
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-black/30 dark:bg-white/30 rounded-full group-hover:bg-black/60 dark:group-hover:bg-white/60" />
                )}
                <div>
                  <p className="text-[11px] font-mono text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors">{item.title}</p>
                  <p className="text-[10px] font-mono text-black/30 dark:text-white/30">{item.subtitle}</p>
                </div>
              </a>
            );
          })}

          {/* Promo */}
          <a href="https://nedapayplus.xyz/docs" target="_blank" rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 border border-black/10 dark:border-white/10 p-2.5 hover:border-black/30 dark:hover:border-white/30 transition-colors group">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-black/20 dark:border-white/20 group-hover:border-black/40 dark:group-hover:border-white/40">
              <Terminal className="h-3.5 w-3.5 text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-mono text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white">{megaMenuPromo.title}</p>
              <p className="text-[10px] font-mono text-black/30 dark:text-white/30">{megaMenuPromo.subtitle}</p>
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-black/30 dark:text-white/30 group-hover:text-black/60 dark:group-hover:text-white/60" />
          </a>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-0.5 border-l border-black/10 dark:border-white/10 pl-4">
          <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/30 dark:text-white/30 mb-2 px-2">{"// SOLUTIONS"}</p>
          {megaMenuRight.map((item) => (
            <a key={item.title} href="#"
              className="group p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-black/10 dark:hover:border-white/10">
              <p className="text-[11px] font-mono text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors">{item.title}</p>
              <p className="text-[10px] font-mono text-black/30 dark:text-white/30">{item.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
