import React from "react";
import OpenCvInput from "./molecules/OpenCvInput";

type sections = Array<{
  title: string;
  sectionItems: Array<{ title: string; description: string }>;
}>;

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
          {sections.map((section) => (
            <div>
              <h2>{section.title}</h2>
              <div>
                {section.sectionItems.map((sectionItem, index) => (
                  <div>
                    <input
                      placeholder={sectionItem.title || "title"}
                      value={sectionItem.title}
                      onChange={(evt) => {
                        const value = evt.target.value;
                        setSections((prev: sections) => {
                          const previowsSections = [...prev];
                          const prevThisSectItems =
                            previowsSections[index].sectionItems;
                          const i = prevThisSectItems.findIndex(
                            (sect) => sect.title == sectionItem.title
                          );
                          // return prev;
                          prevThisSectItems[i].title = value;
                          return previowsSections;
                        });
                      }}
                    />
                    <textarea
                      placeholder={sectionItem.description || "description"}
                      value={sectionItem.description}
                      onChange={(evt) => {
                        const value = evt.target.value;
                        setSections((prev: sections) => {
                          const previowsSections = [...prev];
                          const prevThisSectItems =
                            previowsSections[index].sectionItems;
                          const i = prevThisSectItems.findIndex(
                            (sect) => sect.title == sectionItem.title
                          );
                          // return prev;
                          prevThisSectItems[i].description = value;
                          return previowsSections;
                        });
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </form>
    </div>
  );
}
