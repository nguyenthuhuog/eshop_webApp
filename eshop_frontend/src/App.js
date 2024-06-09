import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import Contact from './components/Contact';

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const openRegisterModal = () => setIsRegisterModalOpen(true);
    const closeRegisterModal = () => setIsRegisterModalOpen(false);

    return (
        <Router>
            <div className="App">
                <Header openLoginModal={openLoginModal} openRegisterModal={openRegisterModal} />
                <Navbar />
                <div className="main_container">
                    <Sidebar />
                    <Routes>
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<ProductGrid />} />
                    </Routes>
                </div>
                <Footer />
                <LoginModal show={isLoginModalOpen} onClose={closeLoginModal} />
                <RegisterModal show={isRegisterModalOpen} onClose={closeRegisterModal} />
            </div>
        </Router>
    );
}

export default App;
