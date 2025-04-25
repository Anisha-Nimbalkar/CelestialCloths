import React from 'react';
import './HeroSection.css'; // We'll create this CSS file
import heroBanner from "../assets/hero banner.mp4";

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
        <video autoplay muted loop playsInline width={700} >
        <source src={heroBanner} type="video/mp4" />
           </video> 
      </div>
    </div>
  );
}

export default HeroSection;