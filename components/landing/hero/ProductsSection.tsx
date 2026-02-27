'use client';

import Image from 'next/image';
import { ArrowRight, Code, Network } from 'lucide-react';
import { products, stats } from '@/data/config/heroData';

const productLogos = [
  '/assets/logos/ntzs.jpg',
  '/assets/logos/nedapay.jpg',
  null, // Developer APIs - will use Code icon
  null, // JUKUMU - will use Network icon
];

export function ProductsSection() {
  return (
    <section id="products" className="relative w-full bg-canvas-light py-24 dark:bg-canvas-dark">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04] dark:opacity-[0.08]"
        style={{ backgroundImage: "url('/assets/logos/NEDA.jpg')" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-pill bg-primary-800 px-3 py-1 text-xs font-medium text-white dark:bg-white/[0.14] dark:text-white/[0.92]">
            Our Products
          </span>
          <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl dark:text-white/[0.92]">
            Building the Future of Finance
          </h2>
          <p className="mx-auto max-w-2xl text-base text-primary-500 dark:text-white/70">
            Comprehensive digital financial solutions designed for the modern economy
          </p>
        </div>

        {/* Product cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product, index) => {
            const logo = productLogos[index];
            const IconComponent = index === 2 ? Code : index === 3 ? Network : null;
            
            return (
              <div
                key={product.title}
                className="group relative overflow-hidden rounded-card-lg border border-primary-200/60 bg-surface-light p-6 transition-all hover:shadow-nav dark:border-white/10 dark:bg-surface-dark dark:hover:shadow-nav-dark"
              >
                <div className="mb-4 flex items-center gap-3">
                  {logo ? (
                    <Image
                      src={logo}
                      alt={product.title}
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded object-cover"
                    />
                  ) : IconComponent ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-primary-800 dark:bg-white">
                      <IconComponent className="h-3.5 w-3.5 text-white dark:text-primary-800" />
                    </div>
                  ) : null}
                  <h3 className="text-lg font-semibold text-primary-800 dark:text-white/[0.92]">
                    {product.title}
                  </h3>
                </div>

              <p className="mb-5 text-sm text-primary-500 dark:text-white/70">
                {product.description}
              </p>

              <ul className="mb-6 space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-primary-600 dark:text-white/60">
                    <span className="block h-1.5 w-1.5 rounded-full bg-primary-400 dark:bg-white/40" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={product.href}
                target={product.href.startsWith('http') ? '_blank' : undefined}
                rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-800 transition-all group-hover:gap-2 dark:text-white/[0.92]"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 gap-6 rounded-card-lg bg-primary-800 p-8 md:grid-cols-4 dark:bg-surface-dark dark:border dark:border-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-1 text-2xl font-semibold text-white dark:text-white/[0.92]">
                {stat.value}
              </div>
              <div className="text-xs text-white/60 dark:text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
