// Library
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// Components
import reducer, { parsing } from "./ducks/Products";

// STORE
const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  combineReducers({
    productList: reducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(parsing);

export default store;
