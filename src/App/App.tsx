import { GlobalStyles } from "../styles/GlobalStyles.styled";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { StyledApp } from "./App.styled";
import { Preloader } from "../components/Preloader";
import { useState } from "react";
import { Home } from "../pages/Home";

export const App = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <StyledApp>
      {/* <Preloader /> */}
      <GlobalStyles />
      <Navbar isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen}/>
      <div className="app-container">
        <Sidebar className="sidebar" isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen}/>
        <Home className="page" />
      </div>
    </StyledApp>
  );
};
