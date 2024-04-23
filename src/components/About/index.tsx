import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section>
      <div className={""}>
        <img src={getImageUrl("")} className={""} alt="" />
        <ul className={""}>
          <li className={""}>
            <img src={getImageUrl("")} className={""} alt="" />
            <div className={""}>
              <h3 className={""}></h3>
              <p className={""}></p>
            </div>
          </li>
          <li className={""}>
            <img src={getImageUrl("")} className={""} alt="" />
            <div className={""}>
              <h3 className={""}></h3>
              <p className={""}></p>
            </div>
          </li>
          <li className={""}>
            <img src={getImageUrl("")} className={""} alt="" />
            <div className={""}>
              <h3 className={""}></h3>
              <p className={""}></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
