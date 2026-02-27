'use client';

import { heroContent } from '@/data/config/heroData';

export function HeroBadge() {
  return (
    <div className="flex items-center gap-2">
      <span className="rounded-pill bg-primary-800 px-2 py-0.5 text-xs font-medium text-white dark:bg-white/[0.14] dark:text-white/[0.92]">
        {heroContent.badge}
      </span>
      <a
        href={heroContent.pillLink.href}
        className="rounded-pill border border-primary-200/60 bg-white/70 px-2.5 py-1 text-xs font-medium text-primary-500 transition-colors hover:border-primary-300 dark:border-white/10 dark:bg-surface-dark/75 dark:text-white/70"
      >
        {heroContent.pillLink.label}
      </a>
    </div>
  );
}
