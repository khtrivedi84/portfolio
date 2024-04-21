import React from 'react';
import Modal from 'react-modal';
import Carousel from 'react-bootstrap/Carousel';
import {FaGithub} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import styles from './ProjectModal.module.css';

Modal.setAppElement('#root');

const tech_map = {
  'Python': "https://www.svgrepo.com/show/376344/python.svg",
  'Django': "https://download.logo.wine/logo/Django_(web_framework)/Django_(web_framework)-Logo.wine.png",
  'SQLite': "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/120px-SQLite370.svg.png",
  'Flask': "https://static-00.iconduck.com/assets.00/flask-icon-1594x2048-84mjydzf.png",
  'Celery': "https://upload.wikimedia.org/wikipedia/commons/1/19/Celery_logo.png",
  'Keras': "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
  'TensorFlow': "https://upload.wikimedia.org/wikipedia/commons/a/ab/TensorFlow_logo.svg",
  'NumPy': "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
  'Jupyter': "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
  'Colab': "https://upload.wikimedia.org/wikipedia/commons/archive/d/d0/20221103151430%21Google_Colaboratory_SVG_Logo.svg",
  'JavaScript': "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
  'HTML': "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
  'CSS': "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  'Bootstrap': "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  'AWS': "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  'Docker': "https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png",
  'github': "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  'API': "https://upload.wikimedia.org/wikipedia/commons/a/a6/Api_logo.jpg",
  'OpenAI': "https://upload.wikimedia.org/wikipedia/commons/archive/4/4d/20230731013807%21OpenAI_Logo.svg",
  'AI': "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png",
  'StableDiffusion': "https://upload.wikimedia.org/wikipedia/commons/2/2f/Paint_palette_icon_from_the_Noun_Project.svg",
  'React': "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  'NodeJS': "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  'MongoDB': "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  'Google Cloud Platform': "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  'Firebase': "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
  'Redux': "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
  'Express': "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
};

const ProjectModal = ({ isOpen, closeModal, project }) => {

  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Project Details"
      className={`${styles.modalContent}`}
      overlayClassName={`${styles.modalOverlay}`}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <button className={styles.close} onClick={closeModal}><IoMdCloseCircle /></button>
      <h2 className={styles.projectTitle}>{project.title} <a href={project.link} target="_blank" rel="noreferrer" className={`btn btn-primary ${styles.viewLive}`}>View on GitHub <FaGithub /></a></h2>
      <p className={styles.projectdescription}>{project.long_description}</p>
      <div className={styles.techContainer}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={`${styles.techBadge}`}><img alt={tech} src={tech_map[tech]} style={{height:"24px", width:"24px"}}></img> {tech}</span>
        ))}
      </div>
      <Carousel interval={null} controls={project.images.length > 1}>
        {project.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={project.title}
              style={{ maxHeight: "50vh", objectFit: 'contain' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Modal>
  );
};

export default ProjectModal;