import { useState } from 'react';
import './App.css'; 

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="journal-container">
      
      <main className="paper-background">
        
        {activePage === 'home' && <Home />}
        {activePage === 'about' && <AboutMe />}
        {activePage === 'experiences' && <Experiences />}
        {activePage === 'contact' && <Contact />}

      </main>

      <nav className="sidebar">
        
        <button className={`tab home ${activePage === 'home' ? 'active' : ''}`} onClick={() => setActivePage('home')}>
          Home
        </button>

        <button className={`tab about ${activePage === 'about' ? 'active' : ''}`} onClick={() => setActivePage('about')}>
          About Me
        </button>

        <button className={`tab experiences ${activePage === 'experiences' ? 'active' : ''}`} onClick={() => setActivePage('experiences')}>
          Experiences
        </button>

        <button className={`tab contact ${activePage === 'contact' ? 'active' : ''}`} onClick={() => setActivePage('contact')}>
          Contact Us
        </button>

      </nav>
    </div>
  );
}

export default App;
