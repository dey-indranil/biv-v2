import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/auth/verify-email', { email: state.email, otp });
      setMessage('Email verified successfully!');
      setError('');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP.');
      setMessage('');
    }
  };

  return (
    <div className="form-container">
      <h2>Email Verification</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Enter OTP sent to {state?.email}:
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
        </label>
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyEmail;
