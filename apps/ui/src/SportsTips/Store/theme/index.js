import createReducer from "../common/createReducer";
import colors from './colors';
var reducers = {
  CHANGE_THEME: (state, action) => {
    return {
        ...colors[action.theme]
    };
  }
};

const initialState = colors["light"];

export default createReducer(initialState, reducers);
