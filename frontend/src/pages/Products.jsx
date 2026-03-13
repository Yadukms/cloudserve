import React, { useState } from 'react';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const productsData = [
        {
            title: "Networking Products",
            subtitle: "Enterprise Networking",
            image: "/static/images/p1.jpg",
            description: "Enterprise-grade networking solutions designed for maximum uptime, security, and performance across all business scales.",
            items: [
                "Network Switches (L2/L3 Managed & Unmanaged)",
                "Core, Distribution & Access Switches",
                "Routers – Branch & Enterprise",
                "Wireless Access Points (Indoor/Outdoor)",
                "Wi-Fi 6/6E Solutions",
                "Network Controllers",
                "SFP, SFP+, QSFP Modules",
                "Patch Panels & Patch Cords",
                "Cat5e / Cat6 / Cat6A Cabling",
                "Fiber Cables – OS2, OM3, OM4",
                "Fiber Patch Panels & LIUs",
                "Media Converters",
                "PoE Injectors & PoE Switches"
            ]
        },
        {
            title: "Cybersecurity & Firewall Solutions",
            subtitle: "Network Defense",
            image: "/static/images/p2.jpg",
            description: "Robust security frameworks including next-gen firewalls and endpoint protection to safeguard your digital assets.",
            items: [
                "Next-Generation Firewalls (NGFW)",
                "VPN Gateways",
                "Endpoint Protection Solutions",
                "Network Access Control (NAC)",
                "Intrusion Prevention Systems (IPS)",
                "Secure SD-WAN Appliances",
                "Email Security Gateways",
                "Web Application Firewalls (WAF)"
            ]
        },
        {
            title: "Servers, Storage & Data Center Systems",
            subtitle: "IT Infrastructure",
            image: "/static/images/p3.jpg",
            description: "High-capacity server and storage solutions paired with critical power management for data center resilience.",
            items: [
                "Rack Servers & Tower Servers",
                "Storage Systems – SAN / NAS",
                "Backup Appliances",
                "UPS Systems",
                "Server Racks",
                "KVM & Console Systems",
                "Power Distribution Units (PDUs)"
            ]
        },
        {
            title: "CCTV & Security System Products",
            subtitle: "Physical Security",
            image: "/static/images/p4.jpg",
            description: "Integrated surveillance and access management systems for comprehensive perimeter and internal security.",
            items: [
                "IP Cameras (Dome/Bullet/PTZ)",
                "AI Cameras – Facial Detection, Vehicle Analytics",
                "NVRs & VMS Platforms",
                "Video Analytics Appliances",
                "License Plate Recognition (ANPR) Cameras",
                "Access Control Panels",
                "Card Readers / Biometric Readers",
                "Time Attendance Devices",
                "Gate Barriers",
                "Turnstiles & Speed Gates",
                "Intercom & Door Video Phones"
            ]
        },
        {
            title: "IPTV & SMATV Products",
            subtitle: "Media Distribution",
            image: "/static/images/p5.jpg",
            description: "Professional-grade IPTV and satellite distribution systems for hospitality and residential environments.",
            items: [
                "IPTV Headend",
                "Hospitality IPTV Systems",
                "SMATV Headend Equipment",
                "Distribution Amplifiers",
                "Satellite Receivers",
                "Coaxial Cabling & Splitters"
            ]
        },
        {
            title: "Audio-Visual & Meeting Room Products",
            subtitle: "Modern Collaboration",
            image: "/static/images/p6.jpg",
            description: "Advanced AV tools and interactive displays designed to enhance collaboration and high-impact presentations.",
            items: [
                "Interactive Displays",
                "LED Screens & Video Walls",
                "Projectors & Projection Screens",
                "Digital Signage Players",
                "Audio Systems & Speakers",
                "Microphones & Wireless Systems",
                "Conferencing Systems",
                "Room Scheduling Panels",
                "HDMI Matrix, Switchers & Controllers"
            ]
        },
        {
            title: "AI & Smart Analytics Products",
            subtitle: "Intelligent Insights",
            image: "/static/images/p7.jpg",
            description: "Leveraging AI for people counting and occupancy analytics to drive smarter business decisions and efficiency.",
            items: [
                "People Counting Sensors",
                "Heat-map & Occupancy Sensors",
                "Retail Traffic Analytics",
                "Smart Queue Management Systems",
                "AI Video Processing Units",
                "Edge AI Gateways"
            ]
        },
        {
            title: "Retail & POS Products",
            subtitle: "Retail Automation",
            image: "/static/images/retail.png",
            description: "Unified point-of-sale solutions and inventory management tools to streamline retail operations.",
            items: [
                "POS Terminals",
                "Barcode Scanners",
                "Billing Printers",
                "Cash Drawers",
                "POS Software",
                "Inventory Management Systems",
                "EAS Anti-theft Systems"
            ]
        },
        {
            title: "IT Hardware & Peripherals",
            subtitle: "Essential Computing",
            image: "/static/images/p9.jpg",
            description: "Full range of workstations, monitors, and peripherals from trusted global IT manufacturers.",
            items: [
                "Laptops & Desktops",
                "Workstations",
                "Monitors & Docking Stations",
                "Printers & Scanners",
                "Storage Drives",
                "Networking Accessories",
                "Cables & Connectors",
                "Keyboards, Mice & Accessories"
            ]
        },
        {
            title: "Support & Maintenance Tools",
            subtitle: "Network Maintenance",
            image: "/static/images/p10.jpg",
            description: "Professional diagnostic and testing tools essential for fiber and network infrastructure upkeep.",
            items: [
                "Network Testing Tools",
                "Fiber OTDR",
                "Fluke Testers",
                "Label Printers",
                "Toolkits"
            ]
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="header" style={{ height: '60vh' }}>
                <div className="card header-card" style={{ height: '100%', minHeight: 'auto', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#1a1a1a', zIndex: -1 }}>
                        <img src="/static/images/Services.png" alt="Products Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start" style={{ paddingBottom: '3rem' }}>
                        <div className="container">
                            <h1 className="hero-title" style={{ fontSize: '4rem' }}>Products</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-4 mt-lg-5 mb-5">
                <div className="row g-3 g-lg-4">
                    {productsData.map((product, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <div
                                className="card h-100 border-0 product-card-hover"
                                style={{
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                    padding: '0 10px' // Added internal padding for safety
                                }}
                                onClick={() => setSelectedProduct(product)}
                                data-bs-toggle="modal"
                                data-bs-target="#productModal"
                            >
                                <div style={{ borderRadius: '1rem', overflow: 'hidden', marginBottom: '1rem', height: '200px' }}>
                                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="card-body p-0 mt-2">
                                    <h5 style={{ fontSize: 'clamp(1.15rem, 4.5vw, 1.25rem)', fontWeight: 'bold', marginBottom: '0.25rem', color: '#000' }}>{product.title}</h5>
                                    <p style={{ color: '#0B5394', fontWeight: '500', fontSize: 'clamp(0.9rem, 3.5vw, 1rem)' }}>{product.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content" style={{ borderRadius: '1.5rem', border: 'none', overflow: 'hidden' }}>
                        <div className="modal-header border-0 p-4 pb-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4 pt-0">
                            {selectedProduct && (
                                <div className="row g-4">
                                    <div className="col-lg-5">
                                        <div style={{ borderRadius: '1rem', overflow: 'hidden', height: '400px' }}>
                                            <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '1rem' }}>{selectedProduct.title}</h2>
                                        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '1.5rem' }}>{selectedProduct.description}</p>
                                        <div className="d-flex flex-wrap gap-2">
                                            {selectedProduct.items.map((item, i) => (
                                                <span key={i} className="badge" style={{ backgroundColor: '#f0f4f8', color: '#0B5394', padding: '0.6rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: '500', border: '1px solid #d1d9e0' }}>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer border-0 p-4">
                            <button type="button" className="btn btn-secondary px-4" data-bs-dismiss="modal" style={{ borderRadius: '0.5rem', backgroundColor: '#0B5394', border: 'none' }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                    .product-card-hover:hover {
                        transform: translateY(-10px);
                    }
                `}
            </style>
        </>
    );
};

export default Products;
