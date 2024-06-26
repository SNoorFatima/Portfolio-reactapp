import React from 'react'
import aboutimage from '../assets/images/about-image.jpg'
const About = () => {
  return (
    <div>
      <section id="about" class="about-section" data-aos="fade-up" data-aos-duration="1000">
        <div class="container about-container">
            <div class="about-image">
                <img src={aboutimage} alt="About Image"/>
            </div>
            <div class="about-text">
                <span>About Us</span>
                <h2>Creativity bleeds from the pen of <span>inspiration</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat molestiae veniam autem alias in
                    provident est.</p>
                <div class="about-details">
                    <div class="content">
                    <div class="details-left">
                        <p><strong>Full Name :</strong> Syeda Noor Fatima</p>
                        <p><strong>Age :</strong> 20 Years</p>
                    </div>
                    <div class="details-right">
                        <p><strong>Phone No :</strong> +92 3445843765</p>
                        <p><strong>Email :</strong> syedzadi.0703@gmail.com</p>
                    </div>
                </div>
                    <p><strong>Address :</strong> Tip housing colony Road no. 23 House no. 2316,Haripur </p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
