import React from "react";
import OpenCvInput from "./molecules/OpenCvInput";

export default function SideBar() {
  const [values, setValues] = React.useState({});

  return (
    <div className="SideBar">
      <h1>Open CV</h1>
      <OpenCvInput
        type="shortText"
        keyValue={"fullname"}
        placeholder={"fullname"}
        setValue={setValues}
        value={values}
      />
    </div>
  );
}
