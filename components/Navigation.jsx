'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      padding: '1.25rem 2rem',
      borderBottom: '1px solid rgba(44, 62, 80, 0.08)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
    },
    logoImg: {
      height: isDesktop ? '70px' : '60px',
      width: 'auto',
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    navLinksDesktop: {
      display: isDesktop ? 'flex' : 'none',
      gap: '2.5rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLinksMobile: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      listStyle: 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backdropFilter: 'blur(10px)',
      padding: '2rem',
      borderBottom: '1px solid rgba(44, 62, 80, 0.08)',
      margin: 0,
    },
    link: {
      color: 'rgb(90, 108, 125)',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer',
      fontSize: '0.95rem',
      letterSpacing: '0.02em',
    },
    themeToggle: {
      background: 'transparent',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s',
    },
    mobileToggle: {
      display: isDesktop ? 'none' : 'flex',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer',
      padding: '8px',
      background: 'transparent',
      border: 'none',
    },
    mobileToggleBar: {
      width: '24px',
      height: '2px',
      background: 'rgb(44, 62, 80)',
      transition: 'all 0.3s',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link href="/" style={styles.logo}>
          <img 
            src="/balasana-logo.png" 
            alt="Balasana Logo" 
            style={styles.logoImg}
          />
        </Link>
        
        <div style={styles.rightSection}>
          <ul style={styles.navLinksDesktop}>
            <li>
              <a 
                href="/#philosophy" 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.color = '#2A9D8F'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(90, 108, 125)'}
              >
                Philosophy
              </a>
            </li>
            <li>
              <a 
                href="/#story" 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.color = '#2A9D8F'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(90, 108, 125)'}
              >
                Our Story
              </a>
            </li>
            <li>
              <a 
                href="/#vision" 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.color = '#2A9D8F'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(90, 108, 125)'}
              >
                Vision
              </a>
            </li>
            <li>
              <a 
                href="/#standards" 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.color = '#2A9D8F'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(90, 108, 125)'}
              >
                Standards
              </a>
            </li>
            <li>
              <Link 
                href="/blog" 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.color = '#2A9D8F'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(90, 108, 125)'}
              >
                Blog
              </Link>
            </li>
            <li>
              <a 
                href="https://balance-eq.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.color = '#2A9D8F'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(90, 108, 125)'}
              >
                Shop BalanceEQ
              </a>
            </li>
          </ul>
          
          <button 
            onClick={toggleTheme}
            style={styles.themeToggle}
            aria-label="Toggle theme"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={styles.mobileToggle}
            aria-label="Toggle menu"
          >
            <span style={styles.mobileToggleBar}></span>
            <span style={styles.mobileToggleBar}></span>
            <span style={styles.mobileToggleBar}></span>
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && !isDesktop && (
        <ul style={styles.navLinksMobile}>
          <li>
            <a 
              href="/#philosophy" 
              style={styles.link} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Philosophy
            </a>
          </li>
          <li>
            <a 
              href="/#story" 
              style={styles.link} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Story
            </a>
          </li>
          <li>
            <a 
              href="/#vision" 
              style={styles.link} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Vision
            </a>
          </li>
          <li>
            <a 
              href="/#standards" 
              style={styles.link} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Standards
            </a>
          </li>
          <li>
            <Link 
              href="/blog" 
              style={styles.link} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <a 
              href="https://balance-eq.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.link}
            >
              Shop BalanceEQ
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}