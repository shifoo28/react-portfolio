import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.about_container} id="about">
      <h2 className={styles.about_title}>About me</h2>
      <div className={styles.about_content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          className={styles.about_image}
          alt=""
        />
        <ul className={styles.about_list}>
          <li className={styles.about_item}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.about_item_text}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building reponsive
                and optimized websites
              </p>
            </div>
          </li>
          <li className={styles.about_item}>
            <img src={getImageUrl("about/serverIcon.png")} alt="" />
            <div className={styles.about_item_text}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized servers and APIs
              </p>
            </div>
          </li>
          <li className={styles.about_item}>
            <img src={getImageUrl("about/uiIcon.png")} alt="" />
            <div className={styles.about_item_text}>
              <h3>UI Design</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
