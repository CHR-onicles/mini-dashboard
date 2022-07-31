import { Table } from "../../components/Table";
import { StyledUserList } from "./UserList.styled";

interface Props {
  className?: string;
}
export const UserList = ({ className }: Props) => {
  return (
    <StyledUserList className={className}>
      <p>userlist</p>
      <Table />
    </StyledUserList>
  );
};
