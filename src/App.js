import React from 'react';
import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx'
import Gallery from './pages/gallery/gallery.jsx'
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';

// const images = [
//   'https://ibb.co/F0fkQBD',
//   'https://ibb.co/59Sgrp6',
//   'https://ibb.co/Czjqrk3',
//   'https://ibb.co/qj7LMkz'
// ]

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/gallery' component={Gallery}/>
      </div>
    </HashRouter>
  );
}

export default App;
