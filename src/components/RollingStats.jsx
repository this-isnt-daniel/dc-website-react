import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Box, Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';

const stats = [
    {
        icon: <EmojiEventsIcon sx={{ fontSize: 50, color: '#8B0000' }} />,
        value: 50,
        label: "Tournaments hosted",
        suffix: "+"
    },
    {
        icon: <GroupsIcon sx={{ fontSize: 50, color: '#8B0000' }} />,
        value: 5000,
        label: "Debaters Impacted",
        suffix: "+"
    },
    {
        icon: <SchoolIcon sx={{ fontSize: 50, color: '#8B0000' }} />,
        value: 100,
        label: "Schools Participating",
        suffix: "+"
    }
];

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
};

const RollingStats = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                minHeight: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 64px)' },
                py: { xs: 4, md: 10 },
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 6, md: 12 },
                    textAlign: "center",
                    maxWidth: "1200px",
                    width: "100%",
                    px: 4
                }}
            >
                {stats.map((stat, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 2,
                            flex: 1
                        }}
                    >
                        {stat.icon}
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 800,
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                color: "#FFFFFF",
                                lineHeight: 1
                            }}
                        >
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 500,
                                color: "#888888",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                fontSize: "1rem"
                            }}
                        >
                            {stat.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default RollingStats;
