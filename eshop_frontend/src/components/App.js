import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import MousePage from './MousePage';
import KeyboardPage from './KeyboardPage';
import ComputerPage from './ComputerPage';
import HomePage from './HomePage';
import ProductDetail from './ProductDetail';

import '../css/homepage.css';
import '../css/App.css';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <Router>
      <div className="App">
        <Header openLoginModal={openLoginModal} openRegisterModal={openRegisterModal} />
        <div className={`wrapper ${isSidebarActive ? 'active' : ''}`}>
        <Navbar toggleSidebar={toggleSidebar}/>
        <div className="main_container">
          <Sidebar />
          <div className="content">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/mouse" element={<MousePage />} />
            <Route path="/computer" element={<ComputerPage />} />
            <Route path="/keyboard" element={<KeyboardPage />} />
            <Route path="/homepage" element={<HomePage isSidebarActive={isSidebarActive}/>} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
        <Footer />
        </div>
        </div>
        <LoginModal show={isLoginModalOpen} onClose={closeLoginModal} />
        <RegisterModal show={isRegisterModalOpen} onClose={closeRegisterModal} />
      </div>
    </Router>
  );
}

export default App;
