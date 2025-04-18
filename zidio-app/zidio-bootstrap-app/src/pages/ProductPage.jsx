import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Details for ID: {productId}</h2>
      {/* You'll add logic here to fetch and display details for this product */}
    </div>
  );
}

export default ProductPage;