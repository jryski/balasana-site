'use client'

export default function Products() {
  const openModal = () => {
    alert('Visit balance-eq.com to get launch updates!')
  }

  return (
    <section className="py-32 px-8 bg-[#1A2332]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold mb-8 text-center text-[#FDFBF7]">
          How We're Starting
        </h2>
        <p className="text-center text-[#FDFBF7]/80 text-[clamp(1.1rem,2.5vw,1.35rem)] mb-16 max-w-[800px] mx-auto leading-relaxed">
          BalanceEQ is our first product line—circadian-optimized nootropics that work with your natural rhythms. Because true cognitive support isn't one-size-fits-all. It's morning and evening. Focus and recovery. Peak performance and restorative rest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-12">
          <div className="bg-[#2C3E50] border border-[#FDFBF7]/10 rounded-2xl p-12 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(42,157,143,0.2)] hover:border-[#2A9D8F]">
            <div className="text-6xl mb-6">☀️</div>
            <h3 className="text-3xl font-semibold mb-4 text-[#FDFBF7]">EQ:Focus</h3>
            <p className="text-[#FDFBF7]/80 text-lg mb-6 leading-relaxed">
              Sharpen attention without stimulants. Built for deep work, fast context-switching, and calm execution. Clinical doses of Citicoline, Lion's Mane, Rhodiola, and more.
            </p>
            <span className="inline-block bg-[#2A9D8F]/20 text-[#2A9D8F] px-4 py-2 rounded-full text-sm font-semibold">
              Launching April 6, 2026
            </span>
          </div>

          <div className="bg-[#2C3E50] border border-[#FDFBF7]/10 rounded-2xl p-12 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(42,157,143,0.2)] hover:border-[#2A9D8F]">
            <div className="text-6xl mb-6">🌙</div>
            <h3 className="text-3xl font-semibold mb-4 text-[#FDFBF7]">EQ:Restore</h3>
            <p className="text-[#FDFBF7]/80 text-lg mb-6 leading-relaxed">
              Downshift stress and wake clearer. Sleep support that also helps next-day recall. Magnesium L-Threonate, Ashwagandha, Saffron, and six more ingredients.
            </p>
            <span className="inline-block bg-[#2A9D8F]/20 text-[#2A9D8F] px-4 py-2 rounded-full text-sm font-semibold">
              Launching April 6, 2026
            </span>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://balance-eq.com" 
            target="_blank"
            className="inline-block bg-[#2A9D8F] text-white px-12 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-[#238276] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(42,157,143,0.3)] mr-4 mb-4"
          >
            Visit Balance-EQ.com
          </a>
          <button 
            onClick={openModal}
            className="inline-block bg-transparent text-[#2A9D8F] px-12 py-5 border-2 border-[#2A9D8F] rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-[#2A9D8F] hover:text-white"
          >
            Get Launch Updates
          </button>
        </div>

        <p className="text-center text-[#FDFBF7]/70 mt-8 text-lg">
          Complete ingredient transparency, third-party testing, and clinical dosing.{' '}
          <a href="https://balance-eq.com" target="_blank" className="text-[#2A9D8F] underline hover:text-[#238276]">
            See the full formulas →
          </a>
        </p>
      </div>
    </section>
  )
}