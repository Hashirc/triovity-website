import { Target, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

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

const teamMembers = [
  {
    name: "Hashir",
    role: "Lead Developer",
    bio: "Full-stack wizard building seamless web experiences.",
    imageColor: "var(--color-primary-red)"
  },
  {
    name: "Isham",
    role: "Digital Marketer & Creative Strategist",
    bio: "Creative mind behind viral brand campaigns and data-driven marketing.",
    imageColor: "#457b9d"
  },
  {
    name: "Yasir Sha",
    role: "Developer & Creative Designer",
    bio: "Crafting beautiful, functional, and user-centric digital experiences.",
    imageColor: "#1d3557"
  }
];

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header gradient-bg text-center">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>About <span className="text-highlight">Triovity</span></motion.h1>
          <motion.p className="page-subtitle" variants={fadeInUp}>
            Driving digital excellence through innovation and strategy
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section-padding">
        <div className="container">
          <motion.div 
            className="mv-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="mv-card glass" variants={fadeInUp} whileHover={{ y: -10 }}>
              <div className="mv-icon">
                <Target size={40} />
              </div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses of all sizes with cutting-edge digital marketing and web development strategies that deliver measurable ROI, accelerate growth, and build lasting customer relationships.
              </p>
            </motion.div>
            
            <motion.div className="mv-card glass" variants={fadeInUp} whileHover={{ y: -10 }}>
              <div className="mv-icon">
                <Lightbulb size={40} />
              </div>
              <h2>Our Vision</h2>
              <p>
                To be the world's most trusted digital growth partner, recognized for our innovative solutions, data-driven methodology, and unwavering commitment to client success in the ever-evolving digital landscape.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Background */}
      <section className="company-background section-padding gradient-bg">
        <motion.div 
          className="container bg-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="bg-text" variants={fadeInUp}>
            <h2>Our Story</h2>
            <p className="lead-text">From a small startup to a leading full-service agency.</p>
            <p>
              Triovity was founded on a simple principle: digital marketing shouldn't be a black box. We saw businesses struggling with disconnected agencies, opaque reporting, and websites that look pretty but fail to convert.
            </p>
            <p>
              We built Triovity to provide end-to-end digital solutions. Our interconnected teams—spanning web development, SEO, content, and paid media—work in perfect synergy. This holistic approach ensures every digital touchpoint serves one ultimate goal: growing your business.
            </p>
            <motion.div className="core-values" variants={staggerContainer}>
              {[
                "Client-Centric Approach",
                "Radical Transparency",
                "Data-Driven Decisions"
              ].map((value, idx) => (
                <motion.div className="value-item" key={idx} variants={fadeInUp}>
                  <Users size={24} className="text-highlight" />
                  <span>{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="bg-image-wrapper"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
             <div className="glass image-placeholder">
               <div className="abstract-circle"></div>
               <div className="abstract-square"></div>
               <h3 className="placeholder-text">Triovity HQ</h3>
             </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Meet The <span className="text-highlight">Experts</span></h2>
            <p>The passionate minds driving our clients' success.</p>
          </motion.div>
          
          <motion.div 
            className="team-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                className="team-card glass" 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <div className="member-image-placeholder" style={{ backgroundColor: member.imageColor }}>
                  <span className="initials">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role text-highlight">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
