export default function Vision() {
  const styles = {
    section: {
      padding: '8rem 2rem',
      background: 'linear-gradient(135deg, rgb(42, 157, 143) 0%, rgb(35, 130, 118) 100%)',
      color: 'white',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    h2: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 600,
      marginBottom: '2rem',
      textAlign: 'center',
      letterSpacing: '-0.02em',
      color: 'white',
    },
    intro: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 4rem',
      lineHeight: 1.8,
      color: 'white',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginTop: '4rem',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      padding: '2.5rem 2rem',
      transition: 'all 0.3s',
    },
    badge: {
      display: 'inline-block',
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    cardH3: {
      color: 'white',
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      marginBottom: '1rem',
      fontWeight: 600,
    },
    cardP: {
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  };

  const roadmap = [
    {
      badge: 'Q1 2026 • Launching',
      title: 'BalanceEQ Nootropics',
      description: 'Circadian-optimized cognitive support. EQ:Focus for peak daytime performance. EQ:Restore for evening recovery and sleep. The foundation of the ecosystem.'
    },
    {
      badge: 'Q3 2026 • Coming',
      title: 'Performance Line',
      description: 'Clean energy, immune support, and recovery formulas. EQ:Drive, EQ:Shield, EQ:Foundations. Complete nutritional support for your active lifestyle.'
    },
    {
      badge: 'Q4 2026 • Coming',
      title: 'Curated Meal Plans',
      description: 'Science-backed nutrition guidance tailored to your goals. Simple, sustainable eating that supports cognitive performance and physical health.'
    },
    {
      badge: '2027 • Vision',
      title: 'Complete Ecosystem',
      description: 'Movement protocols. Stress management tools. Community support. Everything you need for true Mind, Body, Spirit balance in one integrated platform.'
    }
  ];

  return (
    <section className="vision-section" id="vision" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>The Vision</h2>
        <p style={styles.intro}>
          BalanceEQ nootropics are just the beginning. We're building a complete wellness ecosystem 
          for people who refuse to settle for burnout as their baseline. Here's where we're going.
        </p>
        
        <div style={styles.grid}>
          {roadmap.map((item, index) => (
            <div key={index} className="roadmap-card" style={styles.card}>
              <span style={styles.badge}>{item.badge}</span>
              <h3 style={styles.cardH3}>{item.title}</h3>
              <p style={styles.cardP}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}