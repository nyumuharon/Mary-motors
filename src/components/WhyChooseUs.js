'use client';

import { motion } from 'framer-motion';
import {
    CarFront,
    ShieldCheck,
    Banknote,
    ClipboardCheck,
    Layers,
    HeadphonesIcon,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const WhyChooseUs = () => {
    return (
        <section className="edge-section">
            <div className="wrapper">
                {/* HEADER */}
                <div className="edge-header">
                    <div className="edge-header-left">
                        <div className="eyebrow">
                            <span className="eyebrow-line"></span>
                            Why Choose Us
                        </div>
                        <h2 className="edge-main-title">Built on<br /><em>trust &amp; craft</em></h2>
                    </div>
                    <div className="edge-header-right">
                        <p className="edge-header-sub">Every vehicle, every dealer, every transaction — held to the highest standard in the automotive industry.</p>
                        <div className="edge-header-count">
                            <span className="count-num">6</span>
                            <span className="count-label">Core Pillars</span>
                        </div>
                    </div>
                </div>

                {/* GRID */}
                <motion.div
                    className="edge-grid-new"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* 01 Quality Vehicles */}
                    <motion.div variants={cardVariants} className="edge-card-new span-4">
                        <span className="edge-card-num">01</span>
                        <div className="edge-icon-wrap">
                            <CarFront size={20} strokeWidth={1.8} />
                        </div>
                        <div className="edge-card-title">Quality Vehicles</div>
                        <div className="edge-div"></div>
                        <p className="edge-card-desc">Low-mileage imports from Japan & UK. Rigorously inspected for peak performance.</p>
                    </motion.div>

                    {/* 02 Trusted Dealers */}
                    <motion.div variants={cardVariants} className="edge-card-new edge-card-coral span-4">
                        <span className="edge-card-num">02</span>
                        <div className="edge-icon-wrap">
                            <ShieldCheck size={20} strokeWidth={1.8} />
                        </div>
                        <div className="edge-card-title">Trusted Dealers</div>
                        <div className="edge-div" style={{ background: '#fff' }}></div>
                        <p className="edge-card-desc">Verified sellers and perfectly transparent transactions every step of the way.</p>
                    </motion.div>

                    {/* 03 Competitive Prices */}
                    <motion.div variants={cardVariants} className="edge-card-new edge-card-lime span-4">
                        <span className="edge-card-num">03</span>
                        <div className="edge-icon-wrap">
                            <Banknote size={20} strokeWidth={1.8} />
                        </div>
                        <div className="edge-card-title">Competitive Prices</div>
                        <div className="edge-div" style={{ background: '#0F0E0C' }}></div>
                        <p className="edge-card-desc">Affordable deals and highly flexible financing tailored to your budget.</p>
                    </motion.div>

                    {/* 04 Certified Inspections */}
                    <motion.div variants={cardVariants} className="edge-card-new edge-card-ink span-8">
                        <span className="edge-card-num">04</span>
                        <div className="edge-icon-wrap">
                            <ClipboardCheck size={20} strokeWidth={1.8} />
                        </div>
                        <div className="edge-feature-body">
                            <div>
                                <div className="edge-card-title">Certified Inspections</div>
                                <div className="edge-div" style={{ background: '#fff' }}></div>
                                <p className="edge-card-desc">Our vehicles undergo rigorous professional inspections — engine, chassis, electronics, and safety — ensuring absolute road reliability.</p>
                                <div className="edge-pill"><span className="edge-pill-dot"></span>Industry Certified</div>
                            </div>
                            <div className="edge-feature-stats">
                                <div className="edge-stat">
                                    <span className="edge-stat-val">200+</span>
                                    <span className="edge-stat-label">Check points</span>
                                </div>
                                <div className="edge-stat">
                                    <span className="edge-stat-val">100%</span>
                                    <span className="edge-stat-label">Pass guarantee</span>
                                </div>
                                <div className="edge-stat">
                                    <span className="edge-stat-val">48h</span>
                                    <span className="edge-stat-label">Turnaround</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 05 Wide Selection */}
                    <motion.div variants={cardVariants} className="edge-card-new span-4">
                        <span className="edge-card-num">05</span>
                        <div className="edge-icon-wrap">
                            <Layers size={20} strokeWidth={1.8} />
                        </div>
                        <div className="edge-card-title">Wide Selection</div>
                        <div className="edge-div"></div>
                        <p className="edge-card-desc">Sedans, SUVs, hatchbacks, and trucks from all leading global brands.</p>
                    </motion.div>

                    {/* 06 Support */}
                    <motion.div variants={cardVariants} className="edge-card-new span-5">
                        <span className="edge-card-num">06</span>
                        <div className="edge-icon-wrap">
                            <HeadphonesIcon size={20} strokeWidth={1.8} />
                        </div>
                        <div className="edge-card-title">Customer Support</div>
                        <div className="edge-div"></div>
                        <p className="edge-card-desc">Available 24/7 to guide you through every step of the buying process.</p>
                    </motion.div>

                    {/* 07 Coral CTA strip */}
                    <motion.div variants={cardVariants} className="edge-card-new edge-card-coral span-3 flex-center-cta">
                        <div className="edge-cta-text">Ready to<br />find yours?</div>
                        <Link href="/all-cars" className="edge-cta-btn">
                            Browse Cars
                            <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
