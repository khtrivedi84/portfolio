import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactMe.module.css';

const ContactMe = () => {
    const [state, handleSubmit, reset] = useForm("mjvnjojp"); // Replace "yourFormId" with your actual Formspree form ID

    if (state.succeeded) {
        return (
            <div className={styles.successMessage}>
                Thank you for your message. I will get back to you soon! &#160;
                <a style={{textDecoration: 'underline', color: '#007bff', cursor: 'pointer'}}
                    className={styles.newMessageButton}
                    onClick={() => reset()} // Resets the form state
                >
                    {/* add space using unicode */}
                    New message?
                </a>
            </div>
        );
    }

    return (
        <div id="contact" tabIndex={0} aria-label='contact me section' className={`container justify-content-center mt-4 ${styles.contactContainer}`}>
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
                    <p>+1 (669) 295 87 37</p>
                </div>
                <div className={`col ${styles.infoCard}`}>
                    <i className={`fas fa-envelope ${styles.infoIcon}`}></i>
                    <p><a aria-label='email to khtrivedi84@gmail.com' className={`${styles.contactEmailText}`} href="mailto:khtrivedi84@gmail.com">khtrivedi84@gmail.com</a></p>
                </div>
                <div className={`col ${styles.infoCard}`}>
                    <i className={`fas fa-map-marker-alt ${styles.infoIcon}`}></i>
                    <p>431 El Camino Real, Santa Clara, CA</p>
                </div>
            </div>
            <div className={styles.contactForm}>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles.formGroup}`}>
                        <input type="text" id="name" name="name" className={`${styles.formControl}`} required />
                        <label htmlFor="name" className={styles.formLabel}>Name</label>
                    </div>
                    <div className={`${styles.formGroup}`}>
                        <input type="email" id="email" name="email" className={`${styles.formControl}`} required />
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                        <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.validationError} />
                    </div>
                    <div className={`${styles.formGroup} ${styles.formGroupTextarea}`}>
                        <textarea id="message" name="message" className={`${styles.formControl}`} rows="5" required></textarea>
                        <label htmlFor="message" className={styles.formLabel}>Message</label>
                        <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.validationError} />
                    </div>
                    <button type="submit" className={`btn ${styles.submitBtn}`} disabled={state.submitting}>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
