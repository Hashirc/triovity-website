import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header text-center gradient-bg">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>Get in <span className="text-highlight">Touch</span></motion.h1>
          <motion.p className="page-subtitle" variants={fadeInUp}>
            Ready to grow your business? Drop us a line and let's talk strategy.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="contact-section section-padding">
        <div className="container">
          <motion.div 
            className="contact-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            {/* Contact Info */}
            <motion.div className="contact-info-panel glass" variants={slideInLeft}>
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
                  <motion.a href="#" className="social-icon-lg" whileHover={{ scale: 1.1, rotate: 5 }}><Facebook size={20} /></motion.a>
                  <motion.a href="#" className="social-icon-lg" whileHover={{ scale: 1.1, rotate: 5 }}><Twitter size={20} /></motion.a>
                  <motion.a href="https://instagram.com/triovity" target="_blank" rel="noreferrer" className="social-icon-lg" whileHover={{ scale: 1.1, rotate: 5 }}><Instagram size={20} /></motion.a>
                  <motion.a href="#" className="social-icon-lg" whileHover={{ scale: 1.1, rotate: 5 }}><Linkedin size={20} /></motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div className="contact-form-panel" variants={slideInRight}>
              <h2>Send Us a Message</h2>
              <form 
                className="contact-form" 
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfx2x48fAbs1k4SZGWt1TptAeOFVWDwi3nOZR2vecNyssxn2Q/formResponse"
                method="POST"
                target="_self"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="entry.452743347" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="entry.1579664154" placeholder="+91 000-0000" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="entry.1047509203" placeholder="john@company.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Interested Service</label>
                  <select id="service" name="entry.1381205668" required defaultValue="">
                    <option value="" disabled>Select a Service</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Website Development">Website Development</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Social Media">Social Media</option>
                    <option value="PPC & Google Ads">PPC & Google Ads</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="entry.134875345" rows="5" placeholder="Tell us about your project or goals..." required></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Map Section Placeholder */}
      <section className="map-section section-padding pb-0 mt-0 pt-0">
        <motion.div 
          className="map-placeholder"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="map-content">
             <h3>Visit Our Office</h3>
             <p>Thekkan Kuttor, Malappuram, Kerala</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
