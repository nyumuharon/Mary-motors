import Image from 'next/image';

const WhyChooseUs = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                    <rect x="10" y="10" width="28" height="28" rx="4" stroke="#e74c3c" strokeWidth="3" />
                    <path d="M18 20h12M18 28h12M24 16v16" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" />
                </svg>
            ),
            title: 'Quality Vehicles',
            desc: 'Browse a wide selection of new and used cars in Kenya, including low-mileage imports from Japan and the UK.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                    <circle cx="24" cy="18" r="8" stroke="#e74c3c" strokeWidth="3" />
                    <path d="M10 40c0-8 6-12 14-12s14 4 14 12" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" />
                </svg>
            ),
            title: 'Trusted Dealers',
            desc: 'We work with verified sellers and trusted partners to ensure safe and transparent car transactions.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                    <path d="M24 8l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z" fill="#e74c3c" stroke="#e74c3c" strokeWidth="2" />
                </svg>
            ),
            title: 'Competitive Prices',
            desc: 'Get affordable deals on cars for sale in Kenya with fair pricing and flexible financing options.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                    <rect x="6" y="14" width="36" height="20" rx="4" stroke="#e74c3c" strokeWidth="3" />
                    <circle cx="14" cy="34" r="4" stroke="#e74c3c" strokeWidth="3" />
                    <circle cx="34" cy="34" r="4" stroke="#e74c3c" strokeWidth="3" />
                </svg>
            ),
            title: 'Certified Inspections',
            desc: 'Our vehicles undergo professional inspections to ensure quality, reliability, and peace of mind.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                    <path d="M24 4L6 12v12c0 10 18 18 18 18s18-8 18-18V12L24 4z" stroke="#e74c3c" strokeWidth="3" fill="#e74c3c" fillOpacity="0.1" />
                    <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Wide Selection',
            desc: 'Choose from sedans, SUVs, hatchbacks, and trucks from brands like Toyota, Nissan, Mazda, BMW, and more.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="#e74c3c" strokeWidth="3" fill="#e74c3c" fillOpacity="0.1" />
                    <path d="M16 20l4 4 12-12" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Customer Support',
            desc: 'Our team is available to help you choose the right car and guide you through the buying process.'
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Us</h2>
                    <p className="section-sub">Choose Mary Motors for your automotive needs and discover the difference. Our commitment to delivering exceptional service and expertise is at the heart of everything we do.</p>
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
};

export default WhyChooseUs;
