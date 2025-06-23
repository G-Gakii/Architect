import React from "react";
import rectange8 from "../../assets/Rectangle 8-2.png";
import rectange9 from "../../assets/Rectangle 9.png";
import rectange10 from "../../assets/Rectangle 10.png";
import rightArrow from "../../assets/rightArrow.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <img src={rectange8} alt="rectangle" />
      </div>
      <div>
        <img src={rectange9} alt="rectangle" />
      </div>
      <div>
        <img src={rectange10} alt="rectangle" />
      </div>

      <div>
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button>
          read more <img src={rightArrow} alt="arrow pointing to the left" />
        </button>
      </div>
    </div>
  );
};

export default About;
