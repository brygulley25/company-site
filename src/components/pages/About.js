import '../../App.css';
import aboutus from './images/aboutus.PNG';
import founder from './images/founder.jpg';


import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <div className='about-image'>
                <img src={aboutus} alt='About Us'/>
            </div>
            <div className='about-text'>
                <h1>About Us</h1>
                <p> Divine Design is a company that helps people make websites. They talk to you and make a plan for your website, then they make it happen. They have a team of people who know how to make websites look good and work well. You can tell them what you want on your website and they will make it happen. They also have extra services you can add to make your website even better, like making sure it works fast and people can find it easily. They also have a free trial to try it out before you pay for it. They make websites with love and care. </p>
            </div>
            <div className='founder-image'>
                <img src={founder} alt='founder'/>
            </div>
            <div className='founder-text'>
                <h2>Founder</h2>
                <p>Bryson Gulley is the founder of Divine Design, a web design and development company. He uses his skills and expertise in web design and development to help businesses grow and reach their potential. With his vibrant, friendly and welcoming energy, Bryson is dedicated to understanding his clients' needs and creating custom solutions to help them achieve their goals. He is well-versed in various programming languages such as HTML, CSS, JavaScript, and PHP, and uses these languages to create websites that are both visually appealing and functional. His clients can trust that Bryson's expertise and passion for web design and development will leave them feeling satisfied, delighted and fulfilled with the end result.</p>
            </div>
        </div>
    );
}

export default About;

