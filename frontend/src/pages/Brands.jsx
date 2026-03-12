
import React from 'react';

const brandCategories = [
    {
        title: "Networking Brands",
        brands: [
            { name: "Cisco", icon: "/static/images/n1.png" },
            { name: "Aruba / HPE", icon: "/static/images/n2.png" },
            { name: "Ubiquiti UniFi", icon: "/static/images/n3.png" },
            { name: "Ruijie / Reyee", icon: "/static/images/n4.png" },
            { name: "MikroTik", icon: "/static/images/n5.png" },
            { name: "TP-Link", icon: "/static/images/n6.png" },
            { name: "Juniper", icon: "/static/images/n7.png" },
            { name: "Fortinet (Switching & Wireless)", icon: "/static/images/n8.png" }
        ]
    },
    {
        title: "Firewall & Cybersecurity Brands",
        brands: [
            { name: "Fortinet", icon: "/static/images/n8.png" },
            { name: "Palo Alto Networks", icon: "/static/images/f1.png" },
            { name: "Sophos", icon: "/static/images/f2.png" },
            { name: "Cisco Firepower", icon: "/static/images/f3.jpg" },
            { name: "Check Point", icon: "/static/images/f4.jpg" },
            { name: "SonicWall", icon: "/static/images/f5.png" }
        ]
    },
    {
        title: "CCTV & Security Brands",
        brands: [
            { name: "Hikvision", icon: "/static/images/c1.png" },
            { name: "Dahua", icon: "/static/images/c2.png" },
            { name: "Axis Communications", icon: "/static/images/c3.png" },
            { name: "Hanwha Vision", icon: "/static/images/c4.jpg" },
            { name: "Bosch Security", icon: "/static/images/c5.jpg" },
            { name: "Milestone (VMS)", icon: "/static/images/c6.png" },
            { name: "Genetec (VMS)", icon: "/static/images/c7.png" },
            { name: "ZKTeco", icon: "/static/images/c8.jpg" },
            { name: "Suprema", icon: "/static/images/c9.png" },
            { name: "CAME / FAAC", icon: "/static/images/c10.png" }
        ]
    },
    {
        title: "IPTV & SMATV Brands",
        brands: [
            { name: "Nevron IPTV", icon: "/static/images/i1.png" },
            { name: "Exterity", icon: "/static/images/i2.jpg" },
            { name: "Himedia", icon: "/static/images/i3.png" },
            { name: "Ikusi", icon: "/static/images/i4.png" },
            { name: "WISI", icon: "/static/images/i5.png" },
            { name: "Triax", icon: "/static/images/i6.jpg" }
        ]
    },
    {
        title: "AV & Meeting Room Brands",
        brands: [
            { name: "Logitech", icon: "/static/images/m1.png" },
            { name: "Crestron", icon: "/static/images/m2.png" },
            { name: "Extron", icon: "/static/images/m3.png" },
            { name: "Samsung Display", icon: "/static/images/m4.png" },
            { name: "LG", icon: "/static/images/m5.png" },
            { name: "BenQ", icon: "/static/images/m6.png" },
            { name: "Epson", icon: "/static/images/m7.png" },
            { name: "Yealink VC", icon: "/static/images/m8.png" },
            { name: "Poly", icon: "/static/images/m9.webp" },
            { name: "Bose / JBL", icon: "/static/images/m10.png" }
        ]
    },
    {
        title: "Server, Storage & Data Center Brands",
        brands: [
            { name: "Dell EMC", icon: "/static/images/d1.png" },
            { name: "HPE", icon: "/static/images/d2.png" },
            { name: "Lenovo", icon: "/static/images/d3.png" },
            { name: "Synology", icon: "/static/images/d4.jpg" },
            { name: "QNAP", icon: "/static/images/d5.png" },
            { name: "APC Schneider Electric", icon: "/static/images/d6.png" },
            { name: "Vertiv", icon: "/static/images/d7.png" }
        ]
    },
    {
        title: "Retail & POS Brands",
        brands: [
            { name: "Zebra", icon: "/static/images/r1.png" },
            { name: "Honeywell", icon: "/static/images/r2.png" },
            { name: "Sunmi", icon: "/static/images/r3.png" },
            { name: "Epson POS", icon: "/static/images/r4.png" },
            { name: "Square / Clover", icon: "/static/images/r5.png" }
        ]
    },
    {
        title: "AI & Analytics Brands",
        brands: [
            { name: "Huawei AI", icon: "/static/images/b1.jpg" },
            { name: "Cisco Meraki", icon: "/static/images/b2.png" },
            { name: "Hikvision", icon: "/static/images/b3.png" },
            { name: "BriefCam", icon: "/static/images/b4.png" },
            { name: "Truein", icon: "/static/images/b5.png" },
            { name: "RetailNext", icon: "/static/images/b6.jpg" }
        ]
    },
    {
        title: "Structured Cabling & Fiber Brands",
        brands: [
            { name: "Panduit", icon: "/static/images/a1.png" },
            { name: "Legrand", icon: "/static/images/a2.png" },
            { name: "Schneider", icon: "/static/images/a3.png" },
            { name: "Molex", icon: "/static/images/a4.png" },
            { name: "Brand-Rex", icon: "/static/images/a5.png" },
            { name: "D-Link Cabling", icon: "/static/images/a6.png" },
            { name: "CommScope", icon: "/static/images/a7.png" }
        ]
    },
    {
        title: "IT Hardware Brands",
        brands: [
            { name: "HP", icon: "/static/images/it1.png" },
            { name: "Dell", icon: "/static/images/it2.png" },
            { name: "Lenovo", icon: "/static/images/it3.png" },
            { name: "Acer", icon: "/static/images/it4.png" },
            { name: "Microsoft", icon: "/static/images/it5.png" },
            { name: "Apple", icon: "/static/images/it6.png" }
        ]
    }
];

