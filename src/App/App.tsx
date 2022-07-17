import { GlobalStyles } from "../styles/GlobalStyles.styled";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { StyledApp } from "./App.styled";
import { Preloader } from "../components/Preloader";

export const App = () => {
  return (
    <StyledApp>
      {/* <Preloader /> */}
      <GlobalStyles />
      <Navbar />
      <div className="app-container">
        <Sidebar className="sidebar" />
        <div className="content">Other pages</div>
      </div>
    </StyledApp>
  );
};
