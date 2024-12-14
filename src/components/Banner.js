// src/components/Banner.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../styles.css';

const Banner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      navigate('/login'); // Navigate to the login page
    }
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <header className="banner">
      <h1>Welcome to Our Community</h1>
      <div className="login-button-container">
        {isLoggedIn ? (
          <button className="button" onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <div className="button-group">
            <button className="button" onClick={handleLoginClick}>Login</button>
            <button className="button" onClick={handleRegisterClick}>Register</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Banner;
