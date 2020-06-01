import { takeLatest } from "redux-saga/effects";
import { Types } from "../modules/test";

function* loginEffectSaga(action) {
  try {
    yield console.log("test effects saga");
  } catch (e) {}
}
/**
 * saga watcher that is triggered when dispatching action of type
 * 'LOGIN_WATCHER'
 */
export function* loginWatcherSaga() {
  yield takeLatest(Types.LOGIN, loginEffectSaga);
}
