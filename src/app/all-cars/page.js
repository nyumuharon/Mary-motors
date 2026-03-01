'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import VehicleGrid from '@/components/VehicleGrid';
import Link from 'next/link';
import { vehicles } from '@/lib/vehicles';
import { useSearchParams } from 'next/navigation';

function AllCarsContent() {
    const searchParams = useSearchParams();
    const filterParam = searchParams.get('filter');

    // Filter States
    const [condition, setCondition] = useState({
        all: !filterParam || filterParam === 'all',
        new: filterParam === 'new',
        used: filterParam === 'used',
        preorder: filterParam === 'preorder'
    });
    const [make, setMake] = useState('All Makes');
    const [priceRange, setPriceRange] = useState(3000000); // Default to max
    const [sort, setSort] = useState('Default');

    // Sync state if URL changes
    useEffect(() => {
        if (filterParam) {
            setCondition({
                all: filterParam === 'all',
                new: filterParam === 'new',
                used: filterParam === 'used',
                preorder: filterParam === 'preorder'
            });
        }
    }, [filterParam]);

    // Handle Checkboxes
    const handleConditionChange = (type) => {
        if (type === 'all') {
            setCondition({ all: true, new: false, used: false, preorder: false });
        } else {
            setCondition(prev => {
                const updated = { ...prev, [type]: !prev[type], all: false };
                if (!updated.new && !updated.used && !updated.preorder) updated.all = true;
                return updated;
            });
        }
    };

    // Derived Data
    const filteredVehicles = useMemo(() => {
        let result = vehicles;

        // Condition Filter
        if (!condition.all) {
            result = result.filter(v => condition[v.type]);
        }

        // Make Filter
        if (make !== 'All Makes') {
            result = result.filter(v => v.make === make);
        }

        // Price Filter (Extract number from "$85,000")
        result = result.filter(v => {
            const numPrice = parseInt(v.price.replace(/[^0-9]/g, ''), 10);
            return numPrice <= priceRange;
        });

        // Sorting
        if (sort === 'Price: Low to High') {
            result = [...result].sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
        } else if (sort === 'Price: High to Low') {
            result = [...result].sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
        } else if (sort === 'Newest First') {
            // Simulated by reversing ID for newest
            result = [...result].sort((a, b) => b.id - a.id);
        }

        return result;
    }, [condition, make, priceRange, sort]);

    // Derived unique makes for dropdown
    const allMakes = ['All Makes', ...new Set(vehicles.map(v => v.make))];

    return (
        <>
            <div className="page-header"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80') center/cover", padding: '100px 0', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Our Vehicles</h1>
                    <p style={{ fontSize: '1.1rem', color: '#eee' }}>
                        <Link href="/" style={{ color: '#fff', textDecoration: 'underline' }}>Home</Link>
                        &nbsp;/&nbsp;All Cars
                    </p>
                </div>
            </div>

            <section className="vehicles-page" style={{ padding: '80px 0', background: '#f9f9f9' }}>
                <div className="container" style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>

                    {/* Sidebar Filters */}
                    <aside className="sidebar"
                        style={{ width: '25%', background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', position: 'sticky', top: '100px' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>Filter By</h3>

                        <div className="filter-group" style={{ marginBottom: '25px' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: '#555' }}>Condition</h4>
                            <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
                                <input type="checkbox" checked={condition.all} onChange={() => handleConditionChange('all')} style={{ marginRight: '8px' }} /> All Vehicles
                            </label>
                            <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
                                <input type="checkbox" checked={condition.new} onChange={() => handleConditionChange('new')} style={{ marginRight: '8px' }} /> New Cars
                            </label>
                            <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
                                <input type="checkbox" checked={condition.used} onChange={() => handleConditionChange('used')} style={{ marginRight: '8px' }} /> Used Cars
                            </label>
                            <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
                                <input type="checkbox" checked={condition.preorder} onChange={() => handleConditionChange('preorder')} style={{ marginRight: '8px' }} /> Pre-Order
                            </label>
                        </div>

                        <div className="filter-group" style={{ marginBottom: '25px' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: '#555' }}>Make</h4>
                            <select value={make} onChange={(e) => setMake(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                                {allMakes.map(m => <option key={m} value={m}>{m}</option>)}
                            </select>
                        </div>

                        <div className="filter-group" style={{ marginBottom: '25px' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: '#555' }}>Price Range (Max: ${priceRange.toLocaleString()})</h4>
                            <input type="range" min="1000" max="3000000" step="5000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} style={{ width: '100%', marginBottom: '10px' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#777' }}>
                                <span>$1,000</span><span>$3,000,000+</span>
                            </div>
                        </div>
                    </aside>

                    {/* Main Grid */}
                    <div className="main-content" style={{ width: '75%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <p style={{ color: '#666' }}>Showing {filteredVehicles.length} vehicles</p>
                            <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: '8px 15px', border: '1px solid #ddd', borderRadius: '5px' }}>
                                <option>Sort By: Default</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                            </select>
                        </div>

                        {filteredVehicles.length > 0 ? (
                            <VehicleGrid showFilterTabs={false} customVehicles={filteredVehicles} />
                        ) : (
                            <div style={{ padding: '60px', textAlign: 'center', background: 'white', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '10px' }}>No vehicles found</h3>
                                <p style={{ color: '#666' }}>Try adjusting your filters to see more results.</p>
                                <button onClick={() => { setCondition({ all: true, new: false, used: false, preorder: false }); setMake('All Makes'); setPriceRange(3000000); }} className="btn-primary" style={{ marginTop: '20px' }}>Reset Filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default function AllCarsPage() {
    return (
        <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading vehicles...</div>}>
            <AllCarsContent />
        </Suspense>
    );
}
