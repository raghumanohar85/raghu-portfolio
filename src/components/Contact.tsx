export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-4 animate-on-scroll">
        <span className="font-mono text-accent text-xs tracking-widest uppercase">05 / Contact</span>
        <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-text-primary mb-6 animate-on-scroll">
            Let's build something<br />
            <span className="gradient-text">production-grade.</span>
          </h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed mb-8 animate-on-scroll stagger-1">
            Whether you're looking for a Senior TPM to lead complex data programs, a DataOps architect to modernize your pipeline infrastructure, or a technical leader to drive Gen AI initiatives — let's talk.
          </p>

          <div className="space-y-4 animate-on-scroll stagger-2">
            {[
              { icon: '✉', label: 'Email', value: 'raghu.manohar@gmail.com', href: 'mailto:raghu.manohar@gmail.com' },
              { icon: '📍', label: 'Location', value: 'Sunnyvale, California', href: null },
              { icon: '📞', label: 'Phone', value: '+1 (669) 268-9602', href: 'tel:+16692689602' },
              { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/raghumanohar-sakuru-29521111', href: 'https://www.linkedin.com/in/raghumanohar-sakuru-29521111' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-lg group-hover:border-accent/30 transition-colors">
                  {c.icon}
                </div>
                <div>
                  <div className="font-mono text-xs text-muted">{c.label}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="font-body text-text-secondary hover:text-accent transition-colors text-sm"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-body text-text-secondary text-sm">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: CTA card */}
        <div className="animate-on-scroll stagger-2">
          <div className="border border-border bg-surface rounded-xl p-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.06)_0%,transparent_70%)] pointer-events-none" />

            <div className="font-mono text-xs text-muted mb-1 tracking-wider">Current status</div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-display font-600 text-text-primary">Open to senior opportunities</span>
            </div>

            <div className="space-y-3 mb-8">
              {[
                'Senior / Staff Technical Program Manager',
                'Director of DataOps / Data Engineering',
                'Principal Engineer — MLOps / Platform',
                'Head of Data Infrastructure',
              ].map((role) => (
                <div key={role} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="text-accent text-xs">▸</span>
                  {role}
                </div>
              ))}
            </div>

            <a
              href="mailto:raghu.manohar@gmail.com"
              className="w-full flex items-center justify-center gap-2 bg-accent text-bg font-display font-700 text-sm px-6 py-3.5 rounded-lg hover:bg-accent-dim transition-all duration-200 group"
            >
              Send a Message
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/raghumanohar-sakuru-29521111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3 flex items-center justify-center gap-2 border border-border text-text-secondary font-mono text-xs px-6 py-3 rounded-lg hover:border-accent/40 hover:text-accent transition-all duration-200"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
