export default function Pillars() {
  const pillars = [
    {
      icon: "🧠",
      title: "Mind",
      subtitle: "Cognitive Excellence",
      description: "Circadian-optimized nootropics engineered for peak mental performance. Therapeutic doses that actually work.",
      features: ["Focus & Clarity", "Memory Enhancement", "Stress Resilience", "Mental Energy"]
    },
    {
      icon: "💪",
      title: "Body",
      subtitle: "Physical Vitality",
      description: "Science-backed adaptogens and nutrients that support your body's natural rhythms and recovery.",
      features: ["Energy Balance", "Immune Support", "Recovery", "Endurance"]
    },
    {
      icon: "✨",
      title: "Spirit",
      subtitle: "Inner Balance",
      description: "Holistic wellness through the mind-body connection. Find your center, maintain your edge.",
      features: ["Mood Balance", "Sleep Quality", "Calm Focus", "Well-being"]
    }
  ]

  return (
    <section className="py-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold mb-6 text-center text-[#1A2332] tracking-tight">
          Mind. Body. Spirit.
        </h2>
        <p className="text-center text-[#5A6C7D] text-lg mb-12 max-w-[700px] mx-auto">
          True wellness is the harmony of all three. Our circadian-optimized formulas work with your body's natural rhythms.
        </p>

        {/* Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white border border-[#E8EDF2] rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Icon */}
              <div className="text-5xl mb-6">
                {pillar.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-semibold mb-2 text-[#1A2332]">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#2A9D8F] font-medium uppercase tracking-wider mb-4">
                {pillar.subtitle}
              </p>

              {/* Description */}
              <p className="text-[#5A6C7D] text-[0.95rem] leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-2">
                {pillar.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#2C3E50]">
                    <span className="text-[#2A9D8F] font-bold">✓</span>
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