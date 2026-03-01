import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top mx-auto ${scrolled ? 'scrolled' : ''}`} id="mainNavbar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="logo-original" src="/static/images/cloudservewhite.svg" alt="Cloudserve" />
                    <img className="logo-green" src="/static/images/cloudservegreen.svg" alt="Cloudserve" style={{ position: 'absolute', top: '10px' }} />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/about-us') ? 'active' : ''}`} to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/brands') ? 'active' : ''}`} to="/brands">Brands</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/products') ? 'active' : ''}`} to="/products">Products</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/services') ? 'active' : ''}`} to="/services">Services</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/contact-us') ? 'active' : ''}`} to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-none d-lg-block ms-auto d-flex align-items-center">
                    <a className="btn req-btn" href="#" >Request a Quote</a>
                    <button className="navbar-toggler off" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
