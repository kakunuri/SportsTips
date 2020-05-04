import createReducer from "../common/createReducer";

var reducers = {
  BOOKMAKER: (state, action) => {
    return { ...state, bookmaker: action.payload };
  },
};

const initialState = {
  bookmaker: [],
  news: [],
  carousel: [],
  upcomingmatches: [],
  sportsIcons: [],
  socialNetworking: [],
};

export default createReducer(initialState, reducers);
