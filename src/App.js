import React from 'react';
import image from './images/test.jpg'
import './App.css';

const images = [
  'https://ibb.co/F0fkQBD',
  'https://ibb.co/59Sgrp6',
  'https://ibb.co/Czjqrk3',
  'https://ibb.co/qj7LMkz'
]

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <img src={image} alt='profile'/>
      <p>My name is Lyle and I build things on the web</p>
    </div>
  );
}

export default App;
