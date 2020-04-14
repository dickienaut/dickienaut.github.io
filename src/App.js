import React from 'react';
import Home from './pages/home.jsx'
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
      </div>
    </HashRouter>
  );
}

export default App;
