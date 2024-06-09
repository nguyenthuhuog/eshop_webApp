import React from 'react';
import { Link } from 'react-router-dom';
import '../css/homepage.css';

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
                <div className="product">
                    <img src="1.jpg" alt="Product 1" />
                    <p>Product 1</p>
                    <p>$10.00</p>
                </div>

                <div className="product">
                    <img src="1.jpg" alt="Product 1" />
                    <p>Product 1</p>
                    <p>$10.00</p>
                </div>

                <div className="product">
                    <img src="1.jpg" alt="Product 1" />
                    <p>Product 1</p>
                    <p>$10.00</p>
                </div>

                <div className="product">
                    <img src="1.jpg" alt="Product 1" />
                    <p>Product 1</p>
                    <p>$10.00</p>
                </div>

                <div className="product">
                    <img src="1.jpg" alt="Product 1" />
                    <p>Product 1</p>
                    <p>$10.00</p>
                </div>

                <div className="product">
                    <img src="1.jpg" alt="Product 1" />
                    <p>Product 1</p>
                    <p>$10.00</p>
                </div>
            </div>
        </div>
    </div>    
)};

export default KeyboardPage;
