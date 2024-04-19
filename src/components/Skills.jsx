import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

const skillsData = [
    {
        category: 'Languages',
        skills: [
            { name: 'Python', percent: '95%' },
            { name: 'JavaScript', percent: '75%' },
            { name: 'SQL', percent: '85%' }
        ]
    },
    {
        category: 'Others',
        skills: [
            { name: 'React', percent: '70%' },
            { name: 'Django/Flask', percent: '95%' },
            { name: 'HTML/CSS', percent: '85%' }
        ]
    }
];

const Skills = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();  // Optionally disconnect observer after the element is visible
                }
            });
        }, { threshold: 0.5 }); // Setting threshold to 50%

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div id='pro-skills-area' className={styles.skillsSection} ref={ref}>
            <div className={styles.skillsAreaTop}>
                <div className="container justify-content-center text-center text-light mb-4">
                    <div className={styles.sectionTitle}>
                        <h2>Skills</h2>
                    </div>
                </div>
            </div>
            <div className={styles.skillsAreaMiddle}>
                <div className="container-fluid">
                    <div className={styles.skillsContent}>
                        <div className="row justify-content-center">
                            {skillsData.map((group, index) => (
                                <div className={`col-md-4 col-sm-6 col-xs-12 ${index % 2 !== 0 ? styles.floatRight : ''}`}>
                                    <div className={styles.skillst5}>
                                        {group.skills.map((skill, skillIndex) => (
                                            <div className={styles.skillbar}>
                                                <div className={styles.title}>{skill.name}</div>
                                                <div className={`${styles.countBar} ${styles.color1} ${isVisible ? styles.animate : ''}`} style={{ width: isVisible ? skill.percent : '0%' }}>
                                                    <div className={styles.count}><span>{skill.percent}</span></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
