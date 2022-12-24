import React from "react";
import SideBar from "./components/SideBar";
import Viewer from "./components/Viewer";

function App() {
  const [values, setValues] = React.useState({});

  return (
    <div className="App">
      <SideBar values={values} setValues={setValues} />
      <Viewer values={values} />
    </div>
  );
}

export default App;
