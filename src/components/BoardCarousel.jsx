import React, { useRef, useEffect, useState, startTransition } from "react";
import { useInView } from "framer-motion";
import { Box, Typography } from "@mui/material";

const DEFAULT_PROPS = {
    perspective: 1200,
    depth: 200,
    spread: 350,
    rotation: 15,
    borderRadius: 16,
    transitionDuration: 0.8,
    navigationButtons: {
        show: true,
        offset: 40,
        gap: 16,
        size: 56,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.15)",
        borderWidth: 1,
        iconColor: "#FFFFFF",
        iconSize: 24,
        hoverColor: "#8B0000"
    },
};

const P = "Placeholder Name";

const BOARD_DATA = {
    "2026": {
        tenure: "2026/01 - 2026/12",
        members: [
            { name: P, designation: "President" },
            { name: P, designation: "Vice President" },
            { name: P, designation: "Secretary" },
            { name: P, designation: "Treasurer" },
            { name: P, designation: "Tournament Director" },
            { name: P, designation: "Training Director" },
            { name: P, designation: "Public Relations Officer" },
            { name: P, designation: "IT Officer" },
        ],
    },
    "2025": {
        tenure: "2025/01 - 2025/12",
        members: [
            { name: P, designation: "President" },
            { name: P, designation: "Vice President" },
            { name: P, designation: "Secretary" },
            { name: P, designation: "Treasurer" },
            { name: P, designation: "Tournament Director" },
            { name: P, designation: "Training Director" },
            { name: P, designation: "Public Relations Officer" },
        ],
    },
    "2024": {
        tenure: "2024/01 - 2024/12",
        members: [
            { name: P, designation: "President" },
            { name: P, designation: "Vice President" },
            { name: P, designation: "Secretary" },
            { name: P, designation: "Treasurer" },
            { name: P, designation: "Tournament Director" },
            { name: P, designation: "Training Officer" },
            { name: P, designation: "Public Relations Officer" },
        ],
    },
    "2023": {
        tenure: "2023/01 - 2023/12",
        members: [
            { name: P, designation: "President" },
            { name: P, designation: "Secretary" },
            { name: P, designation: "Treasurer" },
            { name: P, designation: "Tournament Director" },
            { name: P, designation: "Training Officer" },
            { name: P, designation: "Public Relations Officer" },
        ],
    },
    "2019": {
        tenure: "2019/01 - 2019/12",
        members: [
            { name: P, designation: "President" },
            { name: P, designation: "Secretary" },
            { name: P, designation: "Treasurer" },
            { name: P, designation: "Tournament Director" },
            { name: P, designation: "Training Officer" },
        ],
    },
    "2018": {
        tenure: "2018/01 - 2018/12",
        members: [
            { name: P, designation: "President" },
            { name: P, designation: "Secretary" },
            { name: P, designation: "Treasurer" },
            { name: P, designation: "Tournament Director" },
            { name: P, designation: "Training Officer" },
        ],
    },
};

const BorderBeam = ({ size = 200, duration = 15, borderWidth = 1.5, colorFrom = "#8B0000", colorTo = "#000000" }) => (
    <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        border: `${borderWidth}px solid transparent`, pointerEvents: 'none', zIndex: 0,
    }}>
        <div style={{
            position: 'absolute', inset: `-${size}px`,
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} 60deg, transparent 180deg)`,
            animation: `border-beam-spin ${duration}s linear infinite`,
            opacity: 0.5, zIndex: -1,
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: 'exclude',
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'xor',
            padding: borderWidth,
        }} />
        <style>{`@keyframes border-beam-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
);

