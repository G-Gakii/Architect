import React from "react";
import rightArrow from "../../assets/rightArrow.png";
import image15 from "../../assets/image 15.png";
import image16 from "../../assets/image 16.png";
import image17 from "../../assets/image 17.png";
import image18 from "../../assets/image 18.png";
import styles from "./Project.module.css";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Our Projects</h2>

      <div className={styles.projects__part1}>
        <section>
          <h3>
            sample <br /> project
          </h3>
          <p>
            {" "}
            View more <img src={rightArrow} alt="arrow pointing right" />
          </p>
        </section>
        <img
          src={image15}
          alt="large, semi-circular glass building with a tall wooden entrance at the center."
        />
      </div>
      <div className={styles.projects__part2}>
        <img
          src={image16}
          alt="a large industrial facility with multiple buildings surrounded by trees and open space."
        />
        <img src={image17} alt="main tail buildings" />
        <img
          src={image18}
          alt="a bold and colorful architectural scene featuring several tall, triangular buildings in shades of red, pink, and blue"
        />
      </div>
      <div className={styles.projects__button}>
        <button>
          all projects <img src={rightArrow} alt="arrow point right" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
