import React, { useState, useEffect, useRef } from 'react';
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
    const descriptionsRef = useRef({});

    const handleExpand = (id) => {
        setExpandedId(id);
    };

    const handleCollapse = () => {
        setExpandedId(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (expandedId !== null && descriptionsRef.current[expandedId]) {
                if (!descriptionsRef.current[expandedId].contains(event.target)) {
                    handleCollapse();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [expandedId]); // Effect dependencies include expandedId

    const renderDescription = (description, id) => {
        const points = description.split('•').filter(point => point.trim());
        const showMore = points.length > 3 && expandedId !== id; // Adjust the number of items to show when collapsed
        const itemsToShow = showMore ? points.slice(0, 2) : points; // Show only the first 3 points if collapsed

        return (
            <ul ref={el => descriptionsRef.current[id] = el}>
                {itemsToShow.map((point, index) => (
                    <li key={index}>{point.trim()}</li>
                ))}
                {showMore && (
                    <li>
                        <a className={styles.readMoreButton} onClick={() => handleExpand(id)}>
                            read more
                        </a>
                    </li>
                )}
            </ul>
        );
    };

    return (
        <div id="experience" className={`container justify-content-center mt-4 ${styles.experienceContainer}`}>
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
                                        <div className={`${styles.cdDescription}`}>
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