import { Globe, Search, Share2, PenTool, MousePointerClick, PieChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const servicesData = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: <PieChart size={40} />,
    description: "Comprehensive, data-driven marketing campaigns that maximize your brand's reach and ROI across all digital channels.",
    features: ["Market Research", "Campaign Strategy", "Analytics & Reporting", "Conversion Optimization"]
  },
  {
    id: "web-development",
    title: "Website Development",
    icon: <Globe size={40} />,
    description: "Custom, responsive, and blazing-fast websites engineered to convert your visitors into loyal customers.",
    features: ["Custom UI/UX Design", "E-commerce Solutions", "CMS Integration", "Performance Tuning"]
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    icon: <Search size={40} />,
    description: "White-hat SEO strategies to rank higher on Google, outpace competitors, and bring steady organic traffic.",
    features: ["Keyword Strategy", "On-Page Optimization", "Technical SEO", "Link Building"]
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    icon: <Share2 size={40} />,
    description: "Engaging social content and community management to build brand loyalty on platforms like Instagram, LinkedIn, and Facebook.",
    features: ["Content Creation", "Community Management", "Influencer Outreach", "Social Listening"]
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    icon: <PenTool size={40} />,
    description: "High-quality, authoritative content that resonates with your audience and establishes your brand as an industry leader.",
    features: ["Blog Articles", "Whitepapers", "Video Scripts", "Email Newsletters"]
  },
  {
    id: "ppc",
    title: "Google Ads / PPC",
    icon: <MousePointerClick size={40} />,
    description: "Targeted pay-per-click advertising campaigns designed to deliver immediate visibility and highly qualified leads.",
    features: ["Search Ads", "Display Ads", "Retargeting Campaigns", "A/B Testing"]
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header text-center gradient-bg">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>Our <span className="text-highlight">Services</span></motion.h1>
          <motion.p className="page-subtitle" variants={fadeInUp}>
            A full suite of digital solutions to accelerate your growth.
          </motion.p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="services-list-section section-padding">
        <div className="container">
          <motion.div 
            className="services-full-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {servicesData.map((service, index) => (
              <motion.div 
                className="service-detail-card glass" 
                key={service.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="service-header">
                  <div className="service-icon-large text-highlight">
                    {service.icon}
                  </div>
                  <h2>{service.title}</h2>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="divider"></div>
                <h4>What's Included:</h4>
                <ul className="service-feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="service-cta">
                  <Link to="/contact" className="btn btn-outline">
                    Get Started <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bottom-cta section-padding text-center gradient-bg">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>Not sure what you need?</motion.h2>
          <motion.p variants={fadeInUp}>Schedule a free consultation and we'll audit your current digital presence.</motion.p>
          <motion.div className="cta-actions" variants={fadeInUp}>
            <Link to="/contact" className="btn btn-primary">Book Free Consultation</Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
