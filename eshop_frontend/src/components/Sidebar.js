import React from 'react';
import './homepage.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <ul>
          <li>
            <a href="computer.html" className="active">
              <span className="icon"><i className="fas fa-laptop"></i></span>
              <span className="title">Computer & Laptop</span>
            </a>
          </li>
          <li>
            <a href="keyboard.html">
              <span className="icon"><i className="fas fa-keyboard"></i></span>
              <span className="title">Keyboards</span>
            </a>
          </li>
          <li>
            <a href="mouse.html">
              <span className="icon"><i className="fas fa-computer-mouse"></i></span>
              <span className="title">Mouses</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
