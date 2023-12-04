import { Link } from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Header = () => {
    return(
        <>
       <div className="container has-dim-4">
            <header className="d-flex justify-content-center py-3">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                </a>
                <ul className="nav nav-pills centered-ul">
                    <li className="nav-item"><Link to="#" className="nav-link custom-nav-link">About</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link custom-nav-link">Projects</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link custom-nav-link">Contact Me</Link></li>
                    <li className="nav-item"><Link to="https://github.com/kishan12345" className="nav-link custom-nav-link">GitHub</Link></li>
                    <li className="nav-item"><Link to="https://www.linkedin.com/in/kishantrivediscu/" className="nav-link custom-nav-link">LinkedIn</Link></li>
                    <li className="nav-item"><Link to="" className="nav-link resume-btn">Resume <IoCloudDownloadOutline /></Link></li>
                </ul>
            </header>
        </div>
        </>
    )
}

export default Header;