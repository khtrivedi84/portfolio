import React from 'react';
import Modal from 'react-modal';
import Carousel from 'react-bootstrap/Carousel';
import { FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaAws, FaDocker, FaGithub, FaReact, FaNode, FaGoogle} from "react-icons/fa";
import { SiDjango, SiSqlite, SiFlask, SiCelery, SiKeras, SiTensorflow, SiNumpy, SiJupyter, SiGooglecolab, SiRedux } from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoIosColorPalette, IoMdCloseCircle } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import styles from './ProjectModal.module.css';

Modal.setAppElement('#root');

const tech_map = {
  'Python': <FaPython />,
  'Django': <SiDjango />,
  'SQLite': <SiSqlite />,
  'Flask': <SiFlask />,
  'Celery': <SiCelery />,
  'Keras': <SiKeras />,
  'TensorFlow': <SiTensorflow />,
  'NumPy': <SiNumpy />,
  'Jupyter': <SiJupyter />,
  'Colab': <SiGooglecolab />,
  'JavaScript': <IoLogoJavascript />,
  'HTML': <FaHtml5 />,
  'CSS': <FaCss3Alt />,
  'Bootstrap': <FaBootstrap />,
  'AWS': <FaAws />,
  'Docker': <FaDocker />,
  'github': <FaGithub />,
  'API': <TbApi />,
  'OpenAI': <RiOpenaiFill />,
  'AI': <GiArtificialIntelligence />,
  'StableDiffusion': <IoIosColorPalette />,
  'React': <FaReact />,
  'NodeJS': <FaNode />,
  'MongoDB': <BiLogoMongodb />,
  'Google Cloud Platform': <FaGoogle />,
  'Firebase': <IoLogoFirebase />,
  'Redux': <SiRedux />,
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
          <span key={index} className={`${styles.techBadge}`}>{tech_map[tech]} {tech}</span>
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