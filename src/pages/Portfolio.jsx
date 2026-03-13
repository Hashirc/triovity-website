import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import './Portfolio.css';

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

const caseStudies = [
  {
    id: 1,
    client: "EcoLife Dynamics",
    category: "SEO & Content Marketing",
    title: "Tripling Organic Traffic in 6 Months",
    description: "Through comprehensive technical SEO audits, keyword gap analysis, and a structured content strategy, we helped EcoLife Dynamics dominate search results for sustainable living products.",
    metrics: [
      { icon: <TrendingUp size={20} />, label: "315%", desc: "Organic Traffic" },
      { icon: <Users size={20} />, label: "42%", desc: "Conversion Rate" },
      { icon: <DollarSign size={20} />, label: "$2.1M", desc: "Added Revenue" }
    ],
    color: "#e63946"
  },
  {
    id: 2,
    client: "TechFlow SaaS",
    category: "Paid Media (PPC)",
    title: "Scaling B2B Lead Gen with Google Ads",
    description: "By restructuring their ad accounts, refining audience targeting, and optimizing landing pages, we significantly reduced their Cost Per Acquisition while scaling lead volume.",
    metrics: [
      { icon: <TrendingUp size={20} />, label: "250%", desc: "Lead Volume" },
      { icon: <DollarSign size={20} />, label: "-45%", desc: "CPA" },
      { icon: <Users size={20} />, label: "18%", desc: "Close Rate" }
    ],
    color: "#457b9d"
  }
];

const galleryProjects = [
  { id: 1, name: "Elevate E-Commerce", tag: "Web Development", bg: "linear-gradient(135deg, #1d3557 0%, #457b9d 100%)" },
  { id: 2, name: "Nexus Fintech App", tag: "UI/UX Design", bg: "linear-gradient(135deg, #e63946 0%, #f4a261 100%)" },
  { id: 3, name: "GreenEarth Portal", tag: "Custom CMS", bg: "linear-gradient(135deg, #2a9d8f 0%, #e9c46a 100%)" },
  { id: 4, name: "Alpha Fitness App", tag: "Web App", bg: "linear-gradient(135deg, #2b2d42 0%, #8d99ae 100%)" },
  { id: 5, name: "Stellar Real Estate", tag: "Web Development", bg: "linear-gradient(135deg, #023047 0%, #219ebc 100%)" },
  { id: 6, name: "Crave Food Delivery", tag: "React SPA", bg: "linear-gradient(135deg, #d62828 0%, #f77f00 100%)" }
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      {/* Page Header */}
      <section className="page-header text-center gradient-bg">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>Our <span className="text-highlight">Work</span></motion.h1>
          <motion.p className="page-subtitle" variants={fadeInUp}>
            Data-driven results and beautifully crafted digital experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies section-padding">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Featured <span className="text-highlight">Case Studies</span></h2>
            <p>Real results from our integrated marketing campaigns.</p>
          </motion.div>

          <motion.div 
            className="case-studies-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {caseStudies.map((study) => (
              <motion.div 
                className="case-study-card glass" 
                key={study.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="cs-visual" 
                  style={{ backgroundColor: study.color }}
                  whileHover={{ scale: 1.02 }}
                >
                  <TrendingUp size={80} color="white" opacity={0.5} />
                  <div className="cs-overlay text-center">
                    <h3 className="text-white">{study.client}</h3>
                    <p className="text-white">{study.category}</p>
                  </div>
                </motion.div>
                
                <div className="cs-content">
                  <div className="cs-tag">{study.category}</div>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  
                  <div className="cs-metrics">
                    {study.metrics.map((metric, idx) => (
                      <div className="metric-item" key={idx}>
                        <div className="metric-icon">{metric.icon}</div>
                        <div className="metric-details">
                          <span className="metric-val">{metric.label}</span>
                          <span className="metric-desc">{metric.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="link-with-icon cs-btn"
                    whileHover={{ x: 5 }}
                  >
                    Read Full Case Study <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="project-gallery section-padding gradient-bg">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Latest <span className="text-highlight">Website Designs</span></h2>
            <p>A selection of custom web development and UI/UX projects.</p>
          </motion.div>

          <motion.div 
            className="gallery-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {galleryProjects.map((project) => (
              <motion.div 
                className="gallery-item" 
                key={project.id} 
                style={{ background: project.bg }}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="gallery-item-overlay">
                  <div className="gallery-content text-center text-white">
                    <h3 className="text-white">{project.name}</h3>
                    <p className="text-white">{project.tag}</p>
                    <button className="btn btn-outline btn-gallery mt-2" style={{ borderColor: 'white', color: 'white' }}>View Live Site</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
