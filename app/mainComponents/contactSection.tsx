'use client';

import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <form
      className="contactSection"
      id="Contact"
      action="https://formspree.io/f/mwpkrzkr"
      method="POST"
    >
      <div className="contactTextAnimation">
        <h1 className="contatcAnimation">Contact to start!</h1>
      </div>

      <div className="contactText">
        <div className="emailContainer">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            title="Your Email"
            required
          />
        </div>

        <div className="messageContainer">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            title="Your Message"
            required
          />
        </div>

        <button type="submit" className="btn">
          Submit Message
        </button>
      </div>
    </form>
  );
};

export default ContactSection;
