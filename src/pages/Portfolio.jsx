import { Instagram, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import './Portfolio.css';

// Import Assets
import carawan1 from '../assets/portfolio/carawan_collage_v3_grid_1.jpg';
import carawan2 from '../assets/portfolio/carawan_collage_v3_grid_2.jpg';
import mirable1 from '../assets/portfolio/mirable_collage_v3_grid_1.jpg';
import mirable2 from '../assets/portfolio/mirable_collage_v3_grid_2.jpg';
import pawpaths from '../assets/portfolio/pawpaths_collage_v3_grid.jpg';
import rosticoco from '../assets/portfolio/rosticoco_collage_v3_grid.jpg';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const socialMediaClients = [
  {
    id: "carawan",
    name: "Carawan Sweets",
    role: "Social Media Management",
    description: "Elevating the digital presence of Carawan Sweets through vibrant, mouth-watering content and strategic social media engagement.",
    images: [carawan1],
    color: "#e63946",
    instagram: "https://www.instagram.com/carawan_sweets"
  },
  {
    id: "mirable",
    name: "Mirable Beauty Parlour",
    role: "Brand Aesthetic & Marketing",
    description: "Crafting a sophisticated and tranquil online aesthetic for Mirable Beauty Parlour, focusing on elegance and professional care.",
    images: [mirable1],
    color: "#457b9d",
    instagram: "https://www.instagram.com/mirable_beauty_parlor"
  },
  {
    id: "pawpaths",
    name: "Pawpaths Pets Relocation",
    role: "Content Strategy",
    description: "Showcasing the heartwarming success stories of pet relocations with a focus on trust, warmth, and global expertise.",
    images: [pawpaths],
    color: "#2a9d8f",
    instagram: "https://www.instagram.com/pawpaths"
  },
  {
    id: "rosticoco",
    name: "Rosti Coco",
    role: "Lifestyle Content Creation",
    description: "Capturing the organic essence of Rosti Coco products with modern, lifestyle-oriented content and earthy textures.",
    images: [rosticoco],
    color: "#2b2d42",
    instagram: "https://www.instagram.com/rosticoco"
  }
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
          <motion.h1 variants={fadeInUp}>Social Media <span className="text-highlight">Showcase</span></motion.h1>
          <motion.p className="page-subtitle" variants={fadeInUp}>
            Graphic design and content creation that drives engagement and builds brands.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content: Client Sections */}
      <div className="portfolio-showcase">
        {socialMediaClients.map((client, index) => (
          <section className={`client-section ${index % 2 === 1 ? 'reverse' : ''}`} key={client.id}>
            <div className="container">
              <motion.div 
                className="client-content-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {/* Client Info */}
                <motion.div className="client-info" variants={fadeInUp}>
                  <span className="client-role" style={{ color: client.color }}>{client.role}</span>
                  <h2 className="client-name">{client.name}</h2>
                  <p className="client-description">{client.description}</p>
                  <motion.a 
                    href={client.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline btn-insta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on Instagram <Instagram size={18} className="ml-2" />
                  </motion.a>
                </motion.div>

                {/* Client Visual Showcase */}
                <motion.div className="client-visuals" variants={fadeInUp}>
                  <div className={`collage-grid images-${client.images.length}`}>
                    {client.images.map((img, i) => (
                      <motion.div 
                        key={i} 
                        className="collage-item glass"
                        whileHover={{ scale: 1.02, zIndex: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img src={img} alt={`${client.name} work ${i+1}`} loading="lazy" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="portfolio-footer section-padding text-center gradient-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Want a Brand <span className="text-highlight">Identity</span> Like This?</h2>
            <p>Let's craft your social media presence together.</p>
            <motion.a 
              href="/contact" 
              className="btn btn-primary mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project <ExternalLink size={20} className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
