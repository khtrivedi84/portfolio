import styles from './Header.module.css';
import profile from "../images/logos/logo.png";
import { useEffect, useState } from 'react';
import { IoMdContact } from "react-icons/io";
import { FaCodeBranch, FaHome, FaSuitcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return(
        <center>
        <nav className={`navbar navbar-expand-lg ${styles.setPadding} ${scrolled ? styles.scrolled : ''}`}>
                <a href="/" className={`navbar-brand mx-3 ${styles.profilePicture}`}>
                    <img src={profile} alt="Profile" className="img-fluid rounded-circle d-md-block" style={{borderRadius:"50%", height:"38px", width:"40px"}} />
                </a>
                <button className={`navbar-toggler ${styles.navbarToggler} mx-2`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav nav-pills justify-content-center w-100 ${styles.headerBackground} ${styles.new_ul}`}>
                        <a href="#hero" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaHome /> Home</li></a>
                        <a href="#aboutme" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><TiUser /> About</li></a>
                        <a href="#pro-skills-area" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaCode /> Skills</li></a>
                        <a href="#experience" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaSuitcase /> Experience</li></a>
                        <a href="#education" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaGraduationCap /> Education</li></a>
                        <a href="#projects" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaCodeBranch /> Projects</li></a>
                        <a href="#contact" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><IoMdContact /> Contact Me</li></a>
                    </ul>
                </div>
        </nav>
        </center>
    )
}

export default Header;
