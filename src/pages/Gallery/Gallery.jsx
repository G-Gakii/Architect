import React from "react";
import Header from "../../components/Header.jsx/Header";
import Photos from "../../components/Photos/Photos";
import Footer from "../../components/Footer/Footer";
import styles from "./Gallery.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";

const Gallery = () => {
  return (
    <div className={styles.gallery__container}>
      <Navbar />
      <Header header1="photo" header2="gallery" />
      <Photos />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Gallery;
