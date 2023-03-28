import React from "react";
import Title from "../ui/Title";
import "./about.css";
import avatar from "../../assets/images/avatar.png";

function AboutContent() {
  return (
    <>
      <div className="about-container ">
        <div className="abt-content border">
          <div className="col-lg-6 col-12 border-end abt-left">
            <p className="abt-des ">
              I am Elanthentral, UI Developer from India, TamilNadu. I have rich
              experience in web site Developement .I love to talk with you about
              our unique.
            </p>
          </div>
          <div className="col-lg-6 col-12 abt-right">
            <div className="about-address">
              <p className="about-badge bg-altprimary">Residence. . . . .</p>
              <p className="text-end">India TamilNadu</p>
            </div>
            <div className="about-address">
              <p className="about-badge bg-altprimary">Freelance . . . . .</p>
              <p>Available</p>
            </div>
            <div className="about-address">
              <p className="about-badge bg-altprimary">Address . . . . .</p>
              <p>Trichy </p>
            </div>
          </div>
        </div>
      </div>
      <div className="myservice-container">
        <Title CardTitle="My" spantext="Services"></Title>
        <div className="text-center border myservice">
          <div className="abt-icon bg-altprimary mx-auto">
            <span className="fa fa-code text-white"></span>
          </div>
          <h6 className="fw-bold my-3">Web Development</h6>
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>
      </div>

      <div className="Quote-container">
        <Title CardTitle="Q" spantext="uote"></Title>
        <div className=" border quote">
          <div class="text">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div class="user">
            <div class="img">
              <img src={avatar} alt="Ryan Adlard" className="avatar" />
            </div>
            <div class="info text-center">
              <h6 className="fw-bold mb-2">Elanthentral V</h6>
              <p>UI Developer</p>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
