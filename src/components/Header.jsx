import { Link } from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";
import styles from './Header.module.css';

const Header = () => {
    return(
        <center>
        <nav className={`navbar navbar-expand-lg ${styles.setPadding}`}>
                <a className={`navbar-brand mx-3 ${styles.profilePicture}`}>
                    <img src="https://placehold.co/50x50" alt="Profile" className="img-fluid rounded-circle d-md-block" width="50" height="50" />
                </a>
                <button className={`navbar-toggler ${styles.navbarToggler} mx-2`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav nav-pills justify-content-center w-100 ${styles.headerBackground}`}>
                        <a href="#aboutme" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item">About</li></a>
                        <a href="#skills" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item">Skills</li></a>
                        <a href="#projects" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item">Projects</li></a>
                        <a href="#contact" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item">Contact Me</li></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/khtrivedi/" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item">LinkedIn</li></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/khtrivedi84" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item">GitHub</li></a>
                        <li className="nav-item"><Link to="" className={`nav-link ${styles.resumeBtn}`}>Resume <IoCloudDownloadOutline /></Link></li>
                    </ul>
                </div>
        </nav>
        </center>
    )
}

export default Header;