import Link from 'next/link';

export const metadata = {
    title: 'About Us | Mary Motors – Trusted Car Dealership in Kenya',
    description: 'Learn about Mary Motors, a trusted car dealership in Kenya with 15+ years of experience selling new, used, and imported vehicles. Serving Nairobi and beyond.',
    alternates: { canonical: 'https://mary-motors.vercel.app/about' },
    openGraph: {
        title: 'About Mary Motors – Trusted Car Dealership in Kenya',
        description: '15+ years connecting Kenyan drivers with quality new and used vehicles. Transparent pricing, certified inspections, and excellent customer support.',
        url: 'https://mary-motors.vercel.app/about',
    },
};

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

            {/* Premium Story Section with Glassmorphism */}
            <section className="about-hero-bg">
                <div className="container about-glass-content" style={{ color: '#FFFFFF' }}>
                    <div className="about-grid" style={{ alignItems: 'center' }}>
                        <div className="glass-card">
                            <p className="section-tag" style={{ color: 'var(--accent)' }}>OUR STORY</p>
                            <h2 className="section-title">Your Trusted Partner in Premium Automotive</h2>
                            <p className="about-desc">
                                At Mary Motors, we believe that finding the right car should be an exciting, seamless experience.
                                For over 15 years, we&apos;ve been connecting drivers with vehicles that match their lifestyle, budget, and aspirations.
                            </p>
                            <p className="about-desc" style={{ marginTop: '20px' }}>
                                We pride ourselves on an extensive inventory of new, used, and premium imports. Our expert team
                                is committed to delivering unparalleled customer service, ensuring you drive away completely satisfied.
                            </p>

                            <div className="about-stats-glass">
                                <div className="stat-glass">
                                    <span className="stat-num">2,500+</span>
                                    <span className="stat-label">Cars Sold</span>
                                </div>
                                <div className="stat-glass">
                                    <span className="stat-num">98%</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                                <div className="stat-glass">
                                    <span className="stat-num">50+</span>
                                    <span className="stat-label">Car Brands</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingLeft: '40px' }}>
                            {/* Decorative Graphic or badge can go here */}
                            <div className="about-badge" style={{ position: 'relative', right: 'auto', bottom: 'auto', transform: 'scale(1.2)', margin: '0 auto' }}>
                                <span className="badge-number">15+</span>
                                <span className="badge-text">Years of Excellence</span>
                            </div>
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
                    <div className="features-grid">
                        {[
                            { icon: '', title: 'Quality Assurance', desc: 'Every vehicle in our showroom undergoes a rigorous multi-point inspection to ensure absolute quality and safety.' },
                            { icon: '', title: 'Transparent Pricing', desc: 'No hidden fees. We offer competitive, transparent pricing and flexible financing options for every budget.' },
                            { icon: '', title: 'Customer First', desc: 'Your satisfaction is our priority. We offer a no-pressure environment and dedicated support long after your purchase.' },
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

            {/* CTA */}
            <section style={{ backgroundColor: '#111', color: 'white', padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#FFFFFF' }}>Ready to Drive Your Dream?</h2>
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
