// Navbar.js
import React, { useState } from 'react';
import '../css/homepage.css';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`wrapper ${isActive ? 'active' : ''}`}>
      <div className="top_navbar">
        <div className="hamburger">
          <div className="hamburger__inner" onClick={toggleSidebar}>
            <span className="icon"><i className="fas fa-bars"></i></span>
          </div>
        </div>
        <div className="menu">
          <div className="logo">Categories</div>
          <marquee behavior="" direction="left">Sale news: Up to 50% off on selected items! ---- </marquee>
        </div>
      </div>

      <div className="main_container">
        <Sidebar />
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default Navbar;
