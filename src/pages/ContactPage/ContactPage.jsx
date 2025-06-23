import React from "react";
import Header from "../../components/Header.jsx/Header";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ContactDetails from "../../components/ContactDetails/ContactDetails";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default ContactPage;
