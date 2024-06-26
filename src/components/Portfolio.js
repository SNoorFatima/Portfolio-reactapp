import React, { useEffect } from 'react';
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.jpg';
import project6 from '../assets/images/project6.jpg';
import project7 from '../assets/images/project7.jpg';
import project8 from '../assets/images/project8.png';

const Portfolio = () => {
  useEffect(() => {
    const categoryButtons = document.querySelectorAll('.category-button');
    const projectItems = document.querySelectorAll('.project-item');
  
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
  
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        projectItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }, []); // Empty dependency array means this effect runs once on mount
  
  return (
    <div>
      <section id="projects" className="projects-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="container-">
          <h2 className="section-title">My <span>Projects</span></h2>
          <div className="categories">
            <button className="category-button active" data-category="all">All</button>
            <button className="category-button" data-category="computer-vision">Computer Vision</button>
            <button className="category-button" data-category="machine-learning">Machine Learning</button>
            <button className="category-button" data-category="web-dev">Web Development</button>
            <button className="category-button" data-category="cpp-oop">C++/OOP</button>
          </div>
          <div className="projects-grid">
            <div className="project-item" data-category="computer-vision" style={{ backgroundImage: `url(${project1})` }} data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="project-hover">
                <h3>Plants-Disease-Detection</h3>
                <p>Used CNN to predict plant diseases</p>
              </div>
            </div>
            <div className="project-item" data-category="machine-learning" style={{ backgroundImage: `url(${project2})` }} data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="project-hover">
                <h3>Optimizing lasso regression</h3>
                <p>Comparing gradient Descent and coordinate Descent</p>
              </div>
            </div>
            <div className="project-item" data-category="web-dev" style={{ backgroundImage: `url(${project3})` }} data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="project-hover">
                <h3>Primoprint</h3>
                <p>Cloned website using HTML/CSS</p>
              </div>
            </div>
            <div className="project-item" data-category="web-dev" style={{ backgroundImage: `url(${project4})` }} data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="project-hover">
                <h3>TrenBee</h3>
                <p>Cloned website using HTML/CSS</p>
              </div>
            </div>
            <div className="project-item" data-category="machine-learning" style={{ backgroundImage: `url(${project5})` }} data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="project-hover">
                <h3>House-price prediction</h3>
                <p>Use ML techniques for house pricing prediction</p>
              </div>
            </div>
            <div className="project-item" data-category="computer-vision" style={{ backgroundImage: `url(${project6})` }} data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="project-hover">
                <h3>Flower-Recognition</h3>
                <p>Used CNN to predict flowers</p>
              </div>
            </div>
            <div className="project-item" data-category="cpp-oop" style={{ backgroundImage: `url(${project7})` }} data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="project-hover">
                <h3>Car Rental System</h3>
              </div>
            </div>
            <div className="project-item" data-category="cpp-oop" style={{ backgroundImage: `url(${project8})` }} data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="project-hover">
                <h3>Library Management System</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
