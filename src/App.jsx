import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import PersonalInfo from './components/PersonalInfo';
import WorkHistory from './components/WorkHistory';

function App() {
  return (
    <div className="app-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Connor Ericson</h1>
          <a href="mailto:condericson@gmail.com" style={{ fontSize: '0.9rem', color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none' }}>
            condericson@gmail.com
          </a>
        </div>
        <ThemeToggle /> {/* It is fixed position now, but keeping it in DOM */}
      </header>

      <main>
        <Hero />
        <PersonalInfo />
        <WorkHistory />
      </main>
    </div >
  );
}

export default App;
