import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const blogPosts = [
  {
    id: 1,
    title: 'Sri Lanka Takes Bronze at WSDC 2026',
    excerpt: 'Historic achievement as our national team secures third place at the World Schools Debating Championship.',
    category: 'Achievements',
    author: 'Debaters Council',
    date: '2026-03-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Announcing the 2026 National Pool',
    excerpt: 'Meet the 15 exceptional debaters selected for intensive training this year.',
    category: 'Announcements',
    author: 'Selection Committee',
    date: '2026-02-20',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=500&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Debate Workshop Series: April Schedule',
    excerpt: 'Comprehensive workshops on case construction, rebuttal, and POI strategies.',
    category: 'Events',
    author: 'Coaching Team',
    date: '2026-03-28',
    readTime: '2 min',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=500&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'Understanding the Asian Schools Format',
    excerpt: 'Complete guide to ASDC format and how it differs from WSDC.',
    category: 'Education',
    author: 'Shalem Sumanthiran',
    date: '2026-03-10',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
    featured: false,
  },
  {
    id: 5,
    title: 'Tournament Calendar: Q2 2026 Update',
    excerpt: 'Updated schedule of endorsed tournaments with registration deadlines.',
    category: 'Tournaments',
    author: 'Tournament Coordination',
    date: '2026-03-05',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=500&fit=crop',
    featured: false,
  },
];

function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Achievements', 'Announcements', 'Tournaments'];
    const featuredPost = blogPosts.find(p => p.featured);
    const recentPosts = blogPosts.filter(p => !p.featured).slice(0, 5);

    const filteredPosts = selectedCategory === 'All' 
      ? blogPosts 
      : blogPosts.filter(p => p.category === selectedCategory);

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#121212', fontFamily: 'Montserrat, sans-serif', color: '#fff', pb: 10 }}>
           {/* Hero Featured Post */}
           <Box sx={{ position: 'relative', height: { xs: '500px', md: '600px' }, width: '100%', overflow: 'hidden' }}>
               <img src={featuredPost.image} alt={featuredPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #121212 0%, rgba(18,18,18,0.7) 40%, transparent 100%)' }} />
               <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 3, md: 6 }, maxWidth: '1300px', mx: 'auto' }}>
                   <Box sx={{ display: 'inline-block', p: '6px 16px', backgroundColor: '#8B0000', color: '#fff', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', mb: 2, letterSpacing: '1px' }}>
                       {featuredPost.category}
                   </Box>
                   <Typography variant="h2" sx={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: { xs: '2rem', md: '3.5rem' }, mb: 2, color: '#fff' }}>
                       {featuredPost.title}
                   </Typography>
                   <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '1rem', md: '1.25rem' }, color: '#e0e0e0', mb: 3, maxWidth: '800px' }}>
                       {featuredPost.excerpt}
                   </Typography>
                   <Box sx={{ display: 'flex', gap: 2, fontSize: '0.9rem', color: '#aaa', alignItems: 'center', flexWrap: 'wrap' }}>
                       <span style={{ fontWeight: 600, color: '#fff' }}>{featuredPost.author}</span>
                       <span>•</span>
                       <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                       <span>•</span>
                       <span>{featuredPost.readTime} read</span>
                   </Box>
               </Box>
           </Box>

           {/* Main Content Area */}
           <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, maxWidth: '1300px', mx: 'auto', p: { xs: 3, md: 4 } }}>
               {/* Sidebar */}
               <Box sx={{ width: { xs: '100%', md: '300px' }, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                   {/* Categories */}
                   <Box>
                       <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', mb: 2, pb: 1, borderBottom: '1px solid #333' }}>
                           Categories
                       </Typography>
                       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                           {categories.map(cat => (
                               <Box key={cat} onClick={() => setSelectedCategory(cat)} sx={{ display: 'flex', justifyContent: 'space-between', p: '10px 16px', cursor: 'pointer', borderRadius: '4px', backgroundColor: selectedCategory === cat ? '#8B0000' : 'transparent', '&:hover': { backgroundColor: selectedCategory === cat ? '#8B0000' : 'rgba(255,255,255,0.05)' }, transition: 'all 0.2s' }}>
                                   <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.95rem', fontWeight: selectedCategory === cat ? 700 : 500 }}>{cat}</Typography>
                               </Box>
                           ))}
                       </Box>
                   </Box>

                   {/* Recent Posts */}
                   <Box>
                       <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', mb: 2, pb: 1, borderBottom: '1px solid #333' }}>
                           Recent Posts
                       </Typography>
                       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                           {recentPosts.map(post => (
                               <Box key={post.id} sx={{ display: 'flex', gap: 2, cursor: 'pointer', '&:hover .recent-title': { color: '#dc2626' } }}>
                                   <Box sx={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '6px', overflow: 'hidden' }}>
                                       <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                   </Box>
                                   <Box>
                                       <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#dc2626', mb: 0.5 }}>{post.category}</Typography>
                                       <Typography className="recent-title" sx={{ fontFamily: 'Montserrat', fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.3, mb: 0.5, transition: 'color 0.2s' }}>{post.title}</Typography>
                                       <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.8rem', color: '#888' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</Typography>
                                   </Box>
                               </Box>
                           ))}
                       </Box>
                   </Box>

               </Box>

               {/* Articles Grid */}
               <Box sx={{ flexGrow: 1 }}>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid #333', pb: 2, mb: 4 }}>
                       <Typography variant="h4" sx={{ fontFamily: 'Montserrat', fontWeight: 800, textTransform: 'uppercase' }}>
                           {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
                       </Typography>
                       <Typography sx={{ fontFamily: 'Montserrat', color: '#888', fontSize: '0.9rem' }}>
                           {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                       </Typography>
                   </Box>

                   <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fill, minmax(320px, 1fr))' }, gap: 4 }}>
                       {filteredPosts.map(post => (
                           <Box key={post.id} sx={{ cursor: 'pointer', '&:hover img': { transform: 'scale(1.05)' }, '&:hover .article-title': { color: '#dc2626' } }}>
                               <Box sx={{ width: '100%', aspectRatio: '16/10', borderRadius: '8px', overflow: 'hidden', mb: 2 }}>
                                   <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                               </Box>
                               <Box>
                                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                       <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#dc2626' }}>{post.category}</Typography>
                                       <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.8rem', color: '#888' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</Typography>
                                   </Box>
                                   <Typography className="article-title" sx={{ fontFamily: 'Montserrat', fontSize: '1.25rem', fontWeight: 700, mb: 1.5, transition: 'color 0.2s', lineHeight: 1.3 }}>
                                       {post.title}
                                   </Typography>
                                   <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.95rem', color: '#aaa', mb: 2, lineHeight: 1.6 }}>
                                       {post.excerpt}
                                   </Typography>
                                   <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #333', pt: 1.5 }}>
                                       <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.85rem', fontWeight: 600 }}>{post.author}</Typography>
                                       <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.85rem', color: '#888' }}>{post.readTime}</Typography>
                                   </Box>
                               </Box>
                           </Box>
                       ))}
                   </Box>
               </Box>
           </Box>
        </Box>
    );
}

export default BlogPage;
