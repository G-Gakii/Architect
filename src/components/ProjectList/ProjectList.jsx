import React from "react";
import image30 from "../../assets/image 30.png";
import image32 from "../../assets/image 32.png";
import image33 from "../../assets/image 33.png";
import ViewMore from "../ViewMore/ViewMore";
import styles from "./ProjectList.module.css";

const ProjectList = () => {
  return (
    <div>
      <div className={styles.project}>
        <img src={image30} alt="" />
        <div>
          <h2>sample project</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <ViewMore />
        </div>
      </div>
      <div className={styles.project}>
        <img src={image32} alt="" />
        <div>
          <h2>sample project</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <ViewMore />
        </div>
      </div>
      <div className={styles.project}>
        <img src={image33} alt="" />
        <div>
          <h2>sample project</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <ViewMore />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
