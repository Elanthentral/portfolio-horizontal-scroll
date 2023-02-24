import React from "react";
import HeroPage from "../heropage/HeroPage";
import SideMenu from "../side-menu/SideMenu";
import Card from "../ui/card";
import AboutContent from "./AboutContent";

function AboutMe() {
  return (
    <div id="about">
      <Card CardTitle="About" spantext="Me">
        <AboutContent />
      </Card>
    </div>
  );
}

export default AboutMe;
