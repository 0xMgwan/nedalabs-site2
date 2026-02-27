'use client';

import { Star } from 'lucide-react';

export function SocialProof() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs">
      {/* Star rating */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Regulation badge */}
      <span className="text-primary-400 dark:text-white/50">
        Regulated by the{' '}
        <span className="font-semibold text-primary-600 dark:text-white/70">
          Bank of Tanzania
        </span>
      </span>
    </div>
  );
}
