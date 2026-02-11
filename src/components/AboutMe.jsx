import React from 'react';
import { motion } from 'framer-motion';
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
                {/* Drive Section */}
                <motion.div className="about-card drive-card" variants={item}>
                    <h3>Why I Code</h3>
                    <p>
                        My desire to code comes from a desire to <span className="highlight-text">help and serve others</span>.
                        I strive to build intuitive online experiences that make users feel like using my application is the
                        easiest and most enjoyable part of their day. <span className="highlight-text">Solving business problems while bringing joy</span> to users through software development
                        is my ultimate goal.
                    </p>
                </motion.div>

                {/* Family Section */}
                <motion.div className="about-card family-card" variants={item}>
                    <h3>My Family</h3>
                    <p>
                        <span className="highlight-text">My family is my greatest adventure.</span> My beautiful wife and I are an incredible team, and we have two wonderful children that we love to spoil.
                        They are the light of my life and motivate me to make a
                        positive impact on the world around me every day.
                    </p>
                </motion.div>

                {/* Hobbies Section */}
                <motion.div className="about-card hobbies-card" variants={item}>
                    <h3>Hobbies</h3>
                    <p>
                        When I'm not coding, I love exploring the outdoors, off-roading, or getting into an exciting game of Magic: The Gathering.
                        You can also find me gaming on my Steam Deck, but my favorite pastime has to be <span className="highlight-text">discovering the world</span> through the eyes of my kids.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                className="quote-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
            >
                <blockquote>"In a world where you can be anything, be kind"</blockquote>
            </motion.div>
        </section>
    );
};

export default AboutMe;
