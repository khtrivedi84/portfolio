import { Link } from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";
import styles from './Header.module.css';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg">
        <div className={`container-fluid ${styles.customContainer}`}>
                <div className={`text-center mb-3 ${styles.profilePicture}`}>
                    <img src="https://placehold.co/50x50" alt="Profile" className="img-fluid rounded-circle d-md-block" width="50" height="50" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <header className={`d-flex justify-content-center py-3 ${styles.header}`}>
                        <ul className={`navbar-nav nav-pills ${styles.centeredUl}`}>
                            <li className="nav-item"><Link to="#" className={`nav-link ${styles.customNavLink}`}>About</Link></li>
                            <li className="nav-item"><Link to="#" className={`nav-link ${styles.customNavLink}`}>Skills</Link></li>
                            <li className="nav-item"><Link to="#" className={`nav-link ${styles.customNavLink}`}>Projects</Link></li>
                            <li className="nav-item"><Link to="https://github.com/kishan12345" className={`nav-link ${styles.customNavLink}`}>Contact Me</Link></li>
                            <li className="nav-item"><Link to="https://www.linkedin.com/in/kishantrivediscu/" className={`nav-link ${styles.customNavLink}`}>LinkedIn</Link></li>
                            <li className="nav-item"><Link to="" className={`nav-link ${styles.resumeBtn}`}>Resume <IoCloudDownloadOutline /></Link></li>
                        </ul>
                    </header>
                </div>
            </div>
        </nav>
    )
}

export default Header;