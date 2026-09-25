import React, { useState } from "react";
import { experiences } from "../data/experiences";
import { ExternalLink } from "lucide-react";

const Experiences = () => {
  return (
    <div className="wireframe-page">
      
      {/* HEADER SECTION */}
      <div className="wireframe-header">
        <h1>My Journey So Far</h1>
        <p>
          A brief look at my work experiences, the tools I've used, 
          and the projects I've contributed to along the way.
        </p>
        <hr className="wireframe-divider" />
      </div>

      {/* GRID SECTION */}
      <div className="wireframe-grid">
        {experiences.map((exp) => (
          <div className="wireframe-card" key={exp.id}>
            
            {/* Image Placeholder / Box */}
            <div className="wireframe-image-box">
              {exp.image ? (
                <img src={exp.image} alt={exp.company} />
              ) : (
                <div className="empty-box"></div>
              )}
            </div>

            {/* Company & Role */}
            {/* Company, Sticker & Role */}
            <div className="wireframe-title-section">
              <div className="company-header-row">
                <h2>{exp.company}</h2>
                
                {/* Only shows the sticker if both the image and URL exist */}
                {exp.sticker && exp.companyUrl && (
                  <a 
                    href={exp.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sticker-link"
                  >
                    <img 
                      src={exp.sticker} 
                      alt={`${exp.company} link`} 
                      className="clickable-sticker" 
                      style={exp.stickerStyle}
                    />
                  </a>
                )}
              </div>
              <span className="wireframe-role">{exp.role} ({exp.date})</span>
            </div>

            {/* Standard Bullet Points */}
            {exp.details && exp.details.length > 0 && (
              <ul className="wireframe-bullets">
                {exp.details.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}

            {/* Tech Tags */}
            {exp.tags && exp.tags.length > 0 && (
              <div className="wireframe-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="wire-tag">{tag}</span>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;