import React, { useState } from 'react';
import { experiences } from '../data/experiences';

function DoodlePolaroid({ exp, index, onExpand }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const rotation = index % 2 === 0 ? '-2deg' : '3deg';

  return (
    <div 
      className="polaroid-doodle"
      style={{ transform: `rotate(${rotation})` }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="washi-tape"></div>

      <div className="polaroid-content">
        {!isFlipped ? (
          /* FRONT SIDE */
          <>
            <div className="photo-sketch">
              {exp.image ? <img src={exp.image} alt={exp.role} /> : <div className="no-photo-placeholder">No Img</div>}
            </div>
            <div className="marker-caption">{exp.company}</div>
          </>
        ) : (
          /* BACK SIDE */
          <div className="polaroid-back-doodle">
            <h3>{exp.role}</h3>
            <span className="doodle-date">{exp.date}</span>
            <div className="scribble-divider"></div>
            
            {/* Short description */}
            <p>{exp.description}</p>
            {exp.link && (
            <a 
              href={exp.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="doodle-github-link"
              onClick={(e) => e.stopPropagation()} 
            >
            View Project 🔗
      </a>
      )}
            <button 
              className="read-more-btn"
              onClick={(e) => {
                e.stopPropagation(); // Stop card from flipping back
                onExpand(exp);       // Open the window
              }}
            >
              See Details ➜
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* Main Page Container */
function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <div className="page-content experience-page">
      <h2 className="head-title">My Journey</h2>

      <div className="trail-container">
      <div className="trail-line"></div>
        {experiences.map((exp, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          return (
            /* Wrapper for Zig-Zag Positioning */
            <div key={exp.id} className={`trail-stop ${side}`}>
              
              {/* The Dot on the center line */}
              <div className="trail-marker"></div>
              
              {/* The Dashed line connecting card to center */}
              <div className="trail-connector"></div>
              <DoodlePolaroid 
                exp={exp} 
                index={index} 
                onExpand={setSelectedExp} 
              />
            </div>
          );
        })}
      </div>

      {selectedExp && (
        <div className="doodle-overlay" onClick={() => setSelectedExp(null)}>
          <div className="doodle-modal" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-scribble" onClick={() => setSelectedExp(null)}>
              X
            </button>
            
            <h2>{selectedExp.role}</h2>
            <h3>@ {selectedExp.company}</h3>
            
            {/* THE BULLET POINTS */}
            <ul>
              {/* If details exist, map them. Else show description */}
              {selectedExp.details ? (
                selectedExp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))
              ) : (
                <li>{selectedExp.description}</li>
              )}
            </ul>

          </div>
        </div>
      )}

    </div>
  );
}

export default Experience;