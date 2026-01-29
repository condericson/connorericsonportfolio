import React from 'react';
import { motion } from 'framer-motion';
import { WORK_HISTORY } from '../data/experience';
import './WorkHistory.css';
import { Briefcase, MapPin, Calendar, Code, Terminal, Layers } from 'lucide-react';

const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    // Calculate difference in months
    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();

    // Ensure at least 1 month if dates are close
    if (months <= 0) months = 1;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let result = [];
    if (years > 0) result.push(`${years} yr${years > 1 ? 's' : ''}`);
    if (remainingMonths > 0) result.push(`${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`);

    return result.join(' ');
};

const GraphicElement = ({ type }) => {
    // Return different abstract SVG shapes based on type
    if (type === 'datascan') {
        return (
            <svg viewBox="0 0 100 100" className="graphic-svg" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="50" cy="50" r="40" strokeOpacity="0.2" />
                <path d="M30 50 L50 70 L90 30" stroke="var(--accent-color)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    } else if (type === 'aarons') {
        return (
            <svg viewBox="0 0 100 100" className="graphic-svg" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="20" y="20" width="60" height="60" rx="10" strokeOpacity="0.2" />
                <path d="M20 50 L80 50" stroke="var(--accent-color)" />
                <path d="M50 20 L50 80" stroke="var(--accent-color)" />
            </svg>
        );
    } else {
        return (
            <svg viewBox="0 0 100 100" className="graphic-svg" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 80 L50 20 L80 80 Z" strokeOpacity="0.2" />
                <circle cx="50" cy="50" r="10" fill="var(--accent-color)" stroke="none" />
            </svg>
        );
    }
}

const WorkHistory = () => {
    return (
        <section className="work-history-section">
            <motion.h3
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                My Journey
            </motion.h3>

            <div className="history-list">
                {WORK_HISTORY.map((job, index) => (
                    <motion.div
                        key={job.id}
                        className="history-card-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        {/* Graphic Column (Desktop) */}
                        <div className="graphic-column">
                            <GraphicElement type={job.id.includes('datascan') ? 'datascan' : job.id.includes('aarons') ? 'aarons' : 'other'} />
                        </div>

                        <div className="history-card">
                            {/* Mobile Graphic Background implemented in CSS via class */}
                            <div className="card-header-bg">
                                <GraphicElement type={job.id.includes('datascan') ? 'datascan' : job.id.includes('aarons') ? 'aarons' : 'other'} />
                            </div>

                            <div className="card-header">
                                <div className="role-company">
                                    <h4>{job.role}</h4>
                                    <div className="company-row">
                                        <Briefcase size={16} className="icon" />
                                        <span className="company-name">{job.company}</span>
                                    </div>
                                </div>

                                <div className="meta-info">
                                    <div className="meta-item">
                                        <Calendar size={14} />
                                        <span>{job.period}</span>
                                    </div>
                                    <div className="meta-item duration-text">
                                        <span>({calculateDuration(job.startDate, job.endDate)})</span>
                                    </div>
                                    <div className="meta-item">
                                        <MapPin size={14} />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-content">
                                {/* Narrative Description with HTML parsing for highlights */}
                                <div className="narrative-text">
                                    {job.description.map((paragraph, i) => (
                                        <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                    ))}
                                </div>

                                {/* Skills Grid - Compact */}
                                <div className="skills-container-compact">
                                    {/* Technologies */}
                                    <div className="skill-group-compact">
                                        <div className="skill-label">
                                            <Code size={14} /> <span>Technologies</span>
                                        </div>
                                        <div className="tags-compact">
                                            {job.skills.technologies?.map(tech => (
                                                <span key={tech} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Languages */}
                                    {job.skills.languages?.length > 0 && (
                                        <div className="skill-group-compact">
                                            <div className="skill-label">
                                                <Terminal size={14} /> <span>Languages</span>
                                            </div>
                                            <div className="tags-compact">
                                                {job.skills.languages.map(lang => (
                                                    <span key={lang} className="lang-tag">{lang}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Workflow */}
                                    {job.skills.workflow?.length > 0 && (
                                        <div className="skill-group-compact">
                                            <div className="skill-label">
                                                <Layers size={14} /> <span>Workflow</span>
                                            </div>
                                            <div className="tags-compact">
                                                {job.skills.workflow.map(tool => (
                                                    <span key={tool} className="workflow-tag">{tool}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WorkHistory;
