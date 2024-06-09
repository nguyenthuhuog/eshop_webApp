import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
<<<<<<< HEAD

import { ShopContext } from './ShopContext';
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 999c1706d1e7859b1b5fef411239748f4f2bb130
import '../css/homepage.css';
import '../css/product.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
<<<<<<< HEAD
  const { addToCart, cartItems } = useContext(ShopContext);
=======
  const navigate = useNavigate();
>>>>>>> 999c1706d1e7859b1b5fef411239748f4f2bb130

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

<<<<<<< HEAD
=======
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

>>>>>>> 999c1706d1e7859b1b5fef411239748f4f2bb130
  return (
    <div className="main">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.productID} onClick={() => handleProductClick(product.productID)}>
            <h3>{product.productName}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <button className="btn-addToCart" onClick={() => addToCart(product.productID)}>
                Add to cart {cartItems[product.productID] > 0 && <> ({cartItems[product.productID]})</>}
            </button>          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
