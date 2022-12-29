import React from "react";
import OpenCvInput from "./molecules/OpenCvInput";
import { Section } from "./molecules/Section";

type props = {
  setValues: Function;
  values: {
    fullname?: string;
    position?: string;
  };
  sections: sections;
  setSections: Function;
};

export default function SideBar({
  values,
  setValues,
  sections,
  setSections,
}: props) {
  return (
    <div className="SideBar">
      <h1>Open CV</h1>
      <div className="SideBar__form">
        <OpenCvInput
          type="shortText"
          keyValue={"fullname"}
          placeholder={"fullname"}
          setValue={setValues}
          value={values}
          required={true}
        />
        <OpenCvInput
          type="shortText"
          keyValue={"position"}
          placeholder={"position"}
          setValue={setValues}
          value={values}
          required={true}
        />
        <section>
          <h2>Contact information</h2>
          <OpenCvInput
            type="shortText"
            keyValue="phone"
            placeholder="phone"
            setValue={setValues}
            value={values}
            required={true}
          />
          <OpenCvInput
            type="shortText"
            keyValue="email"
            placeholder="email"
            setValue={setValues}
            value={values}
            required={true}
          />
          {/* <OpenCvInput
            type="shortText"
            keyValue="email"
            placeholder="email"
            setValue={setValues}
            value={values}
            required={true}
          /> */}
        </section>
        <section>
          {sections.map((section, index) => (
            <Section
              key={index}
              setSections={setSections}
              section={section}
              index={index}
              sections={sections}
            />
          ))}
          <button type="button">Add section</button>
        </section>
      </div>
    </div>
  );
}
