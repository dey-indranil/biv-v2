import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Register from './components/Register';
import './styles.css';

const sections = {
  home: { title: "Home", content: "Welcome to our community website!" },
  events: { title: "Events", content: "Discover upcoming events." },
  membersCorner: { title: "Members Corner", content: "Exclusive content for our members." },
  gallery: { title: "Gallery", content: "View photos and videos from our events." },
  aboutUs: { title: "About Us", content: "Learn more about our organization." },
  contactUs: { title: "Contact Us", content: "Get in touch with us!" },
};

function App() {
  return (
    <Router>
      <div>
        <Banner />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Content sections={[sections.home]} />} />
            <Route path="/events" element={<Content sections={[sections.events]} />} />
            <Route path="/members-corner" element={<Content sections={[sections.membersCorner]} />} />
            <Route path="/gallery" element={<Content sections={[sections.gallery]} />} />
            <Route path="/about-us" element={<Content sections={[sections.aboutUs]} />} />
            <Route path="/contact-us" element={<Content sections={[sections.contactUs]} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
