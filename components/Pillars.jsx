export default function Pillars() {
  const styles = {
    section: {
      padding: '8rem 2rem',
    },
    h2: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 600,
      marginBottom: '2rem',
      textAlign: 'center',
      letterSpacing: '-0.02em',
    },
    intro: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 4rem',
      lineHeight: 1.8,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '3rem',
      margin: '4rem auto',
      maxWidth: '1200px',
    },
    card: {
      border: '2px solid rgb(232, 237, 242)',
      borderRadius: '24px',
      padding: '4rem 3rem',
      textAlign: 'center',
      transition: 'all 0.4s',
      position: 'relative',
      overflow: 'hidden',
    },
    icon: {
      fontSize: '4rem',
      marginBottom: '2rem',
      display: 'block',
    },
    cardH3: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#2A9D8F',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '2rem',
    },
    description: {
      fontSize: '1.125rem',
      lineHeight: 1.8,
      marginBottom: '2rem',
    },
    features: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      marginTop: '2rem',
    },
    feature: {
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      padding: '0.75rem',
      borderRadius: '8px',
    },
    checkmark: {
      color: '#2A9D8F',
      fontWeight: 'bold',
      fontSize: '1.25rem',
    },
  };

  return (
    <section className="pillar-section" id="philosophy" style={styles.section}>
      <div>
        <h2 style={styles.h2}>Mind. Body. Spirit.</h2>
        <p className="section-intro" style={styles.intro}>
          This is not just our tagline—it is our foundation. Every product, every formula, every decision 
          flows from this principle. Because true balance is not found in one dimension. It is the harmony of all three.
        </p>
        
        <div style={styles.grid}>
          <div className="pillar-card" style={styles.card}>
            <span style={styles.icon}>🧠</span>
            <h3 style={styles.cardH3}>Mind</h3>
            <p style={styles.subtitle}>Cognitive Excellence</p>
            <p className="pillar-description" style={styles.description}>
              Your mind is your most powerful tool. We support it with circadian-optimized nootropics that work with your natural rhythms—not against them. Focus when you need it. Recovery when you require it.
            </p>
            <div style={styles.features}>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Mental clarity and focus</span>
              </div>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Memory and learning</span>
              </div>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Stress resilience</span>
              </div>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Cognitive energy</span>
              </div>
            </div>
          </div>

          <div className="pillar-card" style={styles.card}>
            <span style={styles.icon}>❤️</span>
            <h3 style={styles.cardH3}>Body</h3>
            <p style={styles.subtitle}>Physical Vitality</p>
            <p className="pillar-description" style={styles.description}>
              Your body is your vessel. We fuel it with science-backed adaptogens and nutrients that support natural energy production, immune function, and recovery. Not borrowed energy. Real, sustainable vitality.
            </p>
            <div style={styles.features}>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Natural energy balance</span>
              </div>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Immune system support</span>
              </div>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Recovery and repair</span>
              </div>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Physical resilience</span>
              </div>
            </div>
          </div>

          <div className="pillar-card" style={styles.card}>
            <span style={styles.icon}>✨</span>
            <h3 style={styles.cardH3}>Spirit</h3>
            <p style={styles.subtitle}>Inner Balance</p>
            <p className="pillar-description" style={styles.description}>
              Your spirit is your center. We nurture it through the mind-body connection—managing stress, improving sleep quality, and supporting emotional well-being. Because you cannot pour from an empty cup.
            </p>
            <div style={styles.features}>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Emotional balance</span>
              </div>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Sleep quality</span>
              </div>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Stress management</span>
              </div>
              <div className="pillar-feature" style={styles.feature}>
                <span style={styles.checkmark}>✓</span>
                <span>Overall well-being</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}