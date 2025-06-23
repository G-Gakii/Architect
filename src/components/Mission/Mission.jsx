import React from "react";
import styles from "./Mission.module.css";

const Mission = () => {
  return (
    <div className={styles.mission}>
      <h2>Main Focus/Mission Statement</h2>
      <div className={styles.mission__content}>
        <div>
          <h3>1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>
        <div>
          <h3>2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
