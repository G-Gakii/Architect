import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header.jsx/Header";
import ProjectList from "../../components/ProjectList/ProjectList";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Header header1="our" header2="projects" />
      <ProjectList />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Project;
