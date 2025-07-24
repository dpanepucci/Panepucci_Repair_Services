
import './App.css'
import { useState } from 'react'
import NavBar from './Components/NavBar'
import Contact from './Components/Contact'

import panepucciSR from '../public/panepucciSR.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Home Section Component
  const HomeSection = () => (
    <section id="home" className="section">
      <div className="hero">
        <img className="mainLogo" src={panepucciSR} alt="Panepucci Repair and Services Logo" />
        {/* <h1>Welcome to Panepucci Repair and Services</h1> */}
        <p>Your premier destination for professional diesel and automotive services</p>
        <div className="hero-buttons">
          <button onClick={() => setActiveSection('services')}>Our Services</button>
          <button onClick={() => setActiveSection('contact')}>Get Started</button>
        </div>
      </div>
    </section>
  )

  // About Section Component
  const AboutSection = () => (
    <section id="about" className="section">
      <div className="container">
        <h2>About Panepucci Repair & Services</h2>
        <p>
          Panepucci Repair and Services is a small, family-owned business specializing in field repairs for heavy equipment in construction, mining, and oil & gas. We offer the responsiveness, attention to detail, and accountability larger companies can’t match. With hands-on experience solving tough problems on-site, we understand the urgency of keeping your equipment moving. Whether it’s a breakdown or routine maintenance, we show up ready to get the job done—quickly, safely, and reliably. When you work with us, you’re dealing directly with the people who take pride in doing it right.
        </p>
          <div className="about-grid">
            <div className="about-card">
              <h3>On-Site Expertise</h3>
              <p>
                We come to you—no matter how remote the job site. Our technicians bring deep experience diagnosing and fixing equipment issues right where they happen.
              </p>
            </div>
            <div className="about-card">
              <h3>Rapid Response</h3>
              <p>
                Downtime costs money. That’s why we prioritize quick dispatch and efficient service to get your machines back up and running without delay.
              </p>
            </div>
            <div className="about-card">
              <h3>Trusted Craftsmanship</h3>
              <p>
                We treat your equipment like our own, focusing on quality work that lasts. No shortcuts—just reliable repairs from people who take pride in the job.
              </p>
            </div>
          </div>
      </div>
    </section>
  )

  // Services Section Component
  const ServicesSection = () => (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Field Diagnostics & Repairs</h3>
            <p>
              On-site troubleshooting and repair of heavy equipment, getting you back up and running fast.
            </p>
            <ul>
              <li>Diesel engine diagnostics</li>
              <li>Electrical system troubleshooting</li>
              <li>Emergency breakdown response</li>
              <li>Component replacement & testing</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Preventative Maintenance</h3>
            <p>
              Scheduled service to minimize downtime and extend the life of your equipment.
            </p>
            <ul>
              <li>Fluid checks & changes</li>
              <li>Filter replacements</li>
              <li>System inspections</li>
              <li>Maintenance documentation</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Welding & Fabrication</h3>
            <p>
              Custom on-site welding and fabrication services to repair or modify structural components.
            </p>
            <ul>
              <li>Heavy equipment welding</li>
              <li>Crack repairs & reinforcements</li>
              <li>Custom brackets & mounts</li>
              <li>Steel fabrication on demand</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Line Boring</h3>
            <p>
              Precision line boring for worn-out or damaged pin holes and bores.
            </p>
            <ul>
              <li>On-site mobile line boring</li>
              <li>Bushing installation</li>
              <li>Weld buildup & machining</li>
              <li>Pin & bore restoration</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Hydraulic Services</h3>
            <p>
              Comprehensive hydraulic system repair and servicing to restore performance.
            </p>
            <ul>
              <li>Cylinder rebuilds</li>
              <li>Hose & fitting replacement</li>
              <li>Hydraulic leak repair</li>
              <li>System pressure testing</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Undercarriage Work</h3>
            <p>
              Inspection, repair, and replacement of undercarriage components to maximize uptime.
            </p>
            <ul>
              <li>Track adjustments</li>
              <li>Roller & idler replacement</li>
              <li>Sprocket servicing</li>
              <li>Wear component inspections</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Heavy Truck Support</h3>
            <p>
              Field service and repairs for dump trucks and support vehicles on construction sites.
            </p>
            <ul>
              <li>Brake & suspension repairs</li>
              <li>Hydraulic dump system servicing</li>
              <li>Engine diagnostics</li>
              <li>Fleet maintenance support</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Small Crane & Rigging Services</h3>
            <p>
              Light crane operations to assist with lifting, placement, and assembly in the field.
            </p>
            <ul>
              <li>Rigging and lifting support</li>
              <li>Equipment placement</li>
              <li>Light assembly work</li>
              <li>Site logistics assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )

  // Function to render the active section
  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection />
      case 'about':
        return <AboutSection />
      case 'services':
        return <ServicesSection />
      case 'contact':
        return <Contact />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="app">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  )
}

export default App;

