import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { PROJECT_NAME } from './constants';
import { AiOutlineDashboard } from 'react-icons/ai';

// Debugging Supabase credentials: These logs help verify if the environment variables are being loaded properly.
// You may remove these lines after confirming the correct values appear in the browser console.
console.log('SUPABASE_URL', process.env.REACT_APP_SUPABASE_URL);
console.log('SUPABASE_KEY', process.env.REACT_APP_SUPABASE_KEY);

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Icon in header for prominent branding */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          marginBottom: '2rem',
          justifyContent: 'center'
        }}>
          <AiOutlineDashboard size={40} color="var(--text-secondary)" aria-label="Dashboard Icon" />
          <span style={{ fontWeight: 700, fontSize: "2.2rem", letterSpacing: "1px", color: "var(--text-primary)" }}>
            {PROJECT_NAME}
          </span>
        </div>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
