import projects from "../../data/projects.json";
import styles from "./Project.module.css";
import Card from "./Card";

const Projects = () => {
  return (
    <section className={styles.projects_container} id="projects">
      <h2 className={styles.projects_title}>Projects</h2>
      <div className={styles.projects_items}>
        {projects.map((project, index) => {
          return <Card project={project} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
