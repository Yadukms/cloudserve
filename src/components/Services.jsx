import React, { useEffect, useRef } from 'react';

const Services = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (window.Swiper) {
            swiperRef.current = new window.Swiper(".services-swiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                grabCursor: true,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    }, []);

    return (
        <div className="section-1">
            <div className="container">
                <div className="pill-section">
                    <div className="pill-tab">
                        <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" /><p className="pill-text">Our Services</p>
                    </div>
                    <h1 className="section-heading-1">Our Core Activities</h1>
                    <p className="section-subheading-1">Cloudserve offers a complete range of IT, security, AV, and automation services tailored to different business environments.</p>
                </div>
            </div>

            <div className="content-service-1">
                <div className="container">
                    <div className="swiper services-swiper">
                        <div className="swiper-wrapper">
                            {/* Slide 1 */}
                            <div className="swiper-slide">
                                <div className="card service-body h-100 border-0 bg-transparent">
                                    <div className="row g-4 h-100">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card h-100 border-0" style={{ backgroundColor: 'rgba(44, 177, 143, 0.50)', borderRadius: '0.8rem', padding: '2rem' }}>
                                                <div className="card-body d-flex flex-column justify-content-center">
                                                    <h5 className="service-title">Control & Automation Supplies</h5>
                                                    <p className="service-subtext mt-4">Cloudserve empowers industries to achieve smarter operations through a full suite of control and automation products.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card h-100 border-0">
                                                <div className="services-img-bg" style={{ backgroundImage: "url('/static/images/fibre_optics.webp')", height: '100%', minHeight: '350px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="swiper-slide">
                                <div className="card service-body h-100 border-0 bg-transparent">
                                    <div className="row g-4 h-100">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card h-100 border-0" style={{ backgroundColor: 'rgba(44, 177, 143, 0.50)', borderRadius: '0.8rem', padding: '2rem' }}>
                                                <div className="card-body d-flex flex-column justify-content-center">
                                                    <h5 className="service-title">IT Infrastructure</h5>
                                                    <p className="service-subtext mt-4">Building robust and scalable IT foundations to support your business growth and digital transformation journey.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card h-100 border-0">
                                                <div className="services-img-bg" style={{ backgroundImage: "url('/static/images/fibre_optics.webp')", height: '100%', minHeight: '350px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className="swiper-slide">
                                <div className="card service-body h-100 border-0 bg-transparent">
                                    <div className="row g-4 h-100">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card h-100 border-0" style={{ backgroundColor: 'rgba(44, 177, 143, 0.50)', borderRadius: '0.8rem', padding: '2rem' }}>
                                                <div className="card-body d-flex flex-column justify-content-center">
                                                    <h5 className="service-title">Security Solutions</h5>
                                                    <p className="service-subtext mt-4">Comprehensive security systems including CCTV, access control, and cybersecurity to protect your assets.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card h-100 border-0">
                                                <div className="services-img-bg" style={{ backgroundImage: "url('/static/images/fibre_optics.webp')", height: '100%', minHeight: '350px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination position-relative mt-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
