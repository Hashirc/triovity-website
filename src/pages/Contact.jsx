import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header text-center gradient-bg">
        <div className="container">
          <h1 className="animate-fade-up">Get in <span className="text-highlight">Touch</span></h1>
          <p className="page-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Ready to grow your business? Drop us a line and let's talk strategy.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-container">
            
            {/* Contact Info */}
            <div className="contact-info-panel glass">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Fill out the form and our team will get back to you within 24 hours. Let's build something great together.
              </p>
              
              <ul className="contact-details-list">
                <li>
                  <div className="contact-icon-wrapper">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <strong>Our Headquarters</strong>
                    <span>Thekkan Kuttor, Malappuram, Kerala</span>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-wrapper">
                    <Phone size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <strong>Call Us</strong>
                    <span>+91 9895523045<br/>8714078008<br/>7034928226</span>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-wrapper">
                    <Mail size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <strong>Email Us</strong>
                    <span>triovity@gmail.com</span>
                  </div>
                </li>
              </ul>
              
              <div className="contact-socials">
                <h3>Follow Us</h3>
                <div className="social-links-lg">
                  <a href="#" className="social-icon-lg"><Facebook size={20} /></a>
                  <a href="#" className="social-icon-lg"><Twitter size={20} /></a>
                  <a href="https://instagram.com/triovity" target="_blank" rel="noreferrer" className="social-icon-lg"><Instagram size={20} /></a>
                  <a href="#" className="social-icon-lg"><Linkedin size={20} /></a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-panel">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@company.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Interested Service</label>
                  <select id="service" required>
                    <option value="" disabled selected>Select a Service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-dev">Website Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="social-media">Social Media</option>
                    <option value="ppc">PPC & Google Ads</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" rows="5" placeholder="Tell us about your project or goals..." required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section Placeholder */}
      <section className="map-section section-padding pb-0 mt-0 pt-0">
        <div className="map-placeholder">
          <div className="map-content">
             <h3>Visit Our Office</h3>
             <p>Thekkan Kuttor, Malappuram, Kerala</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
