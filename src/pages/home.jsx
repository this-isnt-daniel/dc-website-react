import React from 'react';
import AutoCarousel from '../components/AutoCarousel';
import boardPic from '../assets/board.png';

// Placeholder images for the carousel
const carouselImages = [
    'https://placehold.co/600x400/1a1a1a/ffffff?text=Debate+1',
    'https://placehold.co/600x400/2a2a2a/ffffff?text=Debate+2',
    'https://placehold.co/600x400/3a3a3a/ffffff?text=Tournament',
    'https://placehold.co/600x400/4a4a4a/ffffff?text=Awards',
    'https://placehold.co/600x400/5a5a5a/ffffff?text=Team',
];
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomePage() {
    return (
        // We wrap both sections in a React Fragment
        <>
            {/* === SECTION 1: HERO === */}
            <Box
                component="section"
                className="home-hero-section"
            >
                {/* Content Wrapper */}
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    {/* Text Box */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            width: '100%',
                        }}
                    >
                        <Typography
                            component="h1"
                            sx={{
                                lineHeight: { xs: 1.3, md: '85px' },
                                fontFamily: 'var(--font-family-display)',
                                fontWeight: 900,
                                fontSize: { xs: '3rem', md: '5rem' },
                                letterSpacing: '1.1px',
                                color: 'var(--color-hero-text-faded)',
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            SRI LANKA'S<br />
                            APEX BODY OF<br />
                            SCHOOL &<br />
                            UNIVERSITY<br />
                            LEVEL DEBATING
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* === SECTION 2: ABOUT US === */}
            {/* === SECTION 2.1: ABOUT US (TEXT) === */}
            <Box component="section" className="home-section section-dark">
                <Typography component="h2" className="section-title">
                    ABOUT US
                </Typography>
                <Typography className="section-text">
                    THE DEBATERS' COUNCIL OF SRI LANKA SERVES AS A <span className="highlight-bold">NATIONAL LEVEL BODY THAT OVERSEES ENGLISH DEBATING IN SRI LANKA</span> AT A SECONDARY AND TERTIARY LEVEL.
                </Typography>
                <Typography className="section-text">
                    IT WAS ESTABLISHED IN 2006 AS A SOCIETY BY THE DEBATING COMMUNITY, LED BY <span className="highlight-bold">NISHANTHA DE SILVA</span> AND REGISTERED AS A COMPANY LIMITED UNDER GUARANTEE IN <span className="highlight-bold">2009</span>.
                </Typography>
            </Box>

            {/* === SECTION 2.2: ABOUT US (IMAGE) === */}
            <Box component="section" className="home-section section-dark">
                <Typography component="h2" className="section-title">
                    THE BOARD
                </Typography>
                <Box
                    component="img"
                    src={boardPic}
                    alt="The Board"
                    sx={{
                        width: 'auto',
                        maxWidth: '100%',
                        maxHeight: '55vh',
                        objectFit: 'contain',
                        display: 'block',
                        margin: '20px auto 20px',
                    }}
                />
                <Typography className="about-caption">
                    (LEFT TO RIGHT): SHRUTHIKA PRATHAPAN, JAYAGEETH BASNAYAKE, NAVIDI PERERA, DANIEL VICTOR (PRESIDENT), SHAKEEB MOHIDEEN (TREASURER), GAVIN SENARATNE (SECRETARY), SANITHMA JAYASOORIYA.
                </Typography>
            </Box>

            {/* === SECTION 3: VISION & MISSION === */}
            <Box component="section" className="home-section section-gradient">
                <Box className="vision-mission-container">
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography component="h2" className="section-title">
                            VISION
                        </Typography>
                        <Typography className="section-text">
                            [VISION CONTENT PLACEHOLDER]
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography component="h2" className="section-title">
                            MISSION
                        </Typography>
                        <Typography className="section-text">
                            [MISSION CONTENT PLACEHOLDER]
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* === SECTION 4: GALLERY (AUTO CAROUSEL) === */}
            <Box component="section" className="home-section section-dark">
                <Typography component="h3" sx={{ color: '#666', mb: 2, textAlign: 'center', fontSize: '0.9rem', letterSpacing: '2px' }}>
                    HIGHLIGHTS
                </Typography>
                <AutoCarousel images={carouselImages} />
            </Box>

            {/* === SECTION 5: WHAT WE DO === */}
            <Box component="section" className="home-section section-gradient">
                <Typography component="h2" className="section-title">
                    WHAT WE DO
                </Typography>
                <Typography className="section-text">
                    <span className="highlight-bold">THE DEBATERS' COUNCIL</span> COORDINATES TOURNAMENTS AND PROVIDES SUPPORT TO SCHOOLS AND OTHER TOURNAMENT ORGANISERS TO MAINTAIN AN INTERNATIONAL STANDARD OF DEBATING WITHIN THE LOCAL CIRCUIT.
                </Typography>
                <Typography className="section-text">
                    WE ALSO TRAIN A SELECTED GROUP OF TOP SCHOOL DEBATERS AS A PART OF THE <span className="highlight-bold">NATIONAL POOL OF DEBATERS</span> OUT OF WHICH THE TEAM REPRESENTING SRI LANKA AT THE <span className="highlight-bold">WORLD SCHOOLS DEBATING CHAMPIONSHIP</span> IS CHOSEN, AND TRAINED.
                </Typography>
                <Typography className="section-text">
                    ADDITIONALLY, THE DC CONDUCTS VARIOUS WORKSHOPS IN DEBATING, JUDGING, AND COACHING, AS WELL AS OTHER PROGRAMS IN <span className="highlight-bold">AFFILIATION WITH THE MINISTRY OF EDUCATION</span> AS PART OF ITS MISSION TO UPLIFT AND ADVANCE ENGLISH DEBATING IN SRI LANKA.
                </Typography>
            </Box>
        </>
    );
}

export default HomePage;