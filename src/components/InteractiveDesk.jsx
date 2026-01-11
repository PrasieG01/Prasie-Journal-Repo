import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import { useNavigate } from 'react-router-dom';
import deskSvg from '../assets/HomeScreen.svg';

const InteractiveDesk = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  // Key = The exact ID inside my Figma SVG
  const deskItems = {
    Journal: {
      title: "My Journal",
      description: "I journal a lot.",
      link: "/journal",
      cta: "Journal"
    },
    Totebag: {
      title: "My Life & Hobbies",
      description: "See what I carry with me: travel, photography, and cooking.",
      link: "/about",
      cta: "Explore Hobbies"
    },
    Laptop: {
      title: "Tech Stack",
      description: "The fuel behind the code. See my skills and tools.",
      link: "/skills",
      cta: "See Toolkit"
    },
    Corkboard: {
      title: "My Experiences",
      description: "My Professional Experiences",
      link: "/Experiences",
      cta: "See Experiences"
    },
    Headphones: {
      title: "My Music",
      description: "I listen to a lot of music while coding. Check out my playlists!",
      link: "/music",
      cta: "See Experiences"
    },
    IPhone: {
      title: "Let's connect!",
      description: "Let's get in touch. I'd love to hear from you!",
      link: "/connect",
      cta: "Connect"
    },
    Boba: {
      title: "Big foodie here!",
      description: "My favorite boba spots and recipes.",
      link: "/boba",
      cta: "Boba & Food"
    },
    BOOKS: {
      title: "Trying to read more",
      description: "Some of my fav reads",
      link: "/books",
      cta: "Books"
    },
  };

  // --- EVENT HANDLERS ---
  const handleSvgClick = (e) => {
    // If we already have an active item, clicking elsewhere closes it
    if (activeItem) {
      return; 
    }

    const group = e.target.closest('g');
    if (group && deskItems[group.id]) {
      e.stopPropagation(); // Prevent bubbling
      setActiveItem(group.id);
    }
  };

  const closePopup = (e) => {
    e.stopPropagation();
    setActiveItem(null);
  };

  const handleNavigate = () => {
    if (activeItem && deskItems[activeItem]) {
      navigate(deskItems[activeItem].link);
    }
  };

  return (
    <div className="desk-container">
      
      {/* --- THE SVG --- */}
      <div 
        className={`svg-wrapper ${activeItem ? 'spotlight-mode' : ''}`} 
        onClick={activeItem ? closePopup : handleSvgClick}
      >
        <SVG 
          src={deskSvg} 
          width="100%" 
          height="auto"
          // Pass the active ID as a class so CSS knows which specific one to highlight
          className={activeItem ? `active-${activeItem}` : ''}
        />
      </div>

      {/* --- THE POPUP CARD --- */}
      {activeItem && (
        <div className="desk-popup-overlay">
          <div className="desk-popup-card">
            <button className="close-btn" onClick={closePopup}>×</button>
            
            <h3>{deskItems[activeItem].title}</h3>
            <p>{deskItems[activeItem].description}</p>
            
            <button className="navigate-btn" onClick={handleNavigate}>
              {deskItems[activeItem].cta} ➜
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
export default InteractiveDesk;