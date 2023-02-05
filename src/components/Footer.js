import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Button  from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Footer = () => (
   <> 
    <div className="footer-container">
    <section className="footer-subscription">
      <h2 className="footer-subscription-heading">
        Be the First to Know About Our Web Development Services and Offers
      </h2>
      <p className="footer-subscription-text">
        You can unsubscribe at any time.
      </p>
      <div className="input-areas">
        <form>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Your Email" />
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
      </div>
    </section>
    <div className="footer-links">
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h3>About Us</h3>
          <Link to="/sign-up">
            Sign up for a free consultation today and take the first step towards
            a successful website
          </Link>

        </div>
      </div>
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h3>Contact Us</h3>
          <Link to="https://www.instagram.com/divine_designllc/">
            Instagram
          </Link>
          <Link to="https://www.facebook.com/divine_designllc">Facebook</Link>
        </div>
      </div>
    </div>
    <section className="social-media">
      <div className="social-media-wrap">

        
        <div className="social-icons">
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
           <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
    </section>
    <small className="website-rights">Divine Design © 2023</small>
  </div></>
);
 export default Footer;