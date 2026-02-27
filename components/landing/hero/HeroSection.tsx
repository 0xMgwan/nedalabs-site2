'use client';

import { heroContent } from '@/data/config/heroData';
import { HeroBadge } from './HeroBadge';
import { HeroCtaForm } from './HeroCtaForm';
import { SocialProof } from './SocialProof';

export function HeroSection() {
  return (
    <div className="relative z-[2] mx-auto flex max-w-3xl flex-col items-center px-6 pt-16 text-center lg:px-10 xl:pt-20">
      <HeroBadge />

      <h1 className="mt-6 font-display font-semibold leading-[1.05] tracking-tight text-primary-800 dark:text-white/[0.92] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
        {heroContent.headline}
      </h1>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-500 dark:text-white/70">
        {heroContent.subhead}
      </p>
    </div>
  );
}
