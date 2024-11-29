import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:4000/auth/register', formData,{
            headers: {
              'Content-Type': 'application/json',
            },
          });
      console.log(response.data);
      setMessage("User:"+response.data.email + " created successfully!");
      setError('');
      setFormData({ email: '', password: '' });
    } catch (err) {
      console.log(err)
      setError(err.response?.data || 'An error occurred.');
      setMessage('');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
