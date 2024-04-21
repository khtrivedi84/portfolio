import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className={styles.footerText}>© 2024 - Designed by <a href="" className={styles.footerLink}>Kishan Trivedi</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;