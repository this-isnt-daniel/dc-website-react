import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NationalTeamCarousel from '../components/NationalTeamCarousel';

function NationalTeamPage() {
    return (
        // The hero keeps its class — .national-team-hero is real CSS in index.css
        // (flag image + gradient). The page wrapper is styled here because
        // .national-team-page was never defined anywhere.
        <Box sx={{ minHeight: '100vh', background: '#121212', fontFamily: 'Montserrat, sans-serif' }}>
            <div className="national-team-hero">
                <h1>The National Debating <br /> Team of Sri Lanka</h1>
            </div>

            <Box sx={{ px: { xs: 3, md: 4 }, pt: { xs: 6, md: 8 }, textAlign: 'center' }}>
                <Typography component="h2" sx={{
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '1.5rem', md: '2.25rem' },
                    fontWeight: 800,
                    color: '#fff',
                    textTransform: 'uppercase',
                    mb: 1.5
                }}>
                    Every Team, Every Year
                </Typography>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    color: '#aaa',
                    maxWidth: '760px',
                    mx: 'auto',
                    lineHeight: 1.7
                }}>
                    Select a year to see the squad that represented Sri Lanka at the World Schools
                    Debating Championship, along with what they achieved.
                </Typography>
            </Box>

            <NationalTeamCarousel />
        </Box>
    )
}
export default NationalTeamPage;
