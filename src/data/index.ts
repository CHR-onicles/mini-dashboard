import { TUser } from "../types";

export const columns: any = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Username",
    accessor: "username",
  },
  {
    Header: "Full Name",
    accessor: "fullName",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  // {
  //   Header: "Phone",
  //   accessor: "phone",
  // },
  // {
  //   Header: "Email",
  //   accessor: "email",
  // },
  {
    Header: "Role",
    accessor: "role",
  },
  // {
  //   Header: "Date Created",
  //   accessor: "dateCreated",
  // }
];

export const userData: TUser[] = [
  {
    id: 1,
    username: "Hulk",
    fullName: "Bruce Banner",
    gender: "male",
    phone: "+233000000000",
    email: "brucebanner@gmail.com",
    role: "Software Engineer",
    address: "New York, USA",
    // dateCreated: new Date(2020, 1, 1),
  },
  {
    id: 2,
    username: "Captain_America",
    fullName: "Steve Rogers",
    gender: "male",
    phone: "+233111111111",
    email: "steverogers@gmail.com",
    role: "Frontend Engineer",
    address: "California, USA",
    // dateCreated: new Date(2021, 10, 10),
  },
  {
    id: 3,
    username: "Iron_man",
    fullName: "Tony Stark",
    gender: "male",
    phone: "+233222222222",
    email: "tonystark@gmail.com",
    role: "Backend Engineer",
    address: "Arizona, USA",
    // dateCreated: new Date(2021, 5, 3),
  },
  {
    id: 4,
    username: "Black_widow",
    fullName: "Natasha Romanoff",
    gender: "female",
    phone: "+233333333333",
    email: "natasharom@gmail.com",
    role: "Product Designer",
    address: "New Delhi, India",
    // dateCreated: new Date(2022, 1, 11),
  },
  {
    id: 5,
    username: "Spiderman",
    fullName: "Peter Parker",
    gender: "male",
    phone: "+233444444444",
    email: "peterparker@gmail.com",
    role: "UI/UX Designer",
    address: "Accra, Ghana",
    // dateCreated: new Date(2022, 3, 6),
  },
];
