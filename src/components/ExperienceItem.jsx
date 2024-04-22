import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Experience.module.css';

const ExperienceItem = ({ experience, index, expandedId, setExpandedId }) => {
    const [refHeading, inViewHeading] = useInView({
        threshold: 0.4,
        triggerOnce: true
    });

    const [refDescription, inViewDescription] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    const handleExpand = (id) => {
        setExpandedId(id === expandedId ? null : id); // Toggle expanded state
    };

    const renderDescription = (description, id) => {
        const points = description.split('•').filter(point => point.trim());
        const showMore = points.length > 3 && expandedId !== id;
        const itemsToShow = showMore ? points.slice(0, 2) : points;

        return (
            <ul>
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

    const isEven = index % 2 === 0;
    return (
        <div className={`${styles.cdTimelineBlock}`}>
            <div className={`${styles.cdTimelineImg}`}>
                <span className={`${styles.dot}`}></span>
            </div>
            <div className={`${styles.cdTimelineContent}`}>
                <div ref={refHeading} className={`${styles.cdHeading} ${inViewHeading ? (isEven ? styles.slideInFromLeftHeading : styles.slideInfromRightHeading) : ''}`}>
                    <h2>{experience.title}</h2>
                    <p>{experience.date} | <span>{experience.company}</span></p>
                </div>
                <div ref={refDescription} className={`${styles.cdDescription} ${inViewDescription ? (isEven ? styles.slideInFromRightDescription : styles.slideInFromLeftDescription) : ''}`}>
                    {renderDescription(experience.description, experience.id)}
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
