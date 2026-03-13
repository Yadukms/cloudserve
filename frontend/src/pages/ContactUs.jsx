// import React from 'react';
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {

  //     const response = await fetch("http://localhost:5000/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     const data = await response.json();

  //     console.log(data);

  //     alert("Message sent successfully");

  //   } catch (error) {

  //     console.error(error);

  //     alert("Failed to send message");

  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    try {

      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      alert("Message sent successfully");

    } catch (error) {

      alert("Failed to send message");

    }
  };
  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section className="header" style={{ height: '60vh' }}>
        <div className="card header-card" style={{ height: '100%', minHeight: 'auto', overflow: 'hidden' }}>
          <video className="card-video-bg" autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
            <source src="/static/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gradient-overlay"></div>
          <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start" style={{ paddingBottom: '3rem' }}>
            <div className="container">
              <h1 className="hero-title">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="section-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="pill-section-1">
                <div className="pill-tab" style={{ justifyContent: 'flex-start' }}>
                  <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" />
                  <p className="pill-text">Contact Us</p>
                </div>
                <h1 className="section-heading-1" style={{ textAlign: 'left', maxWidth: '100%' }}>Let’s Start the Conversation</h1>
                <p className="section-subheading-1" style={{ textAlign: 'left', maxWidth: '100%' }}>
                  Whether you're planning your next project, require dedicated technical assistance, or are simply curious about the services Cloudserve offers—our team is ready to hear from you.
                </p>
                <p className="section-subheading-1" style={{ textAlign: 'left', maxWidth: '100%', marginTop: '1rem', fontWeight: '500', color: '#000' }}>
                  Send us a message using the contact form below.
                </p>
                <button className="btn about-btn mt-4">
                  Contact Us <span>&#8594;</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/static/images/about.webp" alt="Team" className="img-fluid" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Offices Section */}
      <div className="section-1" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="pill-section">
            <div className="pill-tab">
              <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" />
              <p className="pill-text">Offices</p>
            </div>
            <h1 className="section-heading-1">Offices</h1>
          </div>

          <div className="row mt-5 g-4">
            {/* Office Card 1 */}
            <div className="col-lg-6">
              <div className="card h-100 border-0" style={{ borderRadius: '1.5rem', backgroundColor: '#F3F4F6', overflow: 'hidden' }}>
                <div style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                  <img src="/static/images/image.png" alt="Office Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="card-body p-4">
                  <h5 style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '1.5rem' }}>Cloudserve - Head Office</h5>

                  <div className="d-flex align-items-start mb-3">
                    <span className="me-2" style={{ color: '#10B981', fontSize: '1.2rem' }}>📍</span>
                    <p className="mb-0" style={{ fontWeight: '500' }}>Address line 1</p>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <span className="me-2" style={{ color: '#10B981', fontSize: '1.2rem' }}>📅</span>
                    <p className="mb-0" style={{ fontWeight: '500' }}>Sat-Thu (Friday Closed)</p>
                  </div>

                  <div className="d-flex align-items-start">
                    <span className="me-2" style={{ color: '#10B981', fontSize: '1.2rem' }}>🕒</span>
                    <p className="mb-0" style={{ fontWeight: '500' }}>8:30 AM - 12:30 PM, 4:30 PM-9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card 2 */}
            <div className="col-lg-6">
              <div className="card h-100 border-0" style={{ borderRadius: '1.5rem', backgroundColor: '#F3F4F6', overflow: 'hidden' }}>
                <div style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                  <img src="/static/images/image.png" alt="Office Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="card-body p-4">
                  <h5 style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '1.5rem' }}>Cloudserve - Head Office</h5>

                  <div className="d-flex align-items-start mb-3">
                    <span className="me-2" style={{ color: '#10B981', fontSize: '1.2rem' }}>📍</span>
                    <p className="mb-0" style={{ fontWeight: '500' }}>Address line 1</p>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <span className="me-2" style={{ color: '#10B981', fontSize: '1.2rem' }}>📅</span>
                    <p className="mb-0" style={{ fontWeight: '500' }}>Sat-Thu (Friday Closed)</p>
                  </div>

                  <div className="d-flex align-items-start">
                    <span className="me-2" style={{ color: '#10B981', fontSize: '1.2rem' }}>🕒</span>
                    <p className="mb-0" style={{ fontWeight: '500' }}>8:30 AM - 12:30 PM, 4:30 PM-9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="container">
          <div className="pill-section" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
            <div className="pill-tab">
              <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" />
              <p className="pill-text">Contact Us</p>
            </div>
            <h1 className="section-heading-1" style={{ textAlign: 'left', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>Send a quick message</h1>
          </div>

          <div className="row mt-5">
            {/* Contact Info Card */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="p-4 p-lg-5 h-100" style={{ backgroundColor: '#F3F4F6', borderRadius: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1.5rem' }}>Contact Information</h3>

                <div className="mb-4">
                  <p className="mb-1" style={{ fontSize: '1rem', color: '#666' }}>Email</p>
                  <a href="mailto:info@cloudserve.qa" className="no-decoration" style={{ color: '#0B5394', fontWeight: '600', fontSize: '1.1rem' }}>info@cloudserve.qa</a>
                </div>

                <div className="mb-4">
                  <p className="mb-1" style={{ fontSize: '1rem', color: '#666' }}>Phone</p>
                  <a href="tel:+97444440000" className="no-decoration" style={{ color: '#0B5394', fontWeight: '600', fontSize: '1.1rem' }}>+974 4444 0000</a>
                </div>

                <div className="mb-4">
                  <p className="mb-1" style={{ fontSize: '0.9rem', color: '#666' }}>Location</p>
                  <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>Address line 1, Address line 2</p>
                </div>

                <div className="mb-5">
                  <p className="mb-1" style={{ fontSize: '0.9rem', color: '#666' }}>Office Hours</p>
                  <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>+91 89647158</p>
                </div>

                <button className="btn about-btn">
                  Contact Us <span>&#8594;</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-6 offset-lg-1">
              {/* <form> */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label" style={{ fontWeight: '600' }}>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control p-3"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {/* <input type="text" className="form-control p-3" placeholder="Enter your full name" style={{ borderRadius: '0.5rem', backgroundColor: '#fff', border: '1px solid #dee2e6' }} /> */}
                </div>

                <div className="mb-4">
                  <label className="form-label" style={{ fontWeight: '600' }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control p-3"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {/* <input type="email" className="form-control p-3" placeholder="Enter your email address" style={{ borderRadius: '0.5rem', backgroundColor: '#fff', border: '1px solid #dee2e6' }} /> */}
                </div>

                <div className="mb-4">
                  <label className="form-label" style={{ fontWeight: '600' }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control p-3"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {/* <input type="tel" className="form-control p-3" placeholder="Enter your phone number" style={{ borderRadius: '0.5rem', backgroundColor: '#fff', border: '1px solid #dee2e6' }} /> */}
                </div>

                <div className="mb-4">
                  <label className="form-label" style={{ fontWeight: '600' }}>Message * </label>
                  <textarea
                    name="message"
                    className="form-control p-3"
                    rows="5"
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {/* <textarea className="form-control p-3" rows="5" placeholder="Tell us about your needs...." style={{ borderRadius: '0.5rem', backgroundColor: '#fff', border: '1px solid #dee2e6' }}></textarea> */}
                </div>

                <button type="submit" className="btn btn-primary w-100 p-3" style={{ backgroundColor: '#0B5394', border: 'none', borderRadius: '0.5rem', fontWeight: '500' }}>
                  Send Message <span className="ms-2"></span>
                  {/* Replaced paper plane icon with generic text or icon if available, using text for now or simple unicode */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
