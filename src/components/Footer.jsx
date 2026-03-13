import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 footer-section">
                    <div className="col">
                        <img src="/static/images/cloudservewhite.svg" className="footer-logo" alt="Cloudserve" />
                        <p className="footer-text mt-3">
                            Cloudserve Trading & Services W.L.L is a premier provider of IT infrastructure, security, and automation solutions.
                        </p>
                        <div className="social-icons mt-3">
                            <a href="#"><i className='bx bxl-facebook text-white fs-4'></i></a>
                            <a href="#"><i className='bx bxl-twitter text-white fs-4'></i></a>
                            <a href="#"><i className='bx bxl-instagram text-white fs-4'></i></a>
                            <a href="#"><i className='bx bxl-linkedin text-white fs-4'></i></a>
                        </div>
                    </div>
                    <div className="col">
                        <h5 className="footer-text-1">Quick Links</h5>
                        <ul className="list-unstyled mt-3">
                            <li><a href="#" className="footer-text text-decoration-none">Home</a></li>
                            <li><a href="#" className="footer-text text-decoration-none">About Us</a></li>
                            <li><a href="#" className="footer-text text-decoration-none">Services</a></li>
                            <li><a href="#" className="footer-text text-decoration-none">Products</a></li>
                            <li><a href="#" className="footer-text text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="footer-text-1">Our Solutions</h5>
                        <ul className="list-unstyled mt-3">
                            <li><a href="#" className="footer-text text-decoration-none">Networking</a></li>
                            <li><a href="#" className="footer-text text-decoration-none">Security</a></li>
                            <li><a href="#" className="footer-text text-decoration-none">Automation</a></li>
                            <li><a href="#" className="footer-text text-decoration-none">Cloud Services</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="footer-text-1">Contact Info</h5>
                        <ul className="list-unstyled mt-3">
                            <li className="footer-text mb-2"><i className='bx bx-map me-2'></i> Doha, Qatar</li>
                            <li className="footer-text mb-2"><i className='bx bx-phone me-2'></i> +974 1234 5678</li>
                            <li className="footer-text mb-2"><i className='bx bx-envelope me-2'></i> info@cloudserve.qa</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <p className="footer-text mb-0">&copy; {new Date().getFullYear()} Cloudserve Trading & Services W.L.L. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
