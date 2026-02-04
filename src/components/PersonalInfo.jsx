import React from 'react';
import { motion } from 'framer-motion';
import './PersonalInfo.css';
import profileImage from '../assets/images/Connor-headshot.jpg';

const PersonalInfo = () => {

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
        <section className="personal-info-section">
            <motion.div
                className="personal-info-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Center Image */}
                <motion.div className="profile-image-container" variants={item}>
                    <div className="image-wrapper">
                        <img src={profileImage} alt="Connor Ericson" className="profile-image" />
                        <div className="image-glow"></div>
                    </div>
                </motion.div>

                {/* Drive Section (Top Left) */}
                <motion.div className="info-card drive-card" variants={item}>
                    <h3>Drive to Code</h3>
                    <p>
                        My desire to code comes from a <span className="highlight-text">desire to help and serve others</span>.
                        I strive to build intuitive online experiences that make users feel like using my software is the
                        easiest and most enjoyable part of their day. Solving problems and bringing joy through products
                        is my ultimate goal.
                    </p>
                </motion.div>

                {/* Family Section (Right) */}
                <motion.div className="info-card family-card" variants={item}>
                    <h3>Family Life</h3>
                    <p>
                        My family is my greatest adventure. My wife and I are a team, and we love spoiling our son and daughter.
                        They are the <span className="highlight-text">light of my life</span> and motivate me to make a
                        positive impact on the world around me.
                    </p>
                </motion.div>

                {/* Hobbies Section (Bottom Left) */}
                <motion.div className="info-card hobbies-card" variants={item}>
                    <h3>Hobbies</h3>
                    <p>
                        When I'm not coding, I love exploring the outdoors <strong>off-roading</strong> or getting lost in a game of <strong>Magic: The Gathering</strong>.
                        You can also find me gaming on my <strong>Steam Deck</strong>, but my favorite pastime is simply <strong>discovering the world</strong> anew through the eyes of my kids.
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
                <div className="quote-separator"></div>
            </motion.div>
        </section>
    );
};

export default PersonalInfo;
