import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import testReducer from "./test";

const persistConfig = {
  key: "primary",
  storage
};

const appReducers = persistCombineReducers(persistConfig, {
  testReducer
  //... add more reducers here
});

export default (state, action) => {
  // when logout return an empty state and delete localstorage
  if (action.type === "@Auth/PURGE_STORE") {
    storage.removeItem("persist:primary");
    state = undefined;
  }
  return appReducers(state, action);
};
