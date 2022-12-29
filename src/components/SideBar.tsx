import jsPDF from "jspdf";
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

function downloadPDF() {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: [279, 210],
  });

  const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
  const canvasImg = canvas.toDataURL("image/png");

  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();

  pdf.addImage(canvasImg, "image/png", 0, 0, width, height);
  pdf.save("resume.pdf");
}

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
          <button
            type="button"
            onClick={() => {
              setSections((prev: sections) => {
                const arr = [...prev];
                const section: section = {
                  title: "section",
                  sectionItems: [],
                  key: Number(Math.random() * 1000).toFixed(0),
                };
                arr.push(section);
                return arr;
              });
            }}
          >
            Add section
          </button>
        </section>
        <div className="SideBar__footer">
          <button
            onClick={() => {
              downloadPDF();
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
