import {useState, useEffect} from 'react';
import myPhoto from '../assets/my_photo.jpg';

function Home() {
  return (
    <div className="home-container">
      
      {/* LEFT COLUMN: Profile + Thought Cloud */}
      <div className="profile-column">
        
        <div className="doodle-avatar-frame">
          <img 
            src={myPhoto}
            alt="Me" 
            className="doodle-img" 
          />
        </div>

        {/* The Thought Bubble (Floating Next to Head) */}
        <div className="thought-bubble">
          <span className="bubble-tail"></span>
          <p className="bubble-text-small">Hello, my name is</p>
          <h1 className="bubble-name">Prasie</h1>
        </div>

      </div>

      <div className="text-column">
        <div className="arrow-pointer">⤻</div>
        <h2 className="greeting-text">Welcome to my<br/>digital sketchbook.</h2>
        <p className="bio-text">
          I'm a developer who loves turning 
          <span className="highlight"> coffee into code</span> and 
          <span className="highlight"> ideas into doodles</span>.
        </p>
      </div>

    </div>
  );
}

export default Home;