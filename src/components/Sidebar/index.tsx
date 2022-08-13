import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { IoMdClose } from "react-icons/io";

import { StyledSidebar } from "./Sidebar.styled";
import { sidebarItems } from "../../data";

interface Props {
  className?: string;
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (arg: boolean) => void;
}

export const Sidebar = ({
  className,
  isSideMenuOpen,
  setIsSideMenuOpen,
}: Props) => {
  const navListRef = useRef<HTMLUListElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const { isAuthenticated, logout } = useAuth0();
  const location = useLocation();


  return isAuthenticated ? (
    <StyledSidebar
      className={`${className} ${isSideMenuOpen ? "active" : ""}`}
      ref={sidebarRef}
    >
      <button className="logo" onClick={() => logout()}>
        Logo
      </button>
      <ul className="nav-list" ref={navListRef}>
        <button
          className="close-btn"
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        >
          <IoMdClose />
        </button>
        {sidebarItems.map((item) => {
          return (
            <li
              className={`${
                location.pathname.includes(item.name.toLocaleLowerCase())
                  ? "active"
                  : ""
              }`}
            >
              <Link to={`/${item.name.toLocaleLowerCase()}`}>
                <item.icon className="menu-icon" />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledSidebar>
  ) : null;
};
