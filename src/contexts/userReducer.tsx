import { Action, ActionType, ReducerState } from "../types";

export const userReducer = (
  state: ReducerState,
  action: Action
): ReducerState => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.CreateUser:
      return { users: [...state.users, payload] };

    case ActionType.DeleteUser:
      return {
        users: [...state.users.filter((user) => user.id !== payload.id)],
      };

    case ActionType.updateUser:
      return {
        users: [
          ...state.users.filter((user) => {
            if (user.id === payload.id) {
              user.email = payload.email || user.email;
              user.username = payload.username || user.username;
              user.fullName = payload.fullName || user.fullName;
              user.gender = payload.gender || user.gender;
              user.phone = payload.phone || user.phone;
              user.role = payload.role || user.role;
              user.address = payload.address || user.address;
            }
            return user;
          }),
        ],
      };

    default:
      return state;
  }
};
