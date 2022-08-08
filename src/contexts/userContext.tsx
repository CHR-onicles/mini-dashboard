import { createContext, ReactNode, useState } from "react";
import { userData } from "../data";
import { TUserContext, TUser } from "../types";

export const userContext = createContext<TUserContext | null>(null);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<TUser[]>(userData);

  const createUser = (newUser: TUser) => {
    setUsers([...users, newUser]);
  };

  const updateUser = (userToUpdate: TUser) => {
    const newUsers = users.filter((user) => {
      if (user.id === userToUpdate.id) {
        user.email = userToUpdate.email || user.email;
        user.username = userToUpdate.username || user.username;
        user.fullName = userToUpdate.fullName || user.fullName;
        user.gender = userToUpdate.gender || user.gender;
        user.phone = userToUpdate.phone || user.phone;
        user.role = userToUpdate.role || user.role;
      }
      return user;
    });
    setUsers(newUsers);
  };

  const deleteUser = (userToDelete: TUser) => {
    const newUsers = users.filter((user) => user.id !== userToDelete.id);
    setUsers(newUsers);
  };

  return (
    <userContext.Provider value={{ users, createUser, deleteUser, updateUser }}>
      {children}
    </userContext.Provider>
  );
};
