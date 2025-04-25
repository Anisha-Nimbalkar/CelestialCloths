import React from 'react';
import './CategorySection.css'; // We'll create this CSS file
import myImage1 from '../assets/superhero.jpg'; 
import myImage2 from '../assets/stary night.jpg';
import myImage3 from '../assets/comic.jpg';

function CategorySection() {
  return (
    <div className="category-section">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        <div className="category-card superhero-theme">
          <img src={myImage1} alt="Superheroes" width={100} height={150}/>
          <h3>Superheroes</h3>
          <button>View Collection</button>
        </div>
        <div className="category-card starry-night-theme">
          <img src={myImage2} alt="Starry Night" width={100} height={150}/>
          <h3>Starry Night</h3>
          <button>View Collection</button>
        </div>
        <div className="category-card comics-theme">
          <img src={myImage3} alt="Comics" width={100} height={350}/>
          <h3>Comics</h3>
          <button>View Collection</button>
        </div>
        {/* You can add more categories here */}
      </div>
    </div>
  );
}

export default CategorySection;