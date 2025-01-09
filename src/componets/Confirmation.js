import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const { state } = useLocation();
  const { formData } = state || {};

  return (
    <div>
      <h2>Registration Successful!</h2>
      <p>Thank you, {formData?.name}. We have received your registration for the {formData?.course} course.</p>
    </div>
  );
};

export default Confirmation;
