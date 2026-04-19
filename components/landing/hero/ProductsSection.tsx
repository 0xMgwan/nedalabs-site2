'use client';

import Image from 'next/image';
import { ArrowRight, Code } from 'lucide-react';
import { products, stats } from '@/data/config/heroData';

export function ProductsSection() {
  return (
    <section id="products" className="relative w-full bg-white dark:bg-black py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">{"// OUR PRODUCTS"}</p>
          <h2 className="font-mono font-bold text-black dark:text-white text-3xl md:text-5xl tracking-tight mb-3">
            BUILDING THE FUTURE<br />OF FINANCE
          </h2>
          <p className="font-mono text-sm text-black/50 dark:text-white/50 max-w-xl">
            Comprehensive digital financial solutions designed for the modern economy
          </p>
        </div>

        {/* Horizontal scroll cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2" style={{ scrollbarWidth: 'none' }}>
          {products.map((product, index) => {
            return (
              <div key={product.title}
                className="group relative flex-shrink-0 w-72 border border-black/10 dark:border-white/10 bg-white dark:bg-black p-6 hover:border-black/30 dark:hover:border-white/30 transition-colors">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-black/20 dark:border-white/20 group-hover:border-black/50 dark:group-hover:border-white/50 transition-colors pointer-events-none" />

                <div className="mb-4 flex items-center gap-2">
                  {product.logo ? (
                    <Image src={product.logo} alt={product.title} width={20} height={20}
                      className="h-5 w-5 rounded object-cover opacity-70" />
                  ) : (
                    <Code className="h-4 w-4 text-black/50 dark:text-white/50" />
                  )}
                  <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                    PRODUCT.{String(index + 1).padStart(2, '0')}
                  </p>
                </div>

                <h3 className="font-mono font-bold text-black dark:text-white text-base mb-2 uppercase tracking-wide">
                  {product.title}
                </h3>

                <p className="font-mono text-xs text-black/50 dark:text-white/50 leading-relaxed mb-4">
                  {product.description}
                </p>

                <ul className="mb-5 space-y-1.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[10px] font-mono text-black/40 dark:text-white/40">
                      <span className="text-black/30 dark:text-white/30">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href={product.href}
                  target={product.href.startsWith('http') ? '_blank' : undefined}
                  rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors group-hover:text-black dark:group-hover:text-white">
                  Learn more <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-8 border border-black/10 dark:border-white/10 grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label}
              className={`px-6 py-5 text-center ${i < stats.length - 1 ? 'border-r border-black/10 dark:border-white/10' : ''}`}>
              <div className="font-mono font-bold text-black dark:text-white text-2xl mb-1">{stat.value}</div>
              <div className="text-[9px] font-mono uppercase tracking-widest text-black/40 dark:text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
