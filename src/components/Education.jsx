import React, { useState, useEffect, useRef } from 'react';
import ExperienceItem from './EducationItem'; // Make sure to import ExperienceItem
import styles from './Education.module.css';

const experiences = [
    { id: 1, title: "Masters in Computer Science", date: "Mar 2022 - Dec 2023", company: "Santa Clara University", description: `• Led five-person team in Library Management App development for FAVL's 38 libraries across Burkina Faso, Ghana and Uganda.
    • Partnered with Belgian team on Animalogy app for social issues, created culturally relevant educational content, animations, chatbot
    for enhanced engagement.
    • Implemented full-stack project using Flutter, Dart for frontend, Firebase for backend authentication, data management, and Android
    Studio for testing.
    ` },
        { id: 2, title: "Bachelors in Computer Engineering", date: "Aug 2016 - Aug 2020", company: "Santa Clara University", description: `• Utilized Google Analytics to track user behavior and inform decision‐making processes, demonstrating data‐driven approach to web development
    • Facilitated efficient cross‐functional collaboration utilizing Slack and Asana task management, ensuring smooth project coordination and timely deliverables` }
];

const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <div id="experience" className={`container justify-content-center mt-4 ${styles.experienceContainer}`}>
            <h2 className={`text-center ${styles.experienceHeading} ${styles.sectionh2}`}>Experience</h2>
            <div className={`row justify-content-center`}>
                <div className="col-md-10 col-md-offset-1">
                    <div className={`${styles.experienceContent}`}>
                        <div className={`${styles.cdTimeline}`}>
                            {experiences.map((experience, index) => (
                                <ExperienceItem key={experience.id} experience={experience} index={index} expandedId={expandedId} setExpandedId={setExpandedId} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;