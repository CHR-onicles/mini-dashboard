import { GlobalStyles } from "../styles/GlobalStyles.styled";
import { Navbar } from "../components";
import { Sidebar } from "../components";
import { StyledApp } from "./App.styled";
// import { Preloader } from "../components/Preloader";
import { useState } from "react";
import { Home } from "../pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserList } from "../pages/UserList";
import { User } from "../pages/User";
import { NewUser } from "../pages/NewUser";

export const App = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <Router>
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
          <Routes>
            <Route path='/' element={<Home className="page" />}/>
            <Route path='/users' element={<UserList className="page" />}/>
            <Route path='/user/:id' element={<User className="page" />}/>
            <Route path='/newUser' element={<NewUser className="page" />}/>
            <Route path='*' element={<div className="page">Error page</div>}/>
          </Routes>
          
        </div>
      </StyledApp>
    </Router>
  );
};
