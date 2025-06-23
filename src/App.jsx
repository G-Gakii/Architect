import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Project from "./pages/Project/Project";
import Certification from "./pages/Certification/Certification";
import ContactPage from "./pages/ContactPage/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
