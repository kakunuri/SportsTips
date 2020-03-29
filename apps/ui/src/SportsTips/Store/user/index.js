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
  game:"Cricket",
  name:"Guest"
};

export default createReducer(initialState, reducers);
