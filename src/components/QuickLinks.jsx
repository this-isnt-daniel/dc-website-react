import React from 'react';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import BandLabel from './BandLabel';

// Task-oriented entry points, sitting directly under the hero. The home page is
// otherwise prose sections with nothing to click, so a visitor looking for "how
// do I join" or "how do I run a tournament" had nowhere to go.
//
// These are rows, not cards. A card grid gives four items equal visual weight
// and forces every one to repeat "Learn more"; rows let each item state its own
// audience in the left column, which is the thing a visitor is actually sorting
// by. Rows also stack honestly on mobile instead of collapsing a 4-up grid.
const LINKS = [
    {
        key: 'If you debate',
        title: 'Workshops and lectures',
        description: 'Recorded sessions from our coaches, and debriefs on past motions.',
        to: '/videos'
    },
    {
        key: 'If you’re trying out',
        title: 'How national teams are picked',
        description: 'The National Pool, trials, and how the squad for Worlds is chosen.',
        to: '/information'
    },
    {
        key: 'If you run tournaments',
        title: 'Organising and endorsement',
        description: 'Invitations, motions, adjudication, and tabulation, with Council endorsement.',
        to: '/tournament-essentials'
    },
    {
        key: 'If you’re new',
        title: 'How the format works',
        description: 'World Schools style: three speakers a side, eight minutes, points of information.',
        to: '/guide-to-wsdc'
    }
];

const QuickLinks = () => (
    <Box component="section" className="dc-band dc-band--limewash" aria-labelledby="dc-start">
        <Box className="dc-band__inner">
            <BandLabel accent="var(--dc-teak)">Start here</BandLabel>

            <Box
                component="h2"
                id="dc-start"
                className="dc-display"
                sx={{
                    m: 0,
                    mb: { xs: 4, md: 6 },
                    fontSize: { xs: '1.9rem', md: '2.9rem' },
                    lineHeight: 1.02,
                    color: 'var(--dc-ink)'
                }}
            >
                Four ways in.
            </Box>

            <Box sx={{ borderTop: '1px solid rgba(122, 74, 43, 0.28)' }}>
                {LINKS.map(({ key, title, description, to }) => (
                    <Box
                        key={to}
                        component={RouterLink}
                        to={to}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: '15rem minmax(0, 1fr) 2.5rem' },
                            alignItems: { md: 'baseline' },
                            columnGap: { md: 4 },
                            rowGap: { xs: 1, md: 0 },
                            px: { xs: 0, md: 2 },
                            py: { xs: 3, md: 3.5 },
                            borderBottom: '1px solid rgba(122, 74, 43, 0.28)',
                            textDecoration: 'none',
                            color: 'var(--dc-ink)',
                            transition: 'background-color 0.18s ease, color 0.18s ease, padding-left 0.18s ease',
                            '&:hover, &:focus-visible': {
                                backgroundColor: 'var(--dc-red)',
                                color: '#FFFFFF',
                                pl: { md: 3 }
                            },
                            // The row is the link, so the focus ring has to be on
                            // the row and has to survive the red hover state.
                            '&:focus-visible': {
                                outline: '3px solid var(--dc-ink)',
                                outlineOffset: '-3px'
                            },
                            '&:hover .dc-row-key, &:focus-visible .dc-row-key': { opacity: 1, color: '#FFFFFF' },
                            '&:hover .dc-row-desc, &:focus-visible .dc-row-desc': { opacity: 0.92 },
                            '&:hover .dc-row-arrow, &:focus-visible .dc-row-arrow': { opacity: 1, transform: 'translateX(4px)' }
                        }}
                    >
                        <Box
                            className="dc-mono dc-row-key"
                            sx={{
                                fontSize: { xs: '0.62rem', md: '0.68rem' },
                                color: 'var(--dc-teak)',
                                transition: 'color 0.18s ease, opacity 0.18s ease',
                                pt: { md: '0.35em' }
                            }}
                        >
                            {key}
                        </Box>

                        <Box>
                            <Box
                                className="dc-display"
                                sx={{
                                    fontSize: { xs: '1.28rem', md: '1.6rem' },
                                    lineHeight: 1.14,
                                    mb: 0.9
                                }}
                            >
                                {title}
                            </Box>
                            <Box
                                className="dc-serif dc-row-desc"
                                sx={{
                                    fontSize: { xs: '0.98rem', md: '1.05rem' },
                                    lineHeight: 1.55,
                                    opacity: 0.72,
                                    maxWidth: '68ch',
                                    transition: 'opacity 0.18s ease'
                                }}
                            >
                                {description}
                            </Box>
                        </Box>

                        <Box
                            aria-hidden="true"
                            className="dc-row-arrow"
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                fontSize: '1.4rem',
                                lineHeight: 1,
                                opacity: 0.3,
                                justifySelf: 'end',
                                transition: 'opacity 0.18s ease, transform 0.18s ease'
                            }}
                        >
                            &rarr;
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    </Box>
);

export default QuickLinks;
