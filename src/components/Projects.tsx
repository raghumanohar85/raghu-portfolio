const PROJECTS = [
  {
    id: '01',
    name: 'Apple Maps DATA-CI Platform',
    tagline: 'Autonomous pipeline orchestration for global geo-data promotion',
    description:
      'Architected and owned the DATA-CI (Continuous Integration) program for Apple Maps — a fully automated system that manages data quality validation, promotion workflows, and multi-region deployment across 40+ countries. Eliminated manual handoffs and reduced SLA breach incidents to near zero.',
    impact: [
      '40% reduction in ETL processing time',
      'Automated data validation for 40+ country deployments',
      '50% faster deployment cycles via CI/CD integration',
      'Zero-downtime data promotions at petabyte scale',
    ],
    tech: ['Python', 'Jenkins', 'Docker', 'Kubernetes', 'AWS EMR', 'Hadoop'],
    accent: '#00d4ff',
    featured: true,
  },
  {
    id: '02',
    name: 'DataOps Monitoring & Alerting System',
    tagline: 'Real-time observability infrastructure reducing MTTR by 40%',
    description:
      'Designed a centralized monitoring and alerting framework for Apple Maps data infrastructure, integrating cluster health, pipeline throughput, and data recency signals into unified Tableau dashboards. Enabled on-call engineers to detect and resolve incidents 40% faster.',
    impact: [
      '40% improvement in mean time to resolution (MTTR)',
      '25% increase in overall system availability',
      'Real-time alerting across 100+ pipeline stages',
      'Tableau dashboards adopted org-wide',
    ],
    tech: ['Tableau', 'Python', 'Shell', 'Kafka', 'Cassandra', 'Hive'],
    accent: '#a855f7',
    featured: true,
  },
  {
    id: '03',
    name: 'Gen AI Pipeline Integration',
    tagline: 'Bridging LLM capabilities with production data workflows',
    description:
      "Leading the early-stage integration of Apple's internal LLM frameworks and foundation models into Maps data pipelines. Designing evaluation frameworks, data preparation pipelines, and feedback loops that enable continuous model improvement in a production DataOps context.",
    impact: [
      'Production-grade LLM evaluation pipeline',
      'Integrated with existing CI/CD infrastructure',
      'Foundation for automated data quality assessment',
      'Reduced model iteration cycles from days to hours',
    ],
    tech: ['Apple LLM Frameworks', 'Python', 'PySpark', 'AWS', 'MLOps', 'Kubernetes'],
    accent: '#f0a500',
    featured: true,
  },
  {
    id: '04',
    name: 'Apple OGC & TeamConnect Portals',
    tagline: 'Enterprise-grade Java/J2EE applications serving thousands of Apple employees',
    description:
      'As Technology Lead at Infosys, architected and delivered two mission-critical Apple internal tools: the OGC Portal and TeamConnect. Led a team of 25+ engineers across onsite-offshore coordination, delivering both projects on schedule with Spring Boot, AngularJS, and RESTful APIs.',
    impact: [
      'Delivered on-time to 3 major enterprise clients',
      'Led 25+ engineer distributed team',
      'Implemented OAuth & Spring Security for zero-breach auth',
      'Achieved 99%+ uptime across both platforms',
    ],
    tech: ['Java', 'Spring Boot', 'AngularJS', 'RESTful APIs', 'OAuth', 'Hibernate'],
    accent: '#22d3ee',
    featured: false,
  },
]

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 animate-on-scroll">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">02 / Featured Work</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-700 text-text-primary mb-4 animate-on-scroll">
          Infrastructure that moves <span className="gradient-text">the world.</span>
        </h2>
        <p className="font-body text-text-secondary max-w-xl mb-14 animate-on-scroll stagger-1">
          Production-scale systems built and led at Apple — measured in latency reductions, availability gains, and engineering velocity.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {featured.map((p, i) => (
            <div
              key={p.id}
              className="animate-on-scroll card-hover border border-border bg-surface rounded-xl overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-muted">{p.id}</span>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-full border"
                    style={{ color: p.accent, borderColor: `${p.accent}33`, background: `${p.accent}0d` }}
                  >
                    FEATURED
                  </span>
                </div>
                <h3 className="font-display text-lg font-700 text-text-primary mb-1.5">{p.name}</h3>
                <p className="font-mono text-xs mb-4" style={{ color: p.accent }}>{p.tagline}</p>
                <p className="font-body text-text-secondary text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.impact.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span style={{ color: p.accent }} className="mt-0.5 flex-shrink-0">▸</span>
                      <span className="text-text-secondary font-body">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-muted border border-border px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-1 gap-4">
          {others.map((p, i) => (
            <div
              key={p.id}
              className="animate-on-scroll card-hover border border-border bg-surface/60 rounded-lg p-5 flex flex-col md:flex-row gap-5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="md:w-48 flex-shrink-0">
                <span className="font-mono text-xs text-muted">{p.id}</span>
                <h3 className="font-display font-700 text-text-primary mt-1 mb-1">{p.name}</h3>
                <p className="font-mono text-xs" style={{ color: p.accent }}>{p.tagline}</p>
              </div>
              <div className="flex-1">
                <p className="font-body text-text-secondary text-sm leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-muted border border-border px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
