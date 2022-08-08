import { Table } from "../../components";
import { StyledUserList } from "./UserList.styled";
import { columns } from "../../data";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { TUserContext } from "../../types";


interface Props {
  className?: string;
}
export const UserList = ({ className }: Props) => {
  const {users} = useContext(userContext) as TUserContext;

  return (
    <StyledUserList className={className}>
      <h2>All Users</h2>
      <Table userData={users} columns={columns} />
    </StyledUserList>
  );
};
