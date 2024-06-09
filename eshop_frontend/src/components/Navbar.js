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
      
      <div className="main_container">
        <div className="sidebar">
          <div className="sidebar__inner">
            <ul>
              <li>
                <a href="computer.html">
                  <span className="icon"><i className="fas fa-laptop"></i></span>
                  <span className="title">Computer & Laptop</span>
                </a>
              </li>
              <li>
                <a href="keyboard.html">
                  <span className="icon"><i className="fas fa-keyboard"></i></span>
                  <span className="title">Keyboards</span>
                </a>
              </li>
              <li>
                <a href="mouse.html">
                  <span className="icon"><i className="fas fa-computer-mouse"></i></span>
                  <span className="title">Mouses</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container">
          <div className="main">
            <div className="banner">
              <img src="img/banner/1.png" className="visible" alt="Banner 1"/>
              <img src="img/banner/2.jpg" className="hidden" alt="Banner 2"/>
              <img src="img/banner/3.jpg" className="hidden" alt="Banner 3"/>
              <img src="img/banner/4.jpg" className="hidden" alt="Banner 4"/>
              <img src="img/banner/5.png" className="hidden" alt="Banner 5"/>
            </div>
            
            <div className="item">
              <section className="sale-news">
                <h2>Sale News</h2>
                <ul>
                  <li><i className="fas fa-fire"></i> Up to 50% off on selected items!</li>
                  <li><i className="fas fa-truck"></i> Free shipping on orders over $100!</li>
                  <li><i className="fas fa-star"></i> New arrivals are in stock now!</li>
                </ul>
              </section>
            </div>
            
            <div className="product-grid">
              <div className="product">
                <img src="1.jpg" alt="Product 1"/>
                <p>Product 1</p>
                <p>$10.00</p>
              </div>
              <div className="product">
                <img src="1.jpg" alt="Product 2"/>
                <p>Product 2</p>
                <p>$20.00</p>
              </div>
              <div className="product">
                <img src="1.jpg" alt="Product 3"/>
                <p>Product 3</p>
                <p>$30.00</p>
              </div>
            </div>
            
            <div className="item" id="news">
              <h2>Don't Forget!!!</h2>
              <ul>
                <li><i className="fas fa-envelope"></i> Sign up for our newsletter and get 10% off your first order!</li>
                <li><i className="fas fa-blog"></i> Check out our new blog post on the latest tech trends!</li>
                <li><i className="fas fa-share-alt"></i> Follow us on social media for exclusive deals and updates!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
