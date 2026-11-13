'use client';

import { useEffect, useState } from 'react';

function formatSupply(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.?0+$/, '') + 'K';
  return n.toLocaleString();
}

export function LiveNTZSStat({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const [supply, setSupply] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupply = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        if (typeof data.supply === 'number') setSupply(data.supply);
      } catch {
        // keep the last value
      } finally {
        setLoading(false);
      }
    };
    fetchSupply();
    const interval = setInterval(fetchSupply, 60_000);
    return () => clearInterval(interval);
  }, []);

  const muted = tone === 'dark' ? 'text-np-bone/60' : 'text-np-label';

  return (
    <div title={supply !== null ? `${supply.toLocaleString()} nTZS on Base` : undefined}>
      <div className={`np-label flex items-center gap-2 ${muted}`}>
        nTZS supply
        {!loading && supply !== null && (
          <span className="inline-flex items-center gap-1.5 text-np-blue">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-np-blue" />
            Live
          </span>
        )}
      </div>
      <div className="mt-2 font-mono text-[clamp(32px,3.4vw,56px)] font-medium leading-none tracking-tight">
        {loading ? <span className="animate-pulse opacity-30">···</span> : supply !== null ? formatSupply(supply) : '—'}
      </div>
    </div>
  );
}
