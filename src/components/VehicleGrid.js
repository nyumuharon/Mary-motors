'use client';
import { useState } from 'react';
import Image from 'next/image';
import { vehicles } from '@/lib/vehicles';

const FILTERS = [
    { label: 'All', value: 'all' },
    { label: 'New', value: 'new' },
    { label: 'Used', value: 'used' },
    { label: 'Pre-Order', value: 'preorder' },
];

export default function VehicleGrid({ showFilterTabs = true, limit = null, customVehicles = null }) {
    const [activeFilter, setActiveFilter] = useState('all');

    // Use custom dataset if provided, else use all vehicles
    const sourceVehicles = customVehicles || vehicles;

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
                                <span className="car-spec">{v.fuel}</span>
                                <span className="car-spec">{v.mileage}</span>
                                <span className="car-spec">{v.seats} seats</span>
                            </div>
                            <div className="car-footer">
                                <div className="car-price">{v.price}<span> / unit</span></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
