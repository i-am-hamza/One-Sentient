import { NAV_LINKS } from '@/lib/content'

const PRODUCT_LINKS = [
  { label: 'Finora',      href: '#products' },
  { label: 'Apex',        href: '#products' },
  { label: 'Lucent Labs', href: '#products' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-void py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-border">
          {/* Brand */}
          <div>
            <div className="font-syne font-bold text-lg text-text uppercase mb-2">
              One Sentient
            </div>
            <p className="font-dm text-sm text-muted mb-1">
              We Build What the Future Runs On.
            </p>
            <p className="font-dm text-xs text-muted/50">
              A product of Lucent Labs
            </p>
          </div>

          {/* Products */}
          <div>
            <div className="font-dm text-xs uppercase tracking-wide text-muted mb-4">
              Products
            </div>
            <div className="flex flex-col gap-2">
              {PRODUCT_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-dm text-sm text-muted hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="font-dm text-xs uppercase tracking-wide text-muted mb-4">
              Company
            </div>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-dm text-sm text-muted hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-dm text-xs text-muted">
            © 2026 One Sentient. All rights reserved.
          </p>
          <p className="font-dm text-xs text-muted">
            Built with care by One Sentient
          </p>
        </div>
      </div>
    </footer>
  )
}
