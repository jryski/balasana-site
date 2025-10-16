export default function Hero() {
  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '8rem 2rem 4rem',
    },
    h1: {
      fontSize: 'clamp(3rem, 7vw, 5rem)',
      fontWeight: 600,
      marginBottom: '2rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    subtitle: {
      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
      marginBottom: '1.5rem',
      fontWeight: 400,
      maxWidth: '800px',
    },
    tagline: {
      fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
      color: '#2A9D8F',
      marginBottom: '3rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
    },
  };

  return (
    <section className="hero" style={styles.hero}>
      <p style={styles.tagline}>A Wellness Movement</p>
      <h1 style={styles.h1}>
        Balance From
        <br />
        the Inside Out
      </h1>
      <p className="hero-subtitle" style={styles.subtitle}>
        True wellness begins when Mind, Body, and Spirit work in harmony.
        <br />
        We're building a complete lifestyle ecosystem—starting with what you put in your body.
      </p>
    </section>
  );
}