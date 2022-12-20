import React from 'react'
import * as ReactDOM from "react-dom"
import { MainContextProvider } from "./context/MainContext.jsx";
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)