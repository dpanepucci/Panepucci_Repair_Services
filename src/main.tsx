import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import NavBar from './Components/NavBar.tsx'

import { useState } from 'react';

function Root() {
  const [activeSection, setActiveSection] = useState<string>('');

  return (
    <StrictMode>
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(
  <Root />
);
