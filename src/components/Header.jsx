import { Link } from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";
import styles from './Header.module.css';

const Header = () => {
    return(
        <>
       <div className={`container-fluid ${styles.customContainer}`}>
            <div className={`text-center mb-3 ${styles.profilePicture}`}>
                <img src="https://placehold.co/50x50" alt="Profile" className="img-fluid rounded-circle d-none d-md-block" width="50" height="50" />
            </div>
            <header className={`d-flex justify-content-center py-3 ${styles.header}`}>
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                </a>
                <ul className={`nav nav-pills ${styles.centeredUl}`}>
                    <li className="nav-item"><Link to="#" className={`nav-link ${styles.customNavLink}`}>About</Link></li>
                    <li className="nav-item"><Link to="#" className={`nav-link ${styles.customNavLink}`}>Skills</Link></li>
                    <li className="nav-item"><Link to="#" className={`nav-link ${styles.customNavLink}`}>Contact Me</Link></li>
                    <li className="nav-item"><Link to="https://github.com/kishan12345" className={`nav-link ${styles.customNavLink}`}>GitHub</Link></li>
                    <li className="nav-item"><Link to="https://www.linkedin.com/in/kishantrivediscu/" className={`nav-link ${styles.customNavLink}`}>LinkedIn</Link></li>
                    <li className="nav-item"><Link to="" className={`nav-link ${styles.resumeBtn}`}>Resume <IoCloudDownloadOutline /></Link></li>
                </ul>
            </header>
        </div>
        </>
    )
}

export default Header;