import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import Careers from "./pages/Careers/List/Careers.jsx";
import JobApplication from "./pages/Careers/Apply/JobApplication.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Admin from "./pages/Careers/Admin/CareersAdmin.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ paddingTop: 18 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/apply/:id" element={<JobApplication />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
