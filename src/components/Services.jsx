function Services() {
  const items = [
    {
      title: 'Pipeline Automation',
      desc: 'Always-on lead engines powered by agents that qualify, route, and nurture in minutes, not days.',
    },
    {
      title: 'Creative Intelligence',
      desc: 'Generate, test, and iterate high-converting assets with model-driven messaging and visuals.',
    },
    {
      title: 'Predictive Targeting',
      desc: 'Segment and prioritize with precision using lookalike scoring and LTV-informed bidding.',
    },
  ]

  return (
    <section id="services" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">Capabilities</h2>
          <p className="text-white/70 max-w-xl">A tight stack of systems engineered for measurable growth. Built to integrate, designed to compound.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-40 w-40 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition" style={{ background: 'radial-gradient(circle, rgba(255,26,26,0.45) 0%, transparent 70%)' }} />
              <div className="h-10 w-10 rounded-md bg-[rgba(255,26,26,0.15)] ring-1 ring-[rgba(255,26,26,0.35)] mb-4" />
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.desc}</p>
              <a href="#contact" className="mt-4 inline-flex text-[#ff1a1a] font-medium">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
