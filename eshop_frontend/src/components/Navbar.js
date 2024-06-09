import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <div className="top_navbar">
      <div className="hamburger">
        <div className="hamburger__inner">
          <span className="icon"><i className="fas fa-bars"></i></span>
        </div>
      </div>

      <div className="menu">
        <div className="logo">Categories</div>
        <marquee behavior="" direction="left">Sale news: Up to 50% off on selected items! ---- </marquee>
      </div>
    </div>
  );
}

export default Navbar;
