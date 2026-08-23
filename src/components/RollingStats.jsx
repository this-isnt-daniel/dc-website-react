import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Box from "@mui/material/Box";
import BandLabel from "./BandLabel";

// The year's tally, on the one red band in the page — this is the single place
// where the brand red is the ground rather than the mark.
//
// Deliberately not three centred icon-cards: a count of the year's work is a
// tally, so the figures sit baseline-aligned in one row divided by hairlines,
// with the year in the band label rather than floating at the bottom. The band
// is also a band and not a full screen; the old page stacked six 100vh sections.
const TALLY = [
    { value: 15, suffix: "+", label: "Tournaments hosted" },
    { value: 300, suffix: "+", label: "Debaters reached" },
    { value: 40, suffix: "+", label: "Schools participating" }
];

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        // With reduced motion the figure is simply printed, no count-up.
        if (reduce) {
            if (ref.current) ref.current.textContent = value + suffix;
            return;
        }
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix, reduce, value]);

    // The final value is in the DOM for assistive tech and for the no-JS case,
    // while the visible node is driven by the spring.
    return (
        <>
            <span aria-hidden="true" ref={ref}>0{suffix}</span>
            <Box component="span" sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                {value}{suffix}
            </Box>
        </>
    );
};

const RollingStats = () => (
    <Box component="section" className="dc-band dc-band--red dc-band--tight" aria-labelledby="dc-tally">
        <Box className="dc-band__inner">
            <BandLabel sx={{ mb: { xs: 3, md: 4 } }}>
                <span>The record</span>
                <span>2025</span>
            </BandLabel>

            <Box component="h2" id="dc-tally" sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                The record for 2025
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                    alignItems: 'end'
                }}
            >
                {TALLY.map(({ value, suffix, label }, i) => (
                    <Box
                        key={label}
                        sx={{
                            // Hairlines divide the tally, but only between items —
                            // horizontal rules on mobile where the row becomes a
                            // column, vertical on wider screens.
                            pt: { xs: i === 0 ? 0 : 3, sm: 0 },
                            pb: { xs: 3, sm: 0 },
                            borderTop: { xs: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.32)', sm: 'none' },
                            borderLeft: { xs: 'none', sm: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.32)' },
                            pl: { sm: i === 0 ? 0 : 4 },
                            pr: { sm: 3 }
                        }}
                    >
                        <Box
                            className="dc-display"
                            sx={{
                                fontSize: { xs: '3.6rem', md: 'clamp(3.8rem, 6vw, 5.6rem)' },
                                lineHeight: 0.9,
                                color: '#FFFFFF',
                                fontVariantNumeric: 'tabular-nums',
                                mb: 1.5
                            }}
                        >
                            <Counter value={value} suffix={suffix} />
                        </Box>
                        <Box
                            className="dc-mono"
                            sx={{
                                fontSize: { xs: '0.64rem', md: '0.7rem' },
                                color: '#FFFFFF',
                                opacity: 0.78
                            }}
                        >
                            {label}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    </Box>
);

export default RollingStats;
