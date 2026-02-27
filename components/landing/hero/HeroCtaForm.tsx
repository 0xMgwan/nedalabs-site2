'use client';

import { useState } from 'react';

export function HeroCtaForm() {
  const [email, setEmail] = useState('');

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full max-w-md flex-col gap-2.5 sm:flex-row sm:items-center"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your business email"
        className="h-11 flex-1 rounded-pill border border-primary-200/60 bg-surface-light px-4 text-sm text-primary-800 placeholder:text-primary-400 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-400/20 dark:border-white/10 dark:bg-surface-dark dark:text-white/[0.92] dark:placeholder:text-white/50 dark:focus:border-secondary-500 dark:focus:ring-secondary-500/20"
      />
      <button
        type="submit"
        className="h-11 shrink-0 rounded-pill bg-primary-800 px-5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-button-hover active:translate-y-0 active:shadow-none dark:bg-white dark:text-primary-800"
      >
        Get Started
      </button>
    </form>
  );
}
