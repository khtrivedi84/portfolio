import React, { useState, useEffect, useRef } from 'react';
import ExperienceItem from './EducationItem'; // Make sure to import ExperienceItem
import styles from './Education.module.css';

const experiences = [
    { id: 1, title: "Masters in Computer Science", date: "Mar 2022 - Dec 2023", company: "Santa Clara University", description: `• Mastered advanced concepts in computer science, including artificial intelligence, machine learning, data science, and software engineering, through a rigorous Master's program.
    • Relevant coursework: Data Structures and Algorithms, Operating Systems, Machine Learning, Computer Networks, Computer Architecture, Ethical Decision Making, and more.
    ` },
        { id: 2, title: "Bachelors in Computer Engineering", date: "Aug 2016 - Aug 2020", company: "Gujarat Technological University", description: `• Dove into the realm of Computer Engineering during my Bachelor's program, exploring the intricacies of hardware-software integration, digital systems design, computer architecture, and embedded systems. Through hands-on projects and coursework, I honed practical skills to address complex engineering challenges, establishing a solid groundwork for my career in technology.
    • Relevant coursework: Objected-oriented Programming with C++, Java, Computer Organization, Artificial Intelligence, Data Structures, Python Programming, Web Technologies, and more.` }
];

const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <div id="education" tabIndex={0} aria-label='education section' className={`container justify-content-center mt-4 ${styles.experienceContainer}`}>
            <h2 className={`text-center ${styles.experienceHeading} ${styles.sectionh2}`}>Education</h2>
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