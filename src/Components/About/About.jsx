import React from 'react';
import './About.css'; // Link to the new CSS file

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant interior"
              className="about-image"
            />
          </div>

          <div>
            <span className="about-badge">Our Story</span>
            <h3 className="about-title">
              Where Passion Meets
              <span className="about-highlight"> Perfection</span>
            </h3>

            <p className="about-text">
              For over two decades, ModDine has been redefining the culinary landscape with
              our innovative approach to modern cuisine. Our award-winning chefs combine
              traditional techniques with contemporary flair.
            </p>

            <p className="about-text">
              Every ingredient is carefully sourced from local farms and international
              suppliers, ensuring that each dish tells a story of quality, sustainability,
              and exceptional taste.
            </p>

            <div className="about-stats">
              <div className="about-stat-box pink">
                <div className="about-stat-number">25+</div>
                <div className="about-stat-label">Years of Excellence</div>
              </div>
              <div className="about-stat-box orange">
                <div className="about-stat-number">15+</div>
                <div className="about-stat-label">Culinary Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
