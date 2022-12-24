import React from "react";
import OpenCvInput from "./molecules/OpenCvInput";

type props = {
  setValues: Function;
  values: {
    fullname?: string;
  };
};

export default function SideBar({ values, setValues }: props) {
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
          keyValue={"extra"}
          placeholder={"extra"}
          setValue={setValues}
          value={values}
        />
      </form>
    </div>
  );
}
