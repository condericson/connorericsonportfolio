import React, { useEffect, useState } from 'react';
import './RetroScape.css';
import retroLandscape from '../assets/images/minimalist_80s_retro_short1.png';

const RetroScape = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate transformations based on scroll
    // Stars fade out as you scroll down
    // Mobile: Allow stars to persist much longer (slower fade)
    const fadeDivisor = isMobile ? 1500 : 500;
    const starOpacity = Math.max(0, 1 - scrollY / fadeDivisor);
    const starTransform = `translateY(${scrollY * 0.2}px)`;

    // Sun/Landscape reveal
    // Start "below" fold, move up. 
    // Mobile: Rise slower so it doesn't pop up too early
    const scrollMultiplier = isMobile ? 0.2 : 0.3;
    const horizonOffset = Math.max(0, 1000 - (scrollY * scrollMultiplier)); // Simple parallax

    return (
        <div className="retro-scape-container">
            {/* Top Stars Layer */}
            <div
                className="retro-stars-layer"
                style={{ opacity: starOpacity, transform: starTransform }}
            >
                {/* Original Stars */}
                <div className="star star-1"></div>
                <div className="star star-2"></div>
                <div className="star star-3"></div>
                <div className="star star-4"></div>
                <div className="star star-5"></div>

                {/* Additional Stars (Group 2) */}
                <div className="star star-6"></div>
                <div className="star star-7"></div>
                <div className="star star-8"></div>
                <div className="star star-9"></div>
                <div className="star star-10"></div>

                {/* Additional Stars (Group 3) */}
                <div className="star star-11"></div>
                <div className="star star-12"></div>
                <div className="star star-13"></div>
                <div className="star star-14"></div>
                <div className="star star-15"></div>
            </div>

            {/* Bottom Landscape Layer */}
            {/* 
                Parallax Effect:
                - Start visible only at the very bottom or hidden below the fold.
                - Move UP as we scroll down, but slower than the foreground.
                - Example: We want it to be perfectly framed at the bottom when we reach the bottom of the page.
                - Since we don't know page height easily without measurement, we use a fixed offset that feels right.
                - `translateY` moves it down. 
                - Initial: 40vh down (partially hidden or fully hidden depending on screen).
                - Scroll: Move up by subtracting scrollY * factor.
            */}
            <div
                className="retro-landscape-layer"
                style={{
                    /* 
                       Start pushed down significantly (e.g. 100vh or 800px). 
                       As we scroll (scrollY increases), subtract from this offset to bring it up.
                       Factor 0.2 means for every 1000px scrolled, it moves up 200px.
                       If page is long (e.g. 2000px), it moves up 400px.
                       We want it to settle at bottom:0.
                    */
                    transform: `translateY(${Math.max(0, 1000 - scrollY * scrollMultiplier)}px)`
                }}
            >
                <div className="inset-gradient"></div>
                <img src={retroLandscape} alt="Retro 80s Landscape" className="retro-landscape-img" />
            </div>
        </div>
    );
};

export default RetroScape;
