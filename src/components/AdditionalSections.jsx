import React from 'react';
import { motion } from 'framer-motion';
import { ADDITIONAL_PROJECTS, EDUCATION } from '../data/experience';
import './AdditionalSections.css';
import { Calendar, MapPin, Award, BookOpen, Briefcase } from 'lucide-react';

const FadeInSection = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

const AdditionalSections = () => {
    return (
        <section className="additional-sections-container">
            {/* 1. Additional Projects: "The Tech Grid" */}
            <div className="additional-section">
                <FadeInSection>
                    <h3 className="additional-section-title">Additional Projects</h3>
                </FadeInSection>
                <div className="projects-grid">
                    {ADDITIONAL_PROJECTS.map((project, index) => (
                        <FadeInSection key={project.id} delay={index * 0.1}>
                            <div className="project-card">
                                <div className="project-header">
                                    <div className="project-name">{project.name}</div>
                                    <div className="project-period">
                                        <Calendar size={14} /> {project.period}
                                    </div>
                                </div>
                                <div className="project-description">
                                    {project.description.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                </div>
                                <div className="project-tech-stack">
                                    {project.techStack.frontEnd?.length > 0 && project.techStack.frontEnd.map(tech => (
                                        <span key={tech} className="tech-badge frontend">{tech}</span>
                                    ))}
                                    {project.techStack.backEnd?.length > 0 && project.techStack.backEnd.map(tech => (
                                        <span key={tech} className="tech-badge backend">{tech}</span>
                                    ))}
                                    {project.techStack.workflow?.length > 0 && project.techStack.workflow.map(tech => (
                                        <span key={tech} className="tech-badge workflow">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>

            {/* 2. Education: "The Credential Row" */}
            <div className="additional-section">
                <FadeInSection>
                    <h3 className="additional-section-title">Education</h3>
                </FadeInSection>
                <div className="education-row">
                    {EDUCATION.map((edu, index) => (
                        <FadeInSection key={edu.id} delay={index * 0.1}>
                            <div className="education-card">
                                <div className="edu-icon-bg">
                                    <BookOpen size={48} strokeWidth={1} />
                                </div>
                                <div className="education-institution">{edu.institution}</div>
                                <div className="education-degree">{edu.degree}</div>
                                <div className="education-meta">
                                    <span>{edu.period} • {edu.location}</span>
                                </div>
                                <div className="education-details">
                                    {edu.details.map((detail, i) => (
                                        <p key={i}>{detail}</p>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default AdditionalSections;
