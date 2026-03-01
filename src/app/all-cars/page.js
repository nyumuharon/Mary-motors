import VehicleGrid from '@/components/VehicleGrid';
import Link from 'next/link';

export const metadata = { title: 'All Cars – Mary Motors' };

export default function AllCarsPage() {
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
                            <label style={{ display: 'block', marginBottom: '8px' }}><input type="checkbox" defaultChecked /> All Vehicles</label>
                            <label style={{ display: 'block', marginBottom: '8px' }}><input type="checkbox" /> New Cars</label>
                            <label style={{ display: 'block', marginBottom: '8px' }}><input type="checkbox" /> Used Cars</label>
                            <label style={{ display: 'block', marginBottom: '8px' }}><input type="checkbox" /> Pre-Order</label>
                        </div>

                        <div className="filter-group" style={{ marginBottom: '25px' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: '#555' }}>Make</h4>
                            <select style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                                <option>All Makes</option>
                                <option>Toyota</option><option>BMW</option><option>Mercedes-Benz</option>
                                <option>Audi</option><option>Ford</option>
                            </select>
                        </div>

                        <div className="filter-group" style={{ marginBottom: '25px' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: '#555' }}>Price Range</h4>
                            <input type="range" min="10000" max="3000000" style={{ width: '100%', marginBottom: '10px' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#777' }}>
                                <span>$1,300</span><span>$3,000,000+</span>
                            </div>
                        </div>

                        <button className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '12px' }}>Apply Filters</button>
                    </aside>

                    {/* Main Grid */}
                    <div className="main-content" style={{ width: '75%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <p style={{ color: '#666' }}>Showing all vehicles</p>
                            <select style={{ padding: '8px 15px', border: '1px solid #ddd', borderRadius: '5px' }}>
                                <option>Sort By: Default</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                            </select>
                        </div>

                        <VehicleGrid showFilterTabs={false} />

                        <div className="pagination" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '10px' }}>
                            <button style={{ width: '40px', height: '40px', border: '1px solid #ddd', background: 'white', borderRadius: '5px', cursor: 'pointer' }}>&laquo;</button>
                            <button style={{ width: '40px', height: '40px', border: 'none', background: '#c0392b', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>1</button>
                            <button style={{ width: '40px', height: '40px', border: '1px solid #ddd', background: 'white', borderRadius: '5px', cursor: 'pointer' }}>2</button>
                            <button style={{ width: '40px', height: '40px', border: '1px solid #ddd', background: 'white', borderRadius: '5px', cursor: 'pointer' }}>3</button>
                            <button style={{ width: '40px', height: '40px', border: '1px solid #ddd', background: 'white', borderRadius: '5px', cursor: 'pointer' }}>&raquo;</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
