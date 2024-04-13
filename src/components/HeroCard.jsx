import React, { useState, useEffect } from 'react';
import styles from './HeroCard.module.css'; // Ensure this is the correct path to your CSS module
import backgroundImage1 from '../images/e_commerce.png';
import backgroundImage2 from '../images/revisionai1.png';
import backgroundImage3 from '../images/covid_detector.png';
import backgroundImage4 from '../images/comic_generator.png';
import { IoArrowForwardCircleSharp, IoArrowBackCircleSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroCard = () => {
  const [rotation, setRotation] = useState(0); // State to manage the rotation of the cube
  const [isRotating, setIsRotating] = useState(true); // State to control automatic rotation

  useEffect(() => {
    // Start automatic rotation when component mounts
    const interval = setInterval(() => {
      setRotation(rotation => rotation - 90); // Rotate to the next image
    }, 3000); // Adjust the interval as needed

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  const handlePrevClick = () => {
    // Stop automatic rotation when user interacts with the arrows
    setIsRotating(false);
    setRotation(rotation => rotation + 90); // Rotate to the previous image
  };

  const handleNextClick = () => {
    // Stop automatic rotation when user interacts with the arrows
    setIsRotating(false);
    setRotation(rotation => rotation - 90); // Rotate to the next image
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cube} style={{ transform: `rotateY(${rotation}deg)` }}>
            <div className={styles.front} style={{ backgroundImage: `url(${backgroundImage1})` }}>
              <div className={styles.content} style={{ height: `auto`, marginTop: "93%" }}>
                <h2 className={styles.title}>E-commerce platform</h2>
                <p className={styles.description}>
                  An e-commerce site built using Python Django, SQLite, HTML, CSS, JavaScript, and Bootstrap.
                </p>
              </div>
            </div>
            <div className={styles.right} style={{ backgroundImage: `url(${backgroundImage2})` }}>
              <div className={styles.content} style={{ height: `100px`, marginTop: "93%" }}>
                <h2 className={styles.title}>RevisionAI</h2>
                <p className={styles.description}>
                  An AI powered tool to summarize class recordings and do quick revision.
                </p>
              </div>
            </div>
            <div className={styles.back} style={{ backgroundImage: `url(${backgroundImage3})` }}>
              <div className={styles.content} style={{ height: `120px`, marginTop: "89%" }}>
                <h2 className={styles.title}>Covid Detection</h2>
                <p className={styles.description}>
                  A web application that utilizes Deep Learning model for detecting Covid using CT scan images. It also features an AI ChatBot that provides recovery suggestions.
                </p>
              </div>
            </div>
            <div className={styles.left} style={{ backgroundImage: `url(${backgroundImage4})`, color: "white" }}>
              <div className={styles.content} style={{ height: `100px`, marginTop: "93.7%" }}>
                <h2 className={styles.title}>Comic Maker</h2>
                <p className={styles.description}>
                  Custom AI generates comic panels featuring you as any superhero in your chosen art style.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.arrowLeft} onClick={handlePrevClick}>
          <IoArrowBackCircleSharp size={30} />
        </div>
        <div className={styles.arrowRight} onClick={handleNextClick}>
          <IoArrowForwardCircleSharp size={30} />
        </div>
      </div>
      <p className={`${styles.viewAllProjects} my-3`}>View all projects <FaLongArrowAltRight /></p>
    </div>
  );
}

export default HeroCard;
