const features = [
    {
        number: '01',
        color: '#c0392b',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <rect x="6" y="10" width="36" height="28" rx="5" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="16" cy="33" r="5" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="32" cy="33" r="5" stroke="#c0392b" strokeWidth="2.5" />
                <path d="M6 22h36M14 10l-4 12M34 10l4 12" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Quality Vehicles',
        desc: 'Browse a wide selection of new and used cars in Kenya, including low-mileage imports from Japan and the UK.'
    },
    {
        number: '02',
        color: '#2980b9',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <path d="M24 4L6 12v12c0 10 18 20 18 20s18-10 18-20V12L24 4z" stroke="#2980b9" strokeWidth="2.5" fill="#2980b9" fillOpacity="0.08" />
                <path d="M17 24l5 5 9-10" stroke="#2980b9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Trusted Dealers',
        desc: 'We work with verified sellers and trusted partners to ensure safe and transparent car transactions.'
    },
    {
        number: '03',
        color: '#27ae60',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <circle cx="24" cy="24" r="18" stroke="#27ae60" strokeWidth="2.5" />
                <path d="M16 24l5 5 11-10" stroke="#27ae60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 10v4M24 34v4M10 24H6M42 24h-4" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Competitive Prices',
        desc: 'Get affordable deals on cars for sale in Kenya with fair pricing and flexible financing options.'
    },
    {
        number: '04',
        color: '#e67e22',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <rect x="8" y="16" width="32" height="20" rx="4" stroke="#e67e22" strokeWidth="2.5" />
                <path d="M16 16V12a8 8 0 0116 0v4" stroke="#e67e22" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="24" cy="26" r="3" fill="#e67e22" />
                <path d="M24 29v4" stroke="#e67e22" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Certified Inspections',
        desc: 'Our vehicles undergo professional inspections to ensure quality, reliability, and peace of mind.'
    },
    {
        number: '05',
        color: '#8e44ad',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <rect x="4" y="18" width="40" height="16" rx="4" stroke="#8e44ad" strokeWidth="2.5" />
                <circle cx="12" cy="34" r="5" stroke="#8e44ad" strokeWidth="2.5" />
                <circle cx="36" cy="34" r="5" stroke="#8e44ad" strokeWidth="2.5" />
                <path d="M4 22l8-10h24l8 10" stroke="#8e44ad" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Wide Selection',
        desc: 'Choose from sedans, SUVs, hatchbacks, and trucks from Toyota, Nissan, Mazda, BMW, and more.'
    },
    {
        number: '06',
        color: '#16a085',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <circle cx="24" cy="18" r="9" stroke="#16a085" strokeWidth="2.5" />
                <path d="M8 42c0-9 7-14 16-14s16 5 16 14" stroke="#16a085" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M34 12c3 1 5 4 5 7" stroke="#16a085" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Customer Support',
        desc: 'Our team is available to help you choose the right car and guide you through the buying process.'
    }
];

export default function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <div className="why-bg-accent" />
            <div className="container">
                <div className="section-header">
                    <p className="section-tag">OUR ADVANTAGES</p>
                    <h2 className="section-title">Why Choose Mary Motors</h2>
                    <p className="section-sub">
                        Your trusted automotive partner in Kenya — built on transparency, quality, and a passion for putting you behind the right wheel.
                    </p>
                </div>

                <div className="why-grid">
                    {features.map((f, i) => (
                        <div key={i} className="why-card" style={{ '--card-color': f.color }}>
                            <div className="why-card-top">
                                <div className="why-icon-wrap">
                                    {f.icon}
                                </div>
                                <span className="why-number">{f.number}</span>
                            </div>
                            <h3 className="why-title">{f.title}</h3>
                            <p className="why-desc">{f.desc}</p>
                            <div className="why-line" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
