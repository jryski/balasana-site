export default function Standards() {
  const standards = [
    {
      icon: "🔬",
      title: "Clinical Dosing",
      description: "Every ingredient at clinically-studied doses. No pixie dusting. No proprietary blends hiding insufficient amounts. Just transparent, effective formulations."
    },
    {
      icon: "📋",
      title: "Public COAs",
      description: "Third-party Certificates of Analysis for every batch. Publicly accessible. Heavy metals, microbial testing, potency verification. See exactly what you're taking."
    },
    {
      icon: "🧪",
      title: "Evidence-Based",
      description: "Every claim backed by peer-reviewed research. Complete citation library with direct links to studies. We show our work."
    },
    {
      icon: "🇺🇸",
      title: "cGMP Certified",
      description: "Manufactured in FDA-registered, cGMP-certified facilities in the USA. Full traceability from raw material to finished product."
    },
    {
      icon: "🚫",
      title: "No BS",
      description: "No binders. No unnecessary fillers. No flow agents. No artificial colors. Just active ingredients and the minimum excipients required for stability."
    },
    {
      icon: "💚",
      title: "Honest Marketing",
      description: "Realistic timelines. No miracle claims. No overnight transformations. Just sustainable support for people committed to the journey."
    }
  ]

  return (
    <section id="standards" className="py-32 px-8 bg-[#2C3E50]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold mb-8 text-center text-[#FDFBF7]">
          Our Standards
        </h2>
        <p className="text-center text-[#FDFBF7]/80 text-[clamp(1.1rem,2.5vw,1.35rem)] mb-16 max-w-[800px] mx-auto leading-relaxed">
          We don't just meet industry standards. We set our own—and hold ourselves to them publicly. 
          Because trust isn't given, it's earned. Every batch. Every time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {standards.map((standard, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-5xl border-3 border-[#FDFBF7]/20 rounded-full bg-[#1A2332]/50">
                {standard.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[#FDFBF7]">
                {standard.title}
              </h4>
              <p className="text-[#FDFBF7]/70 text-base leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}