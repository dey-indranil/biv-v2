import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Register from './components/Register';
import './styles.css';
import VerifyEmail from './components/VerifyEmail';
import Login from './components/Login';
import Upload from "./components/Upload";

const sections = {
  home: { title: "Home", content: "Welcome to our community Bongmilanti!" },
  events: { title: "Events", content: "Discover upcoming events." },
  membersCorner: { title: "Members Corner", content: "Exclusive content for our members." },
  gallery: { title: "Gallery", content: "View photos and videos from our events." },
  merch: { title: "Tickets & Merch", content: "Buy your tickets and merchandise here." },
  aboutUs: { title: "About Us", content: "Learn more about our organization." },
  contactUs: { title: "Contact Us", content: "Get in touch with us!" },
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  return (
    <Router>
      <div>
        <Banner isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Content sections={[sections.home]} />} />
            <Route path="/events" element={<Content sections={[sections.events]} />} />
            <Route path="/members-corner" element={<Content sections={[sections.membersCorner]} />} />
            <Route path="/gallery" element={<Content sections={[sections.gallery]} />} />
            <Route path="/merch" element={<Content sections={[sections.merch]} />} />
            <Route path="/about-us" element={<Content sections={[sections.aboutUs]} />} />
            <Route path="/contact-us" element={<Content sections={[sections.contactUs]} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole}/>} />
            {userRole === "admin" && <Route path="/upload" element={<Upload />} />}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
