'use client';

import { useEffect, useState } from 'react';

function formatSupply(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.?0+$/, '') + 'K';
  return n.toLocaleString();
}

export function LiveNTZSStat() {
  const [supply, setSupply] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(false); // flash on update

  const fetchSupply = async () => {
    try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      if (typeof data.supply === 'number') {
        setSupply(data.supply);
        setTick((t) => !t); // trigger flash
      }
    } catch {
      // silently fail — keep last value
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupply();
    const interval = setInterval(fetchSupply, 60_000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-0.5 group relative">
      {/* Live value */}
      <span
        key={String(tick)} // re-mount triggers CSS animation
        className="font-mono font-bold text-black dark:text-white text-lg animate-stat-pop"
      >
        {loading ? (
          <span className="opacity-30 animate-pulse">···</span>
        ) : supply !== null ? (
          formatSupply(supply)
        ) : (
          '$1M+'
        )}
      </span>

      {/* Label row */}
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-[9px] text-black/40 dark:text-white/40 tracking-widest uppercase">
          nTZS SUPPLY
        </span>

        {/* Live indicator — only when data loaded */}
        {!loading && supply !== null && (
          <span className="flex items-center gap-1 border border-black/10 dark:border-white/10 px-1 py-px">
            <span className="w-1 h-1 rounded-full bg-black/60 dark:bg-white/60 animate-pulse" />
            <span className="text-[7px] font-mono text-black/30 dark:text-white/30 tracking-widest">LIVE</span>
          </span>
        )}
      </div>

      {/* Tooltip on hover */}
      <div className="absolute -top-9 left-0 hidden group-hover:flex items-center gap-1.5 border border-black/10 dark:border-white/10 bg-white dark:bg-black px-2 py-1 whitespace-nowrap z-10 pointer-events-none">
        <span className="text-[8px] font-mono text-black/40 dark:text-white/40 uppercase tracking-widest">⬡ Base Chain</span>
        <span className="text-[8px] font-mono text-black/60 dark:text-white/60">
          {supply !== null ? supply.toLocaleString() + ' nTZS' : '—'}
        </span>
      </div>
    </div>
  );
}
