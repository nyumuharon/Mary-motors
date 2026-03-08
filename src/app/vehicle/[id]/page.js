'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { vehicles } from '@/lib/vehicles';
import {
    ChevronLeft,
    Calendar,
    Gauge,
    Fuel,
    Users,
    ShieldCheck,
    Zap,
    MapPin,
    ArrowRight,
    Settings,
    Weight,
    Palette
} from 'lucide-react';

export default function VehicleDetailsPage() {
    const params = useParams();
    const id = parseInt(params.id);
    const vehicle = vehicles.find(v => v.id === id);
    const [mainImage, setMainImage] = useState(vehicle?.img);

    if (!vehicle) {
        return (
            <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
                <h2>Vehicle Not Found</h2>
                <Link href="/all-cars" className="btn-primary" style={{ marginTop: '20px' }}>Back to Inventory</Link>
            </div>
        );
    }

    return (
        <div className="vehicle-details-page" style={{ background: 'var(--canvas)', minHeight: '100vh', paddingBottom: '100px' }}>
            {/* Breadcrumb / Back Navigation */}
            <div className="container" style={{ padding: '120px 0 30px' }}>
                <Link href="/all-cars" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-text)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--secondary-text)'}>
                    <ChevronLeft size={20} />
                    <span>Back to Inventory</span>
                </Link>
            </div>

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px' }} className="mobile-stack">
                    {/* Left: Images Showcase */}
                    <div className="vehicle-gallery">
                        <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: '#fff', position: 'relative', aspectRatio: '4/3' }}>
                            <Image
                                src={mainImage || vehicle.img}
                                alt={vehicle.name}
                                fill
                                priority
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        {/* Interactive Thumbnails */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '15px' }}>
                            {(vehicle.gallery || [vehicle.img]).map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setMainImage(img)}
                                    style={{
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        border: (mainImage || vehicle.img) === img ? '2px solid var(--accent)' : '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                        aspectRatio: '1/1',
                                        position: 'relative'
                                    }}
                                >
                                    <Image src={img} alt={`Gallery ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info & Actions */}
                    <div className="vehicle-info">
                        <div style={{ marginBottom: '40px' }}>
                            <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '8px' }}>
                                {vehicle.badge || 'Available Now'}
                            </p>
                            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-text)', marginBottom: '10px' }}>
                                {vehicle.make} {vehicle.name}
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>
                                    {vehicle.price}
                                </div>
                                <span style={{ padding: '4px 12px', background: 'rgba(0,0,0,0.05)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                                    EXCL. GOVT CHARGES
                                </span>
                            </div>
                        </div>

                        {/* Enhanced Specs Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '15px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Gauge size={24} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Odometer</span>
                                    <strong style={{ fontSize: '1rem' }}>{vehicle.mileage}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '15px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Fuel size={24} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Fuel Type</span>
                                    <strong style={{ fontSize: '1rem' }}>{vehicle.fuel}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '15px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Settings size={24} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Engine</span>
                                    <strong style={{ fontSize: '0.9rem' }}>{vehicle.engine || 'N/A'}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '15px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Zap size={24} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Transmission</span>
                                    <strong style={{ fontSize: '0.9rem' }}>{vehicle.transmission || 'Automatic'}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '15px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Palette size={24} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Color</span>
                                    <strong style={{ fontSize: '1rem' }}>{vehicle.color || 'Dynamic'}</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '15px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Weight size={24} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Weight</span>
                                    <strong style={{ fontSize: '1rem' }}>{vehicle.weight || 'N/A'}</strong>
                                </div>
                            </div>
                        </div>

                        {/* Call to Actions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <a
                                href={`https://wa.me/254742764263?text=${encodeURIComponent(`Hi Mary Motors, I'm interested in the ${vehicle.make} ${vehicle.name} listing on your website.`)}`}
                                className="btn-primary"
                                style={{ textAlign: 'center', padding: '18px', fontSize: '1.1rem' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Enquire via WhatsApp
                            </a>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button className="btn-outline" style={{ flex: 1, padding: '14px' }}>Book a Test Drive</button>
                                <button className="btn-outline" style={{ flex: 1, padding: '14px' }}>Download Brochure</button>
                            </div>
                        </div>

                        {/* Assurance */}
                        <div style={{ marginTop: '30px', display: 'flex', gap: '15px', padding: '20px', borderRadius: '16px', background: 'rgba(231, 76, 60, 0.05)', border: '1px dashed var(--accent)' }}>
                            <ShieldCheck size={28} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                            <p style={{ fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
                                <strong>Mary Motors Guarantee:</strong> This vehicle has undergone a rigorous 150-point inspection and comes with a 6-month limited warranty.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Description & Technical Specifications */}
                <div style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid var(--stroke)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '60px' }} className="mobile-stack">
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px', fontFamily: 'Syne, sans-serif' }}>Vehicle Overview</h2>
                            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--secondary-text)', marginBottom: '60px' }}>
                                <p>
                                    This stunning {vehicle.make} {vehicle.name} represents the pinnacle of automotive excellence.
                                    Meticulously maintained and finished in a breathtaking paint shade, this vehicle offers a
                                    perfect blend of performance, luxury, and technology.
                                </p>
                                <p style={{ marginTop: '20px' }}>
                                    Equipped with premium interior materials and state-of-the-art safety features, it provides
                                    an unmatched driving experience on Kenyan roads. Whether you&apos;re navigating Nairobi city
                                    streets or embarking on a long-distance journey, this {vehicle.make} delivers comfort
                                    and reliability at every turn.
                                </p>
                            </div>

                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px', fontFamily: 'Syne, sans-serif' }}>Technical Specifications</h3>
                            <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid var(--stroke)', overflow: 'hidden' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <tbody>
                                        {[
                                            { label: 'Make', value: vehicle.make },
                                            { label: 'Model', value: vehicle.name },
                                            { label: 'Body Type', value: vehicle.id > 13 ? 'Motorcycle' : 'Sedan/SUV' },
                                            { label: 'Engine Capacity', value: vehicle.engine || 'N/A' },
                                            { label: 'Transmission', value: vehicle.transmission || 'Automatic' },
                                            { label: 'Fuel Type', value: vehicle.fuel },
                                            { label: 'Mileage', value: vehicle.mileage },
                                            { label: 'Color', value: vehicle.color || 'N/A' },
                                            { label: 'Seating Capacity', value: `${vehicle.seats} Seats` },
                                            { label: 'Weight', value: vehicle.weight || 'N/A' }
                                        ].map((spec, i) => (
                                            <tr key={i} style={{ borderBottom: i === 9 ? 'none' : '1px solid var(--stroke)' }}>
                                                <td style={{ padding: '20px 30px', fontWeight: 600, color: 'var(--secondary-text)', width: '40%', background: 'rgba(0,0,0,0.02)' }}>{spec.label}</td>
                                                <td style={{ padding: '20px 30px', fontWeight: 700, color: 'var(--primary-text)' }}>{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <aside>
                            <div style={{
                                padding: '40px',
                                background: '#111',
                                color: '#fff',
                                borderRadius: '32px',
                                position: 'sticky',
                                top: '100px',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px', fontFamily: 'Syne, sans-serif' }}>Visit Showroom</h3>
                                <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <MapPin size={22} style={{ color: 'var(--accent)' }} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 700, marginBottom: '4px', fontSize: '1rem' }}>Main Showroom</p>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.5' }}>
                                            Showroom 4, Nairobi Automotive Plaza,<br />
                                            Mombasa Road, Nairobi
                                        </p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Calendar size={22} style={{ color: 'var(--accent)' }} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 700, marginBottom: '4px', fontSize: '1rem' }}>Opening Hours</p>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Mon - Sat: 8 AM - 6 PM</p>
                                    </div>
                                </div>
                                <a
                                    href="https://goo.gl/maps/example"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        background: 'var(--accent)',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        padding: '16px',
                                        borderRadius: '16px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="hover-lift"
                                >
                                    <span>Get Directions</span>
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}
