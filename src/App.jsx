import { useState } from 'react';
import './App.css'; 

// 1. Import new "pages"
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

function App() {
  // 2. This is the "State". It remembers which page is open.
  // We start with 'home'.
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="journal-container">
      
      {/* LEFT SIDE: The Paper Content Area */}
      <main className="paper-background">
        
        {/* 3. This is the logic! "If activePage is 'home', show <Home />" */}
        {activePage === 'home' && <Home />}
        {activePage === 'about' && <AboutMe />}
        {activePage === 'experiences' && <Experiences />}
        {activePage === 'contact' && <Contact />}

      </main>

      {/* RIGHT SIDE: The Navigation Tabs */}
      <nav className="sidebar">
        
        {/* When you click, we update the state to the new page name */}
        <button onClick={() => setActivePage('home')}>
          Home
        </button>
        
        <button onClick={() => setActivePage('about')}>
          About Me
        </button>

        <button onClick={() => setActivePage('experiences')}>
          Experiences
        </button>

        <button onClick={() => setActivePage('contact')}>
          Contact Us
        </button>

      </nav>
    </div>
  );
}

export default App;
