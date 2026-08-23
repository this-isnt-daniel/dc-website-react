import React from 'react';
import Box from '@mui/material/Box';

import MotionHero from '../components/MotionHero';
import QuickLinks from '../components/QuickLinks';
import RollingStats from '../components/RollingStats';
import Highlights from '../components/Highlights';
import BandLabel from '../components/BandLabel';
// 2000px WebP cutout, 337 KB against the source PNG's 2.7 MB. The original
// boardpic.png is kept in assets as the master.
import boardPic from '../assets/boardpic.webp';

import '../styles/home.css';

// The board, keyed left to right as they stand in the photograph.
const BOARD = [
    { name: 'Shruthika Prathapan' },
    { name: 'Jayageeth Basnayake' },
    { name: 'Navidi Perera' },
    { name: 'Daniel Victor', role: 'President' },
    { name: 'Shakeeb Mohideen', role: 'Treasurer' },
    { name: 'Gavin Senaratne', role: 'Secretary' },
    { name: 'Sanithma Jayasooriya' }
];

// The Council's three areas of work. Each is a genuinely parallel item, which is
// why they sit under matching top rules; there is no numbering, because nothing
// here happens in an order.
const PORTFOLIOS = [
    {
        key: 'Tournaments',
        title: 'Coordination and endorsement',
        body: 'The Council coordinates tournaments and supports schools and other organisers in running them, so that the local circuit holds to an international standard.'
    },
    {
        key: 'National team',
        title: 'The National Pool',
        body: 'A selected group of top school debaters trains as the National Pool, from which the team representing Sri Lanka at the World Schools Debating Championship is chosen and coached.'
    },
    {
        key: 'Training',
        title: 'Workshops and programmes',
        body: 'Workshops in debating, judging and coaching, together with programmes run in affiliation with the Ministry of Education.'
    }
];

// Prose on the dark grounds. Set in the serif at a real reading size in sentence
// case — the previous version set every paragraph in uppercase Montserrat, which
// is unreadable much past a few words.
const proseSx = {
    fontSize: { xs: '1.05rem', md: '1.2rem' },
    lineHeight: 1.66,
    maxWidth: '62ch',
    opacity: 0.82,
    mb: 3
};

function HomePage() {
    return (
        <Box className="dc-home">
            <MotionHero />

            <QuickLinks />

            {/* === WHO WE ARE === */}
            <Box component="section" className="dc-band dc-band--chamber" aria-labelledby="dc-who">
                <Box className="dc-band__inner">
                    <BandLabel>Who we are</BandLabel>

                    <Box
                        component="h2"
                        id="dc-who"
                        className="dc-display"
                        sx={{
                            m: 0,
                            mb: { xs: 4, md: 5 },
                            fontSize: { xs: '1.95rem', md: 'clamp(2.2rem, 3.6vw, 3.2rem)' },
                            lineHeight: 1.04,
                            maxWidth: '24ch',
                            color: 'var(--dc-limewash)'
                        }}
                    >
                        A national body, built by the circuit it serves.
                    </Box>

                    <Box className="dc-serif" sx={{ ...proseSx, color: 'var(--dc-limewash)' }}>
                        The Debaters&rsquo; Council of Sri Lanka oversees English debating at secondary
                        and tertiary level. It was established in 2006 as a society by the debating
                        community, led by Nishantha de Silva, and registered as a company limited by
                        guarantee in 2009.
                    </Box>
                    <Box className="dc-serif" sx={{ ...proseSx, mb: 0, color: 'var(--dc-limewash)' }}>
                        Its remit runs the whole way from a school&rsquo;s first inter-house debate to
                        the team that represents Sri Lanka at the World Schools Debating Championship.
                    </Box>
                </Box>
            </Box>

            <RollingStats />

            {/* === WHAT WE DO === */}
            <Box component="section" className="dc-band dc-band--limewash" aria-labelledby="dc-what">
                <Box className="dc-band__inner">
                    <BandLabel accent="var(--dc-teak)">What we do</BandLabel>

                    <Box
                        component="h2"
                        id="dc-what"
                        className="dc-display"
                        sx={{
                            m: 0,
                            mb: { xs: 5, md: 7 },
                            fontSize: { xs: '1.95rem', md: 'clamp(2.2rem, 3.6vw, 3.2rem)' },
                            lineHeight: 1.04,
                            color: 'var(--dc-ink)'
                        }}
                    >
                        Three standing responsibilities.
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                            gap: { xs: 5, md: 4 }
                        }}
                    >
                        {PORTFOLIOS.map(({ key, title, body }) => (
                            <Box key={key} sx={{ borderTop: '1px solid rgba(122, 74, 43, 0.32)', pt: 2.5 }}>
                                <Box
                                    className="dc-mono"
                                    sx={{ fontSize: '0.66rem', color: 'var(--dc-teak)', mb: 2 }}
                                >
                                    {key}
                                </Box>
                                <Box
                                    className="dc-display"
                                    sx={{
                                        fontSize: { xs: '1.3rem', md: '1.42rem' },
                                        lineHeight: 1.16,
                                        color: 'var(--dc-ink)',
                                        mb: 1.5
                                    }}
                                >
                                    {title}
                                </Box>
                                <Box
                                    className="dc-serif"
                                    sx={{
                                        fontSize: '1.03rem',
                                        lineHeight: 1.6,
                                        color: 'var(--dc-ink)',
                                        opacity: 0.76
                                    }}
                                >
                                    {body}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Highlights />

            {/* === THE BOARD === */}
            <Box component="section" className="dc-band dc-band--chamber-deep" aria-labelledby="dc-board">
                <Box className="dc-band__inner">
                    <BandLabel>
                        <span>The board</span>
                        <span>Left to right</span>
                    </BandLabel>

                    <Box
                        component="h2"
                        id="dc-board"
                        sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}
                    >
                        The board
                    </Box>

                    {/* boardpic.png is a cutout matted on a dark background, so it
                        only sits cleanly on a dark ground — hence the deepest band
                        of the page. It stands on a hairline baseline rather than
                        floating in a rounded photo box. */}
                    <Box
                        component="img"
                        src={boardPic}
                        alt="The seven members of the Debaters’ Council board standing together."
                        loading="lazy"
                        sx={{
                            width: 'auto',
                            maxWidth: '100%',
                            maxHeight: { xs: '38vh', md: '52vh' },
                            objectFit: 'contain',
                            display: 'block',
                            mx: 'auto'
                        }}
                    />
                    <Box
                        aria-hidden="true"
                        sx={{
                            height: '1px',
                            backgroundColor: 'var(--dc-limewash)',
                            opacity: 0.28,
                            mb: 3
                        }}
                    />

                    <Box
                        component="ul"
                        sx={{
                            listStyle: 'none',
                            m: 0,
                            p: 0,
                            display: 'flex',
                            flexWrap: 'wrap',
                            columnGap: { xs: 3, md: 4 },
                            rowGap: 1.5
                        }}
                    >
                        {BOARD.map(({ name, role }) => (
                            <Box component="li" key={name}>
                                <Box
                                    className="dc-serif"
                                    sx={{
                                        fontSize: { xs: '0.95rem', md: '1.02rem' },
                                        color: 'var(--dc-limewash)',
                                        opacity: 0.9,
                                        lineHeight: 1.3
                                    }}
                                >
                                    {name}
                                </Box>
                                {role && (
                                    <Box
                                        className="dc-mono"
                                        sx={{ fontSize: '0.58rem', color: 'var(--dc-red)', mt: 0.4 }}
                                    >
                                        {role}
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;
