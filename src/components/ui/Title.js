import React from "react";

function Title({ CardTitle, spantext }) {
  return (
    <div className="titles">
      <h3>
        <span className="text-altprimary">{CardTitle}</span> {spantext}
      </h3>
    </div>
  );
}

export default Title;
