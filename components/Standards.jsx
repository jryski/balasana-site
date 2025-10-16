export default function Standards() {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '3rem',
      marginTop: '4rem',
    },
    card: {
      textAlign: 'center',
    },
    icon: {
      width: '80px',
      height: '80px',
      margin: '0 auto 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      border: '3px solid rgb(232, 237, 242)',
      borderRadius: '50%',
    },
    h4: {
      fontSize: '1.25rem',
      marginBottom: '0.75rem',
    },
    p: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
    },
  };

  const standards = [
    {
      icon: '🔬',
      title: 'Clinical Dosing',
      description: 'Every ingredient at clinically-studied doses. No pixie dusting. No proprietary blends hiding insufficient amounts. Just transparent, effective formulations.'
    },
    {
      icon: '📋',
      title: 'Public COAs',
      description: 'Third-party Certificates of Analysis for every batch. Publicly accessible. Heavy metals, microbial testing, potency verification. See exactly what you\'re taking.'
    },
    {
      icon: '🧪',
      title: 'Evidence-Based',
      description: 'Every claim backed by peer-reviewed research. Complete citation library with direct links to studies. We show our work.'
    },
    {
      icon: '🇺🇸',
      title: 'cGMP Certified',
      description: 'Manufactured in FDA-registered, cGMP-certified facilities in the USA. Full traceability from raw material to finished product.'
    },
    {
      icon: '🚫',
      title: 'No BS',
      description: 'No binders. No unnecessary fillers. No flow agents. No artificial colors. Just active ingredients and the minimum excipients required for stability.'
    },
    {
      icon: '💚',
      title: 'Honest Marketing',
      description: 'Realistic timelines. No miracle claims. No overnight transformations. Just sustainable support for people committed to the journey.'
    }
  ];

  return (
    <section className="standards-section" id="standards" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Our Standards</h2>
        <p className="section-intro" style={styles.intro}>
          We don't just meet industry standards. We set our own—and hold ourselves to them publicly. 
          Because trust isn't given, it's earned. Every batch. Every time.
        </p>
        
        <div style={styles.grid}>
          {standards.map((standard, index) => (
            <div key={index} className="standard-card" style={styles.card}>
              <div className="standard-icon" style={styles.icon}>
                {standard.icon}
              </div>
              <h4 style={styles.h4}>{standard.title}</h4>
              <p className="standard-card p" style={styles.p}>
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}