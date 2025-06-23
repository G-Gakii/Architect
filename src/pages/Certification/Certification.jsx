import React from "react";
import Header from "../../components/Header.jsx/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Certificate.module.css";

const Certification = () => {
  return (
    <div className={styles.certification__container}>
      <Navbar />
      <Header header1="Company" header2="certifications" />
      <section className={styles.section}></section>

      <Footer />
    </div>
  );
};

export default Certification;
