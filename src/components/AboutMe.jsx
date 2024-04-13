import styles from "./AboutMe.module.css";
import htmlLogo from "../images/html_logo.png";
import jsLogo from "../images/js_logo.png";
import cssLogo from "../images/css_logo.png";
import mongodbLogo from "../images/mongodb_logo.png";
import reactLogo from "../images/react_logo.png";
import gitLogo from "../images/git_logo.png";
import pythonLogo from "../images/python_logo.png";
import djangoLogo from "../images/django_logo.png";
import flaskLogo from "../images/flask_logo.png";
import dockerLogo from "../images/docker_logo.png";

const AboutMe = () => {
  return (
    <div id="aboutme" className={`container mt-4 justify-content-center`} style={{height:"100vh"}}>
        <div className="row justify-content-center align-item-center text-white gx-5">
            <div className="col-sm-12 col-md-6 order-sm1 order-md-2">
                <div className="about-me">
                    <h2 className="about-me__title text-center" style={{marginTop:"10px"}}>About Me</h2>
                    <p className="about-me__text">
                        Hello! 👋 I'm a seasoned computer engineer with a passion for code and innovation, holding a Master's in Computer Science and Engineering from Santa Clara University. Proficient in Python, JavaScript, Data Structures, Algorithms, and various frameworks, I navigate the dynamic interplay between creativity and technology in web development.
                    </p>
                        <p className="about-me__text">
                            Beyond the tech realm, catch me exploring the latest trends 🚀, enjoying a hike 🏞️, or uncovering hidden city gems. Whether tackling code challenges or blazing new trails, I'm always ready for an adventure.
                        </p>
                        <p className={`about-me__text d-md-block ${styles.optionalPara}`}>
                            I have experience working with a variety of technologies, including Django, Flask, SQL, React, Redux, PostgreSQL, and more. I am always looking to learn new technologies and expand my skillset.
                        </p>
                    <p className="about-me__text">
                        Let's connect and share stories—exploring the exciting journey where technology meets imagination. Ready to embark on this journey together? 🚀
                    </p>
                </div>
            </div>
            <div className="col-md-6 order-sm-2 order-md-1">
                    <div className={styles.skills}>
                        <div className={styles.skills__row}>
                        <div className={`${styles.skills__item} skills__item--html ${styles.skills__item_fade_in}`}>
                            <img src={htmlLogo} alt=""/>
                            <div className={`${styles.skills__item_name}`}>
                                HTML
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--react ${styles.skills__item_fade_in}`}>
                            <img src={reactLogo} alt="" />
                            <div class={`${styles.skills__item_name}`}>
                                REACT
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--npm ${styles.skills__item_fade_in}`}>
                            <img src={dockerLogo} alt="" />
                            <div class={`${styles.skills__item_name}`}>
                                DOCKER
                            </div>
                        </div>
                    </div><div class={styles.skills__row}>
                        <div class={`${styles.skills__item} skills__item--js ${styles.skills__item_fade_in}`}>
                            <img src={jsLogo} alt="" />
                            <div class={`${styles.skills__item_name}`}>
                                JAVASCRIPT
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--css ${styles.skills__item_fade_in}`}>
                            <img src={cssLogo} alt="" />
                            <div class={`${styles.skills__item_name}`}>
                                CSS
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--python ${styles.skills__item_fade_in}`}>
                            <img src={mongodbLogo} alt="" />
                            <div class={`${styles.skills__item_name}`}>
                                MONGODB
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--git ${styles.skills__item_fade_in}`}>
                            <img src={gitLogo} alt="" />
                            <div class={`${styles.skills__item_name}`}>
                                GIT
                            </div>
                        </div>
                    </div>
                    <div class={styles.skills__row}>
                        <div class={`${styles.skills__item} skills__item--sass ${styles.skills__item_fade_in}`}>
                            <img src={pythonLogo} alt="" />
                            <div class={`${styles.skills__item_name}`}>
                                PYTHON
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--webpack ${styles.skills__item_fade_in}`}>
                            <img src={djangoLogo} alt="" />
                            <div class={`${styles.skills__item_name}`}>
                                DJANGO
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--r ${styles.skills__item_fade_in}`}>
                            <img src={flaskLogo} alt="" />
                            <div class={`${styles.skills__item_name}`}>
                                FLASK
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;