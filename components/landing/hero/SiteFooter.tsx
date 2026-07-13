'use client';

export function SiteFooter() {
  return (
    <footer className="w-full bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3">
              <span className="font-mono text-lg font-bold tracking-widest text-black dark:text-white">
                NEDA<span className="font-light opacity-40"> LABS</span>
              </span>
            </div>
            <p className="font-mono text-[10px] text-black/40 dark:text-white/40 leading-relaxed">
              Building the future of digital finance in Africa with secure, compliant financial infrastructure.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-3 text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{"// Products"}</h4>
            <ul className="space-y-2">
              {[
                { label: 'nTZS Stablecoin', href: 'https://www.ntzs.co.tz/' },
                { label: 'NEDApay', href: 'https://www.nedapay.xyz/' },
                { label: 'Developer APIs', href: 'https://www.ntzs.co.tz/developers' },
                { label: 'WashikaDAU', href: 'https://www.washikadau.com' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[10px] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{"// Company"}</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-mono text-[10px] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{"// Contact"}</h4>
            <ul className="space-y-2">
              {[
                { label: 'support@nedapay.xyz', href: 'mailto:support@nedapay.xyz' },
                { label: 'Help Center', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-mono text-[10px] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[9px] text-black/20 dark:text-white/20 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} NEDA LABS. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/NedaLabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow NEDA LABS on X"
                className="text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/nedalabs/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow NEDA LABS on LinkedIn"
                className="text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-black/30 dark:bg-white/30 rounded-full animate-pulse" />
              <span className="font-mono text-[9px] text-black/20 dark:text-white/20 uppercase tracking-widest">SYSTEM.ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
