import React from 'react';
import AutoCarousel from '../components/AutoCarousel';
import AnimatedPlasma from '../components/AnimatedPlasma';
import TextClipReveal from '../components/TextClipReveal';
import RollingStats from '../components/RollingStats';
import boardPic from '../assets/boardpic.png';

import carousel1 from '../assets/carousel-1.png';
import carousel2 from '../assets/carousel-2.jpeg';
import carousel3 from '../assets/carousel-3.jpeg';

// Carousel images
const carouselImages = [
    carousel1,
    carousel2,
    carousel3,
];
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomePage() {
    return (
        // We wrap both sections in a React Fragment
        <>
            {/* === GLOBAL PARALLAX BACKGROUND === */}
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
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

            {/* === SECTION 1: HERO === */}
            <Box
                component="section"
                className="home-hero-section"
                sx={{ position: 'relative', overflow: 'hidden' }}
            >
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
                <TextClipReveal
                    text="ABOUT US"
                    font={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '1.5rem', md: '3rem' }, marginBottom: '16px', textTransform: 'uppercase', textAlign: 'center' }}
                    textColor="white"
                    revealDirection="bottom"
                    sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                />
                <TextClipReveal
                    text={`THE DEBATERS' COUNCIL OF SRI LANKA SERVES AS A NATIONAL LEVEL BODY THAT OVERSEES ENGLISH DEBATING IN SRI LANKA AT A SECONDARY AND TERTIARY LEVEL.`}
                    font={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8 }}
                    textColor="white"
                    revealDirection="bottom"
                    staggerDelay={0.05}
                    sx={{ maxWidth: '900px', mx: 'auto', mb: 3, textAlign: 'center' }}
                />
                <TextClipReveal
                    text={`IT WAS ESTABLISHED IN 2006 AS A SOCIETY BY THE DEBATING COMMUNITY, LED BY NISHANTHA DE SILVA AND REGISTERED AS A COMPANY LIMITED UNDER GUARANTEE IN 2009.`}
                    font={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8 }}
                    textColor="white"
                    revealDirection="bottom"
                    staggerDelay={0.05}
                    sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}
                />
            </Box>

            {/* === SECTION 2.5: STATS COUNTER === */}
            <RollingStats />

            {/* === SECTION 3: WHAT WE DO === */}
            <Box component="section" className="home-section section-gradient">
                <TextClipReveal
                    text="WHAT WE DO"
                    font={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '1.5rem', md: '3rem' }, marginBottom: '16px', textTransform: 'uppercase', textAlign: 'center' }}
                    textColor="white"
                    revealDirection="center"
                    sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                />
                <TextClipReveal
                    text={`THE DEBATERS' COUNCIL COORDINATES TOURNAMENTS AND PROVIDES SUPPORT TO SCHOOLS AND OTHER TOURNAMENT ORGANISERS TO MAINTAIN AN INTERNATIONAL STANDARD OF DEBATING WITHIN THE LOCAL CIRCUIT.`}
                    font={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8 }}
                    textColor="white"
                    revealDirection="bottom"
                    staggerDelay={0.05}
                    sx={{ maxWidth: '900px', mx: 'auto', mb: 3, textAlign: 'center' }}
                />
                <TextClipReveal
                    text={`WE ALSO TRAIN A SELECTED GROUP OF TOP SCHOOL DEBATERS AS A PART OF THE NATIONAL POOL OF DEBATERS OUT OF WHICH THE TEAM REPRESENTING SRI LANKA AT THE WORLD SCHOOLS DEBATING CHAMPIONSHIP IS CHOSEN, AND TRAINED.`}
                    font={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8 }}
                    textColor="white"
                    revealDirection="bottom"
                    staggerDelay={0.05}
                    sx={{ maxWidth: '900px', mx: 'auto', mb: 3, textAlign: 'center' }}
                />
                <TextClipReveal
                    text={`ADDITIONALLY, THE DC CONDUCTS VARIOUS WORKSHOPS IN DEBATING, JUDGING, AND COACHING, AS WELL AS OTHER PROGRAMS IN AFFILIATION WITH THE MINISTRY OF EDUCATION AS PART OF ITS MISSION TO UPLIFT AND ADVANCE ENGLISH DEBATING IN SRI LANKA.`}
                    font={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8 }}
                    textColor="white"
                    revealDirection="bottom"
                    staggerDelay={0.05}
                    sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}
                />
            </Box>

            {/* === SECTION 3: VISION & MISSION === */}
            <Box component="section" className="home-section section-gradient">
                <Box className="vision-mission-container">
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <TextClipReveal
                            text="VISION"
                            font={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '1.5rem', md: '3rem' }, marginBottom: '16px', textTransform: 'uppercase', textAlign: 'center' }}
                            textColor="white"
                            revealDirection="left"
                            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                        />
                        <TextClipReveal
                            text="[VISION CONTENT PLACEHOLDER]"
                            font={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8 }}
                            textColor="white"
                            revealDirection="bottom"
                            sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <TextClipReveal
                            text="MISSION"
                            font={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '1.5rem', md: '3rem' }, marginBottom: '16px', textTransform: 'uppercase', textAlign: 'center' }}
                            textColor="white"
                            revealDirection="right"
                            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                        />
                        <TextClipReveal
                            text="[MISSION CONTENT PLACEHOLDER]"
                            font={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8 }}
                            textColor="white"
                            revealDirection="bottom"
                            sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* === SECTION 4: GALLERY (AUTO CAROUSEL) === */}
            <Box component="section" className="home-section section-dark">
                <Typography component="h3" sx={{ color: '#666', mb: 2, textAlign: 'center', fontSize: '1.2rem', letterSpacing: '2px', fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
                    HIGHLIGHTS
                </Typography>
                <AutoCarousel images={carouselImages} />
            </Box>

            {/* === SECTION 6: THE BOARD === */}
            <Box component="section" className="home-section section-dark">
                <TextClipReveal
                    text="THE BOARD"
                    font={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '40px', textAlign: 'center' }}
                    textColor="#ffffff"
                    revealDirection="top"
                    sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                />
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
                <Typography className="about-caption" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    (LEFT TO RIGHT): SHRUTHIKA PRATHAPAN, JAYAGEETH BASNAYAKE, NAVIDI PERERA, DANIEL VICTOR (PRESIDENT), SHAKEEB MOHIDEEN (TREASURER), GAVIN SENARATNE (SECRETARY), SANITHMA JAYASOORIYA.
                </Typography>
            </Box>
        </>
    );
}

export default HomePage;