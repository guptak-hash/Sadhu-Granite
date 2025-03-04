
import './about.css';
import Navbar from '../common/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>About Our Company</h1>
          <p>Building dreams with precision and passion since 2005</p>
        </div>
      </div>

      {/* Company Story Section */}
      <section className="company-story">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <h2>Our Story</h2>
              <p className="subtitle">Crafting spaces that inspire</p>
              <p>Founded in 2005, our company has grown from a small local contractor to a full-service construction and interior design firm. We've built our reputation on quality craftsmanship, innovative design, and exceptional client service.</p>
              <p>Our team of experienced professionals brings creativity and technical expertise to every project, ensuring that we deliver spaces that are both beautiful and functional.</p>
            </div>
            <div className="col-right">
              <div className="image-container">
                <img src="/api/placeholder/600/400" alt="Our team at work" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-values">
        <div className="container">
          <h2 className="section-title">Our Mission & Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon-container">
                <span className="material-icon">✓</span>
              </div>
              <h3>Quality</h3>
              <p>We never compromise on materials or workmanship, ensuring long-lasting results.</p>
            </div>
            <div className="value-card">
              <div className="icon-container">
                <span className="material-icon">♡</span>
              </div>
              <h3>Integrity</h3>
              <p>We operate with transparency and honesty in every client interaction.</p>
            </div>
            <div className="value-card">
              <div className="icon-container">
                <span className="material-icon">★</span>
              </div>
              <h3>Innovation</h3>
              <p>We embrace new techniques and materials to create cutting-edge designs.</p>
            </div>
            <div className="value-card">
              <div className="icon-container">
                <span className="material-icon">⚑</span>
              </div>
              <h3>Sustainability</h3>
              <p>We incorporate eco-friendly practices in all our projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The experts behind our exceptional work</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team member" />
              </div>
              <h3>John Smith</h3>
              <p className="position">Principal Architect</p>
              <p>With over 20 years of experience, John leads our architectural vision.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team member" />
              </div>
              <h3>Emily Johnson</h3>
              <p className="position">Interior Design Director</p>
              <p>Emily brings spaces to life with her innovative design approach.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team member" />
              </div>
              <h3>Michael Rodriguez</h3>
              <p className="position">Construction Manager</p>
              <p>Michael ensures every project is completed to perfection.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team member" />
              </div>
              <h3>Sarah Chen</h3>
              <p className="position">Project Coordinator</p>
              <p>Sarah keeps everything running smoothly behind the scenes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <div className="quote">"Working with this team was a dream. They transformed our outdated office into a modern, functional space that our employees love."</div>
              <div className="client-info">
                <p className="name">Robert Taylor</p>
                <p className="company">CEO, Taylor Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;