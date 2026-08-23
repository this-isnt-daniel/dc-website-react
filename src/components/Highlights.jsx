import React from 'react';
import Box from '@mui/material/Box';
import BandLabel from './BandLabel';

import carousel1 from '../assets/carousel-1.png';
import carousel2 from '../assets/carousel-2.jpeg';
import carousel3 from '../assets/carousel-3.jpeg';

// A composed, static trio rather than the old carousel, which advanced every two
// seconds — too fast to look at and impossible to control.
//
// These are candid, phone-shot photographs of real events, so they are presented
// modestly at honest sizes with a light grade to unify their very different
// lighting, and each is captioned. Nothing is full-bleed or art-directed,
// because the source material would not survive it.
const SHOTS = [
    {
        src: carousel1,
        alt: 'A debater speaking at a lectern in a wood-panelled council chamber, with adjudicators seated behind.',
        caption: 'A speaker on his feet in the chamber.',
        area: { md: '1 / span 8' },
        ratio: '4 / 3'
    },
    {
        src: carousel3,
        alt: 'Five debaters in white school uniform holding the Debaters’ Council Schools League champions shield.',
        caption: 'Schools League champions with the shield.',
        area: { md: '1 / span 6' },
        ratio: '4 / 3'
    },
    {
        src: carousel2,
        alt: 'A large group of students standing and kneeling together for a group photograph in a classroom.',
        caption: 'A training workshop.',
        area: { md: '7 / span 6' },
        ratio: '4 / 3'
    }
];

const Highlights = () => (
    <Box component="section" className="dc-band dc-band--chamber" aria-labelledby="dc-highlights">
        <Box className="dc-band__inner">
            <BandLabel>From the floor</BandLabel>

            <Box
                component="h2"
                id="dc-highlights"
                sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}
            >
                From the floor
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
                    gap: { xs: 4, md: 3 },
                    alignItems: 'start'
                }}
            >
                {SHOTS.map(({ src, alt, caption, area, ratio }) => (
                    <Box key={src} component="figure" sx={{ m: 0, gridColumn: { xs: 'auto', ...area } }}>
                        <Box
                            component="img"
                            src={src}
                            alt={alt}
                            loading="lazy"
                            sx={{
                                width: '100%',
                                aspectRatio: ratio,
                                objectFit: 'cover',
                                display: 'block',
                                borderRadius: '2px',
                                border: '1px solid rgba(239, 241, 240, 0.12)',
                                filter: 'saturate(0.94) contrast(1.03)'
                            }}
                        />
                        <Box
                            component="figcaption"
                            className="dc-mono"
                            sx={{
                                mt: 1.75,
                                fontSize: { xs: '0.6rem', md: '0.64rem' },
                                color: 'var(--dc-limewash)',
                                opacity: 0.62,
                                lineHeight: 1.5
                            }}
                        >
                            {caption}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    </Box>
);

export default Highlights;
