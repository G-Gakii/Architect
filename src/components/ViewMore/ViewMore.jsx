import React from "react";
import rightArrow from "../../assets/rightArrow.png";
import styles from "./ViewMore.module.css";

const ViewMore = () => {
  return (
    <button className={styles.btn}>
      View More <img src={rightArrow} alt="arrow to the right" />
    </button>
  );
};

export default ViewMore;
