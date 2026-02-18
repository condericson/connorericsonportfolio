import './HeadshotSkills.css';
import profileImage from '../assets/images/Connor-headshot-2.jpg';

const HeadshotSkills = () => {
    // Skills Data
    const skills = {
        frontend: [
            'Angular', 'TypeScript', 'JavaScript', 'React', 'HTML/CSS', 'SCSS'
        ],
        backend: [
            '.NET', 'C#', 'Kafka', 'Java', 'PostgreSQL', 'MSSQL', 'MongoDB', 'AWS DocumentDB', 'Node.js'
        ],
        workflow: [
            'Git', 'Gitlab CI', 'Jira', 'Confluence', 'Figma'
        ]
    };

    return (
        <section className="headshot-skills-wrapper">

            {/* DESKTOP LAYOUT */}
            <div className="hs-desktop">
                {/* Center Image */}
                <div className="hs-profile-center">
                    <img src={profileImage} alt="Connor Ericson" />
                    <div className="hs-glow"></div>
                </div>

                {/* Top Left: Front End */}
                <div className="hs-section section-frontend hs-top-left">
                    <div className="hs-content">
                        <h3>Front End</h3>
                        <div className="hs-tags">
                            {skills.frontend.map(s => (
                                <span key={s} className="hs-tag">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Top Right: Back End */}
                <div className="hs-section section-backend hs-top-right">
                    <div className="hs-content">
                        <h3>Back End</h3>
                        <div className="hs-tags">
                            {skills.backend.map(s => (
                                <span key={s} className="hs-tag">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom: Workflow */}
                <div className="hs-section section-workflow hs-bottom">
                    <div className="hs-content">
                        <h3>Workflow</h3>
                        <div className="hs-tags">
                            {skills.workflow.map(s => (
                                <span key={s} className="hs-tag">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE LAYOUT */}
            <div className="hs-mobile">
                <div className="hs-mobile-header">
                    <div className="hs-profile-mobile">
                        <img src={profileImage} alt="Connor Ericson" />
                    </div>
                </div>

                <div className="hs-mobile-stack">
                    <div className="hs-mobile-section section-frontend">
                        <h3 className="hs-mobile-section-header">Front End</h3>
                        <div className="hs-tags">
                            {skills.frontend.map(s => (
                                <span key={s} className="hs-tag">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="hs-mobile-section section-backend">
                        <h3 className="hs-mobile-section-header">Back End</h3>
                        <div className="hs-tags">
                            {skills.backend.map(s => (
                                <span key={s} className="hs-tag">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="hs-mobile-section section-workflow">
                        <h3 className="hs-mobile-section-header">Workflow</h3>
                        <div className="hs-tags">
                            {skills.workflow.map(s => (
                                <span key={s} className="hs-tag">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeadshotSkills;
