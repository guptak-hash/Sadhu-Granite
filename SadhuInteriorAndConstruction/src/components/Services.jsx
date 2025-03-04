
import './services.css';
import Navbar from '../common/Navbar';

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className="services-container">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive construction and interior design solutions</p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-description">
            We provide end-to-end solutions for all your construction and interior design needs.
            From initial concept to final execution, our team handles every aspect of your project
            with precision and creativity.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <span className="material-icon">🏗️</span>
              </div>
              <h3>Commercial Construction</h3>
              <p>Building state-of-the-art commercial spaces that boost business performance.</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <span className="material-icon">🏠</span>
              </div>
              <h3>Residential Construction</h3>
              <p>Creating beautiful, functional homes that reflect your personal style and needs.</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <span className="material-icon">🎨</span>
              </div>
              <h3>Interior Design</h3>
              <p>Transforming spaces with thoughtful design that balances aesthetics and functionality.</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <span className="material-icon">🛠️</span>
              </div>
              <h3>Renovations</h3>
              <p>Breathing new life into existing spaces with expert renovations and remodeling.</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <span className="material-icon">📝</span>
              </div>
              <h3>Project Planning</h3>
              <p>Detailed planning and coordination to ensure your project runs smoothly from start to finish.</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <span className="material-icon">🌱</span>
              </div>
              <h3>Sustainable Building</h3>
              <p>Eco-friendly construction practices and materials for environmentally conscious projects.</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-description">
            We follow a structured approach to ensure every project is completed efficiently and to your satisfaction.
          </p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Consultation</h3>
                <p>We begin with an in-depth discussion about your vision, requirements, and budget.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Concept Development</h3>
                <p>Our design team creates initial concepts and plans based on your input.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Design Refinement</h3>
                <p>We refine the designs with your feedback until they perfectly match your vision.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Construction</h3>
                <p>Our skilled craftsmen bring the designs to life with precision and attention to detail.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Final Touches</h3>
                <p>We add the finishing touches that make your space truly special.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Handover</h3>
                <p>We complete a thorough quality check before handing over your finished project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-slider">
            <div className="project-slide">
              <div className="project-image">
                <img src="/api/placeholder/800/500" alt="Modern office space" />
              </div>
              <div className="project-info">
                <h3>Modern Office Renovation</h3>
                <p>Complete renovation of a 10,000 sq ft corporate office space.</p>
              </div>
            </div>
          </div>
          <div className="view-all-container">
            <a href="/projects" className="view-all-btn">View All Projects</a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free consultation and quote.</p>
            <a href="/contact" className="cta-button">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;