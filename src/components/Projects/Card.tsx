import { FC } from "react";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";
import styles from "./Card.module.css";

interface Props {
  project: (typeof projects)[0];
}

const Card: FC<Props> = ({ project }) => {
  return (
    <div className={styles.card_container}>
      <img
        src={getImageUrl(project.imagePath)}
        className={styles.card_image}
        alt=""
      />
      <h3 className={styles.card_title}>{project.title}</h3>
      <p className={styles.card_description}>{project.description}</p>
      <ul className={styles.card_skills}>
        {project.skills.map((skill, index) => {
          return (
            <li className={styles.card_skill} key={index}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.card_links}>
        <a href={project.demo} className={styles.card_link}>
          Demo
        </a>
        <a href={project.source} className={styles.card_link}>
          Source
        </a>
      </div>
    </div>
  );
};

export default Card;
