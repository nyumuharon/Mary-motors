'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeroSlider from '@/components/HeroSlider';
import VehicleGrid from '@/components/VehicleGrid';
import Link from 'next/link';
import Image from 'next/image';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the best cars to buy in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Popular choices include Toyota, Mazda, Nissan, and Subaru because they are reliable, fuel-efficient, and have affordable spare parts.' } },
    { '@type': 'Question', name: 'How much does it cost to buy a car in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Used cars can start from around KES 500,000, while newer imported vehicles can range from KES 1 million to over KES 5 million.' } },
    { '@type': 'Question', name: 'Can I import a car from Japan to Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The process involves purchasing the vehicle, shipping it to Kenya, paying import duty, and registering it locally.' } },
    { '@type': 'Question', name: 'Do you offer car financing in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with banks and lenders to provide car financing options so customers can pay in monthly installments.' } },
    { '@type': 'Question', name: 'What documents are required to buy a car in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'You need a National ID or passport, KRA PIN, proof of payment, and insurance documents.' } },
    { '@type': 'Question', name: 'What are the most fuel-efficient cars in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Fuel-efficient options include the Toyota Vitz, Honda Fit, Mazda Demio, and Suzuki Alto.' } },
    { '@type': 'Question', name: 'Can I trade in my old car for a new one?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The value of your current vehicle is deducted from the price of the new one.' } },
    { '@type': 'Question', name: 'How do I know if a used car is in good condition?', acceptedAnswer: { '@type': 'Answer', text: 'Check the vehicle history, mileage, inspection reports, and service records. A professional inspection can also confirm the car condition.' } },
  ],
};

// ===== SEARCH BANNER =====
function SearchBanner() {
    const [make, setMake] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        let url = '/all-cars?search=true';
        if (make) url += `&make=${make}`;
        if (type) url += `&type=${type}`;
        router.push(url);
    };

    return (
        <section className="search-banner">
            <div className="container search-inner">
                <h2>Find Your Perfect Vehicle</h2>
                <p>Search from our extensive inventory of over 500 vehicles</p>
                <div className="search-bar">
                    <select id="search-make" value={make} onChange={(e) => setMake(e.target.value)}>
                        <option value="">Select Make</option>
                        <option>Toyota</option><option>Honda</option><option>BMW</option>
                        <option>Mercedes</option><option>Audi</option><option>Ford</option>
                        <option>Nissan</option><option>Mazda</option>
                    </select>
                    <select id="search-type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">Vehicle Type</option>
                        <option>SUV</option><option>Sedan</option><option>Truck</option>
                        <option>Convertible</option><option>Hatchback</option>
                    </select>
                    <select id="search-price" value={price} onChange={(e) => setPrice(e.target.value)}>
                        <option value="">Price Range</option>
                        <option>Under KES 2,000,000</option><option>KES 2,000,000–KES 5,000,000</option>
                        <option>KES 5,000,000–KES 10,000,000</option><option>Above KES 10,000,000</option>
                    </select>
                    <button onClick={handleSearch} className="btn-primary search-go">Search →</button>
                </div>
            </div>
        </section>
    );
}

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HeroSlider />

            <section className="vehicles" id="vehicles">
                <div className="container">
                    <div className="section-header">
                        <p className="section-tag">OUR INVENTORY</p>
                        <h2 className="section-title">Featured Vehicles</h2>
                        <p className="section-sub">Hand-picked premium vehicles ready for you to drive off the lot today.</p>
                    </div>
                    <VehicleGrid showFilterTabs={true} limit={9} />
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link href="/all-cars" className="btn-outline">View All Vehicles</Link>
                    </div>
                </div>
            </section>

            <section className="features" id="features">
                <div className="container features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="18" width="52" height="12" rx="6" stroke="#c0392b" strokeWidth="2.5" />
                                <circle cx="14" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                                <circle cx="46" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                                <path d="M8 18 L16 6 L44 6 L52 18" stroke="#c0392b" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                                <circle cx="48" cy="12" r="4" fill="none" stroke="#c0392b" strokeWidth="2" />
                                <line x1="51" y1="15" x2="55" y2="19" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3>Find a Car</h3>
                        <p>We provide a platform to help you find the perfect vehicle matching your preferences and budget.</p>
                        <Link href="/all-cars" className="feature-link">Browse Cars →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="22" stroke="#c0392b" strokeWidth="2.5" />
                                <path d="M20 30 L28 38 L42 22" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M30 8 C30 8 38 8 44 14" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                                <path d="M30 52 C30 52 22 52 16 46" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3>Pre Order</h3>
                        <p>Get ready to experience innovation, style, and performance like never before. Reserve your future ride today.</p>
                        <Link href="/all-cars" className="feature-link">Pre-Order Now →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="18" width="52" height="12" rx="6" stroke="#c0392b" strokeWidth="2.5" />
                                <circle cx="14" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                                <circle cx="46" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                                <path d="M8 18 L16 6 L44 6 L52 18" stroke="#c0392b" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                                <path d="M30 2 L30 10" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                                <path d="M26 4 L30 2 L34 4" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3>Latest Car</h3>
                        <p>Stay updated on the automotive world&apos;s newest sensations. Be the first to drive tomorrow&apos;s technology.</p>
                        <Link href="/all-cars" className="feature-link">View Latest →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="18" width="52" height="12" rx="6" stroke="#c0392b" strokeWidth="2.5" />
                                <circle cx="14" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                                <circle cx="46" cy="30" r="6" stroke="#c0392b" strokeWidth="2.5" />
                                <path d="M8 18 L16 6 L44 6 L52 18" stroke="#c0392b" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                                <path d="M22 12 L38 12" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                                <path d="M26 8 L34 8" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3>Used Car</h3>
                        <p>Mary Motors is here to help you find a pre-loved gem that meets your requirements at the best value.</p>
                        <Link href="/all-cars" className="feature-link">Browse Used →</Link>
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            <SearchBanner />

            <section className="gallery" id="gallery">
                <div className="container">
                    <div className="section-header">
                        <p className="section-tag">GALLERY</p>
                        <h2 className="section-title">See Our Showroom</h2>
                    </div>
                    <div className="gallery-grid">
                        {[
                            { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', cls: 'g-large' },
                            { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80' },
                            { src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80' },
                            { src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80' },
                            { src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80' },
                        ].map((img, i) => (
                            <div key={i} className={`gallery-item ${img.cls || ''}`}>
                                <Image src={img.src} alt={`Showroom car ${i + 1}`} loading="lazy" width={600} height={400} />
                                <div className="gallery-overlay"><span>View</span></div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link href="/gallery" className="btn-outline">View Full Gallery</Link>
                    </div>
                </div>
            </section>

            <FAQ />
        </>
    );
}
