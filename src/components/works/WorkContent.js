import React from "react";
import { ProjectData } from "../data/ProjectData";
import "./workcontent.css";

function WorkContent() {
  return (
    <div>
      <div
        className="container section-spacing project-container border "
        id="projects"
        name="project"
      >
        {ProjectData.map((project, index) => (
          <div className="project-container-item" key={index}>
            <div className="porfolio-cards bg-altprimary mb-2">
              <div className="portfolio-img">
                {/* <MediamHeading text={project.title} /> */}
                <div className="img-container">
                  <img src={project.img} className="project-img" />
                </div>
              </div>
              <div className="portfolio-content">
                <h5>{project.title}</h5>
                <p>{project.tech}</p>
                <div className="project-btn">
                  <a href={project.lurl} target="_blank">
                    Live Demo
                  </a>
                  <a
                    href={project.surl}
                    target="_blank"
                    className={
                      project.surl === 0 ? "display-none" : "display-block"
                    }
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkContent;
