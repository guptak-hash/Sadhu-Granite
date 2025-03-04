
// import './contact.css';
import Navbar from '../common/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Reach out to discuss your next project</p>
        </div>
      </div>

      {/* Contact Information & Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                We're here to answer any questions you have about our services. 
                Contact us today and let's start a conversation about your project.
              </p>
              
              <div className="info-item">
                <div className="icon">📞</div>
                <div className="details">
                  <h3>Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">✉️</div>
                <div className="details">
                  <h3>Email</h3>
                  <p>info@yourcompany.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">📍</div>
                <div className="details">
                  <h3>Address</h3>
                  <p>123 Main Street, Suite 200<br />Anytown, ST 12345</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">🕒</div>
                <div className="details">
                  <h3>Hours</h3>
                  <p>Monday - Friday: 8am - 6pm<br />Saturday: 9am - 2pm<br />Sunday: Closed</p>
                </div>
              </div>
              
              <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">FB</a>
                  <a href="#" className="social-icon">IG</a>
                  <a href="#" className="social-icon">LI</a>
                  <a href="#" className="social-icon">PT</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service">
                    <option value="">Select a Service</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Construction</option>
                    <option value="interior">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <img src="/api/placeholder/1200/400" alt="Map location" />
            <div className="map-overlay">
              <p>Interactive Map Would Display Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What areas do you serve?</h3>
              <p>We currently serve the greater metropolitan area and surrounding counties within a 50-mile radius.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I get a quote for my project?</h3>
              <p>You can request a quote by filling out our contact form or calling our office. We'll schedule a consultation to discuss your project needs.</p>
            </div>
            
            <div className="faq-item">
              <h3>How long does a typical project take?</h3>
              <p>Project timelines vary depending on scope and complexity. Small renovations may take a few weeks, while larger construction projects can take several months.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer financing options?</h3>
              <p>Yes, we partner with several financial institutions to offer flexible financing options for qualified clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="consultation-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Schedule a Free Consultation</h2>
            <p>Let's discuss your project needs and how we can help bring your vision to life.</p>
            <a href="#" className="cta-button">Book Consultation</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
