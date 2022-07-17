import { StyledSidebar } from "./Sidebar.styled";

interface Props {
  className?: string;
}
export const Sidebar = ({ className }: Props) => {
  return (
    <StyledSidebar className={className}>
      {/* <div className="overlay" aria-hidden={true}></div> */}
      <ul className="nav-list">
        <li>Home</li>
        <li>Analytics</li>
        <li>Sales</li>
        <li>Users</li>
        <li>Products</li>
        <li>Transactions</li>
        <li>Reports</li>
        <li>Mail</li>
      </ul>
    </StyledSidebar>
  );
};
