import React from 'react';

const Testimonials = () => {
    return (
        <div className="section-1">
            <div className="container">

                <div className="pill-section">
                    <div className="pill-tab">
                        <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" /><p className="pill-text">Testimonials</p>
                    </div>
                    <h1 className="section-heading-1">Real Results, Trusted Partnerships</h1>
                    <p className="section-subheading-1">Hear directly from the clients who rely on Cloudserve for their critical IT infrastructure.</p>
                </div>

                <div className="content-1">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col-md-6">
                            <img src="/static/images/2223.webp" className="img-fluid about-img" alt="..." style={{ borderRadius: '0.8rem' }} />
                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="3000">
                                        <div className="card testimonial-card">
                                            <div className="card-body">
                                                <img src="/static/icons/ri_double-quotes-l.svg" style={{ display: 'flex', alignItems: 'center' }} alt="quote" />
                                                <p className="test-text-1 mt-2">
                                                    "Cloudserve transformed our entire IT infrastructure. Their expertise in networking solutions helped us achieve 99.9% uptime and significantly improved our operational efficiency."
                                                </p>
                                                <p className="test-text-2">Sarah Johnson</p>
                                                <p className="test-text-3">IT Director</p>
                                                <p className="test-text-4">Global Tech Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <div className="card testimonial-card">
                                            <div className="card-body">
                                                <img src="/static/icons/ri_double-quotes-l.svg" style={{ display: 'flex', alignItems: 'center' }} alt="quote" />
                                                <p className="test-text-1 mt-2">
                                                    "Cloudserve transformed our entire IT infrastructure. Their expertise in networking solutions helped us achieve 99.9% uptime and significantly improved our operational efficiency."
                                                </p>
                                                <p className="test-text-2">Sarah Johnson</p>
                                                <p className="test-text-3">IT DIRECTOR</p>
                                                <p className="test-text-4">Global Tech Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card testimonial-card">
                                            <div className="card-body">
                                                <img src="/static/icons/ri_double-quotes-l.svg" style={{ display: 'flex', alignItems: 'center' }} alt="quote" />
                                                <p className="test-text-1 mt-2">
                                                    "Cloudserve transformed our entire IT infrastructure. Their expertise in networking solutions helped us achieve 99.9% uptime and significantly improved our operational efficiency."
                                                </p>
                                                <p className="test-text-2">Sara Johnson</p>
                                                <p className="test-text-3">IT DIRECTOR</p>
                                                <p className="test-text-4">Global Tech Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
