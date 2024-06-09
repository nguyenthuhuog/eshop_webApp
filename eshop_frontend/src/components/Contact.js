import React, { useState } from 'react';
import './contact.css';
import './homepage.css';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <h1 style={{ paddingTop: '20px' }}>Contact Us</h1>
            <div className="contact-form-footer">
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="lastName" required />
                        </div>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>

            {isModalOpen && (
                <div id="thankYouModal" className="modal">
                    <div className="modal-content">
                        <p>Thank you for contacting us! We will get back to you soon.</p>
                        <button onClick={closeModal}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
