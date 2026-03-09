'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { vehicles } from '@/lib/vehicles';
import {
    ChevronLeft,
    Gauge,
    Fuel,
    ShieldCheck,
    Zap,
    ArrowRight,
    Settings,
    Weight,
    Palette
} from 'lucide-react';

export default function VehicleDetailsPage() {
    const params = useParams();
    const id = parseInt(params.id);
    const vehicle = vehicles.find(v => v.id === id);

    const galleryItems = vehicle ? (vehicle.gallery || [vehicle.img]) : [];
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!vehicle) {
        return (
            <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
                <h2>Vehicle Not Found</h2>
                <Link href="/all-cars" className="btn-primary" style={{ marginTop: '20px' }}>Back to Inventory</Link>
            </div>
        );
    }

    return (
        <div className="vehicle-details-page" style={{ background: 'var(--canvas)', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Breadcrumb / Back Navigation */}
            <div className="container" style={{ padding: '100px 0 20px', flexShrink: 0 }}>
                <Link href="/all-cars" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-text)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--secondary-text)'}>
                    <ChevronLeft size={20} />
                    <span>Back to Inventory</span>
                </Link>
            </div>

            <div className="container" style={{ flex: 1, overflow: 'hidden', paddingBottom: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', height: '100%' }}>

                    {/* Left: Images Showcase (Slideshow) */}
                    <div className="vehicle-gallery" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', background: '#fff', position: 'relative', flex: 1, width: '100%' }}>
                            <Image
                                src={galleryItems[currentIndex]}
                                alt={vehicle.name}
                                fill
                                priority
                                style={{ objectFit: 'cover' }}
                            />
                            {galleryItems.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setCurrentIndex(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1))}
                                        style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={() => setCurrentIndex(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1))}
                                        style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                                        <ArrowRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Interactive Thumbnails */}
                        <div style={{ display: 'flex', gap: '15px', marginTop: '15px', overflowX: 'auto', paddingBottom: '10px', flexShrink: 0 }}>
                            {galleryItems.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    style={{
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        border: currentIndex === i ? '2px solid var(--accent)' : '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                        aspectRatio: '1/1',
                                        position: 'relative',
                                        flexShrink: 0,
                                        width: '80px',
                                        height: '80px'
                                    }}
                                >
                                    <Image src={img} alt={`Gallery ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info & Actions */}
                    <div className="vehicle-info" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', paddingRight: '10px' }}>
                        <div style={{ marginBottom: '30px', flexShrink: 0 }}>
                            <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '8px' }}>
                                {vehicle.badge || 'Available Now'}
                            </p>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-text)', marginBottom: '10px' }}>
                                {vehicle.make} {vehicle.name}
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)' }}>
                                    {vehicle.price}
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Specs Grid */}
                        <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px', flexShrink: 0 }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Gauge size={20} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Odometer</span>
                                    <strong style={{ fontSize: '0.9rem' }}>{vehicle.mileage}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Fuel size={20} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Fuel Type</span>
                                    <strong style={{ fontSize: '0.9rem' }}>{vehicle.fuel}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Settings size={20} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Engine</span>
                                    <strong style={{ fontSize: '0.8rem' }}>{vehicle.engine || 'N/A'}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Zap size={20} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Transmission</span>
                                    <strong style={{ fontSize: '0.8rem' }}>{vehicle.transmission || 'Automatic'}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Palette size={20} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Color</span>
                                    <strong style={{ fontSize: '0.9rem' }}>{vehicle.color || 'Dynamic'}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Weight size={20} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Weight</span>
                                    <strong style={{ fontSize: '0.9rem' }}>{vehicle.weight || 'N/A'}</strong>
                                </div>
                            </div>
                        </div>

                        {/* Call to Actions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
                            <a
                                href={`https://wa.me/254702864025?text=${encodeURIComponent(`Hi Mary Motors, I'm interested in the ${vehicle.make} ${vehicle.name} listing on your website.`)}`}
                                className="btn-primary"
                                style={{ textAlign: 'center', padding: '15px', fontSize: '1rem' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Enquire via WhatsApp
                            </a>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button className="btn-outline" style={{ flex: 1, padding: '12px', fontSize: '0.9rem' }}>Book a Test Drive</button>
                                <button className="btn-outline" style={{ flex: 1, padding: '12px', fontSize: '0.9rem' }}>Download Brochure</button>
                            </div>
                        </div>

                        {/* Assurance */}
                        <div style={{ marginTop: 'auto', display: 'flex', gap: '15px', padding: '15px', borderRadius: '16px', background: 'rgba(231, 76, 60, 0.05)', border: '1px dashed var(--accent)', flexShrink: 0 }}>
                            <ShieldCheck size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                            <p style={{ fontSize: '0.8rem', color: 'var(--secondary-text)', margin: 0, lineHeight: 1.4 }}>
                                <strong>Mary Motors Guarantee:</strong> This vehicle has undergone a rigorous inspection and comes with a 6-month limited warranty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
