'use client';

import { ArrowRight, Mail } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="get-started" className="w-full bg-canvas-light py-24 dark:bg-canvas-dark">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl dark:text-white/[0.92]">
          Ready to Transform Your Financial Operations?
        </h2>

        <p className="mb-6 text-base text-primary-500 dark:text-white/70">
          Join thousands of businesses and developers building the future of finance with Neda Labs
        </p>

        <p className="mb-8 text-xs font-medium text-primary-400 dark:text-white/50">
          Explore our products and get started today
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://www.nedapay.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-pill bg-primary-800 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-button-hover active:translate-y-0 dark:bg-white dark:text-primary-800"
          >
            Get Started Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:support@nedapay.xyz"
            className="inline-flex items-center gap-2 rounded-pill border border-primary-200 bg-surface-light px-6 py-3 text-sm font-medium text-primary-800 transition-all hover:border-primary-300 hover:shadow-button-hover dark:border-white/10 dark:bg-surface-dark dark:text-white/[0.92] dark:hover:border-white/20"
          >
            <Mail className="h-4 w-4" />
            Contact Sales
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-primary-500 dark:text-white/50">
          <div className="flex items-center gap-1.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-primary-400 dark:bg-white/40" />
            No setup fees
          </div>
          <div className="flex items-center gap-1.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-primary-400 dark:bg-white/40" />
            Cancel anytime
          </div>
          <div className="flex items-center gap-1.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-primary-400 dark:bg-white/40" />
            24/7 support
          </div>
        </div>
      </div>
    </section>
  );
}
