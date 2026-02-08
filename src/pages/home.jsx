import React from 'react';
import AutoCarousel from '../components/AutoCarousel';
import AnimatedPlasma from '../components/AnimatedPlasma';
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
                sx={{ position: 'relative', overflow: 'hidden' }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}>
                    <AnimatedPlasma
                        color1="#8B0000"
                        color2="#250000"
                        color3="#000000"
                        scale={0.75}
                        speed={0.3}
                        distortion={0.5}
                        swirl={0.6}
                    />
                </Box>
                {/* Content Wrapper */}
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        position: 'relative',
                        zIndex: 1
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
                                color: '#DCDCDC',
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
                <Typography component="h2" sx={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '1.5rem', md: '3rem' }, mb: 2, textTransform: 'uppercase', color: 'white', textAlign: 'center' }}>
                    ABOUT US
                </Typography>
                <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8, maxWidth: '900px', mx: 'auto', mb: 3, color: 'white', textAlign: 'center' }}>
                    THE DEBATERS' COUNCIL OF SRI LANKA SERVES AS A <Box component="span" sx={{ fontWeight: 'bold' }}>NATIONAL LEVEL BODY THAT OVERSEES ENGLISH DEBATING IN SRI LANKA</Box> AT A SECONDARY AND TERTIARY LEVEL.
                </Typography>
                <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8, maxWidth: '900px', mx: 'auto', color: 'white', textAlign: 'center' }}>
                    IT WAS ESTABLISHED IN 2006 AS A SOCIETY BY THE DEBATING COMMUNITY, LED BY <Box component="span" sx={{ fontWeight: 'bold' }}>NISHANTHA DE SILVA</Box> AND REGISTERED AS A COMPANY LIMITED UNDER GUARANTEE IN <Box component="span" sx={{ fontWeight: 'bold' }}>2009</Box>.
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
                        <Typography component="h2" sx={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '1.5rem', md: '3rem' }, mb: 2, textTransform: 'uppercase', color: 'white' }}>
                            VISION
                        </Typography>
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8, maxWidth: '900px', mx: 'auto', color: 'white' }}>
                            [VISION CONTENT PLACEHOLDER]
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography component="h2" sx={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '1.5rem', md: '3rem' }, mb: 2, textTransform: 'uppercase', color: 'white' }}>
                            MISSION
                        </Typography>
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8, maxWidth: '900px', mx: 'auto', color: 'white' }}>
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
                <Typography component="h2" sx={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '1.5rem', md: '3rem' }, mb: 2, textTransform: 'uppercase', color: 'white', textAlign: 'center' }}>
                    WHAT WE DO
                </Typography>
                <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8, maxWidth: '900px', mx: 'auto', mb: 3, color: 'white', textAlign: 'center' }}>
                    <Box component="span" sx={{ fontWeight: 'bold' }}>THE DEBATERS' COUNCIL</Box> COORDINATES TOURNAMENTS AND PROVIDES SUPPORT TO SCHOOLS AND OTHER TOURNAMENT ORGANISERS TO MAINTAIN AN INTERNATIONAL STANDARD OF DEBATING WITHIN THE LOCAL CIRCUIT.
                </Typography>
                <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8, maxWidth: '900px', mx: 'auto', mb: 3, color: 'white', textAlign: 'center' }}>
                    WE ALSO TRAIN A SELECTED GROUP OF TOP SCHOOL DEBATERS AS A PART OF THE <Box component="span" sx={{ fontWeight: 'bold' }}>NATIONAL POOL OF DEBATERS</Box> OUT OF WHICH THE TEAM REPRESENTING SRI LANKA AT THE <Box component="span" sx={{ fontWeight: 'bold' }}>WORLD SCHOOLS DEBATING CHAMPIONSHIP</Box> IS CHOSEN, AND TRAINED.
                </Typography>
                <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8, maxWidth: '900px', mx: 'auto', color: 'white', textAlign: 'center' }}>
                    ADDITIONALLY, THE DC CONDUCTS VARIOUS WORKSHOPS IN DEBATING, JUDGING, AND COACHING, AS WELL AS OTHER PROGRAMS IN <Box component="span" sx={{ fontWeight: 'bold' }}>AFFILIATION WITH THE MINISTRY OF EDUCATION</Box> AS PART OF ITS MISSION TO UPLIFT AND ADVANCE ENGLISH DEBATING IN SRI LANKA.
                </Typography>
            </Box>
        </>
    );
}

export default HomePage;