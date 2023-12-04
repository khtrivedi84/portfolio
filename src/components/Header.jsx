import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
       <div className="container has-dim-4">
            <header className="d-flex justify-content-center py-3">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                </a>
                <ul className="nav nav-pills centered-ul">
                    <li className="nav-item"><Link href="#" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link">Projects</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link">Contact Me</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link">GitHub</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link">LinkedIn</Link></li>
                </ul>
            </header>
        </div>
        </>
    )
}

export default Header;