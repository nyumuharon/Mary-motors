'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const galleryImages = [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80',
    'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80',
];

const TABS = ['All Photos', 'Exterior', 'Interior', 'Events', 'Deliveries'];

export default function GalleryPage() {
    const [activeTab, setActiveTab] = useState('All Photos');

    return (
        <>
            <div className="page-header"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80') center/cover", padding: '100px 0', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Showroom Gallery</h1>
                    <p style={{ fontSize: '1.1rem', color: '#eee' }}>
                        <Link href="/" style={{ color: '#fff', textDecoration: 'underline' }}>Home</Link>
                        &nbsp;/&nbsp;Gallery
                    </p>
                </div>
            </div>

            <section className="gallery-page" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <div className="filter-tabs" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                            {TABS.map(tab => (
                                <button
                                    key={tab}
                                    className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {galleryImages.map((src, i) => (
                            <div key={i} className="gallery-item" style={{ aspectRatio: '1' }}>
                                <Image src={src} alt={`Gallery image ${i + 1}`} loading="lazy" width={600} height={400} />
                                <div className="gallery-overlay"><span>View High Res</span></div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <button className="btn-outline">Load More Images</button>
                    </div>
                </div>
            </section>

            <section className="directions-map" style={{ background: '#000', padding: '0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <iframe
                    src="https://maps.google.com/maps?q=Nakuru,%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mary Motors Location - Nakuru"
                ></iframe>
            </section>
        </>
    );
}
