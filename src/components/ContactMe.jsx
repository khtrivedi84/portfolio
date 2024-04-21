import React from 'react';
import styles from './ContactMe.module.css';

const ContactMe = () => {
    return (
        <div id="contact" className={`container justify-content-center mt-4 ${styles.contactContainer}`}>
            <div className={`row ${styles.contactRow}`}>
                <div className="col-md-12">
                    <div className={`${styles.sectionTitle}`}>
                        <h2 className={`text-center ${styles.contactHeading} ${styles.sectionh2}`}>Contact Me</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={`${styles.contactForm}`}>
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className={`${styles.nameInput}`}>
                                        <div className="form-group">
                                            <input placeholder='Name*' type="text" className="form-control" id="name" required aria-invalid="false" />
                                            <p className={`${styles.helpBlock} text-danger`}></p>
                                        </div>
                                        <span>Name *</span>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className={`${styles.emailInput}`}>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" required />
                                            <p className={`${styles.helpBlock} text-danger`}></p>
                                            <span>Email *</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className={`${styles.textareaInput}`}>
                                        <div className="form-group">
                                            <textarea className="form-control" id="message" required></textarea>
                                            <p className={`${styles.helpBlock} text-danger`}></p>
                                            <span>Message *</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button type="submit" className="contact-btn">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
