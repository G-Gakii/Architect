import React from "react";
import Header from "../../components/Header.jsx/Header";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contactPage__container}>
      <Navbar />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default ContactPage;
