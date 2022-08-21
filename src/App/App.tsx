import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAuth0 } from "@auth0/auth0-react";

import { GlobalStyles } from "../styles/GlobalStyles.styled";
import { Navbar } from "../components";
import { Sidebar } from "../components";
import { StyledApp } from "./App.styled";
// import { Preloader } from "../components/Preloader";
import { Dashboard } from "../pages/Dashboard";
import { UserList } from "../pages/UserList";
import { User } from "../pages/User";
import { NewUser } from "../pages/NewUser";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "../routes/ProtectedRoute";

const App = () => {
  const location = useLocation();
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <StyledApp>
      {/* <Preloader /> */}
      <GlobalStyles />
      <Navbar />
      <div className="app-container">
        <Sidebar className="sidebar" />
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
                element={
                  <ProtectedRoute>
                    <Dashboard className="page" />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <UserList className="page" />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users/:id"
                element={
                  <ProtectedRoute>
                    <User className="page" />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users/newUser"
                element={
                  <ProtectedRoute>
                    <NewUser className="page" />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  <div className="page">
                    Sorry, this page cannot be found or has not yet been built
                  </div>
                }
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
