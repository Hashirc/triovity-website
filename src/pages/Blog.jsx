import { Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Blog.css';

import { blogPosts } from '../data/blogData';

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

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Page Header */}
      <section className="page-header text-center gradient-bg">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>Digital Marketing <span className="text-highlight">Insights</span></motion.h1>
          <motion.p className="page-subtitle" variants={fadeInUp}>
            Expert advice, industry trends, and actionable strategies.
          </motion.p>
        </motion.div>
      </section>

      {/* Blog List Section */}
      <section className="blog-list-section section-padding">
        <div className="container">
          
          {/* Categories Filter (Visual only) */}
          <motion.div 
            className="blog-categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button className="category-btn active">All Articles</button>
            <button className="category-btn">SEO</button>
            <button className="category-btn">Content Marketing</button>
            <button className="category-btn">Social Media</button>
            <button className="category-btn">PPC</button>
            <button className="category-btn">Web Development</button>
          </motion.div>

          <motion.div 
            className="blog-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {blogPosts.map((post) => (
              <motion.article 
                className="blog-card glass" 
                key={post.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="blog-card-image" style={{ background: post.gradient }}>
                  <div className="blog-category-badge">{post.category}</div>
                </div>
                
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="meta-item">
                      <User size={14} /> {post.author}
                    </span>
                    <span className="meta-item">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="blog-title">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-card-footer">
                    <span className="blog-date">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="btn-read-more">
                      Read Article <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          <motion.div 
            className="pagination text-center mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="btn btn-primary">Load More Articles</button>
          </motion.div>

        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter-section section-padding text-center gradient-bg">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>Never Miss An <span className="text-highlight">Update</span></motion.h2>
          <motion.p variants={fadeInUp}>Join 10,000+ marketers receiving our best strategies weekly.</motion.p>
          <motion.form 
            className="blog-newsletter-form mx-auto" 
            onSubmit={(e) => e.preventDefault()}
            variants={fadeInUp}
          >
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </motion.form>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
