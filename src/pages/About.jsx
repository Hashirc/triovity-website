import { Target, Lightbulb, Users } from 'lucide-react';
import './About.css';

const teamMembers = [
  {
    name: "Hashir",
    role: "Lead Developer",
    bio: "Full-stack wizard building seamless web experiences.",
    imageColor: "var(--color-primary-red)"
  },
  {
    name: "Isham",
    role: "Digital Marketer & Creative Strategist",
    bio: "Creative mind behind viral brand campaigns and data-driven marketing.",
    imageColor: "#457b9d"
  },
  {
    name: "Yasir Sha",
    role: "Developer & Creative Designer",
    bio: "Crafting beautiful, functional, and user-centric digital experiences.",
    imageColor: "#1d3557"
  }
];

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header gradient-bg text-center">
        <div className="container">
          <h1 className="animate-fade-up">About <span className="text-highlight">Triovity</span></h1>
          <p className="page-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Driving digital excellence through innovation and strategy
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section-padding">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card glass">
              <div className="mv-icon">
                <Target size={40} />
              </div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses of all sizes with cutting-edge digital marketing and web development strategies that deliver measurable ROI, accelerate growth, and build lasting customer relationships.
              </p>
            </div>
            
            <div className="mv-card glass">
              <div className="mv-icon">
                <Lightbulb size={40} />
              </div>
              <h2>Our Vision</h2>
              <p>
                To be the world's most trusted digital growth partner, recognized for our innovative solutions, data-driven methodology, and unwavering commitment to client success in the ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="company-background section-padding gradient-bg">
        <div className="container bg-container">
          <div className="bg-text">
            <h2>Our Story</h2>
            <p className="lead-text">From a small startup to a leading full-service agency.</p>
            <p>
              Triovity was founded on a simple principle: digital marketing shouldn't be a black box. We saw businesses struggling with disconnected agencies, opaque reporting, and websites that look pretty but fail to convert.
            </p>
            <p>
              We built Triovity to provide end-to-end digital solutions. Our interconnected teams—spanning web development, SEO, content, and paid media—work in perfect synergy. This holistic approach ensures every digital touchpoint serves one ultimate goal: growing your business.
            </p>
            <div className="core-values">
              <div className="value-item">
                <Users size={24} className="text-highlight" />
                <span>Client-Centric Approach</span>
              </div>
              <div className="value-item">
                <Users size={24} className="text-highlight" />
                <span>Radical Transparency</span>
              </div>
              <div className="value-item">
                <Users size={24} className="text-highlight" />
                <span>Data-Driven Decisions</span>
              </div>
            </div>
          </div>
          <div className="bg-image-wrapper">
             <div className="glass image-placeholder">
               <div className="abstract-circle"></div>
               <div className="abstract-square"></div>
               <h3 className="placeholder-text">Triovity HQ</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Meet The <span className="text-highlight">Experts</span></h2>
            <p>The passionate minds driving our clients' success.</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card glass" key={index}>
                <div className="member-image-placeholder" style={{ backgroundColor: member.imageColor }}>
                  <span className="initials">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role text-highlight">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
