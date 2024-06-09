import React, { useState } from 'react';
import { PRODUCTS } from './products'; // Import the PRODUCTS array
import { Product } from './Product';
import '../css/homepage.css';
import '../css/product.css';

// const ComputerPage = (props) => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (product) => {
//     setCartItems(prevItems => ({
//       ...prevItems,
//       [product.id]: (prevItems[product.id] || 0) + 1
//     }));
//   };

const ComputerPage = () =>{
  return (
    <div className="container">
      <div className="main">
        <div className="item">
          <h2>Laptop</h2>
          <p>
            A laptop is a compact and portable computer device.
            It is designed for use in work, entertainment or study activities on the go without having to use a bulky desktop computer.
          </p>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product) => (
            <Product data ={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComputerPage;
