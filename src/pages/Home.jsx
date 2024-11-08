import React from 'react';
import coverImage from '../assets/images/coverimage.png';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className="home-page">
       {/* Image background with overlay */}
      <div className="cover-image-container">
        <img 
          src={coverImage} 
          alt="Cover" 
          className="cover-image" 
        />
        <div className="overlay-content">
          <h1 className="text-white">Welcome to Waste Management System</h1>
          <div>
          <p className="text-white">Eco Track is a smart waste management system that helps citizens, drivers, and administrators work together for efficient waste collection and disposal. Join us in making waste management cleaner, faster, and greener!</p>
        </div>
        </div>
        
      </div>
      
   
    </div>
    
   
  </>
  );
};

export default Home;
