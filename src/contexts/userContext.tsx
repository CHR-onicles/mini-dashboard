import { createContext, ReactNode, useReducer } from "react";
import { userData } from "../data";
import { TUserContext, TUser, ActionType } from "../types";
import { userReducer } from "./userReducer";

export const userContext = createContext<TUserContext | null>(null);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const initialReducerState = {
    users: [...userData],
  };

  const [state, dispatch] = useReducer(userReducer, initialReducerState);

  const createUser = (newUser: TUser) => {
    console.log("create action:", state.users);
    dispatch({ type: ActionType.CreateUser, payload: newUser });
  };

  const updateUser = (userToUpdate: TUser) => {
    dispatch({ type: ActionType.updateUser, payload: userToUpdate });
  };

  const deleteUser = (userToDelete: TUser) => {
    dispatch({ type: ActionType.DeleteUser, payload: userToDelete });
  };

  return (
    <userContext.Provider
      value={{ users: state.users, createUser, deleteUser, updateUser }}
    >
      {children}
    </userContext.Provider>
  );
};
