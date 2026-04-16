import React from 'react';
import BasicTable from '../components/BasicTable';
import LeagueCarousel from '../components/LeagueCarousel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextClipReveal from '../components/TextClipReveal';
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
                minHeight: { xs: 'auto', md: 'calc(100vh - 64px)' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                width: '100%',
                maxWidth: '100%'
            }}>
                {/* Title Container - Full viewport on mobile */}
                <Box sx={{
                    minHeight: { xs: '100vh', md: 'auto' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    px: { xs: 3, md: 2 },
                    pt: { xs: 8, md: 0 },
                    pb: { xs: 4, md: 0 }
                }}>
                    <TextClipReveal
                        text="ABOUT DC SCHOOLS LEAGUE"
                        font={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '2.5rem', md: '3rem' }, mb: { xs: 3, md: 2 }, textTransform: 'uppercase', lineHeight: 1.2, textAlign: 'center' }}
                        textColor="white"
                        revealDirection="bottom"
                        sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                    />
                    <TextClipReveal
                        text={<>THE <Box component="span" sx={{ fontWeight: 'bold' }}>DC LEAGUE</Box> WAS FIRST ESTABLISHED IN <Box component="span" sx={{ fontWeight: 'bold' }}>2009</Box>.</>}
                        font={{ fontFamily: 'Montserrat', fontSize: { xs: '1.2rem', md: '1.2rem' }, mb: { xs: 0, md: 4 }, textAlign: 'center' }}
                        textColor="white"
                        revealDirection="bottom"
                        staggerDelay={0.05}
                        sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                    />
                </Box>

                {/* Text Container - Below on mobile, inline on desktop */}
                <Box sx={{
                    textAlign: 'center',
                    color: 'white',
                    px: { xs: 3, md: 2 },
                    pb: { xs: 8, md: 0 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 3, md: 0 }
                }}>
                    <TextClipReveal
                        text={<>IN ITS INITIAL FORM, IT INCLUDED 56 ROUNDS OF DEBATE HELD OVER A FEW MONTHS. CURRENTLY, POINTS ON THE LEAGUE TABLE ARE DECIDED BASED ON <Box component="span" sx={{ fontWeight: 'bold' }}>HOW FAR AN INSTITUTION ADVANCES</Box> IN ANY DC ENDORSED TOURNAMENT. THE <Box component="span" sx={{ fontWeight: 'bold' }}>SCALE OF THE TOURNAMENT</Box> IS ALSO CONSIDERED IN TALLYING POINTS. FURTHERMORE, SCHOOLS ARE ABLE TO GAIN A FIXED NUMBER OF POINTS BY <Box component="span" sx={{ fontWeight: 'bold' }}>HOSTING A TOURNAMENT</Box>.</>}
                        font={{ fontFamily: 'Montserrat', fontSize: { xs: '1rem', md: '1rem' }, lineHeight: { xs: 1.7, md: 1.8 }, textAlign: 'center' }}
                        textColor="white"
                        revealDirection="bottom"
                        staggerDelay={0.05}
                        sx={{ maxWidth: '900px', mx: 'auto', mb: { xs: 0, md: 3 } }}
                    />
                    <TextClipReveal
                        text={<>AT THE END OF THE YEAR, THE TOTAL POINTS ARE TALLIED AND THE <Box component="span" sx={{ fontWeight: 'bold' }}>TOP FOUR TEAMS</Box> DEBATE EACH OTHER ON A ROUND ROBIN BASIS, FOLLOWING WHICH THE TOP TWO TEAMS FACE EACH OTHER OFF IN A GRAND FINAL AND THE <Box component="span" sx={{ fontWeight: 'bold' }}>WINNER OF THE DC LEAGUE</Box> IS DECIDED. THE LEAGUE ENCOURAGES TEAMS TO PARTICIPATE AS WELL AS TO HOST MORE TOURNAMENTS.</>}
                        font={{ fontFamily: 'Montserrat', fontSize: { xs: '1rem', md: '1rem' }, lineHeight: { xs: 1.7, md: 1.8 }, textAlign: 'center' }}
                        textColor="white"
                        revealDirection="bottom"
                        staggerDelay={0.05}
                        sx={{ maxWidth: '900px', mx: 'auto' }}
                    />
                </Box>
            </Box>

            {/* Carousel Section */}
            <Box sx={{ width: '100%', pb: 10 }}>
                <Typography variant="h4" sx={{ mb: { xs: 2, md: 4 }, fontFamily: 'Montserrat', fontWeight: 'bold', color: 'white', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2.125rem' }, textTransform: 'uppercase', maxWidth: { xs: '260px', sm: '100%' }, mx: 'auto', lineHeight: { xs: 1.4, md: 1.2 } }}>
                    Past League Champions
                </Typography>
                <LeagueCarousel />
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