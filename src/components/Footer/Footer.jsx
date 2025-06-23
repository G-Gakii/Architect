import React from "react";
import group111 from "../../assets/Group 11 1.png";
import pininterest from "../../assets/Shape.png";
import facebook from "../../assets/Shape-4.png";
import twitter from "../../assets/Shape-3.png";
import linkedin from "../../assets/Shape-2.png";
import box from "../../assets/Vector.png";
import location from "../../assets/Vector-2.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <img src={group111} alt="logo" />
        <div>
          <h2 className={styles.footer_headings}>Information</h2>
          <ul>
            <li>
              <a href="/">Main</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Certifications</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__contact}>
          <h2 className={styles.footer_headings}>contacts</h2>
          <div>
            <img src={location} alt="location icon" />
            <p>
              1234 Sample Street <br />
              Austin Texas 78704
            </p>
          </div>
          <div>
            {/* <img src="" alt="" /> */}
            <p>512.333.2222</p>
          </div>
          <div>
            <img src={box} alt="mail icon" />
            <p>sampleemail@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className={styles.footer_headings}>social Media</h2>
          <div className={styles.footer__socials}>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={pininterest} alt="pin interest" />
          </div>
        </div>
      </div>
      <div className={styles.footer__line}></div>
      <div className={styles.footer__copyright}>
        &copy; 2021 All right reserved
      </div>
    </div>
  );
};

export default Footer;
