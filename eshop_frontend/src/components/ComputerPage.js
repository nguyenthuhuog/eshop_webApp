import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const ComputerPage = () => {
    return (
        <div className="wrapper">
            <div className="top_navbar">
                <div className="hamburger">
                    <div className="hamburger__inner">
                        <span className="icon"><i className=" fas fa-regular fa-bars"></i></span>
                    </div>
                </div>

                <div className="menu">
                    <div className="logo">Categories</div>
                    <marquee behavior="" direction="left">Sale news: Up to 50% off on selected items! ---- </marquee>
                </div>
            </div>

            <div className="main_container">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <ul>
                            <li>
                                <Link to="/computer" className="active">
                                    <span className="icon"><i className=" fas fa-solid fa-laptop"></i></span>
                                    <span className="title">Computer & Laptop</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/keyboard">
                                    <span className="icon"><i className="fas fa-solid fa-keyboard"></i></span>
                                    <span className="title">Keyboards</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/mouse">
                                    <span className="icon"><i className="fas fa-solid fa-computer-mouse"></i></span>
                                    <span className="title">Mouses</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="main">
                        <div className="product-grid">
                            <div className="product">
                                <img src="1.jpg" alt="Product 1" />
                                <p>Product 1</p>
                                <p>$10.00</p>
                            </div>

                            <div className="product">
                                <img src="1.jpg" alt="Product 2" />
                                <p>Product 2</p>
                                <p>$20.00</p>
                            </div>

                            <div className="product">
                                <img src="1.jpg" alt="Product 3" />
                                <p>Product 3</p>
                                <p>$30.00</p>
                            </div>

                            <div className="product">
                                <img src="1.jpg" alt="Product 1" />
                                <p>Product 1</p>
                                <p>$10.00</p>
                            </div>

                            <div className="product">
                                <img src="1.jpg" alt="Product 2" />
                                <p>Product 2</p>
                                <p>$20.00</p>
                            </div>

                            <div className="product">
                                <img src="1.jpg" alt="Product 3" />
                                <p>Product 3</p>
                                <p>$30.00</p>
                            </div>

                            <div className="product">
                                <img src="1.jpg" alt="Product 1" />
                                <p>Product 1</p>
                                <p>$10.00</p>
                            </div>

                            <div className="product">
                                <img src="1.jpg" alt="Product 2" />
                                <p>Product 2</p>
                                <p>$20.00</p>
                            </div>

                            <div className="product">
                                <img src="1.jpg" alt="Product 3" />
                                <p>Product 3</p>
                                <p>$30.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerPage;
