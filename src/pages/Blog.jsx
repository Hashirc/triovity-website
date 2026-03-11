import { Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

import { blogPosts } from '../data/blogData';

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Page Header */}
      <section className="page-header text-center gradient-bg">
        <div className="container">
          <h1 className="animate-fade-up">Digital Marketing <span className="text-highlight">Insights</span></h1>
          <p className="page-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Expert advice, industry trends, and actionable strategies.
          </p>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="blog-list-section section-padding">
        <div className="container">
          
          {/* Categories Filter (Visual only) */}
          <div className="blog-categories">
            <button className="category-btn active">All Articles</button>
            <button className="category-btn">SEO</button>
            <button className="category-btn">Content Marketing</button>
            <button className="category-btn">Social Media</button>
            <button className="category-btn">PPC</button>
            <button className="category-btn">Web Development</button>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article className="blog-card glass" key={post.id}>
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
              </article>
            ))}
          </div>
          
          <div className="pagination text-center mt-5">
            <button className="btn btn-primary">Load More Articles</button>
          </div>

        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter-section section-padding text-center gradient-bg">
        <div className="container">
          <h2>Never Miss An <span className="text-highlight">Update</span></h2>
          <p>Join 10,000+ marketers receiving our best strategies weekly.</p>
          <form className="blog-newsletter-form mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
