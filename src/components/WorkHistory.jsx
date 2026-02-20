import React from 'react';
import { motion } from 'framer-motion';
import { WORK_HISTORY } from '../data/experience';
import './WorkHistory.css';
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react';

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
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="card-header">
                            <div className="role-company">
                                <h4>{job.role}</h4>
                                <div className="company-row">
                                    <Briefcase size={16} />
                                    <span>{job.company}</span>
                                </div>
                            </div>
                            <div className="meta-info">
                                <span><Calendar size={14} style={{ marginRight: '5px' }} />{job.period}</span>
                                <span><MapPin size={14} style={{ marginRight: '5px' }} />{job.location}</span>
                            </div>
                        </div>

                        <div className="narrative-text">
                            {/* Logic to handle the Psychology Insight Block specially */}
                            {job.id === 'marcus-autism-center' ? (
                                <>
                                    {/* First two paragraphs are normal */}
                                    {job.description.slice(0, 2).map((paragraph, i) => (
                                        <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                    ))}
                                    {/* Last paragraph is the insight */}
                                    {job.description.length > 2 && (
                                        <div className="insight-highlight">
                                            <h5><Award size={16} /> The Psychology Advantage</h5>
                                            <p dangerouslySetInnerHTML={{ __html: job.description[2] }} />
                                        </div>
                                    )}
                                </>
                            ) : (
                                // Standard rendering for other jobs
                                job.description.map((paragraph, i) => (
                                    <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                ))
                            )}
                        </div>

                        {/* Skills Section - Only if skills exist (Marcus job might not have them in same format if merged simply) 
                            Update: I added skills to the new Marcus object in experience.js?
                            Wait, I removed ADDITIONAL_WORK_HISTORY, but the merged object in experience.js DOES NOT have a 'skills' property in the diff I saw earlier.
                            Ah, I should check if 'skills' exists before rendering.
                        */}
                        {job.skills && (
                            <div className="skills-container-clean">
                                {/* Front End Column */}
                                {job.skills.frontEnd?.length > 0 && (
                                    <div className="skill-column">
                                        <span className="sub-label" style={{ color: 'var(--color-frontend)' }}>Front End</span>
                                        <div className="skill-list">
                                            {job.skills.frontEnd.map(skill => (
                                                <span key={skill} className="tech-tag frontend">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Back End Column */}
                                {job.skills.backEnd?.length > 0 && (
                                    <div className="skill-column">
                                        <span className="sub-label" style={{ color: 'var(--color-backend)' }}>Back End</span>
                                        <div className="skill-list">
                                            {job.skills.backEnd.map(skill => (
                                                <span key={skill} className="tech-tag backend">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Workflow Column */}
                                {job.skills.workflow?.length > 0 && (
                                    <div className="skill-column">
                                        <span className="sub-label" style={{ color: 'var(--color-workflow)' }}>Workflow</span>
                                        <div className="skill-list">
                                            {job.skills.workflow.map(skill => (
                                                <span key={skill} className="tech-tag workflow">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WorkHistory;

