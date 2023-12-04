import styles from "./SocialMedia.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import {Link} from "react-router-dom"

const SocialMedia = () => {
    return (
        <ul className={styles.wrapper}>
            <Link to="https://www.linkedin.com/in/kishantrivediscu/">
            <li className={`${styles.icon} ${styles.linkedin}`}>
                <span className={`${styles.tooltip}`}>LinkedIn</span>
                <span style={{color:"black"}}><FaLinkedin /></span>
            </li>
            </Link>
            <Link to="https://github.com/kishan12345">
            <li className={`${styles.icon} ${styles.github}`}>
                <span className={`${styles.tooltip}`}>GitHub</span>
                <span style={{color:"black"}}><FaGithub /></span>
            </li>
            </Link>
        </ul>
    )
}

export default SocialMedia;