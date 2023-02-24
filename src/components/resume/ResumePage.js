import React from "react";
import Card from "../ui/card";
import Resume from "./Resume";

function ResumePage() {
  return (
    <div>
      <Card CardTitle="R" spantext="esume">
        <Resume />
      </Card>
    </div>
  );
}

export default ResumePage;
