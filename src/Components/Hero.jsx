// import React from 'react';

const Hero = ({ image, title }) => {
    return (
      <header>
        <img src={image} alt="Hero Image" />
        <h1>{title}</h1>
      </header>
    );
  };
  
  export default Hero;
  