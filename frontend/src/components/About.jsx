import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

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
                                Cloudserve is a trusted provider of smart networking and communication solutions, committed to helping businesses build secure, high-performance IT environments. With more than a decade of industry experience, our team offers deep technical expertise in designing, deploying, and maintaining enterprise-grade solutions.
                            </p>
                            <p className="about-text-2">We combine innovative technologies with practical implementation knowledge to deliver seamless, future-ready infrastructure across diverse industries</p>
                            <h5 className="about-heading-1">Why Choose Cloudserve</h5>
                            <div className="why-tab mt-4">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">15+ years of industry expertise</p>
                            </div>
                            <div className="why-tab mt-2">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">500+ successful implementations across multiple sectors</p>
                            </div>
                            <div className="why-tab mt-2">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">24/7 technical support & remote monitoring</p>
                            </div>
                            <div className="why-tab mt-2">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">Certified partnerships with global technology leaders</p>
                            </div>
                            <div className="why-tab mt-2">
                                <img src="/static/icons/charm_tick.svg" alt="tick" /><p className="why-text">ISO-aligned security & deployment standardss</p>
                            </div>

                            <button
                                type="button"
                                className="btn about-btn mt-4"
                                onClick={() => navigate('/about-us')}
                            >
                                About Us<img src="/static/icons/uil_arrow-up.svg" alt="arrow" />
                            </button>

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
