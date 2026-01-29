import React, { useEffect, useState } from 'react';
import { Moon, Sun, Zap, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = React.useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const selectTheme = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 600); // 600ms delay
  };

  const getIcon = (t) => {
    switch (t) {
      case 'light': return <Sun size={20} />;
      case 'electric': return <Zap size={20} color="#0ff0fc" fill="#0ff0fc" />;
      case 'dark': return <Moon size={20} />;
      default: return <Palette size={20} />;
    }
  };

  return (
    <div
      className="theme-dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="theme-toggle-main"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Theme menu"
      >
        {getIcon(theme)}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="theme-options-wrapper">
            {/* Triangular Fan-out */}
            {/* 1. Dark (Bottom Left) */}
            <motion.button
              className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x: -45, y: 30 }}
              exit={{ opacity: 0, x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => selectTheme('dark')}
              title="Dark Mode"
            >
              <Moon size={18} />
            </motion.button>

            {/* 2. Light (Bottom Right) */}
            <motion.button
              className={`theme-option ${theme === 'light' ? 'active' : ''}`}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 45, y: 30 }}
              exit={{ opacity: 0, x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.05 }}
              onClick={() => selectTheme('light')}
              title="Light Mode"
            >
              <Sun size={18} />
            </motion.button>

            {/* 3. Electric (Bottom Center - Lower) */}
            <motion.button
              className={`theme-option ${theme === 'electric' ? 'active' : ''}`}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 60 }}
              exit={{ opacity: 0, x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
              onClick={() => selectTheme('electric')}
              title="Electric Mode"
            >
              <Zap size={18} />
            </motion.button>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
