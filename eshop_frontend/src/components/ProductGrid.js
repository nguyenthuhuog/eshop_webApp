import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/homepage.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

  useEffect(() => {
    console.log("Start fetching");
    fetchProducts();
    console.log("Finish fetching")
  }, []);
  return (
    <div className="main">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.productID}>
            <h3>{product.productName}</h3>
            {/* {product.images.map((image, index) => (
              <img src={image.url} alt={`Image of ${product.name}`} key={index} />
            ))} */}
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
