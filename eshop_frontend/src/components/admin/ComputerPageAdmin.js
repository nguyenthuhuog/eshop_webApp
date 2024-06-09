import React, { useState } from 'react';
import { PRODUCTS } from '../products'; // Import the PRODUCTS array
import { Product } from '../Product';
import '../css/homepage.css';
import '../css/product.css';

const ComputerPage = () => {
    const [products, setProducts] = useState(PRODUCTS);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <div className="container">
            <div className="main">
                <div className="item">
                    <h2>Laptop</h2>
                    <p>
                        A laptop is a compact and portable computer device. 
                        It is designed for use in work, entertainment, or study activities on the go without having to use a bulky desktop computer.
                    </p>
                </div>

                <div className="product-grid">
                    {products.map((product) => (
                        <Product key={product.id} data={product} deleteProduct={deleteProduct} />
                    ))}
                </div>

                <button onClick={() => addProduct({
                    id: products.length + 1, // Simple ID generation
                    productName: 'New Product',
                    price: 100,
                    productImage: 'path/to/image.jpg',
                    description: 'New product description',
                    stock: 10
                })}>
                    Add New Product
                </button>
            </div>
        </div>
    );
};

export default ComputerPage;
