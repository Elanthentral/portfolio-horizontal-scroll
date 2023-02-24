import React from "react";
import Card from "../ui/card";
import HeroPage from "../heropage/HeroPage";
import SideMenu from "../side-menu/SideMenu";
import { FaSchool } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import "./resume.css";
import Title from "../ui/Title";
import { SkillData } from "../data/SkillData";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Resume() {
  return (
    <div className="border ">
      <div className="row ">
        <div className="col-lg-6">
          <div className="cardleft mb-2">
            <div className="res-title-container">
              <MdOutlineWork className="resume-icon text-altprimary" />
              <h5 className="cardleft-title">EXPERIENCE</h5>
            </div>
            <div className="edu-content">
              <div>
                <p className="year-badge  text-altprimary">2021-2022</p>
                <h5>UI Developer</h5>
                <h6>Shifteasy.AI</h6>
                <p>
                  Creative UI Developer with 1+ years spent optimizing user
                  experience through implementing creative processes,innovating,
                  and developing seamless UI. Successful in driving user
                  engagement for well-known brands, providing a compelling user
                  experience to improve brand loyalty, and boosting customer
                  retention
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="cardright mb-2">
            <div className="res-title-container">
              <FaSchool className="resume-icon text-altprimary" />
              <h5 className="cardleft-title">EDUCATION</h5>
            </div>
            <div className="edu-content">
              <div>
                <p className="year-badge ">2003-2006</p>
                <h5>MCA</h5>
                <h6>Bharathidasan University</h6>
                <p className="mb-2">
                  Master's Degree in Computer Applications Cauvery college for
                  women, Trichy, Tamilnadu
                </p>
              </div>
              <div>
                <p className="year-badge ">2000-2003</p>
                <h5>BCA</h5>
                <h6>Bharathidasan University</h6>
                <p>
                  Bachelor's Degree in Computer Applications Cauvery college for
                  women, Trichy, Tamilnadu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <hr />
        <div className="skills mt-3">
          <Title CardTitle="My " spantext="Skills" />
          <div className="skill-blog">
            {SkillData.map((skill, i) => {
              const { skillName, desc, textColor, value, pathColor } = skill;
              return (
                <div className="skill-content-blog" key={i}>
                  <div className="skill-container">
                    <CircularProgressbar
                      value={value}
                      text={`${value}%`}
                      styles={buildStyles({
                        textColor: textColor,
                        pathColor: pathColor,
                        textAnchor: "middle",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                  </div>
                  <div>
                    <p className="skill-name">{skillName}</p>
                    <p className="font-14 textlight skill-desc">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </div>
  );
}

export default Resume;
