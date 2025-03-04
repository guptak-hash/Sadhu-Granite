
// import './projects.css';
import Navbar from '../common/Navbar';

const Projects = () => {
  return (
    <>
    <Navbar/>
    <div className="projects-container">
      {/* Hero Section */}
      <div className="projects-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Our Projects</h1>
          <p>A showcase of our finest work in construction and interior design</p>
        </div>
      </div>

      {/* Portfolio Filter */}
      <section className="portfolio-filter">
        <div className="container">
          <div className="filter-buttons">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Commercial</button>
            <button className="filter-btn">Residential</button>
            <button className="filter-btn">Interior Design</button>
            <button className="filter-btn">Renovation</button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Modern office building" />
                <div className="overlay">
                  <a href="/project-details" className="view-project">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Sky Tower Office Complex</h3>
                <p className="project-category">Commercial Construction</p>
                <p className="project-description">
                  A 25-story office complex featuring modern architecture and sustainable design elements.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Luxury home interior" />
                <div className="overlay">
                  <a href="/project-details" className="view-project">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Lakeside Villa</h3>
                <p className="project-category">Residential Construction</p>
                <p className="project-description">
                  A luxury lakefront home with custom design elements and panoramic views.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Restaurant interior design" />
                <div className="overlay">
                  <a href="/project-details" className="view-project">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Bistro Nouveau</h3>
                <p className="project-category">Interior Design</p>
                <p className="project-description">
                  Complete interior design for an upscale French restaurant, featuring custom furnishings and lighting.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Hotel renovation" />
                <div className="overlay">
                  <a href="/project-details" className="view-project">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Grand Hotel Renovation</h3>
                <p className="project-category">Renovation</p>
                <p className="project-description">
                  Comprehensive renovation of a historic hotel, preserving original architecture while adding modern amenities.
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Modern apartment interior" />
                <div className="overlay">
                  <a href="/project-details" className="view-project">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Urban Loft Apartments</h3>
                <p className="project-category">Residential & Interior Design</p>
                <p className="project-description">
                  A multi-unit residential project featuring contemporary design and space-saving solutions.
                </p>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Retail store design" />
                <div className="overlay">
                  <a href="/project-details" className="view-project">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Elegance Boutique</h3>
                <p className="project-category">Commercial & Interior Design</p>
                <p className="project-description">
                  Design and construction of a high-end retail space with custom fixtures and lighting.
                </p>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <a href="#" className="page-number active">1</a>
            <a href="#" className="page-number">2</a>
            <a href="#" className="page-number">3</a>
            <a href="#" className="next-page">Next →</a>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="project-testimonials">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonial-carousel">
            <div className="testimonial">
              <div className="quote-mark">"</div>
              <p className="quote-text">
                The attention to detail and quality of work exceeded our expectations. Our new office has transformed how our team collaborates and works.
              </p>
              <div className="client-info">
                <p className="client-name">Thomas Wilson</p>
                <p className="client-position">CEO, Wilson Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="project-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>Let's discuss how we can bring your vision to life.</p>
            <a href="/contact" className="cta-button">Start Your Project</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Projects;
