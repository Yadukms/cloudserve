import React from 'react';

const Solutions = () => {
    return (
        <div className="section-1">
            <div className="container">

                <div className="pill-section">
                    <div className="pill-tab">
                        <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" /><p className="pill-text">Our Solutions</p>
                    </div>
                    <h1 className="section-heading-1">Our Solutions</h1>
                    <p className="section-subheading-1">Comprehensive technology solutions designed to meet your business needs and drive digital transformation.</p>
                </div>

                <div className="content-service-1">

                    <div className="row row-cols-1 row-cols-md-2 g-4 align-items-center">
                        <div className="col">
                            <dotlottie-wc src="https://lottie.host/1766cc4c-65de-43ae-9293-983ff67c0d21/jzbb7ge8Ku.lottie" style={{ width: '100%', height: 'auto', maxWidth: '45rem' }} autoplay loop></dotlottie-wc>
                        </div>
                        <div className="col">
                            <div className="accordion accordion-solution" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Unified Technology for Modern Enterprises
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Comprehensive solutions designed to support digital transformation and business growth.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Networking Infrastructure
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We deliver structured cabling, fiber cabling, Wi-Fi solutions, campus networking, switching, routing, firewall security, and data center connectivity designed for maximum performance and reliability.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Control & Automation Supplies
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A complete suite of automation systems that enhance operational efficiency—covering industrial control components, smart sensors, controllers, and monitoring systems.
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

export default Solutions;
