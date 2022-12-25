import React from "react";
import SideBar from "./components/SideBar";
import Viewer from "./components/Viewer";

function App() {
  const [values, setValues] = React.useState({});
  const [sections, setSections] = React.useState([
    {
      key: "default_1",
      title: "Experience",
      sectionItems: [
        {
          key: "default_item_1",
          title: "job 1",
          description: "Lorem ipsum sit amet.",
        },
        {
          key: "default_item_2",
          title: "job 2",
          description: "Lorem ipsum sit amet.",
        },
      ],
    },
    {
      key: "default_2",
      title: "Education",
      sectionItems: [
        {
          key: "default_item_3",
          title: "Institute 1",
          description: "Lorem ipsum sit amet.",
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <SideBar
        sections={sections}
        setSections={setSections}
        values={values}
        setValues={setValues}
      />
      <Viewer values={values} sections={sections} />
    </div>
  );
}

export default App;
