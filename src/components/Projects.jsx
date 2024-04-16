import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import e_commerce from '../images/e_commerce.png'
import revisionAi from '../images/revisionai1.png';
import covid_detector from '../images/covid_detector.png';
import comic_generator from '../images/comic_generator.png';

const projectList = [
  // Example projects. Add your projects here.
  {
    id: 1,
    title: 'E-commerce platform',
    period: 'Feb 2024 - Mar 2024',
    description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'zustand', 'Tailwind CSS', 'MongoDB'],
    imageUrl: e_commerce, // Replace with your image path
  },
  {
    id: 1,
    title: 'RevisionAI',
    period: 'Feb 2024 - Mar 2024',
    description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'zustand', 'Tailwind CSS', 'MongoDB'],
    imageUrl: revisionAi, // Replace with your image path
  },
  {
    id: 1,
    title: 'Covid Detection',
    period: 'Feb 2024 - Mar 2024',
    description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'zustand', 'Tailwind CSS', 'MongoDB'],
    imageUrl: covid_detector, // Replace with your image path
  },
  {
    id: 1,
    title: 'Comic Generator',
    period: 'Feb 2024 - Mar 2024',
    description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'zustand', 'Tailwind CSS', 'MongoDB'],
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
              {/* <p className={styles.cardDescription}>{project.description}</p> */}
              <div className={styles.cardTechnologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>{tech}</span>
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
