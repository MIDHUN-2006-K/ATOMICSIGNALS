// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './components/theme/themeContext.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
