import React from 'react'
import './App.scss'
import 'animate.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';


const App = () => {
  return (
    <Router className="App">
      {/* <div className='appCon'> */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      {/* </div> */}
    </Router>
  )
}

export default App