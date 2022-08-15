import { Table } from "../../components";
import { StyledUserList } from "./UserList.styled";
import { columns } from "../../data";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { TUserContext } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}
export const UserList = ({ className }: Props) => {
  const { users } = useContext(userContext) as TUserContext;

  return (
    <StyledUserList className={className}>
      <div className="wrapper">
        <h2>All Users</h2>
        <Link to="/users/newUser">Create User</Link>
      </div>
      <Table userData={users} columns={columns} />
    </StyledUserList>
  );
};
