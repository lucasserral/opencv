import React from "react";

type props = {
  sections: sections;
  setSections: Function;
  index: number;
  section: section;
};

const Section = ({ section, setSections, sections, index }: props) => {
  return (
    <div className="SideBar__Section" key={section.key}>
      <div className="SideBar__Section--header">
        <h2 className="title">{section.title}</h2>

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
                    const prevThisSectItems =
                      previowsSections[index].sectionItems;
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
                  const prevThisSectItems =
                    previowsSections[index].sectionItems;
                  const i = prevThisSectItems.findIndex(
                    (sect) => sect.key == sectionItem.key
                  );
                  prevThisSectItems[i].description = value;
                  return previowsSections;
                });
              }}
            />
          </div>
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
