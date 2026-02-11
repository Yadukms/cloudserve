import React from 'react';

const Products = () => {
    return (
        <div className="section-1">
            <div className="container">

                <div className="pill-section">
                    <div className="pill-tab">
                        <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" /><p className="pill-text">Our Products</p>
                    </div>
                    <h1 className="section-heading-1">Our Technology Ecosystem</h1>
                    <p className="section-subheading-1">Cutting-edge technology products and solutions from leading manufacturers, tailored for your business needs.</p>
                </div>

                <div className="content-1">
                    {/* Placeholder for Owl Carousel - rendering items in a grid for now */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/51242.webp')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Network switches, routers & wireless systems</h5>
                                    <p className="product-subtitle">Network switches</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/51242.webp')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Network switches, routers & wireless systems</h5>
                                    <p className="product-subtitle">Network switches</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/51242.webp')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Network switches, routers & wireless systems</h5>
                                    <p className="product-subtitle">Network switches</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card">
                                <div className="product-img-wrapper">
                                    <div className="product-img-bg" style={{ backgroundImage: "url('/static/images/51242.webp')" }}></div>
                                </div>
                                <div className="card-body">
                                    <h5 className="product-title">Network switches, routers & wireless systems</h5>
                                    <p className="product-subtitle">Network switches</p>
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
