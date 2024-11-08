import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="lead">
        We are here to help! If you have any queries or feedback, please feel free to get in touch.
      </p>
      
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="btn btn-success">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h4>Contact Information</h4>
        <ul className="list-unstyled">
          <li><strong>Phone:</strong> +971 521239954</li>
          <li><strong>Email:</strong> contact@ecotrack.com</li>
          <li><strong>Address:</strong> PO Box 8326, Green City, Dubai</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
