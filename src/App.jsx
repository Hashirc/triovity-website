import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/home.jsx'
import About from './pages/about/About.jsx'
import Services from './pages/services/Services.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'
import Blog from './pages/blog/Blog.jsx'
import BlogPost from './pages/blog-detail/BlogPost.jsx'
import Contact from './pages/contact/Contact.jsx'
import Login from './pages/auth/Login.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
