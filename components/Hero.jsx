export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-32 pb-16 bg-gradient-to-br from-[#2C3E50] to-[#1A2332]">
      <p className="text-[#2A9D8F] text-lg mb-6 font-medium tracking-[0.15em] uppercase">
        A Wellness Movement
      </p>
      
      <h1 className="text-[clamp(3rem,7vw,5rem)] font-semibold mb-8 text-[#FDFBF7] tracking-tight leading-[1.1]">
        Balance From<br />the Inside Out
      </h1>
      
      <p className="text-[clamp(1.25rem,3vw,1.75rem)] text-[#FDFBF7]/80 mb-6 font-normal max-w-[800px] leading-relaxed">
        True wellness begins when Mind, Body, and Spirit work in harmony.
      </p>
      
      <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-[#FDFBF7]/70 max-w-[800px] leading-relaxed">
        We're building a complete lifestyle ecosystem—starting with what you put in your body.
      </p>
    </section>
  )
}