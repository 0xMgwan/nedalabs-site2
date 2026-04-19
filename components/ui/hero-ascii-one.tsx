'use client';

import { useEffect } from 'react';
import { FloatingMediaCard } from '@/components/landing/hero/FloatingMediaCard';

export function HeroAsciiOne() {
  useEffect(() => {
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] { position: relative !important; overflow: hidden !important; }
      [data-us-project] canvas { clip-path: inset(0 0 10% 0) !important; }
      [data-us-project] * { pointer-events: none !important; }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important; visibility: hidden !important; opacity: 0 !important;
        position: absolute !important; left: -9999px !important; top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    const hideBranding = () => {
      document.querySelectorAll('[data-us-project]').forEach(container => {
        container.querySelectorAll('*').forEach((el: Element) => {
          const htmlEl = el as HTMLElement;
          const text = (htmlEl.textContent || '').toLowerCase();
          const title = (htmlEl.getAttribute('title') || '').toLowerCase();
          const href = (htmlEl.getAttribute('href') || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicorn') || title.includes('unicorn') || href.includes('unicorn.studio')) {
            htmlEl.style.display = 'none';
            try { htmlEl.remove(); } catch(e) {}
          }
        });
      });
    };

    hideBranding();
    const interval = setInterval(hideBranding, 100);
    setTimeout(hideBranding, 500);
    setTimeout(hideBranding, 2000);

    return () => {
      clearInterval(interval);
      try { document.head.removeChild(embedScript); } catch(e) {}
      try { document.head.removeChild(style); } catch(e) {}
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-black" style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
      {/* Background Animation - dark mode only, desktop */}
      <div className="absolute inset-0 w-full h-full hidden lg:dark:block">
        <div
          data-us-project="OMzqyUv6M3kSnv0JeAtC"
          style={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 3.5rem)' }}
        />
      </div>

      {/* Light mode background - subtle grid pattern */}
      <div className="absolute inset-0 w-full h-full block dark:hidden bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Stars - mobile fallback dark mode */}
      <div className="absolute inset-0 hidden dark:block lg:hidden" style={{
        backgroundImage: 'radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 60% 70%, white, transparent), radial-gradient(1px 1px at 50% 50%, white, transparent), radial-gradient(1px 1px at 80% 10%, white, transparent), radial-gradient(1px 1px at 90% 60%, white, transparent), radial-gradient(1px 1px at 33% 80%, white, transparent)',
        backgroundSize: '200% 200%, 180% 180%, 250% 250%, 220% 220%, 190% 190%, 240% 240%',
        opacity: 0.3
      }} />

      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-black/20 dark:border-white/20 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-black/20 dark:border-white/20 z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-black/20 dark:border-white/20 z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-black/20 dark:border-white/20 z-20 pointer-events-none" />

      {/* Two-column content area */}
      <div className="relative z-10 flex items-center" style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">

          {/* Left column: FloatingMediaCard carousel — hidden on mobile (shown below) */}
          <div className="hidden lg:flex items-center justify-center px-8 lg:px-16 py-16">
            <div className="w-full max-w-lg">
              <FloatingMediaCard />
            </div>
          </div>

          {/* Right column: NEDA branding content */}
          <div className="w-full px-6 sm:px-8 lg:px-16 py-12 lg:py-0 flex items-center justify-center lg:justify-start">
            <div className="max-w-lg mx-auto lg:mx-0 w-full">

              {/* Top decorative line */}
              <div className="flex items-center gap-2 mb-4 opacity-40">
                <div className="w-6 h-px bg-black dark:bg-white" />
                <span className="text-black dark:text-white text-[10px] font-mono">&#8734;</span>
                <div className="flex-1 h-px bg-black dark:bg-white" />
              </div>

              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="border border-black/30 dark:border-white/30 px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.2em] text-black/60 dark:text-white/60">BOT-REGULATED</span>
                <a href="https://www.ntzs.co.tz/" target="_blank" rel="noopener noreferrer"
                  className="border border-black/10 dark:border-white/10 px-2 py-0.5 text-[9px] font-mono text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70 transition-colors">
                  nTZS &rarr; Tanzania&apos;s First Regulated Stablecoin
                </a>
              </div>

              {/* Title */}
              <h1 className="font-mono font-bold text-black dark:text-white text-2xl sm:text-3xl lg:text-5xl leading-tight tracking-tight mb-4">
                BUILDING THE<br />FUTURE OF<br />FINANCE IN AFRICA
              </h1>

              {/* Dots pattern */}
              <div className="flex gap-1 mb-4 opacity-30">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="w-0.5 h-0.5 bg-black dark:bg-white rounded-full" />
                ))}
              </div>

              {/* Description */}
              <p className="font-mono text-sm text-black/60 dark:text-white/60 leading-relaxed mb-7">
                Secure, compliant digital financial infrastructure. Stablecoins, instant payments, and developer APIs powering the modern economy across Africa.
              </p>

              {/* Stats row */}
              <div className="flex gap-8 mb-7">
                {[['50K+', 'ACTIVE USERS'], ['15+', 'COUNTRIES'], ['$100M+', 'VOLUME']].map(([val, lbl]) => (
                  <div key={lbl} className="flex flex-col gap-0.5">
                    <span className="font-mono font-bold text-black dark:text-white text-lg">{val}</span>
                    <span className="font-mono text-[9px] text-black/40 dark:text-white/40 tracking-widest">{lbl}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://www.nedapay.xyz/" target="_blank" rel="noopener noreferrer"
                  className="relative border border-black dark:border-white font-mono text-xs uppercase tracking-widest px-6 py-3 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 text-center group">
                  <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  GET STARTED
                </a>
                <a href="https://nedapayplus.xyz/docs" target="_blank" rel="noopener noreferrer"
                  className="border border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-widest px-6 py-3 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200 text-center">
                  VIEW DOCUMENTATION
                </a>
              </div>

              {/* Bottom notation */}
              <div className="flex items-center gap-2 mt-6 opacity-30">
                <span className="text-black dark:text-white text-[9px] font-mono">&#8734;</span>
                <div className="flex-1 h-px bg-black dark:bg-white" />
                <span className="text-black dark:text-white text-[9px] font-mono">NEDALABS.PROTOCOL</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Mobile: FloatingMediaCard below the text content */}
      <div className="relative z-10 lg:hidden pb-16 px-6 sm:px-8">
        <FloatingMediaCard />
      </div>

      {/* Bottom technical bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[9px] font-mono text-black/30 dark:text-white/30">
            <span>SYSTEM.ACTIVE</span>
            <span>V1.0.0</span>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-[9px] font-mono text-black/30 dark:text-white/30">
            <span>LAT: -6.7924&deg;</span>
            <div className="w-1 h-1 bg-black/30 dark:bg-white/30 rounded-full" />
            <span>LONG: 39.2083&deg;</span>
            <div className="w-1 h-1 bg-black/30 dark:bg-white/30 rounded-full" />
            <span>DAR ES SALAAM</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-black/60 dark:bg-white/60 rounded-full animate-pulse" />
            <div className="w-1 h-1 bg-black/40 dark:bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
