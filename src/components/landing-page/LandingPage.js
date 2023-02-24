import React, { useEffect, useState } from "react";
import AboutMe from "../about/AboutMe";
import HeroPage from "../heropage/HeroPage";
import Resume from "../resume/Resume";
import SideMenu from "../side-menu/SideMenu";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";
import ResumePage from "../resume/ResumePage";
import ContactForm from "../contact-form/ContactForm";
import Works from "../works/Works";

function LandingPage() {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Router>
        <div className="main-page overflow-auto ">
          <div className="container main-container">
            <div className="d-flex flex-column flex-lg-row justify-content-center">
              <div className="side-comp-sec">
                <SideMenu />
              </div>
              {/* <div className="heropage-contentpage d-flex flex-column flex-lg-row gap-4 gap-lg-0"> */}
              <div className="hero-comp-sec">
                <HeroPage />
              </div>
              <div className="main-comp-sec mr-lg-n3">
                <Routes>
                  <Route path="/" element={<AboutMe />} />
                  <Route path="resume" element={<ResumePage />} />
                  <Route path="contactform" element={<ContactForm />} />
                  <Route path="works" element={<Works />} />
                </Routes>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default LandingPage;