export default function BoardCarousel() {
    const { perspective, depth, rotation, borderRadius, transitionDuration, navigationButtons } = DEFAULT_PROPS;

    const [media, setMedia] = useState([]);

    useEffect(() => {
        const modules = import.meta.glob('../assets/boards/*.{png,jpg,jpeg}', { eager: true });
        const loaded = Object.entries(modules).map(([path, mod]) => {
            const year = path.split('/').pop().split('.')[0];
            const data = BOARD_DATA[year] || { tenure: `${year}/01 - ${year}/12`, members: PLACEHOLDER_MEMBERS };
            return {
                imageUrl: mod.default,
                year,
                tenure: data.tenure,
                members: data.members,
            };
        });
        loaded.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        setMedia(loaded);
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const timerRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });

    const nextSlide = () => startTransition(() => setActiveIndex(prev => (prev + 1) % (media.length || 1)));
    const prevSlide = () => startTransition(() => setActiveIndex(prev => (prev - 1 + (media.length || 1)) % (media.length || 1)));

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const handleKeyDown = e => {
            if (e.key === "ArrowLeft") { e.preventDefault(); prevSlide(); }
            else if (e.key === "ArrowRight") { e.preventDefault(); nextSlide(); }
        };
        el.addEventListener("keydown", handleKeyDown);
        return () => el.removeEventListener("keydown", handleKeyDown);
    }, [media.length]);

    const handlePointerDown = e => { dragStartX.current = e.clientX; startTransition(() => setIsDragging(true)); };
    const handlePointerUp = e => {
        if (!isDragging) return;
        const diff = e.clientX - dragStartX.current;
        if (Math.abs(diff) > 50) { diff > 0 ? prevSlide() : nextSlide(); }
        startTransition(() => setIsDragging(false));
    };

    const getSlideStyle = index => {
        const total = media.length;
        if (total === 0) return {};
        let relPos = index - activeIndex;
        if (relPos > total / 2) relPos -= total;
        if (relPos < -total / 2) relPos += total;
        const absPos = Math.abs(relPos);
        const isActive = relPos === 0;
        const spreadVal = "min(45vw, 350px)";
        return {
            position: "absolute",
            width: "min(75vw, 680px)",
            aspectRatio: "16/9",
            left: "50%",
            top: "50%",
            transform: `translate3d(calc(-50% + ${relPos} * ${spreadVal}), -50%, ${absPos * -depth}px) rotateY(${relPos * -rotation}deg) scale(${1 - absPos * 0.15})`,
            zIndex: 100 - absPos,
            opacity: Math.max(0, 1 - absPos * 0.4),
            filter: `blur(${absPos * 4}px)`,
            borderRadius,
            transition: `all ${transitionDuration}s cubic-bezier(0.23, 1, 0.32, 1)`,
            cursor: isActive ? "grab" : "pointer",
            userSelect: "none",
            pointerEvents: absPos > 1 ? "none" : "auto",
            boxShadow: isActive
                ? `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)`
                : `0 20px 40px rgba(0,0,0,0.3)`,
            overflow: "hidden",
            backgroundColor: "transparent",
        };
    };

    const glowXOffset = (() => {
        const total = media.length;
        if (total === 0) return "0px";
        const normalizedPosition = activeIndex / Math.max(total - 1, 1) - 0.5;
        return `calc(${normalizedPosition} * min(27vw, 210px))`;
    })();

    if (media.length === 0) return null;

    const current = media[activeIndex];

    const navBtnBase = {
        width: `clamp(36px, 8vw, ${navigationButtons.size}px)`,
        height: `clamp(36px, 8vw, ${navigationButtons.size}px)`,
        borderRadius: "50%",
        border: `${navigationButtons.borderWidth}px solid ${navigationButtons.borderColor}`,
        backgroundColor: navigationButtons.backgroundColor,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        cursor: "pointer",
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        color: navigationButtons.iconColor,
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        outline: "none",
    };

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column',
            width: '100%', maxWidth: '1600px',
            margin: '0 auto', position: 'relative',
            gap: { xs: '16px', md: '12px' },
            padding: { xs: '0 0 40px', md: '16px 0 24px' },
            height: { xs: 'auto', md: 'calc(100vh - var(--header-height-desktop) - 32px)' },
            boxSizing: 'border-box',
        }}>
            {/* Carousel */}
            <div style={{ display: 'flex', flex: 1, minHeight: 0, width: '100%', position: 'relative', height: 'clamp(220px, 55vw, 380px)' }}>
                <div
                    ref={containerRef}
                    style={{
                        flex: 1, height: '100%', backgroundColor: "transparent",
                        perspective: `${perspective}px`, overflow: "hidden", position: "relative",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        touchAction: "none",
                    }}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    tabIndex={0}
                >
                    <div style={{
                        position: "absolute", width: "60%", height: "60%",
                        background: `radial-gradient(circle, rgba(139,0,0,0.15) 0%, transparent 70%)`,
                        filter: "blur(60px)", pointerEvents: "none",
                        transform: `translateX(${glowXOffset})`,
                        transition: `transform ${transitionDuration}s cubic-bezier(0.23,1,0.32,1)`,
                    }} />

                    {media.map((item, idx) => (
                        <div
                            key={idx}
                            style={getSlideStyle(idx)}
                            onClick={() => idx !== activeIndex && startTransition(() => setActiveIndex(idx))}
                        >
                            <img src={item.imageUrl} alt={`Board ${item.year}`}
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                    ))}

                    {navigationButtons.show && (
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            position: "absolute", top: "50%", left: 0, right: 0,
                            transform: "translateY(-50%)", justifyContent: "space-between",
                            padding: `0 clamp(10px, 4vw, ${navigationButtons.offset}px)`,
                            zIndex: 300, pointerEvents: "none",
                        }}>
                            <button style={navBtnBase} onClick={e => { e.stopPropagation(); prevSlide(); }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = navigationButtons.hoverColor; e.currentTarget.style.transform = "scale(1.15) translateY(-2px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = navigationButtons.backgroundColor; e.currentTarget.style.transform = "scale(1) translateY(0)"; }}
                                aria-label="Previous board">
                                <svg width={navigationButtons.iconSize} height={navigationButtons.iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button style={navBtnBase} onClick={e => { e.stopPropagation(); nextSlide(); }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = navigationButtons.hoverColor; e.currentTarget.style.transform = "scale(1.15) translateY(-2px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = navigationButtons.backgroundColor; e.currentTarget.style.transform = "scale(1) translateY(0)"; }}
                                aria-label="Next board">
                                <svg width={navigationButtons.iconSize} height={navigationButtons.iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </Box>
                    )}
                </div>
            </div>

            {/* Info Panel */}
            <Box sx={{
                width: 'min(90%, 1000px)', margin: '0 auto',
                zIndex: 10,
                padding: { xs: '14px 20px', md: '12px 24px' },
                background: 'rgba(5,5,5,0.6)', backdropFilter: 'blur(20px)',
                borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex', flexDirection: 'column', gap: '10px',
                transition: 'all 0.4s ease', position: 'relative', overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}>
                <BorderBeam size={200} duration={8} borderWidth={1.5} colorFrom="#8B0000" colorTo="#000000" />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Header row: year + tenure */}
                    <Box sx={{
                        display: 'flex', alignItems: 'baseline', gap: '12px',
                        flexWrap: 'wrap',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        paddingBottom: '8px', marginBottom: '10px',
                    }}>
                        <Typography sx={{
                            color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 700, letterSpacing: '-0.5px',
                            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                        }}>
                            Board of {current?.year}
                        </Typography>
                        <Typography sx={{
                            color: '#8B0000', fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600, letterSpacing: '2px',
                            fontSize: 'clamp(0.65rem, 1.5vw, 0.78rem)',
                            textTransform: 'uppercase',
                        }}>
                            {current?.tenure}
                        </Typography>
                    </Box>

                    {/* Member grid */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            sm: 'repeat(3, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: '8px',
                    }}>
                        {current?.members.map((member, i) => (
                            <Box key={i} sx={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.07)',
                                borderRadius: '8px',
                                padding: '7px 12px',
                                transition: 'background 0.2s',
                                '&:hover': { background: 'rgba(139,0,0,0.12)' },
                            }}>
                                <Typography sx={{
                                    color: '#8B0000', fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 700, letterSpacing: '1.5px',
                                    fontSize: '0.6rem',
                                    textTransform: 'uppercase', marginBottom: '2px',
                                }}>
                                    {member.designation}
                                </Typography>
                                <Typography sx={{
                                    color: '#DCDCDC', fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 600,
                                    fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                                    lineHeight: 1.3,
                                }}>
                                    {member.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </div>
            </Box>
        </Box>
    );
}
