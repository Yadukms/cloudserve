
import React from 'react';
import Partners from '../components/Partners';

const Brands = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="header" style={{ height: '60vh' }}>
                <div className="card header-card" style={{ height: '100%', minHeight: 'auto', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#1a1a1a', zIndex: -1 }}>
                        <img src="/static/images/brand.png" alt="Brands Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start" style={{ paddingBottom: '3rem' }}>
                        <div className="container">
                            <h1 className="hero-title" style={{ fontSize: '4rem' }}>Brands</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <Partners
                    pillText="Brands Associated With"
                    title="We Bring You the Best Access Control Solutions From Global Leaders"
                    description=""
                    showButton={false}
                />
            </div>
        </>
    );
};

export default Brands;

