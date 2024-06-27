import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Qualification from './components/Qualification';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mystyle, setMystyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  });

  const toggleStyle = () => {
    setMystyle(prevStyle => ({
      backgroundColor: prevStyle.backgroundColor === 'white' ? 'black' : 'white',
      color: prevStyle.color === 'black' ? 'white' : 'black'
    }));
  };

  return (
    <Router>
      <div className="App" style={mystyle}>
        <Header toggleStyle={toggleStyle} />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <About />
            <Qualification />
            <Portfolio />
            <Contact />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
