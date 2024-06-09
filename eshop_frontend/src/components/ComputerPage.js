import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import '../css/homepage.css';
import '../css/product.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.00,
    description: 'Description for product 1',
    stock: 20,
    images: [{ url: '1.jpg' }]
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20.00,
    description: 'Description for product 2',
    stock: 30,
    images: [{ url: '1.jpg' }]
  },
  {
    id: 3,
    name: 'Product 3',
    price: 30.00,
    description: 'Description for product 3',
    stock: 40,
    images: [{ url: '1.jpg' }]
  },
];

const ComputerPage = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (product) => {
    setCartItems(prevItems => ({
      ...prevItems,
      [product.id]: (prevItems[product.id] || 0) + 1
    }));
  };

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
          {products.map((product) => (
            <div className="product" key={product.id}>
              <h3>{product.name}</h3>
              {product.images.map((image, index) => (
                <img src={image.url} alt={`Image of ${product.name}`} key={index} />
              ))}
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Description: {product.description}</p>
              <p>Stock: {product.stock}</p>
              <button className="btn-addToCart" onClick={() => addToCart(product)}>
                Add to cart {cartItems[product.id] > 0 && <> ({cartItems[product.id]})</>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComputerPage;
