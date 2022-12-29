import React, { ChangeEvent, ChangeEventHandler } from "react";

type props = {
  setSections: Function;
  sectionTitle: string;
  id: any;
};

const SectionTitle = ({ setSections, sectionTitle, id }: props) => {
  const [changing, setChanging] = React.useState(false);
  const [value, setValue] = React.useState(sectionTitle);

  function changeTitle(evt: React.ChangeEvent<HTMLInputElement>) {
    setValue(evt.target.value);
    setSections((prev: sections) => {
      const previowsSections = [...prev];
      const i = previowsSections.findIndex((sect) => {
        console.log({ id });
        console.log({ sect });
        return sect.key == id;
      });
      previowsSections[i].title = evt.target.value;
      return previowsSections;
    });
  }

  function submitValue(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setChanging(false);
  }

  return (
    <>
      {!changing ? (
        <h2 className="title" onClick={() => setChanging(true)}>
          {value}
        </h2>
      ) : (
        <form
          onSubmit={(evt) => {
            submitValue(evt);
          }}
        >
          <input value={value} onChange={(evt) => changeTitle(evt)} />
        </form>
      )}
    </>
  );
};

export { SectionTitle };
