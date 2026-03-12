import React, { useState } from "react";

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://cloudserve-api.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);

      alert("Message sent successfully");
      onClose();

    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div
        className="quote-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="quote-modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="quote-modal-body">
          <form onSubmit={handleSubmit} className="quote-form">

            <div className="form-group mb-4">
              <label htmlFor="fullName" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control quote-input"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="form-control quote-input"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control quote-input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                className="form-control quote-input"
                rows="5"
                placeholder="Tell us about your needs..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn quote-submit-btn">
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;