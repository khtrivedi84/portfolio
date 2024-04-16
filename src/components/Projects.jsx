import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import e_commerce from '../images/e_commerce.png'
import revisionAi from '../images/revisionai1.png';
import covid_detector from '../images/covid_detector.png';
import comic_generator from '../images/comic_generator.png';
import { FaPython, FaHtml5, FaBootstrap, FaCss3Alt, FaAws, FaDocker} from "react-icons/fa";
import { SiDjango, SiSqlite, SiFlask, SiCelery, SiKeras, SiTensorflow, SiNumpy, SiJupyter, SiGooglecolab } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";

const projectList = [
  {
    id: 1,
    title: 'E-commerce platform',
    period: 'Feb 2024 - Mar 2024',
    description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: [['Python', <FaPython />], ['Django', <SiDjango/>], ['HTML', <FaHtml5 />
  ], ['CSS', <FaCss3Alt/>], ['JavaScript', <IoLogoJavascript />], ['SQLite', <SiSqlite/>], ['Bootstrap', <FaBootstrap/>], ['Celery', <SiCelery/>]],
    imageUrl: e_commerce, // Replace with your image path
  },
  {
    id: 1,
    title: 'RevisionAI',
    period: 'Feb 2024 - Mar 2024',
    description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: [['Python', <FaPython />], ['Flask', <SiFlask/>], ['API', <TbApi />], ['OpenAI', <RiOpenaiFill />],['AWS',<FaAws />], ['Docker', <FaDocker />], ['JavaScript', <IoLogoJavascript />], ['Bootstrap', <FaBootstrap/>], ['HTML', <FaHtml5 />
  ], ['CSS', <FaCss3Alt/>], ['AI', <GiArtificialIntelligence />]],
    imageUrl: revisionAi, // Replace with your image path
  },
  {
    id: 1,
    title: 'Covid Detection',
    period: 'Feb 2024 - Mar 2024',
    description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: [['Python', <FaPython />], ['Flask', <SiFlask/>], ['Keras', <SiKeras/>], ['TensorFlow', <SiTensorflow/>], ['NumPy', <SiNumpy />], ['OpenAI', <RiOpenaiFill />], ['HTML', <FaHtml5 />
  ], ['CSS', <FaCss3Alt/>], ['JavaScript', <IoLogoJavascript />]],
    imageUrl: covid_detector, // Replace with your image path
  },
  {
    id: 1,
    title: 'Comic Generator',
    period: 'Feb 2024 - Mar 2024',
    description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: [['Python', <FaPython />], ['Jupyter', <SiJupyter />], ['StableDiffusion', <IoIosColorPalette />], ['Colab', <SiGooglecolab />], ['AI', <GiArtificialIntelligence />], ['OpenAI', <RiOpenaiFill />]],
    imageUrl: comic_generator, // Replace with your image path
  }
  // ... more projects
];

const cardVariants = {
  hover: {
    scale: 1.05
  }
};

const Projects = () => {
  return (
    <div id="projects" className={`container justify-content-center mt-4 ${styles.projectsContainer}`}>
      <div className={`row ${styles.cardsRow}`}>
      <h2 className={`text-center mt-4 text-light`}>Projects</h2>
        {projectList.map((project) => (
          <motion.div
            key={project.id}
            className={`col-lg-3 col-md-4 col-sm-6 ${styles.card}`}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className={styles.cardImageContainer}>
              <img src={project.imageUrl} alt={project.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{project.title}</h5>
              <div className={styles.cardTechnologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={`${styles.techBadge} ${styles[tech[0]]}`}>{tech[1]} {tech[0]}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
