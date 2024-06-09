import React from 'react';
import { Link } from 'react-router-dom';
import '../css/homepage.css';

const ComputerPage = () => {
    return (
    <div className="container">
        <div className="main">
            <div className ="item">
                <h2>Laptop</h2>
                    <p>A laptop is a compact and portable computer device.
                                It is designed for use in work, entertainment or study activities on the go without having to use a bulky desktop computer.
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

export default ComputerPage;
