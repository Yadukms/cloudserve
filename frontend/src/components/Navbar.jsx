import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuoteModal from './QuoteModal';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showQuoteModal, setShowQuoteModal] = useState(false);
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
                            <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/" onClick={() => document.getElementById('navbarNavDropdown').classList.remove('show')}>Home</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/about-us') ? 'active' : ''}`} to="/about-us" onClick={() => document.getElementById('navbarNavDropdown').classList.remove('show')}>About Us</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/brands') ? 'active' : ''}`} to="/brands" onClick={() => document.getElementById('navbarNavDropdown').classList.remove('show')}>Brands</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/products') ? 'active' : ''}`} to="/products" onClick={() => document.getElementById('navbarNavDropdown').classList.remove('show')}>Products</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/services') ? 'active' : ''}`} to="/services" onClick={() => document.getElementById('navbarNavDropdown').classList.remove('show')}>Services</Link>
                        </li>
                        <li className="nav-item nav-item-spaced">
                            <Link className={`nav-link ${isActive('/contact-us') ? 'active' : ''}`} to="/contact-us" onClick={() => document.getElementById('navbarNavDropdown').classList.remove('show')}>Contact Us</Link>
                        </li>
                        {/* Mobile-only Request a Quote button */}
                        <li className="nav-item d-lg-none mt-3">
                            <button className="btn req-btn w-100" onClick={() => { setShowQuoteModal(true); document.getElementById('navbarNavDropdown').classList.remove('show'); }}>Request a Quote</button>
                        </li>
                    </ul>
                </div>
                <div className="d-none d-lg-block ms-auto d-flex align-items-center">
                    <button className="btn req-btn" onClick={() => setShowQuoteModal(true)}>Request a Quote</button>
                    <button className="navbar-toggler off" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
        </nav>
    );
};

export default Navbar;
