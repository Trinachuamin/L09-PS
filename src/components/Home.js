import React from 'react';
import '../index.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img
          src="https://react-router-ps.vercel.app/static/media/soi-hero-banner-2024.7455aee66183ba225061.jpg"
          alt="Feature"
          className="hero-image"
        />
      </div>
      <div className="home-content">
        <h1>Home</h1>
        <p>
          If you are excited by the latest technological advances and have a passion for problem-solving, join us at RP School of Infocomm (SOI). We will help you discover your hidden technical skills and nurture your creative digital dreams. We offer six diploma programmes across a wide range of infocomm disciplines.
        </p>
      </div>
      <footer>
        ©2024 | <a href="https://www.rp.edu.sg" target="_blank" rel="noopener noreferrer">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default Home;
