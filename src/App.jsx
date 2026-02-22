import React, { useState, useEffect } from 'react';
import { GitHubIcon, LinkedInIcon } from './components/BrandIcons';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import HeadshotSkills from './components/HeadshotSkills';
import AboutMe from './components/AboutMe';
import WorkHistory from './components/WorkHistory';
import AdditionalSections from './components/AdditionalSections';
import RetroScape from './components/RetroScape';
import Footer from './components/Footer';

function App() {
  // Lifted state from ThemeToggle
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <h1 className="app-header-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Connor Ericson</h1>
          <a
            href="mailto:condericson@gmail.com"
            style={{ fontSize: '0.9rem', color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none', transition: 'all 0.2s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--accent-color)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.color = 'var(--text-color)'; }}
          >
            condericson@gmail.com
          </a>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
            <a
              href="https://github.com/condericson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--text-color)',
                opacity: 0.8,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--accent-color)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.color = 'var(--text-color)'; }}
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/connor-ericson-17507b12b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--text-color)',
                opacity: 0.8,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--accent-color)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.color = 'var(--text-color)'; }}
            >
              <LinkedInIcon size={20} />
            </a>
          </div>
        </div>
        <ThemeToggle currentTheme={theme} onThemeChange={setTheme} />
      </header>

      {/* Conditionally render RetroScape for performance */}
      {theme === 'electric' && <RetroScape />}

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <HeadshotSkills />
        <WorkHistory />
        <AdditionalSections />
        <AboutMe />
        <Footer />

      </main>
    </div >
  );
}

export default App;
