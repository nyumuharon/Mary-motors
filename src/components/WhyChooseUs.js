'use client';

import { motion } from 'framer-motion';
import {
    CarFront,
    ShieldCheck,
    Banknote,
    ClipboardCheck,
    Layers,
    HeadphonesIcon
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const WhyChooseUs = () => {
    const features = [
        {
            icon: CarFront,
            title: 'Quality Vehicles',
            desc: 'Low-mileage imports from Japan/UK. Discover premium vehicles rigorously inspected for peak performance.',
            isWide: true
        },
        {
            icon: ShieldCheck,
            title: 'Trusted Dealers',
            desc: 'Verified sellers and perfectly transparent transactions.',
            isWide: false
        },
        {
            icon: Banknote,
            title: 'Competitive Prices',
            desc: 'Get affordable deals and highly flexible financing.',
            isWide: false
        },
        {
            icon: ClipboardCheck,
            title: 'Certified Inspections',
            desc: 'Our vehicles undergo professional inspections to ensure absolute reliability on the road.',
            isWide: true
        },
        {
            icon: Layers,
            title: 'Wide Selection',
            desc: 'Choose from sedans, SUVs, hatchbacks, and trucks from leading global brands.',
            isWide: true
        },
        {
            icon: HeadphonesIcon,
            title: 'Customer Support',
            desc: 'Available 24/7 to completely guide you through the buying process.',
            isWide: false
        }
    ];

    return (
        <section className="edge-section">
            <div className="container" style={{ maxWidth: '1100px' }}>
                <h2 className="edge-title">The Mary Motors Edge</h2>

                <motion.div
                    className="edge-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                className={`edge-card ${feature.isWide ? 'wide' : ''}`}
                            >
                                {/* Icon Treatment */}
                                <div className="edge-icon-box">
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>

                                {/* Text Hierarchy */}
                                <h3 className="edge-heading">{feature.title}</h3>
                                <p className="edge-desc">{feature.desc}</p>

                                {/* Subtle Decorative Detail */}
                                <div className="edge-number">
                                    0{i + 1}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
