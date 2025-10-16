'use client';

export default function Products() {
  const styles = {
    section: {
      padding: '8rem 2rem',
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
    },
    intro: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 4rem',
      lineHeight: 1.8,
    },
    cards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '900px',
      margin: '4rem auto',
    },
    card: {
      border: '1px solid rgb(232, 237, 242)',
      borderRadius: '16px',
      padding: '3rem 2rem',
      textAlign: 'center',
      transition: 'all 0.3s',
    },
    icon: {
      fontSize: '3.5rem',
      marginBottom: '1.5rem',
    },
    cardH3: {
      fontSize: '1.75rem',
      marginBottom: '1rem',
    },
    cardP: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
      marginBottom: '1.5rem',
    },
    badge: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 600,
      marginTop: '1rem',
    },
    buttonContainer: {
      textAlign: 'center',
      marginTop: '3rem',
    },
    btnPrimary: {
      background: '#2A9D8F',
      color: 'white',
      padding: '1.25rem 3rem',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s',
      letterSpacing: '0.02em',
      display: 'inline-block',
      textDecoration: 'none',
      marginRight: '1rem',
    },
    btnSecondary: {
      background: 'transparent',
      color: '#2A9D8F',
      padding: '1.25rem 3rem',
      border: '2px solid #2A9D8F',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'inline-block',
      textDecoration: 'none',
    },
    note: {
      textAlign: 'center',
      marginTop: '2rem',
      fontSize: '1.05rem',
    },
    link: {
      color: '#2A9D8F',
      textDecoration: 'none',
    },
  };

  const products = [
    {
      icon: '☀️',
      title: 'EQ:Focus',
      description: 'Sharpen attention without stimulants. Built for deep work, fast context-switching, and calm execution. Clinical doses of Citicoline, Lion\'s Mane, Rhodiola, and more.',
      badge: 'Launching April 6, 2026'
    },
    {
      icon: '🌙',
      title: 'EQ:Restore',
      description: 'Downshift stress and wake clearer. Sleep support that also helps next-day recall. Magnesium L-Threonate, Ashwagandha, Saffron, and six more ingredients.',
      badge: 'Launching April 6, 2026'
    }
  ];

  return (
    <section className="product-preview" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>How We're Starting</h2>
        <p className="section-intro" style={styles.intro}>
          BalanceEQ is our first product line—circadian-optimized nootropics that work with your 
          natural rhythms. Because true cognitive support isn't one-size-fits-all. It's morning and evening. 
          Focus and recovery. Peak performance and restorative rest.
        </p>
        
        <div style={styles.cards}>
          {products.map((product, index) => (
            <div key={index} className="product-card" style={styles.card}>
              <div style={styles.icon}>{product.icon}</div>
              <h3 style={styles.cardH3}>{product.title}</h3>
              <p className="product-card p" style={styles.cardP}>
                {product.description}
              </p>
              <span className="product-badge" style={styles.badge}>{product.badge}</span>
            </div>
          ))}
        </div>
        
        <div style={styles.buttonContainer}>
          <a href="https://balance-eq.com" target="_blank" rel="noopener noreferrer" style={styles.btnPrimary}>
            Visit Balance-EQ.com
          </a>
          <button style={styles.btnSecondary} onClick={() => alert('Newsletter signup coming soon!')}>
            Get Launch Updates
          </button>
        </div>
        
        <p style={styles.note}>
          Complete ingredient transparency, third-party testing, and clinical dosing. 
          <a href="https://balance-eq.com" target="_blank" rel="noopener noreferrer" style={styles.link}> See the full formulas →</a>
        </p>
      </div>
    </section>
  );
}