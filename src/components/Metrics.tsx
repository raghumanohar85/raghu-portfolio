'use client'
import { useEffect, useRef, useState } from 'react'

const METRICS = [
  { value: 9, suffix: '+', label: 'Years at Apple', sublabel: 'Senior IC & Leader' },
  { value: 40, suffix: '%', label: 'ETL Speed Gain', sublabel: 'Pipeline optimization' },
  { value: 50, suffix: '%', label: 'Faster Deploys', sublabel: 'CI/CD automation' },
  { value: 25, suffix: '+', label: 'Engineers Led', sublabel: 'Cross-functional teams' },
  { value: 75, suffix: '%', label: 'Deploy Frequency↑', sublabel: 'Release velocity' },
  { value: 95, suffix: '%', label: 'Project Success Rate', sublabel: 'Delivery excellence' },
]

function Counter({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Metrics() {
  return (
    <section className="border-y border-border bg-surface/40 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="animate-on-scroll text-center group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-3xl lg:text-4xl font-800 gradient-text mb-1">
                <Counter target={m.value} suffix={m.suffix} />
              </div>
              <div className="font-body text-text-primary text-sm font-500 mb-0.5">{m.label}</div>
              <div className="font-mono text-muted text-[10px] tracking-wider uppercase">{m.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
