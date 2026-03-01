import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className="section-1">
            <div className="container">

                <div className="pill-section">
                    <div className="pill-tab">
                        <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" /><p className="pill-text">Our Products</p>
                    </div>
                    <h1 className="section-heading-1">Our Technology Ecosystem</h1>
                    <p className="section-subheading-1">Cutting-edge technology products sourced from certified global manufacturers, engineered to meet the demands of enterprise environments.</p>
                    <Link to="/products" className="btn about-btn mt-4">Products <img src="/static/icons/uil_arrow-up.svg" alt="arrow" /></Link>
                </div>

                <div className="content-1">
                    {/* Placeholder for Owl Carousel - rendering items in a grid for now */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/p1.jpg')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Network switches, routers & wireless systems</h5>
                                    {/* <p className="product-subtitle">Network switches</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/p2.jpg')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Firewalls & cybersecurity solutions</h5>
                                    {/* <p className="product-subtitle">Network switches</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/p3.jpg')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Servers, storage & backup systems</h5>
                                    {/* <p className="product-subtitle">Network switches</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/fibre_optics.webp')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Structured cabling components</h5>
                                    {/* <p className="product-subtitle">Network switches</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/s2.jpg')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Video surveillance systems</h5>
                                    {/* <p className="product-subtitle">Network switches</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/s4.jpg')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Access control equipment</h5>
                                    {/* <p className="product-subtitle">Network switches</p> */}
                                </div>
                            </div>
                        </div>   <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/p8.jpg')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Retail Solutions – POS & Traffic Management
                                    </h5>
                                    {/* <p className="product-subtitle">Network switches</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/p6.jpg')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">AV & collaboration devices</h5>
                                    {/* <p className="product-subtitle">Network switches</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;
