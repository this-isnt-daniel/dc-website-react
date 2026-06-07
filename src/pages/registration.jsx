import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const RegistrationPage = () => {
    return (
        <Box sx={{ minHeight: '100vh', background: '#121212', py: { xs: 4, md: 8 } }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography component="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: '900', color: '#fff', fontFamily: 'Montserrat', mb: 2 }}>
                        School Registration
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#aaa', fontFamily: 'Montserrat', maxWidth: '800px', mx: 'auto' }}>
                        Register your school to become an official member of the Debaters' Council Sri Lanka.
                    </Typography>
                </Box>
                
                <Box sx={{ 
                    width: '100%', 
                    maxWidth: '800px',
                    margin: '0 auto',
                    height: '1000px', 
                    background: '#121212', // Match page background
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: 'none'
                }}>
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdtqyV-6URbOHFyxPHoaBuFwpSjrl0VguQ44lT8YckCVUjWDQ/viewform?embedded=true" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        marginHeight="0" 
                        marginWidth="0"
                        title="DC Registration Form"
                        style={{ 
                            border: 'none', 
                            width: 'calc(100% + 40px)', // Crop side padding
                            marginLeft: '-20px', 
                            marginTop: '-10px',
                            filter: 'invert(100%) hue-rotate(180deg) brightness(115%) contrast(120%)' 
                        }}
                    >
                        Loading…
                    </iframe>
                </Box>
            </Container>
        </Box>
    );
};

export default RegistrationPage;
