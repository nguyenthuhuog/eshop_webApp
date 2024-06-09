import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/productdetail.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log(`Fetching product details for product ID: ${id}`);
                const response = await axios.get(`http://localhost:8080/api/products/${id}`);
                setProduct(response.data);
                console.log('Product details:', response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        const fetchImages = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/products/${id}/images`);
                setImages(response.data);
                console.log('Product images:', response.data);
            } catch (error) {
                console.error('Error fetching product images:', error);
            }
        };

        fetchProduct();
        fetchImages();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const productDetailsTitle = "Thông số sản phẩm";
    const productDetails = product.description.split(';').map((detail, index) => (
        <p key={index} className="product-details">{detail.trim()}</p>
    ));

    return (
        <div className="product-detail-container">
            <div className="product-image">
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <img key={index} src={image.image_url} alt={product.productName} />
                    ))
                ) : (
                    <img src="/path/to/default-image.jpg" alt="Default" />
                )}
            </div>
            <div className="product-info">
                <h2 className="product-name">{product.productName}</h2>
                <p className="product-price">Price: ${product.price.toFixed(2)}</p>
                <div>
                    <p className="product-details-title">{productDetailsTitle}</p>
                    {productDetails}
                </div>
                <p className="product-stock">Stock: {product.stock}</p>
                <div className="cart-section">
                    <div className="quantity-selector">
                        <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                    </div>
                    <i className="fas fa-shopping-cart cart-icon"></i>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
