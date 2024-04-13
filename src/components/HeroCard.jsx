// Adjustments in HeroCard.js - adding className to icons
import React from 'react';
import styles from './HeroCard.module.css'; // Ensure this is the correct path to your CSS module
import backgroundImage from '../images/e_commerce.png'; // Ensure this is the correct path to your background image
import { IoArrowForwardCircleSharp, IoArrowBackCircleSharp  } from "react-icons/io5";

const HeroCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styles.content}>
          <h2 className={styles.title}>E-commerce platform</h2>
          <p className={styles.description}>
            An e-commerce site built using Python Django, SQLite, HTML, CSS, JavaScript, and Bootstrap.
          </p>
        </div>
      </div>
      <div className={styles.arrowLeft}>
        <IoArrowBackCircleSharp size={30}  /> 
      </div>
      <div className={styles.arrowRight}>
        <IoArrowForwardCircleSharp size={30}  /> 
      </div>
    </div>
  );
}

export default HeroCard;
