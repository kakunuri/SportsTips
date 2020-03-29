import createReducer from "../common/createReducer";

var reducers = {
  SHOW_LOADER: (state, action) => {
    return {
      text: action.text,
      display: true
    };
  },
  HIDE_LOADER: (state, action) => {
    return { 
        text: "", 
        display: false 
    };
  }
};

const initialState = {
  text: "",
  display: false
};

export default createReducer(initialState, reducers);
