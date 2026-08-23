import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AnimatedPlasma from './AnimatedPlasma';
import styles from '../styles/infoStyles';

// The plasma-backed page header used across the information/guide pages.
// AnimatedPlasma takes no sx/style of its own, so it needs the positioned wrapper.
const PageHero = ({ title, subtitle }) => (
    <Box sx={styles.header}>
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
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
        <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography component="h1" sx={styles.title}>{title}</Typography>
            {subtitle && <Typography sx={styles.subtitle}>{subtitle}</Typography>}
        </Box>
    </Box>
);

export default PageHero;
