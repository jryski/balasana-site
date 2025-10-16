export default function Story() {
  const styles = {
    section: {
      padding: '8rem 2rem',
    },
    container: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    h2: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 600,
      textAlign: 'left',
      marginBottom: '3rem',
      letterSpacing: '-0.02em',
    },
    p: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      lineHeight: 1.9,
    },
    highlight: {
      borderLeft: '4px solid #2A9D8F',
      padding: '2rem 2.5rem',
      margin: '3rem 0',
      borderRadius: '0 12px 12px 0',
    },
    highlightP: {
      marginBottom: '1rem',
      fontSize: '1.25rem',
      lineHeight: 1.9,
    },
    quote: {
      fontSize: '1.5rem',
      fontWeight: 600,
      fontStyle: 'italic',
      margin: '2rem 0',
      textAlign: 'center',
    },
    strong: {
      fontWeight: 600,
    },
    finalQuote: {
      fontSize: '1.5rem',
      fontWeight: 600,
      textAlign: 'center',
      marginTop: '3rem',
    },
    signature: {
      textAlign: 'center',
      marginTop: '1rem',
    },
  };

  return (
    <section className="story-section" id="story" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>The Journey to Balance</h2>
        
        <p style={styles.p}>
          I hit a wall I didn't see coming. Not a gentle "I need a vacation" wall—the kind where you wake up 
          exhausted after 8 hours of sleep. Where you stare at your to-do list and feel nothing but dread. 
          Where you snap at the people you love most because you have nothing left to give.
        </p>
        
        <p style={styles.p}>
          I was overloaded. Burned out. Running on fumes.
        </p>
        
        <div className="story-highlight" style={styles.highlight}>
          <p style={styles.highlightP}>
            The worst part? Everyone kept telling me this was just "part of being a parent." 
            But this wasn't normal tired. This was lying-awake-at-3am-despite-being-exhausted tired.
          </p>
        </div>
        
        <p style={styles.p}>
          I knew something had to change. <strong style={styles.strong}>I refused to accept that this was just how life had to be.</strong>
        </p>
        
        <p style={styles.p}>
          I started researching—really researching. Not just Googling "supplements for energy," but diving into 
          clinical studies, learning about neurotransmitters, stress hormones, and circadian rhythms. I discovered 
          that what I was experiencing had names: chronic stress, cognitive fatigue, HPA axis dysregulation.
        </p>
        
        <p className="story-quote" style={styles.quote}>
          "Your brain doesn't work the same way at 7am and 7pm."
        </p>
        
        <p style={styles.p}>
          In the morning, you need support for focus, clarity, and mental energy. In the evening, you need 
          support for recovery, memory consolidation, and restorative sleep. Yet every supplement I found 
          treated my brain like it was the same all day. One formula. One approach.
        </p>
        
        <p style={styles.p}>
          That's when I realized: <strong style={styles.strong}>Nobody had built what I actually needed.</strong>
        </p>
        
        <div className="story-highlight" style={styles.highlight}>
          <p style={styles.highlightP}>
            Balasana started as a dream to create wellness apparel—the name itself, Sanskrit for "child's pose," 
            represented our commitment to finding equilibrium. But as we researched and spoke with customers, 
            we realized something fundamental:
          </p>
          <p style={{...styles.highlightP, fontWeight: 600, color: '#2A9D8F'}}>
            True balance doesn't start with what you wear. It starts with what fuels you from within.
          </p>
        </div>
        
        <p style={styles.p}>
          So I decided to create what should have existed all along: A circadian nootropic system built for 
          real people dealing with real stress. Not marketing doses. Not proprietary blends hiding insufficient 
          ingredients. Clinical-grade formulas with transparent dosing and actual efficacy.
        </p>
        
        <p style={styles.p}>
          But that was just the beginning. Because burnout isn't solved by supplements alone. It requires a 
          complete approach—nutrition, movement, recovery, and mindset. A complete lifestyle ecosystem.
        </p>
        
        <p style={styles.finalQuote}>
          The mission: Help you find your balance, from the inside out.
        </p>
        
        <p style={styles.signature}>
          — Jesse, Founder
        </p>
      </div>
    </section>
  );
}