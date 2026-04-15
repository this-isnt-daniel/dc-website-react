import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function FooterBar() {
    const currentYear = new Date().getFullYear();
    const [isHighlighted, setIsHighlighted] = useState(false);

    useEffect(() => {
        const handleHighlight = () => {
            // Start highlight shortly after scroll starts
            setTimeout(() => {
                setIsHighlighted(true);
                // Remove highlight after 2 seconds
                setTimeout(() => setIsHighlighted(false), 2000);
            }, 500);
        };
        window.addEventListener('highlight-socials', handleHighlight);
        return () => window.removeEventListener('highlight-socials', handleHighlight);
    }, []);

    const iconStyle = {
        fontSize: '24px',
        color: isHighlighted ? '#ff4d4d' : '#ffffff',
        opacity: isHighlighted ? 1 : 0.4,
        transform: isHighlighted ? 'scale(1.2)' : 'scale(1)',
        filter: isHighlighted ? 'drop-shadow(0 0 8px rgba(255, 77, 77, 0.6))' : 'none',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        '&:hover': {
            opacity: 1,
            color: '#ff4d4d',
            transform: 'scale(1.1)',
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                padding: '20px 40px',
                color: '#FFFFFF4D',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                fontSize: 17,
                letterSpacing: '1.1px',
                backgroundColor: '#242424',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <Box
                sx={{
                    borderTop: '1px solid #444',
                    marginBottom: '20px',
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: { xs: 'center', md: 'space-between' },
                    alignItems: 'center',
                    gap: { xs: 3, md: '20px' },
                    maxWidth: '1400px',
                    margin: '0 auto',
                    width: '100%'
                }}
            >
                <Typography sx={{ margin: 0 }}>
                    &copy; {currentYear}. THE DEBATERS' COUNCIL
                </Typography>

                <Box id="social-footer" sx={{ display: 'flex', alignItems: 'center', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaFacebookF} sx={iconStyle} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaInstagram} sx={iconStyle} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaTwitter} sx={iconStyle} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaLinkedinIn} sx={iconStyle} />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex' }}>
                            <Box component={FaYoutube} sx={iconStyle} />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default FooterBar;