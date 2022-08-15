import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { StyledTable } from "./Table.styled";
import { userContext } from "../../contexts/userContext";
import { TUserContext } from "../../types";

// const dummyData = [
//   {
//     id: 0,
//     firstName: "Steve",
//     lastName: "Rogers",
//     age: 26,
//   },
//   {
//     id: 1,
//     firstName: "Peter",
//     lastName: "Parker",
//     age: 21,
//   },
//   {
//     id: 2,
//     firstName: "Tony",
//     lastName: "Stark",
//     age: 46,
//   },
//   {
//     id: 3,
//     firstName: "Bruce",
//     lastName: "Banner",
//     age: 50,
//   },
// ];

// const columns: any = [
//   {
//     Header: "ID",
//     accessor: "id",
//   },
//   {
//     Header: "First Name",
//     accessor: "firstName",
//   },
//   {
//     Header: "Last Name",
//     accessor: "lastName",
//   },
//   {
//     Header: "Age",
//     accessor: "age",
//   },
// ];

interface Props {
  userData: {
    id: number;
    username: string;
    fullName: string;
    gender: string;
    // phone: string;
    // email: string;
    role: string;
    // dateCreated: Date;
  }[];
  columns: any[];
}

export const Table = ({ userData, columns }: Props) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const data = userData;
  const { deleteUser } = useContext(userContext) as TUserContext;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  useEffect(() => {
    if (tableRef.current) {
      const dataCells = tableRef.current.querySelectorAll(".data-cell");
      dataCells.forEach((cell) => {
        if (cell.textContent && cell.textContent.length > 15) {
          cell.textContent =
            cell.textContent.slice(0, cell.textContent.length - 2) + "...";
        }
      });
    }
  }, []);

  return (
    <StyledTable>
      <table {...getTableProps()} ref={tableRef}>
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
                    <td {...cell.getCellProps()}>
                      <p className="data-cell" title={cell.value}>
                        {cell.render("Cell")}
                      </p>
                    </td>
                  );
                })}
                <td>
                  <Link to={`/users/${row.cells[0].value}`}>
                    <button title="Edit">
                      <FiEdit3 />
                    </button>
                  </Link>
                  <button
                    title="Delete"
                    onClick={() => deleteUser(row.cells[0].value)}
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
};
