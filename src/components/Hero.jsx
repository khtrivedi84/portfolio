import yourImage from '../placeholder.png'; // Adjust the path accordingly
import SocialMedia from './SocialMedia';
import styles from "./Hero.module.css"
import { right } from '@popperjs/core';

const Hero = () => {
    return(
        <>
        <div className="container-fluid">
            <div className={`row justify-content-center ${styles.verticalCenter}`} style={{height:"100vh"}}>
                <div className="col-sm-10 col-md-9 text-light text-center">
                <div className={styles.hover_animation}>
                        <h1 data-text="I'm Kishan Trivedi" className={styles.h1_element}></h1>
                </div>
                <div className={`mt-4 ${styles.mobileMargin}`} style={{height:"75px"}}></div>
                <div>
                    <p style={{fontSize:"24px"}} className="text-light">Software Engineer | Web Developer | AI and ML </p>
                </div>
                <div style={{height:"75px"}}></div>
                <SocialMedia />
                </div>
                <div className="col-sm-3 d-none d-lg-block" style={{textAlign:"end"}}>
                    <img className={`${styles.hero_image}`} src={yourImage} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;