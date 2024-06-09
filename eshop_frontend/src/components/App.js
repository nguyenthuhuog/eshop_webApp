import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SaleNews from './SaleNews';
import ProductGrid from './ProductGrid';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import MousePage from './MousePage';
import KeyboardPage from './KeyboardPage';
import ComputerPage from './ComputerPage';

import '../css/homepage.css';
import '../css/App.css';

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
          {/* <Sidebar /> */}
          <div class="sidebar__inner">
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/mouse" element={<MousePage />} />
              <Route path="/computer" element={<ComputerPage />} />
              <Route path="/keyboard" element={<KeyboardPage />} />
            </Routes>
          </div>

          <div className="container">
              <Banner />
              <SaleNews />
              <ProductGrid />
              <SaleNews />
          </div>
        </div>
          <Footer />
          <LoginModal show={isLoginModalOpen} onClose={closeLoginModal} />
          <RegisterModal show={isRegisterModalOpen} onClose={closeRegisterModal} />
      </div>
    </Router>
  );
}

export default App;
