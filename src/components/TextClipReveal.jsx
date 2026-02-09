
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Box from '@mui/material/Box';

const TextClipReveal = ({
    text = "",
    textColor = "inherit",
    backgroundColor = "transparent",
    revealDirection = "bottom",
    staggerDelay = 0.15,
    duration = 0.8,
    sx = {},
    font = {},
    ...props
}) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.3, once: false });

    const getAnim = (d) => {
        switch (d) {
            case "top": return { clipPath: "inset(100% 0% 0% 0%)", y: -40 };
            case "bottom": return { clipPath: "inset(0% 0% 100% 0%)", y: 40 };
            case "left": return { clipPath: "inset(0% 100% 0% 0%)", x: -40 };
            case "right": return { clipPath: "inset(0% 0% 0% 100%)", x: 40 };
            case "center": return { clipPath: "inset(50% 50% 50% 50%)", scale: 0.8 };
            default: return { clipPath: "inset(0% 0% 100% 0%)", y: 40 };
        }
    };

    // Split text by lines (preserving React nodes if passed, or just string split)
    // If text is a string, split it. If it's children/nodes, wrap them.
    // For this component acting as Typography replacement, we assume string input mostly.

    let lines = [];
    if (typeof text === 'string') {
        const splitText = text.split('\n'); // Manual line break support
        // But also we want it to wrap naturally? The framer component splits by newlines.
        // If we want natural wrapping animation, we'd need word splitting or just block animation.
        // The Framer component specifically splits by "\n". Let's stick to that for now or 
        // treat the whole block as one if no newlines, OR split by words if requested.
        // For simplicity and matching Framer:
        lines = splitText.filter(line => line.length > 0);
    } else {
        // Fallback or specific handling if we pass components
        lines = [text];
    }

    return (
        <Box
            component={motion.div}
            ref={containerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: { transition: { staggerChildren: staggerDelay } },
                hidden: {}
            }}
            sx={{
                ...font,
                ...sx,
                color: textColor,
                backgroundColor: backgroundColor,
                // display: 'flex', // This might break text flow if not careful. 
                // Framer component sets width/height 100%. 
                // We want it to behave like a Typography block.
                display: 'block',
            }}
            {...props}
        >
            {lines.map((line, i) => (
                <Box
                    key={i}
                    component={motion.div}
                    variants={{
                        hidden: getAnim(revealDirection),
                        visible: {
                            clipPath: "inset(0% 0% 0% 0%)",
                            y: 0,
                            x: 0,
                            scale: 1,
                            transition: {
                                duration: duration,
                                ease: [0.2, 0.65, 0.3, 0.9]
                            }
                        }
                    }}
                    sx={{
                        display: 'block', // Ensure lines break
                        // If we want lines to flow naturally we might need span and inline-block but
                        // the framer example implies distinct visual lines or blocks.
                        // Using block for now.
                    }}
                >
                    {line}
                </Box>
            ))}
        </Box>
    );
};

export default TextClipReveal;
