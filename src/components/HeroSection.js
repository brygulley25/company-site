import React from 'react';
import './HeroSection.css';
import Button  from './Button';



function handleClick() {
  window.location.assign("https://forms.gle/G8bYLGQskdBf1Nv58");
}

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Divine Design</h1>
      <p><em>Where passion meets profession</em></p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={handleClick}
        >
          Get a free quote
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => console.log('hey')}
        >
          Sign Up
        </Button> */}
      </div>
    </div>
  );
}

  
export default HeroSection;
