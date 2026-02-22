import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const [index, setIndex] = React.useState(0);
    const [titles, setTitles] = React.useState([]);

    React.useEffect(() => {
        const primaryTitleList = [
            "Distributed Systems",
            "User Experiences",
            "Web Applications",
        ];

        const additionalTitleList = [
            "Event-Driven Architecture",
            "Testable Code",
            "Efficient Teams",
            "Data Pipelines",
            "Enterprise Solutions",
            "APIs",
            "Shared Components",
            "CI/CD Infrastructure",
            "Scalable Architecture",
            "Cloud Infrastructure",
            "Microservices",
            "Ikea Furniture",
            "Blanket Forts",
            "Magic Decks",
            "Dad Jokes",
            "Lego Sets",
            "Sandcastles"
        ];

        // Randomize
        for (let i = primaryTitleList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [primaryTitleList[i], primaryTitleList[j]] = [primaryTitleList[j], primaryTitleList[i]];
        }
        for (let i = additionalTitleList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [additionalTitleList[i], additionalTitleList[j]] = [additionalTitleList[j], additionalTitleList[i]];
        }
        setTitles(primaryTitleList.concat(additionalTitleList));
    }, []);

    React.useEffect(() => {
        if (titles.length === 0) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [titles]);

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
                    Hi, I'm Connor
                </motion.h2>
                <motion.p variants={item} className="subtitle">
                    9+&nbsp;Years&nbsp;Experience • Full&nbsp;Stack&nbsp;Software&nbsp;Engineer • User&nbsp;Advocate
                </motion.p>
                <motion.h1 variants={item} className="i-build">
                    I build{' '}
                </motion.h1>
                <motion.h1 variants={item} className="title">
                    <AnimatePresence mode="wait">
                        {titles.length > 0 && (
                            <motion.span
                                key={titles[index]}
                                className="highlight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{ display: 'inline-block' }}
                            >
                                {titles[index]}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.h1>
                <motion.div variants={item} className="cta-container">
                    {/* Placeholder for buttons/actions if needed */}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
