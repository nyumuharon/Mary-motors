import Link from 'next/link';

export const metadata = { title: 'Automotive Blog – Mary Motors' };

const articles = [
    { img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80', tag: 'Buying Tips', title: 'Top 5 Things to Check Before Buying a Used Car', desc: 'Learn what experts look for when inspecting a pre-owned vehicle to ensure you get the best value for your money.' },
    { img: 'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=600&q=80', tag: 'Industry News', title: '2025 Automotive Trends: What\'s Shaping the Future', desc: 'From electric vehicles to AI-powered safety features, discover what innovations are transforming the automotive world.' },
    { img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&q=80', tag: 'Maintenance', title: 'How to Extend Your Car\'s Lifespan by 50,000 Miles', desc: 'Simple maintenance habits that the pros use to keep their vehicles running at peak performance for years longer.' },
    { img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600&q=80', tag: 'Reviews', title: '2025 Sports Car Showdown: Speed Meets Luxury', desc: 'We put the top 5 sports cars under $100k head-to-head on the track to see which one delivers the ultimate driving experience.' },
    { img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80', tag: 'Finance', title: 'Leasing vs. Buying: Which is Right for You?', desc: 'A comprehensive breakdown of the financial pros and cons to help you make the best decision for your budget.' },
    { img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80', tag: 'Lifestyle', title: 'The Ultimate Highway Road Trip Guide', desc: 'Plan your next adventure with our curated list of scenic routes, essential gear, and tips for a comfortable journey.' },
];

export default function BlogsPage() {
    return (
        <>
            <div className="page-header"
                style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80') center/cover", padding: '100px 0', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Automotive Blog</h1>
                    <p style={{ fontSize: '1.1rem', color: '#eee' }}>
                        <Link href="/" style={{ color: '#fff', textDecoration: 'underline' }}>Home</Link>
                        &nbsp;/&nbsp;Blogs
                    </p>
                </div>
            </div>

            <section className="blogs-page" style={{ padding: '80px 0' }}>
                <div className="container">
                    {/* Featured Post */}
                    <div className="featured-blog"
                        style={{ display: 'flex', gap: '40px', marginBottom: '80px', alignItems: 'center', background: '#fff', borderRadius: '15px', boxShadow: '0 5px 30px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                        <div style={{ flex: 1 }}>
                            <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80" alt="Featured Post"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px', display: 'block' }} />
                        </div>
                        <div style={{ flex: 1, padding: '40px' }}>
                            <span className="blog-tag">TECHNOLOGY</span>
                            <h2 style={{ fontSize: '2.2rem', margin: '15px 0 20px' }}>The Future of EV Batteries: What You Need to Know</h2>
                            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '25px', lineHeight: 1.6 }}>Electric vehicle technology is advancing at an unprecedented pace. From solid-state batteries to extreme fast charging, discover the innovations that will transform how we drive in the next five years.</p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <img src="https://i.pravatar.cc/100?img=11" alt="Michael Johnson" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                    <div>
                                        <p style={{ fontWeight: 600, margin: 0 }}>Michael Johnson</p>
                                        <p style={{ color: '#999', fontSize: '0.9rem', margin: 0 }}>Oct 12, 2025 • 8 min read</p>
                                    </div>
                                </div>
                                <a href="#" className="btn-primary" style={{ padding: '10px 20px' }}>Read Article</a>
                            </div>
                        </div>
                    </div>

                    <div className="section-header" style={{ textAlign: 'left', marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '1.8rem' }}>Latest Articles</h3>
                    </div>

                    <div className="blogs-grid">
                        {articles.map((post, i) => (
                            <article key={i} className="blog-card">
                                <div className="blog-img"><img src={post.img} alt={post.title} loading="lazy" /></div>
                                <div className="blog-body">
                                    <span className="blog-tag">{post.tag}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.desc}</p>
                                    <a href="#" className="blog-link">Read More →</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
