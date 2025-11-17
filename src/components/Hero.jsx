import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,26,26,0.35) 0%, rgba(255,26,26,0.05) 60%, transparent 70%)' }} />
        <div className="absolute -bottom-48 -right-32 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,26,26,0.35) 0%, rgba(255,26,26,0.05) 60%, transparent 70%)' }} />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.25em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff1a1a] shadow-[0_0_18px_rgba(255,26,26,0.95)]" />
            AI Marketing Studio
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] text-white tracking-[-0.02em]">
            Scale demand with surgical precision
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80">
            We design autonomous, ROI-obsessed growth systems using LLMs, predictive models, and creative automation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#ff1a1a] px-6 py-3 text-white font-medium shadow-[0_0_35px_rgba(255,26,26,0.55)] hover:brightness-110 transition">Book intro call</a>
            <a href="#work" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/90 hover:text-white hover:border-white/60 transition">See our work</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
