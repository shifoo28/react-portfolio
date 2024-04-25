import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.exp_container} id="experience">
      <h2 className={styles.exp_title}>Experience</h2>
      <div className={styles.exp_content}>
        <div className={styles.exp_skills}>
          {skills.map((skill, index) => {
            return (
              <div className={styles.exp_skill} key={index}>
                <div className={styles.exp_skill_img_container}>
                  <img src={getImageUrl(skill.imagePath)} alt="" />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.exp_history}>
          {history.map((item, index) => {
            return (
              <li className={styles.exp_history_item} key={index}>
                <img src={getImageUrl(item.imagePath)} alt="" />
                <div className={styles.exp_history_item_details}>
                  <h3>{item.role + " " + item.organozation}</h3>
                  <p>{item.startDate + "-" + item.endDate}</p>
                  <ul>
                    {item.experiences.map((exp, index) => {
                      return <li key={index}>{exp}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
