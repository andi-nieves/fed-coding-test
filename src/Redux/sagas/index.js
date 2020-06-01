/** rootSaga.js */
import { all } from "redux-saga/effects";
import {
  loginWatcherSaga
  // import other watchers from this file
} from "./test";
// import watchers from other files
export default function* rootSaga() {
  yield all([
    loginWatcherSaga()
    // add other watchers to the array
  ]);
}
