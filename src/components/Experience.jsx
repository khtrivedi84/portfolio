import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem'; // Make sure to import ExperienceItem
import styles from './Experience.module.css';

const experiences = [
    { id: 1, title: "App Developer", date: "Jan 2024 - Present", company: "Frugal Innovation Hub", description: `• Led five-person team in Library Management App development for FAVL's 38 libraries across Burkina Faso, Ghana and Uganda.
    • Partnered with Belgian team on Animalogy app for social issues, created culturally relevant educational content, animations, chatbot
    for enhanced engagement.
    • Implemented full-stack project using Flutter, Dart for frontend, Firebase for backend authentication, data management, and Android
    Studio for testing.
    • Implemented full-stack project using Flutter, Dart for frontend, Firebase for backend authentication, data management, and Android
    Studio for testing.
    ` },
    { id: 2, title: "Web Developer", date: "Jul 2022 - Dec 2023", company: "Santa Clara University", description: `• Developed and maintained 50+ reusable components in a CMS environment, integrating database integration and server‐side scripting
    • Utilized front‐end technologies (JavaScript, HTML/CSS) to ensure seamless functionality of the components
    • Employed performance optimization techniques, such as asynchronous loading and lazy loading, resulting in a notable 20% improvement in page load speed,
    benefiting over 200,000 monthly visitors
    • Utilized Google Analytics to track user behavior and inform decision‐making processes, demonstrating data‐driven approach to web development
    • Facilitated efficient cross‐functional collaboration utilizing Slack and Asana task management, ensuring smooth project coordination and timely deliverables` },
    { id: 3, title: "Software Engineer", date: "Aug 2019 - Sep 2021", company: "Rajat IT Consultancy", description: `• Spearheaded the development of a real‐time notification system using Django Channels for a health and fitness‐based web portal, enabling prompt commu‐
    nication between users and enhancing user engagement
    • Integrated 30+ REST APIs for client‐specific services, enabling seamless communication between the application and external systems
    • Optimized database queries and implemented Redis caching, leveraging indexing & query optimization techniques to enhance system responsiveness by 40%
    • Proactively monitored system health using AWS ELK Stack, identifying and resolving issues to achieve a 70% reduction in downtime
    • Enhanced backend infrastructure with Docker adoption, enabling a 20% improvement in scalability potential
    • Established Git version control and workflows to streamline code management and development processes, minimizing conflicts and maximizing efficiency` },
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