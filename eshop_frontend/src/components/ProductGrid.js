import React from 'react';
import './App.css';

const products = [
  // Sample data
  {
    id: 1,
    name: 'Product 1',
    price: 10.00,
    description: 'Description for product 1',
    stock: 20,
    images: [{ url: '1.jpg' }]
  },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="product-grid">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <h3>{product.name}</h3>
              {product.images.map((image, index) => (
                <img src={image.url} alt={`Image of ${product.name}`} key={index} />
              ))}
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
              <p>Stock: {product.stock}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
