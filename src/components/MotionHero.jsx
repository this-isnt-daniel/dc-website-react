import React from 'react';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

// The signature element.
//
// Every debate begins with a motion, so the page begins with one. The Council's
// claim about itself — that it holds Sri Lankan school and university debating
// to a world standard — is stated in the vernacular of the thing it governs,
// and stamped CARRIED with the year the House decided it. That is the whole
// hero: no image, no gradient, no scroll cue. The boldness of the page is spent
// here and nowhere else.

// Broken by phrase, not by measure: every line is a coherent clause, the way a
// motion is actually read out.
const MOTION_LINES = [
    'hold English debating',
    'in Sri Lanka',
    'to a world standard.'
];

const MotionHero = () => {
    const reduce = useReducedMotion();

    // With reduced motion the sequence collapses to a plain fade, and the stamp
    // arrives without the scale-and-rotate thump.
    const rise = reduce
        ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
        : {
            hidden: { opacity: 0, y: 28, clipPath: 'inset(0% 0% 100% 0%)' },
            visible: {
                opacity: 1,
                y: 0,
                clipPath: 'inset(0% 0% -10% 0%)',
                transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
            }
        };

    const stamp = reduce
        ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
        : {
            hidden: { opacity: 0, scale: 1.55, rotate: -15 },
            visible: {
                opacity: 1,
                scale: 1,
                rotate: -6,
                transition: { duration: 0.42, ease: [0.34, 1.4, 0.64, 1] }
            }
        };

    return (
        <Box
            component="section"
            className="dc-band dc-band--chamber dc-hero"
            aria-labelledby="dc-motion"
        >
            <Box
                className="dc-band__inner dc-hero__inner"
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: reduce ? 0.06 : 0.13 } } }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        rowGap: { xs: 5, md: 0 }
                    }}
                >
                    {/* The motion */}
                    <Box>
                        <Box
                            component={motion.div}
                            variants={rise}
                            className="dc-mono"
                            sx={{
                                color: 'var(--dc-red)',
                                fontSize: { xs: '0.7rem', md: '0.78rem' },
                                fontWeight: 600,
                                mb: { xs: 2.5, md: 3 }
                            }}
                        >
                            This House would
                        </Box>

                        <Box
                            component="h1"
                            id="dc-motion"
                            className="dc-display"
                            sx={{
                                m: 0,
                                fontSize: { xs: '1.8rem', sm: '3.1rem', md: 'clamp(3.6rem, 6.6vw, 6.1rem)' },
                                letterSpacing: { xs: '-0.035em', md: '-0.015em' },
                                lineHeight: { xs: 1.04, md: 0.98 },
                                color: 'var(--dc-limewash)'
                            }}
                        >
                            {/* Each line is its own block so the clip reveal has a
                                box to clip — an inline span would not accept the
                                clip-path or the transform at all. */}
                            {MOTION_LINES.map((line) => (
                                <Box
                                    key={line}
                                    component={motion.span}
                                    variants={rise}
                                    sx={{ display: 'block' }}
                                >
                                    {line}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* The stamp */}
                    <Box
                        component={motion.div}
                        variants={stamp}
                        aria-hidden="true"
                        sx={{
                            // On desktop the stamp sits at the foot of the band,
                            // opposite the claim — where a stamp lands on a
                            // document, and clear of the motion's own measure.
                            justifySelf: 'start',
                            position: { md: 'absolute' },
                            bottom: { md: 0 },
                            right: { md: 0 },
                            border: '2px solid var(--dc-red)',
                            outline: '1px solid var(--dc-red)',
                            outlineOffset: '4px',
                            color: 'var(--dc-red)',
                            px: { xs: 2.5, md: 3.5 },
                            py: { xs: 1.5, md: 2 },
                            textAlign: 'center',
                            transformOrigin: 'center',
                            // Rotation lives in the variant so it survives the
                            // animation; this is only the reduced-motion resting
                            // state, which framer writes over on load.
                            transform: 'rotate(-6deg)',
                            opacity: 0.92
                        }}
                    >
                        <Box
                            className="dc-display"
                            sx={{
                                fontSize: { xs: '1.5rem', md: '1.9rem' },
                                lineHeight: 1,
                                letterSpacing: '0.06em'
                            }}
                        >
                            CARRIED
                        </Box>
                        <Box
                            aria-hidden="true"
                            sx={{
                                height: '1px',
                                backgroundColor: 'currentColor',
                                opacity: 0.55,
                                my: 0.9
                            }}
                        />
                        <Box
                            className="dc-mono"
                            sx={{ fontSize: { xs: '0.72rem', md: '0.8rem' }, letterSpacing: '0.3em', pl: '0.3em' }}
                        >
                            2006
                        </Box>
                    </Box>
                </Box>

                {/* The claim, in plain words, for anyone who does not read motions */}
                <Box component={motion.div} variants={rise} sx={{ mt: { xs: 6, md: 9 }, maxWidth: '54ch' }}>
                    <Box
                        aria-hidden="true"
                        sx={{ height: '1px', backgroundColor: 'var(--dc-limewash)', opacity: 0.18, mb: 3 }}
                    />
                    <Box
                        className="dc-serif"
                        sx={{
                            fontSize: { xs: '1.05rem', md: '1.22rem' },
                            lineHeight: 1.62,
                            color: 'var(--dc-limewash)',
                            opacity: 0.82,
                            mb: 2.5
                        }}
                    >
                        The Debaters&rsquo; Council is the national body for English debating in
                        Sri Lankan schools and universities.
                    </Box>
                    <Box
                        className="dc-mono"
                        sx={{
                            fontSize: { xs: '0.64rem', md: '0.7rem' },
                            color: 'var(--dc-limewash)',
                            opacity: 0.6
                        }}
                    >
                        Founded 2006 &middot; Registered 2009
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MotionHero;
