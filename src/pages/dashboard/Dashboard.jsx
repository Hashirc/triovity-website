import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Dashboard.css'; // optional styling

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="dashboard-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />
      <section className="dashboard-section glass">
        <h2 className="text-highlight">Dashboard</h2>
        <p>Welcome to your dashboard. Here you could show analytics, recent projects, or any protected content.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Dashboard;
