export default function Pillars() {
  const pillars = [
    {
      icon: "🧠",
      title: "Mind",
      subtitle: "Cognitive Excellence",
      description: "Your mind is your most powerful tool. We support it with circadian-optimized nootropics that work with your natural rhythms—not against them. Focus when you need it. Recovery when you require it.",
      features: ["Mental clarity & focus", "Memory & learning", "Stress resilience", "Cognitive energy"]
    },
    {
      icon: "❤️",
      title: "Body",
      subtitle: "Physical Vitality",
      description: "Your body is your vessel. We fuel it with science-backed adaptogens and nutrients that support natural energy production, immune function, and recovery. Not borrowed energy. Real, sustainable vitality.",
      features: ["Natural energy balance", "Immune system support", "Recovery & repair", "Physical resilience"]
    },
    {
      icon: "✨",
      title: "Spirit",
      subtitle: "Inner Balance",
      description: "Your spirit is your center. We nurture it through the mind-body connection—managing stress, improving sleep quality, and supporting emotional well-being. Because you can't pour from an empty cup.",
      features: ["Emotional balance", "Sleep quality", "Stress management", "Overall well-being"]
    }
  ]

  return (
    <section id="philosophy" className="py-32 px-8 bg-gradient-to-br from-[#1A2332] to-[#2C3E50]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold mb-8 text-center text-[#FDFBF7] tracking-tight">
          Mind. Body. Spirit.
        </h2>
        <p className="text-center text-[#FDFBF7]/80 text-[clamp(1.1rem,2.5vw,1.35rem)] mb-16 max-w-[800px] mx-auto leading-relaxed">
          This isn't just our tagline—it's our foundation. Every product, every formula, every decision 
          flows from this principle. Because true balance isn't found in one dimension. It's the harmony of all three.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-[#2C3E50]/50 border-2 border-[#FDFBF7]/10 rounded-3xl p-16 text-center transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(42,157,143,0.2)] hover:border-[#2A9D8F] relative overflow-hidden group"
            >
              <div className="text-6xl mb-8">{pillar.icon}</div>
              
              <h3 className="text-3xl font-semibold mb-4 text-[#FDFBF7]">
                {pillar.title}
              </h3>
              <p className="text-base text-[#2A9D8F] font-semibold uppercase tracking-[0.1em] mb-8">
                {pillar.subtitle}
              </p>

              <p className="text-[#FDFBF7]/80 text-lg leading-relaxed mb-8">
                {pillar.description}
              </p>

              <div className="flex flex-col gap-4">
                {pillar.features.map((feature, i) => (
                  <div key={i} className="flex items-center justify-center gap-3 text-base text-[#FDFBF7] bg-[#1A2332]/50 py-3 px-4 rounded-lg">
                    <span className="text-[#2A9D8F] font-bold text-xl">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}