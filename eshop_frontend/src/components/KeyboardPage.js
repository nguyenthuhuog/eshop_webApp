import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import '../css/homepage.css';
import { PRODUCTS } from './products'; // Import the PRODUCTS array
import { Product } from './Product';
import '../css/homepage.css';
import '../css/product.css';

const KeyboardPage = () => {
    return (
    <div className="container">
        <div className="main">

            <div className ="item">
                <h2>Keyboard</h2>
                <p>A keyboard is an input device for a computer, used to enter data and control computer functions. 
                    The keyboard includes a series of pressing keys, alphanumeric keys, special characters and function keys to perform tasks.
                </p>
            </div>
            <div className="product-grid">
            {PRODUCTS.map((product) => (
              <Product data ={product} />
            ))}
          </div>
            <ProductGrid categoryName = "keyboard"/>
        </div>
    </div>    
)};

export default KeyboardPage;