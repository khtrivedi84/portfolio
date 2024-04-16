import styles from "./SocialMedia.module.css"
import { FaGithub, FaDownload} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
    return (
        <ul className={styles.wrapper}>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/khtrivedi/">
            <li className={`${styles.icon} ${styles.linkedin}`}>
                <span className={`${styles.tooltip}`}>LinkedIn</span>
                <span style={{color:"black"}}><FaLinkedin /></span>
            </li>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/khtrivedi84">
            <li className={`${styles.icon} ${styles.github}`}>
                <span className={`${styles.tooltip}`}>GitHub</span>
                <span style={{color:"black"}}><FaGithub /></span>
            </li>
            </a>
            <a target="_blank" rel="noreferrer" href="mailto:khtrivedi84@gmail.com">
            <li className={`${styles.icon} ${styles.gmail}`}>
                <span className={`${styles.tooltip}`}>Gmail</span>
                <span style={{color:"black"}}><SiGmail /></span>
            </li>
            </a>
            <a target="_blank" rel="noreferrer" href="#" style={{textDecoration:"none"}}>
            <li className={`${styles.icon2} ${styles.resume}`}>
                <span className={`${styles.tooltip}`}>Resume</span>
                <span className={`${styles.resumeButton}`} style={{color:"black"}}>Check Resume {'\u00A0'}<FaDownload /></span>
            </li>
            </a>
        </ul>
    )
}

export default SocialMedia;