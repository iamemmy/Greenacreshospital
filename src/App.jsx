import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Servicespage from './pages/Servicespage';
import Gallery from './pages/Gallery';
import Logo from './assets/logo.png';
import Hmo from "./pages/Hmo";
import Faqs from "./components/Faqs";
import "./style/main.css";
import Loader from "./components/Loader";

function App() {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [toggleNav, setToggleNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navItemClick = (navItem) => {
    setActiveNavItem(navItem);
    setIsOpen(false);
    setToggleNav(false);
    setIsLoading(true);
  };

  const toggle = () => {
    setToggleNav(!toggleNav);
    setIsOpen(!isOpen);
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className={isOpen ? "menu-wrap show" : "menu-wrap"}>
          <div className="menu">
            <Link
              to="/"
              className={`${activeNavItem === "Home" || activeNavItem === "" ? "activeNav" : ""}`}
              onClick={() => navItemClick('Home')}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${activeNavItem === 'About' ? 'activeNav' : ''}`}
              onClick={() => navItemClick('About')}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${activeNavItem === 'Services' ? 'activeNav' : ''}`}
              onClick={() => navItemClick('Services')}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className={`${activeNavItem === 'Gallery' ? 'activeNav' : ''}`}
              onClick={() => navItemClick('Gallery')}
            >
              Gallery
            </Link>
          </div>
          <Link to="tel:08106338579" className="appointment-mobile">Online Consultation</Link>
        </div>

        <Link to="tel:08106338579" className="appointment">Online Consultation</Link>

        <div className={toggleNav ? "hamburger active" : "hamburger"} onClick={toggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <Loader 
          className="loader"
          isLoading={isLoading}
        />
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hmo" element={<Hmo />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  )
}

export default App;