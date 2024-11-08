import React from 'react';
import './Services.css'; // Custom styles
import { FaTrash, FaRecycle, FaCogs, FaLeaf } from 'react-icons/fa'; // Importing icons from react-icons

function Services() {
  return (
    <div className="services-container">
      <div className="services-banner text-center">
        <h1 className="main-heading">Our Services</h1>
        <p className="lead">Your Trusted Partner in Sustainable Waste Management</p> {/* Keep this line */}
      </div>

      <div className="services-section">
        <div className="services-content">
          <h2 className="light-green-heading">What We Offer</h2>
          <p className="offer-description">
            At <strong>Eco Track</strong>, we offer a comprehensive range of waste management services tailored to meet the diverse needs of households, businesses, and municipalities. Our goal is to deliver efficient, eco-friendly solutions that simplify waste management and promote sustainability.
          </p>
        </div>

        <div className="services-box">
          <div className="row mt-5">
            <div className="col-md-6 service-card">
              <FaTrash className="service-icon" />
              <h4>Waste Collection</h4>
              <p>
                We provide timely and reliable waste collection services, ensuring that all waste is gathered and processed responsibly. Our real-time tracking system allows you to monitor collection schedules and ensure seamless waste management.
              </p>
            </div>

            <div className="col-md-6 service-card">
              <FaRecycle className="service-icon" />
              <h4>Recycling Management</h4>
              <p>
                We are committed to reducing waste and conserving resources by offering efficient recycling management services. We sort and process recyclables, helping to reduce landfill use and environmental impact.
              </p>
            </div>

            <div className="col-md-6 service-card">
              <FaCogs className="service-icon" />
              <h4>Customized Waste Solutions</h4>
              <p>
                Every business has unique waste management needs, and we offer custom solutions for commercial, industrial, and residential waste. From regular pickups to on-demand services, we ensure that your waste is handled with care.
              </p>
            </div>

            <div className="col-md-6 service-card">
              <FaLeaf className="service-icon" />
              <h4>Sustainability Consulting</h4>
              <p>
                Our team of experts can help you develop and implement sustainable waste management strategies, ensuring that your business or community reduces its carbon footprint while optimizing efficiency.
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <button className="btn btn-success btn-lg">Get Started with Us</button>
          </div>
        </div>

        <div className="services-footer text-center mt-5">
          <p className="footer-text">
            At Eco Track, we believe in a sustainable future where waste is managed efficiently, and resources are preserved for future generations. Join us in making a positive impact on our planet!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
