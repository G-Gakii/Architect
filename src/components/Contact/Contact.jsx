import React from "react";
import rightArrow from "../../assets/rightArrow.png";
import image12 from "../../assets/image 12.png";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <h2>Contact us</h2>
      <div className={styles.contact}>
        <form>
          <input type="text" name="name" placeholder="name*" /> <br />
          <input type="text" placeholder="phone number*" /> <br />
          <input type="text" placeholder="e-mail*" /> <br />
          <input type="text" placeholder="interested in*" /> <br />
          <textarea name="" rows={7} id="" placeholder="message*"></textarea>
        </form>
        <div className={styles.contact__img}>
          <img src={image12} alt="A person making a call" />
        </div>
      </div>
      <button>
        send email <img src={rightArrow} alt="right arrow" />
      </button>
    </div>
  );
};

export default Contact;
