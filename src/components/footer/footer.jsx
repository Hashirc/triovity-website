import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col about-col">
            <h3 className="footer-title">Tri<span className="text-highlight">ovity</span></h3>
            <p className="footer-desc">
              We are a premier digital marketing and website development agency dedicated to helping businesses grow their online presence.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="https://instagram.com/triovity" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Thekkan Kuttor, Malappuram, Kerala</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 9895523045, 8714078008, 7034928226</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>triovity@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h4 className="footer-subtitle">Newsletter</h4>
            <p>Subscribe to our newsletter for the latest digital marketing tips.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn-send"><Send size={18} /></button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Triovity. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
