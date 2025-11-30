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
                sx={{
                    minHeight: 'calc(100vh - 64px)', // Assumes 64px header
                    xs: 'calc(100vh - 56px)',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    padding: { xs: '20px 40px', md: '40px 80px' },
                    backgroundImage: 'linear-gradient(to bottom, #8B0000 0%, #250000 53%, #000000 100%)',
                }}
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
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 800,
                                fontSize: { xs: '3rem', md: '5rem' },
                                letterSpacing: '1.1px',
                                color: '#DCDCDC4D',
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
                sx={{
                    minHeight: 'calc(100vh - 64px)', // Same height
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center', // Center content by default
                    padding: { xs: '20px 40px', md: '40px 80px' }, // Same padding
                    backgroundImage: 'linear-gradient(to bottom, #8B0000 0%, #250000 53%, #000000 100%)', // Same background
                }}
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