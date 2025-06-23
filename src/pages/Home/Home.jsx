import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero/Hero";
import styles from "./Home.module.css";
import About from "../../components/About/About";
import Mission from "../../components/Mission/Mission";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.home__container}>
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
