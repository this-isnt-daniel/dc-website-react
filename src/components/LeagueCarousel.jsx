import React, { useRef, useEffect, useState, startTransition } from "react";
import { useInView } from "framer-motion";
import { Box, Typography } from "@mui/material";

// Default props values
const DEFAULT_PROPS = {
    slideWidth: 600,
    slideHeight: 340,
    perspective: 1200,
    depth: 200,
    spread: 350,
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
        size: 56,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.15)",
        borderWidth: 1,
        iconColor: "#FFFFFF",
        iconSize: 24,
        hoverColor: "#8B0000"
    }
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

export default function LeagueCarousel() {
    const {
        perspective,
        depth,
        rotation,
        borderRadius,
        borderStyle,
        borderThickness,
        borderColor,
        autoPlay,
        autoPlayInterval,
        transitionDuration,
        navigationButtons
    } = DEFAULT_PROPS;

    const [media, setMedia] = useState([]);

    useEffect(() => {
        // Dynamically load images from league folder
        const modules = import.meta.glob('../assets/league/*.{png,jpg,jpeg,svg}', { eager: true });
        const loadedImages = Object.entries(modules).map(([path, mod]) => {
            const filename = path.split('/').pop().split('.')[0]; 
            return {
                type: "image",
                imageUrl: mod.default,
                title: `${filename} League Champions`,
                members: ["Champion School"]
            };
        });
        
        loadedImages.sort((a, b) => {
            const yearA = parseInt(a.title.split(' ')[0]) || 0;
            const yearB = parseInt(b.title.split(' ')[0]) || 0;
            return yearB - yearA; 
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
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [media.length, activeIndex]);

    const handlePointerDown = e => {
        dragStartX.current = e.clientX;
        startTransition(() => setIsDragging(true));
    };

    const handlePointerUp = e => {
        if (!isDragging) return;
        const diff = e.clientX - dragStartX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) prevSlide();
            else nextSlide();
        }
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
        const xOffset = `${relPos} * ${spreadVal}`;
        const zOffset = absPos * -depth;
        const yRotation = relPos * -rotation;
        const scale = 1 - absPos * 0.15;
        const opacity = Math.max(0, 1 - absPos * 0.4);
        const blur = absPos * 4;

        return {
            position: "absolute",
            width: "min(85vw, 800px)",
            aspectRatio: "16/9",
            left: "50%",
            top: "50%",
            transform: `translate3d(calc(-50% + ${xOffset}), -50%, ${zOffset}px) rotateY(${yRotation}deg) scale(${scale})`,
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

    const glowXOffset = (() => {
        const total = media.length;
        if (total === 0) return "0px";
        const normalizedPosition = activeIndex / Math.max(total - 1, 1) - 0.5;
        return `calc(${normalizedPosition} * min(27vw, 210px))`;
    })();

    if (media.length === 0) return null;

    const currentTeam = media[activeIndex];

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: { xs: '60vh', sm: '75vh', md: '80vh' }, // Adjusted height to be slightly smaller than hero
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            gap: 'clamp(4px, 1.5vh, 20px)'
        }}>
            <div style={{
                display: 'flex',
                flex: 1,
                width: '100%',
                position: 'relative',
                minHeight: '0'
            }}>
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
                    <div style={{
                        position: "absolute",
                        width: "60%",
                        height: "60%",
                        background: `radial-gradient(circle, rgba(139, 0, 0, 0.15) 0%, transparent 70%)`,
                        filter: "blur(60px)",
                        pointerEvents: "none",
                        transform: `translateX(${glowXOffset})`,
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

                    {navigationButtons.show && (
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            position: "absolute",
                            top: "50%",
                            left: "0",
                            right: "0",
                            transform: "translateY(-50%)",
                            justifyContent: "space-between",
                            padding: `0 clamp(10px, 4vw, 40px)`,
                            zIndex: 300,
                            pointerEvents: "none"
                        }}>
                            <button
                                onClick={e => { e.stopPropagation(); prevSlide(); }}
                                style={{
                                    width: navigationButtons.size,
                                    height: navigationButtons.size,
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
                                    transition: "all 0.4s",
                                    color: navigationButtons.iconColor,
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
                                }}
                                aria-label="Previous slide"
                            >
                                <svg width={navigationButtons.iconSize} height={navigationButtons.iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={e => { e.stopPropagation(); nextSlide(); }}
                                style={{
                                    width: navigationButtons.size,
                                    height: navigationButtons.size,
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
                                    transition: "all 0.4s",
                                    color: navigationButtons.iconColor,
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
                                }}
                                aria-label="Next slide"
                            >
                                <svg width={navigationButtons.iconSize} height={navigationButtons.iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </Box>
                    )}
                </div>
            </div>

            {/* Member List Section */}
            <div style={{
                width: 'min(90%, 900px)',
                margin: '0 auto',
                marginTop: 'clamp(-130px, -18vh, -20px)',
                zIndex: 10,
                padding: 'clamp(16px, 3vh, 32px) clamp(20px, 5vw, 48px)',
                background: 'rgba(5, 5, 5, 0.6)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                minHeight: 'clamp(80px, 15vh, 120px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}>
                <BorderBeam size={200} duration={8} delay={0} borderWidth={1.5} colorFrom="#8B0000" colorTo="#000000" />

                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{
                        color: '#FFFFFF',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        letterSpacing: '-1px',
                        fontSize: 'clamp(1.5rem, 5vw, 2.125rem)',
                        marginBottom: '8px'
                    }}>
                        {currentTeam?.title}
                    </Typography>
                    
                    <Typography sx={{
                        color: '#E0E0E0',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                        fontWeight: 500,
                        letterSpacing: '0.05em'
                    }}>
                        {currentTeam?.members.join(' • ')}
                    </Typography>
                </div>
            </div>
        </Box>
    );
}
