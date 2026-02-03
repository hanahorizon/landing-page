import React from "react";
import styles from "../Styles/Contact.module.css";

const ContactForm = () => {
  return (
    <section className={`${styles.contactSection} container`}>
        <div className={styles.Title}><h3>Contact Us</h3></div>
      <div className={styles.contactCard}>
        
        <div className={styles.imageWrapper}>
          <img
            src="https://magneticonemobile.com/wp-content/uploads/2020/04/The-best-way-to-organize-business-contacts.png"
            alt="Office workspace"
          />
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactForm;
