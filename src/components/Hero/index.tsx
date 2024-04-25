import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>Hi! I'm Shadyyan</h1>
        <p className={styles.hero_description}>
          I'm full-stack developer of 3 years of experience using React and
          NodeJS. Reach out if you'd like learn more!
        </p>
        <a
          href="mailto:shifoo2802@gmail.com"
          className={styles.hero_contact_btn}
        >
          Contact me!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        className={styles.hero_image}
        alt=""
      />
      <div className={styles.hero_top_blur}></div>
      <div className={styles.hero_bottom_blur}></div>
    </section>
  );
};

export default Hero;
