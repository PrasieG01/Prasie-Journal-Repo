import { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

  // The Magic Scroll Function
  const scrollToSection = (sectionId) => {
    setActivePage(sectionId); 
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="journal-container bg-dotted">
      
      <main className="paper-background">
        
        <div id="home" className="section-wrapper">
          <Home onNavigate={scrollToSection} />
        </div>

        <div id="about" className="section-wrapper">
          <AboutMe />
        </div>

        <div id="experiences" className="section-wrapper">
          <Experiences />
        </div>

        <div id="contact" className="section-wrapper">
          <Contact />
        </div>

        {/* THE FOOTER */}
        <footer className="site-footer">
          <p>Designed & Built by Prasamsha Gyenwali © 2026</p>
        </footer>
      </main>

      <nav className="sidebar">
        <button
          className={`tab home ${activePage === "home" ? "active" : ""}`}
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>

        <button
          className={`tab about ${activePage === "about" ? "active" : ""}`}
          onClick={() => scrollToSection("about")}
        >
          About Me
        </button>

        <button
          className={`tab experiences ${activePage === "experiences" ? "active" : ""}`}
          onClick={() => scrollToSection("experiences")}
        >
          Experiences
        </button>

        <button
          className={`tab contact ${activePage === "contact" ? "active" : ""}`}
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>
      </nav>
    </div>
  );
}

export default App;
