import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from "./AboutMe.module.css";
import profile from "../images/profile/final2.png";

const AboutMe = () => {

    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger when 30% of the element is in view
        triggerOnce: true // Only trigger once
        });
  useEffect(() => {
    const skillsItems = document.querySelectorAll(`.${styles.skills__item}`);
    skillsItems.forEach(item => {
        const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
        item.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div ref={ref} tabIndex={0} aria-label='About me section' id="aboutme" className={`${styles.centerDiv} container`}>
        <div className={`row justify-content-center align-items-center text-white`}>
            <h2 className={`text-center text-light ${styles.sectionh2}`} style={{marginBottom:"2rem"}}>About Me</h2>
            <div className={`col-md-6 justify-content-center d-flex mb-4`}>
                <div className={`${styles.imageDiv} ${styles.hideDiv} ${styles.glowingBorder} ${inView ? styles.animateFromLeft : ''}`}>
                    <img src={profile} alt="HTML" className={`${styles.profileImage}`} />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className={`about-me ${styles.hideDiv} ${inView ? styles.animateFromRight : ''}`}>
                    <p className="about-me__text">
                        Hello! 👋 I'm a seasoned computer engineer with a passion for code and innovation, holding a Master's in Computer Science and Engineering from Santa Clara University. Proficient in Python, JavaScript, Data Structures, Algorithms, and various frameworks, I navigate the dynamic interplay between creativity and technology in web development.
                    </p>
                    <p className="about-me__text">
                        Beyond the tech realm, catch me exploring the latest trends, enjoying a hike 🏞️, or uncovering hidden city gems. Whether tackling code challenges or blazing new trails, I'm always ready for an adventure.
                    </p>
                    <p className={`about-me__text d-md-block ${styles.optionalPara}`}>
                        I have experience working with a variety of technologies, including Django, Flask, SQL, React, Redux, PostgreSQL, and more. I am always looking to learn new technologies and expand my skillset.
                    </p>
                    <p className="about-me__text">
                        Let's connect and share stories—exploring the exciting journey where technology meets imagination. Ready to embark on this journey together?
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default AboutMe;