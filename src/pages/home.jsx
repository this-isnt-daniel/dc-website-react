import React from 'react';
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

                {/* Image Placeholder */}
                <Box className="about-image-placeholder">
                    <Typography sx={{ color: '#888' }}>[GROUP PHOTO PLACEHOLDER]</Typography>
                </Box>
                <Typography className="about-caption">
                    (LEFT TO RIGHT): DANIEL VICTOR, SHRUTHIKA PRATHAPAN, ANAH CASSIM (SECRETARY), DINETH HETTIARACHCHI (PRESIDENT), SHAKEEB MOHIDEEN, RACHEL CRAMER, GAVIN SENARATNE (TREASURER).
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

            {/* === SECTION 4: GALLERY === */}
            <Box component="section" className="home-section section-dark">
                <Box className="gallery-grid">
                    <Box className="gallery-item">[IMAGE 1]</Box>
                    <Box className="gallery-item">[IMAGE 2]</Box>
                    <Box className="gallery-item">[IMAGE 3]</Box>
                </Box>
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