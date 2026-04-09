import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Globe, Megaphone, Smartphone, Star, CheckCircle, TrendingUp, Code, Target, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import Marquee from '../components/Marquee';
import './Home.css';

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

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section gradient-bg">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Grow Your Business with <br />
              <span className="text-highlight">
                <AnimatedText words={["Digital Marketing", "Web Development", "SEO Strategies", "Creative Design"]} />
              </span>
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Triovity is a premier digital marketing and website development agency. We transform your digital presence into a powerful growth engine.
            </motion.p>
            <motion.div className="hero-cta" variants={fadeInUp}>
              <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
              <Link to="/services" className="btn btn-outline">Our Services</Link>
            </motion.div>
            <motion.div className="hero-trust" variants={staggerContainer}>
              <motion.div className="trust-item" variants={fadeInUp}>
                <CheckCircle size={20} className="text-highlight" />
                <span>Data-Driven Strategies</span>
              </motion.div>
              <motion.div className="trust-item" variants={fadeInUp}>
                <CheckCircle size={20} className="text-highlight" />
                <span>Proven Results</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-dashboard-graphic"
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            style={{ perspective: 1000 }}
          >
            {/* Floating Card 1: Web Dev - Slides from Top */}
            <motion.div 
              className="card-top-left"
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ zIndex: 100, scale: 1.05 }}
              transition={{ duration: 1.5, delay: 1.2, type: "spring", bounce: 0.4 }}
            >
              <div className="float-wrapper float-slow">
                <div className="bento-card glass theme-red">
                  <div className="bento-header">
                    <div className="icon-box">
                      <Code size={20} />
                    </div>
                    <span className="bento-title">Web Performance</span>
                  </div>
                  <div className="bento-body">
                    <div className="health-score">100%</div>
                    <p>Site Health Score</p>
                    <div className="progress-bar-bg"><div className="progress-bar-fill"></div></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Marketing - Slides from Right */}
            <motion.div 
              className="card-center-right highlight-card"
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ zIndex: 100, scale: 1.05 }}
              transition={{ duration: 1.5, delay: 1.6, type: "spring", bounce: 0.4 }}
            >
              <div className="float-wrapper float-med">
                <div className="bento-card theme-green">
                  <div className="bento-header">
                    <div className="icon-box">
                      <TrendingUp size={24} />
                    </div>
                    <span className="bento-title">Social Reach</span>
                  </div>
                  <div className="bento-body">
                    <div className="growth-metric">+147%</div>
                    <p className="bento-subtitle">Engagement Growth</p>
                    <div className="chart-bars">
                      <span className="bar b1"></span>
                      <span className="bar b2"></span>
                      <span className="bar b3"></span>
                      <span className="bar b4"></span>
                      <span className="bar b5"></span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3: SEO - Slides from Left */}
            <motion.div 
              className="card-bottom-left"
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ zIndex: 100, scale: 1.05 }}
              transition={{ duration: 1.5, delay: 2.0, type: "spring", bounce: 0.4 }}
            >
              <div className="float-wrapper float-fast">
                <div className="bento-card glass theme-red">
                  <div className="bento-header">
                    <div className="icon-box">
                      <Target size={20} />
                    </div>
                    <span className="bento-title">SEO Ranking</span>
                  </div>
                  <div className="bento-body row">
                    <div className="rank">#1</div>
                    <div className="rank-info">
                      <p>Global Search</p>
                      <span className="trend"><ArrowUpRight size={14} /> +12 positions</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={["UI/UX Design", "Web Development", "SEO Optimization", "Social Media", "Brand Strategy"]} />

      {/* Intro Section */}
      <section className="intro-section section-padding">
        <motion.div 
          className="container intro-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="intro-text" variants={fadeInUp}>
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
          </motion.div>
          <motion.div className="intro-stats">
            {[
              { num: "20+", label: "Projects Delivered" },
              { num: "98%", label: "Client Retention" },
              { num: "1+", label: "Years Experience" },
              { num: "10+", label: "Happy Clients" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="stat-card glass" 
                initial={{ opacity: 0, x: i % 2 === 0 ? -200 : 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.4, type: "spring", stiffness: 50, damping: 15 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <h3>{stat.num}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Highlight Section */}
      <section className="services-highlight section-padding">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Our Core <span className="text-highlight">Services</span></h2>
            <p>Comprehensive digital solutions tailored to your business needs.</p>
          </motion.div>
          
          <motion.div 
            className="services-grid"
          >
            {[
              { icon: Globe, title: "Website Development", desc: "Custom, scalable, and responsive websites designed to convert visitors into customers." },
              { icon: BarChart2, title: "SEO Optimization", desc: "Rank higher on Google and drive organic traffic with our data-backed SEO strategies." },
              { icon: Megaphone, title: "Digital Marketing", desc: "End-to-end marketing campaigns that maximize your ROI and brand visibility." },
              { icon: Smartphone, title: "Social Media", desc: "Engage your audience and build brand loyalty across all major social platforms." }
            ].map((srv, i) => (
              <motion.div 
                key={i} 
                className="service-card glass" 
                initial={{ opacity: 0, x: i % 2 === 0 ? -200 : 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.4, type: "spring", stiffness: 50, damping: 15 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="service-icon-wrapper">
                  <srv.icon size={32} />
                </div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
                <Link to="/services" className="service-link">Read more <ArrowRight size={16} /></Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding gradient-bg">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Client <span className="text-highlight">Testimonials</span></h2>
            <p>What our partners say about working with Triovity.</p>
          </motion.div>
          
          <motion.div 
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { text: "\"The social media campaigns they created for our brand were creative and highly engaging. Our Instagram followers doubled and our sales increased noticeably\"", author: "Almadeena Restaurant", loc: "Thalappara, Kottakkal" },
              { text: "\"As a small automotive business owner, I needed an affordable but professional website. They delivered exactly that and also helped with marketing. Highly recommended!\"", author: "MAK Automotive", loc: "Puthanathani" },
              { text: "\"From logo design to website development, the entire process was smooth and professional. The team understood our vision and delivered beyond expectations..\"", author: "Retro Ruchi", loc: "Client" }
            ].map((t, i) => (
              <motion.div key={i} className="testimonial-card glass" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                <div className="stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" className="text-highlight" />)}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <h4>{t.author}</h4>
                  <p>{t.loc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bottom-cta section-padding text-center">
        <motion.div 
          className="container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Ready to <span className="text-highlight">Accelerate</span> Your Growth?</h2>
          <p>Let's discuss how we can help you achieve your business goals.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

