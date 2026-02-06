import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import PersonalInfo from './components/PersonalInfo';
import WorkHistory from './components/WorkHistory';
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Connor Ericson</h1>
          <a href="mailto:condericson@gmail.com" style={{ fontSize: '0.9rem', color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none' }}>
            condericson@gmail.com
          </a>
        </div>
        <ThemeToggle currentTheme={theme} onThemeChange={setTheme} />
      </header>

      {/* Conditionally render RetroScape for performance */}
      {theme === 'electric' && <RetroScape />}

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <PersonalInfo />
        <WorkHistory />
        <Footer />
      </main>
    </div >
  );
}

export default App;
