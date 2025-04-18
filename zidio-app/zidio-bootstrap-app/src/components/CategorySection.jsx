import React from 'react';
import './CategorySection.css'; // We'll create this CSS file

function CategorySection() {
  return (
    <div className="category-section">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        <div className="category-card superhero-theme">
          <img src="https://via.placeholder.com/200/4682B4/FFFFFF?Text=Superhero" alt="Superheroes" />
          <h3>Superheroes</h3>
          <button>View Collection</button>
        </div>
        <div className="category-card starry-night-theme">
          <img src="https://via.placeholder.com/200/483D8B/FFFFFF?Text=Starry+Night" alt="Starry Night" />
          <h3>Starry Night</h3>
          <button>View Collection</button>
        </div>
        <div className="category-card comics-theme">
          <img src="https://via.placeholder.com/200/DC143C/FFFFFF?Text=Comics" alt="Comics" />
          <h3>Comics</h3>
          <button>View Collection</button>
        </div>
        {/* You can add more categories here */}
      </div>
    </div>
  );
}

export default CategorySection;