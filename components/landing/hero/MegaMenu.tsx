'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Code, Network } from 'lucide-react';
import { megaMenuLeft, megaMenuRight, megaMenuPromo } from '@/data/config/heroData';

const productLogos: Record<string, string | null> = {
  'BOT-Regulated Stablecoins': '/assets/logos/ntzs.jpg',
  'Instant Payments (NEDApay)': '/assets/logos/nedapay.jpg',
  'Developer APIs': null,
  'WashikaDAU Network': '/assets/logos/jukumu.jpg',
  'GUAP — Predictions Market': '/assets/logos/guap.png',
  'PayPerPlay': '/assets/logos/payperplay.png',
  'SimpleFX': '/assets/logos/simplefx.svg',
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
    <div
      ref={panelRef}
      role="menu"
      className="absolute left-1/2 top-full z-50 mt-4 w-[680px] -translate-x-1/2 rounded-[24px] bg-np-paper p-6 shadow-[0_24px_60px_rgba(0,0,0,0.14)] ring-1 ring-black/10"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="np-label mb-3 px-3 text-np-label">Products</p>
          {megaMenuLeft.map((item) => {
            const logo = productLogos[item.title];
            const IconComponent = productIcons[item.title];
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="np-focus flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-np-bone"
              >
                {logo ? (
                  <Image src={logo} alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-lg object-cover" />
                ) : (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-np-bone">
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                  </span>
                )}
                <span>
                  <span className="block text-sm font-semibold">{item.title}</span>
                  <span className="block text-xs text-np-label">{item.subtitle}</span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col border-l border-np-ink/10 pl-6">
          <p className="np-label mb-3 px-3 text-np-label">Solutions</p>
          {megaMenuRight.map((item) => (
            <div key={item.title} className="p-3">
              <span className="block text-sm font-semibold">{item.title}</span>
              <span className="block text-xs text-np-label">{item.subtitle}</span>
            </div>
          ))}
          <a
            href="https://www.ntzs.co.tz/developers"
            target="_blank"
            rel="noopener noreferrer"
            className="np-focus mt-auto rounded-2xl bg-np-ink p-4 text-np-bone transition-transform hover:-translate-y-0.5"
          >
            <span className="block font-bold">{megaMenuPromo.title} →</span>
            <span className="block text-sm text-np-bone/70">{megaMenuPromo.subtitle}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
