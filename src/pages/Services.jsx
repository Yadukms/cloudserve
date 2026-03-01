import React from 'react';

const Services = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="header" style={{ height: '60vh' }}>
                <div className="card header-card" style={{ height: '100%', minHeight: 'auto', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#1a1a1a', zIndex: -1 }}>
                        <img src="/static/images/Services.png" alt="Services Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start" style={{ paddingBottom: '3rem' }}>
                        <div className="container">
                            <h1 className="hero-title" style={{ fontSize: '4rem' }}>Services</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5 mb-5">
                <div className="row g-4">
                    {[
                        {
                            title: "Structured Cabling & Fiber Optic Solutions",
                            desc: "End-to-end structured cabling systems using Cat5e, Cat6, Cat6A, and high-quality fiber for reliable connectivity in offices, enterprises, and campuses.",
                            img: "/static/images/fibre_optics.webp"
                        },
                        {
                            title: "CCTV & Video Surveillance Solutions",
                            desc: "Complete IP-based surveillance including cameras, NVRs, VMS platforms, command centers, analytics, and monitoring solutions for all industry sectors.",
                            img: "/static/images/s2.jpg"
                        },
                        {
                            title: "IPTV & SMATV Distribution Systems",
                            desc: "High-definition IPTV/SMATV solutions for hotels, corporate buildings, residential towers, and commercial complexes.",
                            img: "/static/images/s3.jpg"
                        },
                        {
                            title: "Access Control, Time Attendance & Entrance Automation",
                            desc: "Integrated systems featuring door access, attendance machines, gate barriers, turnstiles, speed gates, and unified management platforms.",
                            img: "/static/images/s4.jpg"
                        },
                        {
                            title: "IT Hardware Trading & Supply",
                            desc: "Reliable sourcing and delivery of IT materials including PCs, laptops, servers, storage devices, backup appliances, and all related accessories.",
                            img: "/static/images/s5.jpg"
                        },
                        {
                            title: "Meeting Room & Collaboration Solutions",
                            desc: "Smart meeting room setups with video conferencing systems, interactive displays, wireless presentation tools, and audio-video integration.",
                            img: "/static/images/s6.jpg"
                        },
                        {
                            title: "Professional AV Solutions",
                            desc: "End-to-end audio-visual design including projectors, digital signage, sound systems, background music, and corporate AV integrations.",
                            img: "/static/images/s7.jpg"
                        },
                        {
                            title: "Firewall & Network Security",
                            desc: "Deployment of next-generation firewalls, VPN solutions, threat prevention, secure access, and network segmentation for enhanced protection.",
                            img: "/static/images/s8.jpg"
                        },
                        {
                            title: "People Counting & Occupancy Solutions",
                            desc: "AI-driven sensors and analytics used for retail, malls, events, and commercial facilities to improve planning and customer experience.",
                            img: "/static/images/s9.jpg"
                        },
                        {
                            title: "Cybersecurity Services",
                            desc: "Protection solutions including endpoint security, vulnerability assessments, security monitoring, and network hardening.",
                            img: "/static/images/s10.jpg"
                        },
                        {
                            title: "AI-Integrated Analytics Solutions",
                            desc: "Advanced analytics such as facial recognition, vehicle detection, behavior monitoring, heat maps, and business intelligence dashboards.",
                            img: "/static/images/s11.jpg"
                        },
                        {
                            title: "Retail Solutions – POS & Traffic Management",
                            desc: "Complete POS ecosystems, inventory systems, customer flow analytics, queue management, and retail automation solutions.",
                            img: "/static/images/s12.jpg"
                        },
                        {
                            title: "Video Wall & LED Display Systems",
                            desc: "Commercial-grade video walls, control-room displays, LED signage, and interactive digital surfaces for high-impact environments.",
                            img: "/static/images/s13.jpg"
                        },
                        {
                            title: "Annual Maintenance Contract (AMC)",
                            desc: "Comprehensive support for network infrastructure, servers, desktops, and security systems—ensuring high uptime and smooth operation.",
                            img: "/static/images/s14.jpg"
                        }
                    ].map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="d-flex flex-column h-100">
                                {/* Image Part */}
                                <div style={{ height: '300px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                {/* Content Part */}
                                <div className="p-4" style={{ backgroundColor: '#9ae0c8', borderRadius: '1.5rem', flex: 1 }}>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '500', marginBottom: '1rem', color: '#000' }}>{item.title}</h3>
                                    <p style={{ color: '#000', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
