import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from './ShopContextProvider'; 
import '../css/homepage.css';
import '../css/product.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useContext(ShopContext); // Use ShopContext

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
    console.log("Finish fetching");
  }, []);

  return (
    <div className="main">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.productID}>
            <h3>{product.productName}</h3>
            {/* Assuming product.images is an array */}
            {/* {product.images.map((image, index) => (
              <img src={image.url} alt={`Image of ${product.name}`} key={index} />
            ))} */}
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <button className="btn-addToCart" onClick={() => addToCart(product)}>
              Add to cart {cartItems[product.productID] > 0 && <> ({cartItems[product.productID]})</>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
