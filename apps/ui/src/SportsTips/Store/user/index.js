import createReducer from "../common/createReducer";

var reducers = {
  LOGIN: (state, action) => {
    return {
      ...action.userDetails
    };
  },
  LOGOUT: (state, action) => {
    return { };
  }
};

const initialState = {
  theme:"light"
};

export default createReducer(initialState, reducers);
