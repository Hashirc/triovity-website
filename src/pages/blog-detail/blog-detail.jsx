import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import './Blog.css'; // Reuse some Blog styles

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container section-padding text-center">
        <h2>Article Not Found</h2>
        <Link to="/blog" className="btn btn-primary mt-4">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-page pt-24 pb-16">
      <motion.div 
        className="container max-w-4xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        
        <motion.div variants={fadeInUp}>
          <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to all articles
          </Link>
        </motion.div>
        
        <motion.div className="blog-header mb-8" variants={fadeInUp}>
          <div className="blog-category-badge mb-4 inline-block px-3 py-1 rounded-full text-sm font-semibold" style={{ background: post.gradient, color: 'white' }}>
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          <div className="blog-meta flex items-center text-gray-400 gap-6">
            <span className="meta-item flex items-center gap-2">
              <User size={18} /> {post.author}
            </span>
            <span className="meta-item flex items-center gap-2">
              <Clock size={18} /> {post.readTime}
            </span>
            <span className="meta-item flex items-center gap-2">
              {post.date}
            </span>
          </div>
        </motion.div>

        <motion.div 
          className="blog-hero-image w-full h-[300px] md:h-[400px] rounded-2xl mb-12 flex items-center justify-center opacity-80" 
          style={{ background: post.gradient }}
          variants={fadeInUp}
        >
          {/* Abstract placeholder for article image */}
          <h2 className="text-white text-3xl font-bold opacity-30 px-6 text-center">{post.title}</h2>
        </motion.div>

        <motion.div className="blog-content prose prose-invert max-w-none" variants={fadeInUp}>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-[#e63946] pl-6 italic">
            {post.excerpt}
          </p>
          
          <div className="text-gray-300 leading-relaxed space-y-6 text-lg whitespace-pre-line">
            {post.content}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800 text-center"
          variants={fadeInUp}
        >
            <h3 className="text-2xl font-bold text-white mb-6">Enjoyed this article?</h3>
            <p className="text-gray-400 mb-8">Share it with your colleagues or read more on our blog.</p>
            <Link to="/blog" className="btn btn-primary">Read More Articles</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogPost;
