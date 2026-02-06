import React from 'react';
import BasicTable from '../components/BasicTable';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LeaguePage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundImage: 'var(--hero-gradient)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            width: '100%'
        }}>
            {/* Hero Section */}
            <Box sx={{
                minHeight: 'calc(100vh - 64px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                px: 2,
                width: '100%',
                maxWidth: '100%'
            }}>
                <Box sx={{ textAlign: 'center', color: 'white' }}>
                    <Typography component="h1" sx={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '1.5rem', md: '3rem' }, mb: 2, textTransform: 'uppercase' }}>
                        ABOUT DC SCHOOLS LEAGUE
                    </Typography>
                    <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '1rem', md: '1.2rem' }, mb: 4 }}>
                        THE <Box component="span" sx={{ fontWeight: 'bold' }}>DC LEAGUE</Box> WAS FIRST ESTABLISHED IN <Box component="span" sx={{ fontWeight: 'bold' }}>2009</Box>.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8, maxWidth: '900px', mx: 'auto', mb: 3 }}>
                        IN ITS INITIAL FORM, IT INCLUDED 56 ROUNDS OF DEBATE HELD OVER A FEW MONTHS. CURRENTLY, POINTS ON THE LEAGUE TABLE ARE DECIDED BASED ON <Box component="span" sx={{ fontWeight: 'bold' }}>HOW FAR AN INSTITUTION ADVANCES</Box> IN ANY DC ENDORSED TOURNAMENT. THE <Box component="span" sx={{ fontWeight: 'bold' }}>SCALE OF THE TOURNAMENT</Box> IS ALSO CONSIDERED IN TALLYING POINTS. FURTHERMORE, SCHOOLS ARE ABLE TO GAIN A FIXED NUMBER OF POINTS BY <Box component="span" sx={{ fontWeight: 'bold' }}>HOSTING A TOURNAMENT</Box>.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Montserrat', fontSize: { xs: '0.85rem', md: '1rem' }, lineHeight: 1.8, maxWidth: '900px', mx: 'auto' }}>
                        AT THE END OF THE YEAR, THE TOTAL POINTS ARE TALLIED AND THE <Box component="span" sx={{ fontWeight: 'bold' }}>TOP FOUR TEAMS</Box> DEBATE EACH OTHER ON A ROUND ROBIN BASIS, FOLLOWING WHICH THE TOP TWO TEAMS FACE EACH OTHER OFF IN A GRAND FINAL AND THE <Box component="span" sx={{ fontWeight: 'bold' }}>WINNER OF THE DC LEAGUE</Box> IS DECIDED. THE LEAGUE ENCOURAGES TEAMS TO PARTICIPATE AS WELL AS TO HOST MORE TOURNAMENTS.
                    </Typography>
                </Box>
            </Box>

            {/* Table Section */}
            <Box sx={{
                pb: 10,
                px: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Montserrat', fontWeight: 'bold', color: 'white', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                    SCHOOLS LEAGUE STANDINGS
                </Typography>
                <BasicTable />
            </Box>
        </Box>
    );
}

export default LeaguePage;