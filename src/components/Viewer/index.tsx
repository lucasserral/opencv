import React from "react";
import OpenCvInput from "../molecules/OpenCvInput";
import { ViewerCanvas } from "./ViewerCanvas";

export default function Viewer() {
  const [values, setValues] = React.useState({});

  return (
    <div id="Viewer__container" className="Viewer__container">
      <ViewerCanvas size={[210, 297]} />
    </div>
  );
}
