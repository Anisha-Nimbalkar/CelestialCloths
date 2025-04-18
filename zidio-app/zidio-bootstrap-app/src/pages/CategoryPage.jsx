import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams();

  return (
    <div>
      <h2>{categoryName} Collection</h2>
      {/* You'll add logic here to fetch and display products for this category */}
    </div>
  );
}

export default CategoryPage;