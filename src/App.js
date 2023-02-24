import React, { useEffect } from "react";
import LandingPage from "./components/landing-page/LandingPage";
import SideMenu from "./components/side-menu/SideMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/about/AboutMe";
import Resume from "./components/resume/Resume";
import aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  });
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
