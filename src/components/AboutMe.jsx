import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from "./AboutMe.module.css";
import profile from "../images/profile/final2.png";

const AboutMe = () => {

    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the element is in view
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
    <div ref={ref} id="aboutme" className={`${styles.centerDiv} ${styles.aboutMeMobile} container`}>
        <div className={`row justify-content-center align-items-center text-white`}>
            <h2 className="text-center text-light" style={{marginBottom:"2rem"}}>About Me</h2>
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

                {/* <div className={styles.skills}>
                    
                    <div className={styles.skills__row}>
                        <div className={`${styles.skills__item} skills__item--html ${styles.skills__item_fade_in}`}>
                            <img src={htmlLogo} alt="HTML"/>
                            <div className={`${styles.skills__item_name}`}>
                                HTML
                            </div>
                        </div>
                        <div className={`${styles.skills__item} skills__item--react ${styles.skills__item_fade_in}`}>
                            <img src={reactLogo} alt="React" />
                            <div className={`${styles.skills__item_name}`}>
                                REACT
                            </div>
                        </div>
                        <div className={`${styles.skills__item} skills__item--npm ${styles.skills__item_fade_in}`}>
                            <img src={dockerLogo} alt="Docker" />
                            <div className={`${styles.skills__item_name}`}>
                                DOCKER
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills__row}>
                        <div className={`${styles.skills__item} skills__item--js ${styles.skills__item_fade_in}`}>
                            <img src={jsLogo} alt="JavaScript" />
                            <div className={`${styles.skills__item_name}`}>
                                JAVASCRIPT
                            </div>
                        </div>
                        <div className={`${styles.skills__item} skills__item--css ${styles.skills__item_fade_in}`}>
                            <img src={cssLogo} alt="CSS" />
                            <div className={`${styles.skills__item_name}`}>
                                CSS
                            </div>
                        </div>
                        <div className={`${styles.skills__item} skills__item--python ${styles.skills__item_fade_in}`}>
                            <img src={mongodbLogo} alt="MongoDB" />
                            <div className={`${styles.skills__item_name}`}>
                                MONGODB
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills__row}>
                        <div className={`${styles.skills__item} skills__item--sass ${styles.skills__item_fade_in}`}>
                            <img src={pythonLogo} alt="Python" />
                            <div className={`${styles.skills__item_name}`}>
                                PYTHON
                            </div>
                        </div>
                        <div className={`${styles.skills__item} skills__item--webpack ${styles.skills__item_fade_in}`}>
                            <img src={djangoLogo} alt="Django" />
                            <div className={`${styles.skills__item_name}`}>
                                DJANGO
                            </div>
                        </div>
                        <div className={`${styles.skills__item} skills__item--r ${styles.skills__item_fade_in}`}>
                            <img src={flaskLogo} alt="Flask" />
                            <div className={`${styles.skills__item_name}`}>
                                FLASK
                            </div>
                        </div>
                    </div>
                </div> */}