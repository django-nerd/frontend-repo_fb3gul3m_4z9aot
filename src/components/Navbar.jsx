import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-lg px-5 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-[rgba(255,26,26,0.15)] ring-1 ring-[rgba(255,26,26,0.35)] shadow-[0_0_30px_rgba(255,26,26,0.25)]" />
            <span className="text-white text-sm tracking-[0.25em] font-semibold">RED.AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-white/70 hover:text-white transition">Services</a>
            <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
            <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-[#ff1a1a] px-4 py-2 text-white font-medium shadow-[0_0_25px_rgba(255,26,26,0.45)] hover:brightness-110 transition">Get a quote</a>
          </nav>
          <button className="md:hidden text-white/80" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
