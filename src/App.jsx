import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
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
          <a
            href="https://github.com/condericson"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              color: 'var(--text-color)',
              opacity: 0.8,
              textDecoration: 'none',
              marginTop: '0.25rem'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--accent-color)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.color = 'var(--text-color)'; }}
          >
            <Github size={16} />
            <span>condericson</span>
          </a>
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
