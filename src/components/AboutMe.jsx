import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={`container mt-4 justify-content-center mx-4`} style={{height:"100vh"}}>
        <div className="row justify-content-center text-white">
            <div className="col-md-5">
            <div className="about-me">
        <h2 className="about-me__title">About Me</h2>
        <p className="about-me__text">
            I am a full-stack web developer with a passion for creating beautiful,
            responsive, and user-friendly websites. I am a graduate of the
            University of California, Berkeley, where I majored in Economics and
            minored in Computer Science. I am currently working as a Software
            Engineer at a startup in San Francisco, California.
        </p>
        <p className="about-me__text">
            I have experience working with a variety of technologies, including
            React, Redux, Node.js, Express, PostgreSQL, Sequelize, and more. I am
            always looking to learn new technologies and expand my skillset.
        </p>
        <p className="about-me__text">
            When I am not coding, I enjoy playing basketball, watching sports, and
            playing video games.
        </p>
        </div>
            </div>
            <div className="col-md-5">

            </div>
        </div>
        
    </div>
  );
};

export default AboutMe;