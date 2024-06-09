import React from 'react';
import { Link } from 'react-router-dom';
import '../css/homepage.css';


const MousePage = () => {
    return (
    <div className="container">
        <div className="main">

            <div className ="item">
                <h2>Mouse</h2>
                <p>Computer mouse is a peripheral device used to control a cursor on a computer screen and perform operations on a graphical interface. 
                    Regular mice are compactly designed, have two, three or more buttons with a scroll wheel placed between the two buttons.
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

export default MousePage;