import React, { useEffect } from 'react';

const Customers = () => {

    useEffect(() => {
        // Initialize Swiper if the script is loaded
        if (window.Swiper) {
            new window.Swiper(".customers-swiper-1", {
                slidesPerView: 5,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                    reverseDirection: true // Scroll Left to Right
                },
                breakpoints: {
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 30 },
                    1024: { slidesPerView: 5, spaceBetween: 30 }
                }
            });

            new window.Swiper(".customers-swiper-2", {
                slidesPerView: 5,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                    reverseDirection: false // Scroll Right to Left
                },
                breakpoints: {
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 30 },
                    1024: { slidesPerView: 5, spaceBetween: 30 }
                }
            });
        }
    }, []);

    return (
        <div className="section-1">
            <div className="container">

                <div className="pill-tab" style={{ justifyContent: 'flex-start' }}>
                    <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" /><p className="pill-text">Our Customers</p>
                </div>

                <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
                    <div className="col">
                        <h1 className="section-heading-1" style={{ textAlign: 'left' }}>Trusted by Market Leaders</h1>
                    </div>
                    <div className="col">
                        <p className="section-subheading-1" style={{ textAlign: 'left' }}>
                            We proudly support clients across government, semi-government, education, healthcare, hospitality, manufacturing, retail, and logistics sectors.
                        </p>
                        <button type="button" className="btn about-btn mt-4">Be a partner<img src="/static/icons/uil_arrow-up.svg" alt="arrow" /></button>
                    </div>
                </div>

            </div>

            <div className="content-1" style={{ marginBottom: '5rem' }}>

                <div className="swiper partnersSwiper customers-swiper-1">
                    <div className="swiper-wrapper">
                        {['cisco.png', 'hpe.svg', 'ubiquiti.png', 'Ruijie.webp', 'tplink.png', 'hpe.svg', 'ubiquiti.png', 'Ruijie.webp', 'tplink.png'].map((icon, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="swiper-logo-div">
                                    <img src={`/static/icons/${icon}`} className="swiper-logo-1" alt="customer" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination d-none"></div>
                </div>

                <div className="swiper partnersSwiper customers-swiper-2 mt-4">
                    <div className="swiper-wrapper">
                        {['cisco.png', 'hpe.svg', 'ubiquiti.png', 'Ruijie.webp', 'tplink.png', 'hpe.svg', 'ubiquiti.png', 'Ruijie.webp', 'tplink.png'].map((icon, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="swiper-logo-div">
                                    <img src={`/static/icons/${icon}`} className="swiper-logo-1" alt="customer" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination d-none"></div>
                </div>

            </div>

        </div>
    );
};

export default Customers;
