import React from "react";
import "./About.css"; 
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import about3 from "../assets/images/about3.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About EcoTrack</h1>
        <p>Your Trusted Partner in Sustainable Waste Management</p>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At EcoTrack, our mission is to create a greener, more sustainable
            future by transforming waste management. We aim to make waste
            disposal smarter, eco-friendly, and efficient for communities and
            businesses alike.
          </p>
        </div>
        <div className="about-content">
          <h2>Why Choose Us?</h2>
          <ul className="features-list">
            <li>
              <i className="icon bi bi-recycle"></i>
              <h3>Eco-Friendly Solutions</h3>
              <p>
                We utilize cutting-edge technology to minimize environmental
                impact through sustainable practices.
              </p>
            </li>
            <li>
              <i className="icon bi bi-people"></i>
              <h3>Expert Team</h3>
              <p>
                Our team consists of passionate professionals dedicated to
                helping you manage waste effectively.
              </p>
            </li>
            <li>
              <i className="icon bi bi-graph-up"></i>
              <h3>Efficiency at Scale</h3>
              <p>
                Whether it's a household or an industrial project, our solutions
                are designed to meet every need efficiently.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={about1} alt="Team Member 1" />
            <h4>Jane Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src={about2} alt="Team Member 2" />
            <h4>John Smith</h4>
            <p>Operations Manager</p>
          </div>
          <div className="team-card">
            <img src={about3} alt="Team Member 3" />
            <h4>Emma Brown</h4>
            <p>Head of Sustainability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
