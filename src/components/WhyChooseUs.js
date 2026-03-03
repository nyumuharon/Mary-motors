import Image from 'next/image';

const WhyChooseUs = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="28" height="28" rx="4" stroke="#c0392b" strokeWidth="3" />
                    <path d="M18 20h12M18 28h12M24 16v16" stroke="#c0392b" strokeWidth="3" strokeLinecap="round" />
                </svg>
            ),
            title: 'Quality Inventory',
            desc: 'Highlight the quality and variety of vehicles you offer, including both new and used cars. Mention exclusive models or brands you may carry.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="18" r="8" stroke="#3498db" strokeWidth="3" />
                    <path d="M10 40c0-8 6-12 14-12s14 4 14 12" stroke="#3498db" strokeWidth="3" strokeLinecap="round" />
                </svg>
            ),
            title: 'Exceptional Customer Service',
            desc: 'Emphasize your commitment to providing exceptional customer service. Mention personalized assistance, and responsive customer support.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z" fill="#f1c40f" stroke="#f1c40f" strokeWidth="2" />
                </svg>
            ),
            title: 'Competitive Pricing',
            desc: 'If your dealership offers competitive pricing or special discounts, make sure to mention it. Consider showcasing specific pricing advantages deals.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="14" width="36" height="20" rx="4" stroke="#e67e22" strokeWidth="3" />
                    <circle cx="14" cy="34" r="4" stroke="#e67e22" strokeWidth="3" />
                    <circle cx="34" cy="34" r="4" stroke="#e67e22" strokeWidth="3" />
                </svg>
            ),
            title: 'Certified Pre-Owned Vehicles',
            desc: 'If you offer certified pre-owned cars, stress the benefits of these vehicles, such as thorough inspections, warranties, and peace of mind.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4L6 12v12c0 10 18 18 18 18s18-8 18-18V12L24 4z" stroke="#3498db" strokeWidth="3" fill="#3498db" fillOpacity="0.1" />
                    <path d="M18 24l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Reputation and Trust',
            desc: 'Mention any awards, industry recognition, or years of experience that have helped build trust with your customers.'
        },
        {
            icon: (
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="#2c3e50" strokeWidth="3" fill="#2c3e50" fillOpacity="0.1" />
                    <path d="M16 20l4 4 12-12" stroke="#2c3e50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Satisfaction Guarantee',
            desc: 'If applicable, consider offering a satisfaction guarantee to instill confidence in potential our customers.'
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why choose us</h2>
                    <p className="section-sub">Choose CarHub for your automotive needs and discover the difference. Our commitment to delivering exceptional service and expertise is at the heart of everything we do.</p>
                </div>
                <div className="why-grid">
                    {features.map((f, i) => (
                        <div key={i} className="why-card">
                            <div className="why-icon">
                                {f.icon}
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
