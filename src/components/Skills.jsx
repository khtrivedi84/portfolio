import React from 'react';
import styles from './Skills.module.css';
import pythonLogo from '../images/logos/python_logo.png';
import javascriptLogo from '../images/logos/js_logo.png';
import reactLogo from '../images/logos/react_logo.png';
import flaskLogo from '../images/logos/flask_logo.png';
import cssLogo from '../images/logos/css_logo.png';
import mongodbLogo from '../images/logos/mongodb_logo.png';
import SkillItem from './SkillItem';

const skillsData = [
    {
        category: 'Languages',
        skills: [
            { name: 'Python', path: pythonLogo },
            { name: 'JavaScript', path: javascriptLogo},
            { name: 'SQL', path: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"},
            { name: 'Java', path: "https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg"}
        ]
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Django', path: "https://upload.wikimedia.org/wikipedia/de/0/0e/Django-logo.svg"},
            { name: 'Flask', path: flaskLogo},
            { name: 'Node', path: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},
            { name: 'Spring', path: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"}
        ]
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React', path: reactLogo},
            { name: 'HTML', path: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"},
            { name: 'CSS', path: cssLogo},
            { name: 'Bootstrap', path: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"}
        ]
    },
    {
        category: 'Databases',
        skills: [
            { name: 'MySQL', path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/800px-MySQL_textlogo.svg.png"},
            { name: 'MongoDB', path: mongodbLogo},
            { name: 'Redis', path: "https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg"},
            { name: 'PostgreSQL', path: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"}
        ]
    },
    {
        category: 'Other',
        skills: [
            { name: 'AWS', path: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"},
            { name: 'Docker', path: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png"},
            { name: 'Git', path: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png"},
            { name: 'Linux', path: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"}
        ]
    }
];
const Skills = () => {
    return (
        <div tabIndex={0} aria-label='skills section' id='pro-skills-area' className={styles.skillsSection}>
            <div className={styles.skillsAreaTop}>
                <div className="container justify-content-center text-center text-light">
                    <h2 className={`${styles.sectionTitle} ${styles.sectionh2}`}>Skills</h2>
                </div>
            </div>
            <div className={styles.skillsAreaMiddle}>
                <div className="container-fluid">
                    <div className={styles.skillsContent}>
                        <div className="row justify-content-center">
                            {skillsData.map((group, groupIndex) => (
                                <div key={groupIndex} className={`col-md-2 col-sm-6 col-xs-12 ${groupIndex % 2 !== 0 ? styles.floatRight : ''} ${styles.categoryBackground}`}>
                                    <h5 className="text-light text-center mb-4">{group.category}</h5>
                                    <div className={`${styles.skillst5} ${styles.category}`}>
                                        {group.skills.map((skill, skillIndex) => (
                                            <SkillItem key={`${groupIndex}-${skillIndex}`} skill={skill} />
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
};

export default Skills;