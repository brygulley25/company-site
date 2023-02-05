import '../../App.css';
import founder from './images/founder.jpg';
import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        
        
        <p className='about-text'>
        <h1 >About Us</h1>
        At Divine Design, we understand the struggle of finding a web developer who truly brings your vision to life. As business owners, you deserve a partner who will join you on the journey to bring your website dreams to reality. That's why we offer an easy-to-use platform, complete with a quote, timeline, and a personalized questionnaire to get started. With just one click, you can have access to a top-notch website with all the features you need. And for those who want the added convenience of web hosting, maintenance, and SEO services, we offer a one-month free trial with flexible month-to-month subscriptions that you can cancel anytime. At Divine Design, passion and profession come together to create the perfect website for your business.
        </p>
      </div>
      <div className="founder-section">
        
        <p className='founder-text'>
        <h2 className='founder-title'>Founder</h2>
        <img src={founder} alt="Founder" className='founder-image' />
        Bryson Gulley, the founder and lead developer of Divine Design, is a talented professional with an exceptional set of skills. He excels in HTML, CSS, JavaScript, and Node.js and leverages his expertise to help businesses grow with custom web design and development solutions. With a friendly approach and unwavering dedication to client satisfaction, Bryson takes the time to understand the specific needs of each business he works with, and provides tailored solutions to help them reach their goals.

        To ensure the best design possible, Bryson has added Figma to his skillset, allowing him to create visually stunning designs with ease. Figma is a powerful design tool that offers real-time collaboration and streamlines the design process, making it easier for Bryson to create beautiful, functional designs that meet the unique needs of each client. Whether you need a new website or a redesign of an existing one, Bryson and his team at Divine Design have the skills and expertise to make your vision a reality.
        </p>
      </div>
    </div>
  );
};

export default About;


