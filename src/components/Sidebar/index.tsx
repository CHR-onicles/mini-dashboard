import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { StyledSidebar } from "./Sidebar.styled";
import { sidebarItems } from "../../data";

interface Props {
  className?: string;
}

export const Sidebar = ({
  className,
}: Props) => {
  const navListRef = useRef<HTMLUListElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const { isAuthenticated, logout } = useAuth0();
  const location = useLocation();


  return isAuthenticated ? (
    <StyledSidebar
      className={`${className}`}
      ref={sidebarRef}
    >
      <button className="logo" onClick={() => logout()}>
        Logo
      </button>
      <ul className="nav-list" ref={navListRef}>
        {sidebarItems.map((item, id) => {
          return (
            <li
            key={id}
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
