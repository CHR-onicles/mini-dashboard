import { IoMdClose } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsGraphUp, BsCart } from "react-icons/bs";
import { StyledSidebar } from "./Sidebar.styled";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

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

  useEffect(() => {
    if (navListRef.current) {
      const listItems = navListRef.current.querySelectorAll("li");
      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          listItems.forEach((elem) => elem.classList.remove("active"));
          item.classList.add("active");
        });
      });
    }
  }, []);

  return (
    <StyledSidebar className={`${className} ${isSideMenuOpen ? "active" : ""}`}>
      <ul className="nav-list" ref={navListRef}>
        <button
          className="close-btn"
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        >
          <IoMdClose />
        </button>
        <li className="active">
          <Link to="/">
            <AiOutlineHome className="menu-icon" />
            Home
          </Link>
        </li>
        <li>
          {/* <Link to="#"> */}
          <BsGraphUp className="menu-icon" />
          Analytics
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="#"> */}
          <BsGraphUp className="menu-icon" /> Sales
          {/* </Link> */}
        </li>
        <li>
          <Link to="/users">
            <IoPersonOutline className="menu-icon" /> Users
          </Link>
        </li>
        <li>
          {/* <Link to="#"> */}
          <BsCart className="menu-icon" /> Products
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="#"> */}
          <BsGraphUp className="menu-icon" /> Transactions
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="#"> */}
          <BsGraphUp className="menu-icon" /> Reports
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="#"> */}
          <AiOutlineMail className="menu-icon" /> Mail
          {/* </Link> */}
        </li>
      </ul>
    </StyledSidebar>
  );
};
