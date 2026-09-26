import React, { useState } from 'react';
import {experiences} from '../data/Experiences.js';
import '../App.css';

const Experiences = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);

  return (
    <div className="experiences-container">
      <h2 className="section-title">My Journey</h2>
      
      <div className="experiences-split-layout">
        
        <div className="timeline-column">
          <div className="doodle-timeline">
            {experiences.map((job) => (
              <div 
                key={job.id} 
                className={`timeline-node ${selectedJob.id === job.id ? 'active' : ''}`}
                onClick={() => setSelectedJob(job)}
              >
                <div className="timeline-marker">
                  {job.sticker ? (
                    <img src={job.sticker} alt={job.company} className="marker-logo" />
                  ) : (
                    <span className="marker-text">{job.company.charAt(0)}</span>
                  )}
                </div>

                <div className="timeline-sticker">
                  <h3 className="sticker-company">{job.company}</h3>
                  <p className="sticker-role">{job.role}</p>
                  <span className="sticker-date">{job.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="detail-column">
          <div key={selectedJob.id} className="job-detail-card">
            
            <div className="detail-header">
              <h2 className="detail-company">
                {selectedJob.companyUrl ? (
                  <a href={selectedJob.companyUrl} target="_blank" rel="noopener noreferrer">
                    {selectedJob.company} ↗
                  </a>
                ) : (
                  selectedJob.company
                )}
              </h2>
              <h3 className="detail-role">{selectedJob.role}</h3>
              <p className="detail-date">{selectedJob.date}</p>
            </div>

            <p className="detail-description">{selectedJob.description}</p>

            <ul className="detail-bullets">
              {selectedJob.details.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            <div className="detail-tech">
              {selectedJob.tags.map((skill, i) => (
                <span key={i} className="tech-tag">{skill}</span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Experiences;