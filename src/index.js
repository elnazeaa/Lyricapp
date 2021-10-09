import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LyricContextProvider from "./context/LyricContext";

ReactDOM.render(
  <React.StrictMode>
    <LyricContextProvider>
      <App />
    </LyricContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
