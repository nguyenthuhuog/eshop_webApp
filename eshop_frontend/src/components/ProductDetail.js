import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/productdetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);

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
                <h2>{product.productName}</h2>
                <p className="product-price">Price: ${product.price.toFixed(2)}</p>
                <p className="product-description">Description: {product.description}</p>
                <p className="product-stock">Stock: {product.stock}</p>
            </div>
        </div>
    );
};

export default ProductDetail;