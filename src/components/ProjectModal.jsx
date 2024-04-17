import React from 'react';
import Modal from 'react-modal';
import { FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaAws, FaDocker, FaGithub } from "react-icons/fa";
import { SiDjango, SiSqlite, SiFlask, SiCelery, SiKeras, SiTensorflow, SiNumpy, SiJupyter, SiGooglecolab } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoIosColorPalette, IoMdCloseCircle } from "react-icons/io";
import styles from './ProjectModal.module.css';

Modal.setAppElement('#root');

const tech_map = {
  'Python': <FaPython />,
  'Django': <SiDjango />,
  'HTML': <FaHtml5 />,
  'CSS': <FaCss3Alt />,
  'JavaScript': <IoLogoJavascript />,
  'SQLite': <SiSqlite />,
  'Bootstrap': <FaBootstrap />,
  'Celery': <SiCelery />,
  'Flask': <SiFlask />,
  'API': <TbApi />,
  'OpenAI': <RiOpenaiFill />,
  'AWS': <FaAws />,
  'Docker': <FaDocker />,
  'Keras': <SiKeras />,
  'TensorFlow': <SiTensorflow />,
  'NumPy': <SiNumpy />,
  'Jupyter': <SiJupyter />,
  'GoogleColab': <SiGooglecolab />,
  'AI': <GiArtificialIntelligence />,
  'StableDiffusion': <IoIosColorPalette />
};

const ProjectModal = ({ isOpen, closeModal, project }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Project Details"
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <button className={styles.close} onClick={closeModal}><IoMdCloseCircle /></button>
      <h2 className={`${styles.projectTitle}`}>{project.title} {'\u00A0'} 
        <a href={project.link} target="_blank" rel="noreferrer" className={`btn btn-primary ${styles.viewLive}`}>View on GitHub <FaGithub /></a>
      </h2>
      <p className={`${styles.projectPeriod}`}>{project.period}</p>
      <p className={`${styles.projectdescription}`}>{project.long_description}</p>
      <div className={styles.techContainer}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={`${styles[tech]} ${styles.techBadge}`}>{tech_map[tech]} {tech}{'\u00A0'}</span>
        ))}
      </div>
    </Modal>
  );
};

export default ProjectModal;
