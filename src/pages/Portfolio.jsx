import { useState } from 'react';
import { Instagram, ExternalLink, Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

// Import Assets
import carawan1 from '../assets/portfolio/carawan_collage_v3_grid_1.jpg';
import carawan2 from '../assets/portfolio/carawan_collage_v3_grid_2.jpg';
import mirable1 from '../assets/portfolio/mirable_collage_v3_grid_1.jpg';
import mirable2 from '../assets/portfolio/mirable_collage_v3_grid_2.jpg';
import pawpaths from '../assets/portfolio/pawpaths_collage_v3_grid.jpg';
import rosticoco from '../assets/portfolio/rosticoco_collage_v3_grid.jpg';

// Import Poster Data
import postersData from '../data/postersData.json';

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
    instagram: "https://www.instagram.com/carawansweets?igsh=Ynd1eXJ3Njh1OWp3"
  },
  {
    id: "mirable",
    name: "Mirable Beauty Parlour",
    role: "Brand Aesthetic & Marketing",
    description: "Crafting a sophisticated and tranquil online aesthetic for Mirable Beauty Parlour, focusing on elegance and professional care.",
    images: [mirable1],
    color: "#457b9d",
    instagram: "https://www.instagram.com/mirabel_alain?igsh=MTAzZWhsdXh4aDRmZw%3D%3D"
  },
  {
    id: "pawpaths",
    name: "Pawpaths Pets Relocation",
    role: "Content Strategy",
    description: "Showcasing the heartwarming success stories of pet relocations with a focus on trust, warmth, and global expertise.",
    images: [pawpaths],
    color: "#2a9d8f",
    instagram: "https://www.instagram.com/pawpathsae?igsh=cHI3Y2Jvbzk1NjN3"
  },
  {
    id: "rosticoco",
    name: "Rosti Coco",
    role: "Lifestyle Content Creation",
    description: "Capturing the organic essence of Rosti Coco products with modern, lifestyle-oriented content and earthy textures.",
    images: [rosticoco],
    color: "#2b2d42",
    instagram: "https://www.instagram.com/idukkigold.ae?igsh=MTFnbnJiMHc2OGM3Nw%3D%3D"
  }
];

const Portfolio = () => {
  const [activeModalClient, setActiveModalClient] = useState(null);

  // Helper to get active client details
  const currentModalDetails = socialMediaClients.find(c => c.id === activeModalClient);

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
                  <div className="client-buttons">
                    <motion.button 
                      onClick={() => setActiveModalClient(client.id)}
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      See Full Posters <ImageIcon size={18} className="ml-2" />
                    </motion.button>
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
                  </div>
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

      {/* Poster Modal Overlay */}
      <AnimatePresence>
        {activeModalClient && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalClient(null)}
          >
            <motion.div 
              className="modal-content glass"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{currentModalDetails?.name} <span className="text-highlight">Archive</span></h2>
                <button className="modal-close" onClick={() => setActiveModalClient(null)}>
                  <X size={28} />
                </button>
              </div>
              
              <div className="modal-body">
                {postersData[activeModalClient] && postersData[activeModalClient].length > 0 ? (
                  <div className="modal-poster-grid">
                    {postersData[activeModalClient].map((posterUrl, idx) => (
                      <motion.div 
                        className="modal-poster-item" 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 4) * 0.1 }}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                      >
                        <img src={posterUrl} alt={`${currentModalDetails?.name} Poster ${idx + 1}`} loading="lazy" />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center" style={{ color: 'var(--color-text-light)' }}>
                    No posters available for this client.
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
