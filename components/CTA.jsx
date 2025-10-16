'use client'

export default function CTA() {
  const openModal = () => {
    alert('Visit balance-eq.com to get launch updates!')
  }

  return (
    <section className="py-32 px-8 bg-gradient-to-br from-[#1A2332] to-[#2C3E50] text-center">
      <div className="max-w-[700px] mx-auto bg-[#2C3E50]/50 border-2 border-[#FDFBF7]/10 rounded-3xl p-16">
        <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold mb-6 text-[#FDFBF7]">
          Join the Movement
        </h2>
        <p className="text-xl text-[#FDFBF7]/80 mb-6 leading-relaxed">
          We're building something different. A wellness brand that treats you like an intelligent adult. 
          That shows its work. That builds for the long term, not the quick sale.
        </p>
        <p className="text-lg text-[#FDFBF7]/70 mb-10 leading-relaxed">
          Be the first to know when we launch new products, share insights from our research, 
          and build this community together.
        </p>
        <button 
          onClick={openModal}
          className="bg-[#2A9D8F] text-white px-12 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-[#238276] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(42,157,143,0.3)] mb-4"
        >
          Get Launch Updates
        </button>
        <br />
        <a 
          href="https://balance-eq.com" 
          target="_blank"
          className="inline-block bg-transparent text-[#2A9D8F] px-12 py-5 border-2 border-[#2A9D8F] rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-[#2A9D8F] hover:text-white"
        >
          Shop BalanceEQ Now
        </a>
      </div>
    </section>
  )
}