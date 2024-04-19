import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import htmlLogo from '../images/logos/html_logo.png';
import pythonLogo from '../images/logos/python_logo.png';
import javascriptLogo from '../images/logos/js_logo.png';
// import sqlLogo from '../images/sql_logo.png';
import reactLogo from '../images/logos/react_logo.png';
import djangoLogo from '../images/logos/django_logo.png';
import flaskLogo from '../images/logos/flask_logo.png';
import cssLogo from '../images/logos/css_logo.png';
import mongodbLogo from '../images/logos/mongodb_logo.png';

const skillsData = [
    {
        category: 'Languages',
        skills: [
            { name: 'Python', path: pythonLogo },
            { name: 'JavaScript', path: javascriptLogo},
            // { name: 'SQL', path: sqlLogo}
        ]
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Django', path: djangoLogo},
            { name: 'Flask', path: flaskLogo},
        ]
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React', path: reactLogo},
            { name: 'HTML', path: htmlLogo},
            { name: 'CSS', path: cssLogo}
        ]
    },
    {
        category: 'Databases',
        skills: [
            { name: 'MySQL', path: flaskLogo},
            { name: 'MongoDB', path: mongodbLogo},
            { name: 'SQLite', path: flaskLogo},
            { name: 'HTML', path: htmlLogo},
        ]
    },
    {
        category: 'Other',
        skills: [
            { name: 'React', path: reactLogo},
            { name: 'Django', path: djangoLogo},
            { name: 'Flask', path: flaskLogo},
            { name: 'HTML', path: htmlLogo},
            { name: 'CSS', path: cssLogo}
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
                                <div className={`col-md-2  col-sm-6 col-xs-12 ${index % 2 !== 0 ? styles.floatRight : ''}`}>
                                    <h5 className="text-light text-center">{group.category}</h5>
                                    <div className={`${styles.skillst5} ${styles.category}`}>
                                        {group.skills.map((skill, skillIndex) => (
                                            <div>
                                                <div className={`${styles.skills__item} skills__item--html ${styles.skills__item_fade_in}`}>
                                                    <img className={``} src={skill.path} alt={group.skills.name}/>
                                                    <div className={`${styles.skills__item_name} text-light`}>
                                                        {skill.name}
                                                    </div>
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
