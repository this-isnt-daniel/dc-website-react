import React, { useRef, useEffect, useState, startTransition } from "react";
import { useInView } from "framer-motion";
import { Box, Typography } from "@mui/material";

// Default props values that were previously controls
const DEFAULT_PROPS = {
    slideWidth: 600, // Landscape 16:9 approx
    slideHeight: 340,
    perspective: 1200,
    depth: 200,
    spread: 350, // Increased spread for wider cards
    rotation: 15,
    borderRadius: 16,
    borderStyle: "none",
    borderThickness: 2,
    borderColor: "#FFFFFF",
    autoPlay: false,
    autoPlayInterval: 4000,
    transitionDuration: 0.8,
    navigationButtons: {
        show: true,
        position: "bottom-right",
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
    titleFont: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "24px",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        lineHeight: "1.2em"
    },
    titleColor: "#FFFFFF",
    subtitleFont: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "3px",
        lineHeight: "1em"
    },
    subtitleColor: "#8B0000"
};

const TEAM_MEMBERS = {
    // Example data - replace with actual team members
    "2024": ["Member Name 1", "Member Name 2", "Coach Name", "Manager Name"],
    "2023": ["Member A", "Member B", "Member C", "Member D"],
    "2022": ["Player X", "Player Y", "Player Z"],
    "2021": ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"]
};

