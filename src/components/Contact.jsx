import React from "react";
import ContactForm from "./ContactForm"; 

const Contact = () => {
  return (
    <div className="contact-page-container">
      <h2 className="section-title">Let's Connect</h2>
      
      <div className="contact-content-wrapper">
        
        {/* LEFT SIDE: Text and Social Buttons */}
        <div className="contact-blurb">
          <h3 className="blurb-heading">Say Hello!</h3>
          <p>
            Whether you want to chat about web development, AI research, or share your favorite matcha spots in the city, my inbox is always open.
          </p>
          
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/prasamsha-gyenwali/" target="_blank" rel="noopener noreferrer" className="social-pill">
              LinkedIn ↗
            </a>
            <a href="https://github.com/PrasieG01" target="_blank" rel="noopener noreferrer" className="social-pill">
              GitHub ↗
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="contact-form-wrapper">
           <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;