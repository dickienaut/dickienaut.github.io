import React from 'react';
import { Link } from 'react-router-dom'
import image from '../../images/test.jpg'
import './home.css'

const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <li><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
        <li><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
        <li><Link to='/gallery' style={{ textDecoration: 'none' }}>Gallery</Link></li>
      </ul>
      <img src={image} alt='profile'/>
      <p>My name is Lyle and I build things on the web</p>
    </div>
  );
}

export default Home;
