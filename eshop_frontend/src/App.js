import React from 'react';
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
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="main_container">
        <Sidebar />
        <ProductGrid />
      </div>
      <Footer />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;