// Border Beam Component
const BorderBeam = ({ size = 200, duration = 15, delay = 0, borderWidth = 1.5, colorFrom = "#8B0000", colorTo = "#000000" }) => {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            border: `${borderWidth}px solid transparent`,
            pointerEvents: 'none',
            zIndex: 0,
        }}>

            <div style={{
                position: 'absolute',
                inset: `-${size}px`,
                background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} 60deg, transparent 180deg)`,
                animation: `border-beam-spin ${duration}s linear infinite`,
                opacity: 0.5,
                zIndex: -1,
                mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                maskComposite: 'exclude',
                WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                WebkitMaskComposite: 'xor',
                padding: borderWidth
            }} />
            <style>{`
                @keyframes border-beam-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
             `}</style>
        </div>
    );
};

export default function NationalTeamCarousel() {
    // Merge defaults
    const {
        slideWidth,
        slideHeight,
        perspective,
        depth,
        spread,
        rotation,
        borderRadius,
        borderStyle,
        borderThickness,
        borderColor,
        autoPlay,
        autoPlayInterval,
        transitionDuration,
        navigationButtons,
        titleFont,
        titleColor,
        subtitleFont,
        subtitleColor
    } = DEFAULT_PROPS;

    const [media, setMedia] = useState([]);

    useEffect(() => {
        // Dynamically load images
        const modules = import.meta.glob('../assets/team/*.{png,jpg,jpeg,svg}', { eager: true });
        const loadedImages = Object.entries(modules).map(([path, mod]) => {
            const filename = path.split('/').pop().split('.')[0]; // e.g. "2024"
            const members = TEAM_MEMBERS[filename] || ["Member 1", "Member 2", "Member 3", "Member 4"];
            return {
                type: "image",
                imageSource: "url",
                imageUrl: mod.default,
                title: `Team ${filename}`,
                subtitle: "National Team",
                members: members
            };
        });
        // Sort safely
        loadedImages.sort((a, b) => {
            const yearA = parseInt(a.title.replace('Team ', '')) || 0;
            const yearB = parseInt(b.title.replace('Team ', '')) || 0;
            return yearB - yearA; // Newest first
        });
        setMedia(loadedImages);
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const timerRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });

    const nextSlide = () => {
        startTransition(() => {
            setActiveIndex(prev => (prev + 1) % (media.length || 1));
        });
    };

    const prevSlide = () => {
        startTransition(() => {
            setActiveIndex(prev => (prev - 1 + (media.length || 1)) % (media.length || 1));
        });
    };

    useEffect(() => {
        if (autoPlay && !isDragging && media.length > 0) {
            timerRef.current = window.setInterval(nextSlide, autoPlayInterval);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [autoPlay, autoPlayInterval, isDragging, media.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                prevSlide();
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                nextSlide();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [media.length, activeIndex]);

    const handlePointerDown = e => {
        dragStartX.current = e.clientX;
        startTransition(() => {
            setIsDragging(true);
        });
    };

    const handlePointerUp = e => {
        if (!isDragging) return;
        const diff = e.clientX - dragStartX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) prevSlide();
            else nextSlide();
        }
        startTransition(() => {
            setIsDragging(false);
        });
    };

    const getSlideStyle = index => {
        const total = media.length;
        if (total === 0) return {};
        let relPos = index - activeIndex;
        if (relPos > total / 2) relPos -= total;
        if (relPos < -total / 2) relPos += total;
        const absPos = Math.abs(relPos);
        const isActive = relPos === 0;
        const xOffset = relPos * spread;
        const zOffset = absPos * -depth;
        const yRotation = relPos * -rotation;
        const scale = 1 - absPos * 0.15;
        const opacity = Math.max(0, 1 - absPos * 0.4);
        const blur = absPos * 4;

        return {
            position: "absolute",
            width: slideWidth,
            height: slideHeight,
            left: "50%",
            top: "50%",
            transform: `translate3d(calc(-50% + ${xOffset}px), -50%, ${zOffset}px) rotateY(${yRotation}deg) scale(${scale})`,
            zIndex: 100 - absPos,
            opacity: opacity,
            filter: `blur(${blur}px)`,
            borderRadius: borderRadius,
            border: borderStyle !== "none" ? `${borderThickness}px ${borderStyle} ${borderColor}` : "none",
            transition: `all ${transitionDuration}s cubic-bezier(0.23, 1, 0.32, 1)`,
            cursor: isActive ? "grab" : "pointer",
            userSelect: "none",
            pointerEvents: absPos > 1 ? "none" : "auto",
            boxShadow: isActive ? `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)` : `0 20px 40px rgba(0,0,0,0.3)`,
            overflow: "hidden",
            backgroundColor: "transparent"
        };
    };

    // Calculate glow position based on active slide
    const glowXOffset = (() => {
        const total = media.length;
        if (total === 0) return 0;
        // Calculate the relative position for parallax effect
        // Safe check for total-1 to avoid division by zero
        const normalizedPosition = activeIndex / Math.max(total - 1, 1) - 0.5;
        return normalizedPosition * spread * 0.6;
    })();

    if (media.length === 0) return null;

    // Get current team members
    const currentTeam = media[activeIndex];
    const currentMembers = currentTeam ? currentTeam.members : [];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '90vh', // Increased height to accommodate bottom section
            width: '100%',
            maxWidth: '1600px',
            margin: '0 auto',
            position: 'relative',
            gap: '20px'
        }}>
            {/* Top Section: Carousel + Sidebar */}
            <div style={{
                display: 'flex',
                flex: 1, // Takes up remaining space (approx 70-80%)
                width: '100%',
                position: 'relative',
                minHeight: '0' // Fix flex child overflow
            }}>
                {/* Carousel Container */}
                <div
                    ref={containerRef}
                    style={{
                        flex: 1,
                        height: '100%',
                        backgroundColor: "transparent",
                        perspective: `${perspective}px`,
                        overflow: "hidden",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        touchAction: "none"
                    }}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    tabIndex={0}
                >
                    {/* Background Glow */}
                    <div style={{
                        position: "absolute",
                        width: "60%",
                        height: "60%",
                        background: `radial-gradient(circle, rgba(139, 0, 0, 0.15) 0%, transparent 70%)`,
                        filter: "blur(60px)",
                        pointerEvents: "none",
                        transform: `translateX(${glowXOffset}px)`,
                        transition: `transform ${transitionDuration}s cubic-bezier(0.23, 1, 0.32, 1)`
                    }} />

                    {media.map((item, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <div
                                key={idx}
                                style={getSlideStyle(idx)}
                                onClick={() => !isActive && startTransition(() => setActiveIndex(idx))}
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.title || ""}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                />
                            </div>
                        );
                    })}

                    {/* Navigation Buttons */}
                    {navigationButtons.show && (
                        <div style={{
                            position: "absolute",
                            ...navigationButtons.position === "top-right" && { top: `${navigationButtons.offset}px`, right: `${navigationButtons.offset}px` },
                            ...navigationButtons.position === "top-left" && { top: `${navigationButtons.offset}px`, left: `${navigationButtons.offset}px` },
                            ...navigationButtons.position === "bottom-right" && { bottom: `${navigationButtons.offset}px`, right: `${navigationButtons.offset}px` },
                            ...navigationButtons.position === "bottom-left" && { bottom: `${navigationButtons.offset}px`, left: `${navigationButtons.offset}px` },
                            display: "flex",
                            gap: `${navigationButtons.gap}px`,
                            zIndex: 300
                        }}>
                            <button
                                onClick={e => { e.stopPropagation(); prevSlide(); }}
                                style={{
                                    width: `${navigationButtons.size}px`,
                                    height: `${navigationButtons.size}px`,
                                    borderRadius: "50%",
                                    border: `${navigationButtons.borderWidth}px solid ${navigationButtons.borderColor}`,
                                    backgroundColor: navigationButtons.backgroundColor,
                                    backdropFilter: "blur(20px)",
                                    WebkitBackdropFilter: "blur(20px)",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                    color: navigationButtons.iconColor,
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                    outline: "none"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = navigationButtons.hoverColor;
                                    e.currentTarget.style.transform = "scale(1.15) translateY(-2px)";
                                    e.currentTarget.style.boxShadow = `0 12px 40px ${navigationButtons.hoverColor}40, 0 0 0 4px ${navigationButtons.hoverColor}20, inset 0 1px 0 rgba(255, 255, 255, 0.2)`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = navigationButtons.backgroundColor;
                                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
                                }}
                                onMouseDown={e => { e.currentTarget.style.transform = "scale(1.05) translateY(0)"; }}
                                onMouseUp={e => { e.currentTarget.style.transform = "scale(1.15) translateY(-2px)"; }}
                                aria-label="Previous slide"
                            >
                                <svg width={navigationButtons.iconSize} height={navigationButtons.iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={e => { e.stopPropagation(); nextSlide(); }}
                                style={{
                                    width: `${navigationButtons.size}px`,
                                    height: `${navigationButtons.size}px`,
                                    borderRadius: "50%",
                                    border: `${navigationButtons.borderWidth}px solid ${navigationButtons.borderColor}`,
                                    backgroundColor: navigationButtons.backgroundColor,
                                    backdropFilter: "blur(20px)",
                                    WebkitBackdropFilter: "blur(20px)",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                    color: navigationButtons.iconColor,
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                    outline: "none"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = navigationButtons.hoverColor;
                                    e.currentTarget.style.transform = "scale(1.15) translateY(-2px)";
                                    e.currentTarget.style.boxShadow = `0 12px 40px ${navigationButtons.hoverColor}40, 0 0 0 4px ${navigationButtons.hoverColor}20, inset 0 1px 0 rgba(255, 255, 255, 0.2)`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = navigationButtons.backgroundColor;
                                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
                                }}
                                onMouseDown={e => { e.currentTarget.style.transform = "scale(1.05) translateY(0)"; }}
                                onMouseUp={e => { e.currentTarget.style.transform = "scale(1.15) translateY(-2px)"; }}
                                aria-label="Next slide"
                            >
                                <svg width={navigationButtons.iconSize} height={navigationButtons.iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Vertical Sidebar Navigation */}
                <div style={{
                    width: '120px',
                    height: '100%',
                    position: 'relative',
                    zIndex: 200,
                    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                    perspective: '1000px',
                    overflow: 'hidden',
                    background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {media.map((item, idx) => {
                            const total = media.length;
                            let relPos = idx - activeIndex;
                            if (relPos > total / 2) relPos -= total;
                            if (relPos < -total / 2) relPos += total;
                            const absPos = Math.abs(relPos);
                            const isActive = relPos === 0;

                            // Sidebar specific 3D props
                            const ySpread = 60;
                            const yOffset = relPos * ySpread;
                            const zOffset = absPos * -50;
                            const xRotation = relPos * 20;
                            const scale = 1 - absPos * 0.2;
                            const opacity = Math.max(0, 1 - absPos * 0.3);

                            if (opacity <= 0) return null;

                            return (
                                <div
                                    key={idx}
                                    onClick={() => startTransition(() => setActiveIndex(idx))}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '100%',
                                        height: '50px',
                                        transform: `translate3d(-50%, calc(-50% + ${yOffset}px), ${zOffset}px) rotateX(${-xRotation}deg) scale(${scale})`,
                                        zIndex: 100 - absPos,
                                        opacity: opacity,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                        pointerEvents: absPos > 2 ? 'none' : 'auto',
                                    }}
                                >
                                    <span style={{
                                        color: isActive ? '#8B0000' : '#888',
                                        fontWeight: isActive ? 800 : 500,
                                        fontSize: isActive ? '24px' : '16px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        textShadow: isActive ? '0 0 20px rgba(139, 0, 0, 0.5)' : 'none',
                                        letterSpacing: '1px'
                                    }}>
                                        {item.title.replace('Team ', '')}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>



            {/* Member List Section - Below Carousel */}
            <div style={{
                width: '100%',
                maxWidth: '900px', // Smaller width
                margin: '0 auto', // Centered
                padding: '32px 48px',
                background: 'rgba(5, 5, 5, 0.6)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px', // Rounded corners
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                minHeight: '120px',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden', // Contain the beam
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}>
                <BorderBeam size={200} duration={8} delay={0} borderWidth={1.5} colorFrom="#8B0000" colorTo="#000000" />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '16px',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        paddingBottom: '12px',
                        marginBottom: '12px'
                    }}>
                        <Typography variant="h4" sx={{
                            color: '#FFFFFF',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 700,
                            letterSpacing: '-1px'
                        }}>
                            {currentTeam?.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{
                            color: '#8B0000',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem'
                        }}>
                            Team Members
                        </Typography>
                    </div>

                    <Typography sx={{
                        color: '#E0E0E0',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        lineHeight: '1.8',
                        letterSpacing: '0.01em',
                        textAlign: 'left'
                    }}>
                        {currentMembers.join(' • ')}
                    </Typography>
                </div>
            </div>
        </div>

    );
}
