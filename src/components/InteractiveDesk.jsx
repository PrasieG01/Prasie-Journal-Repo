import React, { useState, useRef } from "react";
import { X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

/* --- ASSETS --- */
import deskBg from "../assets/desk-bg.png";
import prasieImg from "../assets/prasie.png";
import laptopImg from "../assets/Laptop.png";
import corkImg from "../assets/Corkboard.png";
import toteImg from "../assets/Totebag.png";
import booksImg from "../assets/BOOKS.png";
import headphonesImg from "../assets/Headphones.png";
import journalImg from "../assets/Journal.png";
import matchaImg from "../assets/Matcha.png";
import phoneImg from "../assets/IPhone.png";

import html_icon from "../assets/html_icon.jpg";
import java_icon from "../assets/java_icon.jpg";
import css_icon from "../assets/css_icon.jpg";
import js_icon from "../assets/js_icon.jpg";
import react_icon from "../assets/react_icon.jpg";
import python_icon from "../assets/Python_icon.jpg";
import sql_icon from "../assets/sql_icon.jpg";
import Git_icon from "../assets/Git_icon.jpg";
import figma_icon from "../assets/figma_icon.jpg";
import aws_icon from "../assets/aws_icon.jpg";
import c_icon from "../assets/c_icon.png";

import githubDoodle from "../assets/github.png";
import linkedinDoodle from "../assets/linkedin.png";
import emailDoodle from "../assets/gmail.png";
import arrowImg from "../assets/arrow.png";
import moobarImg from "../assets/moobar.png";
import sipsImg from "../assets/sips.png";
import blankstreetImg from "../assets/blankstreet.png";
import mollyteaImg from "../assets/mollytea.png";
import heyteaImg from "../assets/heytea.png";

import vinylGif from '../assets/vinyl.gif';

const InteractiveDesk = ({ onNavigate }) => {
  const formRef = useRef();
  const [selectedItem, setSelectedItem] = useState(null);
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_dgcg2wt",
        "template_i5nx8pe",
        formRef.current,
        "4fNbSDSqNxAnxg2Ij",
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          setTimeout(() => setStatus("idle"), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        },
      );
  };

  // CALCULATED POSITIONS
  // Base Width: 1434px | Base Height: 800px
  const items = [
    {
      id: "Corkboard",
      img: corkImg,
      handLabel: "My Experiences",
      path: "experiences",
      style: { left: "11.92%", top: "7.50%", width: "26.29%", zIndex: 1 },

      arrowStyle: {
        top: "105%", 
        left: "10%", 
        transform: "rotate(310deg)", 
        width: "40%" 
      },
      labelStyle: {
        top: "100%", 
        left: "20%",
        transform: "rotate(-30deg)", 
        width: "10%"
      }
    },
    {
      id: "Totebag",
      img: toteImg,
      handLabel: "Hobbies",
      title: "The Explorer",
      type: "info",
      data: "I love traveling, photography, and collecting memories. My totebag holds the tools I use to capture the world.",
      style: { left: "71.62%", top: "2.75%", width: "15.27%", zIndex: 2 },

      arrowStyle: {
        top: "95%", 
        left: "85%", 
        transform: "rotate(-160deg)", 
        width: "60%"
      },
      labelStyle: {
        top: "105%", 
        left: "95%",
        transform: "rotate(-5deg)", 
        width: "20%"
      }
    },
    {
      id: "Prasie",
      img: prasieImg,
      handLabel: "About Me",
      path: "about",
      style: { left: "39.12%", top: "5.25%", width: "20.64%", zIndex: 2 },

      hitboxStyle: {
        top: "0%", 
        left: "4.5%",  
        width: "80%", 
        height: "95%" 
      },

      arrowStyle: {
        top: "2%", 
        left: "80%", 
        transform: "rotate(140deg)", 
        width: "50%" 
      },
      labelStyle: {
        top: "100%", 
        left: "65%",
        transform: "rotate(-20deg)", 
        width: "20%"
      }
    },
    {
      id: "Laptop",
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
        { name: "C", icon: c_icon },
      ],
      style: { left: "43.93%", top: "34.75%", width: "26.78%", zIndex: 5 },

      arrowStyle: {
        top: "105%", 
        left: "45%",
        transform: "rotate(-150deg)", 
        width: "35%" 
      },

      hitboxStyle: {
        top: "10%",    
        left: "5%",   
        width: "100%",  
        height: "90%",  
        clipPath: "polygon(40% 0%, 100% 0%, 80% 100%, -8% 90%)"      
       },
      
      labelStyle: {
        top: "100%", 
        left: "45%",
        transform: "rotate(-20deg)", 
        width: "20%"
      }
    },
    {
      id: "Books",
      img: booksImg,
      handLabel: "Books",
      title: "What I'm Learning",
      type: "info",
      data: "A peek into the books, courses, and algorithms keeping me busy lately.",
      style: { left: "20.15%", top: "46.63%", width: "12.90%", zIndex: 5 },

      arrowStyle: {
        top: "105%", 
        left: "35%", 
        transform: "rotate(-140deg)", 
        width: "70%" 
      },
      labelStyle: {
        top: "100%", 
        left: "45%",
        transform: "rotate(-120deg)", 
        width: "120%"
      }
    },

    {
      id: "Headphones",
      img: headphonesImg,
      handLabel: "Vibes",
      title: "Currently Listening",
      type: "music",
      data: [
        { 
          title: "Beautiful Boy", 
          artist: "Wes Bos & Scott Tolinski", 
          time: "AudioBook",
          link: "https://syntax.fm/"
        },
        { 
          title: "Good Days", 
          artist: "SZA", 
          time: "Song",
          link: "https://open.spotify.com/track/3YJJjEN5snEEpUz382OegP" 
        },

        { 
          title: "Good Days", 
          artist: "SZA", 
          time: "Song",
          link: "https://open.spotify.com/track/3YJJjEN5snEEpUz382OegP" 
        },

        { 
          title: "Good Days", 
          artist: "SZA", 
          time: "Song",
          link: "https://open.spotify.com/track/3YJJjEN5snEEpUz382OegP" 
        },

        { 
          title: "Lofi Girl (Beats to code to)", 
          artist: "ChilledCow", 
          time: "Playlist",
          link: "https://www.youtube.com/watch?v=jfKfPfyJRdk" 
        }
      ],
      style: { left: "32.29%", top: "50.00%", width: "8.79%" },

      arrowStyle: {
        top: "95%", /* 85% down from the top of the laptop */
        left: "55%", /* Slightly right of center */
        transform: "rotate(-150deg)", /* Points it at the laptop */
        width: "110%" /* Size of the arrow */
      },
      labelStyle: {
        top: "100%", /* Sits right under the laptop */
        left: "65%",
        transform: "rotate(-20deg)", /* Cute tilted text */
        width: "20%"
      }
    },
    
    {
      id: "Journal",
      img: journalImg,
      handLabel: "Ideas",
      title: "My Notebook",
      type: "info",
      data: "Where all the messy wireframes and midnight ideas live.",
      style: { left: "68.55%", top: "56.88%", width: "7.46%", zIndex: 7 },

      arrowStyle: {
        top: "125%", 
        left: "-46%",
        transform: "rotate(310deg)", 
        width: "105%"
      },
      labelStyle: {
        top: "100%", 
        left: "65%",
        transform: "rotate(-20deg)",
        width: "15%"
      }
    },
    {
      id: "Matcha",
      img: matchaImg,
      handLabel: "Fuel",
      title: "Matcha Tour",
      type: "gallery", 
      data: [
        { name: "📍The Moo Bar, Seattle WA", img: moobarImg },
        { name: "📍Sips & Bibble, NY", img: sipsImg },
        { name: "📍Blank Street, NY", img: blankstreetImg },
        { name: "📍Molly Tea, NY", img: mollyteaImg },
        { name: "📍Hey Tea, NY", img: heyteaImg }
      ],
      style: { left: "74.82%", top: "54.13%", width: "8.5%" },

      arrowStyle: {
        top: "125%", 
        left: "-46%", 
        transform: "rotate(310deg)", 
        width: "105%" 
      },
      labelStyle: {
        top: "100%", 
        left: "65%",
        transform: "rotate(-20deg)",
        width: "15%"
      }
    },
    {
      id: "Phone",
      img: phoneImg,
      handLabel: "Say hi!",
      type: "contact",
      socials: [
        { name: "LinkedIn", link: "https://www.linkedin.com/in/prasamsha-gyenwali/" },
        { name: "GitHub", link: "https://github.com/PrasieG01" },
        { name: "Email", link: "mailto:gyenwaliprasamsha@gmail.com" },
      ],
      style: { left: "76.36%", top: "64.50%", width: "7.18%", zIndex: 9 },

      arrowStyle: {
        top: "100%",
        left: "95%",
        transform: "rotate(-160deg)", 
        width: "120%" 
      },
      labelStyle: {
        top: "60%", 
        left: "55%",
        transform: "rotate(-20deg)", 
        width: "20%"
      }
    }
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
          style={item.style}
        >
          {/* The image itself */}
          <img src={item.img} alt={item.id} />

          <div 
            className="hitbox"
            onClick={() => {
              if (item.path) {
                onNavigate(item.path); 
              } else {
                setSelectedItem(item);
              }
            }}
            style={{
              position: "absolute",
              cursor: "pointer",
              top: item.hitboxStyle?.top || "0%",
              left: item.hitboxStyle?.left || "0%",
              width: item.hitboxStyle?.width || "100%",
              height: item.hitboxStyle?.height || "100%",
              clipPath: item.hitboxStyle?.clipPath || "none",
            }}
          ></div>

          {item.handLabel && (
            <div className="hand-drawn-wrapper">
              <div className="arrow-container" style={item.arrowStyle || {}}>
                <img src={arrowImg} alt="arrow" className="arrow-img" />
              </div>

              <div className="label-container" style={item.labelStyle || {}}>
                <span className="label-text">{item.handLabel}</span>
              </div>
            </div>
          )}
        </div>
      ))})
      </div>

      {selectedItem && (
        <div className="popup-overlay" onClick={() => setSelectedItem(null)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              <X size={24} />
            </button>

            <h3>{selectedItem.title}</h3>

            <div className="popup-content">
              {selectedItem.type === "icons" && (
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
              {selectedItem.type === "info" && (
                <div className="info-content">
                  <p className="info-text">{selectedItem.data}</p>

                  {selectedItem.cta && (
                    <a
                      href={selectedItem.cta.link}
                      className="doodle-github-link"
                      onClick={(e) => {
                        e.preventDefault(); // Stop page reload

                        if (selectedItem.cta.link.startsWith("/")) {
                          const pageName = selectedItem.cta.link.substring(1);

                          onNavigate(pageName);
                        } else {
                          window.open(selectedItem.cta.link, "_blank");
                        }
                      }}
                    >
                      {selectedItem.cta.text} ➜
                    </a>
                  )}
                </div>
              )}

              {/* Type: MUSIC (Vinyl Player & Tracklist) */}
              {selectedItem.type === "music" && (
                <div className="music-popup-container">

                  {/* The Canva Vinyl GIF */}
                  <div className="vinyl-gif-wrapper">
                    <img src={vinylGif} alt="Spinning Vinyl" className="vinyl-gif" />
                  </div>
                  {/* The Clean Tracklist */}
                  <ul className="music-list">
                    {selectedItem.data.map((track, index) => (
                      <li key={index} className="music-item">
                        <a 
                          href={track.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="music-link"
                        >
                          <span className="track-title">{track.title}</span>
                          <span className="track-artist"> by {track.artist}</span>
                          <span className="track-badge">{track.time}</span>
                        </a>
                      </li>
                    ))}
                  </ul>

                </div>
              )}

              {/* Type: GALLERY (Polaroid Carousel) */}
              {selectedItem.type === "gallery" && (
                <div className="polaroid-carousel-container">
                  <div className="polaroid-track">
                    {selectedItem.data.map((place, index) => (
                      <div key={index} className="polaroid-card">
                        <div className="polaroid-photo">
                          <img src={place.img} alt={place.name} />
                        </div>
                        <span className="polaroid-caption">{place.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="swipe-hint">← slide to see more →</p>
                </div>
              )}

              {selectedItem.type === "contact" && (
                <div className="contact-doodle-container">
                  <div className="socials-header">
                    <h3 className="doodle-heading">Connect with me:</h3>
                    <div className="social-icons-row">
                      {selectedItem.socials.map((social) => (
                        <a
                          key={social.name}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="doodle-social-icon"
                          title={social.name}
                        >
                          {social.name === "GitHub" && (
                            <img src={githubDoodle} alt="GitHub" width="30" />
                          )}
                          {social.name === "LinkedIn" && (
                            <img
                              src={linkedinDoodle}
                              alt="LinkedIn"
                              width="30"
                            />
                          )}
                          {social.name === "Email" && (
                            <img src={emailDoodle} alt="Email" width="30" />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>

                  <hr className="doodle-divider" />

                  <form
                    className="doodle-form"
                    ref={formRef}
                    onSubmit={sendEmail}
                  >
                    <div className="form-group compact">
                      <label>Name:</label>
                      <input
                        type="text"
                        className="doodle-input"
                        placeholder="Name"
                      />
                    </div>

                    <div className="form-group compact">
                      <label>Email:</label>
                      <input
                        type="email"
                        className="doodle-input"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group compact">
                      <label>Your Message:</label>
                      <textarea
                        className="doodle-input textarea"
                        placeholder="I'd like to chat about..."
                        rows="3"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="doodle-send-btn compact-btn"
                      disabled={status === "sending" || status === "success"}
                    >
                      {status === "idle" && (
                        <>
                          Send It <Send size={16} />
                        </>
                      )}
                      {status === "sending" && "Sending..."}
                      {status === "success" && "Sent! ✅"}
                      {status === "error" && "Failed ❌"}
                    </button>
                  </form>
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
