'use client';

export default function Footer() {
  const styles = {
    footer: {
      background: '#1A2332',
      color: 'white',
      padding: '4rem 2rem 2rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem',
    },
    section: {
      color: 'white',
    },
    h4: {
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
      color: 'white',
      fontWeight: 600,
    },
    description: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.95rem',
      lineHeight: 1.7,
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    li: {
      marginBottom: '0.75rem',
    },
    link: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'color 0.3s',
    },
    bottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '2rem',
      textAlign: 'center',
    },
    bottomP: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '0.9rem',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4 style={styles.h4}>Balasana</h4>
          <p style={styles.description}>
            A wellness movement built on the harmony of Mind, Body, and Spirit. 
            Starting with science-backed nootropics, building a complete lifestyle ecosystem.
          </p>
        </div>
        
        <div style={styles.section}>
          <h4 style={styles.h4}>Company</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <a href="/#philosophy" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Our Philosophy
              </a>
            </li>
            <li style={styles.li}>
              <a href="/#story" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Founder Story
              </a>
            </li>
            <li style={styles.li}>
              <a href="/#vision" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Vision & Roadmap
              </a>
            </li>
            <li style={styles.li}>
              <a href="/#standards" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Our Standards
              </a>
            </li>
            <li style={styles.li}>
              <a href="mailto:hello@balasana.com" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div style={styles.section}>
          <h4 style={styles.h4}>Products</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <a href="https://balance-eq.com" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                BalanceEQ Nootropics
              </a>
            </li>
            <li style={styles.li}>
              <a href="https://balance-eq.com/evidence" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Evidence Library
              </a>
            </li>
            <li style={styles.li}>
              <a href="https://balance-eq.com/coas" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Certificates of Analysis
              </a>
            </li>
            <li style={styles.li}>
              <a href="https://balance-eq.com/transparency" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Full Transparency
              </a>
            </li>
          </ul>
        </div>
        
        <div style={styles.section}>
          <h4 style={styles.h4}>Legal</h4>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <a href="#" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Privacy Policy
              </a>
            </li>
            <li style={styles.li}>
              <a href="#" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Terms of Service
              </a>
            </li>
            <li style={styles.li}>
              <a href="#" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#2A9D8F'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div style={styles.bottom}>
        <p style={styles.bottomP}>
          © 2025 Balasana LLC. All rights reserved. • Sanskrit for child's pose — finding equilibrium.
        </p>
      </div>
    </footer>
  );
}