import React from "react";
import Title from "../Title";

function Card({
  className = null,
  children,
  CardTitle,
  spantext,
  cardleft,
  cardright,
  skills,
  ...res
}) {
  const __class = className ? `card${className} ` : `card`;
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <div className="card content-card">
        <div className="card-body">
          <Title CardTitle={CardTitle} spantext={spantext} />
          <div className="row ">
            {skills}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
