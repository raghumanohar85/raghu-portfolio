'use client'
import { useEffect, useRef, useState } from 'react'

const SKILL_CATEGORIES = [
  {
    label: 'Program & DataOps',
    color: '#00d4ff',
    skills: [
      { name: 'Technical Program Management', level: 97 },
      { name: 'DataOps / Pipeline Orchestration', level: 95 },
      { name: 'CI/CD Automation', level: 92 },
      { name: 'Agile / Scrum Leadership', level: 90 },
      { name: 'Cross-functional Team Leadership', level: 95 },
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    color: '#a855f7',
    skills: [
      { name: 'AWS (EMR, S3, EC2, Lambda)', level: 90 },
      { name: 'Google Cloud Platform (GCP)', level: 80 },
      { name: 'Kubernetes / Docker', level: 88 },
      { name: 'Hadoop / Spark / Hive', level: 87 },
      { name: 'Kafka / Cassandra', level: 82 },
    ],
  },
  {
    label: 'Engineering & Dev',
    color: '#f0a500',
    skills: [
      { name: 'Python / PySpark', level: 90 },
      { name: 'Java / J2EE / Spring Boot', level: 88 },
      { name: 'SQL / Shell Scripting', level: 92 },
      { name: 'Jenkins / GitHub Actions', level: 88 },
      { name: 'Gen AI / LLM Integration', level: 72 },
    ],
  },
]

const TOOL_BADGES = [
  'Apache Spark', 'Kubernetes', 'Docker', 'Jenkins', 'AWS EMR', 'Hadoop',
  'Kafka', 'Cassandra', 'Hive', 'Python', 'PySpark', 'Java', 'Spring Boot',
  'Tableau', 'Git/GitHub', 'Terraform', 'Airflow', 'GCP', 'REST APIs',
  'MLOps', 'LLM Frameworks', 'SQL', 'Shell', 'CI/CD',
]

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-text-secondary group-hover:text-text-primary transition-colors">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: started ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 animate-on-scroll">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">04 / Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-700 text-text-primary mb-14 animate-on-scroll">
          Full-stack fluency, <span className="gradient-text">end to end.</span>
        </h2>

        {/* Skill categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-14">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={cat.label} className="animate-on-scroll" style={{ transitionDelay: `${ci * 100}ms` }}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <h3 className="font-display font-700 text-text-primary">{cat.label}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((s, si) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    color={cat.color}
                    delay={si * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool cloud */}
        <div className="animate-on-scroll">
          <h3 className="font-mono text-xs text-muted tracking-widest uppercase mb-5">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {TOOL_BADGES.map((t, i) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 border border-border text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-200 rounded-sm cursor-default"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Certification */}
        <div className="mt-10 animate-on-scroll">
          <div className="inline-flex items-center gap-3 border border-gold/30 bg-gold/5 rounded-lg px-5 py-3">
            <span className="text-gold text-lg">🏅</span>
            <div>
              <div className="font-display font-600 text-text-primary text-sm">Apache Spark with Scala</div>
              <div className="font-mono text-xs text-muted">Hands-On with Big Data — Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
