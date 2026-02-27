'use client';

import { Code, Terminal, BookOpen, Zap, CheckCircle2 } from 'lucide-react';
import { developerFeatures, codeSnippet } from '@/data/config/heroData';

export function DevelopersSection() {
  return (
    <section id="developers" className="w-full bg-surface-light py-24 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-pill bg-primary-800 px-3 py-1 text-xs font-medium text-white dark:bg-white/[0.14] dark:text-white/[0.92]">
              <Code className="h-3.5 w-3.5" />
              For Developers
            </div>

            <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl dark:text-white/[0.92]">
              Build with Powerful APIs
            </h2>

            <p className="mb-8 text-base leading-relaxed text-primary-500 dark:text-white/70">
              Integrate global payout infrastructure into your application with our comprehensive API suite.
              Built for developers, by developers.
            </p>

            <div className="mb-8 space-y-3">
              {developerFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-800 dark:text-white/70" />
                  <span className="text-sm text-primary-600 dark:text-white/70">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://nedapayplus.xyz/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-primary-800 px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-button-hover active:translate-y-0 dark:bg-white dark:text-primary-800"
              >
                <BookOpen className="h-4 w-4" />
                View Documentation
              </a>
              <a
                href="https://www.nedapay.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill border border-primary-200 bg-surface-light px-5 py-2.5 text-sm font-medium text-primary-800 transition-all hover:border-primary-300 hover:shadow-button-hover dark:border-white/10 dark:bg-surface-dark dark:text-white/[0.92] dark:hover:border-white/20"
              >
                <Zap className="h-4 w-4" />
                Get Started
              </a>
            </div>
          </div>

          {/* Right code block */}
          <div className="rounded-card-lg border border-primary-200/60 bg-canvas-light p-6 shadow-nav dark:border-white/10 dark:bg-canvas-dark dark:shadow-nav-dark">
            <div className="mb-4 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-primary-500 dark:text-white/60" />
              <span className="font-mono text-xs text-primary-500 dark:text-white/60">
                Quick Start Example
              </span>
            </div>

            <pre className="overflow-x-auto text-sm">
              <code className="font-mono text-secondary-600 dark:text-secondary-300">
                {codeSnippet}
              </code>
            </pre>

            <div className="mt-5 flex items-center justify-between border-t border-primary-200/60 pt-4 text-xs dark:border-white/10">
              <span className="text-primary-500 dark:text-white/60">Response time</span>
              <span className="font-semibold text-menuIcon-green">~150ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
