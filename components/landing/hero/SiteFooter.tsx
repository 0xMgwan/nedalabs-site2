'use client';

export function SiteFooter() {
  return (
    <footer className="w-full bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
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
            <h4 className="mb-3 text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40">// Products</h4>
            <ul className="space-y-2">
              {[
                { label: 'nTZS Stablecoin', href: 'https://www.ntzs.co.tz/' },
                { label: 'NEDApay', href: 'https://www.nedapay.xyz/' },
                { label: 'Developer APIs', href: 'https://nedapayplus.xyz/docs' },
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
            <h4 className="mb-3 text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40">// Company</h4>
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
            <h4 className="mb-3 text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 dark:text-white/40">// Contact</h4>
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

        <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
          <span className="font-mono text-[9px] text-black/20 dark:text-white/20 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} NEDA LABS. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-black/30 dark:bg-white/30 rounded-full animate-pulse" />
            <span className="font-mono text-[9px] text-black/20 dark:text-white/20 uppercase tracking-widest">SYSTEM.ACTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
