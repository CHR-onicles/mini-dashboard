import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { HiMenuAlt2 } from "react-icons/hi";
// import { BsSearch } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { StyledNavbar } from "./Navbar.styled";
import { useEffect, useRef } from "react";

interface Props {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (arg: boolean) => void;
}

export const Navbar = ({ isSideMenuOpen, setIsSideMenuOpen }: Props) => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (location.pathname === "/" && navbarRef.current) {
    //   navbarRef.current.classList.add("onHomepage");
    // }  else if (location.pathname !== '/') navbarRef.current?.classList.remove("onHomepage");
  }, []);

  return (
    <StyledNavbar ref={navbarRef}>
      {/* <Container> */}
      <div className="wrapper">
        <button
          className="hamburger-btn"
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        >
          <HiMenuAlt2 className="hamburger" />
        </button>
        <Link to="/" className="logo">
          Logo
        </Link>
        {/* <div className="search-wrapper">
            <input type="text" placeholder="Search" />
            <BsSearch />
          </div> */}
        <div className="right-items">
          <button onClick={() => loginWithRedirect()}>Login</button>
          <MdOutlineNotificationsNone className="notification" />
          <div className="avatar">
            <img src="https://i.pravatar.cc/150" alt="person" />
          </div>
        </div>
      </div>
      {/* </Container> */}
    </StyledNavbar>
  );
};
