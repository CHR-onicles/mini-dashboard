import React from "react";
import ReactDOM from "react-dom/client";
import { RootApp } from "./App/App";
import { UserProvider } from "./contexts/userContext";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <UserProvider>
        <RootApp />
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
