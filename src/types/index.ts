export type TUser = {
  id: number;
  username: string;
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  role: string;
  address: string;
};

export type TUserContext = {
  users: TUser[];
  createUser: (user: TUser) => void;
  updateUser: (user: TUser) => void;
  deleteUser: (user: TUser) => void;
};

export enum ActionType {
  CreateUser = "CREATE_USER",
  updateUser = "UPDATE_USER",
  DeleteUser = "DELETE_USER",
}

export type TUserPayloadAction = {
  type: ActionType;
  payload: TUser;
};

export type TIdPayloadAction = {
  type: ActionType;
  payload: number;
};

export type TAction = TUserPayloadAction | TIdPayloadAction;

export type TReducerState = {
  users: TUser[];
};
