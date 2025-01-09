import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { formData } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register for a Course</h2>
      <label>Name:</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <label>Course:</label>
      <input
        type="text"
        value={formData.course}
        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
