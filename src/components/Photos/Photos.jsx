import rectangle23 from "../../assets/Rectangle 23.png";
import rectangle22 from "../../assets/Rectangle 22.png";

import rectangle25 from "../../assets/Rectangle 25.png";
import rectangle26 from "../../assets/Rectangle 26.png";
import rectangle27 from "../../assets/Rectangle 27.png";
import rectangle28 from "../../assets/Rectangle 28.png";
import rectangle31 from "../../assets/Rectangle 31.png";
import rectangle30 from "../../assets/Rectangle 30.png";

import React from "react";
import styles from "./Photos.module.css";

const Photos = () => {
  return (
    <div className={styles.photos}>
      <img src={rectangle22} alt="" />
      <img src={rectangle23} alt="" />

      <img src={rectangle25} alt="" />
      <img src={rectangle26} alt="" />
      <img src={rectangle27} alt="" />
      <img src={rectangle28} alt="" />
      <img src={rectangle30} alt="" />
      <img src={rectangle31} alt="" />
    </div>
  );
};

export default Photos;
