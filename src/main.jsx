import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/globals.css';
import App from './App.jsx';
import { initGA, trackPageView } from './utils/analytics.js';

initGA();
trackPageView();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
