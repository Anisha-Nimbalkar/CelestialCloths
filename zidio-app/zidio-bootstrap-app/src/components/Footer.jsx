import React from 'react';
import './Footer.css'; // We'll create this CSS file

function Footer() {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Zidio Clothing. All rights reserved.</p>
      {/* You can add more links or information here */}
    </footer>
  );
}

export default Footer;