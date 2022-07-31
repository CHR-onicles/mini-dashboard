import { StyledTable } from "./Table.styled";
import { useTable } from "react-table";

const data: {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}[] = [
  {
    id: 1,
    firstName: "Steve",
    lastName: "Rogers",
    age: 26,
  },
  {
    id: 2,
    firstName: "Peter",
    lastName: "Parker",
    age: 21,
  },
  {
    id: 3,
    firstName: "Tony",
    lastName: "Stark",
    age: 46,
  },
  {
    id: 4,
    firstName: "Bruce",
    lastName: "Banner",
    age: 50,
  },
];

const columns: any =  [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Age",
    accessor: "age",
  },
];


export const Table = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
};
