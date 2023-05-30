import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.css';
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

  const [toggleNav, setToggleNav] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const toggle = () => {
    setToggleNav(!toggleNav)
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <nav className="navbar">
        <img src={Logo} alt="" />

        <div className={isOpen ? "menu-wrap show" : "menu-wrap"}>
          <div className="menu">
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
          <Link href="" className="appointment-mobile">Book Appointment</Link>
        </div>

        <Link href="" className="appointment">Book Appointment</Link>

        <div className={toggleNav ? "hamburger active" : "hamburger"} onClick={toggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
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
