import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section className="hero-section">
            <motion.div
                className="hero-content"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.h2 variants={item} className="greeting">
                    Hello, I'm Connor Ericson
                </motion.h2>
                <motion.h1 variants={item} className="title">
                    Building <span className="highlight">Digital Experiences</span><br />
                    That Matter.
                </motion.h1>
                <motion.p variants={item} className="subtitle">
                    9 Years Experience • Full Stack Developer • Creative Problem Solver
                </motion.p>

                <motion.div variants={item} className="cta-container">
                    {/* Placeholder for buttons/actions if needed */}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
