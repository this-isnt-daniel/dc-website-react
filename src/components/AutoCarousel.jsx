import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const AutoCarousel = ({ images, interval = 2000 }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef(null);

    // Number of items visible at once
    const itemsPerView = isMobile ? 1 : 3;

    // Clone the first few items to append to the end for seamless looping
    // We only need to clone 'itemsPerView' amount to cover the transition
    const extendedImages = [...images, ...images.slice(0, itemsPerView)];

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, interval);

        return () => clearInterval(timer);
    }, [currentIndex, interval, itemsPerView, images.length]);

    const handleNext = () => {
        // If we are at the last 'real' item, we slide to the first 'cloned' item
        // visible index: images.length
        if (currentIndex >= images.length) {
            // Should have been reset already, but just in case
            return;
        }

        setIsTransitioning(true);
        setCurrentIndex((prev) => {
            const next = prev + 1;

            // If we just slid to the start of the cloned section (which looks like index 0)
            if (next === images.length) {
                // Wait for animation to finish, then reset instantly
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(0);
                }, 1000); // Match transition duration
            }
            return next;
        });
    };

    return (
        <Box sx={{ width: '100%', overflow: 'hidden', py: 4 }}>
            <Box
                sx={{
                    display: 'flex',
                    transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                    width: '100%',
                }}
            >
                {extendedImages.map((imgSrc, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: `${100 / itemsPerView}%`,
                            boxSizing: 'border-box',
                            padding: '0 10px',
                        }}
                    >
                        <Box
                            component="img"
                            src={imgSrc}
                            alt={`Slide ${index}`}
                            sx={{
                                width: '100%',
                                height: { xs: '200px', md: '300px' },
                                objectFit: 'cover',
                                borderRadius: '16px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default AutoCarousel;
