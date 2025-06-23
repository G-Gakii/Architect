import React from "react";
import styles from "./Pagination.module.css";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import slatedLine from "../../assets/Line3.png";

const Pagination = () => {
  return (
    <div className={styles.hero_pagenumber}>
      <div>
        <p>0</p>
        <p>1</p>
      </div>
      <img src={slatedLine} alt="slated line" />
      <p>05</p>
      <button className={styles.left_arrow}>
        <img src={leftArrow} alt="" />
      </button>
      <button className={styles.right_arrow}>
        <img src={rightArrow} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
