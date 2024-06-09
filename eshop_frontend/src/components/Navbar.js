import React, { useEffect, useRef } from 'react';
import '../css/homepage.css';

const Navbar = () => {
  const hamburgerInnerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleHamburgerClick = () => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.toggle('active');
      }
    };

    if (hamburgerInnerRef.current) {
      hamburgerInnerRef.current.addEventListener('click', handleHamburgerClick);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (hamburgerInnerRef.current) {
        hamburgerInnerRef.current.removeEventListener('click', handleHamburgerClick);
      }
    };
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="top_navbar">
        <div className="hamburger">
          <div className="hamburger__inner" ref={hamburgerInnerRef}>
            <span className="icon"><i className="fas fa-bars"></i></span>
          </div>
        </div>
        <div className="menu">
          <div className="logo">Categories</div>
          <marquee behavior="" direction="left">Sale news: Up to 50% off on selected items! ---- </marquee>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
