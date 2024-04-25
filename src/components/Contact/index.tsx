import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer className={styles.contact_container} id="contact">
      <div className={styles.contact_text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.contact_links}>
        <li className={styles.contact_link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:shifoo2802@gmail.com">shifoo2802@gmail.com</a>
        </li>
        <li className={styles.contact_link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
          <a href="https://linkedin.com">linkedin.com</a>
        </li>
        <li className={styles.contact_link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/shifoo28">shifoo28</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
