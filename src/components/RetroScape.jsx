import React, { useEffect, useState } from 'react';
import './RetroScape.css';

const RetroScape = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate transformations based on scroll
    // Stars fade out as you scroll down
    const starOpacity = Math.max(0, 1 - scrollY / 500);
    const starTransform = `translateY(${scrollY * 0.2}px)`;

    // Sun/Landscape reveal
    // Start "below" fold, move up. 
    // Let's say we want it to be fully visible at the bottom.
    // Or we can simple have it fixed at the bottom but moving up slightly.
    // The request said: "rising sun will come from the bottom of the fold."

    // We'll translate it up as we scroll.
    const horizonOffset = Math.max(0, 100 - (scrollY / 10)); // Simple parallax

    return (
        <div className="retro-scape-container">
            {/* Top Stars Layer */}
            <div
                className="retro-stars-layer"
                style={{ opacity: starOpacity, transform: starTransform }}
            >
                <div className="star star-1"></div>
                <div className="star star-2"></div>
                <div className="star star-3"></div>
                <div className="star star-4"></div>
                <div className="star star-5"></div>
            </div>

            {/* Bottom Landscape Layer */}
            <div className="retro-landscape-layer" style={{ transform: `translateY(${Math.max(0, 300 - scrollY * 0.5)}px)` }}>
                <div className="retro-sun"></div>
                <div className="retro-grid"></div>
                <div className="mountain-range"></div>
            </div>
        </div>
    );
};

export default RetroScape;
