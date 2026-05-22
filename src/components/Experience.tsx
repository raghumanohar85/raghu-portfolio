const EXPERIENCES = [
  {
    company: 'Apple',
    logo: '⌘',
    title: 'Technical Program Manager — Data Engineering',
    period: 'Sep 2016 – Present',
    duration: '9+ Years',
    location: 'Cupertino, CA',
    highlights: [
      'Own DATA-CI program for Apple Maps: automated data pipelines ensuring accuracy and quality across 40+ countries at petabyte scale',
      'Lead 10+ cross-functional engineers, analysts, and QA teams; drive Agile delivery with 95% on-time project success rate',
      'Reduced ETL processing time by 40% and deployment time by 50% through Python/Jenkins/K8s automation',
      'Improved system MTTR by 40% and availability by 25% via centralized monitoring and alerting infrastructure',
      'Pioneering Gen AI integration with Apple\'s LLM Frameworks, building evaluation pipelines for foundation model deployment',
      'Developed Tableau dashboards for real-time data recency, build analytics, and SLA tracking',
    ],
    color: '#00d4ff',
  },
  {
    company: 'Infosys',
    logo: 'ℹ',
    title: 'Technology Lead — Senior Full Stack Engineer',
    period: 'Apr 2013 – Sep 2016',
    duration: '3.5 Years',
    location: 'Hyderabad, India',
    highlights: [
      'Led 25+ engineer team across Apple (OGC Portal, TeamConnect), Wells Fargo Home Mortgage, and Citigroup Risk projects',
      'Architected RESTful and SOAP web services using Spring Boot, Hibernate, and Java/J2EE across client engagements',
      'Implemented OAuth2 / Spring Security authentication for enterprise-grade access control',
      'Built reusable UI component libraries with AngularJS, NodeJS, and ExtJS; championed TDD and BDD practices',
      'Managed onsite-offshore coordination, task estimation, and client stakeholder communication',
    ],
    color: '#a855f7',
  },
  {
    company: 'Polaris Financial Technology',
    logo: '◈',
    title: 'Senior Software Engineer — Full Stack',
    period: 'Sep 2007 – Apr 2013',
    duration: '5.5 Years',
    location: 'Hyderabad & Singapore',
    highlights: [
      'Full-stack developer serving Citigroup, RBS, and JP Morgan on enterprise financial applications',
      'Built and maintained high-availability systems using Java/J2EE, Spring MVC, and Oracle databases',
      'Developed Singapore-based financial processing modules with strict regulatory compliance requirements',
      'Contributed to performance tuning initiatives that reduced page load time by 35% across client portals',
    ],
    color: '#22d3ee',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 animate-on-scroll">
        <span className="font-mono text-accent text-xs tracking-widest uppercase">03 / Experience</span>
        <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
      </div>
      <h2 className="font-display text-4xl lg:text-5xl font-700 text-text-primary mb-14 animate-on-scroll">
        17 years. <span className="gradient-text">Compounding impact.</span>
      </h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden lg:block absolute left-[180px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.company} className="animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="lg:flex gap-8">
                {/* Left: company info */}
                <div className="lg:w-[180px] flex-shrink-0 flex lg:flex-col items-start gap-3 mb-4 lg:mb-0 lg:text-right lg:items-end pr-8 relative">
                  <div
                    className="hidden lg:block absolute right-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 z-10"
                    style={{ borderColor: exp.color, background: '#080c14' }}
                  />
                  <div
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-xl font-700 border flex-shrink-0"
                    style={{ borderColor: `${exp.color}33`, background: `${exp.color}10`, color: exp.color }}
                  >
                    {exp.logo}
                  </div>
                  <div>
                    <div className="font-display font-700 text-text-primary">{exp.company}</div>
                    <div className="font-mono text-xs text-muted">{exp.period}</div>
                    <div className="font-mono text-xs" style={{ color: exp.color }}>{exp.duration}</div>
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1 border border-border bg-surface/60 rounded-xl p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-700 text-text-primary text-lg">{exp.title}</h3>
                      <span className="font-mono text-xs text-muted">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <span style={{ color: exp.color }} className="mt-1 flex-shrink-0 text-xs">▸</span>
                        <span className="text-text-secondary font-body leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
