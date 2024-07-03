import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleStyle }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">Borox</div>
        <nav className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#qualification">Experience</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <a href="#" className="quote-button">Get a quote</a>
        <button className="change-mode" onClick={toggleStyle}>Mode</button>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      </div>
    </header>
  );
};

export default Header;
