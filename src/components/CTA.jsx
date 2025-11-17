function CTA() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,26,26,0.5) 0%, transparent 70%)' }} />
          </div>
          <h3 className="text-white text-3xl md:text-4xl font-semibold">Plug your growth into AI</h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">Tell us your targets. We’ll architect an autonomous system that spins up creative, runs experiments, and scales winners—on repeat.</p>
          <form className="mt-8 grid sm:grid-cols-6 gap-3">
            <input className="sm:col-span-3 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff1a1a]/60" placeholder="Work email" />
            <input className="sm:col-span-3 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff1a1a]/60" placeholder="Company" />
            <input className="sm:col-span-4 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff1a1a]/60" placeholder="What are you trying to achieve?" />
            <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-[#ff1a1a] px-6 py-3 text-white font-medium shadow-[0_0_35px_rgba(255,26,26,0.55)] hover:brightness-110 transition">Request proposal</button>
          </form>
          <p className="mt-4 text-white/50 text-xs">By submitting you agree to our privacy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
