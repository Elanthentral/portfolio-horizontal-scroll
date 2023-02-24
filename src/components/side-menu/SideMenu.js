import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import AboutMe from "../about/AboutMe";
import { NavData } from "../data/NavData";
import Resume from "../resume/Resume";
import "./SideMenu.css";
import { Link } from "react-router-dom";

function SideMenu() {
  const [ActiveNav, setActiveNav] = useState("/");

  const handleNavClick = (content) => {
    setActiveNav(content);
  };
  return (
    <div className="">
      {/* <nav className="nav-bar">
        <ul className="nav-menu">
          {NavData.map((item, i) => (
            <div className="card navcard" key={i}>
              <li className="nav-item">
                <Link to={item.url}>
                  <a
                    href=""
                    className={
                      ActiveNav === item.url ? "active altprimary" : ""
                    }
                    onClick={() => handleNavClick(item.url)}
                  >
                    <span className="icon">{item.icon}</span>
                    <span className="link">{item.label}</span>
                  </a>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </nav> */}

      <nav class="  bg-white py-3 brs">
        <div class="container-fluid ">
          <ul class="navbar-nav flex-row   flex-lg-column text-center justify-content-lg-center justify-content-between px-3 px-lg-0">
            {NavData.map((item, i) => (
              <li class="nav-item mb-lg-3 flex-wrap ">
                <Link to={item.url} className="text-decoration-none">
                  <a
                    href=""
                    className={
                      ActiveNav === item.url
                        ? " nav-link active  border-lg-bottom"
                        : "nav-link  border-lg-bottom"
                    }
                    onClick={() => handleNavClick(item.url)}
                  >
                    {item.icon}
                    <br />
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SideMenu;
