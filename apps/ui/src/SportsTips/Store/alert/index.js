import createReducer from "../common/createReducer";

var reducers = {
  ALERT: (state, action) => {
    return {
      text: action.text,
      showAlert: true
    };
  },
  CLOSE_ALERT: (state, action) => {
    return { 
        text: "", 
        showAlert: false 
    };
  }
};

const initialState = {
  text: "",
  showAlert: false
};

export default createReducer(initialState, reducers);
