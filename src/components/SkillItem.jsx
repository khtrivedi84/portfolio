import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

const SkillItem = ({ skill }) => {
    const { ref, inView } = useInView({
        threshold: 0.25,
        triggerOnce: true
    });

    return (
        <div ref={ref} className={`${styles.skills__item} ${inView ? styles.slideIn : ''}`}>
            <img src={skill.path} alt={skill.name} />
            <div className={`${styles.skills__item_name}`}>
                {skill.name}
            </div>
        </div>
    );
};

export default SkillItem;
