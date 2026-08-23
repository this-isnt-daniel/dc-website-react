import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { FaYoutube } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import styles from '../styles/infoStyles';
import { videos, VIDEO_CATEGORIES } from '../data/videos';

const YOUTUBE_CHANNEL = 'https://youtube.com/@debaterscouncil-srilanka6367?si=3U62AWSq7-PzVGG-';

const FILTERS = ['All', ...VIDEO_CATEGORIES];

// Values still shaped like "[Speaker name]" are unfilled placeholders from the data
// file — treat them as absent so no scaffolding text reaches the page.
const isFilled = value => {
    if (typeof value !== 'string') return false;
    const trimmed = value.trim();
    return trimmed !== '' && !(trimmed.startsWith('[') && trimmed.endsWith(']'));
};

// An entry with a placeholder id would render a broken thumbnail, so it is skipped
// entirely until a real video ID is filled in.
const hasRealId = video => isFilled(video.id);

const formatDate = value => {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return '';
    return parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
};

const VideosPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    // Only one player is mounted at a time — holding an id rather than a flag per card
    // keeps N YouTube iframes from loading at once.
    const [playingId, setPlayingId] = useState(null);

    const publishedVideos = useMemo(
        () => videos
            .filter(hasRealId)
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date)),
        []
    );

    const visibleVideos = useMemo(
        () => activeFilter === 'All'
            ? publishedVideos
            : publishedVideos.filter(v => v.category === activeFilter),
        [publishedVideos, activeFilter]
    );

    return (
        <Box sx={styles.container}>
            <PageHero
                title="Videos & Lectures"
                subtitle="Workshop recordings and motion debriefs from the Debaters' Council"
            />

            <Box sx={{ maxWidth: '1300px', mx: 'auto', p: { xs: 3, md: 4 } }}>

                {/* Filter pills */}
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.5,
                    pb: 3,
                    mb: 4,
                    borderBottom: '2px solid #333'
                }}>
                    {FILTERS.map(filter => {
                        const isActive = activeFilter === filter;
                        return (
                            <Box
                                component="button"
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                sx={{
                                    p: '10px 16px',
                                    borderRadius: '4px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: 'Montserrat',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: '#fff',
                                    backgroundColor: isActive ? '#8B0000' : 'transparent',
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        backgroundColor: isActive ? '#8B0000' : 'rgba(255,255,255,0.05)'
                                    }
                                }}
                            >
                                {filter === 'All' ? 'All' : `${filter}s`}
                            </Box>
                        );
                    })}
                </Box>

                {visibleVideos.length === 0 ? (
                    <Box sx={{ textAlign: 'center', py: 10 }}>
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: '#fff', mb: 1 }}>
                            {publishedVideos.length === 0 ? 'No videos published yet' : `No ${activeFilter.toLowerCase()}s yet`}
                        </Typography>
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.95rem', color: '#888' }}>
                            New workshop recordings and motion debriefs land on our YouTube channel first.
                        </Typography>
                    </Box>
                ) : (
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fill, minmax(320px, 1fr))' },
                        gap: 4
                    }}>
                        {visibleVideos.map(video => {
                            const isPlaying = playingId === video.id;
                            return (
                                <Box
                                    key={video.id}
                                    sx={{
                                        '&:hover img': { transform: isPlaying ? 'none' : 'scale(1.05)' },
                                        '&:hover .video-title': { color: '#dc2626' }
                                    }}
                                >
                                    <Box sx={{
                                        position: 'relative',
                                        width: '100%',
                                        aspectRatio: '16/9',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        mb: 2,
                                        backgroundColor: '#000',
                                        cursor: isPlaying ? 'default' : 'pointer'
                                    }}>
                                        {isPlaying ? (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                                title={video.title}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 'none', display: 'block' }}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <Box
                                                component="button"
                                                onClick={() => setPlayingId(video.id)}
                                                aria-label={`Play ${video.title}`}
                                                sx={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    p: 0,
                                                    border: 'none',
                                                    background: 'none',
                                                    cursor: 'pointer',
                                                    display: 'block',
                                                    '&:hover .play-badge': { backgroundColor: '#8B0000', transform: 'translate(-50%, -50%) scale(1.1)' }
                                                }}
                                            >
                                                <img
                                                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                                                    alt=""
                                                    loading="lazy"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        display: 'block',
                                                        transition: 'transform 0.4s ease'
                                                    }}
                                                />
                                                <Box className="play-badge" sx={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    width: 64,
                                                    height: 64,
                                                    borderRadius: '50%',
                                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                                    border: '1px solid rgba(255,255,255,0.2)',
                                                    backdropFilter: 'blur(10px)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                                }}>
                                                    <PlayArrowIcon sx={{ color: '#fff', fontSize: '2.25rem' }} />
                                                </Box>
                                            </Box>
                                        )}
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                                        <Typography component="span" sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            color: '#dc2626',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {video.category}
                                        </Typography>
                                        {formatDate(video.date) && (
                                            <Typography component="span" sx={{ fontFamily: 'Montserrat', fontSize: '0.8rem', color: '#888' }}>
                                                {formatDate(video.date)}
                                            </Typography>
                                        )}
                                    </Box>

                                    <Typography className="video-title" sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        color: '#fff',
                                        lineHeight: 1.3,
                                        mb: 1,
                                        transition: 'color 0.2s'
                                    }}>
                                        {video.title}
                                    </Typography>

                                    {isFilled(video.description) && (
                                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.95rem', color: '#aaa', lineHeight: 1.6 }}>
                                            {video.description}
                                        </Typography>
                                    )}

                                    {isFilled(video.speaker) && (
                                        <Typography sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: '#e0e0e0',
                                            borderTop: '1px solid #333',
                                            pt: 1.5,
                                            mt: 1.5
                                        }}>
                                            {video.speaker}
                                        </Typography>
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                )}

                {/* Channel CTA */}
                <Box sx={{
                    mt: 8,
                    p: { xs: 3, md: 4 },
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '12px',
                    textAlign: 'center'
                }}>
                    <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800, color: '#fff', mb: 1 }}>
                        Never miss a debrief
                    </Typography>
                    <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.95rem', color: '#aaa', mb: 3, maxWidth: '540px', mx: 'auto' }}>
                        We post motion debriefs regularly and upload every workshop recording. Subscribe to catch them as they go up.
                    </Typography>
                    <Box
                        component="a"
                        href={YOUTUBE_CHANNEL}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1.5,
                            p: '0.875rem 1.75rem',
                            background: '#8B0000',
                            color: '#fff',
                            borderRadius: '8px',
                            fontFamily: 'Montserrat',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            transition: 'background 0.2s',
                            '&:hover': { background: '#a10000' }
                        }}
                    >
                        <FaYoutube size={20} />
                        Subscribe on YouTube
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default VideosPage;
