import React from "react";
import Card from "../ui/card";
import WorkContent from "./WorkContent";

function Works() {
  return (
    <Card CardTitle="Recent" spantext="Works">
      <WorkContent />
    </Card>
  );
}

export default Works;
