'use client';

import { Fragment, createElement, useEffect, useRef, type ReactNode } from 'react';

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className={`np-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/** Headline whose letters rise one after another; the full string stays in the accessible name. */
export function WaveText({
  text,
  as = 'span',
  className = '',
}: {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  className?: string;
}) {
  const ref = useInView<HTMLElement>(0.3);
  let i = 0;
  const words = text.split(' ');
  return createElement(
    as,
    { ref, className: `np-wave ${className}`, 'aria-label': text },
    words.map((w, wi) => (
      <Fragment key={wi}>
        <span aria-hidden style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {[...w].map((ch, ci) => (
            <span key={ci} className="np-ch" style={{ ['--i' as string]: i++ }}>
              {ch}
            </span>
          ))}
        </span>
        {wi < words.length - 1 ? ' ' : null}
      </Fragment>
    )),
  );
}
