import { useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BsFillCaretDownFill } from "react-icons/bs";

// import { BsSearch } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { StyledNavbar } from "./Navbar.styled";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return isAuthenticated ? (
    <StyledNavbar ref={navbarRef}>
      <div className="wrapper">
        <div className="left-items">
          <p>Hello, {user?.name}</p>
          {/* <div className="search-wrapper">
            <input type="text" placeholder="Search" />
            <BsSearch /> */}
          {/* </div> */}
        </div>
        <div className="right-items">
          <MdOutlineNotificationsNone className="notification" />
          <button
            className="profile-menu"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <div className="avatar">
              <img src="https://i.pravatar.cc/150" alt="person" />
            </div>
            <BsFillCaretDownFill
              className={`${isProfileMenuOpen ? "open" : ""}`}
            />
            <ul className={`drop-down ${isProfileMenuOpen ? "open" : ""}`}>
              <li className="drop-down-item">
                <Link to="#">Profile</Link>
              </li>
              <li className="drop-down-item">
                <Link to="#">Settings</Link>
              </li>
              <li className="drop-down-item">
                <button onClick={() => logout()}>Logout</button>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </StyledNavbar>
  ) : null;
};
