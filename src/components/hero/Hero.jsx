import React from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import slatedLine from "../../assets/Line3.png";
import styles from "./Hero.module.css";
import buildingImg from "../../assets/building.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <div className={styles.hero__content}>
          <p>Project</p>
          <p>lorum</p>
        </div>
        <div className={styles.hero__page__arrows}>
          <img src={leftArrow} alt="leftArrow" />
          <img src={rightArrow} alt="right arrow" />
          <div></div>
        </div>
        <div className={styles.hero_pagenumber}>
          <div>
            <p>0</p>
            <p>1</p>
          </div>
          <img src={slatedLine} alt="slated line" />
          <p>02</p>
        </div>
      </div>
      <div className={styles.hero__image}>
        <img src={buildingImg} alt="building" />
        <div>
          View project <img src={rightArrow} alt="arrow to the right" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
