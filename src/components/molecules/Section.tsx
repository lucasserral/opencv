import React from "react";
import { SectionItem } from "./SectionItem";
import { SectionTitle } from "./SectionTitle";

type props = {
  sections: sections;
  setSections: Function;
  index: number;
  section: section;
  key: any;
};

const Section = ({ section, setSections, sections, index }: props) => {
  return (
    <div className="SideBar__Section" key={section.key}>
      <div className="SideBar__Section--header">
        <SectionTitle
          setSections={setSections}
          sectionTitle={section.title}
          id={section.key}
        />

        <button
          className="SideBar__closeButton"
          type="button"
          onClick={() => {
            setSections((prev: sections) => {
              const sects = [...prev];
              const i = sects.findIndex((sect) => sect.key == section.key);
              sects.splice(i, 1);
              return sects;
            });
          }}
        >
          X
        </button>
      </div>
      <div className="SideBar__SectionItems--container">
        {section.sectionItems.map((sectionItem, i) => (
          <SectionItem
            key={sectionItem.key}
            section={section}
            sectionItem={sectionItem}
            sections={sections}
            index={index}
            setSections={setSections}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          const previows = [...sections];
          previows[index].sectionItems.push({
            key: `key_${previows[index].sectionItems.length}`,
            title: "",
            description: "",
          });
          setSections(previows);
        }}
      >
        Add item
      </button>
    </div>
  );
};

export { Section };
