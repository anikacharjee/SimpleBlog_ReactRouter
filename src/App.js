import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound'; 

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Link>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
