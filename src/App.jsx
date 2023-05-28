import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';

function App() {

  return (
    <Router>
      <nav>
        <p>Green Acres Hospital</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='services' element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
