import { UPDATE_USERNAME } from "../actions/users.actions";

const initialState = {
  username: "Hadriel",
};

export const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return { ...state, username: action.username };
    }

    default:
      return state;
  }
};
