'use client';
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
    ArrowRight
} from 'lucide-react';

export default function VehicleDetailsPage() {
    const params = useParams();
    const id = parseInt(params.id);
    const vehicle = vehicles.find(v => v.id === id);

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
                        <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: '#fff' }}>
                            <Image
                                src={vehicle.img}
                                alt={vehicle.name}
                                width={800}
                                height={600}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>

                        {/* Thumbnails Placeholder */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '15px' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '2px solid var(--accent)' }}>
                                <Image src={vehicle.img} alt="Thumbnail 1" width={200} height={150} />
                            </div>
                            {[1, 2, 3].map(i => (
                                <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', opacity: 0.6 }}>
                                    <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80" alt={`Interior ${i}`} width={200} height={150} />
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

                        {/* Quick Specs Grid */}
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
                                <div style={{ color: 'var(--accent)' }}><Users size={24} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Seating</span>
                                    <strong style={{ fontSize: '1rem' }}>{vehicle.seats} Seats</strong>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '15px', background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)' }}>
                                <div style={{ color: 'var(--accent)' }}><Zap size={24} /></div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase' }}>Condition</span>
                                    <strong style={{ fontSize: '1rem' }}>Certified</strong>
                                </div>
                            </div>
                        </div>

                        {/* Call to Actions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <Link href={`/contact-us?subject=Inquiry: ${vehicle.make} ${vehicle.name}`} className="btn-primary" style={{ textAlign: 'center', padding: '18px', fontSize: '1.1rem' }}>
                                Enquire Now
                            </Link>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button className="btn-outline" style={{ flex: 1, padding: '14px' }}>Book a Test Drive</button>
                                <button className="btn-outline" style={{ flex: 1, padding: '14px' }}>Download Brochure</button>
                            </div>
                        </div>

                        {/* Assurance */}
                        <div style={{ marginTop: '30px', display: 'flex', gap: '15px', padding: '20px', borderRadius: '16px', background: 'rgba(231, 76, 60, 0.05)', border: '1px dashed var(--accent)' }}>
                            <ShieldCheck style={{ color: 'var(--accent)' }} />
                            <p style={{ fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
                                <strong>Mary Motors Guarantee:</strong> This vehicle has undergone a rigorous 150-point inspection and comes with a 6-month limited warranty.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Description & More Details */}
                <div style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid var(--stroke)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px' }}>Vehicle Overview</h2>
                            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--secondary-text)' }}>
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
                        </div>
                        <aside>
                            <div style={{ padding: '30px', background: 'var(--dark)', color: '#fff', borderRadius: '24px' }}>
                                <h3 style={{ marginBottom: '20px' }}>Visit Showroom</h3>
                                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                                    <MapPin size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Showroom 4, Nairobi Automotive Plaza, Mombasa Road</span>
                                </div>
                                <Link href="/contact-us" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontWeight: 700 }}>
                                    <span>Get Directions</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}
