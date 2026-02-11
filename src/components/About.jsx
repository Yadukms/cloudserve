import React from 'react';

const About = () => {
    return (
        <div className="section-1">
            <div className="container">

                <div className="pill-section">
                    <div className="pill-tab">
                        <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" /><p className="pill-text">About us</p>
                    </div>
                    <h1 className="section-heading-1">The Cloudserve Advantage</h1>
                    <p className="section-subheading-1">Where robust infrastructure meets security, efficiency, and proven implementation expertise.</p>
                </div>

                <div className="content-1">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <p className="about-text-1">
                                We are a leading provider of networking and communication solutions, dedicated to helping businesses build robust, secure, and scalable IT infrastructures. Our team of certified professionals brings decades of combined experience in designing and implementing enterprise-grade technology solutions.
                            </p>
                            <h5 className="about-heading-1">Why Choose Us</h5>
                            <div className="why-tab mt-4">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">15+ years of industry experience</p>
                            </div>
                            <div className="why-tab mt-2">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">500+ successful project implementations</p>
                            </div>
                            <div className="why-tab mt-2">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">24/7 technical support and monitoring</p>
                            </div>
                            <div className="why-tab mt-2">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">Certified partnerships with leading vendors</p>
                            </div>
                            <div className="why-tab mt-2">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">ISO-aligned security & deployment standards</p>
                            </div>

                            <button type="button" className="btn about-btn mt-4">About Us<img src="/static/icons/uil_arrow-up.svg" alt="arrow" /></button>

                        </div>
                        <div className="col">
                            <img src="/static/images/about.webp" className="img-fluid about-img" alt="..." />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
