import {useState, useEffect} from 'react';
import myPhoto from '../assets/my_photo.jpg';

function Home() {
  return (
    <div className="home-container">
      
      <h1 className="head-title">
        Welcome to Prasie's Journal...
      </h1>

      <div className="content-row">
        <div className="image-wrapper">
          <img src={myPhoto} alt="Prasamsha Gyenwali Headshot" className="profile-photo" />
        </div>

      <p className="body-text">
        Welcome to my little corner of the internet! My name is Prasamsha Gyenwali. 
        I go by Prasie, I'm a sophomore at Barnard College of Columbia University 
        majoring in Computer Science. I’m passionate about problem-solving, continuous learning, and creating meaningful impact through technology. 
        As an aspiring software engineer, I’m eager to grow my coding expertise while contributing to projects 
        that give back to the community and make tech more accessible. I’m especially committed to empowering women in STEM and using my skills to help build a more inclusive and innovative future.
      </p>
      </div>
    </div>
  );
}

export default Home;