import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

/* --- ASSETS --- */
import deskBg from '../assets/Table.png';
import laptopImg from '../assets/Laptop.png';
import arrowImg from '../assets/down-arrow.png';
// import journalImg from '../assets/Journal.png';
// import toteImg from '../assets/Totebag.png';
// import corkImg from '../assets/Corkboard.png';
// import bobaImg from '../assets/Boba.png';
// import booksImg from '../assets/BOOKS.png';
// import phoneImg from '../assets/IPhone.png';
// import headphonesImg from '../assets/Headphones.png';

import html_icon from '../assets/html_icon.jpg';
import java_icon from '../assets/java_icon.jpg';
import css_icon from '../assets/css_icon.jpg';
import js_icon from '../assets/js_icon.jpg';
import react_icon from '../assets/react_icon.jpg';
import python_icon from '../assets/Python_icon.jpg';
import sql_icon from '../assets/sql_icon.jpg';
import Git_icon from '../assets/Git_icon.jpg';
import figma_icon from '../assets/figma_icon.jpg';
import aws_icon from '../assets/aws_icon.jpg';


const InteractiveDesk = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // CALCULATED POSITIONS
  // Base Width: 1434px | Base Height: 800px
const items = [
  { 
    id: 'Laptop', 
    img: laptopImg, 
    handLabel: "Tools & Languages",
    title: "My Tech Stack",
    type: "icons", 
    
    data: [
      { name: "React", icon: react_icon },
      { name: "JavaScript", icon: js_icon },
      { name: "CSS", icon: css_icon },
      { name: "Figma", icon: figma_icon },
      { name: "Git", icon: Git_icon },
      { name: "HTML", icon: html_icon },
      { name: "Python", icon: python_icon },
      { name: "Java", icon: java_icon },
      { name: "AWS", icon: aws_icon },
      { name: "SQL", icon: sql_icon },
    ],
    // style: { top: '39.8%', left: '38.9%', width: '29.5%', zIndex: 4 } 
  },

//   { 
//     id: 'Totebag', 
//     img: toteImg, 
//     label: "About Me", 
//     title: "The Explorer", 
    
//     type: "info", 
    
//     // The Description Text
//     data: "I love traveling, photography, and collecting memories. My totebag holds the tools I use to capture the world.",
    
//     // The Button Configuration
//     cta: { 
//       text: "Visit About Page", 
//       link: "/about" 
//     },
    
//     style: { top: '1.9%', left: '71%', width: '13.8%', zIndex: 2 } 
//   },

//  { 
//     id: 'Corkboard', 
//     img: corkImg, 
//     label: "My Experience", 
//     title: "Career Journey",
//     type: "info",
//     data: "From my first internship to my current role, view my full resume and timeline.",
//     cta: { 
//       text: "View Experiences", 
//       link: "/experience" 
//     },
//     style: { top: '0%', left: '0%', width: '60%', zIndex: 1 } 
//   },
//   {
//     id: 'IPhone', 
//     img: phoneImg, 
//     label: "Let's connect!",
//     title: "Connect with me",
//     type: "icons",
   
//     data: [
//       { name: "LinkedIn", icon: linkedin_icon },
//       { name: "GitHub", icon: github_icon },
//       { name: "Email", icon: email_icon },
//       { name: "Website", icon: portfolio_icon },
//     ],
//   }
];

return (
    <div className="desk-container">
      <div className="desk-wrapper">
  {/* 1. BACKGROUND */}
  <img src={deskBg} alt="Desk" className="desk-bg" />

  {/* 2. THE LAPTOP STICKER */}
  {items.map((item) => (
    <div 
      key={item.id}
      id={item.id}
      className="desk-item"
      style={item.style}
      onClick={() => setSelectedItem(item)}
    >
      <img src={item.img} alt={item.id} />
      {item.handLabel && (
        <div className="hand-drawn-label">
          <div className="arrow-wrapper">
            <img src={arrowImg} alt="arrow" className="arrow-img" />
          </div>
          <span className="label-text">{item.handLabel}</span>
        </div>
      )}
    </div>
  ))}
</div>

      {/* 3. THE POPUP MODAL */}
      {selectedItem && (
        <div className="popup-overlay" onClick={() => setSelectedItem(null)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              <X size={24} />
            </button>
            
            <h3>{selectedItem.title}</h3>

            <div className="popup-content">
              {/* RENDER SKILL STICKERS */}
              {selectedItem.type === 'icons' && (
                <div className="stickers-grid">
                  {selectedItem.data.map((skill) => (
                    <div key={skill.name} className="sticker-item">
                      <div className="sticker-img-wrapper">
                         <img src={skill.icon} alt={skill.name} />
                      </div>
                      <span className="sticker-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default InteractiveDesk;