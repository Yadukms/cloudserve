import React from 'react';

const Hero = () => {
    return (
        <section className="header home-header">
            <div className="card header-card">
                <video className="card-video-bg" autoPlay muted loop playsInline preload="none" poster="">
                    <source src="/static/videos/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="gradient-overlay"></div>

                <div className="card-img-overlay">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 g-5 hero-main-row">
                            <div className="col">
                                <h1 className="hero-title">Smart Networking & Communication Solutions</h1>
                                <p className="hero-subtitle">Cloudserve empowers businesses with cutting-edge IT infrastructure and automation systems. We deliver reliable, scalable, and secure networking solutions for the digital age.</p>
                            </div>
                            <div className="col d-flex flex-column justify-content-end">
                                <div className="row row-cols-1 row-cols-md-3 g-3 stats-row">
                                    <div className="col">
                                        <h2 className="hero-number">15+</h2>
                                        <p className="hero-text">Years of Experience</p>
                                    </div>
                                    <div className="col">
                                        <h2 className="hero-number">120+</h2>
                                        <p className="hero-text">Experts</p>
                                    </div>
                                    <div className="col">
                                        <h2 className="hero-number">120+</h2>
                                        <p className="hero-text">Completed Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
