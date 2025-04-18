import React from 'react';
import './HeroSection.css'; // We'll create this CSS file

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Light Up Your Style with Heroic Flair</h1>
        <p>Explore our unique collection blending the magic of starry nights and the power of superheroes.</p>
        <button className="shop-now-button">Shop Now</button>
      </div>
      <div className="hero-image">
        {/* You can replace this with an actual image */}
        <img src="https://via.placeholder.com/600/0000FF/FFFFFF?Text=Hero+Banner" alt="Hero Banner" />
      </div>
    </div>
  );
}

export default HeroSection;