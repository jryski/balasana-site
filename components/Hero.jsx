export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-8 text-center">
      <div className="max-w-[1200px] mx-auto">
        {/* Tagline */}
        <p className="text-[#2A9D8F] text-lg mb-6 font-medium tracking-wide">
          A Wellness Movement
        </p>
        
        {/* Main Heading */}
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold mb-6 text-[#1A2332] tracking-tight leading-[1.1]">
          Balance From<br />the Inside Out
        </h1>
        
        {/* Subtitle */}
        <p className="text-[clamp(1.1rem,2.5vw,1.35rem)] text-[#5A6C7D] mb-8 max-w-[800px] mx-auto font-normal">
          True wellness begins when Mind, Body, and Spirit work in harmony. 
          Science-backed supplements for the whole you.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-[#2A9D8F] text-white px-10 py-4 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#238276] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(42,157,143,0.3)]">
            Explore Products
          </button>
          <button className="bg-transparent text-[#2A9D8F] px-10 py-4 border-2 border-[#2A9D8F] rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#2A9D8F] hover:text-white">
            Our Story
          </button>
        </div>

        {/* Proof Points */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-[#5A6C7D] mt-12">
          <div className="flex items-center gap-2">
            <span className="text-[#2A9D8F]">✓</span>
            <span>Clinical Dosing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#2A9D8F]">✓</span>
            <span>Public COAs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#2A9D8F]">✓</span>
            <span>Science You Can Read</span>
          </div>
        </div>
      </div>
    </section>
  )
}