import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Globe, Megaphone, Smartphone, Star, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section gradient-bg">
        <div className="container hero-container">
          <div className="hero-content animate-fade-up">
            <h1 className="hero-title">
              Grow Your Business with <span className="text-highlight">Digital Marketing</span>
            </h1>
            <p className="hero-subtitle">
              Triovity is a premier digital marketing and website development agency. We transform your digital presence into a powerful growth engine.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
              <Link to="/services" className="btn btn-outline">Our Services</Link>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <CheckCircle size={20} className="text-highlight" />
                <span>Data-Driven Strategies</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={20} className="text-highlight" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
          <div className="hero-image glass animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* abstract illustration using css */}
            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
            <div className="abstract-shape shape-3">
              <BarChart2 size={80} color="var(--color-primary-red)" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section section-padding">
        <div className="container intro-container">
          <div className="intro-text">
            <h2>Who We Are</h2>
            <p>
              At Triovity, we believe in the power of digital transformation. Our agency partners with forward-thinking businesses to craft compelling digital experiences and drive measurable marketing results.
            </p>
            <p>
              Whether you need a cutting-edge website, an aggressive SEO campaign, or an engaging social media strategy, our team of experts is ready to elevate your brand.
            </p>
            <Link to="/about" className="link-with-icon">
              Learn more about our team <ArrowRight size={18} />
            </Link>
          </div>
          <div className="intro-stats">
            <div className="stat-card glass">
              <h3>20+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-card glass">
              <h3>98%</h3>
              <p>Client Retention</p>
            </div>
            <div className="stat-card glass">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card glass">
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="services-highlight section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core <span className="text-highlight">Services</span></h2>
            <p>Comprehensive digital solutions tailored to your business needs.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card glass">
              <div className="service-icon-wrapper">
                <Globe size={32} />
              </div>
              <h3>Website Development</h3>
              <p>Custom, scalable, and responsive websites designed to convert visitors into customers.</p>
              <Link to="/services" className="service-link">Read more <ArrowRight size={16} /></Link>
            </div>
            
            <div className="service-card glass">
              <div className="service-icon-wrapper">
                <BarChart2 size={32} />
              </div>
              <h3>SEO Optimization</h3>
              <p>Rank higher on Google and drive organic traffic with our data-backed SEO strategies.</p>
              <Link to="/services" className="service-link">Read more <ArrowRight size={16} /></Link>
            </div>
            
            <div className="service-card glass">
              <div className="service-icon-wrapper">
                <Megaphone size={32} />
              </div>
              <h3>Digital Marketing</h3>
              <p>End-to-end marketing campaigns that maximize your ROI and brand visibility.</p>
              <Link to="/services" className="service-link">Read more <ArrowRight size={16} /></Link>
            </div>
            
            <div className="service-card glass">
              <div className="service-icon-wrapper">
                <Smartphone size={32} />
              </div>
              <h3>Social Media</h3>
              <p>Engage your audience and build brand loyalty across all major social platforms.</p>
              <Link to="/services" className="service-link">Read more <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding gradient-bg">
        <div className="container">
          <div className="section-header text-center">
            <h2>Client <span className="text-highlight">Testimonials</span></h2>
            <p>What our partners say about working with Triovity.</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card glass">
              <div className="stars">
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
              </div>
              <p className="testimonial-text">"The social media campaigns they created for our brand were creative and highly engaging. Our Instagram followers doubled and our sales increased noticeably"</p>
              <div className="testimonial-author">
                <h4>Almadeena Restaurant</h4>
                <p>Thalappara, Kottakkal</p>
              </div>
            </div>

            <div className="testimonial-card glass">
              <div className="stars">
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
              </div>
              <p className="testimonial-text">"As a small automotive business owner, I needed an affordable but professional website. They delivered exactly that and also helped with marketing. Highly recommended!"</p>
              <div className="testimonial-author">
                <h4>MAK Automotive</h4>
                <p>Puthanathani</p>
              </div>
            </div>
            
            <div className="testimonial-card glass">
              <div className="stars">
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
                <Star size={18} fill="currentColor" className="text-highlight" />
              </div>
              <p className="testimonial-text">"From logo design to website development, the entire process was smooth and professional. The team understood our vision and delivered beyond expectations.."</p>
              <div className="testimonial-author">
                <h4>Retro Ruchi</h4>
                <p>Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bottom-cta section-padding text-center">
        <div className="container">
          <h2>Ready to <span className="text-highlight">Accelerate</span> Your Growth?</h2>
          <p>Let's discuss how we can help you achieve your business goals.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
