'use client';

import Image from 'next/image';
import { Code } from 'lucide-react';
import { products, stats } from '@/data/config/heroData';
import { LiveNTZSStat } from '@/components/ui/LiveNTZSStat';
import { Reveal, WaveText } from '@/components/np/motion';

export function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-24 bg-np-paper">
      <div className="np-wrap py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="np-label text-np-blue">01 · Products</p>
            </Reveal>
            <WaveText as="h2" text="One stack for African money." className="np-h2 mt-6 max-w-[14ch]" />
          </div>
          <Reveal>
            <p className="np-body max-w-[38ch] text-np-ink/75">
              Comprehensive digital financial solutions designed for the modern economy.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={(i % 3) * 120}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="np-focus group flex h-full flex-col gap-4 border-t-2 border-np-ink pt-6"
              >
                <span className="flex items-center gap-3">
                  {product.logo ? (
                    <Image src={product.logo} alt="" width={36} height={36} className="h-9 w-9 rounded-[10px] object-cover ring-1 ring-black/10" />
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-np-bone">
                      <Code className="h-4 w-4" />
                    </span>
                  )}
                  <span className="np-label text-np-label">{String(i + 1).padStart(2, '0')}</span>
                </span>
                <span className="text-[clamp(22px,2vw,34px)] font-medium leading-[1.05] tracking-tight">{product.title}</span>
                <span className="np-body text-np-ink/75">{product.description}</span>
                <ul className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="rounded-full border border-np-ink/15 px-3 py-1.5 text-sm font-semibold text-np-ink/70">
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-2 font-bold text-np-blue group-hover:underline">Learn more →</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((stat) => (
              <a
                key={stat.label}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="np-focus block border-t border-np-ink/15 pt-4 transition-colors hover:border-np-ink"
              >
                {stat.live ? (
                  <LiveNTZSStat />
                ) : (
                  <>
                    <dt className="np-label text-np-label">{stat.label}</dt>
                    <dd className="mt-2 tabular-nums text-[clamp(28px,2.8vw,46px)] font-medium leading-none tracking-tight">{stat.value}</dd>
                  </>
                )}
              </a>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
