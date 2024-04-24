import React, { useEffect, useRef }  from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Experience.module.css';

const ExperienceItem = ({ experience, index, expandedId, setExpandedId }) => {
    const [refHeading, inViewHeading] = useInView({
        threshold: 0.4,
        triggerOnce: true
    });

    const descriptionNode = useRef(null); 

    const handleExpand = (id) => {
        setExpandedId(id === expandedId ? null : id); // Toggle expanded state
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (descriptionNode.current && !descriptionNode.current.contains(event.target)) {
                setExpandedId(null); // Collapse the description
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setExpandedId, expandedId]);

    const renderDescription = (description, id) => {
        const points = description.split('•').filter(point => point.trim());
        const showMore = points.length > 3 && expandedId !== id;
        const itemsToShow = showMore ? points.slice(0, 2) : points;

        const handleKeyDown = (event, id) => {
            // Check if Enter or Space key is pressed
            if (event.key === 'Enter' || event.key === ' ') {
              // Prevent the default action to stop scrolling when space is pressed
              event.preventDefault();
              // Simulate the click action
              handleExpand(id);
            }
          };

        return (
            <ul>
                {itemsToShow.map((point, index) => (
                    <li key={index}>{point.trim()}</li>
                ))}
                {showMore && (
                    <li>
                        <a tabIndex={0} aria-label='read more' onKeyDown={(event) => handleKeyDown(event, id)} className={styles.readMoreButton} onClick={() => handleExpand(id)}>
                            ...read more
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
                <div ref={refHeading} className={`${styles.cdDescription} ${inViewHeading ? (isEven ? styles.slideInFromRightDescription : styles.slideInFromLeftDescription) : ''}`}>
                    {renderDescription(experience.description, experience.id)}
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
