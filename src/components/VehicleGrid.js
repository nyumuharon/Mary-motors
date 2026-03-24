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
            fetch('/api/vehicles', { cache: 'no-store' })
                .then(res => res.json())
                .then(data => {
                    setFetchedVehicles(data || []);
                    setLoading(false);
                }).catch(err => {
                    console.error("Fetch error:", err);
                    setLoading(false);
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
                                className="group-hover:scale-105 transition-transform duration-700"
                            />
                            <span className="car-badge">{v.badge}</span>
                        </div>
                        <div className="car-body bg-gradient-to-b from-transparent to-black/20">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold">{v.make}</p>
                            <h3 className="mt-1 text-2xl font-serif text-white">{v.name}</h3>
                            <div className="car-specs border-t border-white/10 pt-4 mt-4">
                                <span className="car-spec flex items-center gap-2 text-zinc-400">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2"><path d="M3 10h12M3 14h12M19 10v4M15 10l4 4M15 14l4-4" /></svg>
                                    {v.fuel}
                                </span>
                                <span className="car-spec flex items-center gap-2 text-zinc-400">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    {v.mileage}
                                </span>
                            </div>
                            <div className="car-footer flex justify-between items-center mt-6">
                                <div className="car-price font-mono text-zinc-200"><span>KES </span>{v.price.replace('KES ', '')}</div>
                                <div className="car-actions flex gap-2">
                                    <Link href={`/vehicle/${v.id}`} className="px-4 py-2 text-xs font-bold bg-white text-black hover:bg-orange-500 hover:text-white transition-colors duration-300">DETAILS</Link>
                                    <a
                                        href={`https://wa.me/254702864025?text=${encodeURIComponent(`Hi Mary Motors, I'm interested in the ${v.make} ${v.name} priced at ${v.price}.`)}`}
                                        className="p-2 bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-colors duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Contact via WhatsApp"
                                    >
                                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
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
