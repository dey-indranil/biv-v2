// src/components/Banner.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../styles.css';

const Banner = ({ isLoggedIn, setIsLoggedIn }) => {
  
  const navigate = useNavigate(); // Initialize navigation

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      navigate('/login'); // Navigate to the login page
    }
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false); // Set isLoggedIn state to false
  }

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <header className="banner">
      <div className="banner-content">
        <img
          src="/logo.png" // Replace with your logo path
          alt="Logo"
          className="logo"
        />
        <h1>Welcome to BongMilanti</h1>
      </div>
      <div className="login-button-container">
        {isLoggedIn ? (
          <button className="button" onClick={handleLogoutClick}>Logout</button>
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
