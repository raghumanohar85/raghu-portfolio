export default function About() {
  const pillars = [
    {
      icon: '⬡',
      title: 'Pipeline Architecture',
      desc: 'Designed and owns data pipeline infrastructure for Apple Maps — processing petabyte-scale geo-data with 99.9% uptime across 40+ countries.',
    },
    {
      icon: '◈',
      title: 'Gen AI Integration',
      desc: 'Driving integration of Apple\'s LLM Frameworks and foundation models into production data workflows, bridging traditional DataOps with next-gen AI capabilities.',
    },
    {
      icon: '⬟',
      title: 'Engineering Leadership',
      desc: 'Built and mentored cross-functional teams of 25+ engineers, QA, and analysts. Champion of Agile delivery with a 95% on-time project success rate.',
    },
  ]

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
        <div>
          <div className="flex items-center gap-3 mb-6 animate-on-scroll">
            <span className="font-mono text-accent text-xs tracking-widest uppercase">01 / About</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-700 text-text-primary leading-tight mb-6 animate-on-scroll">
            Where data infrastructure<br />
            <span className="gradient-text">meets product impact.</span>
          </h2>

          <div className="space-y-4 text-text-secondary leading-relaxed animate-on-scroll stagger-1">
            <p>
              At Apple, I don't just manage programs — I architect the data backbone that powers navigation decisions for hundreds of millions of users worldwide. My work sits at the intersection of engineering rigor and business strategy.
            </p>
            <p>
              Starting as a full-stack developer across Citigroup, Wells Fargo, and JP Morgan, I built deep technical fluency before transitioning into technical program leadership. That dual lens — engineer and strategist — is what sets my approach apart.
            </p>
            <p>
              I'm now expanding into <span className="text-accent font-500">Generative AI</span>, building on Apple's internal LLM frameworks to push data operations into the era of intelligent automation.
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-8 animate-on-scroll stagger-2">
            {['AWS EMR', 'Apache Spark', 'Kubernetes', 'Python', 'Jenkins', 'Kafka', 'Gen AI', 'Tableau'].map((t) => (
              <span key={t} className="font-mono text-xs text-accent/80 border border-accent/20 bg-accent/5 px-3 py-1 rounded-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: pillars */}
        <div className="space-y-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="animate-on-scroll card-hover border border-border bg-surface/60 rounded-lg p-5 flex gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl">
                {p.icon}
              </div>
              <div>
                <h3 className="font-display font-600 text-text-primary mb-1.5">{p.title}</h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
