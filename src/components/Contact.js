
import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>CONTACT ME</h2>

   <div className="div">

    <div className="social-buttons" style={{ display: 'flex', gap: '60px', marginTop: '20px', justifyContent:'center' }}>
      

    <button
        onClick={() => window.location.href = 'mailto:shivanihallade@gmail.com'}
        className="social-button"
        style={{ backgroundColor: '#3596b1', color: 'white', fontSize: '18px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Email
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
    </div>
   
  </section>
);

export default Contact;





