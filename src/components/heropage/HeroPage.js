import React from "react";
import comp from "../../assets/images/comp.jpg";
import "./HeroPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import { HerosecData } from "../data/HerosecData";
import { Link } from "react-router-dom";

function HeroPage() {
  return (
    <div>
      <div className="card hero-card mt-3 mt-lg-0">
        <div className="">
          <img src={comp} className="hero-img " />
        </div>
        <div className="card-body text-center">
          <h3>Elanthentral</h3>
          <h6 className="ani-text text-altprimary">
            <Typical
              steps={["Enthusiastic Developer ", 3000, "UI Developer", 3000]}
              loop={Infinity}
            />
          </h6>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/elan-thentral-532907229/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="s-icon" />
            </a>
            <a href="https://github.com/Elanthentral" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="s-icon" />
            </a>
          </div>
        </div>
        <div className="card-footer bg-transparent border cardfooter">
          <a
            href={HerosecData.resumePdf}
            type="download"
            target="_blank"
            className="text-nowrap"
          >
            Download CV
          </a>
          <Link to="contactform">
            <a href="contactform">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
