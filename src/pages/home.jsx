import React from 'react';
import image from '../images/test.jpg'

const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <img src={image} alt='profile'/>
      <p>My name is Lyle and I build things on the web</p>
    </div>
  );
}

export default Home;
