import React from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css';

function Confirmation() {
  const location = useLocation();
  const { formData } = location.state || { formData: {} };

  return (
    <>
      <div className="confirmation-container">
        <h1>Thank You, {formData.name}!</h1>
        <p>You're now registered for {formData.course}.</p>
        <p>We'll email to <strong>{formData.email}</strong>.</p>
      </div>
      <footer>
        ©2024 | <a href="https://www.rp.edu.sg" target="_blank" rel="noopener noreferrer">Republic Polytechnic</a>
      </footer>
    </>
  );
}

export default Confirmation;
