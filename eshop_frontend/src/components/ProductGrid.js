import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/homepage.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="main">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.productID} onClick={() => handleProductClick(product.productID)}>
            <h3>{product.productName}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;