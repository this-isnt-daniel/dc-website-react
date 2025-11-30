import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import facebookIcon from '../assets/icons/facebook.png';
import instagramIcon from '../assets/icons/instagram.png';
import twitterIcon from '../assets/icons/twitter.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import youtubeIcon from '../assets/icons/youtube.png';

function FooterBar() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                // ... (your main footer styles: background, color, font, etc.)
                padding: '20px 40px',
                color: '#FFFFFF4D',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                fontSize: 17,
                letterSpacing: '1.1px',
                lineHeight: 'auto',
            }}
        >
            <Box
                sx={{
                    borderTop: '1px solid #444',
                    marginBottom: '20px',
                }}
            />

            {/* This is the main content wrapper */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },    // Stack on mobile, Row on PC
                    justifyContent: { xs: 'center', md: 'space-between' }, // Center on mobile, Space on PC
                    alignItems: 'center',
                    gap: { xs: 3, md: '20px' },                    // Add vertical gap on mobile
                    maxWidth: '1400px',
                    margin: '0 auto',
                    width: '100%'
                }}
            >
                {/* === ITEM 1 (Stays on the left) === */}
                <Typography sx={{ margin: 0 }}>
                    &copy; {currentYear}. THE DEBATERS' COUNCIL
                </Typography>

                {/* === ITEM 2 (New group for the right side) === */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexDirection: { xs: 'column', sm: 'row' }}}> {/* gap: 3 is 24px */}

                    {/* --- Sub-item 2a (The Icons) --- */}
                    <Box sx={{ display: 'flex', gap: '15px' }}>
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Box
                                component="img"
                                src={facebookIcon}
                                alt="Facebook"
                                sx={{ width: 24, height: 24, opacity: 0.3, '&:hover': { opacity: 1 } }}
                            />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Box
                                component="img"
                                src={instagramIcon}
                                alt="Instagram"
                                sx={{ width: 24, height: 24, opacity: 0.3, '&:hover': { opacity: 1 } }}
                            />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Box
                                component="img"
                                src={twitterIcon}
                                alt="Twitter"
                                sx={{ width: 24, height: 24, opacity: 0.3, '&:hover': { opacity: 1 } }}
                            />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Box
                                component="img"
                                src={linkedinIcon}
                                alt="LinkedIn"
                                sx={{ width: 24, height: 24, opacity: 0.3, '&:hover': { opacity: 1 } }}
                            />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <Box
                                component="img"
                                src={youtubeIcon}
                                alt="YouTube"
                                sx={{ width: 24, height: 24, opacity: 0.3, '&:hover': { opacity: 1 } }}
                            />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default FooterBar;