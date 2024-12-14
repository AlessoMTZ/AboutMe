import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'GlobalStyles.js';
import Navbar from 'Components/Navbar.js';
import Home from './Pages/Home,js';
import Projects from './Pages/Projects.js';
import Contact from './Pages/Contact.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
