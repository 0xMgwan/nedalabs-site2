'use client';

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-primary-200/60 bg-surface-light py-12 dark:border-white/10 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg">
                <img src="/assets/logos/nedalabs.jpg" alt="NEDA LABS" className="h-9 w-9 object-cover" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-primary-900 dark:text-white">
                NEDA <span className="font-normal">LABS</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-primary-500 dark:text-white/60">
              Building the future of digital finance in Africa with secure, compliant financial infrastructure.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary-800 dark:text-white/[0.92]">
              Products
            </h4>
            <ul className="space-y-2">
              <li><a href="https://www.ntzs.co.tz/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">nTZS Stablecoin</a></li>
              <li><a href="https://www.nedapay.xyz/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">NEDApay</a></li>
              <li><a href="https://nedapayplus.xyz/docs" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">Developer APIs</a></li>
              <li><a href="#jukumu" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">JUKUMU Network</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary-800 dark:text-white/[0.92]">
              Company
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">About Us</a></li>
              <li><a href="#" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">Careers</a></li>
              <li><a href="#" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">Blog</a></li>
              <li><a href="#" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary-800 dark:text-white/[0.92]">
              Contact
            </h4>
            <ul className="space-y-2">
              <li><a href="mailto:support@nedapay.xyz" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">support@nedapay.xyz</a></li>
              <li><a href="#" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">Help Center</a></li>
              <li><a href="#" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-primary-500 transition-opacity hover:opacity-70 dark:text-white/60">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-200/60 pt-6 text-center text-xs text-primary-400 dark:border-white/10 dark:text-white/40">
          © {new Date().getFullYear()} Neda Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
