import React, { useState } from 'react';

const QuoteModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
        onClose();
    };

    return (
        <div className="quote-modal-overlay" onClick={onClose}>
            <div className="quote-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="quote-modal-close" onClick={onClose}>&times;</button>
                <div className="quote-modal-body">
                    <form onSubmit={handleSubmit} className="quote-form">
                        <div className="form-group mb-4">
                            <label htmlFor="fullName" className="form-label">Full Name *</label>
                            <input
                                type="text"
                                id="fullName"
                                className="form-control quote-input"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="email" className="form-label">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control quote-input"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                className="form-control quote-input"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="message" className="form-label">Message *</label>
                            <textarea
                                id="message"
                                className="form-control quote-input"
                                rows="5"
                                placeholder="Tell us about your needs...."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn quote-submit-btn">
                            Send Message &nbsp;
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;
