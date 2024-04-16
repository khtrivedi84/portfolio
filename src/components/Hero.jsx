import { motion } from 'framer-motion';
import SocialMedia from './SocialMedia';
import styles from "./Hero.module.css";
import { FaArrowDown } from 'react-icons/fa';
import Card from './HeroCard';

const Hero = () => {
    return(
        <div className={`row justify-content-center align-items-center`} style={{height:"100vh", transform:"translateY(15%)"}}>
            <motion.div 
                className={`col-sm-10 col-md-9 text-light text-center position-relative ${styles.mobileTop}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className={styles.hover_animation}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h1 data-text="Hi, I'm Kishan Trivedi" className={styles.h1_element}></h1>
                </motion.div>
                <div className={`mt-4 ${styles.mobileMargin}`} style={{height:"75px"}}></div>
                <motion.p 
                    style={{fontSize:"24px"}} 
                    className="text-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    Software Engineer | Web Developer | AI and ML Enthusiast
                </motion.p>
                <div style={{height:"75px"}}></div>
                <SocialMedia />
            
            </motion.div>
            <motion.div 
                className={`${styles.scrollMoreMobile}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <a href="#aboutme" className={`btn btn-primary ${styles.scrollMore2} ${styles.buttonMargin}`}>
                    <span style={{position:'relative', top:"25%"}}>Know More!</span>
                    <div className={`position-absolute bottom-0 end-0  ${styles.bounceArrow}`}>
                        <FaArrowDown size={20} color="#fff" />
                    </div>
                </a>
            </motion.div>
            {/* <motion.div 
                className={`col-sm-3 d-none d-lg-block ${styles.setMargin}`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <Card />
            </motion.div> */}
                
            <motion.div 
                className={`${styles.scrollMoreDesktop}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <a href="#aboutme" className={`${styles.scrollMore} ${styles.buttonMargin}`}>
                    <div className={`${styles.bounceArrow2}`}>
                        <FaArrowDown size={20} color="#fff" />
                    </div>
                    <span style={{position:'relative', top:"25%", display:"flex", justifyContent:"center"}}>Know More!</span>
                </a>
            </motion.div>
        </div>
    )
}

export default Hero;
