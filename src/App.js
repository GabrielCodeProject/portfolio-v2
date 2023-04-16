import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';

function App() {
  return (
   <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
   </Router>
  );
}

export default App;
