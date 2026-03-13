import React from 'react';
import Partners from '../components/Partners';
import AboutComponent from '../components/About';

const AboutUs = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="header" style={{ height: '60vh' }}>
                <div className="card header-card" style={{ height: '100%', minHeight: 'auto', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#1a1a1a', zIndex: -1 }}>
                        <img src="/static/images/about.png" alt="About Us Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start" style={{ paddingBottom: '3rem' }}>
                        <div className="container">
                            <h1 className="hero-title" style={{ fontSize: '4rem' }}>About us</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-1">
                <div className="container">
                    <div className="pill-section" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <div className="pill-tab" style={{ justifyContent: 'flex-start' }}>
                            <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" />
                            <p className="pill-text">About Cloudserve</p>
                        </div>
                        <h1 className="section-heading-1" style={{ textAlign: 'left', maxWidth: '80%' }}>Cloudserve - Enabling Secure Digital Transformation.</h1>
                    </div>

                    <div className="row mt-5 gx-5">
                        <div className="col-lg-6">
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1.5rem' }}>Established in 1999</h3>
                            <p style={{ color: '#000', lineHeight: '1.8', fontSize: 'clamp(1rem, 4vw, 1.1rem)' }}>
                                Cogent was founded on the premise that bandwidth can be treated like a commodity - produce mass amounts and position it for sale based on price. Leveraging new technologies, we built our own IP data network independent of the traditional voice-based networks owned by the RBOCs (regional bell operating companies). By doing so, we believed we could reduce the cost of high quality bandwidth down to a level never before offered in the marketplace. In 2002, Cogent acquired the majority of the U.S. operations of PSINet, Inc. In 2023, Cogent acquired the Sprint GMG business from T-Mobile US. Today, we are widely recognized as one of the largest carriers of Internet traffic in the world.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1.5rem' }}>How We Stand Out</h3>
                            <div className="d-flex flex-column gap-3">
                                {[
                                    "Our customer connections are dedicated and non-oversubscribed",
                                    "Our prices are among the lowest in the industry",
                                    "Our diversity from traditional carriers enables redundancy for customer data",
                                    "Certified partnerships with leading vendors",
                                    "ISO 27001 security compliance"
                                ].map((item, index) => (
                                    <div key={index} className="d-flex align-items-center mb-3">
                                        <div className="me-3 flex-shrink-0">
                                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="mb-0" style={{ fontWeight: '500', fontSize: 'clamp(1rem, 3.5vw, 1.1rem)' }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-1" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="row g-4">
                        {/* Left Card - Green */}
                        <div className="col-lg-6">
                            <div className="h-100 p-5 d-flex align-items-center" style={{ backgroundColor: '#2EAC80', borderRadius: '1.5rem', color: '#fff' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: '500', lineHeight: '1.4' }}>
                                    We partner with global leaders like Cisco to deliver tailored, secure IT and automation solutions designed for long-term stability and growth.
                                </h3>
                            </div>
                        </div>

                        {/* Right Card - Image Background */}
                        <div className="col-lg-6">
                            <div className="h-100 p-5 d-flex align-items-center justify-content-center text-center position-relative" style={{ borderRadius: '1.5rem', overflow: 'hidden', minHeight: '400px' }}>
                                {/* Background Image Placeholder - using Unsplash for city/network concept */}
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                                    <img src="/static/images/2223.webp" alt="City Network" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }} />
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: '500', lineHeight: '1.4', color: '#fff', position: 'relative', zIndex: 1 }}>
                                    Our expertise is your advantage, ensuring your business is securely and rapidly scaled to meet tomorrow's demands.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-1" style={{ paddingTop: 0 }}>
                <Partners />
            </div>
        </>
    );
};

export default AboutUs;
