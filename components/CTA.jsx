'use client';

export default function CTA() {
  const styles = {
    section: {
      padding: '8rem 2rem',
      textAlign: 'center',
    },
    box: {
      maxWidth: '700px',
      margin: '0 auto',
      border: '2px solid rgb(232, 237, 242)',
      borderRadius: '24px',
      padding: '4rem 3rem',
    },
    h2: {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    p: {
      fontSize: '1.25rem',
      marginBottom: '2.5rem',
      lineHeight: 1.8,
    },
    pSmall: {
      fontSize: '1.1rem',
      marginBottom: '2rem',
      lineHeight: 1.8,
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
      marginBottom: '1rem',
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
  };

  return (
    <section className="cta-section" style={styles.section}>
      <div className="cta-box" style={styles.box}>
        <h2 style={styles.h2}>Join the Movement</h2>
        <p className="cta-box p" style={styles.p}>
          We're building something different. A wellness brand that treats you like an intelligent adult. 
          That shows its work. That builds for the long term, not the quick sale.
        </p>
        <p className="cta-box p" style={styles.pSmall}>
          Be the first to know when we launch new products, share insights from our research, 
          and build this community together.
        </p>
        <button style={styles.btnPrimary} onClick={() => alert('Newsletter signup coming soon!')}>
          Get Launch Updates
        </button>
        <br />
        <a href="https://balance-eq.com" target="_blank" rel="noopener noreferrer" style={styles.btnSecondary}>
          Shop BalanceEQ Now
        </a>
      </div>
    </section>
  );
}