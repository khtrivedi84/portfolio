import React from 'react';
import styles from './ContactMe.module.css';

const ContactMe = () => {
    return (
        <div id="contact" className={`container justify-content-center mt-4 ${styles.contactContainer}`}>
            <div className={`row ${styles.contactRow}`}>
                <div className="col-md-12">
                    <div className={`${styles.sectionTitle}`}>
                        <h2 className={`text-center ${styles.contactHeading}`}>Contact Me</h2>
                    </div>
                </div>
            </div>
            <div className={`row ${styles.contactInfo}`}>
                <div className={`col ${styles.infoCard}`}>
                    <i className={`fas fa-phone ${styles.infoIcon}`}></i>
                    <p>+ (669) 295 87 37</p>
                </div>
                <div className={`col ${styles.infoCard}`}>
                    <i className={`fas fa-envelope ${styles.infoIcon}`}></i>
                    <p><a className={`${styles.contactEmailText}`} href="mailto:khtrivedi84@gmail.com">khtrivedi84@gmail.com</a></p>
                </div>
                <div className={`col ${styles.infoCard}`}>
                    <i className={`fas fa-map-marker-alt ${styles.infoIcon}`}></i>
                    <p>431 El Camino Real, Santa Clara, CA</p>
                </div>
            </div>
            <div className={styles.contactForm}>
                <form>
                    <div className={`${styles.formGroup}`}>
                        <input type="text" id="name" className={`${styles.formControl}`} required />
                        <label htmlFor="name" className={styles.formLabel}>Name</label>
                    </div>
                    <div className={`${styles.formGroup}`}>
                        <input type="email" id="email" className={`${styles.formControl}`} required />
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                    </div>
                    <div className={`${styles.formGroup} ${styles.formGroupTextarea}`}>
                        <textarea id="message" className={`${styles.formControl}`} rows="5" required></textarea>
                        <label htmlFor="message" className={styles.formLabel}>Message</label>
                    </div>
                    <button type="submit" className={`btn ${styles.submitBtn}`}>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
