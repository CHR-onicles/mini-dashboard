import { HiMenuAlt2 } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
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
          <div className="avatar"></div>
        </div>
      </Container>
    </StyledNavbar>
  );
};
