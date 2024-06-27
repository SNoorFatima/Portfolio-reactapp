import React, { useState } from 'react';

const Header = ({ toggleStyle }) => {
 

  return (
    <div>
      <header className="navbar">
        <div className="container">
          <div className="logo">Borox</div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#qualification">Experience</a></li>
              <li><a href="#projects">Portfolio</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
          <a href="#" className="quote-button">Get a quote</a>
          <button className="change-mode" onClick={toggleStyle}>Mode</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
