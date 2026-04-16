import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { blogPosts } from '../../data/blogPosts';

function ArticlePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Find post by id, parse id string to integer
    const post = blogPosts.find(p => p.id === parseInt(id, 10));

    if (!post) {
        return (
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212', color: '#fff' }}>
                <Typography variant="h4" sx={{ fontFamily: 'Montserrat', mb: 3 }}>Article not found.</Typography>
                <Button variant="outlined" onClick={() => navigate('/blog')} sx={{ color: '#fff', borderColor: '#fff' }}>
                    Back to Blog
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#121212', fontFamily: 'Montserrat, sans-serif', color: '#fff', pb: 10 }}>
            {/* Hero Header Area */}
            <Box sx={{ position: 'relative', height: { xs: '400px', md: '500px' }, width: '100%', overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #121212 0%, rgba(18,18,18,0.7) 40%, transparent 100%)' }} />
                <Box sx={{ position: 'absolute', top: 30, left: { xs: 20, md: 40 } }}>
                    <Button 
                        startIcon={<ArrowBackIcon />} 
                        onClick={() => navigate('/blog')}
                        sx={{ color: '#fff', textTransform: 'none', fontFamily: 'Montserrat', fontWeight: 600, backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' } }}
                    >
                        Back to articles
                    </Button>
                </Box>
            </Box>

            {/* Article Content Container */}
            <Box sx={{ maxWidth: '800px', mx: 'auto', px: { xs: 3, md: 4 }, mt: -10, position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'inline-block', p: '6px 16px', backgroundColor: '#8B0000', color: '#fff', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', mb: 2, letterSpacing: '1px' }}>
                    {post.category}
                </Box>
                
                <Typography variant="h1" sx={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 4, color: '#fff', lineHeight: 1.2 }}>
                    {post.title}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, fontSize: '0.9rem', color: '#aaa', alignItems: 'center', flexWrap: 'wrap', mb: 6, borderBottom: '1px solid #333', pb: 3 }}>
                    <span style={{ fontWeight: 600, color: '#fff' }}>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                </Box>

                <Box sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#e0e0e0' }}>
                    {post.content ? (
                        post.content.split('\n').map((paragraph, i) => (
                            <Typography key={i} sx={{ fontFamily: 'Montserrat', fontSize: '1.1rem', lineHeight: 1.8, mb: paragraph.trim() === '' ? 0 : 3, color: '#e0e0e0', whiteSpace: 'pre-wrap' }}>
                                {paragraph}
                            </Typography>
                        ))
                    ) : (
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1.1rem', lineHeight: 1.8, mb: 3, color: '#e0e0e0' }}>
                            {post.excerpt}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default ArticlePage;
