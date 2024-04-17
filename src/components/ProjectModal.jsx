import React, { useRef, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Carousel from 'react-bootstrap/Carousel';
import e_commerce from '../images/e_commerce.png';
import { FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaAws, FaDocker, FaGithub } from "react-icons/fa";
import { SiDjango, SiSqlite, SiFlask, SiCelery, SiKeras, SiTensorflow, SiNumpy, SiJupyter, SiGooglecolab } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoIosColorPalette, IoMdCloseCircle } from "react-icons/io";
import styles from './ProjectModal.module.css';
import { auto } from '@popperjs/core';

Modal.setAppElement('#root');

const tech_map = {
  // Your tech_map remains the same
};

const ProjectModal = ({ isOpen, closeModal, project }) => {
  const modalRef = useRef(null); // Ref for the modal content
  const [carouselHeight, setCarouselHeight] = useState('30vh'); // State to store the calculated height

  useEffect(() => {
    if (modalRef.current) {
      const height = modalRef.current.clientHeight; // Get the height of the modal content
      setCarouselHeight(`${height * 0.6}px`); // Set the carousel height to 60% of the modal height
    }
  }, [isOpen]); // Recalculate when modal opens

  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Project Details"
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      ref={modalRef} // Attach ref
    >
      <button className={styles.close} onClick={closeModal}><IoMdCloseCircle /></button>
      <h2 className={styles.projectTitle}>{project.title} 
        <a href={project.link} target="_blank" rel="noreferrer" className={`btn btn-primary ${styles.viewLive}`}>View on GitHub <FaGithub /></a>
      </h2>
      <p className={styles.projectPeriod}>{project.period}</p>
      <p className={styles.projectdescription}>{project.long_description}</p>
      <div className={styles.techContainer}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={`${styles[tech]} ${styles.techBadge}`}>{tech_map[tech]} {tech}</span>
        ))}
      </div>
      <div>
        <Carousel interval={null}>
          {project.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={project.title}
                style= {{maxHeight: "50vh", objectFit: 'contain'}}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Modal>
  );
};

export default ProjectModal;
