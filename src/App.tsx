import React from "react";
import SideBar from "./components/SideBar";
import Viewer from "./components/Viewer";

function App() {
  const [values, setValues] = React.useState({});
  const [sections, setSections] = React.useState([
    {
      title: "Experience",
      sectionItems: [
        {
          title: "job 1",
          description: "Lorem ipsum sit amet.",
        },
        {
          title: "job 2",
          description: "Lorem ipsum sit amet.",
        },
      ],
    },
    {
      title: "Education",
      sectionItems: [
        {
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
