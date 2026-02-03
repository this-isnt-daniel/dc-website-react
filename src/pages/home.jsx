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
                                fontWeight: 800,
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

            {/* === SECTION 2: NEW BOX === */}
            {/* This is your new box with the same background and size */}
            <Box
                component="section"
                className="home-hero-section"
            >
                {/* You can add your new content inside this box */}
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: '2rem',
                        textAlign: 'center',
                        width: '100%'
                    }}
                >
                    YOUR NEW CONTENT GOES HERE
                </Typography>
            </Box>
        </>
    );
}

export default HomePage;