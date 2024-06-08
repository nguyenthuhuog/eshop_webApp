import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div id="header">
      <div className="logo">
        <a href="index.html"> <img src="img/logo1.png" alt="Logo" /></a>
      </div>

      <div className="shop-name">H2T Computer Shop</div>

      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <i className="fas fa-search"></i>
      </div>

      <div className="auth-buttons">
        <div className="contact-info">
          <button onClick={() => window.location.href = 'tel:19001900'}>
            <i className="fas fa-phone-alt"></i>
            <span>1900.1900</span>
          </button>
          <div className="dropdown">
            <button className="btn-location" onClick={() => window.location.href = '#location'}>
              <i className="fas fa-map-marker-alt"></i>
              <span>Our location</span>
            </button>
            <div className="dropdown-content">
              <p><i className="fas fa-thumbtack"></i> No.1, Dai Co Viet, Hai Ba Trung, Ha Noi</p>
              <p><i className="fas fa-thumbtack"></i>No.2, District seven, Ho Chi Minh</p>
            </div>
          </div>
          <button onClick={() => window.location.href = 'contact.html'}>
            <i className="fas fa-headset"></i>
            <span>Contact us</span>
          </button>
          <button onClick={() => window.location.href = '#news'}>
            <i className="fas fa-newspaper"></i>
            <span>Tech news</span>
          </button>
          <button className="btn-cart" onClick={() => window.location.href = '#cart'}>
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button className="btn btn-login" onClick={() => openModal('loginModal')}>Login</button>
          <button className="btn btn-register" onClick={() => openModal('registerModal')}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
