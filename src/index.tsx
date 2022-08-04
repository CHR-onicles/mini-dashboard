import React from "react";
import ReactDOM from "react-dom/client";
import { RootApp } from "./App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
