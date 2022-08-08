import React from "react";
import ReactDOM from "react-dom/client";
import { RootApp } from "./App/App";
import { UserProvider } from "./contexts/userContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <RootApp />
    </UserProvider>
  </React.StrictMode>
);
