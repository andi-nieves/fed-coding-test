/** store.js */
import rootSaga from "./sagas";
import reducers from "./modules/reducers";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { createStore, compose, applyMiddleware } from "redux";

const history = require('history').createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

export { history };

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

/** Create middlewares for redux */
let middlewares = applyMiddleware(sagaMiddleware);

/** Create redux store */
const store = createStore(reducers, compose(middlewares));

const persistor = persistStore(store, null, () => store.getState());

/** run saga watchers */
sagaMiddleware.run(rootSaga);

export { store, persistor };
