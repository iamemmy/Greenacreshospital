import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Logo from './assets/logo.png';
import "./style/main.css";

function App() {

  const [activeNavItem, setActiveNavItem] = useState('Home');

  const navItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <Router>
      <nav className="navbar">
        <img src={Logo} alt="" />
        <div>
          <Link to="/" className={`${activeNavItem === "Home" || activeNavItem === "" ? "activeNav" : ""}`} 
          onClick={() => navItemClick('Home')}
          >Home
          </Link>
          <Link to="/about" className={`${activeNavItem === 'About' ? 'activeNav' : ''}`} 
          onClick={() => navItemClick('About')}
          >About
          </Link>
          <Link to="/services" className={`${activeNavItem === 'Services' ? 'activeNav' : ''}`} 
          onClick={() => navItemClick('Services')}
          >Services
          </Link>
        </div>
        <Link href="" className="appointment">Book Appointment</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
