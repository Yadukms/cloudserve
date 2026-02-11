import React from 'react';

const Services = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="header" style={{ height: '60vh' }}>
                <div className="card header-card" style={{ height: '100%', minHeight: 'auto', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#1a1a1a', zIndex: -1 }}>
                        <img src="/static/images/Services.png" alt="Services Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start" style={{ paddingBottom: '3rem' }}>
                        <div className="container">
                            <h1 className="hero-title" style={{ fontSize: '4rem' }}>Services</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5 mb-5">
                <div className="row g-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div className="col-lg-4 col-md-6" key={item}>
                            <div className="d-flex flex-column h-100">
                                {/* Image Part */}
                                <div style={{ height: '300px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src="/static/images/fibre_optics.webp" alt="Service" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                {/* Content Part */}
                                <div className="p-4" style={{ backgroundColor: '#9ae0c8', borderRadius: '1.5rem', flex: 1 }}>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '500', marginBottom: '1rem', color: '#000' }}>Control & Automation Supplies</h3>
                                    <p style={{ color: '#000', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                        Cloudserve empowers industries to achieve smarter operations through a full suite of control and automation products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
