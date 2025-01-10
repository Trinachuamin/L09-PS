import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { formData } });
  };

  return (
    <>
      <div className="register-container">
        <h1>Register your interest</h1>
        <p>Please register the course you are interested in!</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Course:
            <input type="text" name="course" value={formData.course} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer>
        ©2024 | <a href="https://www.rp.edu.sg" target="_blank" rel="noopener noreferrer">Republic Polytechnic</a>
      </footer>
    </>
  );
}

export default Register;
