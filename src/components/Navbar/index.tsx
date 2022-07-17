import { HiMenuAlt2 } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { StyledNavbar } from "./Navbar.styled";
import { Container } from "../../styles/components/Container.styled";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <div className="wrapper">
          <HiMenuAlt2 className="hamburger" />
          <div className="search-wrapper">
            <input type="text" placeholder="Search" />
            <BsSearch />
          </div>
          <div className="right-icons">
            <MdOutlineNotificationsNone className="notification" />
            <div className="avatar">
              <img src="https://i.pravatar.cc/150" alt="person" />
            </div>
          </div>
        </div>
      </Container>
    </StyledNavbar>
  );
};
