import { useState, useEffect } from "react";
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
import Appointment from "./components/Appointment";
import Contact from "./pages/Contact";
import Top1 from './assets/top1.png';
import Top2 from './assets/top2.png';
import Top3 from './assets/top3.png';
import Top4 from './assets/top4.png';
import Top5 from './assets/top5.png';
import Top6 from './assets/top6.png';
import Top7 from './assets/top7.png';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [toggleNav, setToggleNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showNavLocation, setShowNavLocation] = useState(true);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const shouldShowNavLocation = currentScrollPos === 0; // Change this condition based on your requirements
      setShowNavLocation(shouldShowNavLocation);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <Router>
      <nav className={ showNavLocation ? "navbar" : "navbar change-padding"}>
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
          <h4>GREEN ACRES HOSPITAL</h4>
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
            <Link
              to="/contact"
              className={`${activeNavItem === 'Contact' ? 'activeNav' : ''}`}
              onClick={() => navItemClick('Contact')}
            >
              Contact
            </Link>
          </div>
          <Link to="/appointment" className="appointment-mobile" onClick={toggle}>
            Book Appointment
          </Link>
        </div>

        <Link to="/appointment" className="appointment" onClick={toggle}>
          Book Appointment
        </Link>

        <div className={toggleNav ? "hamburger active" : "hamburger"} onClick={toggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {showNavLocation && (
          <div className="nav-location">
            <div className="nav-location-1">
              <div>
                <img src={Top1} alt="phone" />
                <p>(+234)8106338579</p>
              </div>
              <div>
                <img src={Top2} alt="mail" />
                <p>info@greenacreshospital.com</p>
              </div>
              <div>
                <img src={Top3} alt="Location" />
                <p>Sunnyvale Homes off Lokogoma express way, Abuja</p>
              </div>
            </div>
            <div className="nav-location-2">
              <Link to="https://www.facebook.com/profile.php?id=100063471673484">
                <img src={Top4} />
              </Link>
              <Link to="https://twitter.com/greenacreshosp?t=5rXgYEQQ3NvQeKbJ1xq-YA&s=09">
                <img src={Top5} />
              </Link>
              <Link to="https://instagram.com/greenacreshospital?igshid=NGExMmI2YTkyZg==">
                <img src={Top6} />
              </Link>
              <Link to="https://www.linkedin.com/in/yinka-olaniyan-706b575b">
                <img src={Top7} />
              </Link>
            </div>
          </div>
        )}

        <Loader className="loader" isLoading={isLoading} />
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hmo" element={<Hmo />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;