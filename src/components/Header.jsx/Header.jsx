import React from "react";
import styles from "./Header.module.css";

const Header = ({ header1, header2 }) => {
  return (
    <div className={styles.container}>
      <h2>{header1}</h2>
      <h2 className={styles.gallery}>{header2}</h2>
      <div className={styles.horizontal__line}></div>
    </div>
  );
};

export default Header;
