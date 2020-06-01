import { createActions, createReducer } from "reduxsauce";

/** reducers.js */
const initialState = {
  profile: {},
  authenticated: false
};

const { Types, Creators } = createActions(
  {
    login: ["data"],
    updateProfile: ["data"]
  },
  { prefix: "@Auth/" }
);

export { Types, Creators };

export default createReducer(initialState, {
  [Types.LOGIN]: state => {
    return {
      ...state,
      authenticated: !state.authenticated
    };
  }
});
