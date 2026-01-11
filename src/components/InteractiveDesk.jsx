import React from 'react';
import { useNavigate } from 'react-router-dom';

/* --- ASSETS --- */
import deskBg from '../assets/Table.png';
import laptopImg from '../assets/Laptop.png';
import journalImg from '../assets/Journal.png';
import toteImg from '../assets/Totebag.png';
import corkImg from '../assets/Corkboard.png';
import bobaImg from '../assets/Boba.png';
import booksImg from '../assets/BOOKS.png';
import phoneImg from '../assets/IPhone.png';
import headphonesImg from '../assets/Headphones.png';

const InteractiveDesk = () => {
  const navigate = useNavigate();

  // CALCULATED POSITIONS
  // Base Width: 1434px | Base Height: 800px
  const items = [
  { id: 'Laptop', img: laptopImg, link: '/projects' },
  { id: 'Journal', img: journalImg, link: '/blog' },
  { id: 'Totebag', img: toteImg, link: '/hobbies' },
  { id: 'Headphones', img: headphonesImg, link: '/music' },
  { id: 'BOOKS', img: booksImg, link: '/blog' },
  { id: 'Boba', img: bobaImg, link: '/about' },
  { id: 'IPhone', img: phoneImg, link: '/contact' },
  { id: 'Corkboard', img: corkImg, link: '/projects' },
];

return (
  <div className="desk-container">
    <div className="desk-wrapper">
      <img src={deskBg} alt="Desk" className="desk-bg" />
      
      {items.map((item) => (
        <div 
          key={item.id}
          id={item.id} 
          className="desk-item"
          onClick={() => navigate(item.link)}
        >
          <img src={item.img} alt={item.id} />
        </div>
      ))}
    </div>
  </div>
);
};

export default InteractiveDesk;