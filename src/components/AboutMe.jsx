import React from "react";
import profilePic from "../assets/prasienew.png";
import gradCapImg from '../assets/grad-cap.png';
import doodleIcon from '../assets/grad-cap.png';
import { Github } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="notebook-container">
      {/* --- MAIN HELLO --- */}
      <div className="about-header-row">
        <div className="profile-circle-wrapper">
          <img src={profilePic} alt="Prasie" className="profile-circle-img" />
        </div>

        {/* 2. The Name Tag */}
        <div className="nametag-wrapper">
          <div className="nametag-header">Hello, my name is</div>
          <div className="nametag-name">Prasie</div>
        </div>
      </div>

      {/* --- SWEET & SHORT BIO --- */}
      <div className="bio-section">
        <h1 className="doodle-title">
          Welcome to my <span className="highlight">digital playground.</span>
        </h1>

        <p className="handwritten-text center-text">
          I'm a <strong>tech enthusiast</strong> who believes the internet
          should feel a little less corporate and a lot more{" "}
          <span className="highlight">human</span>. When I'm not coding, I'm
          usually turning matcha into ideas or doodling in my margins.
        </p>
      </div>

      <hr className="doodle-divider-line" />

      {/* --- STATS ROW (Education + Hobbies) --- */}
      <div className="two-column-layout">
        {/* LEFT: School (Sticky Note) */}
        <div className="notebook-col">
          <h3 className="doodle-heading">
  <img src={gradCapImg} alt="Grad Cap" className="inline-doodle-icon" /> 
  The Stats
</h3>
          <div className="sticky-note">
            <div className="pin"></div>
            <div className="note-content">
              <h4>Barnard College of Columbia University</h4>
              <p className="degree">Major: B.S. Computer Science</p>
              <p className="degree">Minor: Statistics + Psychology</p>

              <div className="grade-stamp">Class of 2028</div>
            </div>
          </div>
        </div>
        {/* RIGHT: Hobbies (Stickers) */}
        <div className="notebook-col">
            <div className="activities-list">
              <h3 className="doodle-heading">
                Campus Involvement
              </h3>
              <ul className="doodle-list">
                <li>
                  <span className="emoji-bullet">📢</span> 
                  <strong>Leadership:</strong> 
                  <span className="activity-desc">Girls Who Code (External Engagement Chair), WiCS (Publicity Chair), ADI Community Pillar</span>
                </li>
                <li>
                  <span className="emoji-bullet">🤝</span> 
                  <strong>Mentorship:</strong> 
                  <span className="activity-desc">SWE CS Mentor, GWC CS Mentor, AFE Scholar Ambassador</span>
                </li>
                <li>
                  <span className="emoji-bullet">🌱</span> 
                  <strong>Community:</strong> 
                  <span className="activity-desc">CSTEP Scholar, QuestBridge Chapter @Barnard, Dell Scholar'24, AFE Scholar'24</span>
                </li>
              </ul>
            </div>
          </div>
      </div>

      <hr className="doodle-divider-line" />

      {/* --- THE INSPIRATION (Meta) --- */}
      <section className="notebook-section full-width">
        <h3 className="doodle-heading">💡 Why this look?</h3>

        <div className="story-box">
          <p className="handwritten-text">
            I grew up on the "old web" when sites were personal and weird.
            Inspired by the <strong>CEO of ReadMe's</strong> portfolio and the
            concept of the
            <span className="highlight">Digital Interactive Desk</span>, I
            wanted to build a portfolio that felt like inviting you to sit at my
            actual desk.
          </p>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <p
              className="handwritten-text"
              style={{ fontSize: "1.1rem", marginBottom: "10px" }}
            >
              Want to see the mess behind the magic?
            </p>
            <a
              href="https://github.com/PrasieG01/Prasie-Journal-Repo"
              target="_blank"
              rel="noopener noreferrer"
              className="doodle-github-link"
            >
              <Github size={18} /> Peek at the Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
