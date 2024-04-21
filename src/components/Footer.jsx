import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className={styles.footerText}>© 2021 - Designed by <a href="" className={styles.footerLink}>Sara</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;