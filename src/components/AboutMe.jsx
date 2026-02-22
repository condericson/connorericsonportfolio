import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_ME } from '../data/experience';
import './AboutMe.css';

const AboutMe = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section className="about-me-section">
            <h2 className="section-title">About Me</h2>
            <motion.div
                className="about-me-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {ABOUT_ME.cards.map((card) => (
                    <motion.div key={card.id} className={`about-card ${card.className}`} variants={item}>
                        <h3>{card.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: card.description }} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="quote-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
            >
                <blockquote>{ABOUT_ME.quote}</blockquote>
            </motion.div>
        </section>
    );
};

export default AboutMe;
