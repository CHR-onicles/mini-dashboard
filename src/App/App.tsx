import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { GlobalStyles } from "../styles/GlobalStyles.styled";
import { Navbar } from "../components";
import { Sidebar } from "../components";
import { StyledApp } from "./App.styled";
// import { Preloader } from "../components/Preloader";
import { useState } from "react";
import { Dashboard } from "../pages/Dashboard";
import { UserList } from "../pages/UserList";
import { User } from "../pages/User";
import { NewUser } from "../pages/NewUser";
import { Home } from "../pages/Home";

const App = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <StyledApp>
      {/* <Preloader /> */}
      <GlobalStyles />
      <Navbar
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <div className="app-container">
        <Sidebar
          className="sidebar"
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames={"transition"}
            timeout={200}
          >
            <Routes location={location}>
              <Route path="/" element={<Home className="page" />} />
              <Route
                path="/dashboard"
                element={<Dashboard className="page" />}
              />
              <Route path="/users" element={<UserList className="page" />} />
              <Route path="/user/:id" element={<User className="page" />} />
              <Route path="/newUser" element={<NewUser className="page" />} />
              <Route
                path="*"
                element={<div className="page">Error page</div>}
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </StyledApp>
  );
};

// wrapping App component in router in order to use "useLocation" hook
export const RootApp = () => (
  <Router>
    <App />
  </Router>
);
