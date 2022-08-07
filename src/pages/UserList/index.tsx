import { Table } from "../../components";
import { StyledUserList } from "./UserList.styled";
import { userData, columns } from "../../data";


interface Props {
  className?: string;
}
export const UserList = ({ className }: Props) => {
  return (
    <StyledUserList className={className}>
      <h2>All Users</h2>
      <Table userData={userData} columns={columns} />
    </StyledUserList>
  );
};
