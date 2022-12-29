import React from "react";

type props = {
  setSections: Function;
  index: number;
  sections: sections;
  section: section;
  sectionItem: sectionItem;
};

const SectionItem = ({
  sectionItem,
  setSections,
  index,
  sections,
  section,
}: props) => {
  return (
    <div key={sectionItem.key} className="SideBar__SectionItems">
      <div className="SideBar__SectionItems--header">
        <input
          className="title"
          placeholder={sectionItem.title || "title"}
          value={sectionItem.title}
          onChange={(evt) => {
            const value = evt.target.value;
            setSections((prev: sections) => {
              const previowsSections = [...prev];
              const prevThisSectItems = previowsSections[index].sectionItems;
              console.log(prevThisSectItems);
              const i = prevThisSectItems.findIndex((sect) => {
                console.log({
                  sect: sect.key,
                  sectionItem: sectionItem.key,
                });
                return sect.key == sectionItem.key;
              });
              // return prev;
              prevThisSectItems[i].title = value;
              return previowsSections;
            });
          }}
        />
        <button
          type="button"
          className="SideBar__closeButton"
          onClick={() => {
            const sects = [...sections];
            const i = sects.findIndex((sect) => sect.key == section.key);
            const ii = sects[i].sectionItems.findIndex(
              (sectItem) => sectItem.key == sectionItem.key
            );
            sects[i].sectionItems.splice(ii, 1);
            console.log({ after: sects });
            setSections(sects);
          }}
        >
          X
        </button>
      </div>
      <textarea
        placeholder={sectionItem.description || "description"}
        value={sectionItem.description}
        onChange={(evt) => {
          const value = evt.target.value;
          setSections((prev: sections) => {
            const previowsSections = [...prev];
            const prevThisSectItems = previowsSections[index].sectionItems;
            const i = prevThisSectItems.findIndex(
              (sect) => sect.key == sectionItem.key
            );
            prevThisSectItems[i].description = value;
            return previowsSections;
          });
        }}
      />
    </div>
  );
};

export { SectionItem };
