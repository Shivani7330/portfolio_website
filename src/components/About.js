import React from "react";
import "./About.css";

const About = () => (
  <section id="about" className="about-section">
    <h2>ABOUT ME</h2>
    <p>
      I am a passionate developer with a love for solving problems and building user-friendly interfaces. 
      My journey in web development has been enriched by projects that challenged me to grow and excel.
    </p>

    
    <div className="social-buttons" style={{ display: 'flex', gap: '60px', marginTop: '20px', justifyContent:'center' }}>
      

    <button
        onClick={() => window.location.href = 'mailto:shivanihallade@gmail.com'}
        className="social-button"
        style={{ backgroundColor: '#3596b1', color: 'white', fontSize: '18px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Let's talk
      </button>
      
      <button
        onClick={() => window.open('https://github.com/Shivani7330', '_blank')}
        className="social-button"
        style={{ backgroundColor: '#3596b1', color: 'white', fontSize: '18px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        
      >
        GitHub
      </button>
      <button
        onClick={() => window.open('https://www.linkedin.com/in/hallade-shivani-63aa6123a/', '_blank')}
        className="social-button"
        style={{ backgroundColor: '#3596b1', color: 'white', fontSize: '18px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        LinkedIn
      </button>
      
      <button
        onClick={() => window.location.href = 'mailto:shivanihallade@gmail.com'}
        className="social-button"
        style={{ backgroundColor: '#3596b1', color: 'white', fontSize: '18px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Contact
      </button>
    </div>
  </section>
);

export default About;