import React from 'react';
import ProductsComponent from '../components/Products';

const Products = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="header" style={{ height: '60vh' }}>
                <div className="card header-card" style={{ height: '100%', minHeight: 'auto', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#1a1a1a', zIndex: -1 }}>
                        <img src="/static/images/Services.png" alt="Products Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start" style={{ paddingBottom: '3rem' }}>
                        <div className="container">
                            <h1 className="hero-title" style={{ fontSize: '4rem' }}>Products</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5 mb-5">
                <div className="row g-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <div className="col-lg-4 col-md-6" key={item}>
                            <div className="card h-100 border-0">
                                <div style={{ borderRadius: '1rem', overflow: 'hidden', marginBottom: '1rem' }}>
                                    <img src="/static/images/product.png" alt="Communication Systems" style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <div className="card-body p-0">
                                    <h5 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#000' }}>Communication Systems</h5>
                                    <p style={{ color: '#0B5394', fontWeight: '500', fontSize: '0.9rem' }}>UC Solutions</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
