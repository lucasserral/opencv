import React from "react";
import OpenCvInput from "./molecules/OpenCvInput";

export default function SideBar() {
  const [values, setValues] = React.useState({});

  return (
    <div className="SideBar">
      <h1>Open CV</h1>
      <form className="SideBar__form">
        <OpenCvInput
          type="shortText"
          keyValue={"fullname"}
          placeholder={"fullname"}
          setValue={setValues}
          value={values}
          required={true}
        />
        <OpenCvInput
          type="paragraph"
          keyValue={"fullname"}
          placeholder={"fullname"}
          setValue={setValues}
          value={values}
        />
      </form>
    </div>
  );
}
