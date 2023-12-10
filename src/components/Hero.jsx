import yourImage from '../placeholder.png'; // Adjust the path accordingly
import SocialMedia from './SocialMedia';
import styles from "./Hero.module.css"

const Hero = () => {
    return(
        <>
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
        </div>
            <div className="row justify-content-center align-items-center" style={{textAlign:"end"}}>
                <div className="col-sm-3"></div>
                <div className="col-sm-10 col-md-3 text-light text-center">
                    <SocialMedia />
                    <div className={styles.hover_animation}>
                        <h1 data-text="Software Engineer" className={styles.h1_element}></h1>
                    </div>
                </div>
                <div className="col-sm-6 d-none d-md-block">
                    <img src={yourImage} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;