import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import profile from "../images/logos/logo.png";
import { IoMdContact } from "react-icons/io";
import { FaCodeBranch, FaHome, FaSuitcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { TiUser } from "react-icons/ti";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

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

    return (
        <center>
            <nav className={`navbar navbar-expand-lg ${styles.setPadding} ${scrolled ? styles.scrolled : ''}`}>
                <a aria-label='KT logo' href="/" className={`navbar-brand mx-3 ${styles.profilePicture}`}>
                    <img src={profile} alt="Profile" className="img-fluid rounded-circle" style={{ borderRadius: "50%", height: "38px", width: "40px" }} />
                </a>
                <button className={`navbar-toggler ${styles.navbarToggler} mx-2`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded={isNavExpanded} 
                        aria-label="Toggle navigation"
                        onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className={`navbar-nav nav-pills justify-content-center w-100 ${styles.headerBackground} ${styles.new_ul}`}>
                        <li className="nav-item"><a href="#hero" className={`nav-link ${styles.customNavLink}`} onClick={() => setIsNavExpanded(false)}><FaHome /> Home</a></li>
                        <li className="nav-item"><a href="#aboutme" className={`nav-link ${styles.customNavLink}`} onClick={() => setIsNavExpanded(false)}><TiUser /> About</a></li>
                        <li className="nav-item"><a href="#pro-skills-area" className={`nav-link ${styles.customNavLink}`} onClick={() => setIsNavExpanded(false)}><FaCode /> Skills</a></li>
                        <li className="nav-item"><a href="#experience" className={`nav-link ${styles.customNavLink}`} onClick={() => setIsNavExpanded(false)}><FaSuitcase /> Experience</a></li>
                        <li className="nav-item"><a href="#education" className={`nav-link ${styles.customNavLink}`} onClick={() => setIsNavExpanded(false)}><FaGraduationCap /> Education</a></li>
                        <li className="nav-item"><a href="#projects" className={`nav-link ${styles.customNavLink}`} onClick={() => setIsNavExpanded(false)}><FaCodeBranch /> Projects</a></li>
                        <li className="nav-item"><a href="#contact" className={`nav-link ${styles.customNavLink}`} onClick={() => setIsNavExpanded(false)}><IoMdContact /> Contact Me</a></li>
                    </ul>
                </div>
            </nav>
        </center>
    );
}

export default Header;
