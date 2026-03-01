import Link from 'next/link';

export const metadata = { title: 'About Us – Mary Motors' };

export default function AboutPage() {
    return (
        <>
            <div className="page-header"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&q=80') center/cover", padding: '100px 0', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>About Us</h1>
                    <p style={{ fontSize: '1.1rem', color: '#eee' }}>
                        <Link href="/" style={{ color: '#fff', textDecoration: 'underline' }}>Home</Link>
                        &nbsp;/&nbsp;About Us
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <section className="about" style={{ padding: '100px 0' }}>
                <div className="container about-grid">
                    <div className="about-img-wrap">
                        <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80" alt="Mary Motors Showroom" className="about-img" />
                        <div className="about-badge">
                            <span className="badge-number">15+</span>
                            <span className="badge-text">Years of Excellence</span>
                        </div>
                    </div>
                    <div className="about-text">
                        <p className="section-tag">OUR STORY</p>
                        <h2 className="section-title">Your Trusted Partner in Premium Automotive</h2>
                        <p className="about-desc">At Mary Motors, we believe that finding the right car should be an exciting, seamless experience. For over 15 years, we&apos;ve been connecting drivers with vehicles that match their lifestyle, budget, and aspirations.</p>
                        <p className="about-desc" style={{ marginTop: '20px' }}>We pride ourselves on an extensive inventory of new, used, and pre-order vehicles. Our expert team is committed to delivering unparalleled customer service, ensuring you drive away completely satisfied.</p>
                        <div className="about-stats" style={{ marginTop: '40px' }}>
                            <div className="stat"><span className="stat-num">2,500+</span><span className="stat-label">Cars Sold</span></div>
                            <div className="stat"><span className="stat-num">98%</span><span className="stat-label">Happy Clients</span></div>
                            <div className="stat"><span className="stat-num">50+</span><span className="stat-label">Car Brands</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section style={{ backgroundColor: '#f5f5f5', padding: '100px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <p className="section-tag">WHY CHOOSE US</p>
                        <h2 className="section-title">Our Core Values</h2>
                    </div>
                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {[
                            { icon: '🛡️', title: 'Quality Assurance', desc: 'Every vehicle in our showroom undergoes a rigorous multi-point inspection to ensure absolute quality and safety.' },
                            { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees. We offer competitive, transparent pricing and flexible financing options for every budget.' },
                            { icon: '🤝', title: 'Customer First', desc: 'Your satisfaction is our priority. We offer a no-pressure environment and dedicated support long after your purchase.' },
                        ].map((v, i) => (
                            <div key={i} className="feature-card" style={{ background: 'white' }}>
                                <div className="feature-icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <p className="section-tag">OUR EXPERTS</p>
                        <h2 className="section-title">Meet Our Team</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
                        {[
                            { name: 'Brooklyn Simmons', role: 'Sales Director', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
                            { name: 'Darlene Robertson', role: 'Finance Manager', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
                            { name: 'Guy Hawkins', role: 'Lead Mechanic', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
                            { name: 'Jenny Wilson', role: 'Customer Success', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
                        ].map((member, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <img src={member.img} alt={member.name} style={{ borderRadius: '10px', marginBottom: '20px', aspectRatio: '3/4', objectFit: 'cover', width: '100%' }} />
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{member.name}</h3>
                                <p style={{ color: '#c0392b', fontWeight: 600, fontSize: '0.9rem' }}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ backgroundColor: '#111', color: 'white', padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Drive Your Dream?</h2>
                    <p style={{ color: '#aaa', marginBottom: '30px', fontSize: '1.1rem' }}>Explore our vast inventory or contact our experts to help you find the perfect match.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Link href="/all-cars" className="btn-primary">Browse Vehicles →</Link>
                        <Link href="/contact-us" className="btn-primary" style={{ background: 'transparent', border: '2px solid white' }}>Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
