// ContactForm.jsx
import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs.sendForm("service_dgcg2wt", "template_i5nx8pe", formRef.current, "4fNbSDSqNxAnxg2Ij")
      .then(
        () => { setStatus("success"); setTimeout(() => setStatus("idle"), 3000); },
        () => { setStatus("error"); }
      );
  };

  return (
    <form className="doodle-form" ref={formRef} onSubmit={sendEmail}>
      <div className="form-group compact">
        <label>Name:</label>
        <input type="text" name="user_name" className="doodle-input" placeholder="Name" required />
      </div>
      <div className="form-group compact">
        <label>Email:</label>
        <input type="email" name="user_email" className="doodle-input" placeholder="Email" required />
      </div>
      <div className="form-group compact">
        <label>Your Message:</label>
        <textarea name="message" className="doodle-input textarea" placeholder="I'd like to chat about..." rows="3" required></textarea>
      </div>
      <button type="submit" className="doodle-send-btn compact-btn" disabled={status === "sending" || status === "success"}>
        {status === "idle" && <>Send It <Send size={16} /></>}
        {status === "sending" && "Sending..."}
        {status === "success" && "Sent! ✅"}
        {status === "error" && "Failed ❌"}
      </button>
    </form>
  );
};

export default ContactForm;