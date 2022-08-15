import { TAction, ActionType, TReducerState, TIdPayloadAction, TUserPayloadAction } from "../types";

export const userReducer = (
  state: TReducerState,
  action: TAction
): TReducerState => {
  // const { type, payload } = action;

  switch (action.type) {
    case ActionType.CreateUser:
      return { users: [...state.users, (action as TUserPayloadAction).payload] };

    case ActionType.DeleteUser:
      return {
        users: [...state.users.filter((user) => user.id !== (action as TIdPayloadAction).payload)],
      };

    case ActionType.updateUser:
      const payload = (action as TUserPayloadAction).payload;
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
