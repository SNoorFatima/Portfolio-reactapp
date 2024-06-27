import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Qualification from './components/Qualification';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mystyle, setMystyle] = useState({
    backgroundColor: 'white'
  });

  const toggleStyle = () => {
    if (mystyle.backgroundColor == 'white') {
      setMystyle({
        color: 'white',
        backgroundColor: 'black'
      });
    } else {
      setMystyle({
        backgroundColor: 'white',
        color:'black'
      });
    }
  };
  return (
    <div className="App" style={mystyle}>
     <Header toggleStyle={toggleStyle} />
      <Hero/>
      <About/>
      <Qualification/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
