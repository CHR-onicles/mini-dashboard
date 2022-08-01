import { StyledTable } from "./Table.styled";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import { useState } from "react";

const dummyData: {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}[] = [
  {
    id: 0,
    firstName: "Steve",
    lastName: "Rogers",
    age: 26,
  },
  {
    id: 1,
    firstName: "Peter",
    lastName: "Parker",
    age: 21,
  },
  {
    id: 2,
    firstName: "Tony",
    lastName: "Stark",
    age: 46,
  },
  {
    id: 3,
    firstName: "Bruce",
    lastName: "Banner",
    age: 50,
  },
];

const columns: any = [
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
  const [data, setData] = useState(dummyData);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

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
                <td>
                  <Link to={`/user/${row.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(row.cells[0].value)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
};