const BrandCard = ({ brand }) => {
    const [hasError, setHasError] = React.useState(false);
    const iconPath = brand.icon.startsWith('/') ? brand.icon : `/static/icons/${brand.icon}`;

    return (
        <div className="brand-logo-card">
            {!hasError ? (
                <img
                    src={iconPath}
                    alt={brand.name}
                    className="brand-logo-img"
                    onError={() => setHasError(true)}
                />
            ) : (
                <div className="brand-name-fallback">{brand.name}</div>
            )}
        </div>
    );
};

const BrandCategory = ({ category }) => {
    // Duplicate brands to create an infinite loop effect
    const duplicatedBrands = [...category.brands, ...category.brands, ...category.brands];

    return (
        <div className="brand-category-section mb-5">
            <h2 className="brand-category-title">{category.title}</h2>
            <div className="brand-scroll-container">
                <div className="brand-scroll-track">
                    {duplicatedBrands.map((brand, index) => (
                        <BrandCard key={`${category.title}-${index}`} brand={brand} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Brands = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="header" style={{ height: '60vh' }}>
                <div className="card header-card" style={{ height: '100%', minHeight: 'auto', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#1a1a1a', zIndex: -1 }}>
                        <img src="/static/images/brand.png" alt="Brands Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start" style={{ paddingBottom: '3rem' }}>
                        <div className="container">
                            <h1 className="hero-title" style={{ fontSize: '4rem' }}>Global Technology Partners</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="brands-page-section">
                <div className="container">
                    <div className="pill-tab mb-4" style={{ justifyContent: 'flex-start' }}>
                        <img src="/static/icons/icon-park-outline_dot.svg" alt="dot" />
                        <p className="pill-text">Our Brands Ecosystem</p>
                    </div>
                    <h1 className="section-heading-1 mb-5" style={{ textAlign: 'left', maxWidth: '100%' }}>
                        We Bring You the Best Solutions From Global Leaders
                    </h1>

                    {brandCategories.map((category, index) => (
                        <BrandCategory key={index} category={category} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Brands;

