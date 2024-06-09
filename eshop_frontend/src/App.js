import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <div className="App">
      <Header openLoginModal={openLoginModal} openRegisterModal={openRegisterModal} />
      <Navbar />
      <div className="main_container">
        <Sidebar />
        <ProductGrid />
      </div>
      <Footer />
      <LoginModal show={isLoginModalOpen} onClose={closeLoginModal} />
      <RegisterModal show={isRegisterModalOpen} onClose={closeRegisterModal} />
    </div>
  );
}

export default App;
