import React from 'react';
import Box from '@mui/material/Box';

// The one structural device the page repeats: a hairline rule with a mono label
// sitting on it, the way an item of business is headed on an order paper. It
// encodes what the band is, so it earns its place; it is not a decorative
// eyebrow. Colour comes from `currentColor`, so the same component reads
// correctly on the chamber, limewash and red grounds without a tone prop.
const BandLabel = ({ children, accent, sx = {} }) => {
    // A label can carry more than one field ("The record", "2025"). Separate them
    // properly, or they run together into one unreadable string.
    const parts = React.Children.toArray(children);

    return (
        <Box sx={{ mb: { xs: 4, md: 6 }, ...sx }}>
            <Box
                aria-hidden="true"
                sx={{
                    height: '1px',
                    width: '100%',
                    backgroundColor: 'currentColor',
                    opacity: 0.22,
                    mb: 1.5
                }}
            />
            <Box
                className="dc-mono"
                sx={{
                    fontSize: { xs: '0.66rem', md: '0.72rem' },
                    color: accent || 'currentColor',
                    opacity: accent ? 1 : 0.68,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    gap: '0.7em'
                }}
            >
                {parts.map((part, i) => (
                    <React.Fragment key={i}>
                        {i > 0 && (
                            <Box component="span" aria-hidden="true" sx={{ opacity: 0.5 }}>
                                &middot;
                            </Box>
                        )}
                        {part}
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
};

export default BandLabel;
