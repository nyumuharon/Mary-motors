const features = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
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
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <path d="M24 4L6 12v12c0 10 18 20 18 20s18-10 18-20V12L24 4z" stroke="#c0392b" strokeWidth="2.5" fill="#c0392b" fillOpacity="0.08" />
                <path d="M17 24l5 5 9-10" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Trusted Dealers',
        desc: 'We work with verified sellers and trusted partners to ensure safe and transparent car transactions.'
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <circle cx="24" cy="24" r="18" stroke="#c0392b" strokeWidth="2.5" />
                <path d="M16 24h16M24 16v16" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M30 18l-12 12" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" opacity=".4" />
            </svg>
        ),
        title: 'Competitive Prices',
        desc: 'Get affordable deals on cars for sale in Kenya with fair pricing and flexible financing options.'
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <rect x="8" y="16" width="32" height="20" rx="4" stroke="#c0392b" strokeWidth="2.5" />
                <path d="M16 16V12a8 8 0 0116 0v4" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="24" cy="26" r="3" fill="#c0392b" />
            </svg>
        ),
        title: 'Certified Inspections',
        desc: 'Our vehicles undergo professional inspections to ensure quality, reliability, and peace of mind.'
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <rect x="4" y="18" width="40" height="16" rx="4" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="12" cy="34" r="5" stroke="#c0392b" strokeWidth="2.5" />
                <circle cx="36" cy="34" r="5" stroke="#c0392b" strokeWidth="2.5" />
                <path d="M4 22l8-10h24l8 10" stroke="#c0392b" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Wide Selection',
        desc: 'Choose from sedans, SUVs, hatchbacks, and trucks from Toyota, Nissan, Mazda, BMW, and more.'
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <circle cx="24" cy="18" r="9" stroke="#c0392b" strokeWidth="2.5" />
                <path d="M8 42c0-9 7-14 16-14s16 5 16 14" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Customer Support',
        desc: 'Our team is available to help you choose the right car and guide you through the buying process.'
    }
];

export default function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="section-header">
                    <p className="section-tag">OUR ADVANTAGES</p>
                    <h2 className="section-title">Why Choose Mary Motors</h2>
                    <p className="section-sub">Your trusted automotive partner in Kenya — built on transparency, quality, and a passion for putting you behind the right wheel.</p>
                </div>
                <div className="why-grid">
                    {features.map((f, i) => (
                        <div key={i} className="why-card">
                            <div className="why-icon-wrap">
                                {f.icon}
                            </div>
                            <div className="why-text">
                                <h3 className="why-title">{f.title}</h3>
                                <p className="why-desc">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
