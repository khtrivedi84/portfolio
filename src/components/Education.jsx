import React, { useState } from 'react';
import styles from './Experience.module.css';

const experiences = [
    { id: 1, title: "Masters in Computer Science", date: "Mar 2022 - Dec 2023", company: "Santa Clara University", description: `• Led five-person team in Library Management App development for FAVL's 38 libraries across Burkina Faso, Ghana and Uganda.
    • Partnered with Belgian team on Animalogy app for social issues, created culturally relevant educational content, animations, chatbot
    for enhanced engagement.
    • Implemented full-stack project using Flutter, Dart for frontend, Firebase for backend authentication, data management, and Android
    Studio for testing.
    ` },
    { id: 2, title: "Bachelors in Computer Engineering", date: "Aug 2016 - Aug 2020", company: "Santa Clara University", description: `• Developed and maintained 50+ reusable components in a CMS environment, integrating database integration and server‐side scripting
    • Utilized front‐end technologies (JavaScript, HTML/CSS) to ensure seamless functionality of the components
    • Employed performance optimization techniques, such as asynchronous loading and lazy loading, resulting in a notable 20% improvement in page load speed,
    benefiting over 200,000 monthly visitors
    • Utilized Google Analytics to track user behavior and inform decision‐making processes, demonstrating data‐driven approach to web development
    • Facilitated efficient cross‐functional collaboration utilizing Slack and Asana task management, ensuring smooth project coordination and timely deliverables` }
];

const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    const handleExpand = (id) => {
        setExpandedId(id);
    };

    const handleCollapse = () => {
        setExpandedId(null);
    };

    const renderDescription = (description, id) => {
        if (expandedId !== id) {
            return `${description.slice(0, 300)}${description.length > 300 ? '...' : ''}`;
        }

        if (description.includes('•')) {
            return (
                <ul>
                    {description.split('•').filter(point => point.trim()).map((point, index) => (
                        <li key={index}>{point.trim()}</li>
                    ))}
                </ul>
            );
        } else {
            return <p>{description}</p>;
        }
    };

    return (
        <div id="education" className={`container justify-content-center mt-4 ${styles.experienceContainer}`}>
            <h2 className={`text-center ${styles.experienceHeading}`}>Education</h2>
            <div className={`row justify-content-center`}>
                <div className="col-md-10 col-md-offset-1">
                    <div className={`${styles.experienceContent}`}>
                        <div className={`${styles.cdTimeline}`}>
                            {experiences.map((experience) => (
                                <div className={`${styles.cdTimelineBlock}`}
                                    key={experience.id}>
                                    <div className={`${styles.cdTimelineImg}`}>
                                        <span className={`${styles.dot}`}></span>
                                    </div>
                                    <div className={`${styles.cdTimelineContent}`}>
                                        <div className={`${styles.cdHeading}`}>
                                            <h2>{experience.title}</h2>
                                            <p>{experience.date} | <span>{experience.company}</span></p>
                                        </div>
                                        <div className={`${styles.cdDescription}`} 
                                            onMouseEnter={() => handleExpand(experience.id)}
                                            onMouseLeave={handleCollapse}>
                                            {renderDescription(experience.description, experience.id)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
