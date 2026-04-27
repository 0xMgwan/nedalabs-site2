'use client';

import { useEffect, useState } from 'react';

function formatSupply(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.?0+$/, '') + 'K';
  return n.toLocaleString();
}

interface LiveNTZSStatProps {
  /** 'sm' = hero inline stat (default), 'lg' = stats bar large */
  size?: 'sm' | 'lg';
}

export function LiveNTZSStat({ size = 'sm' }: LiveNTZSStatProps) {
  const [supply, setSupply] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(false);

  const fetchSupply = async () => {
    try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      if (typeof data.supply === 'number') {
        setSupply(data.supply);
        setTick((t) => !t);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupply();
    const interval = setInterval(fetchSupply, 60_000);
    return () => clearInterval(interval);
  }, []);

  const isLg = size === 'lg';

  return (
    <div className="flex flex-col gap-0.5 group/stat relative items-center">
      {/* Value */}
      <span
        key={String(tick)}
        className={`font-mono font-bold text-black dark:text-white animate-stat-pop ${isLg ? 'text-2xl mb-1' : 'text-lg'}`}
      >
        {loading ? (
          <span className="opacity-30 animate-pulse">{isLg ? '···' : '···'}</span>
        ) : supply !== null ? (
          formatSupply(supply)
        ) : (
          '—'
        )}
      </span>

      {/* Label + LIVE badge */}
      <div className={`flex items-center justify-center gap-1.5 ${isLg ? '' : ''}`}>
        <span className={`font-mono uppercase tracking-widest text-black/40 dark:text-white/40 ${isLg ? 'text-[9px]' : 'text-[9px]'}`}>
          nTZS SUPPLY
        </span>
        {!loading && supply !== null && (
          <span className="flex items-center gap-1 border border-black/10 dark:border-white/10 px-1 py-px">
            <span className="w-1 h-1 rounded-full bg-black/60 dark:bg-white/60 animate-pulse" />
            <span className="text-[7px] font-mono text-black/30 dark:text-white/30 tracking-widest">LIVE</span>
          </span>
        )}
      </div>

      {/* Chain tooltip on hover */}
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 hidden group-hover/stat:flex items-center gap-1.5 border border-black/10 dark:border-white/10 bg-white dark:bg-black px-2 py-1 whitespace-nowrap z-20 pointer-events-none shadow-sm">
        <span className="text-[8px] font-mono text-black/40 dark:text-white/40 uppercase tracking-widest">⬡ Base Chain</span>
        <span className="text-[8px] font-mono text-black/60 dark:text-white/60">
          {supply !== null ? supply.toLocaleString() + ' nTZS' : '—'}
        </span>
      </div>
    </div>
  );
}
