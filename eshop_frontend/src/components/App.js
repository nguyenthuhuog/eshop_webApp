import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import MousePage from './MousePage';
import KeyboardPage from './KeyboardPage';
import ComputerPage from './ComputerPage';
import HomePage from './HomePage';

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
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/mouse" element={<MousePage />} />
            <Route path="/computer" element={<ComputerPage />} />
            <Route path="/keyboard" element={<KeyboardPage />} />
            <Route path="/homepage" element={<HomePage />} />
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
