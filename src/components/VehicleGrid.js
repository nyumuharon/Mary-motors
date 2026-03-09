'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FILTERS = [
    { label: 'All', value: 'all' },
    { label: 'New', value: 'new' },
    { label: 'Used', value: 'used' },
];

export default function VehicleGrid({ showFilterTabs = true, limit = null, customVehicles = null }) {
    const [activeFilter, setActiveFilter] = useState('all');
    const [fetchedVehicles, setFetchedVehicles] = useState([]);
    const [loading, setLoading] = useState(!customVehicles);

    useEffect(() => {
        if (!customVehicles) {
            import('@/sanity/client').then(({ getVehicles }) => {
                getVehicles().then(data => {
                    setFetchedVehicles(data || []);
                    setLoading(false);
                }).catch(err => {
                    console.error(err);
                    setLoading(false);
                });
            });
        }
    }, [customVehicles]);

    const sourceVehicles = customVehicles || fetchedVehicles;

    if (loading) {
        return (
            <div style={{ padding: '50px 0', textAlign: 'center' }}>
                <div style={{ width: '30px', height: '30px', border: '3px solid var(--stroke)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }}></div>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    const filtered = activeFilter === 'all'
        ? sourceVehicles
        : sourceVehicles.filter(v => v.type === activeFilter);

    const displayed = limit ? filtered.slice(0, limit) : filtered;

    return (
        <>
            {showFilterTabs && (
                <div className="filter-tabs" id="filter-tabs">
                    {FILTERS.map(f => (
                        <button
                            key={f.value}
                            className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f.value)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            )}

            <div className="vehicles-grid" id="vehicles-grid">
                {displayed.map(v => (
                    <div key={v.id} className="car-card" data-type={v.type}>
                        <div className="car-img-wrap">
                            <Image
                                src={v.img}
                                alt={`${v.make} ${v.name}`}
                                loading="lazy"
                                width={600}
                                height={400}
                            />
                            <span className="car-badge">{v.badge}</span>
                        </div>
                        <div className="car-body">
                            <p className="car-make">{v.make}</p>
                            <h3 className="car-name">{v.name}</h3>
                            <div className="car-specs">
                                <span className="car-spec">
                                    <svg viewBox="0 0 24 24"><path d="M3 10h12M3 14h12M19 10v4M15 10l4 4M15 14l4-4" /></svg>
                                    {v.fuel}
                                </span>
                                <span className="car-spec">
                                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    {v.mileage}
                                </span>
                                <span className="car-spec">
                                    <svg viewBox="0 0 24 24"><path d="M4 14h16v4H4zM8 10h8v4H8z" /></svg>
                                    {v.seats} seats
                                </span>
                            </div>
                            <div className="car-footer">
                                <div className="car-price"><span>KES </span>{v.price.replace('KES ', '')}</div>
                                <div className="car-actions">
                                    <Link href={`/vehicle/${v.id}`} className="btn-primary">VIEW DETAILS</Link>
                                    <a
                                        href={`https://wa.me/254702864025?text=${encodeURIComponent(`Hi Mary Motors, I'm interested in the ${v.make} ${v.name} priced at ${v.price}.`)}`}
                                        className="btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        CONTACT
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
