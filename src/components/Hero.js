import React from 'react'
import heroImage from "../assets/images/AbstractProfilePictureInstagramPost.png"

const Hero = () => {
  return (
    <div>
      <section id="home" className="hero-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
            <div className="hero-text">
                <span>Hello, My name is</span>
                <h1>Syeda Noor Fatima</h1>
                <h2>I'm AI undergrad</h2>
                <p>As an aspiring AI undergrad, with a passion for innovation and problem-solving vision. I am eager to leverage my academic knowledge and technical skills.</p>
                <button className="hire-me-button">Hire Me</button>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="image"/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero
