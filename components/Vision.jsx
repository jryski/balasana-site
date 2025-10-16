export default function Vision() {
  const roadmap = [
    {
      badge: "Q1 2026 • Launching",
      title: "BalanceEQ Nootropics",
      description: "Circadian-optimized cognitive support. EQ:Focus for peak daytime performance. EQ:Restore for evening recovery and sleep. The foundation of the ecosystem."
    },
    {
      badge: "Q3 2026 • Coming",
      title: "Performance Line",
      description: "Clean energy, immune support, and recovery formulas. EQ:Drive, EQ:Shield, EQ:Foundations. Complete nutritional support for your active lifestyle."
    },
    {
      badge: "Q4 2026 • Coming",
      title: "Curated Meal Plans",
      description: "Science-backed nutrition guidance tailored to your goals. Simple, sustainable eating that supports cognitive performance and physical health."
    },
    {
      badge: "2027 • Vision",
      title: "Complete Ecosystem",
      description: "Movement protocols. Stress management tools. Community support. Everything you need for true Mind, Body, Spirit balance in one integrated platform."
    }
  ]

  return (
    <section id="vision" className="py-32 px-8 bg-gradient-to-br from-[#2A9D8F] to-[#238276]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold mb-8 text-center text-white">
          The Vision
        </h2>
        <p className="text-center text-white/90 text-[clamp(1.1rem,2.5vw,1.35rem)] mb-16 max-w-[800px] mx-auto leading-relaxed">
          BalanceEQ nootropics are just the beginning. We're building a complete wellness ecosystem 
          for people who refuse to settle for burnout as their baseline. Here's where we're going.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmap.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl p-10 transition-all duration-300 hover:bg-white/15 hover:-translate-y-2"
            >
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider text-white">
                {item.badge}
              </span>
              <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}