'use client'

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#1A2332] text-white py-16 px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h4 className="mb-6 text-lg text-white font-semibold">Balasana</h4>
          <p className="text-white/70 text-base leading-relaxed">
            A wellness movement built on the harmony of Mind, Body, and Spirit. 
            Starting with science-backed nootropics, building a complete lifestyle ecosystem.
          </p>
        </div>
        
        <div>
          <h4 className="mb-6 text-lg text-white font-semibold">Company</h4>
          <ul className="space-y-3">
            <li><button onClick={() => scrollToSection('philosophy')} className="text-white/70 hover:text-[#2A9D8F] transition-colors text-left">Our Philosophy</button></li>
            <li><button onClick={() => scrollToSection('story')} className="text-white/70 hover:text-[#2A9D8F] transition-colors text-left">Founder Story</button></li>
            <li><button onClick={() => scrollToSection('vision')} className="text-white/70 hover:text-[#2A9D8F] transition-colors text-left">Vision & Roadmap</button></li>
            <li><button onClick={() => scrollToSection('standards')} className="text-white/70 hover:text-[#2A9D8F] transition-colors text-left">Our Standards</button></li>
            <li><a href="mailto:hello@balasana.com" className="text-white/70 hover:text-[#2A9D8F] transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="mb-6 text-lg text-white font-semibold">Products</h4>
          <ul className="space-y-3">
            <li><a href="https://balance-eq.com" target="_blank" className="text-white/70 hover:text-[#2A9D8F] transition-colors">BalanceEQ Nootropics</a></li>
            <li><a href="https://balance-eq.com/evidence" target="_blank" className="text-white/70 hover:text-[#2A9D8F] transition-colors">Evidence Library</a></li>
            <li><a href="https://balance-eq.com/coas" target="_blank" className="text-white/70 hover:text-[#2A9D8F] transition-colors">Certificates of Analysis</a></li>
            <li><a href="https://balance-eq.com/transparency" target="_blank" className="text-white/70 hover:text-[#2A9D8F] transition-colors">Full Transparency</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="mb-6 text-lg text-white font-semibold">Legal</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white/70 hover:text-[#2A9D8F] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-white/70 hover:text-[#2A9D8F] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-white/70 hover:text-[#2A9D8F] transition-colors">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-white/60 text-sm">
          © 2025 Balasana LLC. All rights reserved. • Sanskrit for "child's pose" — finding equilibrium.
        </p>
      </div>
    </footer>
  )
}