import styles from "./AboutMe.module.css";
import htmlLogo from "../html_logo.png";
import jsLogo from "../js_logo.png";
import cssLogo from "../css_logo.png";
import mongodbLogo from "../mongodb_logo.png";
import reactLogo from "../react_logo.png";
import gitLogo from "../git_logo.png";
import pythonLogo from "../python_logo.png";
import djangoLogo from "../django_logo.png";
import flaskLogo from "../flask_logo.png";
import dockerLogo from "../docker_logo.png";

const AboutMe = () => {
  return (
    <div className={`container mt-4 justify-content-center`} style={{height:"100vh"}}>
        <div className="row justify-content-center text-white gx-5">
            <div className="d-sm-none d-md-block col-md-6">
                    <div className={styles.skills}>
                        <div className={styles.skills__row}>
                        <div className={`${styles.skills__item} skills__item--html skills__item-fade-in`}>
                            <img src={htmlLogo} alt=""/>
                            <div className="skills__item-name">
                                HTML
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--react skills__item-fade-in`}>
                            <img src={reactLogo} alt="" />
                            <div class="skills__item-name">
                                REACT
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--npm skills__item-fade-in`}>
                            <img src={dockerLogo} alt="" />
                            <div class="skills__item-name">
                                DOCKER
                            </div>
                        </div>
                    </div><div class={styles.skills__row}>
                        <div class={`${styles.skills__item} skills__item--js skills__item-fade-in`}>
                            <img src={jsLogo} alt="" />
                            <div class="skills__item-name">
                                JAVASCRIPT
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--css skills__item-fade-in`}>
                            <img src={cssLogo} alt="" />
                            <div class="skills__item-name">
                                CSS
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--python skills__item-fade-in`}>
                            <img src={mongodbLogo} alt="" />
                            <div class="skills__item-name">
                                MONGODB
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--git skills__item-fade-in`}>
                            <img src={gitLogo} alt="" />
                            <div class="skills__item-name">
                                GIT
                            </div>
                        </div>
                    </div>
                    <div class={styles.skills__row}>
                        <div class={`${styles.skills__item} skills__item--sass skills__item-fade-in`}>
                            <img src={pythonLogo} alt="" />
                            <div class="skills__item-name">
                                PYTHON
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--webpack skills__item-fade-in`}>
                            <img src={djangoLogo} alt="" />
                            <div class="skills__item-name">
                                DJANGO
                            </div>
                        </div>
                        <div class={`${styles.skills__item} skills__item--r skills__item-fade-in`}>
                            <img src={flaskLogo} alt="" />
                            <div class="skills__item-name">
                                FLASK
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="about-me">
                    <h2 className="about-me__title text-center">About Me</h2>
                    <p className="about-me__text">
                        Hello! 👋 I'm a seasoned computer engineer with a passion for code and innovation, holding a Master's in Computer Science and Engineering from Santa Clara University. Proficient in Python, JavaScript, Data Structures, Algorithms, and various frameworks, I navigate the dynamic interplay between creativity and technology in web development.
                    </p>
                        <p className="about-me__text">
                            Beyond the tech realm, catch me exploring the latest trends 🚀, enjoying a hike 🏞️, or uncovering hidden city gems. Whether tackling code challenges or blazing new trails, I'm always ready for an adventure.
                        </p>
                        <p className="about-me__text">
                            I have experience working with a variety of technologies, including Django, Flask, SQL, React, Redux, PostgreSQL, and more. I am always looking to learn new technologies and expand my skillset.
                        </p>
                    <p className="about-me__text">
                        Let's connect and share stories—exploring the exciting journey where technology meets imagination. Ready to embark on this journey together? 🚀
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;