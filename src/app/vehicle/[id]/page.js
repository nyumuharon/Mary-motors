'use client';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ChevronLeft,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

export default function VehicleDetailsPage({ params }) {
    const { id } = use(params);

    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/vehicle/${id}`, { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                setVehicle(data);
                setLoading(false);
            }).catch(err => {
                console.error('Error fetching vehicle', err);
                setLoading(false);
            });
    }, [id]);

    const galleryItems = vehicle ? (vehicle.gallery || [vehicle.img]) : [];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance slideshow
    useEffect(() => {
        if (galleryItems.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1));
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(timer);
    }, [galleryItems.length]);

    if (loading) {
        return (
            <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--primary-text)', marginBottom: '15px' }}>Loading Vehicle Details...</h2>
                <div style={{ width: '40px', height: '40px', border: '4px solid var(--stroke)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }}></div>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    if (!vehicle) {
        return (
            <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
                <h2>Vehicle Not Found</h2>
                <Link href="/all-cars" className="btn-primary" style={{ marginTop: '20px' }}>Back to Inventory</Link>
            </div>
        );
    }

    // CMS-friendly data mapping
    const technicalSpecs = [
        { label: 'Make', value: vehicle?.make || 'N/A' },
        { label: 'Model', value: vehicle?.name || 'N/A' },
        { label: 'Body Type', value: vehicle?.bodyType || 'Sedan/SUV' },
        { label: 'Engine', value: vehicle?.engine || 'N/A' },
        { label: 'Transmission', value: vehicle?.transmission || 'Automatic' },
        { label: 'Fuel Type', value: vehicle?.fuel || 'Petrol' },
        { label: 'Mileage', value: vehicle?.mileage || '0 km' },
        { label: 'Color', value: vehicle?.color || 'Dynamic' },
        { label: 'Seats', value: vehicle?.seats ? `${vehicle.seats} Seats` : 'N/A' },
        { label: 'Weight', value: vehicle?.weight || 'N/A' }
    ];

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
                            {galleryItems.length > 0 ? (
                                <Image
                                    src={galleryItems[currentIndex]}
                                    alt={vehicle?.name || 'Vehicle'}
                                    fill
                                    priority
                                    style={{ objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }}
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Image Available</div>
                            )}
                            {galleryItems.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setCurrentIndex(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1))}
                                        style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', zIndex: 10 }}>
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={() => setCurrentIndex(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1))}
                                        style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', zIndex: 10 }}>
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
                    <div className="vehicle-info" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', paddingRight: '15px' }}>

                        {/* Title & Price */}
                        <div style={{ marginBottom: '20px', flexShrink: 0 }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '10px' }}>
                                <div style={{ flex: '1 1 auto', minWidth: '0' }}>
                                    <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '6px' }}>
                                        {vehicle.badge || 'Available Now'}
                                    </p>
                                    <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--primary-text)', margin: 0, lineHeight: 1.1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {vehicle.make} {vehicle.name}
                                    </h1>
                                </div>
                                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--red)', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                    {vehicle.price}
                                </div>
                            </div>
                        </div>

                        {/* Specifications Table (CMS ready format) */}
                        <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid var(--stroke)', overflow: 'hidden', marginBottom: '25px', flexShrink: 0 }}>
                            <div style={{ padding: '12px 20px', background: 'rgba(0,0,0,0.02)', borderBottom: '1px solid var(--stroke)', fontWeight: 700, fontSize: '0.9rem' }}>
                                Technical Specifications
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                                {technicalSpecs.map((spec, i) => (
                                    <div key={i} style={{
                                        padding: '10px 20px',
                                        borderBottom: i < technicalSpecs.length - 2 ? '1px solid var(--stroke)' : 'none',
                                        borderRight: i % 2 === 0 ? '1px solid var(--stroke)' : 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        gap: '4px'
                                    }}>
                                        <span style={{ fontSize: '0.7rem', color: 'var(--secondary-text)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{spec.label}</span>
                                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={spec.value}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description/Overview */}
                        <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--secondary-text)', marginBottom: '25px', flexShrink: 0 }}>
                            <p>
                                This stunning <strong>{vehicle.make} {vehicle.name}</strong> represents the pinnacle of automotive excellence.
                                Meticulously maintained and finished in a breathtaking paint shade, this vehicle offers a perfect blend of performance, luxury, and technology.
                            </p>
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
