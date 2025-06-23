import React from "react";
import Header from "../Header.jsx/Header";
import styles from "./ContactDetails.module.css";
import image14 from "../../assets/image 14.png";

const ContactDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact__container}>
        <Header header1="contact " header2="information" />
        <div>
          <h3>company name</h3>
          <p>1234 Sample Street Austin Texas 76401</p>
        </div>
        <div>
          <h4>512.333.2222</h4>
        </div>
        <div>
          <p>sampleemail@gmail.com</p>
        </div>
        <div>
          <button>contact us</button>
        </div>
      </div>
      <img src={image14} alt="" />
    </div>
  );
};

export default ContactDetails;
