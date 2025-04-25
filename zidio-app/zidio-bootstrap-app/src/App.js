import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/Users/mihirpandey/CelestialCloths/zidio-app/zidio-bootstrap-app/src/pages/Home';
import CategoryPage from './pages/CategoryPage'; // Example for a category page
import ProductPage from './pages/ProductPage'; // Example for a product page
import CartSidebar from './components/CartSidebar';
import Header from './components/Header'; // Assuming you have a Header component
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Render the header on all pages */}
        <CartSidebar /> {/* Assuming the cart sidebar is always present or its visibility is managed elsewhere */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Example route for categories */}
            <Route path="/product/:productId" element={<ProductPage />} /> {/* Example route for products */}
            {/* Add more routes for other pages like about us, contact, etc. */}
          </Routes>
        </div>
        <Footer /> {/* Render the footer on all pages */}
      </div>
    </Router>
  );
}

export default App;