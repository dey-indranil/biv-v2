import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="menu">
        <li className="menu-item"><Link to="/">Home</Link></li>
        <li className="menu-item"><Link to="/events">Events</Link></li>
        <li className="menu-item"><Link to="/members-corner">Members Corner</Link></li>
        <li className="menu-item"><Link to="/gallery">Gallery</Link></li>
        <li className="menu-item"><Link to="/about-us">About Us</Link></li>
        <li className="menu-item"><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
