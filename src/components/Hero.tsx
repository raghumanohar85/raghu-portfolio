'use client'
import { useEffect, useRef } from 'react'

const PIPELINE_STAGES = ['INGEST', 'TRANSFORM', 'VALIDATE', 'PROMOTE', 'MONITOR']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Particle system
    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.05,
        size: Math.random() * 1.5 + 0.5,
      })
    }

    let frame = 0
    let rafId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Connect nearby particles
        particles.forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`
        ctx.fill()
      })

      rafId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(0,148,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 border border-accent/20 bg-accent/5 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
              <span className="font-mono text-xs text-accent tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl lg:text-7xl font-800 leading-[1.0] mb-4 animate-on-scroll">
              <span className="text-text-primary">Raghu</span>
              <br />
              <span className="gradient-text">Manohar</span>
              <br />
              <span className="text-text-secondary text-4xl lg:text-5xl font-600">Sakuru</span>
            </h1>

            {/* Tagline */}
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-6 animate-on-scroll stagger-1">
              Senior TPM · DataOps Architect · Gen AI Builder
            </p>

            <p className="font-body text-text-secondary text-lg leading-relaxed max-w-lg mb-10 animate-on-scroll stagger-2">
              I turn raw data chaos into reliable, automated pipelines — and lead the engineering teams that keep them running at Apple scale.
              <span className="text-accent"> 9+ years</span> shipping infrastructure that processes billions of data points for Apple Maps.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-on-scroll stagger-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-accent text-bg font-display font-700 text-sm px-6 py-3 rounded-sm hover:bg-accent-dim transition-all duration-200"
              >
                View Featured Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-text-secondary font-mono text-xs px-6 py-3 rounded-sm hover:border-accent/40 hover:text-accent transition-all duration-200 tracking-wider"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 mt-10 animate-on-scroll stagger-4">
              <a
                href="https://www.linkedin.com/in/raghumanohar-sakuru-29521111"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-wider flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <span className="w-px h-4 bg-border" />
              <span className="font-mono text-xs text-muted">Sunnyvale, CA</span>
              <span className="w-px h-4 bg-border" />
              <a href="mailto:raghu.manohar@gmail.com" className="font-mono text-xs text-muted hover:text-accent transition-colors">
                raghu.manohar@gmail.com
              </a>
            </div>
          </div>

          {/* Pipeline visualization */}
          <div className="hidden lg:flex flex-col items-center justify-center animate-on-scroll stagger-2">
            <div className="relative w-full max-w-sm">
              {/* Pipeline stages */}
              <div className="border border-border bg-surface/60 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="font-mono text-xs text-muted ml-2">data-pipeline.yaml</span>
                </div>

                <div className="space-y-3">
                  {PIPELINE_STAGES.map((stage, i) => (
                    <div key={stage} className="flex items-center gap-3" style={{ animationDelay: `${i * 0.3}s` }}>
                      {/* Connector */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-3 h-3 rounded-full border-2 border-accent bg-accent/20 animate-pulse-slow" style={{ animationDelay: `${i * 0.5}s` }} />
                        {i < PIPELINE_STAGES.length - 1 && (
                          <div className="w-px h-6 bg-gradient-to-b from-accent/40 to-accent/10" />
                        )}
                      </div>
                      {/* Stage card */}
                      <div className="flex-1 border border-border/60 bg-bg/60 rounded px-3 py-2 group hover:border-accent/30 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs text-accent tracking-widest">{stage}</span>
                          <span className="font-mono text-xs text-green-400">✓ OK</span>
                        </div>
                        <div className="mt-1.5 h-1 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full skill-bar-fill"
                            style={{ width: `${85 + i * 3}%`, animationDelay: `${0.5 + i * 0.2}s` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-6 pt-4 border-t border-border grid grid-cols-3 gap-3 text-center">
                  {[
                    { value: '40%', label: 'Faster ETL' },
                    { value: '99.9%', label: 'Uptime' },
                    { value: '75%', label: 'Deploy ↑' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-lg font-700 text-accent">{s.value}</div>
                      <div className="font-mono text-[9px] text-muted tracking-wider uppercase">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute -top-3 -right-3 bg-gold/10 border border-gold/30 rounded px-2 py-1 float-anim">
                <span className="font-mono text-xs text-gold">Gen AI ✦</span>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-purple-500/10 border border-purple-500/30 rounded px-2 py-1 float-anim" style={{ animationDelay: '1.5s' }}>
                <span className="font-mono text-xs text-purple-400">Apple Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scan">
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
      </div>
    </section>
  )
}
