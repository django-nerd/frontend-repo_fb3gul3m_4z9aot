function Work() {
  const logos = ['Acme', 'Nova', 'Origin', 'Pulse', 'Shift', 'Vector']
  return (
    <section id="work" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">Selected work</h2>
          <p className="text-white/70 max-w-xl">Trusted by category creators and ambitious upstarts shipping at velocity.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-[4/3] bg-gradient-to-br from-black to-neutral-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-lg bg-[rgba(255,26,26,0.15)] ring-1 ring-[rgba(255,26,26,0.35)]" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">Campaign {i + 1}</h3>
                  <span className="text-white/60 text-sm">{logos[i % logos.length]}</span>
                </div>
                <p className="mt-1 text-white/70 text-sm">Performance creative and autonomous media buying delivered a 4.2x ROAS.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
