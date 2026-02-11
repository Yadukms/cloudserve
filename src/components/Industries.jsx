import React from 'react';

const Industries = () => {
    return (
        <div className="section-1">
            <div className="container">

                <div className="pill-section">
                    <div className="pill-tab">
                        <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" /><p className="pill-text">Our Industries</p>
                    </div>
                    <h1 className="section-heading-1">Industries We Empower</h1>
                    <p className="section-subheading-1">Explore how our core solutions are custom-built to support different business environments.</p>
                </div>

                <div className="content-1">

                    <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-md-center">
                        <div className="col">
                            <div className="card industry-card">
                                <div className="ind-icon">
                                    <img src="/static/icons/mingcute_government-line.svg" alt="Government" />
                                </div>
                                <div className="card-body">
                                    <h2 className="ind-title">Government</h2>
                                    <p className="ind-subtitle">Streamline Public Services Digitally</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card industry-card">
                                <div className="ind-icon">
                                    <img src="/static/icons/simple-line-icons_graduation.svg" alt="Education" />
                                </div>
                                <div className="card-body">
                                    <h2 className="ind-title">Education</h2>
                                    <p className="ind-subtitle">Enhance Student Learning Experiences</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card industry-card">
                                <div className="ind-icon">
                                    <img src="/static/icons/mingcute_hospital-line.svg" alt="Healthcare" />
                                </div>
                                <div className="card-body">
                                    <h2 className="ind-title">Healthcare</h2>
                                    <p className="ind-subtitle">Improve Patient Care Efficiency</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card industry-card">
                                <div className="ind-icon">
                                    <img src="/static/icons/fluent-mdl2_manufacturing.svg" alt="Manufacturing" />
                                </div>
                                <div className="card-body">
                                    <h2 className="ind-title">Manufacturing</h2>
                                    <p className="ind-subtitle">Optimize Production and Supply Chains</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card industry-card">
                                <div className="ind-icon">
                                    <img src="/static/icons/mingcute_hotel-line.svg" alt="Hospitality" />
                                </div>
                                <div className="card-body">
                                    <h2 className="ind-title">Hospitality</h2>
                                    <p className="ind-subtitle">Personalize Guest Service Delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card industry-card">
                                <div className="ind-icon">
                                    <img src="/static/icons/mingcute_bank-line.svg" alt="Finance" />
                                </div>
                                <div className="card-body">
                                    <h2 className="ind-title">Finance</h2>
                                    <p className="ind-subtitle">Secure Transactions and Risk Management</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card industry-card">
                                <div className="ind-icon">
                                    <img src="/static/icons/mdi_truck-outline.svg" alt="Logistics" />
                                </div>
                                <div className="card-body">
                                    <h2 className="ind-title">Logistics</h2>
                                    <p className="ind-subtitle">Accelerate Delivery and Tracking</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Industries;
