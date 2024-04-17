import React, {useState} from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import e_commerce from '../images/e_commerce.png';
import e_commerce_landing from '../images/e_commerce/landing.png';
import item_description from '../images/e_commerce/item_description.png';
import home_items from '../images/e_commerce/home_items.png';
import login from '../images/e_commerce/login.png';
import e_commerce_user_profile from '../images/e_commerce/e_commerce_user_profile.png';
import cart from '../images/e_commerce/cart.png';
import shop from '../images/e_commerce/shop.png';
import payment from '../images/e_commerce/payment.png';
import revisionAi from '../images/revisionai1.png';
import covid_detector from '../images/covid_detector.png';
import comic_generator from '../images/comic_generator.png';
import { FaEye } from "react-icons/fa";


const projectList = [
  {
    id: 1,
    title: 'E-commerce platform',
    period: 'Feb 2024 - Mar 2024',
    short_description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    long_description: 'An e-commerce website built using Python Django that allows users to purchase shoes of different brands. It includes all the basic functionalities of an e-commerce project, providing a seamless shopping experience for users.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'Bootstrap', 'Celery'],
    thumbnail: e_commerce,
    images: [e_commerce_landing, home_items, item_description, login, e_commerce_user_profile, cart, shop, payment],
    link: "https://github.com/khtrivedi84/E-commerce-shoes"
  },
  {
    id: 2,
    title: 'RevisionAI',
    period: 'Feb 2024 - Mar 2024',
    short_description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: ['Python', 'Flask', 'API', 'OpenAI', 'AWS', 'Docker', 'JavaScript', 'Bootstrap', 'HTML', 'CSS', 'AI'],
    thumbnail: revisionAi,
    images: [revisionAi, revisionAi, revisionAi, revisionAi],
  },
  {
    id: 3,
    title: 'Covid Detection',
    period: 'Feb 2024 - Mar 2024',
    short_description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: ['Python', 'Flask', 'Keras', 'TensorFlow', 'NumPy', 'OpenAI', 'HTML', 'CSS', 'JavaScript'],
    thumbnail: covid_detector,
    images: [covid_detector, covid_detector, covid_detector, covid_detector],
  },
  {
    id: 4,
    title: 'Comic Generator',
    period: 'Feb 2024 - Mar 2024',
    short_description: 'A chat application using MERN stack. Implemented real-time communication feature using Socket.io.',
    technologies: ['Python', 'Jupyter', 'StableDiffusion', 'Colab', 'AI', 'OpenAI'],
    thumbnail: comic_generator,
    images: [comic_generator, comic_generator, comic_generator, comic_generator],
  },
];

const cardVariants = {
  hover: {
    translateY: -15,
    boxShadow: '0px 10px 20px rgba(255, 255, 255, 0.3)',
    transition: {
      duration: 0.2,
    },
  }
};

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="projects" className={`container justify-content-center mt-4 ${styles.projectsContainer}`}>
      <div className={`row ${styles.cardsRow}`}>
        <h2 className={`text-center mt-4 text-light`}>Projects</h2>
        {projectList.map((project) => (
          <motion.div
            key={project.id}
            className={`col-lg-3 col-md-4 col-sm-6 ${styles.card2} mx-md-3`}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => openModal(project)}
          >
            <div className={`${styles.cardImageContainer}`}>
              <img src={project.thumbnail} alt={project.title} className={styles.cardImage} />
              <div className={styles.overlay_card}>
                  <FaEye  className={`${styles.overlayIcon} d-none d-lg-block`} />
                  <div className={styles.lBorderTopLeft}></div>
                  <div className={styles.lBorderBottomRight}></div>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{project.title}</h5>
              <p className={styles.cardDescription}>{project.short_description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <ProjectModal isOpen={modalIsOpen} closeModal={closeModal} project={selectedProject} />
    </div>
  );
}

export default Projects;