import React, { useState } from 'react';
import '../css/homepage.css';

// real data
const [products, setProducts] = useState([]);
// const products = [
//   // Sample data
//   {
//     id: 1,
//     name: 'Product 1',
//     price: 10.00,
//     description: 'Description for product 1',
//     stock: 20,
//     images: [{ url: '1.jpg' }]
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     price: 20.00,
//     description: 'Description for product 2',
//     stock: 30,
//     images: [{ url: '2.jpg' }]
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     price: 30.00,
//     description: 'Description for product 3',
//     stock: 40,
//     images: [{ url: '3.jpg' }]
//   },
//   // Add more products as needed
// ];

const ProductGrid = () => {
  return (
      <div className="main">
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
            </div>
          ))}
        </div>
      </div>
  );
}

export default ProductGrid;
