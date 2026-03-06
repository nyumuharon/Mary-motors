'use client';
import { useRef } from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bento-icon">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                </svg>
            ),
            title: 'Quality Vehicles',
            desc: 'Low-mileage imports from Japan/UK. Discover premium vehicles rigorously inspected for peak performance.',
            size: 'span-2'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bento-icon">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: 'Trusted Dealers',
            desc: 'Verified sellers and perfectly transparent transactions.',
            size: 'span-1'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bento-icon">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ),
            title: 'Competitive Prices',
            desc: 'Get affordable deals and highly flexible financing.',
            size: 'span-1'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bento-icon">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            ),
            title: 'Certified Inspections',
            desc: 'Our vehicles undergo professional inspections to ensure absolute reliability on the road.',
            size: 'span-2'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bento-icon">
                    <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z" />
                    <circle cx="8" cy="16" r="2" />
                    <circle cx="16" cy="16" r="2" />
                </svg>
            ),
            title: 'Wide Selection',
            desc: 'Choose from sedans, SUVs, hatchbacks, and trucks from leading global brands.',
            size: 'span-2'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bento-icon">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            ),
            title: 'Customer Support',
            desc: 'Available 24/7 to completely guide you through the buying process.',
            size: 'span-1'
        }
    ];

    const handleMouseMove = (e, index) => {
        const card = document.getElementById(`bento-card-${index}`);
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <section className="bento-section">
            <div className="container" style={{ maxWidth: '1100px' }}>
                <h2 className="bento-title">The Mary Motors Edge</h2>
                <div className="bento-grid">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            id={`bento-card-${i}`}
                            className={`bento-card ${f.size}`}
                            onMouseMove={(e) => handleMouseMove(e, i)}
                        >
                            <div className="bento-glow" />
                            <div className="bento-content">
                                <div className="bento-icon-wrap">
                                    {f.icon}
                                </div>
                                <h3 className="bento-heading">{f.title}</h3>
                                <p className="bento-desc">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
