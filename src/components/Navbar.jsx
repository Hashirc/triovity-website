import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled glass' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          Tri<span className="text-highlight">ovity</span>
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active-link' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-cta-mobile">
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>
        </div>

        <div className="nav-cta-desktop">
          <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
